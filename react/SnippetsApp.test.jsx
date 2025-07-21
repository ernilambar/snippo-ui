import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import SnippetsApp from './SnippetsApp';

// Mock clipboard
Object.assign(navigator, {
  clipboard: {
    writeText: vi.fn().mockResolvedValue(),
  },
});

// Helper to flush promises
const flushPromises = () => new Promise(setImmediate);

// Mock API
const mockApi = {
  getSnippets: vi.fn().mockResolvedValue({
    snippet1: {
      meta: { title: 'Test Snippet' },
      fields: [],
    },
    snippet2: {
      meta: { title: 'With Field' },
      fields: [
        { name: 'name', label: 'Name', placeholder: 'Enter name' },
      ],
    },
  }),
  renderSnippet: vi.fn().mockImplementation((key, data) => {
    if (key === 'snippet2') {
      return Promise.resolve({ output: 'Hello, {{name}}!' });
    }
    return Promise.resolve({ output: 'Hello, World!' });
  }),
};

describe('SnippetsApp', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders select box and snippet options', async () => {
    render(<SnippetsApp api={mockApi} />);
    await waitFor(() => expect(mockApi.getSnippets).toHaveBeenCalled());
    expect(screen.getByText('Select a snippet')).toBeInTheDocument();
    expect(screen.getByText('Test Snippet')).toBeInTheDocument();
    expect(screen.getByText('With Field')).toBeInTheDocument();
  });

  it('renders output when a snippet is selected', async () => {
    render(<SnippetsApp api={mockApi} />);
    await waitFor(() => expect(mockApi.getSnippets).toHaveBeenCalled());
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'snippet1' } });
    await waitFor(() => expect(mockApi.renderSnippet).toHaveBeenCalled());
    expect(screen.getByText('Hello, World!')).toBeInTheDocument();
  });

  it('renders form fields for snippet with fields and updates output', async () => {
    render(<SnippetsApp api={mockApi} />);
    await waitFor(() => expect(mockApi.getSnippets).toHaveBeenCalled());
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'snippet2' } });
    await waitFor(() => expect(mockApi.renderSnippet).toHaveBeenCalledWith('snippet2', {}));
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Alice' } });
    // Wait for output to update
    await waitFor(() => {
      const output = document.querySelector('.snippetsapp-output-text');
      expect(output).not.toBeNull();
      expect(output.textContent).toContain('Hello, Alice!');
    });
  });

  it('shows loading state when rendering', async () => {
    let resolve;
    mockApi.renderSnippet.mockReturnValueOnce(new Promise((r) => { resolve = r; }));
    render(<SnippetsApp api={mockApi} />);
    await waitFor(() => expect(mockApi.getSnippets).toHaveBeenCalled());
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'snippet1' } });
    expect(screen.getByText('Generating snippet...')).toBeInTheDocument();
    resolve({ output: 'Loaded!' });
    await waitFor(() => expect(screen.getByText('Loaded!')).toBeInTheDocument());
  });

  it('shows error message if API fails', async () => {
    mockApi.getSnippets.mockRejectedValueOnce(new Error('API Error'));
    render(<SnippetsApp api={mockApi} />);
    await waitFor(() => expect(screen.getByText('API Error')).toBeInTheDocument());
  });

  it('copies output to clipboard when copy button is clicked', async () => {
    render(<SnippetsApp api={mockApi} />);
    await waitFor(() => expect(mockApi.getSnippets).toHaveBeenCalled());
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'snippet1' } });
    await waitFor(() => expect(mockApi.renderSnippet).toHaveBeenCalled());
    const copyButton = screen.getByRole('button', { name: 'Copy' });
    fireEvent.click(copyButton);
    await waitFor(() => expect(navigator.clipboard.writeText).toHaveBeenCalledWith('Hello, World!'));
    expect(screen.getByRole('button', { name: 'Copied!' })).toBeInTheDocument();
  });
});

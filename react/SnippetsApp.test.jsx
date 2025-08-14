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

  it('renders select box with placeholder', async () => {
    render(<SnippetsApp api={mockApi} />);
    await waitFor(() => expect(mockApi.getSnippets).toHaveBeenCalled());
    expect(screen.getByText('Select a snippet')).toBeInTheDocument();
  });

  it('renders output when a snippet is selected', async () => {
    render(<SnippetsApp api={mockApi} />);
    await waitFor(() => expect(mockApi.getSnippets).toHaveBeenCalled());

    // Click on the select to open dropdown
    const selectInput = screen.getByRole('combobox');
    fireEvent.mouseDown(selectInput);

    // Wait for options to appear and select the first option
    await waitFor(() => {
      const option = screen.getByText('Test Snippet');
      expect(option).toBeInTheDocument();
    });

    const option = screen.getByText('Test Snippet');
    fireEvent.click(option);

    await waitFor(() => expect(mockApi.renderSnippet).toHaveBeenCalled());

    // Check for output content in the output container
    await waitFor(() => {
      const outputContainer = document.querySelector('.snippet-output-text');
      expect(outputContainer).toBeInTheDocument();
      expect(outputContainer.textContent).toContain('Hello, World!');
    });
  });

  it('renders form fields for snippet with fields and updates output', async () => {
    render(<SnippetsApp api={mockApi} />);
    await waitFor(() => expect(mockApi.getSnippets).toHaveBeenCalled());

    // Click on the select to open dropdown
    const selectInput = screen.getByRole('combobox');
    fireEvent.mouseDown(selectInput);

    // Wait for options to appear and select the second option
    await waitFor(() => {
      const option = screen.getByText('With Field');
      expect(option).toBeInTheDocument();
    });

    const option = screen.getByText('With Field');
    fireEvent.click(option);

    await waitFor(() => expect(mockApi.renderSnippet).toHaveBeenCalledWith('snippet2', {}));
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Alice' } });
    // Wait for output to update
    await waitFor(() => {
      const output = document.querySelector('.snippet-output-text');
      expect(output).not.toBeNull();
      expect(output.textContent).toContain('Hello, Alice!');
    });
  });

  it('shows loading state when rendering', async () => {
    let resolve;
    mockApi.renderSnippet.mockReturnValueOnce(new Promise((r) => { resolve = r; }));
    render(<SnippetsApp api={mockApi} />);
    await waitFor(() => expect(mockApi.getSnippets).toHaveBeenCalled());

    // Click on the select to open dropdown
    const selectInput = screen.getByRole('combobox');
    fireEvent.mouseDown(selectInput);

    // Wait for options to appear and select the first option
    await waitFor(() => {
      const option = screen.getByText('Test Snippet');
      expect(option).toBeInTheDocument();
    });

    const option = screen.getByText('Test Snippet');
    fireEvent.click(option);

    expect(screen.getByText('Generating snippet...')).toBeInTheDocument();
    resolve({ output: 'Loaded!' });
    await waitFor(() => {
      const outputContainer = document.querySelector('.snippet-output-text');
      expect(outputContainer).toBeInTheDocument();
      expect(outputContainer.textContent).toContain('Loaded!');
    });
  });

  it('shows error message if API fails', async () => {
    mockApi.getSnippets.mockRejectedValueOnce(new Error('API Error'));
    render(<SnippetsApp api={mockApi} />);
    await waitFor(() => expect(screen.getByText('API Error')).toBeInTheDocument());
  });

  it('copies output to clipboard when copy button is clicked', async () => {
    render(<SnippetsApp api={mockApi} />);
    await waitFor(() => expect(mockApi.getSnippets).toHaveBeenCalled());

    // Click on the select to open dropdown
    const selectInput = screen.getByRole('combobox');
    fireEvent.mouseDown(selectInput);

    // Wait for options to appear and select the first option
    await waitFor(() => {
      const option = screen.getByText('Test Snippet');
      expect(option).toBeInTheDocument();
    });

    const option = screen.getByText('Test Snippet');
    fireEvent.click(option);

    await waitFor(() => expect(mockApi.renderSnippet).toHaveBeenCalled());

    // Wait for the copy button to appear
    await waitFor(() => {
      const copyButton = screen.getByRole('button', { name: 'Copy' });
      expect(copyButton).toBeInTheDocument();
    });

    const copyButton = screen.getByRole('button', { name: 'Copy' });
    fireEvent.click(copyButton);
    await waitFor(() => expect(navigator.clipboard.writeText).toHaveBeenCalledWith('Hello, World!'));
    expect(screen.getByRole('button', { name: 'Copied!' })).toBeInTheDocument();
  });
});

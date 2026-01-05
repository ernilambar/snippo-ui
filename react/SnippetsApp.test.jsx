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
    snippet3: {
      meta: { title: 'Multiple Placeholders' },
      fields: [
        { name: 'name', label: 'Name', placeholder: 'Enter name' },
        { name: 'greeting', label: 'Greeting', placeholder: 'Enter greeting' },
      ],
    },
  }),
  renderSnippet: vi.fn().mockImplementation((key, data) => {
    if (key === 'snippet2') {
      return Promise.resolve({ output: 'Hello, {{name}}!' });
    }
    if (key === 'snippet3') {
      return Promise.resolve({ output: '{{greeting}} {{name}}, {{greeting}} again! Welcome {{name}}.' });
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

  it('replaces all instances of the same placeholder', async () => {
    render(<SnippetsApp api={mockApi} />);
    await waitFor(() => expect(mockApi.getSnippets).toHaveBeenCalled());

    // Click on the select to open dropdown
    const selectInput = screen.getByRole('combobox');
    fireEvent.mouseDown(selectInput);

    // Wait for options to appear and select the snippet with multiple placeholders
    await waitFor(() => {
      const option = screen.getByText('Multiple Placeholders');
      expect(option).toBeInTheDocument();
    });

    const option = screen.getByText('Multiple Placeholders');
    fireEvent.click(option);

    await waitFor(() => expect(mockApi.renderSnippet).toHaveBeenCalledWith('snippet3', {}));

    // Fill in the form fields
    const nameInput = screen.getByLabelText('Name');
    const greetingInput = screen.getByLabelText('Greeting');

    fireEvent.change(nameInput, { target: { value: 'Alice' } });
    fireEvent.change(greetingInput, { target: { value: 'Hello' } });

    // Wait for output to update and verify all instances are replaced
    await waitFor(() => {
      const output = document.querySelector('.snippet-output-text');
      expect(output).not.toBeNull();
      expect(output.textContent).toBe('Hello Alice, Hello again! Welcome Alice.');
    });
  });

  it('replaces multiple instances of same placeholder when only one field is filled', async () => {
    render(<SnippetsApp api={mockApi} />);
    await waitFor(() => expect(mockApi.getSnippets).toHaveBeenCalled());

    // Click on the select to open dropdown
    const selectInput = screen.getByRole('combobox');
    fireEvent.mouseDown(selectInput);

    // Wait for options to appear and select the snippet with multiple placeholders
    await waitFor(() => {
      const option = screen.getByText('Multiple Placeholders');
      expect(option).toBeInTheDocument();
    });

    const option = screen.getByText('Multiple Placeholders');
    fireEvent.click(option);

    await waitFor(() => expect(mockApi.renderSnippet).toHaveBeenCalledWith('snippet3', {}));

    // Fill in only the name field
    const nameInput = screen.getByLabelText('Name');
    fireEvent.change(nameInput, { target: { value: 'Bob' } });

    // Wait for output to update and verify all instances of {{name}} are replaced
    await waitFor(() => {
      const output = document.querySelector('.snippet-output-text');
      expect(output).not.toBeNull();
      // Should have {{greeting}} still as placeholder, but all {{name}} should be replaced
      expect(output.textContent).toContain('Bob');
      expect(output.textContent).toContain('{{greeting}}');
      // Verify name appears in all expected positions
      const nameOccurrences = (output.textContent.match(/Bob/g) || []).length;
      expect(nameOccurrences).toBe(2);
    });
  });

  it('replaces all instances when placeholder appears multiple times in sequence', async () => {
    // Create a custom mock for this specific test
    const customMockApi = {
      ...mockApi,
      getSnippets: vi.fn().mockResolvedValue({
        snippet4: {
          meta: { title: 'Repeated Placeholder' },
          fields: [
            { name: 'word', label: 'Word', placeholder: 'Enter word' },
          ],
        },
      }),
      renderSnippet: vi.fn().mockImplementation((key, data) => {
        if (key === 'snippet4') {
          return Promise.resolve({ output: '{{word}} {{word}} {{word}}' });
        }
        return Promise.resolve({ output: '' });
      }),
    };

    render(<SnippetsApp api={customMockApi} />);
    await waitFor(() => expect(customMockApi.getSnippets).toHaveBeenCalled());

    // Click on the select to open dropdown
    const selectInput = screen.getByRole('combobox');
    fireEvent.mouseDown(selectInput);

    // Wait for options to appear and select the snippet
    await waitFor(() => {
      const option = screen.getByText('Repeated Placeholder');
      expect(option).toBeInTheDocument();
    });

    const option = screen.getByText('Repeated Placeholder');
    fireEvent.click(option);

    await waitFor(() => expect(customMockApi.renderSnippet).toHaveBeenCalledWith('snippet4', {}));

    // Fill in the word field
    const wordInput = screen.getByLabelText('Word');
    fireEvent.change(wordInput, { target: { value: 'test' } });

    // Wait for output to update and verify all three instances are replaced
    await waitFor(() => {
      const output = document.querySelector('.snippet-output-text');
      expect(output).not.toBeNull();
      expect(output.textContent).toBe('test test test');
      // Verify no placeholders remain
      expect(output.textContent).not.toContain('{{word}}');
    });
  });
});

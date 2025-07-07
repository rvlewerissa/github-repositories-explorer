import { render, screen, fireEvent } from '@testing-library/react';
import SearchInput from '../SearchInput';

describe('SearchInput', () => {
  const mockOnSearch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('calls onSearch when form is submitted', () => {
    render(<SearchInput onSearch={mockOnSearch} />);

    const input = screen.getByPlaceholderText('Search GitHub users...');
    fireEvent.change(input, { target: { value: 'testuser' } });
    fireEvent.submit(input.closest('form')!);

    expect(mockOnSearch).toHaveBeenCalledWith('testuser');
  });

  it('calls onSearch when Enter key is pressed', () => {
    render(<SearchInput onSearch={mockOnSearch} />);

    const input = screen.getByPlaceholderText('Search GitHub users...');
    fireEvent.change(input, { target: { value: 'testuser' } });
    fireEvent.keyDown(input, { key: 'Enter' });

    expect(mockOnSearch).toHaveBeenCalledWith('testuser');
  });

  it('disables button when input is empty', () => {
    render(<SearchInput onSearch={mockOnSearch} />);

    const button = screen.getByRole('button', { name: 'Search' });
    expect(button).toBeDisabled();
  });

  it('shows loading state', () => {
    render(<SearchInput onSearch={mockOnSearch} isLoading />);

    expect(
      screen.getByRole('button', { name: 'Searching...' })
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('Search GitHub users...')
    ).toBeDisabled();
  });
});

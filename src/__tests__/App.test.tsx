import { screen, fireEvent, waitFor } from '@testing-library/react';
import { render } from '../test/test-utils';
import App from '../App';

// Mock SkeletonLoader to avoid CSS issues
jest.mock('../shared/components/commons/SkeletonLoader', () => {
  return function MockSkeletonLoader() {
    return <div data-testid="skeleton-loader">Loading...</div>;
  };
});

describe('App', () => {
  it('renders the initial UI', () => {
    render(<App />);
    
    expect(screen.getByText('GitHub User Search')).toBeInTheDocument();
    expect(screen.getByText('A React application for searching GitHub users and their repositories.')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search GitHub users...')).toBeInTheDocument();
  });

  it('performs user search and displays results', async () => {
    render(<App />);
    
    // Type in search input
    const searchInput = screen.getByPlaceholderText('Search GitHub users...');
    fireEvent.change(searchInput, { target: { value: 'testuser' } });
    
    // Submit search
    const searchButton = screen.getByRole('button', { name: 'Search' });
    fireEvent.click(searchButton);
    
    // Check search feedback
    expect(screen.getByText('Showing users for "testuser"')).toBeInTheDocument();
    
    // Wait for loading to complete and results to appear
    await waitFor(() => {
      expect(screen.getByText('testuser')).toBeInTheDocument();
      expect(screen.getByText('testuser2')).toBeInTheDocument();
    });
  });

  it('expands accordion to show repositories', async () => {
    render(<App />);
    
    // Perform search
    const searchInput = screen.getByPlaceholderText('Search GitHub users...');
    fireEvent.change(searchInput, { target: { value: 'testuser' } });
    fireEvent.submit(searchInput.closest('form')!);
    
    // Wait for results
    await waitFor(() => {
      expect(screen.getByText('testuser')).toBeInTheDocument();
    });
    
    // Click on user accordion
    const userAccordion = screen.getByText('testuser');
    fireEvent.click(userAccordion);
    
    // Wait for repositories to load
    await waitFor(() => {
      expect(screen.getByText('test-repo')).toBeInTheDocument();
      expect(screen.getByText('another-repo')).toBeInTheDocument();
    });
  });
});
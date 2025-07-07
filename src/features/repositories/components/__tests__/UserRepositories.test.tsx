import { screen, waitFor } from '@testing-library/react';
import { render } from '@/test/test-utils';
import UserRepositories from '../UserRepositories';

// Mock SkeletonLoader to avoid CSS issues
jest.mock('@/shared/components/commons/SkeletonLoader', () => {
  return function MockSkeletonLoader() {
    return <div data-testid='skeleton-loader'>Loading...</div>;
  };
});

describe('UserRepositories', () => {
  it('shows loading state initially', () => {
    render(<UserRepositories username='testuser' />);
    expect(screen.getByTestId('skeleton-loader')).toBeInTheDocument();
  });

  it('renders repositories from MSW', async () => {
    render(<UserRepositories username='testuser' />);

    // Wait for the loading to finish and repositories to load
    await waitFor(() => {
      expect(document.querySelector('.space-y-4')).not.toBeInTheDocument();
    });

    // Check that repositories are rendered
    await waitFor(() => {
      expect(screen.getByText('test-repo')).toBeInTheDocument();
      expect(screen.getByText('another-repo')).toBeInTheDocument();
    });
  });

  it('shows no repositories message for empty response', async () => {
    render(<UserRepositories username='emptyuser' />);

    await waitFor(() => {
      expect(
        screen.getByText('No repositories found for this user.')
      ).toBeInTheDocument();
    });
  });
});

import { render, screen } from '@testing-library/react';
import RepositoryCard from '../RepositoryCard';

describe('RepositoryCard', () => {
  const defaultProps = {
    title: 'test-repo',
    description: 'A test repository',
    stars: 10,
    url: 'https://github.com/user/test-repo',
  };

  it('renders repository information', () => {
    render(<RepositoryCard {...defaultProps} />);

    expect(screen.getByText('test-repo')).toBeInTheDocument();
    expect(screen.getByText('A test repository')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
  });

  it('displays star count', () => {
    render(<RepositoryCard {...defaultProps} stars={42} />);

    expect(screen.getByText('42')).toBeInTheDocument();
  });
});

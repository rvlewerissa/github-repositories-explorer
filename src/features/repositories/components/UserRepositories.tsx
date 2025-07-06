import RepositoryCard from './RepositoryCard';
import { useUserRepositories } from '../hooks/useUserRepositories';
import SkeletonLoader from '@/shared/components/commons/SkeletonLoader';

interface UserRepositoriesProps {
  username: string;
}

function UserRepositories({ username }: UserRepositoriesProps) {
  const { data: repositories, isLoading: reposLoading, error: reposError } = useUserRepositories(username);

  if (reposLoading) {
    return <SkeletonLoader count={3} />;
  }

  if (reposError) {
    return (
      <p className='text-sm text-red-600'>
        Error loading repositories: {reposError.message}
      </p>
    );
  }

  if (!repositories || repositories.length === 0) {
    return (
      <p className='text-sm text-gray-500'>
        No repositories found for this user.
      </p>
    );
  }

  return (
    <div className="space-y-3">
      {repositories.map((repo) => (
        <RepositoryCard
          key={repo.id}
          title={repo.name}
          description={repo.description}
          stars={repo.stargazers_count}
        />
      ))}
    </div>
  );
}

export default UserRepositories;
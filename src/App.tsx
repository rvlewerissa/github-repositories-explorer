import { useState } from 'react';
import Layout from '@/shared/components/layout/Layout';
import SearchInput from '@/features/user-search/components/SearchInput';
import Accordion from '@/shared/components/commons/Accordion';
import RepositoryCard from '@/features/repositories/components/RepositoryCard';
import { useSearchUsers } from '@/features/user-search/hooks/useSearchUsers';
import SkeletonLoader from '@/shared/components/commons/SkeletonLoader';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const { data: searchResults, isLoading, error } = useSearchUsers(searchQuery);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const repositories = [
    { title: 'react', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', stars: 228000 },
    { title: 'vue', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', stars: 207000 },
    { title: 'angular', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', stars: 95000 },
  ];

  return (
    <Layout>
      <h1 className='mb-4 text-3xl font-bold text-gray-900'>
        GitHub User Search
      </h1>
      <p className='mb-6 text-gray-600'>
        A React application for searching GitHub users and their repositories.
      </p>
      <SearchInput onSearch={handleSearch} isLoading={isLoading} />

      {error && (
        <p className='mt-3 text-sm text-red-600'>
          Error: {error.message}
        </p>
      )}

      {searchQuery && !error && (
        <p className='mt-3 text-sm text-gray-600'>
          Showing users for "{searchQuery}"
        </p>
      )}

      {isLoading && searchQuery && (
        <div className='mt-3'>
          <SkeletonLoader count={5} />
        </div>
      )}

      {!isLoading && (
        <div className='mt-3 space-y-4'>
          {searchResults?.items.map((user) => (
            <Accordion key={user.login} title={user.login}>
              <div className="space-y-3">
                {repositories.map((repo) => (
                  <RepositoryCard
                    key={repo.title}
                    title={repo.title}
                    description={repo.description}
                    stars={repo.stars}
                  />
                ))}
              </div>
            </Accordion>
          ))}
        </div>
      )}
    </Layout>
  );
}

export default App;

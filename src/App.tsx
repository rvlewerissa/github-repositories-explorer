import { useState } from 'react';
import Layout from '@/shared/components/layout/Layout';
import SearchInput from '@/features/user-search/components/SearchInput';
import Accordion from '@/shared/components/commons/Accordion';
import RepositoryCard from '@/features/repositories/components/RepositoryCard';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const users = [
    'octocat',
    'torvalds',
    'gaearon',
    'addyosmani',
    'sindresorhus',
  ];

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
      <SearchInput onSearch={handleSearch} />

      {searchQuery && (
        <p className='mt-3 text-sm text-gray-600'>
          Showing users for "{searchQuery}"
        </p>
      )}

      <div className='mt-3 space-y-4'>
        {users.map((username) => (
          <Accordion key={username} title={username}>
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
    </Layout>
  );
}

export default App;

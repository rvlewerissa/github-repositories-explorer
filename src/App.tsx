import { useState } from 'react';
import Layout from '@/shared/components/layout/Layout';
import SearchInput from '@/features/user-search/components/SearchInput';
import Accordion from '@/shared/components/commons/Accordion';

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
            <p className='text-gray-600 text-sm'>Repositories for {username}</p>
          </Accordion>
        ))}
      </div>
    </Layout>
  );
}

export default App;

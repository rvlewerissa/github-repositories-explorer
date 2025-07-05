
import Layout from '@/shared/components/layout/Layout';
import SearchInput from '@/features/user-search/components/SearchInput';

function App() {
  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
  };

  return (
    <Layout>
      <h1 className="mb-4 text-3xl font-bold text-gray-900">GitHub User Search</h1>
      <p className="mb-6 text-gray-600">
        A React application for searching GitHub users and their repositories.
      </p>
      <SearchInput onSearch={handleSearch} />
    </Layout>
  );
}

export default App;

import { getUserRepositories } from '../getUserRepositories';

describe('getUserRepositories', () => {
  it('fetches repositories successfully for testuser', async () => {
    const repositories = await getUserRepositories('testuser');
    
    expect(repositories).toHaveLength(2);
    expect(repositories[0]).toMatchObject({
      id: 1,
      name: 'test-repo',
      description: 'A test repository',
      stargazers_count: 10,
    });
    expect(repositories[1]).toMatchObject({
      id: 2,
      name: 'another-repo',
      description: 'Another test repository',
      stargazers_count: 5,
    });
  });

  it('returns empty array for user with no repositories', async () => {
    const repositories = await getUserRepositories('emptyuser');
    
    expect(repositories).toEqual([]);
  });
});
import { searchUsers } from '../searchUsers';

describe('searchUsers', () => {
  it('searches users successfully for testuser', async () => {
    const result = await searchUsers('testuser');
    
    expect(result.items).toHaveLength(2);
    expect(result.items[0]).toMatchObject({
      login: 'testuser',
      id: 1,
      avatar_url: 'https://github.com/images/error/testuser_happy.gif',
      html_url: 'https://github.com/testuser',
    });
    expect(result.items[1]).toMatchObject({
      login: 'testuser2',
      id: 2,
      avatar_url: 'https://github.com/images/error/testuser2_happy.gif',
      html_url: 'https://github.com/testuser2',
    });
  });

  it('returns empty items array for no results', async () => {
    const result = await searchUsers('nonexistentuser');
    
    expect(result.items).toEqual([]);
  });
});
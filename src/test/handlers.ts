import { http, HttpResponse } from 'msw';

export const handlers = [
  // Mock GitHub user search API
  http.get('https://api.github.com/search/users', ({ request }) => {
    const url = new URL(request.url);
    const query = url.searchParams.get('q');
    
    if (query === 'testuser') {
      return HttpResponse.json({
        items: [
          {
            login: 'testuser',
            id: 1,
            avatar_url: 'https://github.com/images/error/testuser_happy.gif',
            html_url: 'https://github.com/testuser',
          },
          {
            login: 'testuser2',
            id: 2,
            avatar_url: 'https://github.com/images/error/testuser2_happy.gif',
            html_url: 'https://github.com/testuser2',
          }
        ]
      });
    }
    
    return HttpResponse.json({ items: [] });
  }),

  // Mock GitHub user repositories API
  http.get('https://api.github.com/users/:username/repos', ({ params }) => {
    const { username } = params;
    
    if (username === 'testuser') {
      return HttpResponse.json([
        {
          id: 1,
          name: 'test-repo',
          description: 'A test repository',
          html_url: 'https://github.com/testuser/test-repo',
          stargazers_count: 10,
        },
        {
          id: 2,
          name: 'another-repo',
          description: 'Another test repository',
          html_url: 'https://github.com/testuser/another-repo',
          stargazers_count: 5,
        }
      ]);
    }
    
    return HttpResponse.json([]);
  }),
];
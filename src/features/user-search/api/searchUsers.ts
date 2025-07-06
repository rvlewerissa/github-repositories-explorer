import { GitHubUserSearchResponse, GitHubErrorResponse } from '@/shared/types/github';
import { GITHUB_API_BASE } from '@/shared/constants/api';

export async function searchUsers(query: string): Promise<GitHubUserSearchResponse> {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/search/users?q=${encodeURIComponent(query)}&per_page=5`);

    if (!response.ok) {
      const errorData: GitHubErrorResponse = await response.json();
      
      if (response.status === 403) {
        throw new Error('GitHub API rate limit exceeded. Please try again later.');
      }
      
      throw new Error(errorData.message || 'Failed to search users');
    }

    const searchResult: GitHubUserSearchResponse = await response.json();
    return searchResult;
  } catch (error) {
    throw new Error('Network error occurred while searching users');
  }
}
import { GitHubRepository, GitHubErrorResponse } from '@/shared/types/github';
import { GITHUB_API_BASE } from '@/shared/constants/api';

export async function getUserRepositories(username: string): Promise<GitHubRepository[]> {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/users/${username}/repos`);

    if (!response.ok) {
      const errorData: GitHubErrorResponse = await response.json();
      
      if (response.status === 403) {
        throw new Error('GitHub API rate limit exceeded. Please try again later.');
      }
      
      if (response.status === 404) {
        throw new Error(`User "${username}" not found.`);
      }
      
      throw new Error(errorData.message || 'Failed to fetch repositories');
    }

    const repositories: GitHubRepository[] = await response.json();
    return repositories;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Network error occurred while fetching repositories');
  }
}
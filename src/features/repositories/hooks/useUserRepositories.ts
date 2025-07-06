import { useQuery } from '@tanstack/react-query';
import { getUserRepositories } from '../api/getUserRepositories';

export function useUserRepositories(username: string) {
  return useQuery({
    queryKey: [`user-repos-${username}`],
    queryFn: () => getUserRepositories(username),
    enabled: !!username.trim(),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}
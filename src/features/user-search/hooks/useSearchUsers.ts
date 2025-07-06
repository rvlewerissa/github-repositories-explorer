import { useQuery } from '@tanstack/react-query';
import { searchUsers } from '../api/searchUsers';

export function useSearchUsers(query: string) {
  return useQuery({
    queryKey: [`users-search-${query}`],
    queryFn: () => searchUsers(query),
    enabled: !!query.trim(),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}
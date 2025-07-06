import { StarIcon } from '@heroicons/react/24/outline';

interface RepositoryCardProps {
  title: string;
  description: string | null;
  stars: number;
  url: string;
}

function RepositoryCard({ title, description, stars, url }: RepositoryCardProps) {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="block rounded-lg border border-gray-200 bg-white p-4 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
          <p className="mt-1 text-sm text-gray-600">{description || 'No description available'}</p>
        </div>
        <div className="flex items-center gap-1 text-sm text-gray-500">
          <StarIcon className="h-4 w-4" />
          {stars}
        </div>
      </div>
    </a>
  );
}

export default RepositoryCard;
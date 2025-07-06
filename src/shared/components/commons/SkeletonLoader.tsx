import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface SkeletonLoaderProps {
  count?: number;
}

function SkeletonLoader({ count = 3 }: SkeletonLoaderProps) {
  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="rounded-lg border border-gray-200 p-4">
          <Skeleton height={20} className="mb-2" />
          <Skeleton height={40} />
        </div>
      ))}
    </div>
  );
}

export default SkeletonLoader;
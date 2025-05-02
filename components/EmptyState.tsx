import { Search } from 'lucide-react';

interface EmptyStateProps {
  message?: string;
  subMessage?: string;
}

const EmptyState = ({ 
  message = "No doctors found", 
  subMessage = "Try adjusting your search filters or try a different search term." 
}: EmptyStateProps) => {
  return (
    <div className="w-full py-12 flex flex-col items-center justify-center text-center">
      <div className="bg-purple-100 p-4 rounded-full mb-4">
        <Search size={32} className="text-purple-600" />
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">{message}</h3>
      <p className="text-gray-500 max-w-md">{subMessage}</p>
    </div>
  );
};

export default EmptyState;
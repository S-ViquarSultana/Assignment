'use client';

import { 
  ChevronLeft, 
  ChevronRight, 
  ChevronsLeft, 
  ChevronsRight 
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ 
  currentPage, 
  totalPages, 
  onPageChange 
}: PaginationProps) => {
  if (totalPages <= 1) return null;

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handleFirst = () => {
    onPageChange(1);
  };

  const handleLast = () => {
    onPageChange(totalPages);
  };

  // Generate page numbers
  const getPageNumbers = () => {
    const MAX_VISIBLE_PAGES = 5;
    let pages = [];
    
    if (totalPages <= MAX_VISIBLE_PAGES) {
      // If total pages is small, show all pages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);
      
      // Calculate the range of pages to show around the current page
      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, currentPage + 1);
      
      // Adjust start and end to show 3 pages in the middle
      if (start === 2) end = Math.min(totalPages - 1, start + 2);
      if (end === totalPages - 1) start = Math.max(2, end - 2);
      
      // Add ellipsis if needed
      if (start > 2) pages.push(-1); // -1 represents an ellipsis
      
      // Add middle pages
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      
      // Add ellipsis if needed
      if (end < totalPages - 1) pages.push(-2); // -2 represents an ellipsis
      
      // Always show last page
      pages.push(totalPages);
    }
    
    return pages;
  };

  return (
    <div className="flex items-center justify-center mt-8 space-x-1">
      {/* First Page */}
      <button
        onClick={handleFirst}
        disabled={currentPage === 1}
        className={cn(
          "flex items-center justify-center p-2 rounded-md transition-colors",
          currentPage === 1
            ? "text-gray-400 cursor-not-allowed"
            : "text-gray-700 hover:bg-gray-100"
        )}
        aria-label="Go to first page"
      >
        <ChevronsLeft size={18} />
      </button>
      
      {/* Previous Page */}
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={cn(
          "flex items-center justify-center p-2 rounded-md transition-colors",
          currentPage === 1
            ? "text-gray-400 cursor-not-allowed"
            : "text-gray-700 hover:bg-gray-100"
        )}
        aria-label="Go to previous page"
      >
        <ChevronLeft size={18} />
      </button>
      
      {/* Page Numbers */}
      {getPageNumbers().map((page, index) => {
        if (page < 0) {
          // Ellipsis
          return (
            <span 
              key={`ellipsis-${index}`} 
              className="w-10 h-10 flex items-center justify-center text-gray-500"
            >
              &hellip;
            </span>
          );
        }
        
        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={cn(
              "w-10 h-10 flex items-center justify-center rounded-md text-sm font-medium transition-colors",
              currentPage === page
                ? "bg-purple-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
            )}
            aria-label={`Go to page ${page}`}
            aria-current={currentPage === page ? "page" : undefined}
          >
            {page}
          </button>
        );
      })}
      
      {/* Next Page */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={cn(
          "flex items-center justify-center p-2 rounded-md transition-colors",
          currentPage === totalPages
            ? "text-gray-400 cursor-not-allowed"
            : "text-gray-700 hover:bg-gray-100"
        )}
        aria-label="Go to next page"
      >
        <ChevronRight size={18} />
      </button>
      
      {/* Last Page */}
      <button
        onClick={handleLast}
        disabled={currentPage === totalPages}
        className={cn(
          "flex items-center justify-center p-2 rounded-md transition-colors",
          currentPage === totalPages
            ? "text-gray-400 cursor-not-allowed"
            : "text-gray-700 hover:bg-gray-100"
        )}
        aria-label="Go to last page"
      >
        <ChevronsRight size={18} />
      </button>
    </div>
  );
};

export default Pagination;
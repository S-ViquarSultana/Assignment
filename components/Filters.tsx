'use client';

import { useState, useEffect, useRef } from 'react';
import { Check, ChevronDown, Filter, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { DoctorFilter } from '@/lib/doctors';

interface FiltersProps {
  onFilterChange: (filters: DoctorFilter) => void;
  initialFilters?: DoctorFilter;
}

const Filters = ({ onFilterChange, initialFilters = {} }: FiltersProps) => {
  const [filters, setFilters] = useState<DoctorFilter>({
    specialization: 'General Physician',
    city: '',
    min_experience: undefined,
    available_today: undefined,
    max_fee: undefined,
    sortBy: 'experience',
    sortOrder: 'desc',
    ...initialFilters
  });

  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [isMoreCitiesOpen, setIsMoreCitiesOpen] = useState(false);
  const prevFiltersRef = useRef<DoctorFilter>(filters);

  const cities = [
    'All Cities',
    'Mumbai',
    'Delhi',
    'Bangalore',
    'Chennai',
    'Hyderabad',
    'Pune',
    'Kolkata',
    'Kochi'
  ];

  const consultationFees = [
    { label: 'Any Fee', value: undefined },
    { label: 'Under ₹500', value: 500 },
    { label: 'Under ₹750', value: 750 },
    { label: 'Under ₹1000', value: 1000 }
  ];

  const experienceRanges = [
    { label: 'Any Experience', value: undefined },
    { label: '5+ Years', value: 5 },
    { label: '10+ Years', value: 10 },
    { label: '15+ Years', value: 15 }
  ];

  const sortOptions = [
    { label: 'Experience: High to Low', sortBy: 'experience', sortOrder: 'desc' },
    { label: 'Experience: Low to High', sortBy: 'experience', sortOrder: 'asc' },
    { label: 'Fee: Low to High', sortBy: 'consultation_fee', sortOrder: 'asc' },
    { label: 'Fee: High to Low', sortBy: 'consultation_fee', sortOrder: 'desc' },
    { label: 'Rating: High to Low', sortBy: 'rating', sortOrder: 'desc' }
  ];

  const handleFilterChange = (newFilters: Partial<DoctorFilter>) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);
  };

  const handleCityChange = (city: string) => {
    handleFilterChange({ city: city === 'All Cities' ? '' : city });
  };

  const handleClearFilters = () => {
    const defaultFilters: DoctorFilter = {
      specialization: 'General Physician',
      city: '',
      min_experience: undefined,
      available_today: undefined,
      max_fee: undefined,
      sortBy: 'experience',
      sortOrder: 'desc'
    };
    setFilters(defaultFilters);
  };

  const getActiveFiltersCount = () => {
    let count = 0;
    if (filters.city) count++;
    if (filters.min_experience !== undefined) count++;
    if (filters.available_today !== undefined) count++;
    if (filters.max_fee !== undefined) count++;
    return count;
  };

  useEffect(() => {
    const filtersChanged = JSON.stringify(filters) !== JSON.stringify(prevFiltersRef.current);
    
    if (filtersChanged) {
      console.log('Filters actually changed:', filters);
      onFilterChange(filters);
      prevFiltersRef.current = filters;
    }
  }, [filters, onFilterChange]);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 mb-6">
      {/* Mobile Filters Trigger */}
      <div className="md:hidden p-4 flex justify-between items-center">
        <button
          className="flex items-center text-gray-700 font-medium"
          onClick={() => setIsFiltersOpen(!isFiltersOpen)}
        >
          <Filter size={18} className="mr-2" />
          Filters
          {getActiveFiltersCount() > 0 && (
            <span className="ml-2 bg-purple-100 text-purple-700 rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {getActiveFiltersCount()}
            </span>
          )}
        </button>

        <div className="relative inline-block text-left">
          <div className="flex items-center">
            <span className="text-sm text-gray-500 mr-2">Sort by:</span>
            <select
              className="text-sm font-medium text-gray-700 bg-transparent border-none focus:outline-none cursor-pointer"
              onChange={(e) => {
                const [sortBy, sortOrder] = e.target.value.split('-');
                handleFilterChange({
                  sortBy: sortBy as 'experience' | 'rating' | 'consultation_fee',
                  sortOrder: sortOrder as 'asc' | 'desc'
                });
              }}
              value={`${filters.sortBy}-${filters.sortOrder}`}
            >
              {sortOptions.map((option) => (
                <option 
                  key={`${option.sortBy}-${option.sortOrder}`} 
                  value={`${option.sortBy}-${option.sortOrder}`}
                >
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Desktop Filters */}
      <div className={cn(
        "md:flex flex-col md:flex-row md:items-center p-4 md:p-5 space-y-4 md:space-y-0 md:space-x-6",
        isFiltersOpen ? "block" : "hidden md:flex"
      )}>
        {/* Filter Header - Mobile Only */}
        <div className="flex justify-between items-center md:hidden mb-4">
          <h2 className="text-lg font-medium">Filters</h2>
          <button 
            onClick={() => setIsFiltersOpen(false)}
            className="text-gray-500"
          >
            <X size={20} />
          </button>
        </div>

        {/* City Filter */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
          <div className="flex flex-wrap gap-2">
            {cities.slice(0, 4).map((city) => (
              <button
                key={city}
                onClick={() => handleCityChange(city)}
                className={cn(
                  "px-3 py-1.5 rounded-full text-sm font-medium transition-colors",
                  (city === 'All Cities' && !filters.city) || filters.city === city
                    ? "bg-purple-100 text-purple-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                )}
              >
                {city}
              </button>
            ))}
            <div className="relative inline-block">
              <button 
                onClick={() => setIsMoreCitiesOpen(!isMoreCitiesOpen)}
                className="px-3 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 flex items-center"
              >
                More <ChevronDown size={14} className="ml-1" />
              </button>
              {isMoreCitiesOpen && (
                <div className="absolute z-10 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-100 py-1">
                  {cities.slice(4).map((city) => (
                    <button
                      key={city}
                      onClick={() => {
                        handleCityChange(city);
                        setIsMoreCitiesOpen(false);
                      }}
                      className={cn(
                        "w-full text-left px-4 py-2 text-sm",
                        filters.city === city
                          ? "bg-purple-50 text-purple-700"
                          : "text-gray-700 hover:bg-gray-50"
                      )}
                    >
                      {city}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Experience Filter */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">Experience</label>
          <select
            className="w-full p-2 border border-gray-300 rounded-md text-sm"
            value={filters.min_experience === undefined ? '' : filters.min_experience}
            onChange={(e) => handleFilterChange({ 
              min_experience: e.target.value ? Number(e.target.value) : undefined 
            })}
          >
            {experienceRanges.map((range) => (
              <option key={range.label} value={range.value || ''}>
                {range.label}
              </option>
            ))}
          </select>
        </div>

        {/* Consultation Fee Filter */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">Consultation Fee</label>
          <select
            className="w-full p-2 border border-gray-300 rounded-md text-sm"
            value={filters.max_fee === undefined ? '' : filters.max_fee}
            onChange={(e) => handleFilterChange({ 
              max_fee: e.target.value ? Number(e.target.value) : undefined 
            })}
          >
            {consultationFees.map((fee) => (
              <option key={fee.label} value={fee.value || ''}>
                {fee.label}
              </option>
            ))}
          </select>
        </div>

        {/* Available Today Filter */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">Availability</label>
          <div className="flex items-center">
            <button
              onClick={() => handleFilterChange({ 
                available_today: filters.available_today === true ? undefined : true 
              })}
              className={cn(
                "flex items-center py-2 px-3 rounded-l-md border text-sm font-medium",
                filters.available_today === true
                  ? "bg-purple-100 border-purple-600 text-purple-700"
                  : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
              )}
            >
              {filters.available_today === true && <Check size={16} className="mr-1" />}
              Available Today
            </button>
            <button
              onClick={() => handleFilterChange({ available_today: undefined })}
              className={cn(
                "flex items-center py-2 px-3 rounded-r-md border-t border-r border-b text-sm font-medium",
                filters.available_today === undefined
                  ? "bg-purple-100 border-purple-600 text-purple-700"
                  : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
              )}
            >
              {filters.available_today === undefined && <Check size={16} className="mr-1" />}
              Any Day
            </button>
          </div>
        </div>

        {/* Sort By - Desktop Only */}
        <div className="hidden md:block flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
          <select
            className="w-full p-2 border border-gray-300 rounded-md text-sm"
            onChange={(e) => {
              const [sortBy, sortOrder] = e.target.value.split('-');
              handleFilterChange({
                sortBy: sortBy as 'experience' | 'rating' | 'consultation_fee',
                sortOrder: sortOrder as 'asc' | 'desc'
              });
            }}
            value={`${filters.sortBy}-${filters.sortOrder}`}
          >
            {sortOptions.map((option) => (
              <option 
                key={`${option.sortBy}-${option.sortOrder}`} 
                value={`${option.sortBy}-${option.sortOrder}`}
              >
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Clear Filters */}
        <div className="flex-none">
          <button
            onClick={handleClearFilters}
            className="text-purple-600 font-medium text-sm hover:text-purple-700 flex items-center mt-6"
          >
            <X size={16} className="mr-1" />
            Clear Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Check, Clock, FileText, Phone, Video } from 'lucide-react';
import Header from '@/components/Header';
import DoctorCard from '@/components/DoctorCard';
import Filters from '@/components/Filters';
import Pagination from '@/components/Pagination';
import Breadcrumb from '@/components/Breadcrumb';
import EmptyState from '@/components/EmptyState';
import { getDoctors } from '@/lib/doctors';
import type { Doctor, DoctorFilter } from '@/lib/doctors';

export default function DoctorListingPage() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<DoctorFilter>({
    specialization: 'General Physician',
    page: 1,
    limit: 10,
  });
  const [pagination, setPagination] = useState({
    total: 0,
    pages: 1,
    page: 1,
    limit: 10,
  });

  const handlePageChange = (page: number) => {
    console.log('Page changed to:', page);
    setFilters(prev => {
      // Avoid overriding page reset if it's already been forced to 1
      if (prev.page === page) return prev;
      return { ...prev, page };
    });
  };

  const handleFilterChange = (newFilters: DoctorFilter) => {
    console.log('Filter change triggered:', newFilters);
    
    setFilters(prev => {
      const keysToWatch = ['city', 'min_experience', 'max_fee', 'available_today', 'sortBy', 'sortOrder'];
      
      const filtersChanged = keysToWatch.some(
        key => newFilters[key as keyof DoctorFilter] !== prev[key as keyof DoctorFilter]
      );

      const pageReset = filtersChanged ? 1 : prev.page;

      return {
        ...prev,
        ...newFilters,
        page: pageReset,
      };
    });
  };

  // Add render logging
  console.log('[Render] Current page:', filters.page);

  // Fetch doctors based on filters
  useEffect(() => {
    const fetchDoctors = async () => {
      setLoading(true);
      setError(null);
      
      try {
        console.log('Fetching doctors with filters:', filters);
        const result = await getDoctors(filters);
        setDoctors(result.doctors || []);
        setPagination(result.pagination || {
          total: 0,
          pages: 1,
          page: filters.page || 1,
          limit: filters.limit || 10,
        });
      } catch (error: any) {
        console.error('Error fetching doctors:', error);
        setError(error.message || 'Failed to load doctors. Please try again later.');
        setDoctors([]);
      } finally {
        setLoading(false);
      }
    };
    
    fetchDoctors();
  }, [filters]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-700 to-purple-500 text-white py-10 md:py-16">
          <div className="container mx-auto px-4">
            <Breadcrumb 
              items={[
                { label: 'Home', href: '/' },
                { label: 'Doctors', href: '/doctors' },
                { label: 'General Physician & Internal Medicine' }
              ]} 
            />
            
            <div className="mt-6 md:flex md:items-center md:justify-between">
              <div className="md:w-2/3">
                <h1 className="text-2xl md:text-3xl font-bold mb-4">
                  General Physician & Internal Medicine
                </h1>
                <p className="text-purple-100 text-sm md:text-base">
                  General Physicians provide primary healthcare and manage various health conditions. 
                  They diagnose and treat common illnesses, provide preventive care, and refer to specialists when needed.
                </p>
                
                <div className="mt-6 flex flex-wrap gap-3">
                  <div className="flex items-center bg-white bg-opacity-10 rounded-full px-4 py-2 text-sm">
                    <Check size={16} className="mr-2" />
                    Verified Doctors
                  </div>
                  <div className="flex items-center bg-white bg-opacity-10 rounded-full px-4 py-2 text-sm">
                    <Video size={16} className="mr-2" />
                    Video Consultation
                  </div>
                  <div className="flex items-center bg-white bg-opacity-10 rounded-full px-4 py-2 text-sm">
                    <Phone size={16} className="mr-2" />
                    Audio Consultation
                  </div>
                </div>
              </div>
              
              <div className="hidden md:block md:w-1/3">
                <div className="relative w-full h-48">
                  <Image 
                    src="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="General Physician"
                    fill
                    className="object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Banner */}
        <section className="container mx-auto px-4 -mt-6">
          <div className="bg-white rounded-lg shadow-sm p-5 flex items-center">
            <div className="mr-4 text-purple-600">
              <FileText size={24} />
            </div>
            <div>
              <h2 className="text-lg font-medium text-gray-900">Common Questions about General Physicians</h2>
              <p className="text-gray-600 text-sm mt-1">
                Learn about when to consult, common conditions treated, and what to expect from a GP visit.
              </p>
            </div>
            <Link 
              href="#"
              className="ml-auto text-purple-600 font-medium text-sm hover:text-purple-700"
            >
              Learn More
            </Link>
          </div>
        </section>
        
        {/* Main Content - Doctor Listing */}
        <section className="container mx-auto px-4 py-8">
          {/* Availability Info */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              {loading ? 'Loading doctors...' : `${pagination.total} Doctors available`}
            </h2>
            <div className="flex items-center text-sm text-gray-500">
              <Clock size={16} className="mr-2" />
              Last updated 30 mins ago
            </div>
          </div>
          
          {/* Filters */}
          <Filters onFilterChange={handleFilterChange} initialFilters={filters} />
          
          {/* Doctor List */}
          <div className="space-y-4">
            {loading ? (
              // Loading State
              Array.from({ length: 3 }).map((_, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg shadow-sm border border-gray-100 h-64 animate-pulse"
                />
              ))
            ) : error ? (
              // Error State
              <div className="bg-red-50 text-red-700 p-4 rounded-md">
                {error}
              </div>
            ) : doctors.length === 0 ? (
              // Empty State
              <EmptyState />
            ) : (
              // Doctor Cards
              doctors.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))
            )}
          </div>
          
          {/* Pagination */}
          {!loading && !error && doctors.length > 0 && (
            <Pagination
              currentPage={pagination.page}
              totalPages={pagination.pages}
              onPageChange={handlePageChange}
            />
          )}
        </section>
      </main>
    </div>
  );
}
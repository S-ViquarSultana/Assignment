import Image from 'next/image';
import { Star, MapPin, Clock, Calendar, ThumbsUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Doctor } from '@/lib/doctors';

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard = ({ doctor }: DoctorCardProps) => {
  const {
    name,
    specialization,
    experience,
    rating,
    city,
    consultation_fee,
    available_today,
    image_url,
    languages,
    qualifications
  } = doctor;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden transition-shadow hover:shadow-md">
      <div className="flex flex-col md:flex-row">
        {/* Doctor's Image and Availability */}
        <div className="relative w-full md:w-48 h-48 md:h-auto">
          <div className="w-full h-full">
            <Image 
              src={image_url || 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg'} 
              alt={name}
              className="object-cover" 
              fill
              sizes="(max-width: 768px) 100vw, 192px"
            />
          </div>
          
          {available_today && (
            <div className="absolute top-4 left-0 bg-green-500 text-white px-3 py-1 text-xs font-medium">
              Available Today
            </div>
          )}
        </div>

        {/* Doctor's Information */}
        <div className="flex-1 p-4 md:p-5 flex flex-col">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start">
            <div>
              <h2 className="text-lg font-bold text-gray-900">{name}</h2>
              <p className="text-gray-600 text-sm">{specialization}</p>
              
              {qualifications && (
                <p className="text-gray-500 text-xs mt-1">{qualifications}</p>
              )}
            </div>
            
            <div className="flex items-center mt-2 md:mt-0">
              <div className="bg-green-50 text-green-700 rounded-full px-2 py-0.5 text-sm font-medium flex items-center">
                <Star size={14} className="fill-current text-yellow-400 mr-1" />
                {rating}
              </div>
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex items-center text-gray-600 text-sm">
              <ThumbsUp size={16} className="text-purple-500 mr-2" />
              <span>{experience} Years Experience</span>
            </div>
            
            {city && (
              <div className="flex items-center text-gray-600 text-sm">
                <MapPin size={16} className="text-gray-400 mr-2" />
                <span>{city}</span>
              </div>
            )}
            
            {languages && (
              <div className="flex items-center text-gray-600 text-sm">
                <Clock size={16} className="text-gray-400 mr-2" />
                <span>Speaks: {languages}</span>
              </div>
            )}
            
            <div className="flex items-center text-gray-600 text-sm">
              <Calendar size={16} className="text-gray-400 mr-2" />
              <span>Next Available: Today</span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <p className="text-gray-500 text-xs">Consultation Fee</p>
              <p className="text-lg font-bold text-gray-900">₹{consultation_fee}</p>
            </div>
            
            <div className="flex space-x-3 mt-3 md:mt-0">
              <button className="bg-white border border-purple-600 text-purple-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-50 transition-colors">
                View Profile
              </button>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
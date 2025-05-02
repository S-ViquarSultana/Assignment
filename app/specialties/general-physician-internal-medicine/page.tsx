import { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Best General Physicians & Internal Medicine Doctors | Apollo 247',
  description: 'Consult with the best General Physicians and Internal Medicine specialists. Book appointments online, view doctor profiles, fees, and availability.',
  keywords: 'general physician, internal medicine, doctors, Apollo 247, book doctor appointment, online doctor consultation',
  openGraph: {
    title: 'Best General Physicians & Internal Medicine Doctors | Apollo 247',
    description: 'Consult with the best General Physicians and Internal Medicine specialists. Book appointments online, view doctor profiles, fees, and availability.',
    url: 'https://www.apollo247.com/specialties/general-physician-internal-medicine',
    siteName: 'Apollo 247',
    images: [
      {
        url: 'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg',
        width: 1200,
        height: 630,
        alt: 'General Physicians at Apollo 247',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function GeneralPhysicianPage() {
  return (
    <>
      <DoctorListingPage />
    </>
  );
}

// We use a client component to handle the data fetching and filtering
import DoctorListingPage from './doctor-listing';
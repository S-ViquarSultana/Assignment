export type Doctor = {
  id: number;
  name: string;
  specialization: string;
  experience: number;
  rating: number;
  city: string;
  consultation_fee: number;
  available_today: boolean;
  image_url?: string;
  languages?: string;
  qualifications?: string;
  created_at?: Date;
};

export type DoctorFilter = {
  page?: number;
  limit?: number;
  specialization?: string;
  city?: string;
  min_experience?: number;
  available_today?: boolean;
  max_fee?: number;
  sortBy?: 'experience' | 'rating' | 'consultation_fee';
  sortOrder?: 'asc' | 'desc';
};

const doctors: Doctor[] = [
  {
    id: 1,
    name: 'Dr. Amit Sharma',
    specialization: 'General Physician',
    experience: 15,
    rating: 4.8,
    city: 'Mumbai',
    consultation_fee: 800,
    available_today: true,
    image_url: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg',
    languages: 'English, Hindi, Marathi',
    qualifications: 'MBBS, MD (Internal Medicine)'
  },
  {
    id: 2,
    name: 'Dr. Priya Patel',
    specialization: 'General Physician',
    experience: 10,
    rating: 4.6,
    city: 'Delhi',
    consultation_fee: 750,
    available_today: true,
    image_url: 'https://images.pexels.com/photos/5214952/pexels-photo-5214952.jpeg',
    languages: 'English, Hindi',
    qualifications: 'MBBS, DNB (Family Medicine)'
  },
  {
    id: 3,
    name: 'Dr. Rajesh Kumar',
    specialization: 'General Physician',
    experience: 20,
    rating: 4.9,
    city: 'Bangalore',
    consultation_fee: 900,
    available_today: false,
    image_url: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg',
    languages: 'English, Hindi, Kannada',
    qualifications: 'MBBS, MD (General Medicine), FRCP'
  },
  {
    id: 4,
    name: 'Dr. Sunita Desai',
    specialization: 'General Physician',
    experience: 8,
    rating: 4.5,
    city: 'Chennai',
    consultation_fee: 650,
    available_today: true,
    image_url: 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg',
    languages: 'English, Tamil, Hindi',
    qualifications: 'MBBS, Diploma in Family Medicine'
  },
  {
    id: 5,
    name: 'Dr. Vikram Singh',
    specialization: 'General Physician',
    experience: 12,
    rating: 4.7,
    city: 'Hyderabad',
    consultation_fee: 800,
    available_today: false,
    image_url: 'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg',
    languages: 'English, Hindi, Telugu',
    qualifications: 'MBBS, MD (Internal Medicine)'
  },
  {
    id: 6,
    name: 'Dr. Meera Reddy',
    specialization: 'General Physician',
    experience: 7,
    rating: 4.4,
    city: 'Pune',
    consultation_fee: 600,
    available_today: true,
    image_url: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg',
    languages: 'English, Hindi, Marathi',
    qualifications: 'MBBS, Diploma in Family Medicine'
  },
  {
    id: 7,
    name: 'Dr. Anil Kapoor',
    specialization: 'General Physician',
    experience: 18,
    rating: 4.8,
    city: 'Kolkata',
    consultation_fee: 850,
    available_today: true,
    image_url: 'https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg',
    languages: 'English, Hindi, Bengali',
    qualifications: 'MBBS, MD (General Medicine), DM'
  },
  {
    id: 8,
    name: 'Dr. Lakshmi Nair',
    specialization: 'General Physician',
    experience: 9,
    rating: 4.6,
    city: 'Kochi',
    consultation_fee: 700,
    available_today: false,
    image_url: 'https://images.pexels.com/photos/5215002/pexels-photo-5215002.jpeg',
    languages: 'English, Malayalam, Hindi',
    qualifications: 'MBBS, DNB (Family Medicine)'
  },
  {
    id: 9,
    name: 'Dr. Nikhil Verma',
    specialization: 'General Physician',
    experience: 11,
    rating: 4.5,
    city: 'Hyderabad',
    consultation_fee: 780,
    available_today: true,
    image_url: 'https://images.pexels.com/photos/5452206/pexels-photo-5452206.jpeg',
    languages: 'English, Hindi, Gujarati',
    qualifications: 'MBBS, MD'
  },
  {
    id: 10,
    name: 'Dr. Kavita Joshi',
    specialization: 'General Physician',
    experience: 13,
    rating: 4.7,
    city: 'Pune',
    consultation_fee: 720,
    available_today: true,
    image_url: 'https://images.pexels.com/photos/5452294/pexels-photo-5452294.jpeg',
    languages: 'English, Hindi, Marathi',
    qualifications: 'MBBS, MD (General Medicine)'
  },
  {
    id: 11,
    name: 'Dr. Rohit Bansal',
    specialization: 'General Physician',
    experience: 9,
    rating: 4.4,
    city: 'Mumbai',
    consultation_fee: 690,
    available_today: false,
    image_url: 'https://images.pexels.com/photos/5452206/pexels-photo-5452206.jpeg',
    languages: 'English, Hindi, Rajasthani',
    qualifications: 'MBBS, MD'
  },
  {
    id: 12,
    name: 'Dr. Sneha Kulkarni',
    specialization: 'General Physician',
    experience: 6,
    rating: 4.3,
    city: 'Delhi',
    consultation_fee: 640,
    available_today: true,
    image_url: 'https://images.pexels.com/photos/5215022/pexels-photo-5215022.jpeg',
    languages: 'English, Hindi, Marathi',
    qualifications: 'MBBS, DNB'
  },
  {
    id: 13,
    name: 'Dr. Suresh Iyer',
    specialization: 'General Physician',
    experience: 17,
    rating: 4.9,
    city: 'Kochi',
    consultation_fee: 820,
    available_today: true,
    image_url: 'https://images.pexels.com/photos/5452208/pexels-photo-5452208.jpeg',
    languages: 'English, Tamil',
    qualifications: 'MBBS, MD (Internal Medicine)'
  },
  {
    id: 14,
    name: 'Dr. Neha Bhatt',
    specialization: 'General Physician',
    experience: 14,
    rating: 4.6,
    city: 'Kolkata',
    consultation_fee: 760,
    available_today: false,
    image_url: 'https://images.pexels.com/photos/5452202/pexels-photo-5452202.jpeg',
    languages: 'English, Hindi, Gujarati',
    qualifications: 'MBBS, DNB (Family Medicine)'
  },
  {
    id: 15,
    name: 'Dr. Tarun Malhotra',
    specialization: 'General Physician',
    experience: 10,
    rating: 4.5,
    city: 'Chennai',
    consultation_fee: 730,
    available_today: true,
    image_url: 'https://images.pexels.com/photos/5215023/pexels-photo-5215023.jpeg',
    languages: 'English, Hindi, Punjabi',
    qualifications: 'MBBS, MD'
  },
  {
    id: 16,
    name: 'Dr. Radhika Sharma',
    specialization: 'General Physician',
    experience: 8,
    rating: 4.4,
    city: 'Bangalore',
    consultation_fee: 710,
    available_today: true,
    image_url: 'https://images.pexels.com/photos/5452203/pexels-photo-5452203.jpeg',
    languages: 'English, Hindi',
    qualifications: 'MBBS, Diploma in Family Medicine'
  },
  {
    id: 17,
    name: 'Dr. Arjun Pillai',
    specialization: 'General Physician',
    experience: 11,
    rating: 4.7,
    city: 'Hyderabad',
    consultation_fee: 800,
    available_today: false,
    image_url: 'https://images.pexels.com/photos/5452209/pexels-photo-5452209.jpeg',
    languages: 'English, Malayalam',
    qualifications: 'MBBS, MD'
  },
  {
    id: 18,
    name: 'Dr. Snehal Rao',
    specialization: 'General Physician',
    experience: 6,
    rating: 4.3,
    city: 'Delhi',
    consultation_fee: 650,
    available_today: true,
    image_url: 'https://images.pexels.com/photos/5452210/pexels-photo-5452210.jpeg',
    languages: 'English, Hindi, Marathi',
    qualifications: 'MBBS, DNB'
  },
  {
    id: 19,
    name: 'Dr. Harish Jain',
    specialization: 'General Physician',
    experience: 16,
    rating: 4.8,
    city: 'Bangalore',
    consultation_fee: 790,
    available_today: true,
    image_url: 'https://images.pexels.com/photos/5215026/pexels-photo-5215026.jpeg',
    languages: 'English, Hindi',
    qualifications: 'MBBS, MD (General Medicine)'
  },
  {
    id: 20,
    name: 'Dr. Shalini Das',
    specialization: 'General Physician',
    experience: 7,
    rating: 4.5,
    city: 'Kochi',
    consultation_fee: 670,
    available_today: false,
    image_url: 'https://images.pexels.com/photos/5452211/pexels-photo-5452211.jpeg',
    languages: 'English, Hindi, Assamese',
    qualifications: 'MBBS, Diploma in Family Medicine'
  }
];


// Static getDoctors filtering from local array
export async function getDoctors(filters: DoctorFilter = {}) {
  const {
    page = 1,
    limit = 10,
    specialization,
    city,
    min_experience,
    available_today,
    max_fee,
    sortBy = 'experience',
    sortOrder = 'desc'
  } = filters;

  let result = [...doctors];

  if (specialization) {
    result = result.filter(d => d.specialization === specialization);
  }
  if (city) {
    result = result.filter(d => d.city === city);
  }
  if (min_experience) {
    result = result.filter(d => d.experience >= min_experience);
  }
  if (available_today !== undefined) {
    result = result.filter(d => d.available_today === available_today);
  }
  if (max_fee) {
    result = result.filter(d => d.consultation_fee <= max_fee);
  }

  if (['experience', 'rating', 'consultation_fee'].includes(sortBy)) {
    result.sort((a, b) => {
      const valA = a[sortBy as keyof Doctor] as number;
      const valB = b[sortBy as keyof Doctor] as number;
      return sortOrder === 'asc' ? valA - valB : valB - valA;
    });
  }

  const total = result.length;
  const pages = Math.ceil(total / limit);
  const paginated = result.slice((page - 1) * limit, page * limit);

  return {
    doctors: paginated,
    pagination: {
      total,
      pages,
      page,
      limit
    }
  };
}

// You can delete or keep this, it's unused now
export async function seedDoctors() {
  console.log('Static mode: seeding skipped.');
}

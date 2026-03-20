import type { Service, Barber, GalleryItem } from '../types';

export const services: Service[] = [
  {
    id: 'classic-haircut',
    title: 'Classic Haircut',
    description: 'Precision cutting tailored to your face shape and personal style. Includes consultation, wash, and styling.',
    duration: '30 min',
    price: '$45',
    image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400&h=300&fit=crop'
  },
  {
    id: 'beard-trim',
    title: 'Beard Trim & Shape',
    description: 'Expert beard trimming and shaping to maintain your beard\'s health and appearance. Includes hot towel treatment.',
    duration: '20 min',
    price: '$30',
    image: 'https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=300&fit=crop'
  },
  {
    id: 'hot-towel-shave',
    title: 'Hot Towel Shave',
    description: 'Traditional straight razor shave with hot towels and premium oils. The ultimate grooming experience.',
    duration: '45 min',
    price: '$55',
    image: 'https://images.unsplash.com/photo-1622287162716-f77b14c63c06?w=400&h=300&fit=crop'
  },
  {
    id: 'hair-styling',
    title: 'Hair Styling & Finish',
    description: 'Professional styling for special occasions or everyday polish. Uses premium pomades, waxes, and creams.',
    duration: '20 min',
    price: '$25',
    image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=400&h=300&fit=crop'
  },
  {
    id: 'deluxe-grooming',
    title: 'Deluxe Grooming Package',
    description: 'Complete grooming experience: haircut, beard trim, hot towel shave, and scalp massage. Our most popular service.',
    duration: '90 min',
    price: '$120',
    image: 'https://images.unsplash.com/photo-1580489864544-1c2c162d7275?w=400&h=300&fit=crop'
  },
  {
    id: 'kids-haircut',
    title: 'Kids Haircut (Under 12)',
    description: 'Gentle, patient haircuts for our younger clients. In a friendly, comfortable environment.',
    duration: '25 min',
    price: '$30',
    image: 'https://images.unsplash.com/photo-1622290291468-a28f2a097168?w=400&h=300&fit=crop'
  }
];

export const barbers: Barber[] = [
  {
    id: '1',
    name: 'James "Blade" Mitchell',
    role: 'Master Barber',
    specialty: 'Classic Cuts & Straight Razor Shaves',
    bio: 'James is a third-generation barber with over 20 years of experience. Specializing in traditional gentlemen\'s grooming, he brings old-school craftsmanship to every cut. James trained in London and New York before opening his own shop.',
    experience: '20+ years',
    image: 'https://images.unsplash.com/photo-1621607512214-68297480165e?w=300&h=300&fit=crop',
    rating: 4.9,
    reviews: 127
  },
  {
    id: '2',
    name: 'Marcus "The Blade" Johnson',
    role: 'Senior Barber',
    specialty: 'Modern Fades & Textured Styles',
    bio: 'Marcus is known for his precision fades and contemporary styles. He stays on top of the latest trends while ensuring each cut works perfectly with your hair type and lifestyle. His attention to detail is unmatched.',
    experience: '12+ years',
    image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=300&h=300&fit=crop',
    rating: 4.8,
    reviews: 89
  },
  {
    id: '3',
    name: 'Antonio Rossi',
    role: 'Barber',
    specialty: 'Hot Towel Shaves & Beard Sculpting',
    bio: 'Antonio brings European sophistication to the shop. His expertise in beard grooming and classic shaves has made him a favorite among clients who appreciate the finer points of men\'s grooming.',
    experience: '8+ years',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
    rating: 4.7,
    reviews: 56
  },
  {
    id: '4',
    name: 'David "Chopper" Kim',
    role: 'Junior Barber',
    specialty: 'Fades & Classic Cuts',
    bio: 'David trained under James and has quickly developed a reputation for his clean work and friendly demeanor. He\'s passionate about the craft and always eager to try new techniques while respecting barbering traditions.',
    experience: '4+ years',
    image: 'https://images.unsplash.com/photo-1580489864544-1c2c162d7275?w=300&h=300&fit=crop',
    rating: 4.6,
    reviews: 34
  }
];

export const gallery: GalleryItem[] = [
  {
    id: '1',
    title: 'Classic Side Part',
    category: 'Classic Cuts',
    image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400&h=500&fit=crop',
    barberId: '1'
  },
  {
    id: '2',
    title: 'Textured Crop',
    category: 'Modern Styles',
    image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=400&h=500&fit=crop',
    barberId: '2'
  },
  {
    id: '3',
    title: 'Low Fade with Design',
    category: 'Fades',
    image: 'https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=500&fit=crop',
    barberId: '2'
  },
  {
    id: '4',
    title: 'Full Beard & Mustache',
    category: 'Beard Grooming',
    image: 'https://images.unsplash.com/photo-1622287162716-f77b14c63c06?w=400&h=500&fit=crop',
    barberId: '3'
  },
  {
    id: '5',
    title: 'Slicked Back Undercut',
    category: 'Modern Styles',
    image: 'https://images.unsplash.com/photo-1539430838237-b1bf383a9fef?w=400&h=500&fit=crop',
    barberId: '2'
  },
  {
    id: '6',
    title: 'Traditional Wet Shave',
    category: 'Shaving',
    image: 'https://images.unsplash.com/photo-1580489864544-1c2c162d7275?w=400&h=500&fit=crop',
    barberId: '3'
  },
  {
    id: '7',
    title: 'Military High and Tight',
    category: 'Classic Cuts',
    image: 'https://images.unsplash.com/photo-1587909209774-89421b0885a9?w=400&h=500&fit=crop',
    barberId: '1'
  },
  {
    id: '8',
    title: 'Beard Trim & Shape Up',
    category: 'Beard Grooming',
    image: 'https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=500&fit=crop',
    barberId: '1'
  }
];

export const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM'
];

export const contactInfo = {
  address: '123 Main Street, Sydney NSW 2000',
  phone: '(02) 9876 5432',
  email: 'bookings@theclassiccut.com.au',
  hours: {
    monday: '9:00 AM - 6:00 PM',
    tuesday: '9:00 AM - 6:00 PM',
    wednesday: '9:00 AM - 6:00 PM',
    thursday: '9:00 AM - 8:00 PM',
    friday: '9:00 AM - 8:00 PM',
    saturday: '8:00 AM - 5:00 PM',
    sunday: 'Closed'
  }
};

import { Service, Doctor, NewsArticle } from '../types';

export const services: Service[] = [
  {
    id: 'general-practice',
    title: 'General Practice',
    description: 'Comprehensive primary healthcare for the whole family. From routine check-ups to illness treatment, our GPs are here for you.',
    icon: 'Stethoscope',
    image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=600&fit=crop'
  },
  {
    id: 'specialists',
    title: 'Specialist Consultations',
    description: 'Access to a wide range of medical specialists including cardiology, dermatology, orthopedics, and more.',
    icon: 'UserCheck',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop'
  },
  {
    id: 'allied-health',
    title: 'Allied Health',
    description: 'Physical therapy, psychology, nutrition, and other allied health services to support your wellbeing.',
    icon: 'Heart',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop'
  },
  {
    id: 'health-checks',
    title: 'Health Checks & Screenings',
    description: 'Preventive health screenings, annual check-ups, and health assessments to keep you healthy.',
    icon: 'ClipboardCheck',
    image: 'https://images.unsplash.com/photo-1581593968968-ea8ad2d0e90e?w=800&h=600&fit=crop'
  }
];

export const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    role: 'General Practitioner',
    specialty: 'Family Medicine',
    bio: 'Dr. Johnson has been serving our community for over 12 years. She is dedicated to providing compassionate, comprehensive care to patients of all ages.',
    education: ['MBBS, University of Sydney', 'FRACGP, Royal Australian College of General Practitioners'],
    experience: '12+ years',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop'
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    role: 'Specialist Cardiologist',
    specialty: 'Cardiology',
    bio: 'Dr. Chen is a highly experienced cardiologist specializing in heart disease prevention, diagnosis, and treatment. He brings cutting-edge cardiac care to our center.',
    education: ['MD, Harvard Medical School', 'FACC, American College of Cardiology'],
    experience: '20+ years',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop'
  },
  {
    id: '3',
    name: 'Dr. Emma Wilson',
    role: 'Psychologist',
    specialty: 'Clinical Psychology',
    bio: 'Dr. Wilson provides evidence-based therapy for anxiety, depression, trauma, and life transitions. She creates a safe, supportive environment for healing.',
    education: ['PsyD, University of Melbourne', 'Clinical Psychology Registrar'],
    experience: '8+ years',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=300&fit=crop'
  },
  {
    id: '4',
    name: 'Dr. James Park',
    role: 'Orthopedic Surgeon',
    specialty: 'Orthopedics',
    bio: 'Dr. Park specializes in minimally invasive orthopedic surgery, sports medicine, and joint replacements. He helps patients regain mobility and quality of life.',
    education: ['MD, Johns Hopkins University', 'Board Certified Orthopedic Surgeon'],
    experience: '15+ years',
    image: 'https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?w=300&h=300&fit=crop'
  }
];

export const news: NewsArticle[] = [
  {
    id: '1',
    title: 'HealthFirst Medical Announces New Extended Hours',
    excerpt: 'We are pleased to announce that our clinic will now be open until 8pm on weekdays to better accommodate our patients needs.',
    date: '2025-03-15',
    category: 'Announcement',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=250&fit=crop'
  },
  {
    id: '2',
    title: 'Understanding Heart Health: A Guide',
    excerpt: 'Dr. Chen shares important insights on maintaining cardiovascular health and recognizing early warning signs.',
    date: '2025-03-10',
    category: 'Health Tips',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5b528?w=400&h=250&fit=crop'
  },
  {
    id: '3',
    title: 'New Pediatric Services Now Available',
    excerpt: 'We are excited to expand our services to include comprehensive pediatric care for children from infancy through adolescence.',
    date: '2025-03-05',
    category: 'Services',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=250&fit=crop'
  }
];

export const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM'
];

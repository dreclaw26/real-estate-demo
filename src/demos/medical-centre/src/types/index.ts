export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface Doctor {
  id: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  education: string[];
  experience: string;
  image: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

export interface Appointment {
  id: string;
  doctorId: string;
  doctorName: string;
  date: string;
  time: string;
  status: 'available' | 'booked' | 'unavailable';
}

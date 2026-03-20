export interface Service {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: string;
  image: string;
}

export interface Barber {
  id: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  experience: string;
  image: string;
  rating: number;
  reviews: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  barberId?: string;
}

export interface Booking {
  id: string;
  barberId: string;
  barberName: string;
  serviceId: string;
  serviceName: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  notes?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
}

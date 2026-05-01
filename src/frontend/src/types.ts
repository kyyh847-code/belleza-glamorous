export interface AppointmentFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
  image?: string;
  isCelebrity?: boolean;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  price: string;
  duration: string;
  icon: string;
  features: string[];
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

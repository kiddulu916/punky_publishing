import { ReactNode } from 'react';

// Define types for book testimonials
export interface BookTestimonial {
  image: string;
  name: string;
  rating: ReactNode;
  testimonial: string;
}

// Define types for book page props
export interface BooksPageProps {
  book: {
    title: string;
    description: string;
    coverImage: string;
    amazonLink: string;
  };
  testimonials?: BookTestimonial[];  // Making it optional in case there are no testimonials yet
}

// Define types for any shared components
export interface BaseLayoutProps {
  children: ReactNode;
}

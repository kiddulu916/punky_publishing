import { FaStar, FaStarHalf } from 'react-icons/fa';

// Helper function to create star ratings
const createStarRating = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`star-${i}`} className="text-accent" />);
  }

  if (hasHalfStar) {
    stars.push(<FaStarHalf key="half-star" className="text-accent" />);
  }

  return stars;
};

export const bookTestimonials = [
  {
    image: '/t-avt.png',
    name: 'Sarah Johnson',
    rating: createStarRating(5),
    testimonial: 'This book transformed my understanding of game development. The concepts are explained clearly, and the practical examples are invaluable.'
  },
  {
    image: '/t-avt.png',
    name: 'Michael Chen',
    rating: createStarRating(5),
    testimonial: 'As a beginner in game development, I found this guide extremely helpful. The step-by-step approach made complex concepts accessible.'
  },
  {
    image: '/t-avt.png',
    name: 'Emily Rodriguez',
    rating: createStarRating(5),
    testimonial: 'The comprehensive coverage of both basic and advanced topics makes this book a must-have resource for any aspiring game developer.'
  }
];

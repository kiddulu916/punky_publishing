import { FC } from 'react';
import BooksPage from './page';
import { bookTestimonials } from '../../lib/bookTestimonials';

const BookPageContainer: FC = () => {
  // Book data that would typically come from a CMS or API
  const bookData = {
    title: "Game Development: A Comprehensive Guide",
    description: "A comprehensive guide to game development, covering everything from basic concepts to advanced techniques. Perfect for beginners and intermediate developers looking to enhance their skills in game development.",
    coverImage: "/game-dev-book.png",
    amazonLink: "https://amazon.com/dp/B0DBMQHH5V"
  };

  return (
    <BooksPage 
      book={bookData}
      testimonials={bookTestimonials}
    />
  );
};

export default BookPageContainer;

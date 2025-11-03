import { ReactElement } from 'react';
import { BookItem } from '../../data/bookData';
import './BookJournalList.css';

interface BookJournalListProps {
  bookData: BookItem[];
}

export default function BookJournalList({ bookData }: BookJournalListProps): ReactElement {
  
  const getStarRating = (rating: number): ReactElement[] => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - (fullStars + (halfStar ? 1 : 0));

    const stars: ReactElement[] = [];

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="fa-solid fa-star"></i>);
    }

    // Half star
    if (halfStar) {
      stars.push(<i key="half" className="fa-solid fa-star-half-stroke"></i>);
    }

    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="fa-regular fa-star"></i>);
    }

    return stars;
  };

  return (
    <div className="journal-content-con">
      {bookData.map((book) => (
        <div 
          key={book.id} 
          className="book"
          id={book.id}
        >
          <div className="left-book">
            <img 
              src={book.cover} 
              className="book-cover" 
              alt={book.title}
            />
            <div className="details">
              <div className="title">
                <p>{book.title}</p>
              </div>
              <div className="author">
                <p>by {book.author}</p>
              </div>
              <div className="star-rating">
                {getStarRating(book.rating)}
              </div>
              <div className="page-count">
                <p>Pages: {book.pages}</p>
              </div>
              <div className="genre">
                <p>Genre: {book.genre}</p>
              </div>
              <div className="date-read">
                <p>Read: {book.dateRead}</p>
              </div>
            </div>
          </div>
          <div className="right-book">
            <p>{book.review}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
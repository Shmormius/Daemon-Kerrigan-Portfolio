import { ReactElement } from 'react';
import { AnimeItem } from '../../data/animeData';
import './AnimeRankingList.css';

interface AnimeRankingListProps {
  animeData: AnimeItem[];
}

export default function AnimeRankingList({ animeData }: AnimeRankingListProps): ReactElement {
  
  const getStarRating = (rating: number): ReactElement[] => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 10 - (fullStars + (halfStar ? 1 : 0));

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

  const formatDuration = (duration: number | string, id: string): string => {
    if (id === "movie" || duration === "Movie") {
      return "Movie";
    }
    return `Episodes: ${duration}`;
  };

  const getBackgroundStyle = (anime: AnimeItem) => {
    if (anime.backgroundImage) {
      return {
        background: `linear-gradient(to right, rgba(0, 0, 0, 0.8) 30%, rgba(0, 0, 0, 0.4) 60%, rgba(255, 0, 0, 0) 100%), url('${anime.backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      };
    }
    return {};
  };

  return (
    <div className="ranking-content-con">
      {animeData.map((anime, index) => (
        <div 
          key={anime.id} 
          className="anime"
          id={anime.id}
          style={getBackgroundStyle(anime)}
        >
          <div className="left-anime">
            <p>{index + 1}</p>
            <img 
              src={anime.cover} 
              className="anime-cover" 
              alt={anime.title}
            />
          </div>
          <div className="right-anime">
            <div className="details">
              <div className="title">
                <p>{anime.title}</p>
              </div>
              <div className="star-rating">
                {getStarRating(anime.rating)}
              </div>
              <div className="duration">
                <p>{formatDuration(anime.duration, anime.id)}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
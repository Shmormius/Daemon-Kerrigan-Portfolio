import React, { useRef, useEffect, useState } from "react";
import './InfiniteCarousel.css';

type CarouselItem = {
  title: string;
  image: string;
};

interface InfiniteCarouselProps {
  items: CarouselItem[];
}

const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({ items }) => {
  const [index, setIndex] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const duplicatedItems = [...items, ...items, ...items]; // For infinite effect

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000); // Auto-scroll every 3s

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (wrapperRef.current) {
      const total = items.length;
      const scrollIndex = index % total;

      wrapperRef.current.style.transition = "transform 0.5s ease-in-out";
      wrapperRef.current.style.transform = `translateX(-${
        scrollIndex * 100
      }%)`;
    }
  }, [index, items.length]);

  return (
    <div className="carousel-container">
      <div className="carousel-track" ref={wrapperRef}>
        {duplicatedItems.map((item, i) => (
          <div className="carousel-slide" key={i}>
            <img src={item.image} alt={item.title} />
            <p className="carousel-title">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;

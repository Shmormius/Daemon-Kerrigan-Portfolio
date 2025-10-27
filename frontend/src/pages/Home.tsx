import React, { ReactElement, useMemo, useEffect, useRef } from 'react';
import Footer from '../components/shared/Footer'
import Header from '../components/shared/Header'
import Signature from '../components/Home/Signature';
import Portrait from '../components/Home/Portrait';
import Tiles from '../components/Home/Tiles';
import Intro from '../components/Home/Intro';
import InfiniteCarousel from '../components/Home/InfiniteCarousel';
import { CarouselItem } from '../types';
import { getFeaturedProjects, getRandomFeaturedProjects } from '../utils/projectUtils';
import './styles/Home.css';

export default function Home(): ReactElement {
  const featuredProjects = useMemo(() => getRandomFeaturedProjects(3), []);
  const leftSectionRef = useRef<HTMLElement>(null);
  const rightSectionRef = useRef<HTMLElement>(null);
  const portraitContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const portraitContainer = portraitContainerRef.current;
      const leftSection = leftSectionRef.current;
      const rightSection = rightSectionRef.current;

      if (!portraitContainer || !leftSection || !rightSection) return;

      if (window.innerWidth <= 1200) {
        // Move to right section on mobile
        if (portraitContainer.parentElement === leftSection) {
          rightSection.appendChild(portraitContainer);
        }
      } else {
        // Move back to left section on desktop
        if (portraitContainer.parentElement === rightSection) {
          leftSection.appendChild(portraitContainer);
        }
      }
    };

    // Call on mount
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="home-container">
      <Header subtitle="Home" />
      <div className="content-container">
        <section className="left-section" ref={leftSectionRef}>
          <Intro></Intro>
          <div className="featured-projects">
            <InfiniteCarousel
                projects={featuredProjects}
              />
            </div>
          <div className="portrait-signature-container" ref={portraitContainerRef}>
            <Portrait />
            <Signature />
          </div>
        </section>
        <section className="right-section" ref={rightSectionRef}>
          <Tiles></Tiles>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
}
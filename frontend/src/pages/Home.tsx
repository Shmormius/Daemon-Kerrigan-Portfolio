import React, { ReactElement, useMemo } from 'react';
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

  return (
    <div className="home-container">
      <Header subtitle="Home" />
      <div className="content-container">
        <section className="left-section">
          <Tiles></Tiles>
        </section>
        <section className="right-section">
          <Intro></Intro>
          <div className="featured-projects">
          <InfiniteCarousel
              projects={featuredProjects}
            />
          </div>
          <div className="portrait-signature-container">
            <Portrait />
            <Signature />
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
}
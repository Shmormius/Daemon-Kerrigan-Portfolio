import React, { ReactElement, useMemo } from 'react';
import Footer from '../components/Footer'
import Header from '../components/Header'
import Signature from '../components/Home/Signature';
import Portrait from '../components/Home/Portrait';
import Tiles from '../components/Home/Tiles';
import Intro from '../components/Home/Intro';
import InfiniteCarousel from '../components/Home/InfiniteCarousel';
import './Home.css';

const projects = [
                { title: "Project 1", image: "image/placeholders/dove1.jpg" },
                { title: "Project 2", image: "image/placeholders/dove2.jpg"},
                { title: "Project 3", image: "image/placeholders/dove3.jpg" }
              ];

export default function Home(): ReactElement {
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
              projects={projects}
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
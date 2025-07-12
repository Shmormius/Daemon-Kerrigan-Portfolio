import React, { ReactElement, useMemo } from 'react';
import Footer from '../components/Footer'
import Header from '../components/Header'
import Signiture from '../components/Home/Signiture';
import Portrait from '../components/Home/Portrait';
import Tiles from '../components/Home/tiles';
import './Home.css';

export default function Home(): ReactElement {
  return (
    <div className="home-container">
      <Header subtitle="Home" />
      <div className="content-container">
        <section className="left-section">
          <Tiles></Tiles>
        </section>
        <section className="right-section">
          <div className="featured-projects">
          </div>
          <Portrait></Portrait>
          <Signiture></Signiture>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
}
import { ReactElement } from 'react';
import './Home.css';

export default function Home(): ReactElement {
  return (
    <div className="home-container">
        <section className="bio-section">
          <h1>Welcome to My Portfolio</h1>
          <p>
            Your introductory text goes here. TypeScript ensures type safety
            for all your props and state management.
          </p>
        </section>
    </div>
  );
}
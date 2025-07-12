import { ReactElement } from 'react';
import './Footer.css';

export default function Footer(): ReactElement {
  return (
    <footer className="footer">
      <p>© 2023 My Portfolio. All rights reserved.</p>
      <p>Follow me on social media!</p>
    </footer>
  );
}
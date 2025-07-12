import { ReactElement } from 'react';
import Navbar from './Navbar';
import './Header.css';

interface HeaderProps {
  subtitle?: string;
}

export default function Header({ subtitle }: HeaderProps): ReactElement {
  return (
    <header className="header">
      <h1>Daemon Kerrigan: {subtitle}</h1>
      <Navbar />
    </header>
  );
}
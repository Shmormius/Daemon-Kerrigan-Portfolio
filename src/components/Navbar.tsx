import { ReactElement, useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

export default function Navbar(): ReactElement {
  const [open, setOpen] = useState(false);

  return (
    <nav className={`navbar${open ? " active" : ""}`}>
      <button
        className="hamburger-menu"
        aria-label="Open navigation"
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
        <span />
      </button>
      <ul className={open ? "open" : ""} onClick={() => setOpen(false)}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
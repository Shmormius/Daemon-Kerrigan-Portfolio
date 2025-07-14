import { ReactElement, useState } from "react";
import { Link } from "react-router-dom";
import { NAV_ITEMS } from "../../constants";
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
        {NAV_ITEMS.map((item) => (
          <li key={item.path}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar is-fixed-top is-primary">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <strong>Home</strong>
        </Link>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/Projects">Projects</Link>
          <Link className="navbar-item" to="/Training">Training</Link>
          <Link className="navbar-item" to="/Fiverr">Fiverr</Link>
        </div>
      </div>
    </nav>
  );
}
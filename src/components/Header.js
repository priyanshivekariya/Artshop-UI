import { Link } from 'react-router-dom';
import './Header.css'; // Custom CSS for the header

export default function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img src="/images/Art.png" alt="Logo" className="logo" />
        </Link>

        {/* Centered Navigation Links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/product">Product</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Right-aligned Links */}
        <ul className="navbar-nav right-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/mycart">MyCart</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

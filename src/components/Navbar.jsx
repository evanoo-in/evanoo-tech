import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Evanoo" className="logo-img" />
        <span className="logo-text">Evanoo</span>
      </div>

      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/hosting">Hosting</Link>
        <Link to="/saas">SaaS</Link>
        <Link to="/finance">Finance</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <button className="nav-btn">
        Get Started
      </button>
    </nav>
  );
}
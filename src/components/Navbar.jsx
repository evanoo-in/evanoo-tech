import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Evanoo</div>

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

      <button className="btn">Get Started</button>
    </nav>
  );
}
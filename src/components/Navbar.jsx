export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Evanoo</div>

      <div className="menu">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#hosting">Hosting</a>
        <a href="#saas">SaaS</a>
        <a href="#finance">Finance</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </div>

      <button className="nav-btn">
        Get Started
      </button>
    </nav>
  );
}
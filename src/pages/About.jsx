import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
    <Navbar />
      <section className="about-hero">
        <span>ABOUT US</span>

        <h1>
          A small team with
          <span className="gradient-text"> big ambitions</span>
        </h1>

        <p>
          We partner with founders, product teams, and enterprises
          to design and build software that ships and scales.
        </p>
      </section>

      <section className="story-section">
        <div className="story-left">
          <h2>Our Story</h2>

          <p>
            Evanoo started with a simple belief: businesses deserve one
            trusted partner for everything digital.
          </p>

          <p>
            Today we work with founders launching their first MVP and
            enterprises modernizing legacy systems.
          </p>
        </div>

        <div className="story-right">
          <div className="about-card">
            <h3>Mission</h3>
            <p>
              Empower businesses with elegant and reliable digital products.
            </p>
          </div>

          <div className="about-card">
            <h3>Vision</h3>
            <p>
              Become the trusted technology partner for organizations worldwide.
            </p>
          </div>
        </div>
      </section>

      <section className="why-us">
        <div className="section-heading">
          <span>WHY CHOOSE US</span>
          <h2>Built on principles, proven on projects</h2>
        </div>

        <div className="why-grid">
          <div className="why-card">
            <h3>Quality First</h3>
            <p>Production-ready code with strong quality standards.</p>
          </div>

          <div className="why-card">
            <h3>Speed To Ship</h3>
            <p>Fast delivery with continuous communication.</p>
          </div>

          <div className="why-card">
            <h3>True Partnership</h3>
            <p>We work as an extension of your team.</p>
          </div>

          <div className="why-card">
            <h3>Long-Term Focus</h3>
            <p>Solutions designed to scale for years.</p>
          </div>
        </div>
        <div className="about-cta">
          <button className="primary-btn">
            Work With Us
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
}
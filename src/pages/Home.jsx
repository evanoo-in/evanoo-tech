import heroImg from "../assets/hero.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import heroBg from "../assets/hero-bg.jpg";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <Navbar />
      <section id="home" className="hero" style={{
                                              backgroundImage: `url(${heroBg})`,
                                            }}>
        <div className="hero-content">
          <span className="badge">Now Taking New Projects</span>

          <h1>
            One Platform for
            <span> Hosting, SaaS </span>
            & Financial Solutions
          </h1>

          <p>
            Evanoo brings together hosting, digital services, SaaS products,
            cloud solutions and financial services under one platform.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Start Your Project</button>
            <button className="secondary-btn">View Portfolio</button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about">
        <div className="about-left">
          <h2>A product studio engineered for outcomes.</h2>

          <p>
            Evanoo Technologies is a focused team of engineers and designers
            delivering production-ready software. We build scalable web
            applications, SaaS products, hosting solutions and financial
            platforms.
          </p>

          <div className="stats">
            <div>
              <h3>50+</h3>
              <span>Projects Shipped</span>
            </div>

            <div>
              <h3>30+</h3>
              <span>Happy Clients</span>
            </div>

            <div>
              <h3>7+</h3>
              <span>Years Experience</span>
            </div>
          </div>
        </div>

        <div className="about-right">
          <div className="box">Strategy</div>
          <div className="box">Design</div>
          <div className="box">Engineering</div>
          <div className="box">Cloud Ops</div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="services">
        <div className="section-heading">
          <span>WHAT WE DO</span>
          <h2>Services Built Around Your Business</h2>
        </div>

        <div className="service-grid">
          <div className="card">
            <h3>Website Development</h3>
            <p>Modern responsive websites built with latest technologies.</p>
          </div>

          <div className="card">
            <h3>React Development</h3>
            <p>Fast, scalable and high performance web applications.</p>
          </div>

          <div className="card">
            <h3>Java Spring Boot</h3>
            <p>Enterprise grade backend APIs and microservices.</p>
          </div>

          <div className="card">
            <h3>Cloud Hosting</h3>
            <p>Shared hosting, VPS and reseller hosting solutions.</p>
          </div>

          <div className="card">
            <h3>SaaS Products</h3>
            <p>CRM, ERP and custom SaaS applications.</p>
          </div>

          <div className="card">
            <h3>Financial Services</h3>
            <p>Loans, credit cards and financial product integrations.</p>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="portfolio">
        <div className="section-heading">
          <span>SELECTED WORK</span>
          <h2>Recent Projects</h2>
        </div>

        <div className="portfolio-grid">
          <div className="project-card">
            <img src={heroImg} alt="" />
            <h3>Apna Rasoi</h3>
            <p>Food Delivery Platform</p>
          </div>

          <div className="project-card">
            <img src={heroImg} alt="" />
            <h3>InsightHub</h3>
            <p>Analytics SaaS Dashboard</p>
          </div>

          <div className="project-card">
            <img src={heroImg} alt="" />
            <h3>Northwind Store</h3>
            <p>E-Commerce Platform</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <div className="section-heading">
          <span>TESTIMONIALS</span>
          <h2>Trusted by founders & teams</h2>
        </div>

        <div className="testimonial-grid">
          <div className="testimonial">
            <p>
              "Evanoo turned our idea into a polished product in weeks."
            </p>
            <h4>Priya Sharma</h4>
          </div>

          <div className="testimonial">
            <p>
              "Outstanding backend development and API performance."
            </p>
            <h4>Daniel Okafor</h4>
          </div>

          <div className="testimonial">
            <p>
              "The UI/UX work elevated our entire brand."
            </p>
            <h4>Meera Iyer</h4>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="cta">
        <h2>Have a project in mind?</h2>

        <p>
          Tell us about your goals. We'll respond within one business day.
        </p>

        <button className="primary-btn">Get In Touch</button>
      </section>
      <Footer />
    </>
  );
}
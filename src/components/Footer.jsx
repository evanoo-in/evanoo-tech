export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">

        <div>
          <h2 className="footer-logo">Evanoo</h2>

          <p>
            One platform for hosting, digital services,
            SaaS products and financial solutions.
          </p>
        </div>

        <div>
          <h3>Company</h3>

          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#hosting">Hosting</a>
          <a href="#saas">SaaS Products</a>
          <a href="#finance">Loans & Cards</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </div>

        <div>
          <h3>Get In Touch</h3>

          <a href="mailto:vishnu.kumar@evanoo.in">
            vishnu.kumar@evanoo.in
          </a>

          <a
            href="https://wa.me/918083506050"
            target="_blank"
          >
            WhatsApp Chat
          </a>
        </div>

      </div>

      <div className="copyright">
        © 2026 Evanoo. All rights reserved.
      </div>
    </footer>
  );
}
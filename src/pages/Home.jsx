import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="hero">
        <h1>
          One Platform for
          <br />
          Hosting, SaaS &
          <br />
          Financial Solutions
        </h1>

        <p>
          Evanoo brings together hosting, digital services,
          SaaS products and finance solutions.
        </p>

        <button className="hero-btn">
          Start Your Project
        </button>
      </section>

      {/* Stats */}
      <section className="stats">
        <div>
          <h2>50+</h2>
          <p>Projects Shipped</p>
        </div>

        <div>
          <h2>30+</h2>
          <p>Happy Clients</p>
        </div>

        <div>
          <h2>7+</h2>
          <p>Years Experience</p>
        </div>
      </section>

      {/* About */}
      <section className="about-company">
        <div className="about-left">
          <h2>
            A product studio engineered
            <br />
            for outcomes.
          </h2>

          <p>
            Evanoo Technologies is a focused team of engineers
            and designers delivering production-ready software.
          </p>

          <div className="numbers">
            <div>
              <h3>50+</h3>
              <span>Projects</span>
            </div>

            <div>
              <h3>30+</h3>
              <span>Clients</span>
            </div>

            <div>
              <h3>7+</h3>
              <span>Years</span>
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

      {/* Services */}
      <section className="services">
        <h2>Services Built Around Your Business</h2>

        <div className="cards">
          <div className="card">
            <h3>Website Development</h3>
            <p>Modern responsive websites.</p>
          </div>

          <div className="card">
            <h3>React Development</h3>
            <p>Fast scalable web apps.</p>
          </div>

          <div className="card">
            <h3>Java Spring Boot</h3>
            <p>Enterprise backend APIs.</p>
          </div>
        </div>
      </section>
    </>
  );
}
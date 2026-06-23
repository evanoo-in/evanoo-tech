import { Link } from "react-router-dom";
import { ArrowRight, Code2, Cloud, Layers, Palette, Wrench, Plug, Boxes, Quote, Star } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import apnaRasoi from "@/assets/portfolio-apna-rasoi.jpg";
import dashboard from "@/assets/portfolio-dashboard.jpg";
import ecommerce from "@/assets/portfolio-ecommerce.jpg";
import { Button } from "@/components/ui/button";
import { useMeta } from "../hooks/useMeta";

const services = [
  { Icon: Code2, title: "Website Development", desc: "Performant, accessible websites built with modern stacks." },
  { Icon: Layers, title: "React Development", desc: "Scalable SPAs and component systems with React 19." },
  { Icon: Boxes, title: "Java Spring Boot", desc: "Robust backends, microservices, and enterprise APIs." },
  { Icon: Cloud, title: "Cloud Solutions", desc: "AWS, GCP & Azure architectures that scale and save cost." },
  { Icon: Plug, title: "API Integration", desc: "Connect payments, messaging, CRMs, and 3rd-party APIs." },
  { Icon: Palette, title: "Mobile App Development", desc: "iOS & Android apps with native performance and polish." },
];

const projects = [
  { img: apnaRasoi, title: "Apna Rasoi", tag: "Mobile App", desc: "Home-cooked meals marketplace connecting cooks with customers." },
  { img: dashboard, title: "InsightHub Analytics", tag: "SaaS Dashboard", desc: "Realtime analytics platform with custom charting." },
  { img: ecommerce, title: "Northwind Store", tag: "E-commerce", desc: "Modern storefront with Stripe checkout and headless CMS." },
];

const testimonials = [
  { quote: "Evanoo turned our idea into a polished product in weeks. Outstanding craft and communication.", name: "Priya Sharma", role: "Founder, NestCart" },
  { quote: "Their Spring Boot team rebuilt our API and cut response times by 60%. Highly recommended.", name: "Daniel Okafor", role: "CTO, LedgerOne" },
  { quote: "The UI/UX work elevated our brand. Conversion is up across the board.", name: "Meera Iyer", role: "Head of Product, BrightFin" },
];

export default function Home() {
  useMeta({
    title: "Evanoo — Hosting, Digital Services, SaaS & Finance",
    description: "Evanoo is one platform for hosting, digital services, SaaS products, and financial solutions — web & mobile development, cloud, CRM, loans, and credit cards."
  });

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-50 dark:opacity-70"
          style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/70 to-background" />

        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-36">
          <div className="mx-auto max-w-3xl text-center animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Now taking new projects for 2026
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              One Platform for <span className="gradient-text">Hosting, SaaS</span> & Financial Solutions
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Evanoo brings together hosting, digital services, SaaS products, and finance — everything your business needs to launch, run, and grow.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" className="gradient-hero text-primary-foreground border-0 shadow-elegant hover:opacity-90">
                <Link to="/contact">Start Your Project <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Who we are</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">A product studio engineered for outcomes.</h2>
            <p className="mt-5 text-muted-foreground">
              Evanoo Technologies is a focused team of engineers and designers delivering production-ready software. We pair deep technical skill with thoughtful design to build digital products that perform — from your first MVP to a global-scale platform.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[{n:"50+",l:"Projects shipped"},{n:"30+",l:"Happy clients"},{n:"7+",l:"Years experience"}].map((s) => (
                <div key={s.l}>
                  <div className="text-3xl font-bold gradient-text">{s.n}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-3xl gradient-hero opacity-20 blur-3xl" />
            <div className="rounded-3xl border border-border bg-card p-8 shadow-elegant">
              <div className="grid grid-cols-2 gap-4">
                {["Strategy", "Design", "Engineering", "Cloud Ops"].map((p, i) => (
                  <div key={p} className="rounded-2xl border border-border bg-background p-5">
                    <div className="text-xs text-muted-foreground">0{i + 1}</div>
                    <div className="mt-1 font-semibold">{p}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-y border-border/40 bg-card/30">
        <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">What we do</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Services built around your business</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ Icon, title, desc }) => (
              <div key={title} className="group rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant">
                <div className="grid h-12 w-12 place-items-center rounded-xl gradient-hero text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline">
              <Link to="/services">All services <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio highlights */}
      <section className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Selected work</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Recent projects</h2>
          </div>
          <Link to="/portfolio" className="text-sm font-medium text-primary hover:underline">View all →</Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-elegant">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img src={p.img} alt={p.title} width={1280} height={960} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-primary">{p.tag}</div>
                <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-y border-border/40 bg-card/30">
        <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Testimonials</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Trusted by founders & teams</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-2xl border border-border bg-card p-7">
                <Quote className="h-6 w-6 text-primary" />
                <blockquote className="mt-4 text-sm leading-relaxed">"{t.quote}"</blockquote>
                <figcaption className="mt-6 flex items-center justify-between border-t border-border pt-4">
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                  <div className="flex gap-0.5 text-accent">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border gradient-hero p-10 text-center text-primary-foreground sm:p-16 shadow-elegant">
          <Wrench className="mx-auto h-10 w-10 opacity-80" />
          <h2 className="mt-5 text-3xl font-bold sm:text-4xl">Have a project in mind?</h2>
          <p className="mx-auto mt-3 max-w-xl opacity-90">
            Tell us about your goals. We'll respond within one business day with a clear next step.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Get in touch <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
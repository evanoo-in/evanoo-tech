import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";
import {
  Github,
  Linkedin,
  Facebook,
  Instagram,
  Mail,
} from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-card/30">
      <div className="container mx-auto grid gap-12 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">

        {/* Company */}
        <div>
          <Link
            to="/"
            className="flex items-center gap-2 font-display text-xl font-bold"
          >
            <img
              src={logo}
              alt="Evanoo Logo"
              className="h-10 w-10 rounded-full object-cover"
            />
            Evanoo
          </Link>

          <p className="mt-5 text-sm leading-7 text-muted-foreground">
            Evanoo is a technology company delivering web development,
            mobile applications, cloud hosting, SaaS platforms,
            AI solutions, enterprise software, and digital transformation
            services for startups and businesses.
          </p>

          <div className="mt-6 flex gap-3">
            {[
              {
                Icon: Github,
                href: "https://github.com/evanoo",
              },
              {
                Icon: Linkedin,
                href: "https://linkedin.com/company/evanoo",
              },
              {
                Icon: Facebook,
                href: "https://facebook.com",
              },
              {
                Icon: Instagram,
                href: "https://instagram.com",
              },
              {
                Icon: Mail,
                href: "mailto:contact@evanoo.in",
              },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-xl border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary hover:-translate-y-1"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-base font-semibold">Company</h4>

          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li>
              <Link to="/about" className="hover:text-primary">
                About Us
              </Link>
            </li>

            <li>
              <Link to="/portfolio" className="hover:text-primary">
                Portfolio
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-primary">
                Contact
              </Link>
            </li>

            <li>
              <Link to="/careers" className="hover:text-primary">
                Careers
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-base font-semibold">Services</h4>

          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">

            <li>
              <Link to="/services" className="hover:text-primary">
                Website Development
              </Link>
            </li>

            <li>
              <Link to="/services" className="hover:text-primary">
                Mobile App Development
              </Link>
            </li>

            <li>
              <a
                href="https://hosting.evanoo.in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                Cloud Hosting
              </a>
            </li>

            <li>
              <Link to="/saas" className="hover:text-primary">
                SaaS Solutions
              </Link>
            </li>

            <li>
              <Link to="/services" className="hover:text-primary">
                API Integration
              </Link>
            </li>

            <li>
              <Link to="/services" className="hover:text-primary">
                AI Solutions
              </Link>
            </li>

          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-base font-semibold">Get in Touch</h4>

          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">

            <li>
              <a
                href="mailto:contact@evanoo.in"
                className="hover:text-primary"
              >
                contact@evanoo.in
              </a>
            </li>

            <li>
              <a
                href="https://wa.me/918083506050"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                WhatsApp Chat
              </a>
            </li>

            <li>
              Mon – Fri
            </li>

            <li>
              10:00 AM – 7:00 PM
            </li>

            <li>
              India
            </li>

          </ul>
        </div>

      </div>

      <div className="border-t border-border/40">
        <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-muted-foreground sm:flex-row sm:px-6 lg:px-8">

          <p>
            © {new Date().getFullYear()} Evanoo Technologies. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-primary">
              Privacy Policy
            </Link>

            <Link to="/terms" className="hover:text-primary">
              Terms of Service
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}
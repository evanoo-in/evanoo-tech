import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-card/30">
      <div className="container mx-auto grid gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold">
            <img src={logo} alt="Evanoo Logo" className="h-9 w-9 rounded-full object-cover" />
            Evanoo
          </Link>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            One platform for hosting, digital services, SaaS products, and financial solutions.
          </p>
          <div className="mt-5 flex gap-3">
            {[
              { Icon: Github, href: "https://github.com" },
              { Icon: Linkedin, href: "https://linkedin.com" },
              { Icon: Twitter, href: "https://twitter.com" },
              { Icon: Mail, href: "mailto:vishnu.kumar@evanoo.in" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                className="grid h-9 w-9 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/hosting" className="hover:text-foreground">Hosting</Link></li>
            <li><Link to="/saas" className="hover:text-foreground">SaaS Products</Link></li>
            <li><Link to="/finance" className="hover:text-foreground">Loans & Cards</Link></li>
            <li><Link to="/portfolio" className="hover:text-foreground">Portfolio</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Get in touch</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="mailto:vishnu.kumar@evanoo.in" className="hover:text-foreground">vishnu.kumar@evanoo.in</a></li>
            <li><a href="https://wa.me/918083506050" target="_blank" rel="noreferrer noopener" className="hover:text-foreground">WhatsApp Chat</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/40">
        <p className="container mx-auto px-4 py-5 text-xs text-muted-foreground sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Evanoo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

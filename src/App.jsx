import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import { Toaster } from "sonner";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Hosting from "./pages/Hosting";
import Saas from "./pages/Saas";
import Finance from "./pages/Finance";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  return (
    <ThemeProvider>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/hosting" element={<Hosting />} />
            <Route path="/saas" element={<Saas />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <SiteFooter />
      </div>
      <Toaster richColors position="bottom-center" />
    </ThemeProvider>
  );
}

export default App;
import { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import Achievements from "@/components/Achievements";
import Education from "@/components/Education";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <>
      {loading && <Loader onLoadComplete={() => setLoading(false)} />}
      
      <div className={`transition-opacity duration-500 ${loading ? "opacity-0" : "opacity-100"}`}>
        <Hero />
        <Gallery />
        <About />
        <Experience />
        <Projects />
        <Research />
        <Achievements />
        <Education />
        <Contact />
        
        {/* Footer */}
        <footer className="py-8 px-4 text-center border-t border-border bg-card/50">
          <p className="text-sm text-muted-foreground font-mono">
            <span className="text-primary">$</span> © 2025 Somya Jaiswal. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
};

export default Index;

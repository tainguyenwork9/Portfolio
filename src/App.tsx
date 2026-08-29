import { useEffect, useState, useRef } from 'react';
import Lenis from 'lenis';
import { HeroSection } from './components/sections/HeroSection';
import { TechMarqueeSection } from './components/sections/TechMarqueeSection';
import { AboutSection } from './components/sections/AboutSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ContactSection } from './components/sections/ContactSection';

function App() {
  const [loaded, setLoaded] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Preloader
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Preloader */}
      <div className={`preloader ${loaded ? 'loaded' : ''}`}>
        <div className="preloader-spinner" />
      </div>

      <div className="min-h-screen bg-[#0C0C0C] font-sans selection:bg-white/20 selection:text-white relative" style={{ overflowX: 'clip' }}>
        
        {/* Global background layers */}
        <div className="bg-mesh" />
        <div className="bg-vignette" />
        <div className="bg-noise" />
        
        {/* Floating gradient orbs */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="bg-orb bg-orb-1" />
          <div className="bg-orb bg-orb-2" />
          <div className="bg-orb bg-orb-3" />
          <div className="bg-orb bg-orb-4" />
        </div>

        {/* Aurora */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="bg-aurora" />
        </div>

        {/* Content */}
        <div className="relative z-10 bg-grid">
          <HeroSection />
          
          <div className="glow-line" />
          
          <TechMarqueeSection />
          <AboutSection />
          <ServicesSection />
          
          <div className="glow-line" />
          
          <ProjectsSection />
          <ContactSection />
          
          {/* Footer */}
          <footer className="py-8 md:py-12 text-center border-t border-white/5 px-4">
            <p className="text-gray-500 text-xs md:text-sm">
              © {new Date().getFullYear()} Nguyễn Văn Tài. All rights reserved.
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;

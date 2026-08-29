import { Magnet } from '../Magnet';
import { ContactButton } from '../ContactButton';
import { FadeIn } from '../FadeIn';
import { Code2, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col pt-4 px-4 sm:px-6 md:px-12 pb-8 md:pb-12 overflow-hidden">
      {/* Navbar */}
      <FadeIn delay={0.1}>
        <nav className="flex justify-between items-center z-20 relative">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <svg className="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 512 512" fill="none">
              <defs>
                <linearGradient id="navBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#3B82F6" />
                  <stop offset="100%" stop-color="#8B5CF6" />
                </linearGradient>
              </defs>
              {/* N left stem */}
              <path d="M64 128 H136 V384 H64 Z" fill="url(#navBlueGrad)" />
              {/* N diagonal */}
              <path d="M136 128 L280 300 V384 L136 212 Z" fill="url(#navBlueGrad)" />
              {/* T top bar and stem optimized for dark background */}
              <path d="M220 128 H448 V192 H320 V384 H256 V192 H220 Z" fill="#F3F4F6" />
              {/* Code tags */}
              <g transform="translate(350, 220) scale(4)" stroke="#8B5CF6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none">
                <path d="M7 3 L2 8 L7 13" />
                <path d="M17 3 L22 8 L17 13" />
              </g>
              {/* Mouse Cursor */}
              <path d="M355 310 L395 360 L380 365 L405 400 L390 410 L365 375 L350 385 Z" fill="#F3F4F6" />
            </svg>
            <div className="hidden sm:flex flex-col">
              <span className="text-xs font-bold tracking-widest text-white leading-none">NGUYỄN VĂN TÀI</span>
              <span className="text-[9px] text-blue-400 tracking-[0.3em] font-medium mt-1 leading-none">DEVELOPER</span>
            </div>
          </div>
          
          {/* Desktop nav */}
          <ul className="hidden md:flex gap-6 lg:gap-8 text-sm text-[#D7E2EA] uppercase tracking-wider font-medium">
            <li><a href="#about" className="hover:text-white transition-colors">Giới thiệu</a></li>
            <li><a href="#skills" className="hover:text-white transition-colors">Kỹ năng</a></li>
            <li><a href="#projects" className="hover:text-white transition-colors">Dự án</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Liên hệ</a></li>
          </ul>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-[#D7E2EA] p-2" 
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile nav dropdown */}
        {menuOpen && (
          <div className="md:hidden glass-panel rounded-2xl mt-4 p-6 relative z-20">
            <ul className="flex flex-col gap-4 text-sm text-[#D7E2EA] uppercase tracking-wider font-medium">
              <li><a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-white transition-colors block py-1">Giới thiệu</a></li>
              <li><a href="#skills" onClick={() => setMenuOpen(false)} className="hover:text-white transition-colors block py-1">Kỹ năng</a></li>
              <li><a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-white transition-colors block py-1">Dự án</a></li>
              <li><a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-white transition-colors block py-1">Liên hệ</a></li>
            </ul>
          </div>
        )}
      </FadeIn>

      <div className="flex-1 flex flex-col justify-center items-center relative z-10 mt-12 md:mt-0">
        {/* Hero Portrait */}
        <FadeIn delay={0.3} direction="down">
          <Magnet padding={120} disabled={window.innerWidth < 768}>
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 rounded-[1.5rem] md:rounded-[2rem] bg-gradient-to-br from-gray-800 to-[#0C0C0C] border border-gray-700/50 shadow-2xl flex items-center justify-center mb-8 md:mb-12 relative group cursor-pointer overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(255,255,255,0.1)_0%,_transparent_70%)]" />
              <Code2 className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 text-gray-300 group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />
            </div>
          </Magnet>
        </FadeIn>

        {/* Massive H1 */}
        <FadeIn delay={0.5} direction="up">
          <h1 className="hero-heading text-[13vw] sm:text-[11vw] md:text-[9vw] leading-[0.9] font-bold text-center tracking-tighter">
            Nguyễn Văn Tài
          </h1>
        </FadeIn>

        {/* Subtitle */}
        <FadeIn delay={0.6} direction="up">
          <p className="text-[#D7E2EA]/60 text-sm sm:text-base md:text-xl mt-4 md:mt-6 text-center tracking-wide uppercase font-light">
            Full-stack Developer
          </p>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="mt-auto flex flex-col sm:flex-row justify-between items-center sm:items-end gap-6 sm:gap-8 relative z-10 pt-8 md:pt-12">
        <FadeIn delay={0.7} direction="right">
          <p className="text-[#D7E2EA]/70 text-xs sm:text-sm md:text-base max-w-[300px] leading-relaxed text-center sm:text-left">
            Xây dựng trải nghiệm web quy mô lớn với Laravel, Vue.js và các quy trình hiện đại.
          </p>
        </FadeIn>
        
        <FadeIn delay={0.8} direction="left">
          <ContactButton href="tel:0866796454">Liên hệ ngay</ContactButton>
        </FadeIn>
      </div>

      {/* Background gradients */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[700px] max-h-[700px] rounded-full blur-[100px] md:blur-[120px] pointer-events-none bg-[radial-gradient(circle,_rgba(99,102,241,0.1)_0%,_rgba(139,92,246,0.06)_40%,_transparent_70%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-[200px] md:h-[400px] bg-gradient-to-t from-[#0C0C0C] to-transparent pointer-events-none" />
    </section>
  );
}

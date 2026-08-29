import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Sử dụng trực tiếp file hình ảnh/logo gốc nguyên bản (Original SVGs) từ hệ thống Devicon CDN
// Trình duyệt sẽ tải nguyên trạng file gốc chính chủ mà không qua bất kỳ lớp giải mã/cắt xén nội bộ nào của React.
const techRow1 = [
  { 
    name: 'Laravel', 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg"
  },
  { 
    name: 'PHP', 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
  },
  { 
    name: 'Vue.js', 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg"
  },
  { 
    name: 'MySQL', 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
  },
  { 
    name: 'REST API', 
    // Giữ một biểu tượng mạng lưới toàn cầu thuần túy cho giao thức REST API
    logoSvg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34" />
        <polygon points="18 2 22 6 12 16 8 16 8 12 18 2" fill="#3B82F6" opacity="0.3" />
      </svg>
    )
  },
];

const techRow2 = [
  { 
    name: 'Tailwind CSS', 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
  },
  { 
    name: 'HTML5 / CSS3', 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
  },
  { 
    name: 'Bootstrap', 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
  },
  { 
    name: 'JavaScript', 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
  },
  { 
    name: 'Git', 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
  },
];

export function TechMarqueeSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -500]);

  const renderRow = (techs: any[]) => (
    [...techs, ...techs, ...techs].map((tech, i) => (
      <div 
        key={i} 
        className="flex-shrink-0 w-[200px] sm:w-[240px] md:w-[280px] h-[80px] sm:h-[90px] md:h-[100px] flex items-center gap-4 sm:gap-6 px-5 sm:px-8 rounded-xl sm:rounded-2xl glass-panel mx-2 sm:mx-4 hover:border-white/20 transition-colors group cursor-default"
      >
        <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10">
          {tech.logo ? (
            <img 
              src={tech.logo} 
              alt={tech.name} 
              className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(255,255,255,0.05)]" 
              loading="lazy" 
            />
          ) : (
            tech.logoSvg
          )}
        </div>
        <span className="text-base sm:text-lg md:text-xl font-bold tracking-wide text-white">{tech.name}</span>
      </div>
    ))
  );

  return (
    <section ref={containerRef} className="py-16 md:py-24 overflow-hidden relative z-10 flex flex-col gap-6 md:gap-8">
      <div className="text-center mb-4 md:mb-8">
        <span className="text-xs sm:text-sm text-gray-400 uppercase tracking-[0.3em] font-semibold">Công nghệ sử dụng</span>
      </div>
      
      <motion.div style={{ x: x1, willChange: 'transform' }} className="flex w-[300%] -ml-[100vw]">
        {renderRow(techRow1)}
      </motion.div>
      
      <motion.div style={{ x: x2, willChange: 'transform' }} className="flex w-[300%]">
        {renderRow(techRow2)}
      </motion.div>
    </section>
  );
}

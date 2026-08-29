import { Code2, ExternalLink } from 'lucide-react';
import { FadeIn } from '../FadeIn';

const projects = [
  {
    num: "01",
    title: "T&T Forklift",
    desc: "Hệ thống quản lý vận hành xe nâng toàn diện. Phát triển cả frontend và backend để giải quyết vấn đề deadline gấp và tối ưu hóa hiệu suất hệ thống.",
    techs: ["Laravel", "Vue.js", "MySQL", "TailwindCSS"],
    color: "from-gray-900/80 to-gray-950/90",
    github: "https://github.com/tainguyenwork9",
    demo: "#"
  },
  {
    num: "02",
    title: "Eco-Smart Store",
    desc: "Nền tảng thương mại điện tử hiện đại tích hợp AI Chatbot hỗ trợ khách hàng. Bao gồm quản lý sản phẩm mạnh mẽ và trải nghiệm giỏ hàng liền mạch.",
    techs: ["Laravel", "Vue.js", "REST API", "AI Chatbot"],
    color: "from-gray-800/80 to-gray-900/90",
    github: "https://github.com/tainguyenwork9",
    demo: "#"
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 relative z-10 px-4 sm:px-6 md:px-12">
      <div className="max-w-6xl mx-auto mb-12 sm:mb-16 md:mb-24 text-center">
        <FadeIn delay={0.1}>
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-white">Dự án tiêu biểu</h2>
        </FadeIn>
      </div>

      <div className="flex flex-col items-center gap-8 md:gap-10">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={`sticky w-full max-w-5xl rounded-2xl sm:rounded-[2rem] md:rounded-[3rem] p-6 sm:p-8 md:p-16 flex flex-col gap-8 md:gap-12 shadow-2xl border border-white/10 bg-gradient-to-br ${project.color}`}
            style={{ 
              top: `calc(80px + ${index * 30}px)`,
              zIndex: index + 1
            }}
          >
            <div className="space-y-5 sm:space-y-6 md:space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                <span className="text-base sm:text-xl md:text-2xl text-gray-400 font-medium">Dự án {project.num}</span>
                <div className="flex flex-wrap gap-2">
                  {project.techs.map((tech, tIndex) => (
                    <span key={tIndex} className="px-2.5 sm:px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs text-gray-300 font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <h3 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight">{project.title}</h3>
              <p className="text-sm sm:text-base md:text-xl text-gray-300 leading-relaxed max-w-3xl">{project.desc}</p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/5 text-sm sm:text-base">
                  <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Xem Mã Nguồn</span>
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white text-[#0C0C0C] hover:bg-gray-200 transition-colors text-sm sm:text-base">
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Xem Demo</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

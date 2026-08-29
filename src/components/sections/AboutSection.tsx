import { AnimatedText } from '../AnimatedText';
import { FadeIn } from '../FadeIn';
import { TerminalSquare, Database, Server, Webhook, GraduationCap, Briefcase, FolderGit2 } from 'lucide-react';

export function AboutSection() {
  const text = "Lập trình viên Full-stack tâm huyết, tập trung vào các ứng dụng hiện đại, có khả năng mở rộng cao. Xây dựng trải nghiệm web quy mô lớn với Laravel, Vue.js và các quy trình hiện đại.";

  return (
    <section id="about" className="relative min-h-screen py-20 md:py-32 flex flex-col items-center justify-center overflow-hidden">
      
      {/* Decorative 3D Icons - hidden on very small screens */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        <FadeIn delay={0.2} direction="down" fullWidth>
          <div className="absolute top-16 left-4 sm:top-20 sm:left-10 md:top-32 md:left-32 glass-panel p-4 sm:p-6 rounded-xl sm:rounded-2xl rotate-[-12deg]">
            <TerminalSquare className="w-8 h-8 sm:w-12 sm:h-12 text-gray-400" />
          </div>
        </FadeIn>
        
        <FadeIn delay={0.4} direction="up" fullWidth>
          <div className="absolute bottom-16 left-4 sm:bottom-20 sm:left-10 md:bottom-32 md:left-32 glass-panel p-4 sm:p-6 rounded-xl sm:rounded-2xl rotate-[12deg]">
            <Database className="w-8 h-8 sm:w-12 sm:h-12 text-gray-400" />
          </div>
        </FadeIn>

        <FadeIn delay={0.6} direction="down" fullWidth>
          <div className="absolute top-24 right-4 sm:top-32 sm:right-10 md:top-40 md:right-32 glass-panel p-4 sm:p-6 rounded-xl sm:rounded-2xl rotate-[15deg]">
            <Server className="w-8 h-8 sm:w-12 sm:h-12 text-gray-400" />
          </div>
        </FadeIn>

        <FadeIn delay={0.8} direction="up" fullWidth>
          <div className="absolute bottom-24 right-4 sm:bottom-32 sm:right-10 md:bottom-40 md:right-32 glass-panel p-4 sm:p-6 rounded-xl sm:rounded-2xl rotate-[-15deg]">
            <Webhook className="w-8 h-8 sm:w-12 sm:h-12 text-gray-400" />
          </div>
        </FadeIn>
      </div>

      {/* Main animated text */}
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10 mb-16 md:mb-24">
        <AnimatedText 
          text={text} 
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold leading-snug md:leading-snug tracking-tight text-white" 
        />
      </div>

      {/* Info Cards */}
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Education */}
          <FadeIn delay={0.3} direction="up">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 h-full">
              <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8 text-gray-400 mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">Học vấn</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Sinh viên năm 3 — Công nghệ Phần mềm
              </p>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">Đại học Duy Tân</p>
              <div className="mt-3 sm:mt-4 flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-bold text-white">3.6</span>
                <span className="text-gray-500 text-xs sm:text-sm">/ 4.0 GPA</span>
              </div>
            </div>
          </FadeIn>

          {/* Experience */}
          <FadeIn delay={0.4} direction="up">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 h-full">
              <Briefcase className="w-7 h-7 sm:w-8 sm:h-8 text-gray-400 mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">Kinh nghiệm</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Thực tập sinh Full-stack Developer
              </p>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">DZ Fullstack · 12/2025 – 04/2026</p>
              <ul className="mt-3 sm:mt-4 space-y-2">
                <li className="text-gray-400 text-xs flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-gray-500 mt-1.5 flex-shrink-0" />
                  Xây dựng module quản lý người dùng
                </li>
                <li className="text-gray-400 text-xs flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-gray-500 mt-1.5 flex-shrink-0" />
                  Tích hợp luồng thanh toán & đơn hàng
                </li>
                <li className="text-gray-400 text-xs flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-gray-500 mt-1.5 flex-shrink-0" />
                  Cải thiện tốc độ tải trang lên 40%
                </li>
              </ul>
            </div>
          </FadeIn>

          {/* Quick Stats */}
          <FadeIn delay={0.5} direction="up">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 h-full sm:col-span-2 lg:col-span-1">
              <FolderGit2 className="w-7 h-7 sm:w-8 sm:h-8 text-gray-400 mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">Thống kê nhanh</h3>
              <div className="space-y-4 sm:space-y-5 mt-3 sm:mt-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-400 text-xs sm:text-sm">Kinh nghiệm</span>
                    <span className="text-white text-xs sm:text-sm font-medium">&lt; 1 năm</span>
                  </div>
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[30%] bg-gradient-to-r from-indigo-500 to-purple-400 rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-400 text-xs sm:text-sm">Dự án hoàn thành</span>
                    <span className="text-white text-xs sm:text-sm font-medium">5+</span>
                  </div>
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[60%] bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-400 text-xs sm:text-sm">Công cụ hỗ trợ</span>
                    <span className="text-white text-xs sm:text-sm font-medium">5+</span>
                  </div>
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[60%] bg-gradient-to-r from-purple-500 to-pink-400 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

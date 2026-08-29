import { FadeIn } from '../FadeIn';

const skills = [
  {
    category: "Backend",
    items: [
      { name: "Laravel", level: 90 },
      { name: "PHP", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "REST API", level: 90 },
    ]
  },
  {
    category: "Frontend",
    items: [
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML5/CSS3", level: 90 },
      { name: "Vue.js", level: 85 },
      { name: "Bootstrap", level: 75 },
    ]
  }
];

export function ServicesSection() {
  return (
    <section id="skills" className="bg-white text-[#0C0C0C] rounded-t-[2rem] sm:rounded-t-[3rem] md:rounded-t-[5rem] py-20 md:py-32 px-4 sm:px-6 md:px-12 relative z-20">
      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0.1}>
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 tracking-tighter">Kỹ năng chuyên môn</h2>
          <p className="text-gray-500 text-sm sm:text-base md:text-lg mb-12 sm:mb-16 md:mb-20 max-w-2xl">Các công nghệ và framework tôi sử dụng hàng ngày để xây dựng sản phẩm chất lượng cao.</p>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {skills.map((group, gIndex) => (
            <FadeIn key={gIndex} delay={0.2 + gIndex * 0.15}>
              <div>
                <h3 className="text-xs sm:text-sm uppercase tracking-[0.3em] text-gray-400 font-medium mb-6 sm:mb-8">{group.category}</h3>
                <div className="space-y-6 sm:space-y-8">
                  {group.items.map((skill, sIndex) => (
                    <div key={sIndex}>
                      <div className="flex justify-between mb-2 sm:mb-3">
                        <span className="text-base sm:text-lg md:text-xl font-semibold">{skill.name}</span>
                        <span className="text-gray-400 text-sm sm:text-base font-medium">{skill.level}%</span>
                      </div>
                      <div className="w-full h-1.5 sm:h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-gray-800 to-gray-500 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

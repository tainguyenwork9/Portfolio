import { useState } from 'react';
import { FadeIn } from '../FadeIn';
import { ContactButton } from '../ContactButton';
import { Mail, Phone, MessageCircle, Send, CheckCircle2, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

const contactLinks = [
  {
    icon: Phone,
    label: "Điện thoại",
    value: "0866 796 454",
    href: "tel:0866796454"
  },
  {
    icon: Mail,
    label: "Email",
    value: "tain24190@gmail.com",
    href: "mailto:tain24190@gmail.com"
  },
  {
    icon: MessageCircle,
    label: "Zalo",
    value: "0866 796 454",
    href: "https://zalo.me/0866796454"
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "tainguyenwork9",
    href: "https://github.com/tainguyenwork9"
  }
];

export function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setErrorMsg('Vui lòng điền đầy đủ thông tin.');
      return;
    }

    setIsLoading(true);
    setErrorMsg('');

    try {
      await emailjs.send(
        "service_gq957dk",
        "template_ob0felp",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_name: "Nguyễn Văn Tài",
        },
        "rpUq9QjL4B7bwmKrq"
      );

      setIsSubmitted(true);
      setForm({ name: '', email: '', message: '' });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Email failed to send:', error);
      setErrorMsg('Có lỗi xảy ra khi gửi mail. Vui lòng thử lại sau!');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="pt-20 md:pt-32 pb-12 md:pb-20 px-4 sm:px-6 md:px-12 relative z-10">
      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0.1}>
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-white mb-4 sm:mb-6">
              Liên hệ với tôi
            </h2>
            <p className="text-gray-500 text-sm sm:text-base md:text-lg max-w-xl mx-auto">
              Bạn có dự án cần thực hiện? Hãy gửi tin nhắn trực tiếp cho tôi hoặc liên hệ qua các kênh hỗ trợ bên dưới.
            </p>
          </div>
        </FadeIn>

        {/* Main Grid Layout: Form on Left/Center, Quick Links on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 mb-12 sm:mb-16 items-start">
          
          {/* EmailJS Direct Contact Form */}
          <div className="lg:col-span-3 w-full">
            <FadeIn delay={0.2} direction="right">
              <div className="glass-panel rounded-2xl p-6 sm:p-10 relative overflow-hidden">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <Send className="w-6 h-6 text-blue-400" />
                  <span>Gửi tin nhắn trực tiếp</span>
                </h3>

                {isSubmitted ? (
                  <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-8 rounded-xl flex flex-col items-center justify-center text-center gap-4 animate-fade-in">
                    <CheckCircle2 className="w-16 h-16 text-emerald-400" />
                    <div>
                      <p className="font-bold text-xl sm:text-2xl">Gửi thành công!</p>
                      <p className="text-sm sm:text-base mt-2 text-emerald-400/80">Cảm ơn bạn đã liên hệ. Tôi sẽ phản hồi sớm nhất có thể.</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                    {errorMsg && (
                      <div className="bg-rose-500/10 border border-rose-500/20 text-rose-400 p-4 rounded-xl text-sm font-medium text-center">
                        {errorMsg}
                      </div>
                    )}

                    <div>
                      <label className="block text-xs sm:text-sm text-gray-300 mb-2 font-semibold uppercase tracking-wider">Họ và tên</label>
                      <input
                        type="text"
                        placeholder="Nhập tên của bạn"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors font-medium"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm text-gray-300 mb-2 font-semibold uppercase tracking-wider">Địa chỉ Email</label>
                      <input
                        type="email"
                        placeholder="name@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors font-medium"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm text-gray-300 mb-2 font-semibold uppercase tracking-wider">Nội dung tin nhắn</label>
                      <textarea
                        rows={5}
                        placeholder="Mô tả dự án hoặc lời nhắn của bạn..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none font-medium"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 text-sm sm:text-base shadow-xl shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Đang gửi...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Gửi tin nhắn</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>

          {/* Contact Links & Extra Information Side */}
          <div className="lg:col-span-2 flex flex-col gap-5 sm:gap-6 w-full">
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              {contactLinks.map((contact, index) => (
                <FadeIn key={index} delay={0.3 + index * 0.1} direction="up">
                  <a 
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="glass-panel rounded-2xl p-5 sm:p-6 flex flex-col items-center text-center gap-3 hover:bg-white/10 transition-all duration-300 group cursor-pointer block h-full"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                      <contact.icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                    <div className="w-full">
                      <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-1">{contact.label}</p>
                      <p className="text-white font-bold text-xs sm:text-sm break-all sm:line-clamp-1">{contact.value}</p>
                    </div>
                  </a>
                </FadeIn>
              ))}
            </div>

            {/* Direct Call & Socials */}
            <FadeIn delay={0.7} direction="up">
              <div className="glass-panel rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center gap-5 text-center">
                <a 
                  href="https://facebook.com/ntwzaii05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors text-xs sm:text-base font-semibold flex items-center gap-2.5"
                >
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  <span>Facebook: ntwzaii05</span>
                </a>

                <ContactButton href="tel:0866796454" className="w-full justify-center text-sm sm:text-base font-bold py-4">
                  Gọi ngay: 0866 796 454
                </ContactButton>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}

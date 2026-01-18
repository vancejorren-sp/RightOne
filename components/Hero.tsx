
import React from 'react';
import { motion } from 'framer-motion';
import { LineReveal, ScrollReveal } from './ScrollReveal';
import { ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleHeroClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-indigo-50/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="relative">
            <h1 className="text-6xl lg:text-[5.5rem] font-serif font-bold tracking-tight text-slate-900 leading-[1] mb-8">
              <div className="flex flex-wrap items-center gap-x-6">
                <LineReveal text="Find your" />
                <ScrollReveal direction="left" delay={0.4} duration={0.6}>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-[11px] font-bold tracking-wider uppercase whitespace-nowrap border border-indigo-100/50">
                    Modern Recruitment Solutions
                  </span>
                </ScrollReveal>
              </div>
              <div className="overflow-hidden pb-4 -mb-4">
                <motion.span 
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="block text-indigo-600 italic font-normal lowercase leading-[1.2]"
                >
                  right<span className="font-serif font-bold text-slate-900 not-italic"> one.</span>
                </motion.span>
              </div>
            </h1>
          </div>

          <ScrollReveal delay={0.3}>
            <p className="text-lg lg:text-xl text-slate-500 leading-relaxed mb-12 max-w-xl font-medium">
              Empowering young talent and providing mid-size companies with fast, quality, and affordable hiring. Your growth starts with the right people.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4} className="flex flex-col sm:flex-row gap-6">
            <a 
              href="#book" 
              onClick={(e) => handleHeroClick(e, '#book')}
              className="px-10 py-5 bg-indigo-600 text-white rounded-[2rem] font-bold text-lg hover:bg-indigo-700 transition-all flex items-center justify-center shadow-[0_20px_40px_-10px_rgba(145,0,73,0.3)] group"
            >
              Book a Call
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#services" 
              onClick={(e) => handleHeroClick(e, '#services')}
              className="px-10 py-5 bg-white border border-slate-300 text-[#2d3748] rounded-[2rem] font-bold text-lg hover:border-slate-400 hover:bg-slate-50 transition-all text-center shadow-sm"
            >
              Explore Services
            </a>
          </ScrollReveal>

          <ScrollReveal delay={0.6} className="mt-16 flex items-center space-x-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i}
                  src={`https://images.unsplash.com/photo-${i === 1 ? '1507003211169-0a1dd7228f2d' : i === 2 ? '1494790108377-be9c29b29330' : i === 3 ? '1500648767791-00dcc994a43e' : '1534528741775-53994a69daeb'}?w=100&h=100&fit=crop`} 
                  className="w-11 h-11 rounded-full border-2 border-white shadow-md grayscale hover:grayscale-0 transition-all duration-500" 
                  alt="Candidate" 
                />
              ))}
            </div>
            <p className="text-sm text-slate-400 font-medium">
              Trusted by <span className="text-slate-900 font-bold">200+ companies</span> worldwide
            </p>
          </ScrollReveal>
        </div>

        <div className="relative hidden lg:block">
          <ScrollReveal direction="left" delay={0.2} duration={1}>
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop" 
                alt="Professional HR" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Floating UI element */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 z-20 bg-white p-8 rounded-3xl shadow-2xl border border-slate-50 max-w-xs"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Right match found</h4>
                  <p className="text-xs text-slate-400 font-medium">Hired in less than 48 hours</p>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

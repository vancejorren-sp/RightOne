
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
    <section className="relative min-h-[85vh] flex items-center pt-24 pb-12 lg:pb-20 overflow-hidden bg-white">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-indigo-50/10 blur-[120px] rounded-full translate-x-1/4 -translate-y-1/4"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-7 xl:col-span-6">
          <div className="relative z-10 mb-6 lg:mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold tracking-tight text-slate-900 leading-[1.1]">
              <LineReveal text="Find your" className="-ml-1" />
              <div className="overflow-hidden pb-1 -mt-1 lg:-mt-2">
                <motion.span 
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="block text-indigo-600 italic font-normal lowercase"
                >
                  right<span className="font-serif font-bold text-slate-900 not-italic"> one.</span>
                </motion.span>
              </div>
            </h1>
            
            <ScrollReveal direction="up" delay={0.5} duration={0.8} className="mt-4 lg:mt-6">
              <span className="inline-block px-4 py-2 rounded-full bg-indigo-50/50 text-indigo-600 text-[10px] font-bold tracking-[0.2em] uppercase border border-indigo-100/50 shadow-sm">
                Modern Recruitment Solutions
              </span>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.6}>
            <p className="text-sm lg:text-base text-slate-500 leading-relaxed mb-8 max-w-lg font-medium">
              Empowering young talent and providing mid-size companies with fast, quality, and affordable hiring. Your growth starts with the right people.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.7} className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6">
            <a 
              href="#book" 
              onClick={(e) => handleHeroClick(e, '#book')}
              className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 text-white rounded-full font-bold text-sm lg:text-base hover:bg-indigo-700 transition-all flex items-center justify-center shadow-lg shadow-indigo-100 group"
            >
              Book a Call
              <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#services" 
              onClick={(e) => handleHeroClick(e, '#services')}
              className="w-full sm:w-auto px-8 py-3.5 bg-white border border-slate-200 text-slate-700 rounded-full font-bold text-sm lg:text-base hover:border-slate-300 hover:bg-slate-50 transition-all text-center shadow-sm"
            >
              Explore Services
            </a>
          </ScrollReveal>

          <ScrollReveal delay={0.9} className="mt-8 lg:mt-12 flex items-center space-x-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i}
                  src={`https://images.unsplash.com/photo-${i === 1 ? '1507003211169-0a1dd7228f2d' : i === 2 ? '1494790108377-be9c29b29330' : i === 3 ? '1500648767791-00dcc994a43e' : '1534528741775-53994a69daeb'}?w=100&h=100&fit=crop`} 
                  className="w-8 h-8 lg:w-9 lg:h-9 rounded-full border-2 border-white shadow-md grayscale hover:grayscale-0 transition-all duration-500" 
                  alt="Candidate" 
                />
              ))}
            </div>
            <p className="text-xs text-slate-400 font-medium">
              Trusted by <span className="text-slate-900 font-bold">200+ companies</span>
            </p>
          </ScrollReveal>
        </div>

        <div className="lg:col-span-5 xl:col-span-6 relative flex justify-center lg:justify-end">
          <ScrollReveal direction="left" delay={0.2} duration={1} className="w-full max-w-[420px] lg:max-w-md xl:max-w-lg">
            <div className="relative z-10 rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop" 
                alt="Professional HR" 
                className="w-full h-auto aspect-[4/5] lg:aspect-square object-cover"
              />
            </div>
            
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 z-20 bg-white p-4 lg:p-6 rounded-2xl shadow-xl border border-slate-50 max-w-[200px] lg:max-w-[240px]"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-indigo-50 text-indigo-600 rounded-lg lg:rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs lg:text-sm">Right match found</h4>
                  <p className="text-[9px] lg:text-[10px] text-slate-400 font-medium uppercase tracking-wider">Hired in 48 hours</p>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

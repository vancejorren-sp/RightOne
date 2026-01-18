
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
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-white">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-indigo-50/10 blur-[120px] rounded-full translate-x-1/4 -translate-y-1/4"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 xl:col-span-6">
          <div className="relative z-10">
            <h1 className="text-5xl md:text-6xl lg:text-[5rem] xl:text-[5.5rem] font-serif font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 lg:gap-x-6">
                <LineReveal text="Find your" className="pr-2" delay={0.1} />
                <ScrollReveal direction="left" delay={0.35} duration={0.5}>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-[10px] lg:text-[11px] font-bold tracking-widest uppercase whitespace-nowrap border border-indigo-100/50 align-middle">
                    Modern Recruitment Solutions
                  </span>
                </ScrollReveal>
              </div>
              <div className="overflow-hidden pb-4 px-2 -mb-4 -mx-2">
                <motion.span 
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-indigo-600 italic font-normal lowercase leading-[1.2]"
                >
                  right<span className="font-serif font-bold text-slate-900 not-italic"> one.</span>
                </motion.span>
              </div>
            </h1>
          </div>

          <ScrollReveal delay={0.4}>
            <p className="text-base lg:text-lg text-slate-500 leading-relaxed mb-10 max-w-xl font-medium">
              Empowering young talent and providing mid-size companies with fast, quality, and affordable hiring. Your growth starts with the right people.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.5} className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6">
            <a 
              href="#book" 
              onClick={(e) => handleHeroClick(e, '#book')}
              className="w-full sm:w-auto px-8 lg:px-10 py-4 lg:py-5 bg-indigo-600 text-white rounded-[2rem] font-bold text-base lg:text-lg hover:bg-indigo-700 transition-all flex items-center justify-center shadow-[0_15px_35px_-10px_rgba(145,0,73,0.3)] group"
            >
              Book a Call
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#services" 
              onClick={(e) => handleHeroClick(e, '#services')}
              className="w-full sm:w-auto px-8 lg:px-10 py-4 lg:py-5 bg-white border border-slate-200 text-[#2d3748] rounded-[2rem] font-bold text-base lg:text-lg hover:border-slate-300 hover:bg-slate-50 transition-all text-center shadow-sm"
            >
              Explore Services
            </a>
          </ScrollReveal>

          <ScrollReveal delay={0.6} className="mt-12 lg:mt-16 flex items-center space-x-4">
            <div className="flex -space-x-2.5">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i}
                  src={`https://images.unsplash.com/photo-${i === 1 ? '1507003211169-0a1dd7228f2d' : i === 2 ? '1494790108377-be9c29b29330' : i === 3 ? '1500648767791-00dcc994a43e' : '1534528741775-53994a69daeb'}?w=100&h=100&fit=crop`} 
                  className="w-10 h-10 lg:w-11 lg:h-11 rounded-full border-2 border-white shadow-md grayscale hover:grayscale-0 transition-all duration-500" 
                  alt="Candidate" 
                />
              ))}
            </div>
            <p className="text-sm text-slate-400 font-medium">
              Trusted by <span className="text-slate-900 font-bold">200+ companies</span> worldwide
            </p>
          </ScrollReveal>
        </div>

        <div className="lg:col-span-5 xl:col-span-6 relative flex justify-center lg:justify-end">
          <ScrollReveal direction="left" delay={0.15} duration={0.8} className="w-full max-w-[500px] xl:max-w-none">
            <div className="relative z-10 rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop" 
                alt="Professional HR" 
                className="w-full h-auto aspect-[4/5] lg:aspect-[3/4] object-cover"
              />
            </div>
            
            {/* Floating UI element */}
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 lg:-bottom-8 lg:-left-8 z-20 bg-white p-6 lg:p-8 rounded-2xl lg:rounded-3xl shadow-2xl border border-slate-50 max-w-[240px] lg:max-w-xs"
            >
              <div className="flex items-center space-x-3 lg:space-x-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-indigo-50 text-indigo-600 rounded-xl lg:rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm lg:text-base">Right match found</h4>
                  <p className="text-[10px] lg:text-xs text-slate-400 font-medium uppercase tracking-wider">Hired in 48 hours</p>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

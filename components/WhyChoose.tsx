
import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { CheckCircle2, DollarSign, Clock, Heart } from 'lucide-react';

export const WhyChoose: React.FC = () => {
  const reasons = [
    {
      icon: <DollarSign className="w-5 h-5" />,
      title: "Affordable",
      desc: "Premium results at a fraction of standard agency costs."
    },
    {
      icon: <CheckCircle2 className="w-5 h-5" />,
      title: "Verified",
      desc: "Rigorous multi-stage screening before you interview."
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Fast",
      desc: "Shortlist top candidates in under 48 hours on average."
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Human",
      desc: "We focus on potential, not just bullet points on a CV."
    }
  ];

  return (
    <section id="why-us" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-indigo-600 rounded-[2rem] lg:rounded-[3rem] p-8 lg:p-16 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500 rounded-full blur-3xl opacity-20 -mr-16 -mt-16"></div>
          
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 relative z-10">
            <div>
              <ScrollReveal direction="right">
                <h2 className="text-2xl lg:text-4xl font-bold leading-tight mb-6">
                  Why companies choose <span className="text-indigo-200">RightOne</span>.
                </h2>
                <p className="text-indigo-100 text-sm lg:text-base mb-8 max-w-lg">
                  We've reimagined recruitment to be faster, more transparent, and significantly more cost-effective.
                </p>
                <div className="flex space-x-10">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-1">98%</h3>
                    <p className="text-indigo-200 text-[10px] uppercase font-bold tracking-wider">Retention</p>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-1">48h</h3>
                    <p className="text-indigo-200 text-[10px] uppercase font-bold tracking-wider">Shortlist</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
              {reasons.map((r, i) => (
                <ScrollReveal key={i} delay={0.2 + (i * 0.1)} className="bg-indigo-700/30 p-5 rounded-xl border border-indigo-400/20">
                  <div className="w-9 h-9 bg-indigo-400/20 rounded-lg flex items-center justify-center mb-3">
                    {r.icon}
                  </div>
                  <h4 className="text-base font-bold mb-1">{r.title}</h4>
                  <p className="text-indigo-100 text-[11px] lg:text-xs leading-relaxed">
                    {r.desc}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

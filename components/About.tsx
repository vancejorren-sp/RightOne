
import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Target, Shield, Zap } from 'lucide-react';

export const About: React.FC = () => {
  const values = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Trust First",
      desc: "Transparency is our foundation. We build lasting relationships through honesty."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Results",
      desc: "Time is money. Our streamlined process ensures roles are filled within days, not weeks."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Quality Matching",
      desc: "We don't just fill seats. We match skills, culture, and ambitions perfectly."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="right">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-50 rounded-2xl -z-10"></div>
              <img 
                src="https://picsum.photos/seed/teamwork/800/600" 
                alt="Team working" 
                className="rounded-3xl shadow-xl w-full object-cover"
              />
              <div className="absolute -bottom-10 -right-10 hidden md:block w-48 h-48 bg-slate-50 rounded-full -z-10 border border-slate-100"></div>
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm">About RightOne</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-4 mb-8 leading-tight">
                We believe everyone deserves the <span className="text-indigo-600">Right Match.</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-10">
                RightOne was born from a simple observation: mid-size companies struggle with expensive recruitment, while young talent often gets overlooked. We bridge this gap by offering affordable, high-quality hiring solutions that put people first.
              </p>
            </ScrollReveal>

            <div className="space-y-6">
              {values.map((v, i) => (
                <ScrollReveal key={i} delay={0.1 * i} direction="left">
                  <div className="flex items-start space-x-4">
                    <div className="mt-1 w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      {v.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900">{v.title}</h4>
                      <p className="text-slate-500 mt-1">{v.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Target, Shield, Zap } from 'lucide-react';

export const About: React.FC = () => {
  const values = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Trust First",
      desc: "Transparency is our foundation. We build lasting relationships through honesty."
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Fast Results",
      desc: "Time is money. Our process ensures roles are filled within days, not weeks."
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Quality Matching",
      desc: "We match skills, culture, and ambitions perfectly for long-term success."
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal direction="right">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-indigo-50 rounded-xl -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" 
                alt="Team working" 
                className="rounded-2xl lg:rounded-3xl shadow-lg w-full object-cover max-h-[500px]"
              />
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <span className="text-indigo-600 font-bold tracking-widest uppercase text-xs lg:text-sm">About RightOne</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-2 mb-6 leading-tight">
                We believe everyone deserves the <span className="text-indigo-600">Right Match.</span>
              </h2>
              <p className="text-sm lg:text-base text-slate-600 leading-relaxed mb-8">
                RightOne was born from a simple observation: mid-size companies struggle with expensive recruitment, while young talent often gets overlooked. We bridge this gap by offering affordable solutions.
              </p>
            </ScrollReveal>

            <div className="space-y-5 lg:space-y-6">
              {values.map((v, i) => (
                <ScrollReveal key={i} delay={0.1 * i} direction="left">
                  <div className="flex items-start space-x-4">
                    <div className="mt-1 w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      {v.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900">{v.title}</h4>
                      <p className="text-sm text-slate-500 mt-0.5">{v.desc}</p>
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

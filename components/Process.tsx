
import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const Process: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Requirement",
      desc: "We dive deep into your specific technical and cultural needs."
    },
    {
      number: "02",
      title: "Scouting",
      desc: "Our team leverages networks to find the perfect candidates."
    },
    {
      number: "03",
      title: "Shortlisting",
      desc: "We screen applicants, presenting only the top 3-5 to you."
    },
    {
      number: "04",
      title: "Support",
      desc: "We assist with offers and follow up during onboarding."
    }
  ];

  return (
    <section id="process" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="text-indigo-600 font-bold tracking-widest uppercase text-xs lg:text-sm">How it works</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-2">Simple, streamlined hiring.</h2>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-[1px] bg-slate-100 -z-10"></div>

          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.1} className="text-center lg:text-left">
              <div className="relative inline-block mb-6">
                <div className="w-12 h-12 bg-white border-2 border-indigo-600 rounded-xl flex items-center justify-center mx-auto lg:mx-0 shadow-sm">
                  <span className="text-base font-bold text-indigo-600">{step.number}</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-500 text-xs lg:text-sm leading-relaxed">
                {step.desc}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

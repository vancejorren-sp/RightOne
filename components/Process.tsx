
import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const Process: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Requirement Gathering",
      desc: "We dive deep into your company culture and the specific technical needs of the role."
    },
    {
      number: "02",
      title: "Talent Scouting",
      desc: "Our team leverages AI tools and personal networks to find the perfect candidates."
    },
    {
      number: "03",
      title: "Candidate Shortlisting",
      desc: "We interview and screen applicants, presenting only the top 3-5 candidates to you."
    },
    {
      number: "04",
      title: "Continuous Support",
      desc: "We assist with offers, onboarding, and follow up during the first 90 days."
    }
  ];

  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <ScrollReveal>
            <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm">How it works</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-4">Simple, streamlined hiring.</h2>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-[2px] bg-slate-100 -z-10"></div>

          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.1} className="text-center lg:text-left">
              <div className="relative inline-block mb-8">
                <div className="w-16 h-16 bg-white border-2 border-indigo-600 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 shadow-lg shadow-indigo-50">
                  <span className="text-xl font-bold text-indigo-600">{step.number}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {step.desc}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

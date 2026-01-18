
import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Users, Briefcase, Search, Sparkles } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      title: "Recruitment",
      desc: "Full-cycle hiring for junior to mid-level roles. We handle job posting to final selection.",
      icon: <Users className="w-6 h-6" />,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Staffing",
      desc: "Flexible staffing for project-based needs. Get professionals exactly when you need them.",
      icon: <Briefcase className="w-6 h-6" />,
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      title: "Talent Sourcing",
      desc: "Headhunting passive candidates. We find the hidden gems for your niche roles.",
      icon: <Search className="w-6 h-6" />,
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "HR Consulting",
      desc: "Process optimization and culture building for growing companies looking to scale.",
      icon: <Sparkles className="w-6 h-6" />,
      color: "bg-rose-50 text-rose-600"
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <ScrollReveal>
          <span className="text-indigo-600 font-bold tracking-widest uppercase text-xs lg:text-sm">Our Services</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-2">Solutions for every stage.</h2>
        </ScrollReveal>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {services.map((s, i) => (
          <ScrollReveal key={i} delay={0.1 * i} className="h-full">
            <div className="bg-white p-6 lg:p-8 rounded-2xl lg:rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full group">
              <div className={`w-12 h-12 ${s.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform`}>
                {s.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{s.title}</h3>
              <p className="text-slate-500 leading-relaxed text-xs lg:text-sm">
                {s.desc}
              </p>
              <div className="mt-5 pt-5 border-t border-slate-50">
                <a href="#book" className="text-indigo-600 font-bold text-xs inline-flex items-center hover:translate-x-1 transition-transform">
                  Learn More <ChevronSmallRight />
                </a>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

const ChevronSmallRight = () => (
  <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
  </svg>
);

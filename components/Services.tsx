
import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Users, Briefcase, Search, Sparkles } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      title: "Hiring & Recruitment",
      desc: "Full-cycle recruitment for junior to mid-level roles. We handle everything from job posting to final selection.",
      icon: <Users className="w-7 h-7" />,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Staffing Solutions",
      desc: "Flexible staffing for project-based needs or temporary roles. Get skilled professionals exactly when you need them.",
      icon: <Briefcase className="w-7 h-7" />,
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      title: "Talent Sourcing",
      desc: "Headhunting top-tier passive candidates who aren't on job boards. We find the hidden gems for your niche roles.",
      icon: <Search className="w-7 h-7" />,
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "HR Consultancy",
      desc: "Process optimization, culture building, and salary benchmarking for growing companies looking to scale right.",
      icon: <Sparkles className="w-7 h-7" />,
      color: "bg-rose-50 text-rose-600"
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <ScrollReveal>
          <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm">Our Services</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-4">Solutions for every growth stage.</h2>
        </ScrollReveal>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s, i) => (
          <ScrollReveal key={i} delay={0.1 * i} className="h-full">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full group">
              <div className={`w-14 h-14 ${s.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{s.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {s.desc}
              </p>
              <div className="mt-6 pt-6 border-t border-slate-50">
                <a href="#book" className="text-indigo-600 font-bold text-sm inline-flex items-center hover:translate-x-1 transition-transform">
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
  <svg className="w-5 h-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
  </svg>
);

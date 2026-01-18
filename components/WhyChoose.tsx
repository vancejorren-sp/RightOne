
import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { CheckCircle2, DollarSign, Clock, Heart } from 'lucide-react';

export const WhyChoose: React.FC = () => {
  const reasons = [
    {
      icon: <DollarSign />,
      title: "Affordable Pricing",
      desc: "Premium hiring results at a fraction of standard agency costs. Perfect for SMB budgets."
    },
    {
      icon: <CheckCircle2 />,
      title: "Verified Talent",
      desc: "Every candidate undergoes a rigorous multi-stage screening before reaching your desk."
    },
    {
      icon: <Clock />,
      title: "Speed to Hire",
      desc: "Our vast talent pool allows us to shortlist top candidates in under 48 hours on average."
    },
    {
      icon: <Heart />,
      title: "People First",
      desc: "We focus on human potential, not just bullet points on a CV. We care about the 'why'."
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-indigo-600 rounded-[3rem] p-12 lg:p-20 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
          
          <div className="grid lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <ScrollReveal>
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-8">
                  Why companies choose <span className="text-indigo-200">RightOne</span> over traditional agencies.
                </h2>
                <p className="text-indigo-100 text-lg mb-12 max-w-lg">
                  We've reimagined recruitment to be faster, more transparent, and significantly more cost-effective for growing businesses.
                </p>
                <div className="flex space-x-12">
                  <div>
                    <h3 className="text-4xl font-bold text-white mb-2">98%</h3>
                    <p className="text-indigo-200 text-sm">Retention Rate</p>
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold text-white mb-2">48h</h3>
                    <p className="text-indigo-200 text-sm">Avg. Shortlist Time</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {reasons.map((r, i) => (
                <ScrollReveal key={i} className="bg-indigo-700/40 p-6 rounded-2xl border border-indigo-400/30">
                  <div className="w-10 h-10 bg-indigo-400/30 rounded-lg flex items-center justify-center mb-4">
                    {r.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{r.title}</h4>
                  <p className="text-indigo-100 text-sm leading-relaxed">
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


import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Phone, Mail, Send, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('Full Name') as string;
    const email = formData.get('Email') as string;
    const interest = formData.get('Interest') as string;
    const message = formData.get('Message') as string;

    const subject = encodeURIComponent(`Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nInterest: ${interest}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:shivampatadiya5@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 8000);
  };

  return (
    <section id="book" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-slate-50 rounded-[2rem] lg:rounded-[3rem] overflow-hidden grid lg:grid-cols-5 border border-slate-100 shadow-xl">
          <div className="lg:col-span-2 bg-indigo-600 p-8 lg:p-12 text-white flex flex-col justify-between">
            <div>
              <ScrollReveal direction="right">
                <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">Let's talk hiring.</h2>
                <p className="text-indigo-100 text-sm lg:text-base mb-10">
                  Ready to find the right one? Book a consultation call to get started.
                </p>
              </ScrollReveal>

              <div className="space-y-6 lg:space-y-8">
                <ScrollReveal direction="right" delay={0.1}>
                  <div className="flex items-center space-x-4 group cursor-pointer" onClick={() => window.location.href = 'tel:9724090650'}>
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-indigo-300 font-bold uppercase tracking-widest">Call</p>
                      <p className="text-base lg:text-lg font-semibold">9724090650</p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="right" delay={0.2}>
                  <div className="flex items-center space-x-4 group cursor-pointer" onClick={() => window.location.href = 'mailto:shivampatadiya5@gmail.com'}>
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-indigo-300 font-bold uppercase tracking-widest">Email</p>
                      <p className="text-base lg:text-lg font-semibold break-all">shivampatadiya5@gmail.com</p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-white/10 hidden lg:block">
              <p className="text-xs italic opacity-70 font-medium font-serif">
                "Finding talent shouldn't be hard. We make it simple."
              </p>
            </div>
          </div>

          <div className="lg:col-span-3 p-8 lg:p-12 bg-white relative">
            <ScrollReveal direction="left">
              <h3 className="text-xl lg:text-2xl font-serif font-bold text-slate-900 mb-6">Book a Call</h3>
              
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
                  <h4 className="text-xl font-serif font-bold text-slate-900 mb-2">Ready to send!</h4>
                  <p className="text-xs lg:text-sm text-slate-500">Your email app is open. Hit send to finish.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Name</label>
                      <input type="text" name="Full Name" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-1 focus:ring-indigo-600 outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Email</label>
                      <input type="email" name="Email" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-1 focus:ring-indigo-600 outline-none transition-all" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">I am looking for...</label>
                    <select name="Interest" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none cursor-pointer">
                      <option>Hiring New Talent</option>
                      <option>My Next Career Move</option>
                      <option>Staffing Solutions</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Message</label>
                    <textarea name="Message" rows={3} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none resize-none"></textarea>
                  </div>

                  <button type="submit" className="w-full py-3.5 bg-indigo-600 text-white rounded-xl font-bold text-base hover:bg-indigo-700 transition-all flex items-center justify-center shadow-lg shadow-indigo-50">
                    Confirm Booking <Send className="ml-2 w-4 h-4" />
                  </button>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

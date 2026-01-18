
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
    <section id="book" className="py-[4.2rem] lg:py-[5.25rem] bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-slate-50 rounded-[2.1rem] lg:rounded-[3.15rem] overflow-hidden grid lg:grid-cols-5 border border-slate-100 shadow-xl">
          <div className="lg:col-span-2 bg-indigo-600 p-[2.1rem] lg:p-[3.15rem] text-white flex flex-col justify-between">
            <div>
              <ScrollReveal direction="right">
                <h2 className="text-[1.97rem] lg:text-[2.625rem] font-serif font-bold mb-[1.575rem]">Let's talk hiring.</h2>
                <p className="text-indigo-100 text-[0.918rem] lg:text-[1.05rem] mb-[2.625rem]">
                  Ready to find the right one? Book a consultation call to get started.
                </p>
              </ScrollReveal>

              <div className="space-y-[1.575rem] lg:space-y-[2.1rem]">
                <ScrollReveal direction="right" delay={0.1}>
                  <div className="flex items-center space-x-[1.05rem] group cursor-pointer" onClick={() => window.location.href = 'tel:9724090650'}>
                    <div className="w-[2.625rem] h-[2.625rem] bg-white/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-[1.05rem] h-[1.05rem]" />
                    </div>
                    <div>
                      <p className="text-[0.656rem] text-indigo-300 font-bold uppercase tracking-widest">Call</p>
                      <p className="text-[1.05rem] lg:text-[1.18rem] font-semibold">9724090650</p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="right" delay={0.2}>
                  <div className="flex items-center space-x-[1.05rem] group cursor-pointer" onClick={() => window.location.href = 'mailto:shivampatadiya5@gmail.com'}>
                    <div className="w-[2.625rem] h-[2.625rem] bg-white/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-[1.05rem] h-[1.05rem]" />
                    </div>
                    <div>
                      <p className="text-[0.656rem] text-indigo-300 font-bold uppercase tracking-widest">Email</p>
                      <p className="text-[1.05rem] lg:text-[1.18rem] font-semibold break-all">shivampatadiya5@gmail.com</p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            <div className="mt-[3.15rem] pt-[1.575rem] border-t border-white/10 hidden lg:block">
              <p className="text-[0.78rem] italic opacity-70 font-medium font-serif">
                "Finding talent shouldn't be hard. We make it simple."
              </p>
            </div>
          </div>

          <div className="lg:col-span-3 p-[2.1rem] lg:p-[3.15rem] bg-white relative">
            <ScrollReveal direction="left">
              <h3 className="text-[1.31rem] lg:text-[1.575rem] font-serif font-bold text-slate-900 mb-[1.575rem]">Book a Call</h3>
              
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-[2.1rem] text-center">
                  <CheckCircle className="w-[3.15rem] h-[3.15rem] text-green-500 mb-[1.05rem]" />
                  <h4 className="text-[1.31rem] font-serif font-bold text-slate-900 mb-[0.525rem]">Ready to send!</h4>
                  <p className="text-[0.918rem] lg:text-[1.05rem] text-slate-500">Your email app is open. Hit send to finish.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-[1.05rem] lg:space-y-[1.3125rem]">
                  <div className="grid md:grid-cols-2 gap-[1.05rem]">
                    <div>
                      <label className="block text-[0.78rem] font-bold text-slate-700 mb-[0.4rem] uppercase tracking-wide">Name</label>
                      <input type="text" name="Full Name" required className="w-full px-[1.05rem] py-[0.78rem] bg-slate-50 border border-slate-200 rounded-xl text-[0.918rem] focus:ring-1 focus:ring-indigo-600 outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-[0.78rem] font-bold text-slate-700 mb-[0.4rem] uppercase tracking-wide">Email</label>
                      <input type="email" name="Email" required className="w-full px-[1.05rem] py-[0.78rem] bg-slate-50 border border-slate-200 rounded-xl text-[0.918rem] focus:ring-1 focus:ring-indigo-600 outline-none transition-all" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[0.78rem] font-bold text-slate-700 mb-[0.4rem] uppercase tracking-wide">I am looking for...</label>
                    <select name="Interest" className="w-full px-[1.05rem] py-[0.78rem] bg-slate-50 border border-slate-200 rounded-xl text-[0.918rem] outline-none cursor-pointer">
                      <option>Hiring New Talent</option>
                      <option>My Next Career Move</option>
                      <option>Staffing Solutions</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[0.78rem] font-bold text-slate-700 mb-[0.4rem] uppercase tracking-wide">Message</label>
                    <textarea name="Message" rows={3} className="w-full px-[1.05rem] py-[0.78rem] bg-slate-50 border border-slate-200 rounded-xl text-[0.918rem] outline-none resize-none"></textarea>
                  </div>

                  <button type="submit" className="w-full py-[0.92rem] bg-indigo-600 text-white rounded-xl font-bold text-[1.05rem] hover:bg-indigo-700 transition-all flex items-center justify-center shadow-lg shadow-indigo-100/50">
                    Confirm Booking <Send className="ml-2 w-[1.05rem] h-[1.05rem]" />
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

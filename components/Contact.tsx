
import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Phone, Mail, Send, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Get form data using the FormData API
    const formData = new FormData(e.currentTarget);
    const name = formData.get('Full Name') as string;
    const email = formData.get('Email') as string;
    const interest = formData.get('Interest') as string;
    const message = formData.get('Message') as string;

    // Construct a well-formatted mailto body with URL encoding
    const subject = encodeURIComponent(`New Booking Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Full Name: ${name}\n` +
      `Email: ${email}\n` +
      `Interest: ${interest}\n\n` +
      `Message:\n${message}`
    );

    // Trigger the mail client with pre-filled data
    window.location.href = `mailto:shivampatadiya5@gmail.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
    // Success message stays until manually reset or after a long timeout
    setTimeout(() => setSubmitted(false), 8000);
  };

  return (
    <section id="book" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-slate-50 rounded-[3rem] overflow-hidden grid lg:grid-cols-5 border border-slate-100 shadow-2xl">
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-2 bg-indigo-600 p-12 lg:p-16 text-white flex flex-col justify-between">
            <div>
              <ScrollReveal direction="right">
                <h2 className="text-4xl font-serif font-bold mb-8">Let's talk about your next hire.</h2>
                <p className="text-indigo-100 mb-12">
                  Ready to find the right one? Book a consultation call or send us a message to get started.
                </p>
              </ScrollReveal>

              <div className="space-y-8">
                <ScrollReveal direction="right" delay={0.1}>
                  <div className="flex items-center space-x-4 group cursor-pointer" onClick={() => window.location.href = 'tel:9724090650'}>
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-indigo-300 font-bold uppercase tracking-widest">Call Us</p>
                      <p className="text-lg font-semibold">9724090650</p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="right" delay={0.2}>
                  <div className="flex items-center space-x-4 group cursor-pointer" onClick={() => window.location.href = 'mailto:shivampatadiya5@gmail.com'}>
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-indigo-300 font-bold uppercase tracking-widest">Email Us</p>
                      <p className="text-lg font-semibold">shivampatadiya5@gmail.com</p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-white/10">
              <p className="text-sm italic opacity-70 font-medium leading-relaxed font-serif">
                "Finding the right talent shouldn't be hard. We're here to make it simple."
              </p>
            </div>
          </div>

          {/* Form Area */}
          <div className="lg:col-span-3 p-12 lg:p-16 bg-white relative">
            <ScrollReveal direction="left">
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-8">Book a Call</h3>
              
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 animate-bounce">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-serif font-bold text-slate-900 mb-2">Message Prepared!</h4>
                  <p className="text-slate-500 max-w-sm mx-auto">Your email client has been opened. Please hit "Send" in that window to finish your request.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-indigo-600 font-bold hover:underline"
                  >
                    Go back to form
                  </button>
                </div>
              ) : (
                <form 
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                      <input 
                        type="text" 
                        name="Full Name"
                        required 
                        placeholder="John Doe"
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-600 outline-none transition-all" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                      <input 
                        type="email" 
                        name="Email"
                        required 
                        placeholder="john@email.com"
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-600 outline-none transition-all" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">I am looking for...</label>
                    <select 
                      name="Interest"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-600 outline-none transition-all cursor-pointer"
                    >
                      <option>Hiring New Talent</option>
                      <option>My Next Career Move</option>
                      <option>Business Staffing Solutions</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                    <textarea 
                      name="Message"
                      rows={4} 
                      placeholder="How can we help you today?"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-600 outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all flex items-center justify-center shadow-lg shadow-indigo-100 group"
                  >
                    Confirm Booking
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                  <p className="text-center text-xs text-slate-400 font-medium">
                    This safely prepares a message in your preferred email app.
                  </p>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};


import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -70% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sectionIds = ['about', 'services', 'why-us', 'process', 'book'];
    
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace('#', '');
    if (targetId === '') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Why Us', href: '#why-us', id: 'why-us' },
    { label: 'Process', href: '#process', id: 'process' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a 
          href="#" 
          onClick={(e) => handleNavClick(e, '#')} 
          className="flex items-center gap-2 group relative -left-4"
        >
          <img 
            src="https://res.cloudinary.com/dlaykkhkc/image/upload/v1768728865/Rightone_Logo_f9irxr.svg" 
            alt="RightOne Icon" 
            className="h-10 w-auto"
          />
          <span className="text-2xl font-serif font-bold tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
            RightOne<span className="text-indigo-600">.</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.id} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm font-semibold transition-colors duration-300 relative group ${
                activeSection === link.id ? 'text-indigo-600' : 'text-slate-600 hover:text-indigo-600'
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-indigo-600 transition-all duration-300 ${
                activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </a>
          ))}
          <a 
            href="#book" 
            onClick={(e) => handleNavClick(e, '#book')}
            className={`bg-indigo-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 ${
              activeSection === 'book' ? 'ring-2 ring-indigo-600 ring-offset-2' : ''
            }`}
          >
            Book a Call
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-900 p-2" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-2xl border-t md:hidden flex flex-col p-8 space-y-6">
          {navLinks.map((link) => (
            <a 
              key={link.id} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-xl font-bold ${
                activeSection === link.id ? 'text-indigo-600' : 'text-slate-800'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#book" 
            onClick={(e) => handleNavClick(e, '#book')}
            className="bg-indigo-600 text-white px-5 py-4 rounded-2xl text-center font-bold text-lg shadow-xl shadow-indigo-100"
          >
            Book a Call
          </a>
        </div>
      )}
    </nav>
  );
};

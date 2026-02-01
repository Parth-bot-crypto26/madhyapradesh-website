import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

// 1. IMPORT THE IMAGE HERE
// (Adjust the path '../assets/' depending on where your Navbar.jsx is located relative to the assets folder)
import mpLogo from '../assets/mp-logo.png'; 

const navLinks = [
  // ... keep your links same as before ...
  { name: 'Home', path: '/' },
  { name: 'Explore', path: '/explore' },
  { name: 'Temples', path: '/temples' },
  { name: 'Festivals', path: '/festivals' },
  { name: 'Cuisine', path: '/cuisine' },
  { name: 'Languages', path: '/languages' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* --- LOGO SECTION START --- */}
          <Link to="/" className="flex items-center gap-3 group">
            {/* 2. REPLACED THE DIV/SPAN WITH IMG TAG */}
            <img 
               src={mpLogo} 
               alt="Madhya Pradesh Government Seal" 
               className="w-12 h-12 object-contain" 
            />
            
            <div className="flex flex-col">
              <span className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                Madhya Pradesh
              </span>
              <span className="text-xs text-muted-foreground font-handwritten text-lg -mt-1">
                The Heart of India
              </span>
            </div>
          </Link>
          {/* --- LOGO SECTION END --- */}

          {/* ... Rest of your code (Desktop Nav, CTA, Mobile Button) ... */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-sans text-sm font-medium transition-colors link-underline ${
                  location.pathname === link.path
                    ? 'text-primary'
                    : 'text-foreground/80 hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              to="/explore"
              className="px-6 py-2.5 rounded-full gradient-forest text-primary-foreground font-sans font-medium text-sm hover:opacity-90 transition-opacity shadow-cultural"
            >
              Start Exploring
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* ... Mobile Menu code ... */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-border"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-sans text-base font-medium py-2 ${
                    location.pathname === link.path
                      ? 'text-primary'
                      : 'text-foreground/80'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/explore"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 px-6 py-3 rounded-full gradient-forest text-primary-foreground font-sans font-medium text-sm text-center"
              >
                Start Exploring
              </Link>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};
import { motion } from 'framer-motion';
import { ChevronDown, Play } from 'lucide-react';
import heroImage from '@/assets/hero-mp.jpg';

export const HeroSection = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Khajuraho Temples Madhya Pradesh"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        {/* Namaste Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <span className="font-handwritten text-4xl md:text-5xl text-primary-foreground/90">
            नमस्ते
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 max-w-5xl leading-tight"
        >
          Discover{' '}
          <span className="text-gradient-gold inline-block">Madhya Pradesh</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="font-sans text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-8 leading-relaxed"
        >
          Embark on a journey through the Heart of India, where ancient temples 
          showcase exquisite artistry and wildlife roams free in pristine forests.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="/explore"
            className="px-8 py-4 rounded-full gradient-saffron text-primary-foreground font-sans font-semibold text-base hover:opacity-90 transition-all shadow-warm-lg hover:shadow-2xl transform hover:-translate-y-0.5"
          >
            Begin Your Journey
          </a>
          <button className="flex items-center gap-3 px-6 py-4 rounded-full glass text-primary-foreground font-sans font-medium text-base hover:bg-white/20 transition-all group">
            <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center group-hover:bg-primary-foreground/30 transition-colors">
              <Play size={16} fill="currentColor" />
            </div>
            Watch Story
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
      >
        <span className="text-xs font-sans uppercase tracking-widest">Scroll to Explore</span>
        <ChevronDown size={24} className="animate-scroll-bounce" />
      </motion.button>

      {/* Side Stats */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-8"
      >
        {[
          { number: '500+', label: 'Heritage Sites' },
          { number: '25+', label: 'National Parks' },
          { number: '3', label: 'UNESCO Sites' },
        ].map((stat, index) => (
          <div key={index} className="text-right">
            <div className="text-3xl font-serif font-bold text-primary-foreground">{stat.number}</div>
            <div className="text-xs font-sans text-primary-foreground/60 uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

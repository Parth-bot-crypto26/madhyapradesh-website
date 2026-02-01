import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Send } from 'lucide-react';
import tigerGif from '@/assets/tiger-run.gif';

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 md:py-32 paper-texture relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content - Left Side */}
          <div className="z-10">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="font-handwritten text-2xl text-secondary inline-block mb-4"
            >
              Begin Your Journey
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight"
            >
              Ready to Explore the{' '}
              <span className="text-gradient-forest">Heart of India</span>?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg"
            >
              Subscribe to our newsletter and receive curated guides, festival updates, 
              and hidden gems from the heart of incredible India.
            </motion.p>

            {/* Newsletter Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full bg-card/80 backdrop-blur-sm border border-border font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
              <button
                type="submit"
                className="px-8 py-4 rounded-full gradient-forest text-primary-foreground font-sans font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-cultural"
              >
                Subscribe
                <Send size={18} />
              </button>
            </motion.form>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="/explore"
                className="flex items-center gap-2 font-sans text-sm font-medium text-primary hover:text-secondary transition-colors link-underline"
              >
                Explore All Categories
                <ArrowRight size={14} />
              </a>
              <a
                href="/temples"
                className="flex items-center gap-2 font-sans text-sm font-medium text-primary hover:text-secondary transition-colors link-underline"
              >
                Plan Your Heritage Tour
                <ArrowRight size={14} />
              </a>
            </motion.div>
          </div>

          {/* Running Tiger Container - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
            className="relative flex justify-center items-center"
          >
            {/* The Tiger GIF with blend mode to remove background */}
            <img
              src={tigerGif}
              alt="Running Bengal Tiger Animation"
              className="w-full h-auto object-contain mix-blend-multiply scale-125"
            />

            {/* Repositioned Floating Info Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute -bottom-4 right-0 p-6 rounded-2xl bg-card/90 backdrop-blur-md border border-border shadow-cultural-lg max-w-[200px] text-right"
            >
              <div className="font-handwritten text-2xl text-secondary mb-1">500+ Tigers</div>
              <h4 className="font-serif text-sm font-bold text-foreground">Kanha National Park</h4>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
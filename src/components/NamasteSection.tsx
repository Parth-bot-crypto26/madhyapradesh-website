import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import gondPattern from '@/assets/gond-pattern.png';

export const NamasteSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden paper-texture">
      {/* Gond Art Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: `url(${gondPattern})`, backgroundSize: '300px' }}
      />

      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-4">
              <div className="w-16 h-px bg-secondary/30" />
              <span className="font-handwritten text-3xl text-secondary">Welcome</span>
              <div className="w-16 h-px bg-secondary/30" />
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight"
          >
            <span className="font-handwritten text-5xl md:text-6xl text-secondary block mb-4">नमस्ते</span>
            The{' '}
            <span className="text-gradient-forest">Heart of India</span> Beckons
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-sans text-lg md:text-xl text-muted-foreground leading-relaxed mb-8"
          >
            Madhya Pradesh, known as <span className="text-primary font-medium">Bharat Ka Dil</span> (The Heart of India), 
            is a treasure trove of ancient temples, magnificent forts, dense wildlife sanctuaries, 
            and vibrant tribal cultures. Here, history comes alive in stone carvings, 
            and nature reveals its most magnificent creations.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-sans text-base text-muted-foreground/80 leading-relaxed mb-12"
          >
            From the UNESCO World Heritage sites of Khajuraho and Sanchi to the tiger reserves 
            of Kanha and Bandhavgarh, from the sacred ghats along the Narmada to the intricate 
            Gond art, Madhya Pradesh preserves a rich tapestry of traditions spanning millennia.
          </motion.p>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="section-divider"
          />

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12"
          >
            <p className="font-serif text-2xl md:text-3xl italic text-foreground/80">
              "Where ancient wisdom is carved in stone, and nature paints its masterpiece."
            </p>
            <cite className="block mt-4 font-sans text-sm text-muted-foreground not-italic">
              — The Spirit of Central India
            </cite>
          </motion.blockquote>
        </div>
      </div>
    </section>
  );
};

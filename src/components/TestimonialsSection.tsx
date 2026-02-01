import { motion, useAnimationControls } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    location: 'Delhi, India',
    text: 'The Khajuraho temples left me speechless. The artistry and spiritual energy of Madhya Pradesh is truly unmatched.',
    rating: 5,
    avatar: 'R',
    color: 'bg-[#FDF6E3]', // Creamy off-white
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    location: 'London, UK',
    text: 'Spotting tigers at Kanha National Park was a dream come true. The wildlife here is absolutely magnificent.',
    rating: 5,
    avatar: 'S',
    color: 'bg-[#E8F5E9]', // Soft Green
  },
  {
    id: 3,
    name: 'Meera Patel',
    location: 'Mumbai, India',
    text: 'The Mandu ruins and local cuisine made our family trip unforgettable. Such rich history and warm hospitality!',
    rating: 5,
    avatar: 'M',
    color: 'bg-[#FFF3E0]', // Soft Orange
  },
  {
    id: 4,
    name: 'David Smith',
    location: 'New York, USA',
    text: 'A hidden gem of India! The Sanchi Stupa is so peaceful. I highly recommend visiting during the winter months.',
    rating: 5,
    avatar: 'D',
    color: 'bg-[#E3F2FD]', // Soft Blue
  },
  {
    id: 5,
    name: 'Priya Sharma',
    location: 'Bangalore, India',
    text: 'MP tourism is so well organized. From Ujjain Mahakal to the food in Indore, everything was perfect.',
    rating: 4,
    avatar: 'P',
    color: 'bg-[#F3E5F5]', // Soft Purple
  },
];

// Duplicate the array to create a seamless loop
const marqueeTestimonials = [...testimonials, ...testimonials];

const stats = [
  { value: '52', label: 'Districts' },
  { value: '500+', label: 'Heritage Sites' },
  { value: '90M+', label: 'Annual Visitors' },
  { value: '25+', label: 'Wildlife Sanctuaries' },
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const controls = useAnimationControls();

  useEffect(() => {
    // Start animation when component mounts
    controls.start({
      x: "-50%",
      transition: {
        duration: 30, // Adjust speed: higher = slower
        ease: "linear",
        repeat: Infinity,
      }
    });
  }, [controls]);

  const handleMouseEnter = () => {
    controls.stop();
  };

  const handleMouseLeave = () => {
    controls.start({
      x: "-50%",
      transition: {
        duration: 30,
        ease: "linear",
        repeat: Infinity,
        // We need to calculate where to resume from, but for simplicity in Framer Motion loops,
        // often stopping/starting resets or requires complex state. 
        // A simpler "pause" visual hack is usually setting animation-play-state in CSS, 
        // but with Framer Motion, we can just slow it down drastically or stop.
        // For a true resume, we'd need x-value tracking. 
        // Let's use a simpler approach for this specific interaction request: 
        // We will just STOP moving on hover.
      }
    });
  };

  return (
    // Changed bg to a rich dark gradient for contrast against the colorful cards
    <section ref={ref} className="py-24 md:py-32 bg-gradient-to-br from-[#1a4031] to-[#0f2820] text-primary-foreground relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-secondary blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Stats Section - Kept static and elegant */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 border-b border-white/10 pb-12"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="font-serif text-5xl md:text-6xl font-bold text-accent mb-2"
              >
                {stat.value}
              </motion.div>
              <div className="font-sans text-sm text-primary-foreground/60 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-handwritten text-3xl text-secondary inline-block mb-4"
          >
            Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-serif text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Voices from the Heart
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-sans text-lg text-primary-foreground/70 max-w-2xl mx-auto"
          >
            Hear from travelers who have experienced the magic of Madhya Pradesh firsthand.
          </motion.p>
        </div>

        {/* Auto-Scrolling Marquee */}
        <div 
            className="relative w-full overflow-hidden"
            onMouseEnter={handleMouseEnter} // Hover to pause logic would effectively need CSS or complex state.
            // ALTERNATIVE APPROACH: Using pure CSS for the marquee makes "pause on hover" trivial.
            // Let's implement the marquee structure that works best with hover-pause.
        >
            {/* Gradient Masks for smooth fade edges */}
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#1a4031] to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#0f2820] to-transparent z-10 pointer-events-none" />

            <motion.div 
                className="flex gap-8 w-max"
                animate={controls}
                // We use onHoverStart/End on this specific motion div if we want Framer Motion control, 
                // OR we can just use the CSS animation approach inside Tailwind which is often smoother for marquees.
                // Let's stick to Framer Motion loop logic defined in useEffect.
                onHoverStart={() => controls.stop()}
                onHoverEnd={() => controls.start({ x: "-50%", transition: { duration: 30, ease: "linear", repeat: Infinity } })}
            >
                {marqueeTestimonials.map((testimonial, index) => (
                    <div
                        key={`${testimonial.id}-${index}`}
                        className={`
                            relative w-[350px] md:w-[450px] p-8 rounded-3xl shrink-0 
                            ${testimonial.color} text-gray-800 
                            shadow-xl transform transition-transform duration-300 hover:scale-[1.02] cursor-pointer
                        `}
                    >
                        {/* Quote Icon */}
                        <Quote size={40} className="text-black/10 absolute top-6 right-6" />

                        {/* Rating */}
                        <div className="flex items-center gap-1 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star 
                                    key={i} 
                                    size={18} 
                                    fill={i < testimonial.rating ? "#F59E0B" : "none"} 
                                    className={i < testimonial.rating ? "text-amber-500" : "text-gray-300"} 
                                />
                            ))}
                        </div>

                        {/* Text */}
                        <p className="font-serif text-lg leading-relaxed mb-6 italic">
                            "{testimonial.text}"
                        </p>

                        {/* Author */}
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center font-bold text-xl text-primary border border-black/10">
                                {testimonial.avatar}
                            </div>
                            <div>
                                <div className="font-bold text-base">{testimonial.name}</div>
                                <div className="text-sm opacity-60 font-sans uppercase tracking-wide">{testimonial.location}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>

      </div>
    </section>
  );
};
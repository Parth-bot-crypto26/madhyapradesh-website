import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Calendar, MapPin } from 'lucide-react';

// Assets
import lRang from '@/assets/festivals/lokrang-fest.png';
import bHaat from '@/assets/festivals/bhagoria-haat-fest.jpg';
import folkDanceImage from '@/assets/festivals/khajuraho-fest.png';
import uSimhastha from '@/assets/festivals/ujjain-simhastha-fest.png';
import mUtsav from '@/assets/festivals/malwa-utsav-fest.jpg';
import hFest from '@/assets/festivals/hareli-fest.jpg';
import nFest from '@/assets/festivals/navratri-fest.jpg';
import narmada_mahotsav from '@/assets/festivals/narmada-fest.png';
import tSamaroha from '@/assets/festivals/tansen-samaroha-fest.jpeg';
import manduFest from '@/assets/festivals/mandu-utsav-fest.jpeg';
import mahakaleshwarImage from '@/assets/mahakaleshwar.jpg';
import heroImage from '@/assets/hero-mp.jpg'; 

// --- MASTER LIST OF FESTIVALS (Chronological Order) ---
// monthIndex: 0 = Jan, 1 = Feb, ... 11 = Dec
const MASTER_FESTIVALS = [
  {
    id: 'lokrang',
    name: 'Lokrang Festival',
    monthIndex: 0, // January
    date: 'January 26-30',
    location: 'Bhopal',
    description: 'A vibrant folk arts festival showcasing tribal music, dance, and crafts from across India.',
    image: lRang,
  },
  {
    id: 'khajuraho',
    name: 'Khajuraho Dance Festival',
    monthIndex: 1, // February
    date: 'February 20-26',
    location: 'Khajuraho',
    description: 'A week-long celebration of classical Indian dance forms against the backdrop of medieval temples.',
    image: folkDanceImage, // Using dance image
  },
  {
    id: 'bhagoria',
    name: 'Bhagoria Haat',
    monthIndex: 2, // March
    date: 'March (Pre-Holi)',
    location: 'Jhabua',
    description: 'An exuberant tribal festival of the Bhils, famous for its colorful markets and matchmaking traditions.',
    image: bHaat, 
  },
  {
    id: 'simhastha',
    name: 'Ujjain Simhastha',
    monthIndex: 3, // April
    date: 'April-May',
    location: 'Ujjain',
    description: 'The great Kumbh Mela held on the banks of Shipra. (Next Major: 2028, but mini-fairs occur annually).',
    image: uSimhastha,
  },
  {
    id: 'malwa',
    name: 'Malwa Utsav',
    monthIndex: 4, // May
    date: 'May',
    location: 'Indore & Ujjain',
    description: 'A celebration of the culture, cuisine, and arts of the Malwa plateau.',
    image: mUtsav,
  },
  {
    id: 'hareli',
    name: 'Hareli',
    monthIndex: 7, // August
    date: 'August',
    location: 'Rural MP',
    description: 'The festival of greenery marking the start of the agricultural year.',
    image: hFest,
  },
  {
    id: 'navratri',
    name: 'Navratri Celebrations',
    monthIndex: 9, // October
    date: 'October',
    location: 'Statewide',
    description: 'Nine nights of dance and devotion honoring Goddess Durga.',
    image: nFest,
  },
  {
    id: 'narmada',
    name: 'Narmada Mahotsav',
    monthIndex: 10, // November
    date: 'November (Kartik Purnima)',
    location: 'Maheshwar',
    description: 'A grand celebration honoring the holy Narmada river with rituals and music.',
    image: narmada_mahotsav,
  },
  {
    id: 'tansen',
    name: 'Tansen Samaroh',
    monthIndex: 11, // December
    date: 'December',
    location: 'Gwalior',
    description: 'India\'s oldest and most prestigious classical music festival honoring Mian Tansen.',
    image: tSamaroha,
  },
  {
    id: 'mandu',
    name: 'Mandu Utsav',
    monthIndex: 11, // December
    date: 'Dec - Jan',
    location: 'Mandu',
    description: 'Celebrating the romance and ruins of the City of Joy with adventure and art.',
    image: manduFest,
  },
];

export const FestivalsSection = () => {
  const [items, setItems] = useState(MASTER_FESTIVALS);

  // --- DYNAMIC TIME LOGIC ---
  useEffect(() => {
    const currentMonth = new Date().getMonth(); // 0-11
    
    // Logic:
    // 1. Filter festivals that are yet to come this year (month >= current)
    // 2. Filter festivals that have passed (month < current)
    // 3. Put upcoming first, then wrap the passed ones as "Next Year"
    
    const upcoming = MASTER_FESTIVALS.filter(f => f.monthIndex >= currentMonth);
    const passed = MASTER_FESTIVALS.filter(f => f.monthIndex < currentMonth);
    
    // We add a 'yearLabel' property to distinguish
    const upcomingWithLabel = upcoming.map(f => ({ ...f, label: 'Upcoming This Year' }));
    const passedWithLabel = passed.map(f => ({ ...f, label: 'Coming Next Year' }));

    // Merge: Upcoming first, then next year's cycle
    setItems([...upcomingWithLabel, ...passedWithLabel]);
  }, []);

  // Move the first item to the end (Next)
  const handleNext = () => {
    setItems((prev) => {
      const newItems = [...prev];
      const first = newItems.shift();
      if (first) newItems.push(first);
      return newItems;
    });
  };

  // Move the last item to the start (Prev)
  const handlePrev = () => {
    setItems((prev) => {
      const newItems = [...prev];
      const last = newItems.pop();
      if (last) newItems.unshift(last);
      return newItems;
    });
  };

  return (
    <section className="py-24 md:py-32 paper-texture overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-8 h-[600px] md:h-[700px] relative">
        
        {/* Header Title (Static) */}
        <div className="absolute top-0 left-4 md:left-8 z-20">
            <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="font-handwritten text-3xl text-secondary inline-block mb-2"
            >
                Celebrations
            </motion.span>
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-serif text-4xl md:text-5xl font-bold text-foreground"
            >
                Festival Calendar
            </motion.h2>
        </div>

        {/* THE SLIDER CONTAINER */}
        <div className="relative w-full h-full mt-24 md:mt-0">
          <AnimatePresence mode='popLayout'>
            {items.map((item, index) => {
              // Index 0 is the "Active/Background" card
              // Index 1, 2, 3... are the "Thumbnails"
              const isFirst = index === 0;

              return (
                <motion.div
                  key={item.id} // LayoutId logic needs unique keys
                  layout // This enables the magic morphing animation
                  initial={false}
                  animate={{
                    top: isFirst ? 0 : "55%", // Thumbnails start halfway down
                    left: isFirst ? 0 : `${55 + (index - 1) * 12}%`, // Staggered to the right
                    width: isFirst ? "100%" : "220px",
                    height: isFirst ? "100%" : "320px",
                    zIndex: isFirst ? 1 : 10 - index, // Thumbnails on top of background
                    opacity: index > 3 ? 0 : 1, // Hide items if there are too many (keeps UI clean)
                    scale: isFirst ? 1 : 1 - (index * 0.05), // Subtle scale down for depth
                    borderRadius: "24px",
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                  className={`absolute shadow-2xl overflow-hidden bg-card border-2 border-white/20 ${
                    !isFirst ? "hidden md:block shadow-black/50" : "block"
                  }`}
                  style={{
                      // Fallback styles for initial render
                      top: isFirst ? 0 : "50%",
                      left: isFirst ? 0 : `${50 + (index - 1) * 15}%`,
                  }}
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  
                  {/* Dark Overlay for Text Readability */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent ${!isFirst && 'bg-black/40'}`} />

                  {/* Content - Only Visible for the First (Active) Card */}
                  {isFirst ? (
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white z-20">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                          <div className="flex items-center gap-3 mb-4">
                             <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${
                                 item.label === 'Upcoming This Year' ? 'bg-secondary text-primary-foreground' : 'bg-white/20 text-white'
                             }`}>
                                  {item.label || 'Festival'}
                              </span>
                          </div>
                          
                          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-4 leading-tight shadow-sm">
                            {item.name}
                          </h2>
                          <p className="font-sans text-lg text-white/80 mb-8 leading-relaxed max-w-xl">
                            {item.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-6 text-sm font-medium">
                              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
                                  <Calendar className="text-secondary" size={18} />
                                  {item.date}
                              </div>
                              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
                                  <MapPin className="text-secondary" size={18} />
                                  {item.location}
                              </div>
                          </div>
                      </motion.div>
                    </div>
                  ) : (
                      // Thumbnail Minimal Info
                      <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
                          <div className="text-xs font-bold uppercase tracking-widest text-secondary mb-1">{item.date}</div>
                          <h3 className="font-serif text-xl font-bold leading-tight">{item.name}</h3>
                      </div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* NAVIGATION BUTTONS */}
        <div className="absolute bottom-12 right-4 md:right-12 flex gap-4 z-50">
          <button
            onClick={handlePrev}
            className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black hover:scale-110 transition-all duration-300"
          >
            <ArrowLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black hover:scale-110 transition-all duration-300"
          >
            <ArrowRight size={24} />
          </button>
        </div>

      </div>
    </section>
  );
};
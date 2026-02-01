import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import mahakaleshwarImage from '@/assets/mahakaleshwar.jpg';
import folkDanceImage from '@/assets/mp-folk-dance.jpg';
import cuisineImage from '@/assets/mp-cuisine.jpg';
import kanhaImage from '@/assets/kanha-tiger.jpg';
import narmadaImage from '@/assets/narmada-aarti.jpg';

const categories = [
  {
    title: 'Sacred Temples',
    subtitle: 'Divine Architecture',
    description: 'Explore magnificent temples from Khajuraho to Mahakaleshwar, showcasing exquisite craftsmanship.',
    image: mahakaleshwarImage,
    link: '/temples',
    color: 'from-primary/80 to-primary/40',
  },
  {
    title: 'Vibrant Festivals',
    subtitle: 'Celebrate Culture',
    description: 'Experience colorful celebrations like Lokrang, Khajuraho Dance Festival, and Mandu Utsav.',
    image: folkDanceImage,
    link: '/festivals',
    color: 'from-secondary/80 to-secondary/40',
  },
  {
    title: 'Traditional Cuisine',
    subtitle: 'Taste of MP',
    description: 'Savor authentic dishes like Dal Bafla, Poha, Bhutte Ka Kees, and Mawa Bati.',
    image: cuisineImage,
    link: '/cuisine',
    color: 'from-accent/80 to-accent/40',
  },
  {
    title: 'Wildlife Safari',
    subtitle: 'Tiger Country',
    description: 'Witness majestic tigers and diverse wildlife at Kanha, Bandhavgarh, and Pench.',
    image: kanhaImage,
    link: '/explore',
    color: 'from-river/80 to-river/40',
  },
  {
    title: 'Sacred Rivers',
    subtitle: 'Holy Waters',
    description: 'Discover the spiritual significance of Narmada, Betwa, and Chambal rivers.',
    image: narmadaImage,
    link: '/explore',
    color: 'from-terracotta/80 to-terracotta/40',
  },
];

export const ExploreCategories = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-handwritten text-2xl text-secondary inline-block mb-4"
          >
            Explore
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            Discover Our Heritage
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Immerse yourself in the rich cultural tapestry of Madhya Pradesh through 
            its temples, festivals, cuisine, and breathtaking wildlife.
          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={`group relative overflow-hidden rounded-2xl card-hover ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <Link to={category.link} className="block relative aspect-[4/3] md:aspect-auto md:h-full min-h-[300px]">
                {/* Image */}
                <img
                  src={category.image}
                  alt={category.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-60`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end text-primary-foreground">
                  <span className="font-handwritten text-lg text-primary-foreground/80 mb-1">
                    {category.subtitle}
                  </span>
                  <h3 className={`font-serif font-bold text-primary-foreground mb-2 ${
                    index === 0 ? 'text-3xl md:text-4xl' : 'text-2xl'
                  }`}>
                    {category.title}
                  </h3>
                  <p className={`font-sans text-primary-foreground/80 mb-4 ${
                    index === 0 ? 'text-base max-w-md' : 'text-sm'
                  }`}>
                    {category.description}
                  </p>
                  <div className="flex items-center gap-2 font-sans text-sm font-medium text-primary-foreground/90 group-hover:text-primary-foreground transition-colors">
                    <span>Explore More</span>
                    <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

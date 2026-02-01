import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { NamasteSection } from '@/components/NamasteSection';
import { ExploreCategories } from '@/components/ExploreCategories';
import { FestivalsSection } from '@/components/FestivalsSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <NamasteSection />
      <ExploreCategories />
      <FestivalsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;

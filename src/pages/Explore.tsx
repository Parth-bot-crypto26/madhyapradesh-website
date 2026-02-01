import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

// Reusing your existing assets where they fit the context
import tigerReserve from '@/assets/explore/tiger-reserve.png';
import tigerLand from '@/assets/explore/land-tiger.jpg';
import collage from '@/assets/explore/collage.jpg';
import formation from '@/assets/explore/formation.jpg';
import bhimbetka from '@/assets/explore/bhimbetka-rock-shelters.jpeg';
import sanchi from '@/assets/explore/sanchi-great-stupa.jpg';
import khajuraho from '@/assets/explore/khajuraho.jpg';
import contribution from '@/assets/explore/contribution.jpg';
import heroImage from '@/assets/hero-mp.jpg'; 
import narmadaImage from '@/assets/narmada-aarti.jpg';

// Simple animation wrapper for sections
const Section = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay }}
    className="mb-16 md:mb-24"
  >
    {children}
  </motion.div>
);

const Explore = () => {
  // Common styles to ensure consistency
  const titleStyle = "font-serif font-bold text-[#1a4031]"; // Dark Forest Green for all titles
  const bodyStyle = "font-sans text-muted-foreground leading-relaxed"; // Clean sans-serif for body

  // --- STATE FOR BIODIVERSITY SECTION ANIMATION ---
  const [activeBioImage, setActiveBioImage] = useState(tigerLand);

  const handleBioView = (image) => {
    setActiveBioImage(image);
  };

  return (
    <main className="min-h-screen paper-texture">
      <Navbar />
      
      {/* Hero Title */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            className="text-center max-w-4xl mx-auto"
          >
            <span className="font-handwritten text-3xl text-secondary inline-block mb-4">
              मध्य प्रदेश का परिचय
            </span>
            <h1 className={`text-5xl md:text-6xl lg:text-7xl mb-6 ${titleStyle}`}>
              The Heart of India
            </h1>
            <p className={`text-xl ${bodyStyle}`}>
              A journey through time, geography, wilderness, and culture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        {/* 1. HISTORY SECTION */}
        <Section>
          <h2 className={`text-3xl md:text-4xl mb-6 border-l-4 border-[#1a4031] pl-4 ${titleStyle}`}>
            1. Complete History of Madhya Pradesh
          </h2>
          <p className={`text-lg mb-6 ${bodyStyle}`}>
            Madhya Pradesh has been the battleground and cultural canvas for India's most powerful empires. Its central position meant that controlling Malwa or Bundelkhand was essential for any ruler wishing to dominate North or Central India.
          </p>

          {/* IMAGE PLACEHOLDER: HISTORY */}
          <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-cultural mb-10">
            <img src={heroImage} alt="Historical MP" className="w-full h-full object-cover" />
            <div className="absolute bottom-4 left-4 bg-black/60 px-4 py-2 rounded-lg text-white text-sm font-sans">
              The rich legacy of Madhya Pradesh
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm">
              <h3 className={`text-2xl mb-4 ${titleStyle}`}>The Ancient Era (Mauryas & Guptas)</h3>
              <ul className={`space-y-4 ${bodyStyle}`}>
                <li><strong className="text-foreground font-semibold">The Mauryan Empire (321–185 BCE):</strong> The region gained prominence under Emperor Ashoka. Before becoming Emperor, he was the Viceroy of Ujjain. His deep connection to the region led him to commission the Great Stupa at Sanchi after his conversion to Buddhism. This wasn't just a religious act; it was a political statement establishing the region as a center of Buddhist diplomacy.</li>
                <li><strong className="text-foreground font-semibold">The Gupta Empire (320–550 CE):</strong> Known as the "Golden Age," the Guptas used Ujjain as a second capital. Chandragupta II (Vikramaditya) is believed to have held his legendary court here, patronizing the "Navratnas" (Nine Gems), including the great poet Kalidasa, who wrote Meghaduta describing the beauty of the cloud messenger passing over Ramtek and Ujjain.</li>
              </ul>
            </div>

            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm">
              <h3 className={`text-2xl mb-4 ${titleStyle}`}>The Medieval Era (Rajputs & Indigenous Dynasties)</h3>
              <p className={`mb-4 ${bodyStyle}`}>This period saw the rise of powerful regional kingdoms that left behind the architectural marvels we see today.</p>
              <ul className={`space-y-4 ${bodyStyle}`}>
                <li><strong className="text-foreground font-semibold">The Chandelas (Bundelkhand, 9th–13th Century):</strong> Ruled the Bundelkhand region. They are most famous for building the Khajuraho Group of Monuments. These temples are not just art; they were a statement of the dynasty's power and spiritual philosophy, blending eroticism with divinity. They were master builders. The intricate carvings cover four aspects of life: Dharma (duty), Artha (wealth), Kama (desire), and Moksha (liberation).</li>
                <li><strong className="text-foreground font-semibold">The Paramaras (Malwa, 9th–14th Century):</strong> Ruled the Malwa region. he most famous ruler, Raja Bhoj (1010–1055 CE), was a polymath. He is credited with writing 84 books on subjects ranging from architecture to medicine. He created the Upper Lake (Bhojtal) in Bhopal by constructing a massive earthen dam, a feat of engineering that still supplies water to the city today.</li>
                <li><strong className="text-foreground font-semibold">The Gond Dynasty (Gondwana, 14th–18th Century):</strong> This was one of the most powerful tribal kingdoms in history that ruled Gondwana (central MP). Rani Durgavati is the icon of this era. She ruled as a regent for her son and is famous for refusing to submit to Emperor Akbar. She died fighting the Mughal army, choosing death over dishonor.</li>
                <li><strong className="text-foreground font-semibold">The Malwa Sultanate (1401–1561):</strong> An Islamic dynasty that ruled from Mandu. They built the architectural gem Jahaz Mahal (Ship Palace) and Hindola Mahal.</li>
              </ul>
            </div>

            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm">
              <h3 className={`text-2xl mb-4 ${titleStyle}`}>Modern & Maratha Era (18th Century onwards)</h3>
              <p className={`mb-4 ${bodyStyle}`}>With the decline of the Mughals, the Marathas took control.</p>
              <ul className={`space-y-4 ${bodyStyle}`}>
                <li><strong className="text-foreground font-semibold">The Holkars (Indore):</strong> Ahilyabai Holkar (ruled 1767–1795) is perhaps the most respected female ruler in Indian history. She didn't just rule Indore; she rebuilt Hindu temples across India (including Kashi Vishwanath and Somnath) using state funds, creating a legacy of religious philanthropy.</li>
                <li><strong className="text-foreground font-semibold">The Scindias (Gwalior):</strong> Rising as generals under the Peshwas, they established Gwalior as a military powerhouse. Mahadji Scindia was instrumental in resurrecting Maratha power in North India after the defeat at Panipat.</li>
                <li><strong className="text-foreground font-semibold">The Begums of Bhopal (1819–1926):</strong> Bhopal is unique for being ruled by four successive women (Qudsia, Sikandar, Shah Jahan, and Sultan Jahan Begum) for over a century. They modernized the city, built railways, postal systems, and the massive Taj-ul-Masajid, proving that female Islamic rule could be progressive and administrative.</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* 2. GEOGRAPHY SECTION */}
        <Section>
          <h2 className={`text-3xl md:text-4xl mb-6 border-l-4 border-[#1a4031] pl-4 ${titleStyle}`}>
            2. Geographical Structure & Importance
          </h2>
          <p className={`text-lg mb-6 ${bodyStyle}`}>
            MP is the second-largest state in India by area (308,252 sq km). Its geography acts as a physical barrier and a connector between North and South India.
          </p>

          {/* IMAGE PLACEHOLDER: GEOGRAPHY */}
          <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-cultural mb-10">
            <img src={narmadaImage} alt="Geography of MP" className="w-full h-full object-cover" />
            <div className="absolute bottom-4 left-4 bg-black/60 px-4 py-2 rounded-lg text-white text-sm font-sans">
              The Narmada - Lifeline of Madhya Pradesh
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-secondary/5 p-6 rounded-xl">
              <h3 className={`text-xl mb-3 ${titleStyle}`}>The Plateau Region</h3>
              <ul className={`list-disc list-inside space-y-2 ${bodyStyle}`}>
                <li><strong className="text-foreground font-semibold">Malwa Plateau:</strong> In the west, formed by volcanic eruptions. Rich Black Cotton Soil (ideal for soybean and cotton).</li>
                <li><strong className="text-foreground font-semibold">Bundelkhand & Baghelkhand:</strong> In the north/east, older, rockier, and rich in minerals like diamonds and coal.</li>
              </ul>
            </div>
            <div className="bg-secondary/5 p-6 rounded-xl">
              <h3 className={`text-xl mb-3 ${titleStyle}`}>Mountain Ranges</h3>
              <ul className={`list-disc list-inside space-y-2 ${bodyStyle}`}>
                <li><strong className="text-foreground font-semibold">Vindhya Range:</strong> Runs parallel to Narmada; traditional divider between North & South India.</li>
                <li><strong className="text-foreground font-semibold">Satpura Range:</strong> South of Narmada. Home to Dhupgarh (1,350m), the highest peak.</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 bg-secondary/5 p-6 rounded-xl">
             <h3 className={`text-xl mb-3 ${titleStyle}`}>River Systems (The Watershed)</h3>
             <ul className={`list-disc list-inside space-y-2 ${bodyStyle}`}>
               <li><strong className="text-foreground font-semibold">Narmada River:</strong> The "Lifeline." Flows West through a rift valley. Crucial for irrigation and hydropower.</li>
               <li><strong className="text-foreground font-semibold">Chambal, Betwa, Ken:</strong> Flow North to join the Yamuna, feeding Gangetic plains.</li>
               <li><strong className="text-foreground font-semibold">Tapti:</strong> Flows parallel to the Narmada in the south.</li>
             </ul>
          </div>
        </Section>

        {/* 3. BIODIVERSITY SECTION (ANIMATED) */}
        <section className="mb-16 md:mb-24">
          <h2 className={`text-3xl md:text-4xl mb-8 border-l-4 border-[#1a4031] pl-4 ${titleStyle}`}>
            3. Biodiversity: The "Tiger State of India"
          </h2>
          
          <div className="flex flex-col lg:flex-row gap-8 relative">
            
            {/* LEFT SIDE: SCROLLABLE TEXT */}
            <div className="lg:w-1/2 space-y-24 pb-12">
              
              {/* Block 1: Intro */}
              <motion.div 
                onViewportEnter={() => handleBioView(tigerLand)} 
                viewport={{ amount: 0.5 }}
                className="min-h-[50vh] flex flex-col justify-center"
              >
                 <h3 className={`text-2xl mb-4 ${titleStyle}`}>A Global Conservation Hub</h3>
                 <p className={bodyStyle}>
                   Madhya Pradesh is officially recognized as the "Tiger State of India," a title it reclaimed in the recent census. This isn't just a nickname; it reflects a massive ecological achievement in preserving the Panthera tigris.
                 </p>
                 <br />
                 <h4 className={`text-xl font-semibold mb-2 ${titleStyle}`}>Why this title matters:</h4>
                 <p className={bodyStyle}>
                    MP holds the highest number of tigers in the country (785 according to the 2022 census). This status is the result of rigorous conservation efforts under "Project Tiger," aimed at preventing extinction and reviving population numbers through strict anti-poaching measures and habitat management. The state provides the ideal terrain—dense Sal and Teak forests combined with vast grasslands—that supports not just tigers but the prey base (deer, sambar, wild boar) they need to survive.
                 </p>
              </motion.div>

              {/* Block 2: Reserves */}
              <motion.div 
                onViewportEnter={() => handleBioView(tigerReserve)} 
                viewport={{ amount: 0.5 }}
                className="min-h-[50vh] flex flex-col justify-center"
              >
                <h3 className={`text-2xl mb-4 ${titleStyle}`}>Key Tiger Reserves</h3>
                <ul className={`space-y-4 ${bodyStyle}`}>
                 <li><strong className="text-foreground font-semibold">Bandhavgarh National Park:</strong> Located in the Umaria district, famous for having one of the highest densities of tiger populations in the world. Historically, it was the hunting ground of the Maharajas of Rewa. It is also where the first White Tiger was spotted.</li>
                 <li><strong className="text-foreground font-semibold">Kanha National Park:</strong> The largest national park in MP, Kanha is credited with inspiring Rudyard Kipling’s The Jungle Book. It is crucial not just for tigers but for saving the Hard Ground Swamp Deer (Barasingha) from near extinction.</li>
                 <li><strong className="text-foreground font-semibold">Pench National Park:</strong> Straddling the border of MP and Maharashtra, Pench is known for its scenic beauty and the legendary tigress "Collarwali," who birthed 29 cubs in her lifetime, significantly contributing to the repopulation efforts.</li>
                 <li><strong className="text-foreground font-semibold">Panna National Park:</strong> This reserve is a global case study in conservation. In 2009, Panna had lost all its tigers to poaching. Through a massive translocation program, tigers were reintroduced from other parks, and today, the population is thriving again.</li>
                 <li><strong className="text-foreground font-semibold">Satpura National Park:</strong> Unique because it offers walking safaris, Satpura is a rugged terrain that protects tigers along with the Indian Giant Squirrel.</li>
               </ul>
              </motion.div>

              {/* Block 3: Beyond Tigers */}
              <motion.div 
                onViewportEnter={() => handleBioView(collage)} 
                viewport={{ amount: 0.5 }}
                className="min-h-[50vh] flex flex-col justify-center"
              >
                <h3 className={`text-2xl mb-4 ${titleStyle}`}>Beyond Tigers</h3>
                <ul className={`space-y-4 ${bodyStyle}`}>
                  <li><strong className="text-foreground font-semibold">Leopards:</strong> MP also holds the title of "Leopard State" with the highest leopard population in India (approx. 3,907). The rocky terrain of Bundelkhand provides perfect caves for leopards.</li>
                  <li><strong className="text-foreground font-semibold">Ghariyals:</strong> The National Chambal Sanctuary is the last viable stronghold for the critically endangered Ghariyal (fish-eating crocodile). The Chambal river remains one of India's cleanest rivers because it was historically considered "cursed," which ironically saved it from industrial pollution.</li>
                  <li><strong className="text-foreground font-semibold">Barasingha:</strong> Kanha National Park is the only place in the world where the Hard Ground Swamp Deer (Barasingha) exists. They were brought back from the brink of extinction (less than 66 individuals in 1970) to over 1,000 today through specific habitat manipulation (removing tall grass to allow rutting).</li>
               </ul>
              </motion.div>
            </div>

            {/* RIGHT SIDE: STICKY IMAGE WITH ANIMATION */}
            <div className="hidden lg:block lg:w-1/2 relative">
               <div className="sticky top-24 h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border border-border">
                  <AnimatePresence mode='wait'>
                    <motion.img
                      key={activeBioImage}
                      src={activeBioImage}
                      initial={{ x: 100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -100, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      alt="Biodiversity"
                      className="w-full h-full object-cover absolute top-0 left-0"
                    />
                  </AnimatePresence>
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
               </div>
            </div>
          </div>
        </section>

        {/* 4. FORMATION SECTION */}
        <Section>
           <h2 className={`text-3xl md:text-4xl mb-6 border-l-4 border-[#1a4031] pl-4 ${titleStyle}`}>
            4. Formation of Modern Madhya Pradesh
          </h2>
          
          {/* IMAGE PLACEHOLDER: MAP/POLITICAL */}
          <div className="relative h-[500px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-cultural mb-10">
            <img src={formation} alt="Geography of MP" className="w-full h-full object-cover" />
            <div className="absolute bottom-4 left-4 bg-black/60 px-4 py-2 rounded-lg text-white text-sm font-sans">
            Map of Madhya Pradesh (1956 vs 2000)            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className={`text-2xl mb-3 ${titleStyle}`}>Phase 1: The 1956 Merger (The Logic):</h3>
              <p className={bodyStyle}>
                Before 1956, Central India was a jigsaw puzzle of four different states: Madhya Bharat (Gwalior/Indore), Vindhya Pradesh (Rewa), Bhopal State, and Mahakoshal (Jabalpur). The States Reorganization Commission merged them to create a Hindi-speaking heartland. Bhopal was chosen as the capital over the larger cities of Gwalior and Indore because it was a centrally located, neutral ground that didn't favor either the Holkars or Scindias.
              </p>
            </div>
            <div>
               <h3 className={`text-2xl mb-3 ${titleStyle}`}>Phase 2: The Split (2000)</h3>
               <p className={`mb-3 ${bodyStyle}`}>
                 MP was the largest state in India until 2000.
               </p>
               <p className={bodyStyle}>
                 On November 1, 2000, the state was split. The southeastern region, which was rich in minerals (coal/iron) and had a dense tribal population, was carved out to create Chhattisgarh. This caused MP to lose major revenue sources (mines) but allowed it to focus on agricultural development in the plains.
               </p>
            </div>
            <div>
               <h3 className={`text-2xl mb-3 ${titleStyle}`}>Political Landscape Today:</h3>
               <p className={bodyStyle}><strong>Legislature:</strong>
                 <br />
                 It has a unicameral assembly (Vidhan Sabha) with 230 seats.
               </p>
               <p className={bodyStyle}><strong>Administrative Power:</strong>
                 <br />
                 The state is divided into 10 Divisions and 55 Districts (with new districts like Maihar and Pandhurna recently added).
               </p>
               <p className={bodyStyle}><strong>Judiciary:</strong>
                 <br />
                 Interestingly, the High Court is not in the capital Bhopal, but in Jabalpur, a legacy of the British era "Central Provinces" administration.
               </p>
            </div>
          </div>
        </Section>

        {/* 5. UNESCO WORLD HERITAGE SECTION */}
        <Section>
           <h2 className={`text-3xl md:text-4xl mb-10 border-l-4 border-[#1a4031] pl-4 ${titleStyle}`}>
             5. A Repository of Ancient History: UNESCO Sites
           </h2>
           <p className={`text-lg mb-6 ${bodyStyle}`}>
              Madhya Pradesh offers a timeline of human history ranging from the Stone Age to the medieval era. It houses three major UNESCO World Heritage Sites, each representing a completely different era of Indian history.
           </p>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card A: Bhimbetka */}
              <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col h-full">
                 <div className="h-48 overflow-hidden">
                    {/* Using heroImage as placeholder for ancient rocks */}
                    <img src={bhimbetka} alt="Bhimbetka" className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" />
                 </div>
                 <div className="p-6 flex flex-col flex-grow">
                    <h3 className={`text-xl mb-3 ${titleStyle}`}>A. Bhimbetka Rock Shelters</h3>
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">The Prehistoric Era</div>
                    <p className={`text-sm ${bodyStyle}`}>
                      Located in the Raisen district, these rock shelters prove that human life existed here over 100,000 years ago. The site contains over 700 rock shelters, with paintings that depict the evolution of human life—from hunter-gatherers chasing bison and mammoths to later scenes of community dancing and agriculture. It is one of the oldest records of human art in the world.
                    </p>
                 </div>
              </div>

              {/* Card B: Sanchi */}
              <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col h-full">
                 <div className="h-48 overflow-hidden">
                    {/* Using narmadaImage as placeholder */}
                    <img src={sanchi} alt="Sanchi" className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" />
                 </div>
                 <div className="p-6 flex flex-col flex-grow">
                    <h3 className={`text-xl mb-3 ${titleStyle}`}>B. The Stupas of Sanchi</h3>
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">The Buddhist Era</div>
                    <p className={`text-sm ${bodyStyle}`}>
                      Commissioned by Emperor Ashoka in the 3rd century BCE, Sanchi is the oldest stone structure in India. It is a center of Buddhist art and architecture. The Great Stupa is famous for its four "Toranas" (gateways), which are intricately carved with stories from the Jataka tales (lives of the Buddha). Crucially, the Buddha never visited Sanchi; it was built to house his relics and serve as a pilgrimage site.
                    </p>
                 </div>
              </div>

              {/* Card C: Khajuraho */}
              <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col h-full">
                 <div className="h-48 overflow-hidden">
                    <img src={khajuraho} alt="Khajuraho" className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" />
                 </div>
                 <div className="p-6 flex flex-col flex-grow">
                    <h3 className={`text-xl mb-3 ${titleStyle}`}>C. Khajuraho Group</h3>
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">The Medieval Era</div>
                    <p className={`text-sm ${bodyStyle}`}>
                      Built by the Chandela dynasty between 950 and 1050 AD, these temples are world-famous for their nagara-style architectural symbolism and their erotic sculptures. However, the erotic art makes up only about 10% of the carvings; the rest depict daily life, war, music, and spiritual teachings. The temples are a celebration of life in all its forms, balancing the Dharma, Kama, Artha, and Moksha.
                    </p>
                 </div>
              </div>

           </div>
        </Section>
        
        {/* 6. CONTRIBUTIONS SECTION */}
        <Section>
          <h2 className={`text-3xl md:text-4xl mb-6 border-l-4 border-[#1a4031] pl-4 ${titleStyle}`}>
            6. Contributions to India
          </h2>

           {/* IMAGE PLACEHOLDER: ECONOMY/CULTURE */}
          <div className="relative h-[500px] md:h-[520px] w-full rounded-2xl overflow-hidden shadow-cultural mb-10">
            <img src={contribution} alt="Culture of MP" className="w-full h-full object-cover" />
            <div className="absolute bottom-4 left-4 bg-black/60 px-4 py-2 rounded-lg text-white text-sm font-sans">
              Tribal Heritage & Cultural Soft Power
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
               <h3 className={`text-xl mb-3 ${titleStyle}`}>Farming ("The Soya and Wheat Bowl")</h3>
               <ul className={`space-y-2 ${bodyStyle}`}>
                 <li><strong className="font-semibold text-foreground">Soybean Dominance:</strong> MP produces nearly 50-60% of India's soybean. The Malwa plateau's black soil retains moisture perfectly for this crop. This production is critical for India's "Edible Oil Mission" to reduce import dependency.</li>
                 <li><strong className="font-semibold text-foreground">Sharbati Wheat:</strong> The soil in Sehore and Vidisha districts produces Sharbati Wheat, known as the "Golden Grain." It commands a premium price across India because the grains are heavier, sweeter, and have a unique golden sheen due to the specific mineral content of the soil and the drier climate during ripening.</li>
               </ul>
            </div>

             <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
               <h3 className={`text-xl mb-3 ${titleStyle}`}>GDP & Growth Rate</h3>
               <ul className={`space-y-2 ${bodyStyle}`}>
                 <li><strong className="font-semibold text-foreground">Contribution:</strong> MP’s Gross State Domestic Product (GSDP) is estimated at approx ₹15.03 Lakh Crore (2024-25 estimates).</li>
                 <li><strong className="font-semibold text-foreground">Why it Matters:</strong> The state has consistently clocked a double-digit growth rate (often exceeding 10%), significantly higher than the national average. This growth is driven by a massive expansion in irrigation (from 7 lakh hectares to over 45 lakh hectares), which revitalized the rural economy.</li>
               </ul>
               <br />
               <h3 className={`text-xl mb-3 ${titleStyle}`}>Industrial Corridors</h3>
               <ul className={`space-y-2 ${bodyStyle}`}>
                 <li><strong className="font-semibold text-foreground">Pithampur (The "Detroit of India"):</strong> Located near Indore, this is a major hub for automobile manufacturing (Force Motors, Eicher, Mahindra). It puts MP on the global map for heavy vehicle production.</li>
                 <li><strong className="font-semibold text-foreground">Mandideep & Malanpur:</strong> These industrial townships host major fiber optics and graphite electrode industries (like HEG), exporting high-tech materials globally.</li>
               </ul>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
               <h3 className={`text-xl mb-3 ${titleStyle}`}>Cultural Treasure: Living Art & Textiles</h3><p className={`mb-4 ${bodyStyle}`}>MP’s culture is unique because it is a "living" culture—the art forms are not just in museums but practiced daily by tribes and weavers.</p>
               <ul className={`space-y-2 ${bodyStyle}`}>
                 <h6><strong className="font-semibold text-foreground text-xl mb-3">Tribal Art (Gond & Bhil)</strong></h6>
                 <li><strong className="font-semibold text-foreground">Why:</strong> The Gond and Bhil paintings are globally recognized for their "dot and line" techniques.</li>
                 <li><strong className="font-semibold text-foreground">Significance:</strong> These aren't just drawings; they are animistic beliefs put on canvas. The Gond belief is that viewing a good image brings good luck. Artists like Jangarh Singh Shyam brought this art to global galleries (Paris, Tokyo).</li>
               </ul>
               <br />
               <ul className={`space-y-2 ${bodyStyle}`}>
                 <h6><strong className="font-semibold text-foreground text-xl mb-3">The Saree Heritage (Chanderi & Maheshwari)</strong></h6>
                 <li><strong className="font-semibold text-foreground">Why:</strong> Chanderi and Maheshwari fabrics are famous for their sheer texture and "zari" work.</li>
                 <li><strong className="font-semibold text-foreground">History:</strong> The Chanderi fabric was favored by Mughal royalty for its lightness (woven air). Maheshwari sarees were designed by Queen Ahilyabai Holkar herself, who wanted a royal fabric that was simple, elegant, and reversible (the border is the same on both sides).</li>
               </ul>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
               <h3 className={`text-xl mb-3 ${titleStyle}`}>Mythological Significance: The Land of Gods & Sages</h3><p className={`mb-4 ${bodyStyle}`}>MP is deeply embedded in the sacred geography of Hinduism (Sanatan Dharma).</p>
               <ul className={`space-y-2 ${bodyStyle}`}>
                 <h6><strong className="font-semibold text-foreground text-xl mb-3">Ujjain (The Cosmic Center)</strong></h6>
                 <li><strong className="font-semibold text-foreground">Significance:</strong> It is home to Mahakaleshwar, the only Jyotirlinga facing South (Dakshinamurti), representing the God of Death/Time.</li>
                 <li><strong className="font-semibold text-foreground">Education:</strong> It is where Lord Krishna and Sudama went to school (Sandipani Ashram). This makes Ujjain the place where the "Gitopadesha" giver himself received education.</li>
               </ul>
               <br />
               <ul className={`space-y-2 ${bodyStyle}`}>
                 <h6><strong className="font-semibold text-foreground text-xl mb-3">Chitrakoot (The Exile Home)</strong></h6>
                 <li><strong className="font-semibold text-foreground">Significance:</strong> Lord Rama, Sita, and Lakshmana spent 11 of their 14 years of exile here</li>
                 <li><strong className="font-semibold text-foreground">Reason:</strong> The forests here were home to great sages (Atri and Anasuya). It is believed that the Ramcharitmanas by Tulsidas has its roots in the inspiration he received here.</li>
               </ul>
               <br />
               <ul className={`space-y-2 ${bodyStyle}`}>
                 <h6><strong className="font-semibold text-foreground text-xl mb-3">The Narmada River (The Eldest River)</strong></h6>
                 <li><strong className="font-semibold text-foreground">Significance:</strong> In local belief, the Narmada is considered older and holier than the Ganga. A popular saying is: "Ganga purifies by touch, but Narmada purifies by mere sight."</li>
                 <li><strong className="font-semibold text-foreground">Tradition:</strong> It is the only river in the world that has a dedicated Parikrama (circumambulation) where devotees walk roughly 2,600 km from the source (Amarkantak) to the sea and back along the other bank.</li>
               </ul>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
               <h3 className={`text-xl mb-3 ${titleStyle}`}>Other Significant Contributions: Energy & Minerals</h3><p className={`mb-4 ${bodyStyle}`}>MP contributes resources that power the rest of India.</p>
               <ul className={`space-y-2 ${bodyStyle}`}>
                 <h6><strong className="font-semibold text-foreground text-xl mb-3">Renewable Energy (The Rewa Miracle)</strong></h6>
                 <li><strong className="font-semibold text-foreground">Achievement:</strong> The Rewa Ultra Mega Solar Project (750 MW) was a game-changer.</li>
                 <li><strong className="font-semibold text-foreground">Why:</strong> It was the first project to break the "grid parity" barrier (making solar cheaper than coal power).</li>
                 <li><strong className="font-semibold text-foreground">Contribution:</strong> It powers the Delhi Metro. If you ride the Metro in Delhi, there is a 60% chance the electricity driving your train came from the sunlight in Rewa, MP.</li>
               </ul>
               <br />
               <ul className={`space-y-2 ${bodyStyle}`}>
                 <h6><strong className="font-semibold text-foreground text-xl mb-3">The Diamond State</strong></h6>
                 <li><strong className="font-semibold text-foreground">Fact:</strong> The Panna district has Asia's only active diamond mine (operated by NMDC).</li>
                 <li><strong className="font-semibold text-foreground">Significance:</strong> It places India on the global diamond mining map, not just as a polishing hub (Surat) but as a producer.</li>
               </ul>
               <br />
               <ul className={`space-y-2 ${bodyStyle}`}>
                 <h6><strong className="font-semibold text-foreground text-xl mb-3">Medicinal Opium</strong></h6>
                 <li><strong className="font-semibold text-foreground">Why:</strong> The districts of Mandsaur and Neemuch are among the only places in India legally licensed to cultivate opium.</li>
                 <li><strong className="font-semibold text-foreground">Reason:</strong> This is strictly controlled for the pharmaceutical industry (to make morphine and codeine), contributing to India's medical exports.</li>
               </ul>
            </div>            
          </div>
        </Section>

      </div>
      
      <Footer />
    </main>
  );
};

export default Explore;
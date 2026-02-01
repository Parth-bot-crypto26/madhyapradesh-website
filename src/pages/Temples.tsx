import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, X } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

// --- MAIN TEMPLE IMAGES (src/assets/temples/) ---
import mahakaleshwarImg from '@/assets/temples/mahakal.jpg';
import kandariyaImg from '@/assets/temples/kandariya.jpg';
import rajaramImg from '@/assets/temples/rajaram.jpeg';
import omkareshwarImg from '@/assets/temples/omkareshwar.jpg';
import chausathImg from '@/assets/temples/chausath-yogini.jpg';
import lakshmanaImg from '@/assets/temples/lakshmana.jpeg'; 
import bhojeshwarImg from '@/assets/temples/bhojeshwar.jpeg'; 
import maiharImg from '@/assets/temples/maihar.jpg';
import pashupatinathImg from '@/assets/temples/pashupatinath.jpg';
import khajranaImg from '@/assets/temples/khajrana.jpg';
import pitambaraImg from '@/assets/temples/pitambara.jpg';
import chaturbhujImg from '@/assets/temples/chaturbhuj.jpeg';
import sasbahuImg from '@/assets/temples/sasbahu.jpg';
import telikaImg from '@/assets/temples/telika.png';
import mitawaliImg from '@/assets/temples/mitawali.jpg';
import matangeshwarImg from '@/assets/temples/matangeshwar.jpg';
import bagalamukhiImg from '@/assets/temples/bagalamukhi.jpeg';
import bawangajaImg from '@/assets/temples/bawangaja.jpg';
import annapurnaImg from '@/assets/temples/annapurna.jpg';
import amarkantakImg from '@/assets/temples/amarkantak.jpg';

// --- MYTHOLOGY IMAGES (src/assets/temples/mythology/) ---
import mahakalMyth from '@/assets/temples/mythology/mahakalmythology.png';
import kandariyaMyth from '@/assets/temples/mythology/kandariya_myth.png';
import rajaramMyth from '@/assets/temples/mythology/rajaram_myth.png';
import omkareshwarMyth from '@/assets/temples/mythology/omkareshwar_myth.png';
import chausathMyth from '@/assets/temples/mythology/chausath_myth.png';
import lakshmanaMyth from '@/assets/temples/mythology/lakshmana_myth.png';
import bhojeshwarMyth from '@/assets/temples/mythology/bhojeshwar_myth.png';
import maiharMyth from '@/assets/temples/mythology/maihar_myth.png';
import pashupatinathMyth from '@/assets/temples/mythology/pashupatinath_myth.png';
import khajranaMyth from '@/assets/temples/mythology/khajrana_myth.png';
import pitambaraMyth from '@/assets/temples/mythology/pitambara_myth.png';
import chaturbhujMyth from '@/assets/temples/mythology/chaturbhuj_myth.png';
import sasbahuMyth from '@/assets/temples/mythology/sasbahu_myth.png';
import telikaMyth from '@/assets/temples/mythology/telika_myth.png';
import mitawaliMyth from '@/assets/temples/mythology/mitawali_myth.png';
import matangeshwarMyth from '@/assets/temples/mythology/matangeshwar_myth.png';
import bagalamukhiMyth from '@/assets/temples/mythology/bagalamukhi_myth.png';
import bawangajaMyth from '@/assets/temples/mythology/bawangaja_myth.png';
import annapurnaMyth from '@/assets/temples/mythology/annapurna_myth.png';
import amarkantakMyth from '@/assets/temples/mythology/amarkantak_myth.png';

// --- SCULPTURE IMAGES (src/assets/temples/sculpture/) ---
import mahakalSculpt from '@/assets/temples/sculpture/mahakal_sculpt.png';
import kandariyaSculpt from '@/assets/temples/sculpture/kandariya_sculpt.png';
import rajaramSculpt from '@/assets/temples/sculpture/rajaram_sculpt.png';
import omkareshwarSculpt from '@/assets/temples/sculpture/omkareshwar_sculpt.png';
import chausathSculpt from '@/assets/temples/sculpture/chausath_sculpt.png';
import lakshmanaSculpt from '@/assets/temples/sculpture/lakshmana_sculpt.png';
import bhojeshwarSculpt from '@/assets/temples/sculpture/bhojeshwar_sculpt.png';
import maiharSculpt from '@/assets/temples/sculpture/maihar_sculpt.png';
import pashupatinathSculpt from '@/assets/temples/sculpture/pashupatinath_sculpt.png';
import khajranaSculpt from '@/assets/temples/sculpture/khajrana_sculpt.png';
import pitambaraSculpt from '@/assets/temples/sculpture/pitambara_sculpt.png';
import chaturbhujSculpt from '@/assets/temples/sculpture/chaturbhuj_sculpt.png';
import sasbahuSculpt from '@/assets/temples/sculpture/sasbahu_sculpt.png';
import telikaSculpt from '@/assets/temples/sculpture/telika_sculpt.png';
import mitawaliSculpt from '@/assets/temples/sculpture/mitawali_sculpt.png';
import matangeshwarSculpt from '@/assets/temples/sculpture/matangeshwar_sculpt.png';
import bagalamukhiSculpt from '@/assets/temples/sculpture/bagalamukhi_sculpt.png';
import bawangajaSculpt from '@/assets/temples/sculpture/bawangaja_sculpt.png';
import annapurnaSculpt from '@/assets/temples/sculpture/annapurna_sculpt.png';
import amarkantakSculpt from '@/assets/temples/sculpture/amarkantak_sculpt.png';


// --- CONFIGURATION ---
const MODAL_WIDTH = '1000px';  
const IMAGE_HEIGHT = '400px'; 

// --- DATA OBJECT ---
const templesData = [
  {
    id: 1,
    name: 'Mahakaleshwar Temple',
    deity: 'Lord Shiva (Mahakal - The Lord of Time)',
    location: 'Ujjain',
    image: mahakaleshwarImg,
    mythologyImage: mahakalMyth,
    sculptureImage: mahakalSculpt,
    brief: 'One of the 12 Jyotirlingas, the only one facing South (Dakshinamurti), and famous for the Bhasma Aarti (ash ritual) using ash from funeral pyres (symbolically).',
    details: {
      mythology: 'The legend dates back to when Ujjain was known as Avanti. A pious Brahmin named Vedapriya lived there, who was a devoted worshipper of Shiva. A demon named Dushana, residing on the nearby Ratnamala hills, had received a boon from Brahma that made him invincible. Dushana hated the Vedas and religious practices, so he began slaughtering Brahmins. When Dushana’s army finally attacked Avanti to destroy Vedapriya\'s prayers, the Brahmins, helpless and unarmed, gathered around an earthen Shivalinga and chanted the "Humkara" mantra. Just as Dushana raised his sword to strike the Linga, the earth split open. Lord Shiva emerged in his terrifying form of Mahakala (The Great Time/Death). With a single roar, he reduced Dushana to ashes. The Gods requested Shiva to stay there to protect the holy city and its devotees from premature death, and he manifested as the Jyotirlinga.',
      sculpture: `The temple is a massive three-storied complex that showcases a blend of Maratha, Bhumija, and Chalukya architectural styles.

The Shikhar (Spire): The main spire is soaring and curved, adorned with intricate miniature shrines (urushringas) that create a cascading effect.

The Silver Work: The sanctum doors are plated with heavy silver, featuring embossed figures of Ganesha, Kartikeya, and Parvati. The craftsmanship is distinctly Maratha, showing robustness and fluid lines.

The Roof: The ceiling of the assembly hall rests on massive pillars with floral capitals. Uniquely, the floor above the main sanctum houses the Omkareshwar Linga, and the third floor houses the Nagchandreshwar idol (Shiva-Parvati on a 10-hooded snake), which is a rare sculptural masterpiece open only once a year.`
    }
  },
  {
    id: 2,
    name: 'Kandariya Mahadeva Temple',
    deity: 'Lord Shiva',
    location: 'Khajuraho (Chhatarpur District)',
    image: kandariyaImg,
    mythologyImage: kandariyaMyth,
    sculptureImage: kandariyaSculpt,
    brief: 'The largest and most ornate temple in the UNESCO World Heritage group, representing the pinnacle of Chandela art and architecture.',
    details: {
      mythology: 'This temple is designed as a physical representation of Mount Meru, the sacred mountain at the center of the Hindu universe. In mythology, Meru is the axis connecting the heavens and the earth, surrounded by smaller mountain ranges. The temple builders replicated this cosmology in stone. The structure begins with an entrance porch (Ardha-mandapa), rises to a main hall (Maha-mandapa), and culminates in the towering sanctum spire (Shikhara). This ascending rhythm symbolizes the soul\'s journey from the material world, climbing higher through life\'s duties, to the ultimate peak of Moksha (liberation) represented by the final spire.',
      sculpture: `The temple is a "sculptural skin" with over 870 figures carved on the exterior and interior.

The Micro-Architecture: The main tower is surrounded by 84 smaller replica towers (urushringas). This fractal geometry makes the stone look like it is vibrating or growing towards the sky.

The Human Figures: The human sculptures are about 1 meter tall and carved in high relief. The famous "Mithuna" (erotic) panels are placed on the junction walls, symbolizing that the union of male and female principles is the source of cosmic creation.

Detailing: The jewelry on the figures—waistbands, necklaces, and anklets—is carved with such precision that you can see individual beads. The Sardulas (mythical lion-beasts) carved at the base represent the controlled wild energy supporting the civilized structure.`
    }
  },
  {
    id: 3,
    name: 'Shri Raja Ram Temple',
    deity: 'Lord Rama (Worshipped as a King)',
    location: 'Orchha (Niwari District)',
    image: rajaramImg,
    mythologyImage: rajaramMyth,
    sculptureImage: rajaramSculpt,
    brief: 'The only temple in the world where Rama is worshipped as a King (Raja) with a palace and a daily police Guard of Honour.',
    details: {
      mythology: 'The story involves a divine wager between King Madhukar Shah (a Krishna devotee) and Queen Ganesh Kunwari (a Rama devotee). The King challenged the Queen to go to Ayodhya and bring her Lord Rama to Orchha, or else she should not return. The Queen performed severe penance in Ayodhya for 21 days. When Rama didn\'t appear, she prepared to jump into the Sarayu river. Moved by her devotion, Rama appeared as a child and agreed to go to Orchha on three conditions: he would travel only during the Pushya Nakshatra, he would be the King of Orchha (the human king would lose his title), and once he sat down, he would never move. The Queen returned and placed the idol in her palace kitchen for the night. The next morning, the idol refused to move to the grand temple built for him. Thus, the Queen\'s palace became the temple, and Rama became the King.',
      sculpture: `Since this is actually a palace (Rani Mahal) converted into a temple, it lacks the traditional temple spire.

The Idol: The idol of Lord Rama is unique. He is not standing with a bow; he is seated in Padmasana (Lotus position), holding a sword in one hand and a shield in the other. This iconography establishes him strictly as a Ruler and Warrior King.

The Palace Architecture: The structure features open courtyards, fortified walls, and domestic Mughal-Rajput arches. The walls inside are adorned with religious murals that use vegetable dyes, depicting scenes from the Ramayana in the distinct Bundela art style (profile faces, large eyes).`
    }
  },
  {
    id: 4,
    name: 'Omkareshwar Temple',
    deity: 'Lord Shiva (Jyotirlinga)',
    location: 'Mandhata Island (Khandwa District)',
    image: omkareshwarImg,
    mythologyImage: omkareshwarMyth,
    sculptureImage: omkareshwarSculpt,
    brief: 'Located on an island in the Narmada river naturally shaped like the symbol "Om", this temple houses a Jyotirlinga.',
    details: {
      mythology: 'In ancient times, the Danavas (Demons) grew powerful and defeated the Devas (Gods) in a great war. The defeated Gods fled to Mount Mandhata and prayed to Lord Shiva for protection. Pleased by their penance, Shiva split the earth and emerged as a Pillar of Light (Jyotirlinga). He defeated the demons and restored balance. To satisfy the devotees, he split his form into two: Omkareshwar (on the island) and Mamleshwar (on the south bank). It is also believed that the Vindhya Mountain, jealous of Mount Meru, performed penance here to become larger, and Shiva blessed him but tricked him into not growing too tall, saving the sun\'s path.',
      sculpture: `The Sabha Mandap: The temple features a grand assembly hall standing on 60 massive stone pillars. These pillars are intricately carved with Satyr-like figures, broad-shouldered eccentric deities, and floral bands.

The Spire: The Shikhar is built in the Nagara style with five distinct layers, symbolizing the five elements.

The Friezes: The exterior walls have horizontal bands depicting elephants, wars, and celestial dancers. The stone used is soft sandstone, which has allowed for deep, rounded carving, though time has weathered some details giving them a rustic, ancient appearance.`
    }
  },
  {
    id: 5,
    name: 'Chausath Yogini Temple',
    deity: 'The 64 Yoginis (Tantric Goddesses) & Shiva',
    location: 'Bhedaghat (Jabalpur)',
    image: chausathImg,
    mythologyImage: chausathMyth,
    sculptureImage: chausathSculpt,
    brief: 'A rare circular, open-air (hypaethral) temple situated on a hill overlooking the Marble Rocks, dedicated to Tantric practices.',
    details: {
      mythology: 'This temple is rooted in the legend of the battle between Goddess Durga and the demon Raktabija. Raktabija had a boon: every drop of his blood that touched the ground would spawn a clone of him. To defeat him, the Goddess manifested 64 Yoginis—fierce female energies. These Yoginis drank his blood before it could touch the earth, allowing Durga to slay him. These 64 Yoginis are considered the attendants of the Great Mother, each controlling a different aspect of fear, desire, and nature. The temple is open to the sky because Yoginis are aerial spirits who fly through the ether and cannot be contained by a roof.',
      sculpture: `The Circular Layout: The temple is a perfect circle with 81 peripheral shrines (64 for Yoginis, others for Matrikas).

Unique Iconography: Each Yogini statue is distinct. One has a horse head (Hayagriva), another has an elephant head, and another is a skeleton. They stand on unique mounts (Vahanas) like scorpions, crabs, lotuses, and severed human heads.

Gauri-Shankar: In the center stands a later-built shrine for Shiva and Parvati. The sculpture here shows them riding the bull Nandi together. It is a rare depiction of domestic bliss in the divine family, contrasting with the fierce tantric energy of the surrounding Yoginis.`
    }
  },
  {
    id: 6,
    name: 'Lakshmana Temple',
    deity: 'Lord Vishnu (Vaikuntha)',
    location: 'Khajuraho (Western Group)',
    image: lakshmanaImg,
    mythologyImage: lakshmanaMyth,
    sculptureImage: lakshmanaSculpt,
    brief: 'The best-preserved temple in Khajuraho, famous for its rare three-headed Vishnu idol and massive high platform.',
    details: {
      mythology: 'The idol inside is of Vaikuntha Vishnu. Legend says this specific image was a "Palladium"—a magical talisman that guaranteed victory to whoever possessed it. It originated from Mount Kailash, passed to the King of Tibet, then to the Pratihara King. The Chandela King Yashovarman, wanting to prove his supremacy, forced the Pratihara King to surrender this image to him as a condition of peace. He built this massive temple specifically to house this trophy of his victory, cementing the Chandelas as the new imperial power of Central India.',
      sculpture: `The Vaikuntha Idol: The central idol in the sanctum is 4 feet tall, with three heads: a Lion (Narasimha), a Boar (Varaha), and a Human. This represents the different avatars Vishnu took to save the earth.

The Jagati (Platform): Uniquely, the high platform on which the temple stands is itself a canvas. It features a frieze depicting the lifestyle of the Chandela army—processions of elephants, horses, and soldiers marching.

The Apsaras: The outer walls feature the famous "Salabhanjika" (woman breaking a branch) and the "Thorn Remover" figures. The artist has captured the "S-curve" of the female body (Tribhanga pose) with perfection, making the stone look pliable.`
    }
  },
  {
    id: 7,
    name: 'Bhojeshwar Temple',
    deity: 'Lord Shiva',
    location: 'Bhojpur (Raisen District)',
    image: bhojeshwarImg,
    mythologyImage: bhojeshwarMyth,
    sculptureImage: bhojeshwarSculpt,
    brief: 'An incomplete 11th-century temple housing one of the largest single-stone Shiva Lingams in the world (7.5 ft tall).',
    details: {
      mythology: 'According to local folklore, the Pandavas (from the Mahabharata) spent a part of their exile here. Their mother, Kunti, vowed to worship Shiva before her meal. To fulfill her vow, the Pandavas decided to build a massive temple in a single night. Bhima, known for his strength, carried the massive rocks. They worked furiously, but just as they were about to place the roof (Shikhar), the sun rose (or a cock crowed). True to their word, they stopped construction immediately, leaving the temple incomplete and the massive earthen ramp used to haul stones still standing behind it.',
      sculpture: `The Monolith Lingam: The Lingam is carved from a single rock, standing 7.5 feet tall on a massive 21-foot square platform. The polish on the stone is so high-quality that it still gleams after 1000 years of exposure to the elements (since the roof is open).

The Engraved Blueprints: This is the only temple site in India where the architectural drawings are etched into the surrounding flat rocks. You can see the draft sketches of pillars, the curvature of the intended spire, and the geometric calculations used by the ancient masons, providing a rare glimpse into the engineering process.`
    }
  },
  {
    id: 8,
    name: 'Maihar Devi (Sharda Mata) Temple',
    deity: 'Goddess Sharda (Saraswati)',
    location: 'Maihar (Satna District)',
    image: maiharImg,
    mythologyImage: maiharMyth,
    sculptureImage: maiharSculpt,
    brief: 'A Shakti Peeth located atop the Trikuta Hill, famously associated with the immortal warrior Alha.',
    details: {
      mythology: 'When Lord Shiva was carrying the burning body of his wife Sati, her body was cut into 51 pieces by Vishnu\'s Sudarshan Chakra. It is believed that her Necklace (Haar) fell at this spot, giving the town the name Mai-Har (Mother\'s Necklace). The temple is also linked to the warrior Alha. Alha was a devotee who performed penance for 12 years and offered his head to the Goddess. She revived him and granted him immortality. Locals believe that even today, Alha comes invisibly every morning to perform the first Aarti and offer a fresh flower before the temple doors are opened for the public.',
      sculpture: `The Idol: The main deity is a stone sculpture of Saraswati (Sharda), holding a book, a rosary, and a musical instrument (Veena). An inscription at the foot of the idol dates it to 502 AD, confirming its antiquity.

The Complex: The temple complex includes smaller shrines dedicated to Alha and Udal. These statues depict them as rugged warriors with swords and shields, carved in a folk style that emphasizes their strength and valor rather than divine grace.`
    }
  },
  {
    id: 9,
    name: 'Pashupatinath Temple',
    deity: 'Lord Shiva (Pashupatinath - Lord of Beasts)',
    location: 'Mandsaur',
    image: pashupatinathImg,
    mythologyImage: pashupatinathMyth,
    sculptureImage: pashupatinathSculpt,
    brief: 'Home to a unique, ancient 8-faced (Ashtamukhi) Shiva Linga, discovered in the Shivna riverbed.',
    details: {
      mythology: 'The idol is ancient (Gupta period, ~6th Century) but was lost for centuries, submerged in the Shivna river. In 1940, a local washerman named Udaji, who used a particular rock in the river to wash clothes, had a dream. Lord Shiva appeared and told him that he was beating his clothes on the Lord himself. Udaji convinced the locals to dig, and the massive Linga was revealed. When they tried to move it to a different location, the bullock cart wouldn\'t budge. Interpreting this as divine will, the temple was built exactly on the river bank where the idol was found.',
      sculpture: `The Ashtamukhi Linga: This is a 4.6-meter tall monolith of reddish-black stone. The sculpting is a masterpiece of Gupta art.

The Faces: The Linga has 4 faces on the bottom tier and 4 on the top. Each face represents a different aspect of Shiva: Rudra (Fierce/Destructive), Saumya (Beautiful/Peaceful), Indra (Regal), and Yogi (Meditative). The intricate details of the matted hair (Jata), the earrings, and the third eye are carved with smooth, rounded contours typical of the classical Gupta style.`
    }
  },
  {
    id: 10,
    name: 'Khajrana Ganesh Temple',
    deity: 'Lord Ganesha',
    location: 'Indore',
    image: khajranaImg,
    mythologyImage: khajranaMyth,
    sculptureImage: khajranaSculpt,
    brief: 'A highly revered temple built by Ahilyabai Holkar, known for fulfilling wishes (Mannat).',
    details: {
      mythology: 'During the reign of the Mughal Emperor Aurangzeb, when idols were being destroyed across India, the priests of this area took the ancient Ganesha idol and hid it in a stepwell to save it. Decades later, in 1735, a local priest named Mangal Bhatt had a dream where Ganesha instructed him to retrieve the idol. He informed Queen Ahilyabai Holkar. The Queen, known for her piety, ordered the excavation. The idol was found exactly as described and installed in a new temple.',
      sculpture: `The Idol: The Ganesha idol is Swayambhu (self-manifested) and is currently covered in thick layers of Sindoor (vermilion) and silver foil, which gives it a large, rounded appearance. The eyes are set with diamonds.

The Silver Work: The walls of the inner sanctum and the main gate are covered in silver sheets. These sheets are embossed with intricate floral patterns and scenes from the Puranas. The temple architecture is simple but features a Maratha-style dome (Gumbaz) rather than a tall North Indian spire.`
    }
  },
  {
    id: 11,
    name: 'Pitambara Peeth',
    deity: 'Goddess Bagalamukhi (The Golden Goddess)',
    location: 'Datia',
    image: pitambaraImg,
    mythologyImage: pitambaraMyth,
    sculptureImage: pitambaraSculpt,
    brief: 'A renowned Tantric Shakti Peeth, famous for the worship of Dhumavati and for being the spiritual resort of politicians during crises.',
    details: {
      mythology: 'This temple is famous for a modern legend. During the Indo-China war of 1962, Prime Minister Jawaharlal Nehru was advised to seek the help of Swamiji Maharaj of Pitambara Peeth. A massive Tantric Yajna invoking Goddess Bagalamukhi (who paralyzes enemies) was performed. It is widely believed by devotees that on the final day of the ritual, the Chinese army unilaterally declared a ceasefire and retreated, saving India from further loss.',
      sculpture: `Bagalamukhi Idol: The Goddess is depicted in golden attire (Pitambara), holding a club to strike a demon while pulling his tongue. This symbolizes stopping the enemy's speech and actions.

Dhumavati Shrine: This is rare. Dhumavati is the widow form of Shakti. Her sculpture depicts an old, haggard woman riding a crow, holding a winnowing basket. It is one of the few places where her iconography—representing the void, sorrow, and the harsh truths of life—is openly worshipped.`
    }
  },
  {
    id: 12,
    name: 'Chaturbhuj Temple',
    deity: 'Lord Vishnu (Chaturbhuj - Four-Armed)',
    location: 'Orchha',
    image: chaturbhujImg,
    mythologyImage: chaturbhujMyth,
    sculptureImage: chaturbhujSculpt,
    brief: 'A massive, cathedral-like temple that stands without its intended idol because Lord Rama refused to move from the Queen\'s palace.',
    details: {
      mythology: 'King Madhukar Shah built this colossal temple to house the idol of Lord Rama that his Queen was bringing from Ayodhya. The plan was for Rama to reign as King from this grand structure. However, the Queen unknowingly placed the idol in her palace first, and due to the divine condition that the idol would not move once set down, it remained there. Consequently, this giant temple was left empty. Later, an idol of Vishnu (Chaturbhuj) was installed, but the main sanctum intended for Rama remains symbolically "vacant" of its original purpose.',
      sculpture: `Architectural Fusion: The temple looks more like a European cathedral or a citadel than a classic Hindu temple. It has high vaulted ceilings and pointed arches.

The Spire: The Shikhar is pine-cone shaped and extremely tall. The interior is devoid of the usual intricate pillars found in mandapas; instead, it has vast open spaces and cross-vaulted roofs, showing a heavy influence of Mughal engineering techniques adapted for a Hindu temple.`
    }
  },
  {
    id: 13,
    name: 'Sas-Bahu Temple',
    deity: 'Lord Vishnu (Padmanabha)',
    location: 'Gwalior Fort',
    image: sasbahuImg,
    mythologyImage: sasbahuMyth,
    sculptureImage: sasbahuSculpt,
    brief: 'A pair of twin temples (actually named Sahastrabahu) famous for their intricate interior carvings and lack of arches.',
    details: {
      mythology: 'The name is a corruption of Sahastrabahu (Thousand-Armed Vishnu). However, the popular legend is of the Sas (Mother-in-law) and Bahu (Daughter-in-law). The King\'s wife was a devotee of Vishnu, so the larger temple was built for her worship. When the Prince married, his wife was a devotee of Shiva. To maintain domestic harmony, the King built a smaller temple right next to the big one for the daughter-in-law.',
      sculpture: `Beam and Lintel System: The temple is a marvel because it does not use arches or cement. It is built entirely using beams and lintels stacked on top of each other.

The Ceiling: The central ceiling of the larger temple is a masterpiece. It is carved in the shape of a giant lotus, with layers of concentric circles diminishing in size.

The Friezes: The pillars and walls are covered with carvings of Brahma, Vishnu, and Shiva. Uniquely, the artists used optical illusions where the profiles of the gods seem to merge or change depending on the viewing angle.`
    }
  },
  {
    id: 14,
    name: 'Teli Ka Mandir',
    deity: 'Lord Shiva (Architecture suggests it was originally Vishnu)',
    location: 'Gwalior Fort',
    image: telikaImg,
    mythologyImage: telikaMyth,
    sculptureImage: telikaSculpt,
    brief: 'The tallest structure in the fort (100 ft), featuring a unique "Wagon Vault" roof that blends North and South Indian styles.',
    details: {
      mythology: 'Unlike royal temples, this one has no king attached to its name. Legend says it was built by a guild of oil merchants (Telis) in the 8th century. They wanted to prove that their commercial wealth and devotion could rival the military might of the kings. They pooled their profits to construct a temple that dwarfed the royal palaces nearby.',
      sculpture: `Architectural Fusion: The tower is Dravidian (South Indian), resembling a rectangular "Gopuram" or wagon vault. However, the decorative details are Nagara (North Indian).

The Doorway: The entrance portal stands 35 feet high. It is elaborately carved with images of river goddesses Ganga and Yamuna, amorous couples, and floral scrolls. The central figure on the lintel is Garuda (Vishnu's mount), which suggests the temple was originally dedicated to Vishnu before becoming a Shiva temple.`
    }
  },
  {
    id: 15,
    name: 'Mitawali Chausath Yogini Temple',
    deity: 'Shiva & 64 Yoginis',
    location: 'Morena (near Gwalior)',
    image: mitawaliImg,
    mythologyImage: mitawaliMyth,
    sculptureImage: mitawaliSculpt,
    brief: 'A circular temple that is widely believed to be the architectural inspiration for the old Indian Parliament House (Sansad Bhavan).',
    details: {
      mythology: 'In medieval times, this temple was not for public worship but was a university for the occult. It was a center for learning astrology, mathematics, and Tantra. The circular design was chosen to withstand earthquakes. Legend says that the Yoginis here taught the secrets of controlling the elements to chosen sorcerers. It is believed that British architects Lutyens and Baker visited this isolated site and borrowed its unique circular, pillared design for New Delhi\'s Parliament.',
      sculpture: `Geometric Perfection: The temple stands on a 100-foot hill. It consists of a circular wall with 64 small chambers, each originally housing a Yogini (most are now stolen/missing).

The Pillars: The corridor is supported by uniform stone pillars. The beauty here is not in intricate carving (which is sparse) but in the rhythm and symmetry of the columns. The central shrine houses a circular Shivalinga, maintaining the geometric theme of the complex.`
    }
  },
  {
    id: 16,
    name: 'Matangeshwar Temple',
    deity: 'Lord Shiva',
    location: 'Khajuraho (Western Group)',
    image: matangeshwarImg,
    mythologyImage: matangeshwarMyth,
    sculptureImage: matangeshwarSculpt,
    brief: 'The only temple in the Khajuraho UNESCO group that is still in active worship and not just a monument.',
    details: {
      mythology: 'A sage named Matanga performed severe penance here. Lord Shiva, pleased with him, gave him a Marakat Mani (Emerald Gem) that had the power to control the world\'s desires. The sage buried the gem under the ground and established the Shiva Linga on top of it to protect it. It is believed that the gem is still there, radiating power, which is why this Linga is considered "Alive" (Jagrut) and is the focal point of pilgrimage, unlike the "museum" temples nearby.',
      sculpture: `The Lingam: The glory of this temple is the Lingam itself. It is a colossal polished yellow sandstone pillar, 8 feet tall and 4 feet in diameter.

Simplicity: Unlike the ornate Kandariya Mahadeva, this temple is architecturally simple with a plain pyramidal roof and fewer exterior carvings. The focus is entirely on the massive scale of the deity and the atmosphere of active devotion (bells, flowers, chanting) that fills the hall.`
    }
  },
  {
    id: 17,
    name: 'Bagalamukhi Temple (Nalkheda)',
    deity: 'Goddess Bagalamukhi',
    location: 'Nalkheda (Agar Malwa District)',
    image: bagalamukhiImg,
    mythologyImage: bagalamukhiMyth,
    sculptureImage: bagalamukhiSculpt,
    brief: 'Situated on the banks of the Lakhundar river, this is one of the only three major Bagalamukhi temples in the world, famous for "Mirchi Havan" (Chili Fire Ritual).',
    details: {
      mythology: 'In the Satya Yuga, a massive cosmic storm arose that threatened to destroy all creation. The Gods prayed to Lord Vishnu, who performed penance at the Haridra Sarovar. From the turmeric-colored water, Goddess Bagalamukhi emerged. She instantly "paralyzed" the storm, calming the universe. She is the Goddess of Stambhan (stopping/paralyzing). It is said that Yudhishthira (from Mahabharata) built this temple after the war to pacify the souls of the dead kinsmen.',
      sculpture: `The Trishakti Idol: The idol here is unique as it is not just Bagalamukhi but a fusion of three energies (Trishakti). The central figure is Bagalamukhi, with Mahalakshmi and Mahasaraswati on either side.

The Lion: She is depicted riding a Lion, pulling the tongue of a demon with one hand and striking him with a club with the other. The sculpture is painted in bright yellow and adorned with yellow flowers, emphasizing her status as the "Pitambara" (Yellow-clad) deity.`
    }
  },
  {
    id: 18,
    name: 'Bawangaja (Adinath) Temple',
    deity: 'Lord Rishabhdev (Adinath - First Jain Tirthankara)',
    location: 'Barwani (Satpura Range)',
    image: bawangajaImg,
    mythologyImage: bawangajaMyth,
    sculptureImage: bawangajaSculpt,
    brief: 'Houses the world\'s tallest monolithic statue of Adinath (84 feet), carved directly out of a mountain face.',
    details: {
      mythology: 'While it is a Jain site, local folklore and some texts suggest that this mountain is where Kumbhakarna (Ravana\'s giant brother) and Indrajit (Ravana\'s son) attained Moksha (salvation). Jain cosmology often integrates figures from the Ramayana, viewing them as individuals who eventually sought liberation. The massive size of the statue is said to reflect the colossal stature of the beings in that era.',
      sculpture: `The Monolith: The statue is 84 feet (26 meters) high, carved out of a single brown rock face of the Satpura mountain. It depicts the Tirthankara in Kayotsarga mudra (standing meditation).

Anatomical Detail: Unlike the Gommateshwara statue in Karnataka which is rounded, this statue is more stylized and angular. The facial expression is one of absolute serenity. The hands hang loose by the side, not touching the body, symbolizing total detachment from the material world.`
    }
  },
  {
    id: 19,
    name: 'Annapurna Temple',
    deity: 'Goddess Annapurna (The Goddess of Food)',
    location: 'Indore',
    image: annapurnaImg,
    mythologyImage: annapurnaMyth,
    sculptureImage: annapurnaSculpt,
    brief: 'Famous for its elaborate gate which is a replica of the Meenakshi Temple in Madurai, bringing South Indian architecture to MP.',
    details: {
      mythology: 'Once, Lord Shiva told Parvati that everything in the world, including food, is Maya (illusion). Parvati, the Goddess of Nature and Food, disagreed. To prove the importance of food, she disappeared from the world. Instantly, the world became barren; there was no food, and all beings, including the Gods and Shiva, suffered from hunger. Realizing his mistake, Shiva appeared before Parvati (who had reappeared as Annapurna in Kashi) with a begging bowl. She fed him, proving that food is the basis of life (Prana). This temple celebrates that nurturing aspect of the Mother.',
      sculpture: `The Gopuram: The entrance gate is a towering structure covered in hundreds of colorful plaster statues of gods, goddesses, and mythical beasts, typical of the Dravidian style found in Tamil Nadu.

The Reliefs: Inside, the walls are adorned with high-relief sculptures depicting stories from the Mahabharata and Ramayana. The main sanctum is made of marble and houses the idol of Annapurna holding a ladle and a pot of kheer (rice pudding).`
    }
  },
  {
    id: 20,
    name: 'Amarkantak Temple Group (Narmada Udgam)',
    deity: 'Goddess Narmada & Lord Shiva',
    location: 'Amarkantak (Anuppur District)',
    image: amarkantakImg,
    mythologyImage: amarkantakMyth,
    sculptureImage: amarkantakSculpt,
    brief: 'The source of the Narmada River. It is a complex of white temples marking the spot where the river emerges from the ground.',
    details: {
      mythology: 'Legend says that the Narmada (as a river goddess) was to marry the Son Bhadra (another river). However, she discovered that Son Bhadra was in love with her friend, Johila (a tributary). Enraged and heartbroken, Narmada kicked a rock, changed her course, and vowed to remain a virgin forever and flow in the opposite direction (West) from all other rivers. This is why Narmada is called the "Virgin River," and her waters are considered holier than Ganga because she is the energy of Shiva\'s sweat/tears and rejected worldly attachment.',
      sculpture: `The Karna Math: Built by the Kalachuri King Karna (1041-1073 AD), these temples feature a unique "multi-faced" spire. The Shikharas are curved and have a distinct vertical rhythm.

The Kund: The Narmada Udgam Kund is a white stone tank. Inside the main temple, the idol of Narmada is depicted as a four-armed goddess seated on a lotus, which is rare for river goddesses who are usually depicted on a crocodile (Makara). The architecture is stark white, contrasting with the surrounding green Sal forests.`
    }
  }
];

// --- MODAL COMPONENT ---
const TempleModal = ({ temple, onClose }) => {
  if (!temple) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 sm:px-6">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />
      
      {/* Modal Container */}
      <motion.div 
        initial={{ scale: 0.1, opacity: 0, rotate: 15 }}
        animate={{ 
          scale: [0.1, 0.4, 0.8, 1.05, 1], 
          rotate: [15, -10, 5, -2, 0],    
          opacity: [0, 1, 1, 1, 1]        
        }}
        exit={{ scale: 0.1, opacity: 0, rotate: -15 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full overflow-y-auto bg-background rounded-2xl shadow-2xl border border-border"
        style={{ maxWidth: MODAL_WIDTH, maxHeight: '90vh' }}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-black/10 hover:bg-black/20 text-foreground transition-colors z-10"
        >
          <X size={24} />
        </button>

        {/* MAIN IMAGE HEADER */}
        <div className="relative w-full" style={{ height: IMAGE_HEIGHT }}> 
          <img 
            src={temple.image} 
            alt={temple.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 md:left-10 text-white">
             <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2">{temple.name}</h2>
             <div className="flex items-center gap-2 text-white/90">
                <MapPin size={18} />
                <span className="font-medium">{temple.location}</span>
             </div>
          </div>
        </div>

        <div className="p-6 md:p-10 space-y-8">
          {/* INFO CARD */}
          <div className="bg-secondary/5 p-6 rounded-xl border border-secondary/10">
            <h3 className="text-lg font-bold text-primary mb-2">Location</h3>
            <p className="text-foreground text-lg mb-4 flex items-center gap-2">
                <MapPin size={20} className="text-primary" />
                {temple.location}
            </p>

            <h3 className="text-lg font-bold text-primary mb-2">Deity</h3>
            <p className="text-foreground text-lg mb-4">{temple.deity}</p>
            <h3 className="text-lg font-bold text-primary mb-2">Specialty</h3>
            <p className="text-muted-foreground">{temple.brief}</p>
          </div>

          <div className="space-y-12">
            
            {/* MYTHOLOGY SECTION */}
            <div>
              {/* Dynamic Mythology Image - Height Adjusts to Content */}
              <div className="relative w-full mb-6 flex justify-center">
                  <img 
                      src={temple.mythologyImage}
                      alt={`${temple.name} Mythology`}
                      // w-full to fill width, h-auto to maintain aspect ratio, max-h to prevent taking whole screen
                      className="w-full h-auto max-h-[500px] object-contain rounded-xl shadow-md border border-border" 
                  />
              </div>

              <section>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">Mythology</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">{temple.details.mythology}</p>
              </section>
            </div>

            {/* SCULPTURE SECTION */}
            <div>
              {/* Dynamic Sculpture Image */}
              <div className="relative w-full mb-6 flex justify-center">
                  <img 
                      src={temple.sculptureImage}
                      alt={`${temple.name} Sculpture`}
                      className="w-full h-auto max-h-[500px] object-contain rounded-xl shadow-md border border-border" 
                  />
              </div>

              <section>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                  Architecture & Sculpture
                </h3>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line text-lg">
                  {temple.details.sculpture}
                </p>
              </section>
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---
const Temples = () => {
  const [selectedTemple, setSelectedTemple] = useState(null);

  return (
    <main className="min-h-screen bg-background paper-texture">
      <Navbar />

      <section className="pt-32 pb-12 px-4 container mx-auto text-center">
        <span className="font-handwritten text-3xl text-secondary inline-block mb-4">मंदिर दर्शन</span>
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">Divine Architecture</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Click on any temple card below to uncover the history, mythology, and architectural marvels of Madhya Pradesh.
        </p>
      </section>

      <section className="pb-24 px-4 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templesData.map((temple) => (
            <motion.div
              key={temple.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group bg-card rounded-2xl overflow-hidden border border-border shadow-lg cursor-pointer flex flex-col h-full"
              onClick={() => setSelectedTemple(temple)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={temple.image} 
                  alt={temple.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase rounded-full tracking-wider">
                    Temples
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {temple.name}
                </h3>
                <p className="text-sm text-primary/80 font-medium mb-4 line-clamp-2">
                   {temple.brief}
                </p>
                <div className="mt-auto pt-4 border-t border-border flex items-center text-muted-foreground text-sm gap-2">
                  <MapPin size={16} className="text-primary" />
                  {temple.location.split('(')[0]}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selectedTemple && (
          <TempleModal 
            temple={selectedTemple} 
            onClose={() => setSelectedTemple(null)} 
          />
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
};

export default Temples;
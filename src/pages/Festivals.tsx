import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, MapPin, Calendar, Clock } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

// Logo Images
import religiousImg from '@/assets/festivals/religious-spiritual-logo.png';
import culturalImg from '@/assets/festivals/cultural-art-logo.png';
import heritageImg from '@/assets/festivals/heritage-tourism-logo.png';
import musicImg from '@/assets/festivals/music-logo.png';

// Religious & Spiritual Festivals 
import kumbhmelaImg from '@/assets/festivals/religious_spiritual/simhastha-kumbh-mela.jpg';
import chethiyagiriImg from '@/assets/festivals/religious_spiritual/chethiyagiri-vihara-festival.png';
import madaiImg from '@/assets/festivals/religious_spiritual/madai-festival.png';
import karmaImg from '@/assets/festivals/religious_spiritual/karma-festival.png';
import larookajImg from '@/assets/festivals/religious_spiritual/laroo-kaj.jpg';
import meghnadImg from '@/assets/festivals/religious_spiritual/meghnad-festival.png';
import nagajifairImg from '@/assets/festivals/religious_spiritual/nagaji-fair.png';
import peerbudhanImg from '@/assets/festivals/religious_spiritual/peer-budhan.png';
import mrityunjayamelaImg from '@/assets/festivals/religious_spiritual/maha-mrityunjaya-mela.png';
import singajimelaImg from '@/assets/festivals/religious_spiritual/singaji-mela.png';
import dhamoniImg from '@/assets/festivals/religious_spiritual/dhamoni-urs.png';
import tejajifairImg from '@/assets/festivals/religious_spiritual/tejaji-fair.png';
import burmanmelaImg from '@/assets/festivals/religious_spiritual/burman-mela.png';
import hirabhumiaImg from '@/assets/festivals/religious_spiritual/hira-bhumia-mela.png';

// Cultural & Art Festivals 
import khajurahodanceImg from '@/assets/festivals/cultural_art/khajuraho-dance-festival.jpg';
import lokrangImg from '@/assets/festivals/cultural_art/lokrang-festival.png';
import kalidassamarohImg from '@/assets/festivals/cultural_art/kalidas-samaroh.jpg';
import malwautsavImg from '@/assets/festivals/cultural_art/malwa-utsav.jpg';
import nimarImg from '@/assets/festivals/cultural_art/nimar-utsav.png';
import pachmarhiImg from '@/assets/festivals/cultural_art/pachmarhi-utsav.png';
import gwaliorfairImg from '@/assets/festivals/cultural_art/gwalior-trade-fair.jpg';
import rashtriyaramleelaImg from '@/assets/festivals/cultural_art/rashtriya-ramleela.jpg';
import bhagoriahaatImg from '@/assets/festivals/cultural_art/bhagoria-haat.jpg';
import sanjafestImg from '@/assets/festivals/cultural_art/sanja-festival.jpeg';
import hareliImg from '@/assets/festivals/cultural_art/hareli-festival.jpeg';

// Heritage & Tourism Festivals 
import manduutsavImg from '@/assets/festivals/heritage_tourism/mandu-utsav.jpg';
import orchhautsavImg from '@/assets/festivals/heritage_tourism/orchha-festival.png';
import jalmahotsavImg from '@/assets/festivals/heritage_tourism/jal-mahotsav.png';
import gandhisagarImg from '@/assets/festivals/heritage_tourism/gandhi-sagar-floating-festival.jpeg';

// Music Festivals 
import tansenfestImg from '@/assets/festivals/music/tansen-festival.jpeg';
import allauddinsangeetImg from '@/assets/festivals/music/allauddin-khan-sangeet-samaroh.jpg';
import dhrupadImg from '@/assets/festivals/music/dhrupad-samaroh.jpg';
import ameerkhanImg from '@/assets/festivals/music/ameer-khan-festival.jpeg';

// --- DATA STRUCTURE WITH EXACT CONTENT ---
const festivalsData = {
  "MUSIC FESTIVALS": [
    {
      id: 1,
      name: "Tansen Samaroh",
      location: "Gwalior (Behat Village & Tansen’s Tomb complex)",
      time: "December (Winter)",
      significance: "It is the oldest and most prestigious classical music festival in India, serving as the ultimate platform for the Gwalior Gharana (the oldest tradition of Hindustani music). It pays homage to Mian Tansen, the musical gem of Emperor Akbar's court.",
      details: [
        { title: "The Ritual", text: "The festival opens with a traditional Hari Katha (religious storytelling) recital, honoring the spiritual roots of Indian music." },
        { title: "The Setting", text: "Performances do not happen in a closed auditorium but on an open stage built next to the beautiful Mughal-style tomb of Tansen. The audience sits under the winter sky." },
        { title: "The Music", text: "Artists perform specific Ragas suited to the time of day (e.g., Raga Bhairav in the morning, Raga Darbari at night). The focus is often on the Dhrupad style, known for its deep, spiritual resonance, which Tansen himself mastered. The prestigious \"National Tansen Samman\" award is conferred upon a maestro during this event." }
      ],
      image: tansenfestImg
    },
    {
      id: 2,
      name: "Allauddin Khan Sangeet Samaroh",
      location: "Maihar (Satna District)",
      time: "March (Spring)",
      significance: "A tribute to Ustad Allauddin Khan (Baba), the legendary multi-instrumentalist who created the \"Maihar Band\" using orphans he adopted and taught music. He is the guru of global icons like Ravi Shankar.",
      details: [
        { title: "The Maihar Band", text: "The highlight is the performance by the Maihar Band, an orchestra that plays rare instruments like the Nal-Tarang (made from gun barrels)." },
        { title: "The Performances", text: "Three days of non-stop classical recitals feature the Sarod, Sitar, and Surbahar. Unlike other festivals, the atmosphere here is deeply devotional because Baba was a devotee of Goddess Sharda; musicians often visit the hilltop Sharda Temple before performing." }
      ],
      image: allauddinsangeetImg
    },
    {
      id: 3,
      name: "Dhrupad Samaroh",
      location: "Bhopal",
      time: "December",
      significance: "This is a niche festival dedicated solely to Dhrupad, the most ancient and austere form of Hindustani vocal music, preserving a style that dates back to the Vedic era.",
      details: [
        { title: "The Style", text: "You will not hear the fast-paced Khayal or romantic Thumri here. The performances focus on the Alap—a slow, rhythmic, and wordless improvisation that can last for an hour, exploring the depth of a single Raga." },
        { title: "The Schools", text: "It brings together masters from the Dagarvani (meditative) and Khandarvani (vigorous) schools. The stage is usually designed with minimal, earthy aesthetics to match the purity of the music." }
      ],
      image: dhrupadImg
    },
    {
      id: 4,
      name: "Ameer Khan Festival",
      location: "Indore",
      time: "February / March",
      significance: "Honors Ustad Ameer Khan, the founder of the Indore Gharana, known for his intellectual and slow-tempo style (Vilambit Laya).",
      details: [
        { title: "Intellectual Music", text: "The performances here are characterized by complex melodic structures (Sargam patterns) rather than showmanship. It attracts serious musicologists." },
        { title: "Fusion", text: "Alongside pure classical vocals, the festival often features Sufi musical traditions, reflecting Ameer Khan's belief in the spiritual unity of music." }
      ],
      image: ameerkhanImg
    }
  ],
  "HERITAGE & TOURISM": [
    {
      id: 5,
      name: "Mandu Utsav",
      location: "Mandu (Dhar District)",
      time: "December / January",
      significance: "A celebration of the romantic and architectural legacy of the \"City of Joy,\" focusing on the tragic love story of Prince Baz Bahadur and Rani Roopmati.",
      details: [
        { title: "Adventure", text: "Tourists engage in hot air ballooning to see the massive Afghan architecture (like Jahaz Mahal) from the sky." },
        { title: "The \"Kabir Cafe\"", text: "Evenings feature fusion bands (like Neeraj Arya’s Kabir Cafe) performing inside the ancient forts." },
        { title: "Heritage Walks", text: "Guided tours take visitors through the Rewa Kund and Rani Roopmati Pavilion at sunset, narrating how the Queen used to gaze at the Narmada river from her terrace." }
      ],
      image: manduutsavImg
    },
    {
      id: 6,
      name: "Orchha Utsav",
      location: "Orchha (Niwari District)",
      time: "March",
      significance: "Showcases the medieval valor of the Bundela Dynasty and the unique religious status of Lord Rama as a King here.",
      details: [
        { title: "The Guard of Honour", text: "Visitors witness the police giving a gun salute to the idol of Raja Ram at the temple." },
        { title: "Cenotaph Performances", text: "Classical dance and music performances are held with the illuminated Chhatris (royal cenotaphs) and the Betwa river as the backdrop." },
        { title: "Maha Aarti", text: "A grand Aarti is performed on the banks of the Betwa river, similar to the one in Varanasi but with Bundeli folk songs." }
      ],
      image: orchhautsavImg
    },
    {
      id: 7,
      name: "Jal Mahotsav",
      location: "Hanuwantiya Tapu (Indira Sagar Dam Backwaters)",
      time: "November to January",
      significance: "India’s largest water carnival, designed to replicate the Swiss Lake Festivals, transforming a remote reservoir into a luxury destination.",
      details: [
        { title: "Tent City", text: "A temporary city of over 100 Swiss cottages is erected on the banks." },
        { title: "Water Action", text: "From sunrise to sunset, the water is filled with jet skis, banana boats, and speed boats. Paramotoring allows tourists to fly over the vast dam waters." },
        { title: "Island Camping", text: "Special night camping is organized on the small islands located in the middle of the reservoir, accessible only by boat." }
      ],
      image: jalmahotsavImg
    },
    {
      id: 8,
      name: "Gandhi Sagar Floating Festival",
      location: "Gandhi Sagar Dam (Mandsaur)",
      time: "February",
      significance: "Offers a unique \"Glamping\" (Glamorous Camping) experience with floating tents, combining luxury with the rugged terrain of the Chambal valley.",
      details: [
        { title: "Floating Suites", text: "Tourists stay in luxury tents that float on the water, anchored to the shore." },
        { title: "Rock Art Tours", text: "Guided boat tours take visitors to the Chaturbhuj Nala, a site accessible only by water, which houses prehistoric rock paintings thousands of years old." },
        { title: "Jungle Safari", text: "Excursions are organized into the Gandhi Sagar Wildlife Sanctuary to spot leopards and crocodiles." }
      ],
      image: gandhisagarImg
    }
  ],
  "CULTURAL & ARTS": [
    {
      id: 9,
      name: "Khajuraho Dance Festival",
      location: "Khajuraho (Chhatarpur)",
      time: "February (Late Winter)",
      significance: "Recreates the magic of the 10th-century Chandela era by showcasing live classical dance against the backdrop of the UNESCO World Heritage temples.",
      details: [
        { title: "The Stage", text: "The stage is set up in the open lawn facing the Chitragupta and Vishwanatha Temples. The temples are illuminated with golden lights." },
        { title: "The Performance", text: "It is strictly for Indian Classical forms—Kathak, Odissi, Bharatnatyam, Kuchipudi, and Mohiniyattam. Dancers enact mythological stories (like Krishna Leela or Shiva Tandav)." },
        { title: "Art Mart", text: "An exhibition of local Bundelkhandi crafts and stone carvings runs parallel to the dance performances." }
      ],
      image: khajurahodanceImg
    },
    {
      id: 10,
      name: "Lokrang Festival",
      location: "Bhopal (Ravindra Bhavan)",
      time: "January 26th onwards (5 days)",
      significance: "Organized by the Adivasi Lok Kala Academy to preserve and showcase the dying tribal arts of India.",
      details: [
        { title: "Deshantar", text: "A segment where international folk troupes (from countries like Russia or Ukraine) perform their traditional dances." },
        { title: "Heritage Exhibition", text: "A massive fair displays tribal artifacts—Gond paintings, wrought iron work from Bastar, and bamboo crafts." },
        { title: "Live Performance", text: "You will see rare indigenous dances like the Gaur dance of the Marias or the Raut Nacha, performed in authentic tribal attire involving bison horns and peacock feathers." }
      ],
      image: lokrangImg
    },
    {
      id: 11,
      name: "Akhil Bhartiya Kalidas Samaroh",
      location: "Ujjain",
      time: "November / December (Kartik Shukla Ekadashi)",
      significance: "A literary tribute to the Great Poet Kalidasa, celebrating Sanskrit literature and theater.",
      details: [
        { title: "The Plays", text: "Kalidasa’s masterpieces like Abhigyan Shakuntalam and Meghduta are enacted on stage, often in their original Sanskrit form or Hindi translations." },
        { title: "Scholarly Debate", text: "Eminent scholars gather for the Vichar Goshthi to debate nuances of ancient texts." },
        { title: "Awards", text: "The prestigious \"Kalidas Samman\" is awarded to artists for excellence in Classical Music, Classical Dance, Theatre, and Plastic Arts." }
      ],
      image: kalidassamarohImg
    },
    {
      id: 12,
      name: "Malwa Utsav",
      location: "Indore (Lal Bagh Palace) & Ujjain",
      time: "May",
      significance: "Celebrates the spirit of the Malwa Plateau, known for its rich cuisine and warrior history.",
      details: [
        { title: "Culinary Feast", text: "The biggest draw is the food. Stalls serve authentic Dal-Bafla (baked wheat balls with lentils), Bhutte ka Kees (grated corn snack), and Mawa Bati." },
        { title: "Folk Arts", text: "Performances include the Matki dance (women balancing earthen pots on their heads) and Mach (a folk theatre form involving songs and dialogues)." }
      ],
      image: malwautsavImg
    },
    {
      id: 13,
      name: "Nimar Utsav",
      location: "Maheshwar (Khargone District)",
      time: "November (Kartik Purnima)",
      significance: "Held on the holy ghats of the Narmada, celebrating the legacy of Devi Ahilyabai Holkar.",
      details: [
        { title: "Deep Daan", text: "On the full moon night, thousands of women release lit oil lamps into the river, turning the dark water into a stream of light." },
        { title: "Boat Races", text: "During the day, decorated boats compete in races on the river." },
        { title: "Holkar Legacy", text: "The fort complex is decorated, and plays depicting the justice and piety of Ahilyabai are staged." }
      ],
      image: nimarImg
    },
    {
      id: 14,
      name: "Pachmarhi Utsav",
      location: "Pachmarhi",
      time: "December 25th - 31st",
      significance: "A cultural carnival in MP’s only hill station, blending tribal culture with modern New Year celebrations.",
      details: [
        { title: "The Amphitheater", text: "Cultural evenings are held at the open-air amphitheater. Performances include the Gudum (tribal drum dance) and folk songs of the Korku tribe." },
        { title: "Exhibitions", text: "Locals sell rare forest produce like Ayurvedic herbs, pure honey, and bamboo furniture." }
      ],
      image: pachmarhiImg
    },
    {
      id: 15,
      name: "Gwalior Trade Fair",
      location: "Gwalior (Mela Ground)",
      time: "January to February",
      significance: "Started in 1905 by King Madho Rao Scindia, it is North India's largest trade fair, famous for its tax exemptions.",
      details: [
        { title: "The RTO Rebate", text: "People wait all year to buy cars and bikes here because the government offers a 50% discount on road tax for vehicles purchased at the fair." },
        { title: "The Sectors", text: "The ground is divided into sectors—Electronics, Cattle, Automobiles, and Crafts." },
        { title: "The Food Court", text: "The \"Chatt Gali\" serves famous Gwalior street food like Morena Gajak and Bedai-Sabzi." }
      ],
      image: gwaliorfairImg
    },
    {
      id: 16,
      name: "Rashtriya Ramleela Mela",
      location: "Bhopal",
      time: "October (Navratri)",
      significance: "A comparative showcase of how the Ramayana is interpreted across different regions of India and the world.",
      details: [
        { title: "Diverse Styles", text: "You might see a troupe from Karnataka performing Yakshagana style Ramleela (heavy makeup, high energy) on one day, and a troupe from Sri Lanka or Thailand performing a ballet-style Ramayana on the next." },
        { title: "Focus", text: "It highlights that while the story is the same, the artistic expression varies drastically by culture." }
      ],
      image: rashtriyaramleelaImg
    },
    {
      id: 17,
      name: "Bhagoria Haat Festival",
      location: "Jhabua, Alirajpur (Bhil Tribal Belt)",
      time: "March (7 days before Holi)",
      significance: "An exuberant harvest festival of the Bhil and Bhilala tribes, historically famous as a \"Swayamvar\" (matchmaking) event.",
      details: [
        { title: "The Matchmaking Ritual", text: "Traditionally, a boy applies Gulal (red powder) to a girl's face. If she applies it back, the match is accepted, and they elope (symbolically) to marry." },
        { title: "The Mandal", text: "Groups of men play huge drums called Mandal and dance in circles." },
        { title: "The Haat", text: "It is a chaotic, colorful market where tribals buy jaggery, silver jewelry, and supplies for the upcoming Holi festival." }
      ],
      image: bhagoriahaatImg
    },
    {
      id: 18,
      name: "Sanja Festival",
      location: "Malwa Region (Indore, Ujjain)",
      time: "September (During Pitru Paksha - 16 days)",
      significance: "A festival exclusively for unmarried girls to pray for a good husband and happy marital life.",
      details: [
        { title: "Wall Art (Sanja Kot)", text: "Every day for 16 days, girls create new geometric designs on the walls of their homes using fresh cow dung, decorating it with flower petals and colorful foil." },
        { title: "Evening Songs", text: "In the evenings, girls gather to sing traditional Sanja folk songs. On the final day (Kilakot), the elaborate wall art is scraped off and immersed in a river." }
      ],
      image: sanjafestImg
    },
    {
      id: 19,
      name: "Hareli",
      location: "Rural MP (Mandla, Balaghat)",
      time: "July / August (Shravan Amavasya)",
      significance: "The festival of \"Greenery\" (Haryali), marking the beginning of the sowing season.",
      details: [
        { title: "Tool Worship", text: "Farmers stop all agricultural work. They wash their ploughs, sickles, and axes, and worship them with rice and flowers." },
        { title: "Gedi Walking", text: "A unique feature is the Gedi race, where men and children walk on tall bamboo stilts through the muddy village streets, displaying balance and skill." },
        { title: "Protection", text: "Branches of the Bhelwa tree are placed in fields to ward off insects and evil spirits." }
      ],
      image: hareliImg
    }
  ],
  "RELIGIOUS & SPIRITUAL": [
    {
      id: 20,
      name: "Simhastha Kumbh Mela",
      location: "Ujjain (Banks of Shipra River)",
      time: "Once every 12 years (Next in 2028). April-May.",
      significance: "One of the four holiest congregations in Hinduism, held when Jupiter enters Leo (Simha).",
      details: [
        { title: "Shahi Snan (Royal Bath)", text: "The main event is the procession of the Akharas (orders of Naga Sadhus). Naked, ash-smeared ascetics charge into the river for the holy dip at a precise astrological moment." },
        { title: "The Tent City", text: "A temporary city housing millions emerges. Spiritual discourses, free food kitchens (Langars), and debates on scriptures run 24/7 for a month." }
      ],
      image: kumbhmelaImg
    },
    {
      id: 21,
      name: "Chethiyagiri Vihara Festival",
      location: "Sanchi (Raisen)",
      time: "November (Last Sunday)",
      significance: "A rare opportunity to see the actual physical relics of Buddha's chief disciples.",
      details: [
        { title: "The Relics", text: "The bone relics of Sariputta and Maha Moggallana, usually kept locked in the museum, are brought out in a casket." },
        { title: "The Procession", text: "Monks from Sri Lanka, Japan, and Thailand lead a chanting procession. Pilgrims line up to catch a glimpse of the casket, believing it radiates spiritual energy." }
      ],
      image: chethiyagiriImg
    },
    {
      id: 22,
      name: "Madai Festival",
      location: "Mandla, Dindori (Gond Belt)",
      time: "January to March (Dates vary by village)",
      significance: "A traveling festival where the Gond and Baiga clans meet to worship the mother goddess and arrange marriages.",
      details: [
        { title: "The Procession", text: "The festival moves from village to village. The priest carries the Chhatra (Sacred Pole) of the local goddess." },
        { title: "Sacrifice", text: "A goat is sacrificed to the deity to ensure the village's safety." },
        { title: "The Dance", text: "The night ends with the rhythmic Karma and Saila dances, where men and women dance in separate lines, locking arms." }
      ],
      image: madaiImg
    },
    {
      id: 23,
      name: "Karma Festival",
      location: "Mandla & Balaghat",
      time: "August / September (Bhadrapad)",
      significance: "Nature worship centered around the Karma Tree (Nauclea Parvifolia), believed to grant fertility.",
      details: [
        { title: "Planting the Branch", text: "A branch of the Karma tree is cut and planted in the center of the village dancing ground (Akhara)." },
        { title: "The Ritual", text: "The branch is washed with milk and turmeric. Villagers dance around it all night. The legend of Karma Rani, a woman who suffered but was saved by the tree, is sung." }
      ],
      image: karmaImg
    },
    {
      id: 24,
      name: "Laroo Kaj",
      location: "Gond & Baiga households",
      time: "Post-harvest (Private family event)",
      significance: "A thanksgiving sacrifice to Narayan Deo (The Sun/Creator) for curing an illness or granting a wish.",
      details: [
        { title: "The Pig Wedding", text: "A pig is chosen and treated as a \"bridegroom.\" It is bathed, garlanded, and fed delicious food." },
        { title: "The Sacrifice", text: "The pig is then sacrificed to Narayan Deo. The head is offered to the deity, and the meat is cooked for a community feast. It is believed this prevents the disease from returning." }
      ],
      image: larookajImg
    },
    {
      id: 25,
      name: "Meghnad Festival",
      location: "Satpura Region (Chhindwara/Betul)",
      time: "March (First week after Holi)",
      significance: "A unique tribal worship of Meghnad (Ravana's son), whom the Gonds revere as a protector deity.",
      details: [
        { title: "The Pillar", text: "A tall wooden pillar (symbolizing Meghnad) is erected." },
        { title: "Khamb Swang", text: "Devotees perform the \"Pillar Dance.\" Young men climb the slippery pole and spin around it using ropes, performing acrobatics to please the deity and prove their courage." }
      ],
      image: meghnadImg
    },
    {
      id: 26,
      name: "Nagaji Fair",
      location: "Porsa Village (Morena)",
      time: "November / December",
      significance: "Dedicated to Saint Nagaji (Akbar's era), historically a monkey-trading fair.",
      details: [
        { title: "Animal Trade", text: "While monkey trading is now banned/rare, the fair is a massive market for bullocks and horses." },
        { title: "Rural Sports", text: "The fair features rustic entertainment like wrestling matches (Dangal), horse racing, and folk singing of ballads like Alha-Udal." }
      ],
      image: nagajifairImg
    },
    {
      id: 27,
      name: "Peer Budhan Fair",
      location: "Sanwara (Shivpuri)",
      time: "August / September",
      significance: "A 250-year-old fair celebrating the Sufi Saint Peer Budhan, representing communal harmony.",
      details: [
        { title: "Offerings", text: "Both Hindus and Muslims visit the tomb. They offer Malida (a sweet made of wheat and jaggery) and floral sheets (Chadar)." },
        { title: "Qawwali", text: "Nights are filled with high-energy Qawwali performances, where singers enter a trance-like state honoring the saint." }
      ],
      image: peerbudhanImg
    },
    {
      id: 28,
      name: "Maha Mrityunjaya Mela",
      location: "Rewa",
      time: "Basant Panchami (Feb) and Shivratri (March)",
      significance: "Held at the unique temple where the Shiva Linga has 1001 holes (representing 1001 eyes).",
      details: [
        { title: "Chanting", text: "Devotees gather to chant the Maha Mrityunjaya Mantra specifically to cure terminal illnesses or fear of death." },
        { title: "Abhishek", text: "A continuous stream of water and milk is poured over the unique Linga, which flows through the 1001 holes, symbolizing the washing away of 1001 sins/diseases." }
      ],
      image: mrityunjayamelaImg
    },
    {
      id: 29,
      name: "Singaji Mela",
      location: "Piplya Village (Khargone)",
      time: "September / October (Sharad Purnima)",
      significance: "Honors Saint Singaji, a cowherd who became a saint. He is the guardian deity of cattle in the Nimar region.",
      details: [
        { title: "Ghee Offering", text: "Farmers travel miles carrying pots of fresh Ghee (clarified butter) to pour on the saint's Samadhi." },
        { title: "Nishan", text: "Villagers carry tall flags (Nishan) and sing Bhajans (devotional songs) composed by the saint himself in the Nimadi dialect." }
      ],
      image: singajimelaImg
    },
    {
      id: 30,
      name: "Dhamoni Urs",
      location: "Dhamoni (Sagar District)",
      time: "April / May",
      significance: "A Sufi festival at the shrine of Mastan Shah Vali and his brother Baljit Shah.",
      details: [
        { title: "Exorcism/Healing", text: "It is widely believed that the shrine has the power to cure people possessed by evil spirits. Many attendees come specifically for spiritual healing." },
        { title: "Sandal Procession", text: "A procession carrying \"Sandal\" (sandalwood paste) is taken out and applied to the tomb." }
      ],
      image: dhamoniImg
    },
    {
      id: 31,
      name: "Tejaji Fair",
      location: "Bhamavad (Guna)",
      time: "August / September (Tejaji Dashami)",
      significance: "Dedicated to Veer Tejaji, a folk deity believed to have the power to neutralize snake venom.",
      details: [
        { title: "The Tanti Ritual", text: "During the year, if a person is bitten by a snake or faces illness, they tie a thread (Tanti) in Tejaji's name. During this fair, they come to untie it." },
        { title: "Poison Sucking", text: "In a dramatic ritual, the temple priest, believed to be possessed by Tejaji, symbolically sucks the \"poison\" out of the victims' bodies to certify they are cured." }
      ],
      image: tejajifairImg
    },
    {
      id: 32,
      name: "Burman Mela",
      location: "Barman Ghat (Narsinghpur)",
      time: "January (Makar Sankranti)",
      significance: "A massive 13-day congregation on the banks of the Narmada where Lord Brahma is believed to have performed a Yagya.",
      details: [
        { title: "Holy Dip", text: "Pilgrims take a holy dip in the Narmada at sunrise on Sankranti." },
        { title: "Deep Daan", text: "In the evening, thousands of leaf-boats with lit lamps are released into the river." },
        { title: "The Market", text: "Since it lasts nearly two weeks, it becomes a temporary supermarket for villagers, selling everything from iron tools to spices and livestock." }
      ],
      image: burmanmelaImg
    },
    {
      id: 33,
      name: "Hira Bhumia Fair",
      location: "Gwalior, Guna, & surrounding areas",
      time: "August / September",
      significance: "Honors the Hira Bhumia saint, believed to cure female infertility.",
      details: [
        { title: "Godoudi Ritual", text: "Childless women perform the Godoudi ritual, where they offer coconut and sweets to the saint, praying for a child." },
        { title: "First Haircut", text: "Families who have been blessed with a child return to the fair to perform the Mundan (first haircut) of the baby at the saint's platform." }
      ],
      image: hirabhumiaImg
    }
  ]
};

// --- SINGLE FESTIVAL CARD COMPONENT (Handles the Slide In Animation) ---
const FestivalCard = ({ item, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex flex-col md:flex-row w-full min-h-[60vh] bg-card border border-border shadow-lg rounded-2xl overflow-hidden mb-12 ${
        !isEven ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Image Half */}
      <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden" />
        <div className="absolute bottom-4 left-4 text-white md:hidden">
           <h3 className="font-serif text-2xl font-bold">{item.name}</h3>
        </div>
      </div>

      {/* Content Half */}
      <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-card">
        <h3 className="hidden md:block font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4">
          {item.name}
        </h3>
        
        <div className="flex flex-wrap gap-4 text-sm font-sans text-muted-foreground mb-6">
          <div className="flex items-center gap-1.5 px-3 py-1 bg-secondary/10 rounded-full text-secondary">
            <MapPin size={16} /> {item.location}
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 bg-primary/10 rounded-full text-primary">
            <Clock size={16} /> {item.time}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="font-serif text-xl font-bold text-primary mb-2">Significance</h4>
            <p className="font-sans text-muted-foreground leading-relaxed">
              {item.significance}
            </p>
          </div>

          <div>
            <h4 className="font-serif text-xl font-bold text-primary mb-2">What Exactly Happens</h4>
            <div className="space-y-4">
              {item.details.map((detail, i) => (
                <div key={i} className="bg-muted/30 p-4 rounded-lg border-l-2 border-primary">
                  <span className="block font-bold text-foreground mb-1">{detail.title}:</span>
                  <span className="text-muted-foreground text-sm">{detail.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- MAIN COMPONENT ---
const Festivals = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Categories definition
  const categories = [
    { id: 'RELIGIOUS & SPIRITUAL', name: 'Religious & Spiritual', image: religiousImg, desc: 'Divine gatherings and sacred rituals.' },
    { id: 'CULTURAL & ARTS', name: 'Cultural & Arts', image: culturalImg, desc: 'Celebrating dance, drama, and tribal heritage.' },
    { id: 'HERITAGE & TOURISM', name: 'Heritage & Tourism', image: heritageImg, desc: 'Festivals set against the backdrop of history.' },
    { id: 'MUSIC FESTIVALS', name: 'Music Festivals', image: musicImg, desc: 'Classical symphonies and folk rhythms.' },
  ];

  return (
    <main className="min-h-screen paper-texture">
      <Navbar />

      <AnimatePresence mode='wait'>
        {/* VIEW 1: CATEGORY SELECTION */}
        {!selectedCategory ? (
          <motion.div 
            key="categories"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-32 pb-20 container mx-auto px-4 md:px-8"
          >
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="font-handwritten text-3xl text-secondary inline-block mb-4">उत्सव</span>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">Celebrations of MP</h1>
              <p className="font-sans text-lg text-muted-foreground">
                Select a category to explore the vibrant tapestry of festivals in the Heart of India.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {categories.map((cat) => (
                <motion.div
                  key={cat.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedCategory(cat.id)}
                  className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer shadow-cultural"
                >
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <h2 className="font-serif text-3xl text-white font-bold mb-2">{cat.name}</h2>
                    <p className="font-sans text-white/80 text-sm">{cat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          /* VIEW 2: FESTIVAL LIST (DETAILED) */
          <motion.div
            key="list"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="pt-28 pb-20 container mx-auto px-4 md:px-8"
          >
            {/* Header with Back Button */}
            <div className="flex items-center gap-4 mb-12">
              <button 
                onClick={() => setSelectedCategory(null)}
                className="p-3 rounded-full bg-secondary/10 hover:bg-secondary/20 text-secondary transition-colors"
              >
                <ArrowLeft size={24} />
              </button>
              <div>
                <span className="text-sm font-bold text-muted-foreground tracking-widest uppercase">Category</span>
                <h1 className="font-serif text-4xl font-bold text-foreground">{selectedCategory}</h1>
              </div>
            </div>

            {/* List of Festivals */}
            <div className="space-y-4">
              {festivalsData[selectedCategory]?.map((festival, index) => (
                <FestivalCard key={festival.id} item={festival} index={index} />
              ))}
            </div>
            
            {/* Footer for the list view */}
            <div className="text-center mt-16 pt-8 border-t border-border">
                <button 
                    onClick={() => setSelectedCategory(null)}
                    className="text-primary hover:text-primary/80 font-sans font-medium"
                >
                    View Other Categories
                </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
};

export default Festivals;
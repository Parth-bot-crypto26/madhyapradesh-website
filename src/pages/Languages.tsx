import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, MessageCircle, BookOpen } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

import heroImage from '@/assets/hero-mp.jpg';

// --- DATA OBJECT WITH ALL 15 LANGUAGES ---
const languages = [
  {
    id: 1,
    name: 'Standard Hindi',
    nativeName: 'हिंदी',
    region: 'Statewide',
    speakers: '~50 Million+',
    description: 'The official language of the state, used in administration, education, judiciary, and media. While "Shuddh" (Pure) Hindi is used in writing, the spoken version often incorporates local slang depending on the city (e.g., Bhopali Hindi vs. Indori Hindi). It acts as the bridge language for all other dialect speakers.',
    script: 'Devanagari',
    status: 'Official / Lingua Franca',
    phrases: [
      { phrase: 'Namaste / Pranam (नमस्ते / प्रणाम)', meaning: 'Greetings' },
      { phrase: 'Dhanyavaad (धन्यवाद)', meaning: 'Thank you' },
      { phrase: 'Aap kaise hain? (आप कैसे हैं?)', meaning: 'How are you?' },
      { phrase: 'Aapse milkar khushi hui (आपसे मिलकर खुशी हुई)', meaning: 'Glad to meet you' }
    ]
  },
  {
    id: 2,
    name: 'Bundeli',
    nativeName: 'बुंदेली',
    region: 'Bundelkhand',
    speakers: '6–8 Million',
    description: 'A Western Hindi dialect known for its distinct, slightly aggressive but affectionate tone. It has a rich tradition of folk literature, including the heroic ballads of Alha-Udal. Linguistically, it often replaces the \'h\' sound with \'s\' or \'kh\' in certain contexts and uses specific grammatical markers like \'dau\' (brother).',
    script: 'Devanagari',
    status: 'Regional',
    phrases: [
      { phrase: 'Ram Ram (राम राम) / Jai Ram Ji Ki', meaning: 'Greetings' },
      { phrase: 'Bhala ho (भला हो)', meaning: 'Thank you' },
      { phrase: 'Ka haal chaal hain? (का हाल चाल हैं?)', meaning: 'How are you?' },
      { phrase: 'Tumse milke bado aanand bhao (तुमसे मिलके बड़ो आनंद भओ)', meaning: 'Glad to meet you' }
    ]
  },
  {
    id: 3,
    name: 'Malvi',
    nativeName: 'माळवी',
    region: 'Malwa Plateau',
    speakers: '5–6 Million',
    description: 'Spoken in the fertile Malwa plateau, this dialect is sweet and melodic. It shares linguistic roots with Rajasthani (Marwari) and Gujarati. It is characterized by the use of endings like \'o\' and unique pronouns (e.g., \'Mhane\' for \'Me/Us\').',
    script: 'Devanagari',
    status: 'Regional',
    phrases: [
      { phrase: 'Jai Shri Krishna (जय श्री कृष्णा) / Ram Ram Sa', meaning: 'Greetings' },
      { phrase: 'Dhanyavaad / Mherbani (म्हेरबानी)', meaning: 'Thank you' },
      { phrase: 'Kai haal chaal che? (काई हाल चाल छे?)', meaning: 'How are you?' },
      { phrase: 'Tham se milne ghani khushi hui (थम से मिलन घणी खुशी हुई)', meaning: 'Glad to meet you' }
    ]
  },
  {
    id: 4,
    name: 'Bagheli',
    nativeName: 'बघेली',
    region: 'Rewa / Baghelkhand',
    speakers: '2–3 Million',
    description: 'Very close to Awadhi (the language of Ramcharitmanas). It is soft-spoken and often uses \'wa\' endings for nouns. It is the dominant dialect in the Rewa region. Speakers often stretch the final vowels of words.',
    script: 'Devanagari',
    status: 'Regional',
    phrases: [
      { phrase: 'Ram Ram / Pranam', meaning: 'Greetings' },
      { phrase: 'Dhanyavaad', meaning: 'Thank you' },
      { phrase: 'Ka haal hai? (का हाल है?)', meaning: 'How are you?' },
      { phrase: 'Tohan se milke bada nik laga (तोहन से मिलके बड़ा नीक लागा)', meaning: 'Glad to meet you ("Nik" means good/nice)' }
    ]
  },
  {
    id: 5,
    name: 'Nimadi',
    nativeName: 'निमाड़ी',
    region: 'Nimar Region',
    speakers: '2–2.5 Million',
    description: 'Known as the "Language of the Soil," Nimadi is spoken in the southern Nimar region. It is a mixture of Malvi, Gujarati, Marathi, and Bhili. It has a distinct earthy, rural tone and is often considered a harder/rougher version of Malvi.',
    script: 'Devanagari',
    status: 'Regional',
    phrases: [
      { phrase: 'Ram Ram / Jai Jinendra', meaning: 'Greetings' },
      { phrase: 'Dhanyavaad / Aabhar', meaning: 'Thank you' },
      { phrase: 'Kai haal chaal? (काई हाल चाल?)', meaning: 'How are you?' },
      { phrase: 'Tamse milne badiya lagyo (तमसे मिलन बढ़िया लाग्यो)', meaning: 'Glad to meet you' }
    ]
  },
  {
    id: 6,
    name: 'Braj Bhasha',
    nativeName: 'ब्रज भाषा',
    region: 'Northern Districts (Bhind, Morena)',
    speakers: 'Significant',
    description: 'A western Hindi dialect historically significant for medieval Krishna poetry. In MP, it is spoken in the northern districts (Bhind, Morena). It sounds poetic but can also sound rugged in the Chambal belt.',
    script: 'Devanagari',
    status: 'Regional',
    phrases: [
      { phrase: 'Radhe Radhe (राधे राधे)', meaning: 'Greetings' },
      { phrase: 'Dhanyavaad', meaning: 'Thank you' },
      { phrase: 'Kaha haal hai? (कहा हाल है?)', meaning: 'How are you?' },
      { phrase: 'Toso milke bado chain paryo (तोसों मिलके बड़ो चैन पर्यो)', meaning: 'Glad to meet you' }
    ]
  },
  {
    id: 7,
    name: 'Gondi',
    nativeName: 'गोंडी',
    region: 'Tribal Areas',
    speakers: '1–1.5 Million',
    description: 'A Dravidian language (related to Telugu/Tamil), making it completely distinct from the surrounding Indo-Aryan languages. It has a complex grammar and is spoken by the Gond tribe. While many Gonds now speak Hindi, the language is preserved in deep tribal pockets.',
    script: 'Devanagari/Gond',
    status: 'Tribal',
    phrases: [
      { phrase: 'Seva Johar (सेवा जोहार)', meaning: 'Greetings (Universal)' },
      { phrase: 'Valwand (वलवंड) / Seva', meaning: 'Thank you' },
      { phrase: 'Bhalay manta? (भले मंता?)', meaning: 'How are you?' },
      { phrase: 'Nikun aparre naku bes lagta (निकुन अपर्ड़े नाकु बेस लगता)', meaning: 'Glad to meet you' }
    ]
  },
  {
    id: 8,
    name: 'Bhili / Bhilali',
    nativeName: 'भीली',
    region: 'Western MP',
    speakers: '3–4 Million',
    description: 'An Indo-Aryan language that forms a spectrum between Gujarati and Rajasthani. It is the language of the Bhil tribe in western MP. It has a fast tempo and unique vocabulary related to forest and agriculture.',
    script: 'Devanagari',
    status: 'Tribal',
    phrases: [
      { phrase: 'Ram Ram / Jai Mata Di', meaning: 'Greetings' },
      { phrase: 'Aabhar / Dhanyavaad', meaning: 'Thank you' },
      { phrase: 'Hu haal chaal se? (हूँ हाल चाल से?)', meaning: 'How are you?' },
      { phrase: 'Taaru thi maline saru lagyu (तारु थी मलीन सारु लाग्यू)', meaning: 'Glad to meet you' }
    ]
  },
  {
    id: 9,
    name: 'Korku',
    nativeName: 'कोरकू',
    region: 'Satpura Range',
    speakers: '500k–600k',
    description: 'A Munda (Austroasiatic) language, related to Santhali and Mundari of eastern India. It is unique because it is an "island" of Austroasiatic speech surrounded by Indo-Aryan and Dravidian languages. It is spoken by the Korku tribe in the Satpura range.',
    script: 'Devanagari',
    status: 'Tribal',
    phrases: [
      { phrase: 'Gomajai (गोमजय)', meaning: 'Greetings' },
      { phrase: 'Dhanyavaad / Sabo', meaning: 'Thank you' },
      { phrase: 'Chol-e do? (चोल-ए दो?)', meaning: 'How are you?' },
      { phrase: 'Am-ke yam-en such mon-en (आम-के यम-एन सुच मोन-एन)', meaning: 'Glad to meet you' }
    ]
  },
  {
    id: 10,
    name: 'Marathi',
    nativeName: 'मराठी',
    region: 'Indore, Gwalior, Betul',
    speakers: 'Significant',
    description: 'While primarily the language of Maharashtra, distinct "Indori Marathi" and "Gwalior Marathi" have evolved with local influences. It is spoken by the large Marathi population that settled here during the Holkar and Scindia reigns.',
    script: 'Devanagari',
    status: 'Regional / Migrant',
    phrases: [
      { phrase: 'Namaskar (नमस्कार)', meaning: 'Greetings' },
      { phrase: 'Dhanyavaad / Aabhari aahe (आभारी आहे)', meaning: 'Thank you' },
      { phrase: 'Tumhi kase aahat? (तुम्ही कसे आहात?)', meaning: 'How are you?' },
      { phrase: 'Tumhala bhetun ananda zhala (तुम्हाला भेटून आनंद झाला)', meaning: 'Glad to meet you' }
    ]
  },
  {
    id: 11,
    name: 'Urdu (Bhopali Dialect)',
    nativeName: 'उर्दू',
    region: 'Bhopal, Burhanpur',
    speakers: 'Concentrated',
    description: 'Spoken in Bhopal and Burhanpur. "Bhopali Urdu" is famous for its distinct accent and vocabulary, often caricatured for its "Paan"-chewing tone and polite yet humorous phrasing. It uses unique words like "Biya" (Brother/Friend).',
    script: 'Perso-Arabic',
    status: 'Regional Dialect',
    phrases: [
      { phrase: 'Adaab / Assalam-o-Alaikum', meaning: 'Greetings' },
      { phrase: 'Shukriya (शुक्रिया)', meaning: 'Thank you' },
      { phrase: 'Mijaaz kaise hain? (मिज़ाज़ कैसे हैं?)', meaning: 'How are you?' },
      { phrase: 'Aapse milkar badi khushi hui (आपसे मिलकर बड़ी खुशी हुई)', meaning: 'Glad to meet you' }
    ]
  },
  {
    id: 12,
    name: 'Sindhi',
    nativeName: 'सिंधी',
    region: 'Indore, Bhopal, Katni',
    speakers: 'Community based',
    description: 'Spoken by the Sindhi business community settled in MP after the 1947 partition. It is an Indo-Aryan language with strong Persian and Arabic influences in its script and vocabulary.',
    script: 'Perso-Arabic / Devanagari',
    status: 'Migrant / Community',
    phrases: [
      { phrase: 'Jhulelal (झूलेलाल) / Namaste', meaning: 'Greetings' },
      { phrase: 'Meherbani (मेहरबानी)', meaning: 'Thank you' },
      { phrase: 'Cha haal ahe? (छा हाल आहे?)', meaning: 'How are you?' },
      { phrase: 'Tawhan saan mili dadhi khushi thi (तव्हां सां मिली डाढी खुशी थी)', meaning: 'Glad to meet you' }
    ]
  },
  {
    id: 13,
    name: 'Baigani',
    nativeName: 'बैगाणी',
    region: 'Eastern Forests',
    speakers: '100k–200k',
    description: 'A dialect spoken by the Baiga tribe, primarily in the eastern forests of MP. It is considered a mix (creole) of Chhattisgarhi, Gondi, and Hindi. It is soft and has a singing quality.',
    script: 'Devanagari',
    status: 'Tribal Dialect',
    phrases: [
      { phrase: 'Ram Ram / Johar', meaning: 'Greetings' },
      { phrase: 'Kaise haath? (कैसे हाथ?)', meaning: 'How are you?' },
      { phrase: 'Tor se milke bane lagis (तोर से मिलके बने लागिस)', meaning: 'Glad to meet you' }
    ]
  },
  {
    id: 14,
    name: 'Saharia',
    nativeName: 'सहरिया',
    region: 'Northwest MP',
    speakers: '~400,000',
    description: 'Spoken by the Saharia tribe in the dry northwest. It is very close to the Hadoti and Braj dialects of Rajasthan/UP. It is simpler in grammar compared to Standard Hindi.',
    script: 'Devanagari',
    status: 'Tribal Dialect',
    phrases: [
      { phrase: 'Ram Ram', meaning: 'Greetings' },
      { phrase: 'Koso hai? (कोसो है?)', meaning: 'How are you?' },
      { phrase: 'Toso milke chokho laagyo (तोसो मिलके चोखो लाग्यो)', meaning: 'Glad to meet you' }
    ]
  },
  {
    id: 15,
    name: 'Chhattisgarhi',
    nativeName: 'छत्तीसगढ़ी',
    region: 'Eastern Border Districts',
    speakers: 'Significant',
    description: 'Spoken in the easternmost districts bordering Chhattisgarh. It is often called "Lariya" in these border regions. It is sweet and uses the "s" sound frequently.',
    script: 'Devanagari',
    status: 'Regional',
    phrases: [
      { phrase: 'Jai Johar (जय जोहार)', meaning: 'Greetings' },
      { phrase: 'Dhanyavaad', meaning: 'Thank you' },
      { phrase: 'Kaa haal he? (का हाल हे?)', meaning: 'How are you?' },
      { phrase: 'Tor sang milke badhiya lagis (तोर संग मिलके बढ़िया लागिस)', meaning: 'Glad to meet you' }
    ]
  }
];

// --- MAIN COMPONENT ---
const Languages = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <main className="min-h-screen paper-texture">
      <Navbar />
      
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Madhya Pradesh" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto">
            <span className="font-handwritten text-3xl text-secondary inline-block mb-4">भाषाएँ</span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">Native Languages</h1>
            <p className="font-sans text-lg text-muted-foreground mb-8 leading-relaxed">Discover the linguistic diversity of Madhya Pradesh, where Hindi meets rich regional dialects and ancient tribal tongues.</p>
            <div className="section-divider" />
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <MessageCircle className="mx-auto mb-4 text-accent" size={32} />
              <div className="font-serif text-4xl font-bold mb-2">15+</div>
              <div className="font-sans text-primary-foreground/70">Major Languages & Dialects</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <Users className="mx-auto mb-4 text-accent" size={32} />
              <div className="font-serif text-4xl font-bold mb-2">85M+</div>
              <div className="font-sans text-primary-foreground/70">Total Speakers</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <BookOpen className="mx-auto mb-4 text-accent" size={32} />
              <div className="font-serif text-4xl font-bold mb-2">1000+</div>
              <div className="font-sans text-primary-foreground/70">Years of Heritage</div>
            </motion.div>
          </div>
        </div>
      </section>

      <section ref={ref} className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="space-y-12">
            {languages.map((language, index) => (
              <motion.article key={language.id} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: index * 0.1 }} className="rounded-3xl overflow-hidden bg-card border border-border shadow-cultural">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  <div className="p-8 lg:p-10 lg:col-span-2">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="font-serif text-3xl font-bold text-foreground">{language.name}</h3>
                      <span className="font-handwritten text-2xl text-secondary">{language.nativeName}</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                      <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-sans font-medium">{language.region}</span>
                      <span className="px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-sans font-medium">{language.speakers} speakers</span>
                      <span className="px-4 py-1.5 rounded-full bg-accent/10 text-accent-foreground text-sm font-sans font-medium">{language.status}</span>
                    </div>
                    <p className="font-sans text-muted-foreground mb-6 leading-relaxed">{language.description}</p>
                    <div className="text-sm font-sans text-muted-foreground"><span className="font-medium">Script:</span> {language.script}</div>
                  </div>
                  <div className="p-8 lg:p-10 bg-muted/30 border-t lg:border-t-0 lg:border-l border-border">
                    <h4 className="font-serif text-lg font-bold text-foreground mb-4">Common Phrases</h4>
                    <div className="space-y-4">
                      {language.phrases.map((phrase, i) => (
                        <div key={i} className="pb-4 border-b border-border last:border-b-0 last:pb-0">
                          <div className="font-sans font-semibold text-foreground mb-1">"{phrase.phrase}"</div>
                          <div className="font-sans text-sm text-muted-foreground">{phrase.meaning}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Languages;
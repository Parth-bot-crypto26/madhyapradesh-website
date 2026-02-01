import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Clock, Flame } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

// Importing assets (Using placeholders for the '3D Model' slots)
import breakfastImg from '@/assets/food/breakfast-logo.png';
import lunchImg from '@/assets/food/lunch-logo.png';
import snacksImg from '@/assets/food/snacks-logo.png';
import dinnerImg from '@/assets/food/dinner-logo.png';
import drinksImg from '@/assets/food//drinks-logo.png';
import sweetsImg from '@/assets/food/sweets-logo.png';

// Breakfast Images
import pohaImg from '@/assets/food/breakfast/poha.png';
import keesImg from '@/assets/food/breakfast/bhutte-kees.png';
import sabudanaImg from '@/assets/food/breakfast/sabudana.png';
import bedaiImg from '@/assets/food/breakfast/bedai.png';
import alooImg from '@/assets/food/breakfast/aloo-sabzi.png';
import pakwanImg from '@/assets/food/breakfast/dal-pakwan.png';
import palakpuriImg from '@/assets/food/breakfast/palak-puri.png';
import usalpohaImg from '@/assets/food/breakfast/usal-poha.png';
import chanapohaImg from '@/assets/food/breakfast/chana-poha.png';
import jalebiImg from '@/assets/food/breakfast/jalebi.png';
import payaImg from '@/assets/food/breakfast/paya-soup.png';
import nagoriImg from '@/assets/food/breakfast/nagori-halwa.png';
import methipuriImg from '@/assets/food/breakfast/methi-puri.png';
import gulguleImg from '@/assets/food/breakfast/gulgule.png';
import rogdaImg from '@/assets/food/breakfast/rogda.png';
import cuisineImage from '@/assets/mp-cuisine.jpg';
import heroImage from '@/assets/hero-mp.jpg';

// Lunch Images 
import dalbaflaImg from '@/assets/food/lunch/dal-bafla.png';
import sevtamatarImg from '@/assets/food/lunch/sev-tamatar.png';
import chakkiImg from '@/assets/food/lunch/chakki-shaak.png';
import murghrezalaImg from '@/assets/food/lunch/murgh-rezala.png';
import goshtkormaImg from '@/assets/food/lunch/gosht-korma.png';
import dalpaniyaImg from '@/assets/food/lunch/dal-paniya.png';
import bhuttekadhiImg from '@/assets/food/lunch/bhutta-kadhi.png';
import papadsabziImg from '@/assets/food/lunch/papad-sabzi.png';
import bharwabainganImg from '@/assets/food/lunch/bharwa-baingan.png';
import tapuImg from '@/assets/food/lunch/tapu.png';
import aloobhattaImg from '@/assets/food/lunch/aloo-bhatta.png';
import methibajraImg from '@/assets/food/lunch/methi-bajra-roti.png';
import dalpanchmelImg from '@/assets/food/lunch/dal-panchmel.png';
import indorikadhiImg from '@/assets/food/lunch/indori-kadhi.png';
import keemaImg from '@/assets/food/lunch/keema-pulav.png';

// Snacks Images 
import garaduImg from '@/assets/food/snacks/garadu.png';
import pattiesImg from '@/assets/food/snacks/khopra-patties.png';
import ksamosaImg from '@/assets/food/snacks/khatta-samosa.png';
import johnyhotImg from '@/assets/food/snacks/johny-hot-dog.png';
import eggbanjoImg from '@/assets/food/snacks/egg-banjo.png';
import indoriImg from '@/assets/food/snacks/indori-sev.png';
import ratlamiImg from '@/assets/food/snacks/ratlami-sev.png';
import sabudanavadaImg from '@/assets/food/snacks/sabudana-vada.png';
import cornkeesImg from '@/assets/food/snacks/corn-kees.png';
import chanajorImg from '@/assets/food/snacks/chana-jor-garam.png';
import bhajiyaImg from '@/assets/food/snacks/bhajiya.png';
import fulkiImg from '@/assets/food/snacks/fulki.png';
import alootikkiImg from '@/assets/food/snacks/aloo-tikki.png';
import mangodaImg from '@/assets/food/snacks/mangoda.png';
import pyazkachoriImg from '@/assets/food/snacks/pyaz-kachori.png';

// Dinner Images 
import bhopalibiryaniImg from '@/assets/food/dinner/bhopali-biryani.png';
import filforaImg from '@/assets/food/dinner/filfora.png';
import seekhkababImg from '@/assets/food/dinner/seekh-kabab.png';
import bunkababImg from '@/assets/food/dinner/bun-kabab.png';
import chaplikababImg from '@/assets/food/dinner/chapli-kabab.png';
import murghmusallamImg from '@/assets/food/dinner/murgh-musallam.png';
import nallinihariImg from '@/assets/food/dinner/nalli-nihari.png';
import tikkarsImg from '@/assets/food/dinner/tikkars.png';
import maaskadhiImg from '@/assets/food/dinner/maas-kadhi.png';
import aamatImg from '@/assets/food/dinner/aamat.png';
import pejImg from '@/assets/food/dinner/pej.png';
import bajrakichdiImg from '@/assets/food/dinner/bajra-khichdi.png';
import besanrotiImg from '@/assets/food/dinner/besan-masala-roti.png';
import puranpoliImg from '@/assets/food/dinner/puran-poli.png';
import santulaImg from '@/assets/food/dinner/santula.png';

// Drinks Images
import indorishikanjiImg from '@/assets/food/drinks/indori-shikanji.png';
import sulaimanichaiImg from '@/assets/food/drinks/sulaimani-chai.png';
import mahuaImg from '@/assets/food/drinks/mahua.png';
import gannarasImg from '@/assets/food/drinks/ganna-ras.png';
import aampannaImg from '@/assets/food/drinks/aam-panna.png';
import jaljeeraImg from '@/assets/food/drinks/jaljeera.png';
import bhangthandaiImg from '@/assets/food/drinks/bhang-thandai.png';
import lassiImg from '@/assets/food/drinks/lassi.png';
import chaasImg from '@/assets/food/drinks/chaas.png';
import kesarmilkImg from '@/assets/food/drinks/kesar-badam-milk.png';
import burhaniImg from '@/assets/food/drinks/burhani.png';
import sattusharbatImg from '@/assets/food/drinks/sattu-sharbat.png';
import belsharbatImg from '@/assets/food/drinks/bel-sharbat.png';
import khussharbatImg from '@/assets/food/drinks/khus-sharbat.png';
import masalachaiImg from '@/assets/food/drinks/masala-chai.png';

// Sweets Images
import mawabatiImg from '@/assets/food/sweets/mawa-bati.png';
import khoprapakImg from '@/assets/food/sweets/khoprapak.png';
import morenagajakImg from '@/assets/food/sweets/morena-gajak.png';
import imartiImg from '@/assets/food/sweets/imarti.png';
import malpuaImg from '@/assets/food/sweets/malpua.png';
import shrikhandImg from '@/assets/food/sweets/shrikhand.png';
import kalakandImg from '@/assets/food/sweets/kalakand.png';
import jalebaImg from '@/assets/food/sweets/jaleba.png';
import mawajalebiImg from '@/assets/food/sweets/mawa-jalebi.png';
import darabaImg from '@/assets/food/sweets/daraba.png';
import churmaImg from '@/assets/food/sweets/churma.png';
import basundiImg from '@/assets/food/sweets/basundi.png';
import kusliImg from '@/assets/food/sweets/kusli.png';
import gulabjamunImg from '@/assets/food/sweets/gulab-jamun.png';
import makhanvadaImg from '@/assets/food/sweets/makhan-vada.png';
import { differenceInWeeks } from 'date-fns';

// --- DATA STRUCTURE WITH EXACT CONTENT ---
const cuisineData = {
  "BREAKFAST (Nashta)": [
    {
      name: "Indori Poha",
      ingredients: "Flattened rice (Poha), turmeric, fennel seeds (saunf), sugar, mustard seeds, green chilies, onions, Jeeravan masala, pomegranate seeds, Sev.",
      making: "The flattened rice is rinsed and then steam-cooked (not fried) with turmeric and salt until fluffy and bright yellow. It is tempered with mustard seeds and fennel, which gives it a distinct aromatic sweetness. Served piping hot, it is topped with raw chopped onions, generous amounts of crunchy Indori Sev, a squeeze of lemon, and a sprinkle of Jeeravan masala (a special spice blend). The taste is a perfect balance of sweet, tangy, and spicy, with a soft texture contrasted by the crunch of Sev.",
      image: pohaImg
    },
    {
      name: "Bhutte Ka Kees",
      ingredients: "Fresh corn (grated), milk, ghee, mustard seeds, green chilies, grated coconut, coriander, asafoetida (hing).",
      making: "Fresh corn cobs are grated to form a mash, which is then sautéed in ghee with spices like mustard seeds and chilies. Milk is added to this mash, and it is slow-cooked until it thickens into a creamy, porridge-like consistency. It is served hot, garnished with fresh grated coconut and coriander. The taste is rich, creamy, and mildly sweet from the corn and milk, with a subtle spicy kick from the chilies.",
      image: keesImg
    },
    {
      name: "Sabudana Khichdi",
      ingredients: "Sago pearls (Sabudana), roasted peanuts, boiled potatoes, green chilies, cumin seeds, sugar, lemon juice, coriander.",
      making: "Sago pearls are soaked overnight to become soft yet non-sticky. They are stir-fried with cumin, diced boiled potatoes, and crushed roasted peanuts. The dish is seasoned with rock salt, a pinch of sugar, and lemon juice. Served hot, often during fasting (Upwas), it has a chewy texture with a nutty crunch from the peanuts. The flavor profile is savory with a refreshing tangy-sweet undertone.",
      image: sabudanaImg
    },
    {
      name: "Bedai (Bedmi Puri)",
      ingredients: "Wheat flour, Urad dal (black gram) paste, fennel powder, coriander powder, red chili powder, oil.",
      making: "A stiff dough is made from wheat flour and semolina, stuffed with a spicy, coarsely ground urad dal mixture. These discs are deep-fried until they puff up and turn golden-brown and crisp. Served specifically with a spicy, watery potato curry (Aloo Sabzi), the Bedai offers a heavy, crunchy texture with a burst of spicy lentil flavor inside, perfectly soaking up the curry.",
      image: bedaiImg
    },
    {
      name: "Aloo Sabzi (for Bedai)",
      ingredients: "Potatoes (boiled and mashed), tomatoes, ginger, green chilies, amchur (dry mango powder), garam masala, turmeric.",
      making: "Boiled potatoes are roughly mashed and cooked in a thin, spicy gravy made with tomatoes and strong spices. Unlike home-style curry, this version is usually thinner and much spicier, often tangy due to amchur. It is served hot alongside Bedai or Kachori. The taste is fiery and tangy, designed to cut through the richness of the fried bread.",
      image: alooImg
    },
    {
      name: "Dal Pakwan",
      ingredients: "Maida (refined flour), Chana dal (split chickpeas), cumin seeds, carom seeds (ajwain), tamarind chutney, onions.",
      making: "The 'Pakwan' is a flat, crispy fried bread made of maida flavored with carom seeds. The 'Dal' is simple boiled chana dal, tempered with mild spices. To serve, the crisp Pakwan is topped with the dal, followed by tamarind chutney, chopped onions, and green chilies. The dish is a play on textures—the snap of the hard crust against the soft lentils—offering a savory, tangy, and filling breakfast.",
      image: pakwanImg
    },
    {
      name: "Palak Puri",
      ingredients: "Wheat flour, fresh spinach puree, ginger, green chilies, carom seeds, oil.",
      making: "Fresh spinach is blanched and pureed with ginger and chilies, then kneaded into wheat flour to make a vibrant green dough. Small circles are rolled out and deep-fried until puffy. Served with pickle or yogurt, these puris have an earthy, slightly bitter spinach flavor that balances well with the heat of the chilies, making for a nutritious and colorful start to the day.",
      image: palakpuriImg
    },
    {
      name: "Usal Poha",
      ingredients: "Poha, sprouted moth beans or green gram, spicy onion-garlic gravy (tarri), sev, lemon.",
      making: "Standard yellow poha is prepared, but the serving method transforms it. It is topped with 'Usal'—a spicy, watery curry made from sprouts cooked in a fiery red gravy. Garnished with onions and lemon, the blandness of the poha absorbs the sharp heat of the curry. The taste is extremely spicy and savory, a favorite for those who find regular poha too sweet.",
      image: usalpohaImg
    },
    {
      name: "Chana Poha",
      ingredients: "Poha, black chickpeas (Desi Chana), tomatoes, onions, garam masala, turmeric, ginger.",
      making: "This is a Jabalpur specialty where the poha is served topped with a distinct spicy curry made of black chickpeas. The chana is cooked until soft in a thick, masala-rich gravy. When spooned over the soft poha, it adds a hearty protein element. The taste is robust and earthy, with the heavy masala of the chana overpowering the mild rice flakes.",
      image: chanapohaImg
    },
    {
      name: "Jalebi",
      ingredients: "Maida (fermented batter), sugar syrup, saffron, cardamom, ghee/oil for frying.",
      making: "A fermented batter of refined flour is squeezed into hot oil in concentric circles and fried until crisp. These coils are immediately dunked into warm, saffron-infused sugar syrup. Served hot alongside Poha, the Jalebi provides a crunch that releases a burst of sugary syrup. The combination of salty, spicy Poha and sweet, sticky Jalebi is the definitive flavor of MP mornings.",
      image: jalebiImg
    },
    {
      name: "Paya Soup",
      ingredients: "Lamb/Goat trotters (legs), onions, garlic, ginger, whole spices (cinnamon, cloves), black pepper, coriander.",
      making: "Trotters are slow-cooked overnight or for several hours with spices until the marrow dissolves into the broth and the meat falls off the bone. Served piping hot in the winter mornings of Bhopal, usually with a dense bread like Sheermal or naan. The soup is gelatinous, sticky, and rich, with a deep, warming peppery heat that coats the throat.",
      image: payaImg
    },
    {
      name: "Nagori Halwa",
      ingredients: "Maida, semolina (suji), ghee, sugar, cardamom, dry fruits.",
      making: "'Nagori' are small, bite-sized, ultra-crisp puris made from semolina and flour. 'Halwa' is a sweet, dry semolina pudding cooked in ghee. The crisp, salty puri is cracked open and scooped up with the warm, sweet halwa. The contrast between the savory crunch of the puri and the soft, ghee-laden sweetness of the halwa creates a unique sweet-salty breakfast experience.",
      image: nagoriImg
    },
    {
      name: "Methi Puri",
      ingredients: "Wheat flour, fresh or dried fenugreek leaves (kasuri methi), turmeric, red chili powder, oil.",
      making: "Chopped fenugreek leaves and spices are kneaded into the dough. The rolled discs are deep-fried to a golden brown. These are often made in bulk and can be eaten cold. Served with mango pickle, the puris taste slightly bitter and savory, with the fenugreek providing a distinct herbal aroma that pairs perfectly with tea.",
      image: methipuriImg
    },
    {
      name: "Gulgule",
      ingredients: "Whole wheat flour, jaggery (or sugar), fennel seeds, water/milk, oil for frying.",
      making: "A thick batter is made by dissolving jaggery in water and mixing it with wheat flour and fennel seeds. Small scoops of batter are dropped into hot oil and fried until dark brown and spongy. Served warm or cold, these are soft, cake-like fritters with a rustic sweetness and the refreshing anise-like flavor of fennel.",
      image: gulguleImg
    },
    {
      name: "Rogda",
      ingredients: "Rogda (indigenous truffle-like mushrooms), onions, garlic, spicy masala paste, coriander.",
      making: "These rare mushrooms, found in tribal belts during monsoons, are thoroughly washed to remove soil. They are chopped and stir-fried with a heavy onion-garlic masala until tender. Served with rotis, Rogda has a unique texture—a tough outer skin with a soft, yolk-like center—and an intense, meaty, earthy flavor often compared to mutton liver.",
      image: rogdaImg
    }
  ],
  "LUNCH (Dopehar ka Khana)": [
    {
      name: "Dal Bafla",
      ingredients: "Wheat flour, corn meal, ghee, tur dal, turmeric, fennel seeds, spices.",
      making: "Dough balls made of coarse wheat flour and ghee are first boiled in water containing turmeric, then roasted over cow dung cakes or in an oven until the exterior is hard. They are crushed and soaked in ghee. Served with spicy Tur dal, the Bafla is softer than the Rajasthani Baati. It has a nutty, wholesome wheat flavor, enriched by the smokiness of roasting and the richness of ghee.",
      image: dalbaflaImg
    },
    {
      name: "Sev Tamatar Ki Sabzi",
      ingredients: "Ratlami Sev (spicy gram flour noodles), tomatoes, cumin, mustard seeds, ginger-garlic paste, turmeric, coriander.",
      making: "A spicy, tangy gravy is prepared using chopped tomatoes and spices. Just before serving, generous handfuls of thick Ratlami Sev are added. The dish is served immediately with parathas so the sev remains slightly crunchy. The taste is a tangy-spicy explosion, with the clove and pepper flavor of the sev seeping into the tomato gravy.",
      image: sevtamatarImg
    },
    {
      name: "Chakki Ki Shaak",
      ingredients: "Wheat flour (gluten), yogurt, onions, garlic, coriander powder, red chili, garam masala.",
      making: "Wheat dough is washed repeatedly under water until only the gluten (protein) remains. This gluten is steamed, cut into cubes, and fried. These cubes are then simmered in a rich, yogurt-based spicy gravy. Served with roti, the 'chakki' cubes have a chewy, meat-like texture, making this a popular vegetarian substitute for mutton curry.",
      image: chakkiImg
    },
    {
      name: "Bhopali Murgh Rezala",
      ingredients: "Chicken, yogurt, cashew paste, coriander seeds, dry red chilies, onions, ghee, kewra water.",
      making: "Chicken pieces are cooked in a white, yogurt-based gravy thickened with cashew paste. The key flavor comes from roasted coriander seeds and whole dry red chilies. Served with naan or roomali roti, the dish is rich and creamy but has a sharp, distinct aroma of coriander and a subtle heat that lingers, unlike sweet Mughlai kormas.",
      image: murghrezalaImg
    },
    {
      name: "Bhopali Gosht Korma",
      ingredients: "Mutton, fried onions (birista), yogurt, ginger-garlic paste, whole spices, coriander powder, red chili powder.",
      making: "Mutton is slow-cooked with fried onion paste and yogurt until tender. The gravy is deep red, oily (rogan), and rich. Served with Sheermal, the taste is intense and savory, dominated by the flavor of caramelized onions and the heat of red chilies, typical of the Nawabi cuisine of Bhopal.",
      image: goshtkormaImg
    },
    {
      name: "Dal Paniya",
      ingredients: "Maize flour (Makka), tur dal, ak (Calotropis) or Palash leaves, spices, ghee.",
      making: "A dough of maize flour and spices is shaped into flat cakes, sandwiched between specific leaves (Paniya), and roasted over an open fire. served with Dal. The leaves impart a subtle herbal aroma to the corn cakes. The taste is smoky and earthy, with the sweetness of the corn complemented by the spicy lentil soup.",
      image: dalpaniyaImg
    },
    {
      name: "Bhutte Ki Kadhi",
      ingredients: "Grated sweet corn, buttermilk/yogurt, chickpea flour (besan), mustard seeds, curry leaves, green chilies, ghee.",
      making: "Instead of just besan, grated corn paste is mixed with buttermilk and cooked until thick. It is tempered with mustard seeds and curry leaves. Served with rice or roti, it is thicker and sweeter than regular Kadhi, offering a unique creamy texture with bits of corn in every bite.",
      image: bhuttekadhiImg
    },
    {
      name: "Papad Ki Sabzi",
      ingredients: "Urad dal papad, yogurt, cumin, coriander powder, turmeric, red chili, oil.",
      making: "Raw or roasted papads are broken into pieces and added to a simmering, spicy yogurt-based gravy. They cook very quickly, softening into dumplings. Served with chapati, it is a tangy and spicy curry where the peppery flavor of the papad infuses the sauce, a quick staple when vegetables are scarce.",
      image: papadsabziImg
    },
    {
      name: "Bharwa Baingan (Nimar Style)",
      ingredients: "Small eggplants, roasted peanuts, dry coconut, sesame seeds, red chili powder, coriander powder, oil.",
      making: "A dry masala is made by grinding roasted peanuts, coconut, and spices. This mixture is stuffed into slit eggplants, which are then pan-fried or slow-cooked in oil. Served with jowar roti, the dish is nutty and spicy, with the soft flesh of the eggplant melding with the crunchy, savory filling.",
      image: bharwabainganImg
    },
    {
      name: "Tapu",
      ingredients: "Wheat flour, ghee/oil, water.",
      making: "A staple of the Jhabua tribal belt, Tapu are thick wheat cakes similar to Baati but often steamed or boiled before being baked. They are very dense and hard. Served crumbled with abundant Dal and ghee, they have a plain, earthy wheat taste designed to keep one full for hours during hard labor.",
      image: tapuImg
    },
    {
      name: "Aloo Bhatta",
      ingredients: "Potatoes, eggplant (Bhatta), onions, tomatoes, mustard oil, garlic, green chilies.",
      making: "Diced potatoes and eggplants are stir-fried together in mustard oil with basic spices until soft and slightly charred. Served with roti or rice, this is a rustic, homestyle dish. The texture is soft and mushy, with the sweetness of the cooked onions and the pungency of mustard oil defining the flavor.",
      image: aloobhattaImg
    },
    {
      name: "Methi Bajra Roti",
      ingredients: "Pearl millet flour (Bajra), fresh fenugreek leaves, garlic, salt, warm water.",
      making: "Millet flour is mixed with chopped fenugreek and garlic, kneaded with warm water, and flattened by hand (not rolling pin) into thick rotis. Baked on an earthen tawa, they are served with garlic chutney or jaggery. The taste is nutty and coarse, with the bitterness of methi providing a pleasant contrast to the earthy grain.",
      image: methibajraImg
    },
    {
      name: "Dal Panchmel",
      ingredients: "Tuvar dal, Chana dal, Moong dal, Masoor dal, Urad dal, ghee, cumin, asafoetida, dry red chilies.",
      making: "Equal parts of five lentils are boiled together until creamy. A heavy tempering (tadka) of ghee, cumin, hing, and chilies is poured over it. Served with Bafla or Roti, it offers a complex texture—some lentils dissolve while chana dal retains bite. The flavor is wholesome and protein-rich, elevated by the aroma of burnt garlic and ghee.",
      image: dalpanchmelImg
    },
    {
      name: "Indori Kadhi",
      ingredients: "Yogurt, chickpea flour (besan), sugar/jaggery, cloves, cinnamon, mustard seeds, curry leaves.",
      making: "A mixture of yogurt and besan is boiled with whole spices like cloves and cinnamon. It is tempered and sweetened slightly. Served with rice or Khichdi, it is thinner than Punjabi Kadhi. The taste is sweet and sour (khatta-meetha), with the warm spice notes of clove and cinnamon making it distinct.",
      image: indorikadhiImg
    },
    {
      name: "Keema Pulav",
      ingredients: "Basmati rice, minced meat (keema), whole spices, onions, ginger-garlic paste, ghee.",
      making: "Minced meat is sautéed with spices and onions, then rice and water are added to cook them together in one pot. Served with raita or korma gravy, the rice absorbs the meat juices. It is less aromatic than Biryani but heartier, with every spoonful of rice containing savory bits of minced meat.",
      image: keemaImg
    }
  ],
  "SNACKS (Chaats & Namkeen)": [
    {
      name: "Garadu",
      ingredients: "Purple Yam (Garadu), oil, lemon juice, special Garadu masala (spicy blend).",
      making: "Large chunks of yam are boiled, cut into cubes, and deep-fried twice until ultra-crisp. They are tossed in a bowl with a special tangy-spicy masala and lime juice. Served in winter on toothpicks, the texture is crisp outside and creamy soft inside, with a smoky, earthy flavor punched up by the sour and spicy seasoning.",
      image: garaduImg
    },
    {
      name: "Khopra Patties",
      ingredients: "Potatoes, cornflour, grated coconut, cashew nuts, raisins, green chilies, ginger.",
      making: "A dough is made from boiled mashed potatoes and cornflour. It is stuffed with a mixture of coconut, dried fruits, and spices, shaped into balls, and deep-fried. Served with tamarind chutney, the outer layer is crisp, leading to a savory potato layer and finally a sweet, nutty, and spicy coconut center.",
      image: pattiesImg
    },
    {
      name: "Khatta Samosa",
      ingredients: "Flour pastry, filling (mint, coriander, green chilies, pomegranate seeds/anardana), chutney.",
      making: "Unlike the potato version, this samosa is smaller and filled with a spicy, tangy mixture of herbs and dry spices. Served with a special tangy chutney, it is extremely sour (khatta) and spicy. The pastry is flaky, and the filling offers a burst of herbal acidity rather than heavy starch.",
      image: ksamosaImg
    },
    {
      name: "Johny Hot Dog",
      ingredients: "Soft bun, vegetarian patty (potato/banana), butter, spicy chutney, onions.",
      making: "A soft hot dog bun is split, toasted heavily in butter, and stuffed with a spicy, fried vegetable patty (or mutton for non-veg). It is topped with raw onions and a secret spicy sauce. Served hot, it tastes buttery and spicy—a localized, greasy, comfort-food version of a burger that melts in the mouth.",
      image: johnyhotImg
    },
    {
      name: "Egg Banjo",
      ingredients: "Sweet bun, eggs, oil/butter, salt, pepper, spicy chutney/ketchup.",
      making: "An omelette is made fluffy and folded. A sweet bun is sliced, toasted, and the omelette is sandwiched inside with a smear of spicy chutney and ketchup. Served in Bhopal’s cafes, the sweetness of the bun contrasts with the salty, savory omelette and the kick of the chutney, making for a cheap and filling student snack.",
      image: eggbanjoImg
    },
    {
      name: "Indori Sev",
      ingredients: "Chickpea flour (besan), clove oil (laung), black pepper, spices, oil for frying.",
      making: "A spiced dough of besan is pressed through a sieve into hot oil to form thin, crisp noodles. This specific variety is infused with clove flavor. Served as a topping on everything (poha, sabzi, chaat) or eaten plain, it is crisp, savory, and leaves a lingering numbing sensation and aroma from the cloves.",
      image: indoriImg
    },
    {
      name: "Ratlami Sev",
      ingredients: "Chickpea flour, black pepper, carom seeds, cloves, oil, special spice blend.",
      making: "Thicker than Indori Sev, this dough is heavily spiced with black pepper. It is fried until crunchy. Served as a snack with tea or alcohol, it has a hard crunch and a fierce peppery heat that hits the back of the throat, making it the spiciest variant of namkeen in MP.",
      image: ratlamiImg
    },
    {
      name: "Sabudana Vada",
      ingredients: "Sago pearls, potatoes, roasted peanuts, green chilies, coriander, lemon.",
      making: "Soaked sago is mixed with mashed potatoes and crushed peanuts, shaped into discs, and deep-fried. Served with green chutney or sweet curd, the exterior is extremely crunchy due to the sago popping, while the interior is soft and starchy. The taste is mild and nutty, often eaten during religious fasts.",
      image: sabudanavadaImg
    },
    {
      name: "Corn Kees",
      ingredients: "Sweet corn, chickpea flour, spices, lemon, oil.",
      making: "This is a drier, snack version of Bhutte ka Kees. Grated corn is sautéed with spices until all moisture evaporates and it becomes crumbly. Served in paper cones with lemon juice, it tastes like a spicy, deconstructed corn on the cob—sweet, spicy, and chewy.",
      image: cornkeesImg
    },
    {
      name: "Chana Jor Garam",
      ingredients: "Black chickpeas (soaked and flattened), onion, tomato, lemon, chaat masala, green chilies.",
      making: "Chickpeas are soaked, flattened into discs, roasted/fried until crisp, and mixed fresh with chopped onions, tomatoes, and lime. Served in a paper cone, it is a dry, crunchy snack. The taste is earthy and nutty, livened up by the fresh acid of the lemon and the heat of the chilies.",
      image: chanajorImg
    },
    {
      name: "Bhajiya (Mirchi/Moong)",
      ingredients: "Large green chilies or Moong dal batter, gram flour, spices, oil.",
      making: "For Mirchi Bhajiya, large chilies are stuffed with spices, dipped in batter, and fried. For Moong, soaked lentils are ground coarsely and fried. Served with chutney, the Mirchi version is spicy and soft inside a crisp shell, while the Moong version is crunchy, grainy, and savory, perfect for rainy weather.",
      image: bhajiyaImg
    },
    {
      name: "Fulki",
      ingredients: "Wheat/semolina flour shells, water, tamarind, mint, chilies, asafoetida.",
      making: "Small, crisp, hollow balls are punctured and filled with spicy tangy water (no potato filling is common in some parts, or just chickpeas). Served by the roadside, the MP Fulki water is often sharper and more hing-heavy than standard Pani Puri. The sensation is a single-bite explosion of cold, spicy liquid crunch.",
      image: fulkiImg
    },
    {
      name: "Aloo Tikki (Patties)",
      ingredients: "Potatoes, cornflour, dried peas ragda or chana dal curry, curd, chutneys.",
      making: "Mashed potato patties are fried until a thick crust forms. They are crushed and topped with a hot chickpea curry, sweet tamarind chutney, and curd. Served hot, it offers a contrast of temperatures and textures—hot spicy curry, cold sweet curd, and crisp potato crust.",
      image: alootikkiImg
    },
    {
      name: "Moong Dal Mangoda",
      ingredients: "Split green gram (moong dal) with skin, coriander seeds, red chilies, ginger, fennel.",
      making: "The dal is soaked and ground coarsely with the skin on. Spices are mixed in, and irregular lumps are dropped into hot oil. Served with green chutney, these fritters are extremely crunchy and jagged on the outside. The skin adds an earthy flavor, making them distinct from smooth besan pakoras.",
      image: mangodaImg
    },
    {
      name: "Pyaz Kachori",
      ingredients: "Maida, onions, fennel seeds, nigella seeds (kalonji), gram flour, spices.",
      making: "A flaky pastry is stuffed with a sautéed mixture of onions and spices thickened with besan. Deep-fried until puffed and flaky. Served with tamarind chutney, the crust is buttery and crisp, while the filling is sweet (from onions) and spicy, offering a heavy, satisfying savory treat.",
      image: pyazkachoriImg
    }
  ],
  "DINNER (Raat ka Khana)": [
    {
      name: "Bhopali Biryani",
      ingredients: "Basmati rice, Mutton/Chicken, whole spices, onions, yogurt, saffron, milk.",
      making: "Meat is marinated and cooked with spices to make a rich gravy (yakhni). Parboiled rice is layered over the meat, topped with saffron milk and fried onions, and slow-cooked (dum). Served with Zarda (sweet rice) or Raita, it is less spicy than Hyderabadi biryani. The rice is moist and greasy, with a delicate aroma of saffron and whole spices.",
      image: bhopalibiryaniImg
    },
    {
      name: "Filfora",
      ingredients: "Chicken or game meat, onions, garlic, red chilies, oil, salt.",
      making: "A tribal dish where the meat is cut into tiny pieces and cooked without water. It is dry-roasted with a massive amount of garlic and red chilies until the moisture evaporates. Served with rotis, the taste is intense, smoky, and extremely spicy, with the garlic flavor permeating every fiber of the dry, chewy meat.",
      image: filforaImg
    },
    {
      name: "Seekh Kebab",
      ingredients: "Minced buffalo/goat meat, kidney fat, ginger, garlic, coriander, garam masala, skewers.",
      making: "Minced meat is mixed with fat and spices, molded onto iron skewers, and grilled over charcoal. Served with onion rings, lemon, and mint chutney. The kebabs are smoky, charred on the outside, and juicy inside due to the melting fat. The taste is savory and spicy with a melt-in-the-mouth texture.",
      image: seekhkababImg
    },
    {
      name: "Bun Kabab",
      ingredients: "Round bun, flat meat patty (shami kabab), onion, mint chutney.",
      making: "A small, round bun is lightly toasted. A tender, flat meat kebab made of mince and lentils is placed inside with a slice of onion and a dollop of spicy chutney. Served hot, it is a popular street dinner. The soft bun absorbs the juices of the kebab, creating a simple but flavorful savory bite.",
      image: bunkababImg
    },
    {
      name: "Chapli Kabab",
      ingredients: "Minced meat (usually buffalo), crushed coriander seeds, pomegranate seeds, tomato slices, green chilies, egg, cornflour.",
      making: "Large, flat patties of coarse mince studded with tomato slices are shallow fried in animal fat on a large griddle. Served with naan, the exterior is crisp and charred, while the interior is juicy and textured. The crushed coriander and pomegranate seeds provide a burst of citrusy freshness amidst the heavy grease.",
      image: chaplikababImg
    },
    {
      name: "Murgh Musallam",
      ingredients: "Whole chicken, boiled eggs, minced meat (keema), yogurt, almonds, saffron, spices.",
      making: "A whole chicken is stuffed with boiled eggs and spiced mince, marinated in yogurt and spices, and slow-roasted or cooked in a rich gravy. Served as a centerpiece for royal dinners with Naan. The taste is opulent—the meat is tender, and the thick gravy is nutty and aromatic, representing the height of Mughlai cooking in MP.",
      image: murghmusallamImg
    },
    {
      name: "Nalli Nihari",
      ingredients: "Lamb shanks, bone marrow, wheat flour (for thickening), Nihari masala (long pepper, dry ginger, etc.).",
      making: "Shanks are slow-cooked overnight with spices. The gravy is thickened with dissolved wheat flour and enriched with bone marrow. Served with Kulcha or Naan, the gravy is silky, sticky, and spicy. The meat is so tender it falls off the bone, and the dish has a deep, warming heat.",
      image: nallinihariImg
    },
    {
      name: "Tikkars (Rodga)",
      ingredients: "Coarse wheat flour, semolina, ghee, salt.",
      making: "A stiff dough is kneaded and shaped into thick balls. These are buried in hot ash or sand (traditionally) or baked in an oven. The outer layer is scraped off, dipped in ghee, and served with spicy Dal or Brinjal curry. The taste is smoky and earthy, with a hard crust and soft interior, acting as a dense vessel for spicy curries.",
      image: tikkarsImg
    },
    {
      name: "Maas Ki Kadhi",
      ingredients: "Mutton on the bone, buttermilk/yogurt, chickpea flour, whole spices, ginger-garlic.",
      making: "Mutton is boiled with spices. A Kadhi base is made with yogurt and besan, then the cooked mutton is added to simmer in it. Served with rice or roti, it combines the tangy, creamy flavor of Kadhi with the savory richness of meat broth, a unique non-veg twist on a vegetarian staple.",
      image: maaskadhiImg
    },
    {
      name: "Aamat",
      ingredients: "Bamboo shoots (kareel), rice flour, tamarind/sour buttermilk, mixed vegetables, tribal spices.",
      making: "Fermented or fresh bamboo shoots are boiled with vegetables and thickened with rice flour paste. It is soured with tamarind. Served as a soup-stew with rice, it has a funky, sour, and pungent flavor from the bamboo, beloved by the Gond tribe for its earthy kick.",
      image: aamatImg
    },
    {
      name: "Pej",
      ingredients: "Rice, corn (makka), or Kutki (millet), water, buttermilk.",
      making: "Grains are boiled in a large amount of water until very soft and soupy. It is sometimes mixed with buttermilk. Served in bowlfuls, often as a drinkable meal. It is bland, sour, and starchy, consumed essentially for hydration and energy in tribal areas, often accompanied by a spicy chutney to add flavor.",
      image: pejImg
    },
    {
      name: "Bajra Khichdi",
      ingredients: "Pearl millet (Bajra), moong dal, ghee, salt, water.",
      making: "Bajra is pounded to remove the husk and slow-cooked with lentils and ghee in a pot. Served hot with extra ghee and jaggery or Kadhi. The texture is coarse and gelatinous. It has a hearty, warming grain flavor, perfect for cold desert nights, and is extremely filling.",
      image: bajrakichdiImg
    },
    {
      name: "Besan Masala Roti",
      ingredients: "Gram flour (besan), wheat flour, cumin, ajwain, red chili powder, coriander leaves.",
      making: "Besan is mixed with spices and a little wheat flour for binding. Rolled into rotis and roasted on a tawa with oil/ghee. Served with garlic chutney or curd. The roti is yellow, slightly brittle, and has a strong savory, nutty flavor of roasted chickpeas, offering a spicy break from plain wheat roti.",
      image: besanrotiImg
    },
    {
      name: "Puran Poli",
      ingredients: "Maida/Wheat flour, chana dal, jaggery, cardamom, nutmeg, ghee.",
      making: "Chana dal is boiled and ground with jaggery to form a sweet stuffing (Puran). This is stuffed into the dough and rolled thin, then roasted with ghee. Served hot with milk or ghee, it is a sweet flatbread. The texture is soft and flaky, with the filling providing a sweet, caramel-like flavor with hints of cardamom.",
      image: puranpoliImg
    },
    {
      name: "Santula",
      ingredients: "Mixed vegetables (potato, ridge gourd, brinjal, raw papaya), milk, ghee, panch phoron (five spices).",
      making: "Vegetables are boiled with minimal spices and salt. Towards the end, milk is added, and it is tempered with ghee and panch phoron. Served with rice or roti, it is very mild, slightly sweet from the milk and vegetables, and easily digestible—a light dinner option in the eastern regions.",
      image: santulaImg
    }
  ],
  "DRINKS (Sharbat & Peya)": [
    {
      name: "Indori Shikanji",
      ingredients: "Milk, saffron, cardamom, sugar, dry fruits (cashew, almond), yogurt (sometimes).",
      making: "Unlike the lemon version, this is a dairy bomb. Milk is boiled down until thick, mixed with sugar, saffron, and nuts, and cooled. It is a cross between Rabdi and a milkshake. Served chilled, it tastes distinctively sweet, creamy, and heavy, often eaten with a spoon due to the density of dry fruits.",
      image: indorishikanjiImg
    },
    {
      name: "Sulaimani Chai",
      ingredients: "Tea leaves, water, sugar, salt, lemon drops, thick cream (malai).",
      making: "Strong black tea is brewed with sugar and a pinch of salt. A dash of lemon lightens the color. It is poured into a cup, and a dollop of thick, clotted cream is floated on top. Served in Bhopali tea houses. You sip the tangy, sweet tea through the layer of rich, unsweetened cream, creating a unique texture and flavor contrast.",
      image: sulaimanichaiImg
    },
    {
      name: "Mahua",
      ingredients: "Dried flowers of the Mahua tree (Madhuca longifolia), water, yeast/fermentation starter.",
      making: "The sweet flowers are soaked in water and allowed to ferment in earthen pots, then distilled. Served in rural and tribal settings. The drink is clear with a potent, pungent aroma. It tastes floral, musky, and extremely strong, often described as having a rough, burning finish but a sweet aftertaste.",
      image: mahuaImg
    },
    {
      name: "Ganna Ras",
      ingredients: "Sugarcane stalks, fresh ginger, lemon, mint leaves, ice.",
      making: "Stalks are pressed through a machine to extract juice. Ginger and mint are pressed along with the cane. Served fresh in tall glasses. The juice is cloudy green, intensely sweet, and frothy. The ginger and lemon cut the sugary sweetness, making it a refreshing, cooling energy booster.",
      image: gannarasImg
    },
    {
      name: "Aam Panna",
      ingredients: "Raw green mangoes, sugar/jaggery, roasted cumin powder, black salt, mint.",
      making: "Raw mangoes are boiled, peeled, and pulped. This pulp is mixed with water, sweetener, and spices. Served chilled. It is opaque and pale green. The taste is a sharp tang from the raw mango, balanced by sugar and the smoky, savory note of roasted cumin, acting as a heat-stroke preventative.",
      image: aampannaImg
    },
    {
      name: "Jaljeera",
      ingredients: "Water, cumin powder, tamarind, mint, coriander, black salt, boondi.",
      making: "A spice paste of mint and cumin is dissolved in cold water and soured with tamarind. Served topped with crisp boondi. It is a savory, spicy, and sour drink. It hits the palate with the freshness of mint and the sulfurous kick of black salt, aiding digestion after a heavy meal.",
      image: jaljeeraImg
    },
    {
      name: "Bhang Thandai",
      ingredients: "Milk, almonds, poppy seeds, fennel, rose petals, sugar, cannabis paste (Bhang).",
      making: "A paste of nuts and spices is mixed into cold, sweetened milk. Government-authorized Bhang is added. Served in clay cups, especially during Shivratri/Holi. The drink is creamy, nutty, and cooling. The Bhang adds a grassy, herbal bitterness that is masked by the sweetness and spices.",
      image: bhangthandaiImg
    },
    {
      name: "Lassi",
      ingredients: "Yogurt, sugar, rose water/cardamom, thick cream (Malai).",
      making: "Yogurt is churned with sugar until frothy. In Gwalior, it is poured into a glass and topped with a thick slab of Malai (cream). Served chilled. It is extremely thick (spoon-able) and sweet. The taste is pure, fresh dairy, with the Malai adding a buttery richness that coats the mouth.",
      image: lassiImg
    },
    {
      name: "Chaas / Mattha",
      ingredients: "Yogurt, water, roasted cumin, black salt, coriander, green chili paste.",
      making: "Yogurt is watered down and whisked. Spices and sometimes smoked coal smoke (dhungar) are added. Served as a palate cleanser alongside lunch. It is thin, savory, and sour. The roasted cumin provides a smoky aroma, making it light and refreshing compared to the heavy Lassi.",
      image: chaasImg
    },
    {
      name: "Kesar Badam Milk",
      ingredients: "Full-fat milk, saffron strands, almond paste, sugar, cardamom.",
      making: "Milk is boiled for a long time until slightly reduced. Almond paste and saffron are added, turning it golden. Served piping hot in clay cups (Kulhads) at night. It tastes rich, soothing, and aromatic, with the earthy scent of the clay cup infusing the sweet, nutty milk.",
      image: kesarmilkImg
    },
    {
      name: "Burhani",
      ingredients: "Yogurt, water, garlic, roasted cumin, salt, boondi.",
      making: "A savory buttermilk drink specifically flavored with raw garlic paste and roasted cumin. Served at weddings or after biryani. It is creamy but sharp. The pungency of the garlic is strong and savory, designed to cut through the grease of heavy meat dishes.",
      image: burhaniImg
    },
    {
      name: "Sattu Sharbat",
      ingredients: "Roasted gram flour (Sattu), water, onion, green chili, lemon, black salt.",
      making: "Sattu powder is whisked into cold water with chopped raw aromatics and spices. Served as a cooler. It is murky and beige. The taste is grainy, nutty, and savory. It is essentially a \"liquid meal,\" extremely cooling and filling, popular in the hot northern districts.",
      image: sattusharbatImg
    },
    {
      name: "Bel Ka Sharbat",
      ingredients: "Wood Apple (Bel) pulp, water, sugar/jaggery.",
      making: "The hard shell is cracked, and the fibrous, orange pulp is soaked and strained to remove seeds. Mixed with sugar and water. Served chilled. It has a unique, aromatic flavor—floral, slightly astringent, and sweet. The texture is slightly mucilaginous (thick/sticky), known for cooling the stomach.",
      image: belsharbatImg
    },
    {
      name: "Khus Sharbat",
      ingredients: "Vetiver grass root extract (Khus), sugar, water, green food color.",
      making: "A syrup is made from the roots of the vetiver grass. It is mixed with iced water. Served dark green. The taste is earthy, woody, and sweet. It has a very specific cooling aroma that smells like rain on dry soil (petrichor), making it a favorite summer hydrator.",
      image: khussharbatImg
    },
    {
      name: "Masala Chai",
      ingredients: "Black tea dust, milk, water, sugar, ginger, cardamom, cloves, cinnamon.",
      making: "Water and milk are boiled with crushed spices and ginger. Tea leaves are added and boiled until the color is dark brown. Served steaming hot in small glass cups (kullad). It is sweet, creamy, and strong. The spice blend leaves a warm, tingling sensation in the throat, acting as the universal fuel for MP's population.",
      image: masalachaiImg
    }
  ],
  "SWEETS (Mithai)": [
    {
      name: "Mawa Bati",
      ingredients: "Mawa (Khoya), maida, arrowroot powder, dry fruits (cashew, almond, pistachio), sugar syrup, cardamom.",
      making: "Dough made of mawa and a binder is stuffed with a mix of chopped nuts and cardamom. Deep-fried until dark brown and soaked in rose-flavored sugar syrup. Served warm. It looks like a large Gulab Jamun but tastes richer. The outer layer is firm, while the center is a nutty, crumbly surprise, sweeter and denser than its counterpart.",
      image: mawabatiImg
    },
    {
      name: "Khoprapak",
      ingredients: "Desiccated coconut, mawa, sugar, milk, saffron, silver foil (varq).",
      making: "Grated coconut is cooked with sugar and mawa until it forms a fudgy mass. It is set in trays and cut into diamonds. Served at room temperature. The texture is chewy and moist. The taste is dominated by coconut and milky sweetness, often colored pink or yellow, melting in the mouth with a granular feel.",
      image: khoprapakImg
    },
    {
      name: "Morena Gajak",
      ingredients: "Sesame seeds, jaggery (or sugar), ghee.",
      making: "Sesame seeds and hot jaggery syrup are beaten repeatedly with heavy wooden hammers until they fuse into layers. Thin sheets are cut into squares. Served in winter. It is famously brittle and flaky. The taste is nutty and caramelized, dissolving instantly on the tongue into a powder, showcasing the mastery of sugar work.",
      image: morenagajakImg
    },
    {
      name: "Imarti",
      ingredients: "Urad dal (split black gram) batter, sugar syrup, saffron, orange food color, ghee.",
      making: "A fine batter of ground dal is piped into hot ghee in a flower-like pattern and fried crisp. It is soaked in syrup. Served hot or cold. Unlike Jalebi (which is fermented flour), Imarti has a denser, spongy texture inside a crisp shell. It tastes of pure lentils and sugar syrup, juicy and heavy.",
      image: imartiImg
    },
    {
      name: "Malpua",
      ingredients: "Maida, semolina, milk, sugar, fennel seeds, ghee, Rabdi (condensed milk).",
      making: "A batter of flour and milk is deep-fried into flat pancakes and soaked in syrup. Often served topped with Rabdi. The edges are lacy and crisp, while the center is soft and fluffy. The taste is creamy and sweet, with the fennel seeds providing a refreshing burst of flavor amidst the richness.",
      image: malpuaImg
    },
    {
      name: "Shrikhand",
      ingredients: "Hung curd (Chakka), powdered sugar, saffron, cardamom, nutmeg, pistachio.",
      making: "Yogurt is hung to remove all whey, becoming a thick cream. It is whisked with sugar and spices. Served chilled with Puri. The Indori version is extremely dense and smooth. The taste is tangy-sweet and creamy, with the aroma of saffron and nutmeg making it a luxurious dessert.",
      image: shrikhandImg
    },
    {
      name: "Kalakand",
      ingredients: "Milk, sugar, lemon juice (to curdle), cardamom, pistachios.",
      making: "Milk is reduced and partially curdled to create grains. It is cooked with sugar until it sets into a soft cake. Served in squares. The texture is grainy and moist. It tastes of caramelized milk, not overly sweet, with a distinct milky aroma and a soft bite that isn't chewy like Barfi.",
      image: kalakandImg
    },
    {
      name: "Jaleba",
      ingredients: "Maida batter, sugar syrup, ghee.",
      making: "This is a giant version of Jalebi, often weighing 250g to 500g a piece, fried in a large flat kadhai. Served hot. It is thicker than a thumb. The outer shell is rock-hard and crunchy, while the inside is a hollow tube filled with syrup. Eating it is a messy, indulgent affair, usually shared by 3-4 people.",
      image: jalebaImg
    },
    {
      name: "Mawa Jalebi",
      ingredients: "Mawa, arrowroot/cornflour, milk, sugar syrup.",
      making: "Mawa is kneaded into the batter, piped into thick shapes, and fried until nearly black/dark brown. Soaked in syrup. Served in Burhanpur. Unlike crisp flour jalebis, this is soft, squishy, and cake-like. It tastes like a fried Gulab Jamun in the shape of a Jalebi—rich, dense, and intensely milky.",
      image: mawajalebiImg
    },
    {
      name: "Daraba",
      ingredients: "Semolina (Suji), sugar, ghee.",
      making: "A specialty of Burhanpur, fine semolina is cooked with sugar and ghee and beaten until it becomes a fluffy, white, powdery sweet. Served as a loose powder or pressed cake. The texture is incredibly fine and melts in the mouth. It tastes like a highly refined, aerated sweet semolina, unique to the region.",
      image: darabaImg
    },
    {
      name: "Churma",
      ingredients: "Wheat flour Bafla/Baati, ghee, powdered sugar/jaggery, dry fruits.",
      making: "Baked wheat balls (Bafla) are crushed into a coarse powder and mixed with copious amounts of ghee and sugar. Served alongside the main meal. It is grainy and crunchy. The taste is nutty (from roasted wheat) and buttery, offering a simple, rustic sweetness that complements the spicy Dal.",
      image: churmaImg
    },
    {
      name: "Basundi",
      ingredients: "Milk, sugar, charoli nuts (chironji), cardamom, saffron.",
      making: "Milk is boiled in a wide pan, and the skin that forms is continuously folded back in until the milk is thick and textured. Served chilled or warm. It is fluid but chunky with layers of cream (malai). The taste is concentrated milk sweetness, with the nutty crunch of charoli seeds adding texture.",
      image: basundiImg
    },
    {
      name: "Kusli",
      ingredients: "Maida shell, filling of desiccated coconut, semolina, dry fruits, sugar.",
      making: "A dough circle is filled with the sweet mixture, folded into a half-moon, sealed, and deep-fried. Served during festivals like Holi/Diwali. The shell is flaky and crisp. The filling is dry and sweet, with the toasted coconut and crunchy nuts providing a satisfying, crumbly mouthfeel.",
      image: kusliImg
    },
    {
      name: "Gulab Jamun",
      ingredients: "Khoa (milk solids), maida, baking soda, sugar syrup, rose water.",
      making: "Soft dough balls are deep-fried at a low temperature until golden brown and soaked in syrup. Served warm. The texture is uniformly soft and spongy, soaking up the syrup like a sponge. The taste is milky and floral, a classic dessert that is lighter than Mawa Bati.",
      image: gulabjamunImg
    },
    {
      name: "Makhan Vada",
      ingredients: "Maida, ghee, yogurt, baking soda, sugar syrup.",
      making: "A soft dough is shaped into a doughnut-like disc (with a dent), fried slowly until flaky, and dipped in syrup. Served at room temperature. It resembles Balushahi. The texture is flaky and layered, not spongy. The taste is like a sweet, glazed pastry, crisp on the outside and moist with syrup on the inside.",
      image: makhanvadaImg
    }
  ]
};

// --- SINGLE DISH CARD COMPONENT (Handles the Slide In Animation & Alternating Layout) ---
const DishCard = ({ item, index }) => {
  // If index is even (0, 2, 4...), image is LEFT. If odd (1, 3, 5...), image is RIGHT.
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex flex-col md:flex-row w-full min-h-[60vh] bg-card border border-border shadow-lg rounded-2xl overflow-hidden mb-16 ${
        !isEven ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* 3D MODEL / IMAGE CONTAINER 
         Note: This is where a <Canvas> would go for real 3D models.
         Currently using high-quality images as placeholders with 3D-style effects.
      */}
      <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden bg-secondary/5 group">
        <div className="absolute inset-0 flex items-center justify-center p-8">
           {/* Simulated 3D Model appearance */}
           <img 
             src={item.image} 
             alt={item.name} 
             className="w-full h-full object-contain drop-shadow-2xl transition-transform duration-700 transform group-hover:scale-110 group-hover:rotate-3"
           />
        </div>
      </div>

      {/* Content Half */}
      <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-card">
        <h3 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-6">
          {item.name}
        </h3>
        
        <div className="space-y-6">
          <div className="bg-muted/30 p-5 rounded-xl border-l-4 border-secondary">
            <h4 className="font-sans font-bold text-primary mb-2 flex items-center gap-2">
               <Flame size={18} /> Ingredients
            </h4>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed">
              {item.ingredients}
            </p>
          </div>

          <div>
            <h4 className="font-sans font-bold text-primary mb-3 flex items-center gap-2">
               <Clock size={18} /> Making & Taste
            </h4>
            <p className="font-sans text-muted-foreground leading-relaxed">
              {item.making}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- MAIN COMPONENT ---
const Cuisine = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Categories definition
  const categories = [
    { id: 'BREAKFAST (Nashta)', name: 'Breakfast', image: breakfastImg},
    { id: 'BREAKFAST (Nashta)', name: 'Lunch',image: lunchImg },
    { id: 'SNACKS (Chaats & Namkeen)', name: 'Snacks', image: snacksImg },
    { id: 'DINNER (Raat ka Khana)', name: 'Dinner', image: dinnerImg },
    { id: 'DRINKS (Sharbat & Peya)', name: 'Drinks', image: drinksImg },
    { id: 'SWEETS (Mithai)', name: 'Sweets', image: sweetsImg },
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
              <span className="font-handwritten text-3xl text-secondary inline-block mb-4">व्यंजन</span>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">Culinary Journey</h1>
              <p className="font-sans text-lg text-muted-foreground">
                Select a category to explore the authentic flavors of Madhya Pradesh.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {categories.map((cat) => (
                <motion.div
                  key={cat.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedCategory(cat.id)}
                  className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer shadow-warm border-4 border-white/20"
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
          /* VIEW 2: DISH LIST (DETAILED) */
          <motion.div
            key="list"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="pt-28 pb-20 container mx-auto px-4 md:px-8"
          >
            {/* Header with Back Button */}
            <div className="flex items-center gap-4 mb-16">
              <button 
                onClick={() => setSelectedCategory(null)}
                className="p-3 rounded-full bg-secondary/10 hover:bg-secondary/20 text-secondary transition-colors"
              >
                <ArrowLeft size={24} />
              </button>
              <div>
                <span className="text-sm font-bold text-muted-foreground tracking-widest uppercase">Menu</span>
                <h1 className="font-serif text-4xl font-bold text-foreground">{selectedCategory}</h1>
              </div>
            </div>

            {/* List of Dishes */}
            <div className="space-y-8">
              {cuisineData[selectedCategory]?.map((dish, index) => (
                <DishCard key={index} item={dish} index={index} />
              ))}
            </div>
            
            {/* Footer for the list view */}
            <div className="text-center mt-20 pt-8 border-t border-border">
                <button 
                    onClick={() => setSelectedCategory(null)}
                    className="text-primary hover:text-primary/80 font-sans font-medium text-lg"
                >
                    Explore Other Categories
                </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
};

export default Cuisine;
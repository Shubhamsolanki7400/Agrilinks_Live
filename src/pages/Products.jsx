import React, { useEffect, useRef, useState } from 'react';
import '../styles/productdetail.css'
import kabuli1 from '../assets/images/Kabulichana1.jpeg'
import desicheakpea1 from '../assets/images/desicheakpeas.webp'
import estonlentils from '../assets/images/eston_lentils.dba5a414.webp'
import lairdlentils from '../assets/images/laird_lentils.088f6907.webp'
import redfootball from '../assets/images/red_football_lentils.db9a41b6.webp'
import greanpea from '../assets/images/green_peas.2bb962c4.webp'
import uradch from '../assets/images/urad_dal_chilka.d118d598.webp'
import uradws from '../assets/images/urad_dal_wash.219a8cdf.webp'
import uradwh from '../assets/images/urad_whole.65de61a5.webp'
import uradgt from '../assets/images/urad_gota.c20460af.webp'
import chanadal from '../assets/images/chana_dal.b6e4e30d.webp'
import toor from '../assets/images/toor_dal.eccbb5ac.webp'
import moongws from '../assets/images/moong_dal_wash.7ab8592d.webp'
import moongwh from '../assets/images/moong_dal_chilka.57a9b538.webp'
import pinto from '../assets/images/pinto_beans.0c48f851.webp'
import darkred from '../assets/images/dark_red_kidney_beans.dd401f43.webp'
import yellowsplit from '../assets/images/yellow_split_peas.52a504ba.webp'
import yellowpea from '../assets/images/yellow_peas.a757b90e.webp'
import lightred from '../assets/images/ligth_red_kidney_beans.bc291056.webp'
import blackbeans from '../assets/images/blackbeans.avif'
import greensplit from '../assets/images/green_split_peas.2945d846.webp'
import cranberry from '../assets/images/cranberry_beans.78d5a03e.webp'
import greennorth from '../assets/images/great_northern_beans.7936d128.webp'
import navybean from '../assets/images/navy_beans.7e1a6e50.webp'
import moongch from '../assets/images/moong_dal_chilka.57a9b538.webp'
import mothwh from '../assets/images/moot_whole.7e45392a.webp'
import redsplit from '../assets/images/red_split_lentils.ab1bf777 (1).webp'
import brownflax from '../assets/images/brownflexseed.jpeg'
import brownmustard from '../assets/images/brown_mustard_seeds.07b01cb0.webp'
import canary from '../assets/images/canary_seeds.866fae94.webp'
import canola from '../assets/images/canola.62df6159.webp'
import sunflower from '../assets/images/sunflower_seeds.8598f748.webp'
import yellowflex from '../assets/images/yellow_flax_seeds.55a86786.webp'
import coriander from '../assets/images/coriander_seeds.5d68460b.webp'
import yellowmustard from '../assets/images/yellow_mustard_seeds.d02fde8e.webp'
import rawpeanuts from '../assets/images/redskin-peanuts.webp'
import javapeanuts from '../assets/images/javapeanuts.jpg'
import boldpeanuts from '../assets/images/boldpeanuts.jpg'
import balancepeanuts from '../assets/images/TJ-Peanuts.jpg'
import cashew from '../assets/images/cashewnuts.jpg'
import raisins from '../assets/images/RAISIN-_-KISHAMISH-min.png'
import walnut from '../assets/images/WALNUTS-_-AKHROT-min.png'
import figs from '../assets/images/ANJEER-FIGS-_-ANJEER-min (1).png'
import gond from '../assets/images/EDIBLE-GUM-_-GONDH-min.png'
import makhana from '../assets/images/FOXNUTS-_-MAKHANA-min.png'
import dates from '../assets/images/DRIED-DATES-_-KHAJOOR-min.png'
import pista from '../assets/images/PISTACHIO-_-PISTA-min.png'
import almond from '../assets/images/almonds1.webp'
import saffron from '../assets/images/SAFFRON-_-KESAR-min.png'
import haldi from '../assets/images/TURMERIC-_-HALDI-min.png'
import elaichi from '../assets/images/CARDAMOM-_-ELAICHI-min.png'
import badielaichi from '../assets/images/BLACK-CARDAMOM-_-BADI-ELAICHI-min.png'
import dalchini from '../assets/images/CINNAMON-_-DALCHINI-min.png'
import jaiphal from '../assets/images/NUTMEG-_-JAIPHAL-min.png'
import laung from '../assets/images/CLOVE-_-LAUNG-min.png'
import tamarind  from '../assets/images/TAMARIND-_-IMLI-min.png'
import hing from '../assets/images/ASAFOETIDA-_-HING-min.png'
import ajwain from '../assets/images/ajwain.png'
import staranise from '../assets/images/STAR-ANISE-_-CHAKRA-PHOOL-min.png'
import kalonji from '../assets/images/NIGELLA-SATIVA-_-KALONJI-min.png'
import blackcumin from '../assets/images/kalajeera.jpg'
import blackpepper from '../assets/images/BLACK-PEPPER-_-KALI-MIRCH-min (1).png'
import kasturimethi from '../assets/images/FENUGREEK-LEAVES-_-KASURI-METHI-min.png'
import dryginger from '../assets/images/DRY-GINGER-_-SONTH-min.png'
import bayleaves from '../assets/images/BAY-LEAVES-_-TEJ-PATTA-min.png'
import methidana from '../assets/images/FENUGREEK-SEEDS-_-METHI-DANA-min.png'
import popyseeds from '../assets/images/POPPY-SEEDS-_-KHUS-KHUS-min.png'
import { Link } from 'react-router-dom';







const categories = [
  { id: "pulses",    label: "Pulses",     emoji: "🫘", color: "#b85c1a", bg: "#fdf0e6" },
  { id: "oilseeds",  label: "Oil Seeds",  emoji: "🌻", color: "#c49a1a", bg: "#fdfaea" },
  { id: "dryfruits", label: "Dry Fruits", emoji: "🥜", color: "#8b4513", bg: "#fdf3e8" },
  { id: "spices",    label: "Spices",     emoji: "🌶", color: "#c01f1f", bg: "#fdeaea" },
  { id: "peanuts",   label: "Peanuts",    emoji: "🥜", color: "#a0522d", bg: "#fdf2e9" },
];
 
const products = {
 pulses: [
  {
    id: "blackbeans",
    name: "Black Beans",
    img: blackbeans,
    origin: "India / Brazil",
    season: "Year Round",
    desc: "Popular in Latin American dishes, rich in protein and antioxidants.",
    nutrients: [
      { icon: "💪", label: "Protein", val: "21g / 100g" },
      { icon: "🌿", label: "Fiber", val: "8g / 100g" },
      { icon: "⚙️", label: "Iron", val: "5 mg" },
    ],
    tags: ["High Fiber", "Export Ready"],
  },
   {
    id: "kabuli",
    name: "Chickpeas",
    img: kabuli1,
    desc: "Large white chickpeas widely used in hummus, salads, and curries. Premium export quality with global demand.",
    nutrients: [
      { icon: "💪", label: "Protein", val: "19g / 100g" },
      { icon: "🌿", label: "Fiber", val: "7.6g / 100g" },
      { icon: "⚙️", label: "Iron", val: "6.2 mg" },
      { icon: "🔋", label: "Potassium", val: "875 mg" },
    ],
    tags: ["High Protein", "Export Quality", "Non-GMO"],
  },
  {
    id: "chanadal",
    name: "Chana Dal",
    img: chanadal,
    origin: "India",
    season: "Year Round",
    desc: "Split chickpeas widely used in Indian cooking, rich in protein and fiber.",
    nutrients: [
      { icon: "💪", label: "Protein", val: "22g / 100g" },
      { icon: "🌿", label: "Fiber", val: "8g / 100g" },
      { icon: "🦴", label: "Calcium", val: "45 mg" },
    ],
    tags: ["Daily Use", "High Demand"],
  },
  {
    id: "cranberrybeans",
    name: "Cranberry Beans",
    img: cranberry,
    origin: "India / USA",
    season: "Year Round",
    desc: "Cream-colored beans with red speckles, used in Italian and European cuisine.",
    nutrients: [
      { icon: "💪", label: "Protein", val: "22g / 100g" },
      { icon: "🌿", label: "Fiber", val: "7g / 100g" },
      { icon: "⚙️", label: "Iron", val: "5 mg" },
    ],
    tags: ["Premium Export", "European Demand"],
  },
  {
    id: "darkredkidney",
    name: "Dark Red Kidney Beans",
    img: darkred,
    origin: "India",
    season: "Year Round",
    desc: "Dark red kidney beans with a rich flavor, commonly used in rajma dishes worldwide.",
    nutrients: [
      { icon: "💪", label: "Protein", val: "24g / 100g" },
      { icon: "🌿", label: "Fiber", val: "6.4g / 100g" },
      { icon: "⚙️", label: "Iron", val: "5 mg" },
    ],
    tags: ["High Demand", "Export Quality"],
  },
  {
    id: "desi",
    name: "Desi Chickpeas",
    img: desicheakpea1,
    desc: "Smaller dark chickpeas rich in fiber and widely used in Indian cooking and flour production.",
    nutrients: [
      { icon: "💪", label: "Protein", val: "22g / 100g" },
      { icon: "🌿", label: "Fiber", val: "9g / 100g" },
      { icon: "🦴", label: "Calcium", val: "105 mg" },
      { icon: "⚙️", label: "Iron", val: "7.1 mg" },
    ],
    tags: ["Organic Available", "High Fiber"],
  },
  {
    id: "eston",
    name: "Eston Lentils",
    img: estonlentils,
    desc: "Small green lentils with firm texture and mild flavor, perfect for soups and salads.",
    nutrients: [
      { icon: "💪", label: "Protein", val: "25g / 100g" },
      { icon: "🌿", label: "Fiber", val: "10g / 100g" },
      { icon: "⚙️", label: "Iron", val: "7.5 mg" },
      { icon: "🔋", label: "Potassium", val: "677 mg" },
    ],
    tags: ["Premium Grade", "Export Ready"],
  },
  {
    id: "greatnorthern",
    name: "Great Northern Beans",
    img: greennorth,
    origin: "USA",
    season: "Year Round",
    desc: "Mild flavored white beans used in soups and baked dishes.",
    nutrients: [
      { icon: "💪", label: "Protein", val: "22g / 100g" },
      { icon: "🌿", label: "Fiber", val: "7g / 100g" },
      { icon: "⚙️", label: "Iron", val: "4 mg" },
    ],
    tags: ["Mild Flavor", "Soup Grade"],
  },
  {
    id: "greenpeas",
    name: "Green Peas",
    img: greanpea,
    desc: "High-quality green peas used in food processing and retail markets worldwide.",
    nutrients: [
      { icon: "💪", label: "Protein", val: "21g / 100g" },
      { icon: "🌿", label: "Fiber", val: "5g / 100g" },
      { icon: "🔋", label: "Potassium", val: "873 mg" },
    ],
    tags: ["Global Demand", "High Nutrition"],
  },
  {
    id: "greensplit",
    name: "Green Split Peas",
    img: greensplit,
    desc: "Split green peas widely used in soups and processed foods.",
    nutrients: [
      { icon: "💪", label: "Protein", val: "22g / 100g" },
      { icon: "🌿", label: "Fiber", val: "8g / 100g" },
      { icon: "⚙️", label: "Iron", val: "5 mg" },
    ],
    tags: ["Processing Grade", "Export Ready"],
  },
  {
    id: "laird",
    name: "Laird Lentils",
    img: lairdlentils,
    desc: "Large green lentils that hold shape well during cooking, ideal for salads and stews.",
    nutrients: [
      { icon: "💪", label: "Protein", val: "24g / 100g" },
      { icon: "🌿", label: "Fiber", val: "10g / 100g" },
      { icon: "⚙️", label: "Iron", val: "6.5 mg" },
      { icon: "🔋", label: "Potassium", val: "580 mg" },
    ],
    tags: ["Bulk Available", "FSSAI Certified"],
  },
  {
    id: "lightredkidney",
    name: "Light Red Kidney Beans",
    img: lightred,
    origin: "India",
    season: "Year Round",
    desc: "Light red beans with smooth texture, ideal for curries and canned food production.",
    nutrients: [
      { icon: "💪", label: "Protein", val: "23g / 100g" },
      { icon: "🌿", label: "Fiber", val: "6g / 100g" },
      { icon: "⚙️", label: "Iron", val: "5 mg" },
    ],
    tags: ["Processing Ready", "Export Grade"],
  },
  {
    id: "moongchilka",
    name: "Moong Dal Chilka",
    img: moongch,
    origin: "India",
    season: "Year Round",
    desc: "Split green gram with skin, rich in fiber and commonly used in healthy Indian meals.",
    nutrients: [
      { icon: "💪", label: "Protein", val: "24g / 100g" },
      { icon: "🌿", label: "Fiber", val: "8g / 100g" },
      { icon: "⚙️", label: "Iron", val: "6 mg" },
    ],
    tags: ["Healthy Choice", "High Fiber"],
  },
  {
    id: "moongwash",
    name: "Moong Dal Wash",
    img: moongws,
    origin: "India",
    season: "Year Round",
    desc: "Skinless yellow moong dal, quick cooking and easy to digest.",
    nutrients: [
      { icon: "💪", label: "Protein", val: "24g / 100g" },
      { icon: "🌿", label: "Fiber", val: "7g / 100g" },
      { icon: "⚙️", label: "Iron", val: "5 mg" },
    ],
    tags: ["Easy Digest", "Fast Cooking"],
  },
  {
    id: "moongwhole",
    name: "Moong Whole",
    img: moongwh,
    origin: "India",
    season: "Year Round",
    desc: "Whole green gram used for sprouts and traditional dishes.",
    nutrients: [
      { icon: "💪", label: "Protein", val: "24g / 100g" },
      { icon: "🌿", label: "Fiber", val: "8g / 100g" },
      { icon: "⚙️", label: "Iron", val: "6 mg" },
    ],
    tags: ["Sprouting Grade", "High Nutrition"],
  },
  {
    id: "mothwhole",
    name: "Moth Whole",
    img: mothwh,
    origin: "India",
    season: "Year Round",
    desc: "Small brown lentils widely used in Rajasthan cuisine and sprouts.",
    nutrients: [
      { icon: "💪", label: "Protein", val: "23g / 100g" },
      { icon: "🌿", label: "Fiber", val: "9g / 100g" },
      { icon: "⚙️", label: "Iron", val: "6 mg" },
    ],
    tags: ["Traditional Use", "High Fiber"],
  },
  {
    id: "navybean",
    name: "Navy Beans",
    img: navybean,
    origin: "USA",
    season: "Year Round",
    desc: "Small white beans used in baked beans and processed foods.",
    nutrients: [
      { icon: "💪", label: "Protein", val: "22g / 100g" },
      { icon: "🌿", label: "Fiber", val: "10g / 100g" },
      { icon: "⚙️", label: "Iron", val: "5 mg" },
    ],
    tags: ["Processing Grade", "High Fiber"],
  },
  {
    id: "pintobeans",
    name: "Pinto Beans",
    img: pinto,
    origin: "USA / India",
    season: "Year Round",
    desc: "Speckled beans widely used in Mexican cuisine and refried beans.",
    nutrients: [
      { icon: "💪", label: "Protein", val: "21g / 100g" },
      { icon: "🌿", label: "Fiber", val: "9g / 100g" },
      { icon: "⚙️", label: "Iron", val: "5 mg" },
    ],
    tags: ["High Fiber", "Global Cuisine"],
  },
  {
    id: "redfootball",
    name: "Red Football Lentils",
    img: redfootball,
    desc: "Bright red lentils widely used in Indian dal and Middle Eastern dishes.",
    nutrients: [
      { icon: "💪", label: "Protein", val: "26g / 100g" },
      { icon: "🌿", label: "Fiber", val: "8g / 100g" },
      { icon: "⚙️", label: "Iron", val: "7.5 mg" },
      { icon: "🔋", label: "Potassium", val: "677 mg" },
    ],
    tags: ["Fast Cooking", "Export Ready"],
  },
  {
    id: "redsplit",
    name: "Red Split Lentils",
    img: redsplit,
    desc: "Quick-cooking lentils with high nutritional value, ideal for daily cooking.",
    nutrients: [
      { icon: "💪", label: "Protein", val: "25g / 100g" },
      { icon: "🌿", label: "Fiber", val: "8g / 100g" },
      { icon: "⚙️", label: "Iron", val: "7 mg" },
    ],
    tags: ["Daily Use", "High Demand"],
  },
  {
    id: "toordal",
    name: "Toor Dal",
    img: toor,
    origin: "India",
    season: "Year Round",
    desc: "Staple Indian pulse used in everyday meals like dal and sambhar.",
    nutrients: [
      { icon: "💪", label: "Protein", val: "22g / 100g" },
      { icon: "🌿", label: "Fiber", val: "6g / 100g" },
      { icon: "🦴", label: "Calcium", val: "73 mg" },
    ],
    tags: ["Daily Use", "High Demand"],
  },
  {
    id: "uradchilka",
    name: "Urad Dal Chilka",
    img: uradch,
    origin: "India",
    season: "Year Round",
    desc: "Split black gram with skin, rich in nutrients and used in traditional recipes.",
    nutrients: [
      { icon: "💪", label: "Protein", val: "25g / 100g" },
      { icon: "🌿", label: "Fiber", val: "9g / 100g" },
      { icon: "⚙️", label: "Iron", val: "7 mg" },
    ],
    tags: ["High Nutrition", "Traditional"],
  },
  {
    id: "uradgota",
    name: "Urad Gota",
    img: uradgt,
    origin: "India",
    season: "Year Round",
    desc: "Whole skinless urad used in snacks and traditional preparations.",
    nutrients: [
      { icon: "💪", label: "Protein", val: "25g / 100g" },
      { icon: "🌿", label: "Fiber", val: "8g / 100g" },
      { icon: "⚙️", label: "Iron", val: "7 mg" },
    ],
    tags: ["Snack Industry", "Export Grade"],
  },
  {
    id: "uradwash",
    name: "Urad Dal Wash",
    img: uradws,
    origin: "India",
    season: "Year Round",
    desc: "Skinless urad dal widely used for dosa, idli batter and dals.",
    nutrients: [
      { icon: "💪", label: "Protein", val: "25g / 100g" },
      { icon: "🌿", label: "Fiber", val: "7g / 100g" },
      { icon: "⚙️", label: "Iron", val: "7 mg" },
    ],
    tags: ["South Indian Use", "High Protein"],
  },
  {
    id: "uradwhole",
    name: "Urad Whole",
    img: uradwh,
    origin: "India",
    season: "Year Round",
    desc: "Whole black gram used in dal makhani and other rich dishes.",
    nutrients: [
      { icon: "💪", label: "Protein", val: "25g / 100g" },
      { icon: "🌿", label: "Fiber", val: "9g / 100g" },
      { icon: "⚙️", label: "Iron", val: "7 mg" },
    ],
    tags: ["Premium Use", "High Fiber"],
  },
  {
    id: "yellowpeas",
    name: "Yellow Peas",
    img: yellowpea,
    desc: "Popular pulse used in food manufacturing and protein extraction.",
    nutrients: [
      { icon: "💪", label: "Protein", val: "23g / 100g" },
      { icon: "🌿", label: "Fiber", val: "7g / 100g" },
      { icon: "⚙️", label: "Iron", val: "5.5 mg" },
    ],
    tags: ["Industrial Use", "High Protein"],
  },
  {
    id: "yellowsplit",
    name: "Yellow Split Peas",
    img: yellowsplit,
    desc: "Split yellow peas widely used in soups, curries, and processed food products.",
    nutrients: [
      { icon: "💪", label: "Protein", val: "24g / 100g" },
      { icon: "🌿", label: "Fiber", val: "8g / 100g" },
      { icon: "⚙️", label: "Iron", val: "5.5 mg" },
    ],
    tags: ["High Protein", "Processing Grade"],
  },
],
 oilseeds : [
  {
    id: "brownflax",
    name: "Brown Flax Seeds",
    img: brownflax,
    desc: "Rich in omega-3 fatty acids and dietary fiber, brown flax seeds are widely used in health foods, baking, and nutraceutical industries.",
    nutrients: [
      { icon: "💪", label: "Protein", val: "18g / 100g" },
      { icon: "🌿", label: "Fiber", val: "27g / 100g" },
      { icon: "⚙️", label: "Omega-3", val: "22g" },
      { icon: "🦴", label: "Magnesium", val: "392 mg" },
      { icon: "🔋", label: "Potassium", val: "813 mg" },
      { icon: "🧬", label: "Vitamin B1", val: "1.6 mg" },
    ],
    tags: ["Superfood", "Export Grade"],
  },

  {
    id: "brownmustard",
    name: "Brown Mustard Seeds",
    img: brownmustard,
    desc: "Stronger and more pungent than yellow mustard, widely used in oil extraction and spice blends.",
    nutrients: [
      { icon: "💪", label: "Protein", val: "25g / 100g" },
      { icon: "🌿", label: "Fiber", val: "12g / 100g" },
      { icon: "⚙️", label: "Iron", val: "9 mg" },
      { icon: "🦴", label: "Calcium", val: "250 mg" },
      { icon: "🔋", label: "Selenium", val: "200 µg" },
      { icon: "🧬", label: "Omega-3", val: "5g" },
    ],
    tags: ["Oil Extraction", "High Pungency"],
  },

  {
    id: "canary",
    name: "Canary Seeds",
    img: canary,
    desc: "Light seeds used in bird feed and emerging human health foods due to high protein content.",
    nutrients: [
      { icon: "💪", label: "Protein", val: "21g / 100g" },
      { icon: "🌿", label: "Fiber", val: "8g / 100g" },
      { icon: "⚙️", label: "Iron", val: "6 mg" },
      { icon: "🦴", label: "Magnesium", val: "250 mg" },
      { icon: "🔋", label: "Potassium", val: "600 mg" },
      { icon: "🧬", label: "Enzymes", val: "High" },
    ],
    tags: ["Bird Feed", "Emerging Superfood"],
  },

  {
    id: "canola",
    name: "Canola Seeds",
    img: canola,
    desc: "Widely used for oil production, canola seeds are known for low saturated fat and high omega content.",
    nutrients: [
      { icon: "💪", label: "Protein", val: "20g / 100g" },
      { icon: "🌿", label: "Fiber", val: "12g / 100g" },
      { icon: "⚙️", label: "Omega-3", val: "9g" },
      { icon: "🦴", label: "Calcium", val: "150 mg" },
      { icon: "🔋", label: "Vitamin E", val: "17 mg" },
      { icon: "🧬", label: "Healthy Fats", val: "High" },
    ],
    tags: ["Oil Grade", "Heart Healthy"],
  },

  {
    id: "sunflower",
    name: "Sunflower Seeds",
    img: sunflower,
    origin: "Ukraine / Russia / India",
    season: "Sep – Nov",
    desc: "Popular edible seeds used in snacks, bakery, and oil extraction industries.",
    nutrients: [
      { icon: "💪", label: "Protein", val: "21g / 100g" },
      { icon: "🌿", label: "Fiber", val: "8g / 100g" },
      { icon: "⚙️", label: "Vitamin E", val: "35 mg" },
      { icon: "🦴", label: "Magnesium", val: "325 mg" },
      { icon: "🔋", label: "Selenium", val: "53 µg" },
      { icon: "🧬", label: "Healthy Fats", val: "High" },
    ],
    tags: ["Snack Grade", "Oil Extraction"],
  },

  {
    id: "yellowflax",
    name: "Yellow Flax Seeds",
    img: yellowflex,
    desc: "Golden flax seeds with milder taste, preferred in bakery and premium food products.",
    nutrients: [
      { icon: "💪", label: "Protein", val: "18g / 100g" },
      { icon: "🌿", label: "Fiber", val: "27g / 100g" },
      { icon: "⚙️", label: "Omega-3", val: "21g" },
      { icon: "🦴", label: "Magnesium", val: "390 mg" },
      { icon: "🔋", label: "Potassium", val: "800 mg" },
      { icon: "🧬", label: "Vitamin B1", val: "1.5 mg" },
    ],
    tags: ["Premium Quality", "Bakery Use"],
  },

  {
    id: "yellowmustard",
    name: "Yellow Mustard Seeds",
    img: yellowmustard,
    desc: "Mild flavored mustard seeds widely used in condiments, sauces, and oil extraction.",
    nutrients: [
      { icon: "💪", label: "Protein", val: "26g / 100g" },
      { icon: "🌿", label: "Fiber", val: "12g / 100g" },
      { icon: "⚙️", label: "Iron", val: "9 mg" },
      { icon: "🦴", label: "Calcium", val: "260 mg" },
      { icon: "🔋", label: "Selenium", val: "208 µg" },
      { icon: "🧬", label: "Omega-3", val: "5g" },
    ],
    tags: ["Food Grade", "Export Ready"],
  },
],
  peanuts :[
    {
    id: "blanched-peanuts",
    name: "Blanched Peanuts",
    img: balancepeanuts,
    origin: "India / Argentina",
    season: "Year Round",
    desc: "Skinless peanuts processed for a clean appearance and smooth texture. Widely used in confectionery, peanut butter, and bakery products.",
    nutrients: [
      { icon: "💪", label: "Protein", val: "25g / 100g" },
      { icon: "🌿", label: "Fiber", val: "7g / 100g" },
      { icon: "⚙️", label: "Iron", val: "4.5 mg" },
      { icon: "🦴", label: "Calcium", val: "85 mg" },
      { icon: "🔋", label: "Healthy Fats", val: "48g" },
      { icon: "🧬", label: "Vitamin B6", val: "0.35 mg" },
    ],
    tags: ["Skinless", "Ready to Use", "Premium Quality"],
  },
   {
    id: "bold-peanuts",
    name: "Bold Peanuts",
    img: boldpeanuts,
    origin: "India (Gujarat)",
    season: "Oct – Jan",
    desc: "Large-sized bold peanuts with uniform shape and rich taste. Highly preferred for direct consumption, roasting, and premium snack production.",
    nutrients: [
      { icon: "💪", label: "Protein", val: "26.5g / 100g" },
      { icon: "🌿", label: "Fiber", val: "8g / 100g" },
      { icon: "⚙️", label: "Iron", val: "5 mg" },
      { icon: "🦴", label: "Calcium", val: "95 mg" },
      { icon: "🔋", label: "Potassium", val: "705 mg" },
      { icon: "🧬", label: "Vitamin E", val: "8 mg" },
    ],
    tags: ["Bold Size", "Uniform Grading", "Export Quality"],
  },
 
  {
    id: "java-peanuts",
    name: "Java Peanuts",
    img: javapeanuts,
    origin: "India (Tamil Nadu / Andhra Pradesh)",
    season: "Nov – Mar",
    desc: "Small-sized Java peanuts with reddish skin, known for high oil content. Ideal for oil extraction, roasting, and snack manufacturing.",
    nutrients: [
      { icon: "💪", label: "Protein", val: "26g / 100g" },
      { icon: "🌿", label: "Fiber", val: "9g / 100g" },
      { icon: "⚙️", label: "Iron", val: "4.8 mg" },
      { icon: "🦴", label: "Calcium", val: "90 mg" },
      { icon: "🔋", label: "Healthy Fats", val: "49g" },
      { icon: "🧬", label: "Vitamin B3", val: "12 mg" },
    ],
    tags: ["High Oil Content", "Java Grade", "Machine Cleaned"],
  },
   {
    id: "peanuts",
    name: "Raw Peanuts (Groundnuts)",
    img: rawpeanuts,
    origin: "India (Gujarat / Andhra Pradesh)",
    season: "Oct – Feb",
    desc: "High-quality raw peanuts with bold kernels and natural sweetness. Widely used in snacks, peanut butter, oil extraction, and global food processing industries.",
    nutrients: [
      { icon: "💪", label: "Protein", val: "25.8g / 100g" },
      { icon: "🌿", label: "Fiber", val: "8.5g / 100g" },
      { icon: "⚙️", label: "Iron", val: "4.6 mg" },
      { icon: "🦴", label: "Calcium", val: "92 mg" },
      { icon: "🔋", label: "Magnesium", val: "168 mg" },
      { icon: "🧬", label: "Vitamin E", val: "8.3 mg" },
    ],
    tags: ["Bold Kernels", "Moisture < 8%", "Hand Picked"],
  },
 
  
],
  dryfruits: [
  {
    id: "almond",
    name: "Almonds (Badam)",
    img: almond,
    origin: "USA / India",
    season: "Aug – Oct",
    desc: "High-quality almonds with a crunchy texture and rich taste. Widely used in snacks, sweets, and health foods.",
    nutrients: [
      { icon: "💪", label: "Protein", val: "21g / 100g" },
      { icon: "🌿", label: "Fiber", val: "12.5g / 100g" },
      { icon: "⚙️", label: "Iron", val: "3.7 mg" },
      { icon: "🦴", label: "Calcium", val: "269 mg" },
      { icon: "🔋", label: "Magnesium", val: "270 mg" },
      { icon: "🧬", label: "Vitamin E", val: "25.6 mg" },
    ],
    tags: ["Mamra / California", "Premium Quality"],
  },

  {
    id: "cashew",
    name: "Cashew Nuts",
    img: cashew,
    origin: "India / Vietnam",
    season: "Feb – May",
    desc: "Premium whole cashew kernels known for their rich buttery taste and smooth texture. Widely used in snacks, sweets, and global cuisines.",
    nutrients: [
      { icon: "💪", label: "Protein", val: "18g / 100g" },
      { icon: "🌿", label: "Fiber", val: "3.3g / 100g" },
      { icon: "⚙️", label: "Iron", val: "6.7 mg" },
      { icon: "🦴", label: "Calcium", val: "37 mg" },
      { icon: "🔋", label: "Magnesium", val: "292 mg" },
      { icon: "🧬", label: "Vitamin K", val: "34 µg" },
    ],
    tags: ["W180 / W240 / W320", "Export Quality"],
  },

  {
    id: "dates",
    name: "Dates (Khajoor)",
    img: dates,
    origin: "Saudi Arabia / UAE",
    season: "Year Round",
    desc: "Sweet and energy-rich dates widely consumed across the world. Used in desserts, syrups, and healthy snacks.",
    nutrients: [
      { icon: "💪", label: "Protein", val: "2.5g / 100g" },
      { icon: "🌿", label: "Fiber", val: "6.7g / 100g" },
      { icon: "⚙️", label: "Iron", val: "1 mg" },
      { icon: "🦴", label: "Calcium", val: "64 mg" },
      { icon: "🔋", label: "Potassium", val: "696 mg" },
      { icon: "🧬", label: "Vitamin B6", val: "0.25 mg" },
    ],
    tags: ["Medjool / Ajwa", "Natural Sweet"],
  },

  {
    id: "gond",
    name: "Edible Gum (Gond)",
    img: gond,
    origin: "India",
    season: "Year Round",
    desc: "Natural edible gum used in traditional sweets and medicinal recipes. Known for its health benefits.",
    nutrients: [
      { icon: "💪", label: "Energy", val: "350 kcal" },
      { icon: "🌿", label: "Fiber", val: "High" },
      { icon: "⚙️", label: "Calcium", val: "85 mg" },
      { icon: "🦴", label: "Iron", val: "2 mg" },
      { icon: "🔋", label: "Carbs", val: "75g" },
      { icon: "🧬", label: "Minerals", val: "Rich" },
    ],
    tags: ["Natural", "Food Grade"],
  },

  {
    id: "figs",
    name: "Figs (Anjeer)",
    img: figs,
    origin: "Turkey / Afghanistan",
    season: "Aug – Oct",
    desc: "Naturally dried figs with a chewy texture and sweet taste. Rich in fiber and widely used in snacks and desserts.",
    nutrients: [
      { icon: "💪", label: "Protein", val: "3.3g / 100g" },
      { icon: "🌿", label: "Fiber", val: "9.8g / 100g" },
      { icon: "⚙️", label: "Iron", val: "2 mg" },
      { icon: "🦴", label: "Calcium", val: "162 mg" },
      { icon: "🔋", label: "Potassium", val: "680 mg" },
      { icon: "🧬", label: "Vitamin K", val: "15.6 µg" },
    ],
    tags: ["A Grade", "Soft Texture"],
  },

  {
    id: "makhana",
    name: "Foxnuts (Makhana)",
    img: makhana,
    origin: "India (Bihar)",
    season: "Year Round",
    desc: "Light and crunchy foxnuts known for their low fat and high nutritional value. Popular as a healthy snack.",
    nutrients: [
      { icon: "💪", label: "Protein", val: "9.7g / 100g" },
      { icon: "🌿", label: "Fiber", val: "7.6g / 100g" },
      { icon: "⚙️", label: "Iron", val: "1.4 mg" },
      { icon: "🦴", label: "Calcium", val: "60 mg" },
      { icon: "🔋", label: "Magnesium", val: "67 mg" },
      { icon: "🧬", label: "Antioxidants", val: "High" },
    ],
    tags: ["Roasted", "Premium Quality"],
  },

  {
    id: "pistachio",
    name: "Pistachio (Pista)",
    img: pista,
    origin: "USA / Iran",
    season: "Sep – Oct",
    desc: "Crunchy green pistachios known for their rich taste and high nutritional value. Used in snacks and desserts.",
    nutrients: [
      { icon: "💪", label: "Protein", val: "20g / 100g" },
      { icon: "🌿", label: "Fiber", val: "10g / 100g" },
      { icon: "⚙️", label: "Iron", val: "3.9 mg" },
      { icon: "🦴", label: "Calcium", val: "105 mg" },
      { icon: "🔋", label: "Potassium", val: "1025 mg" },
      { icon: "🧬", label: "Vitamin B6", val: "1.7 mg" },
    ],
    tags: ["Roasted / Salted", "Premium Grade"],
  },

  {
    id: "raisins",
    name: "Raisins (Kishmish)",
    img: raisins,
    origin: "India / Turkey",
    season: "Jan – Apr",
    desc: "Naturally dried grapes with a sweet taste and soft texture. Used in bakery, desserts, and traditional dishes worldwide.",
    nutrients: [
      { icon: "💪", label: "Protein", val: "3.1g / 100g" },
      { icon: "🌿", label: "Fiber", val: "3.7g / 100g" },
      { icon: "⚙️", label: "Iron", val: "1.9 mg" },
      { icon: "🦴", label: "Calcium", val: "50 mg" },
      { icon: "🔋", label: "Potassium", val: "749 mg" },
      { icon: "🧬", label: "Vitamin C", val: "2.3 mg" },
    ],
    tags: ["Golden / Black", "Seedless"],
  },

  {
    id: "saffron",
    name: "Saffron (Kesar)",
    img: saffron,
    origin: "India (Kashmir) / Iran",
    season: "Oct – Nov",
    desc: "World’s most premium spice with deep aroma and color. Used in culinary, medicinal, and cosmetic industries.",
    nutrients: [
      { icon: "💪", label: "Antioxidants", val: "High" },
      { icon: "🌿", label: "Fiber", val: "3.9g / 100g" },
      { icon: "⚙️", label: "Iron", val: "11 mg" },
      { icon: "🦴", label: "Calcium", val: "111 mg" },
      { icon: "🔋", label: "Vitamin C", val: "80 mg" },
      { icon: "🧬", label: "Potassium", val: "1724 mg" },
    ],
    tags: ["Grade 1", "Handpicked"],
  },

  {
    id: "walnut",
    name: "Walnuts (Akhrot)",
    img: walnut,
    origin: "India (Kashmir) / USA",
    season: "Sep – Dec",
    desc: "Crunchy walnuts rich in omega-3 fatty acids. Ideal for direct consumption, bakery, and health foods.",
    nutrients: [
      { icon: "💪", label: "Protein", val: "15.2g / 100g" },
      { icon: "🌿", label: "Fiber", val: "6.7g / 100g" },
      { icon: "⚙️", label: "Iron", val: "2.9 mg" },
      { icon: "🦴", label: "Calcium", val: "98 mg" },
      { icon: "🔋", label: "Omega-3", val: "9g" },
      { icon: "🧬", label: "Vitamin B6", val: "0.5 mg" },
    ],
    tags: ["Light Halves", "Jumbo Size"],
  },
],
spices: [
   {
    id: "ajwain",
    name: "Ajwain",
    img: ajwain,
    origin: "India",
    season: "Jan – Mar",
    desc: "Strong flavored seeds known for digestive properties and used in Indian cooking.",
    nutrients: [
      { icon: "💪", label: "Fiber", val: "39g / 100g" },
      { icon: "⚙️", label: "Iron", val: "16 mg" },
      { icon: "🦴", label: "Calcium", val: "1034 mg" },
      { icon: "🔋", label: "Magnesium", val: "200 mg" },
      { icon: "🧬", label: "Thymol", val: "High" },
    ],
    tags: ["Strong Aroma", "Medicinal"],
  },
  {
    id: "hing",
    name: "Asafoetida (Hing)",
    img: hing,
    origin: "India / Afghanistan",
    season: "Year Round",
    desc: "Pungent spice used in small quantities for flavoring and digestive benefits.",
    nutrients: [
      { icon: "💪", label: "Carbs", val: "67g" },
      { icon: "🌿", label: "Fiber", val: "4g" },
      { icon: "⚙️", label: "Iron", val: "39 mg" },
      { icon: "🦴", label: "Calcium", val: "690 mg" },
      { icon: "🔋", label: "Potassium", val: "1050 mg" },
      { icon: "🧬", label: "Resins", val: "High" },
    ],
    tags: ["Strong Flavor", "Compound Hing"],
  },
 
  {
    id: "bay-leaves",
    name: "Bay Leaves (Tej Patta)",
    img: bayleaves,
    origin: "India / Nepal",
    season: "Year Round",
    desc: "Dried bay leaves used for flavoring curries, soups, and rice dishes.",
    nutrients: [
      { icon: "💪", label: "Protein", val: "7.6g / 100g" },
      { icon: "🌿", label: "Fiber", val: "26g / 100g" },
      { icon: "⚙️", label: "Iron", val: "43 mg" },
      { icon: "🦴", label: "Calcium", val: "834 mg" },
      { icon: "🔋", label: "Magnesium", val: "120 mg" },
      { icon: "🧬", label: "Vitamin C", val: "46 mg" },
    ],
    tags: ["Whole Leaves", "Natural"],
  },
  {
    id: "badi-elaichi",
    name: "Black Cardamom (Badi Elaichi)",
    img: badielaichi,
    origin: "India / Nepal",
    season: "Sep – Nov",
    desc: "Large smoky flavored cardamom used in curries and spice blends.",
    nutrients: [
      { icon: "💪", label: "Fiber", val: "28g / 100g" },
      { icon: "⚙️", label: "Iron", val: "14 mg" },
      { icon: "🦴", label: "Calcium", val: "383 mg" },
      { icon: "🔋", label: "Potassium", val: "1119 mg" },
      { icon: "🧬", label: "Essential Oils", val: "High" },
    ],
    tags: ["Bold Pods", "Smoky Aroma"],
  },
  {
    id: "black-cumin",
    name: "Black Cumin (Kala Jeera)",
    img: blackcumin,
    origin: "India / Afghanistan",
    season: "Sep – Dec",
    desc: "Rare and aromatic black cumin seeds with a distinct earthy flavor.",
    nutrients: [
      { icon: "💪", label: "Protein", val: "17g / 100g" },
      { icon: "🌿", label: "Fiber", val: "10g / 100g" },
      { icon: "⚙️", label: "Iron", val: "66 mg" },
      { icon: "🦴", label: "Calcium", val: "900 mg" },
      { icon: "🔋", label: "Magnesium", val: "360 mg" },
      { icon: "🧬", label: "Antioxidants", val: "High" },
    ],
    tags: ["Premium Grade", "Aromatic"],
  },
  {
    id: "black-pepper",
    name: "Black Pepper (Kali Mirch)",
    img: blackpepper,
    origin: "India (Kerala)",
    season: "Dec – Mar",
    desc: "King of spices known for its strong pungency and aroma.",
    nutrients: [
      { icon: "💪", label: "Protein", val: "10g / 100g" },
      { icon: "🌿", label: "Fiber", val: "26g / 100g" },
      { icon: "⚙️", label: "Iron", val: "28 mg" },
      { icon: "🦴", label: "Calcium", val: "443 mg" },
      { icon: "🔋", label: "Potassium", val: "1329 mg" },
      { icon: "🧬", label: "Piperine", val: "High" },
    ],
    tags: ["Bold Grade", "Steam Sterilised"],
  },
  {
    id: "elaichi",
    name: "Cardamom (Elaichi)",
    img: elaichi,
    origin: "India (Kerala)",
    season: "Aug – Dec",
    desc: "Green aromatic pods used in sweets, tea, and spice blends.",
    nutrients: [
      { icon: "💪", label: "Fiber", val: "28g / 100g" },
      { icon: "⚙️", label: "Iron", val: "14 mg" },
      { icon: "🦴", label: "Calcium", val: "383 mg" },
      { icon: "🔋", label: "Potassium", val: "1119 mg" },
      { icon: "🧬", label: "Essential Oils", val: "High" },
    ],
    tags: ["Bold Pods", "Premium Grade"],
  },
  {
    id: "dalchini",
    name: "Cinnamon (Dalchini)",
    img: dalchini,
    origin: "Sri Lanka / India",
    season: "Year Round",
    desc: "Sweet and woody spice used in bakery, beverages, and spice blends.",
    nutrients: [
      { icon: "💪", label: "Fiber", val: "53g / 100g" },
      { icon: "⚙️", label: "Iron", val: "8.3 mg" },
      { icon: "🦴", label: "Calcium", val: "1002 mg" },
      { icon: "🔋", label: "Magnesium", val: "60 mg" },
      { icon: "🧬", label: "Cinnamaldehyde", val: "High" },
    ],
    tags: ["Ceylon Grade", "Sweet Aroma"],
  },
  {
    id: "laung",
    name: "Cloves (Laung)",
    img: laung,
    origin: "India / Indonesia",
    season: "Dec – Feb",
    desc: "Highly aromatic dried flower buds used in spices, medicines, and oils.",
    nutrients: [
      { icon: "💪", label: "Fiber", val: "34g / 100g" },
      { icon: "⚙️", label: "Iron", val: "11.8 mg" },
      { icon: "🦴", label: "Calcium", val: "632 mg" },
      { icon: "🔋", label: "Magnesium", val: "259 mg" },
      { icon: "🧬", label: "Eugenol", val: "High" },
    ],
    tags: ["Bold Size", "High Oil"],
  },
  {
    id: "coriander",
    name: "Coriander Seeds",
    img: coriander,
    origin: "India",
    season: "Feb – Apr",
    desc: "Aromatic seeds used as both spice and oilseed.",
    nutrients: [
      { icon: "💪", label: "Protein", val: "12g / 100g" },
      { icon: "🌿", label: "Fiber", val: "41g / 100g" },
      { icon: "⚙️", label: "Iron", val: "16 mg" },
      { icon: "🦴", label: "Calcium", val: "709 mg" },
      { icon: "🔋", label: "Magnesium", val: "330 mg" },
      { icon: "🧬", label: "Vitamin C", val: "21 mg" },
    ],
    tags: ["Spice Grade", "Aromatic"],
  },
  {
    id: "dry-ginger",
    name: "Dry Ginger (Sonth)",
    img: dryginger,
    origin: "India",
    season: "Dec – Feb",
    desc: "Dried ginger roots with strong flavor and medicinal properties.",
    nutrients: [
      { icon: "💪", label: "Protein", val: "9g / 100g" },
      { icon: "🌿", label: "Fiber", val: "14g / 100g" },
      { icon: "⚙️", label: "Iron", val: "19 mg" },
      { icon: "🦴", label: "Calcium", val: "114 mg" },
      { icon: "🔋", label: "Potassium", val: "1320 mg" },
      { icon: "🧬", label: "Gingerol", val: "High" },
    ],
    tags: ["Natural Dry", "Strong Aroma"],
  },
  {
    id: "kasuri-methi",
    name: "Fenugreek Leaves (Kasuri Methi)",
    img: kasturimethi,
    origin: "India (Rajasthan)",
    season: "Jan – Mar",
    desc: "Dried fenugreek leaves with a strong aroma used in Indian curries.",
    nutrients: [
      { icon: "💪", label: "Protein", val: "23g / 100g" },
      { icon: "🌿", label: "Fiber", val: "25g / 100g" },
      { icon: "⚙️", label: "Iron", val: "33 mg" },
      { icon: "🦴", label: "Calcium", val: "176 mg" },
      { icon: "🔋", label: "Potassium", val: "770 mg" },
      { icon: "🧬", label: "Vitamin A", val: "High" },
    ],
    tags: ["Aromatic Leaves", "Premium Quality"],
  },
  {
    id: "methi-dana",
    name: "Fenugreek Seeds (Methi Dana)",
    img: methidana,
    origin: "India",
    season: "Feb – Apr",
    desc: "Golden fenugreek seeds known for their slightly bitter taste.",
    nutrients: [
      { icon: "💪", label: "Protein", val: "23g / 100g" },
      { icon: "🌿", label: "Fiber", val: "24g / 100g" },
      { icon: "⚙️", label: "Iron", val: "33 mg" },
      { icon: "🦴", label: "Calcium", val: "176 mg" },
      { icon: "🔋", label: "Magnesium", val: "191 mg" },
      { icon: "🧬", label: "Saponins", val: "High" },
    ],
    tags: ["Sortex Clean", "Export Quality"],
  },
  {
    id: "jaiphal",
    name: "Nutmeg (Jaiphal)",
    img: jaiphal,
    origin: "Indonesia / India",
    season: "Year Round",
    desc: "Aromatic spice used in bakery, desserts, and spice blends.",
    nutrients: [
      { icon: "💪", label: "Fiber", val: "20g / 100g" },
      { icon: "⚙️", label: "Iron", val: "3 mg" },
      { icon: "🦴", label: "Calcium", val: "184 mg" },
      { icon: "🔋", label: "Magnesium", val: "183 mg" },
      { icon: "🧬", label: "Myristicin", val: "High" },
    ],
    tags: ["Whole Nut", "Aromatic"],
  },
  {
    id: "kalonji",
    name: "Nigella Seeds (Kalonji)",
    img: kalonji,
    origin: "India / Middle East",
    season: "Feb – Apr",
    desc: "Black seeds with a slightly bitter taste used in breads and pickles.",
    nutrients: [
      { icon: "💪", label: "Protein", val: "20g / 100g" },
      { icon: "🌿", label: "Fiber", val: "12g / 100g" },
      { icon: "⚙️", label: "Iron", val: "10 mg" },
      { icon: "🦴", label: "Calcium", val: "931 mg" },
      { icon: "🔋", label: "Potassium", val: "1788 mg" },
      { icon: "🧬", label: "Thymoquinone", val: "High" },
    ],
    tags: ["Natural Seeds", "Medicinal"],
  },
  {
    id: "poppy-seeds",
    name: "Poppy Seeds (Khus Khus)",
    img: popyseeds,
    origin: "India / Turkey",
    season: "Mar – May",
    desc: "Tiny white seeds with a nutty flavor used in bakery and dishes.",
    nutrients: [
      { icon: "💪", label: "Protein", val: "18g / 100g" },
      { icon: "🌿", label: "Fiber", val: "20g / 100g" },
      { icon: "⚙️", label: "Iron", val: "9.8 mg" },
      { icon: "🦴", label: "Calcium", val: "1438 mg" },
      { icon: "🔋", label: "Magnesium", val: "347 mg" },
      { icon: "🧬", label: "Healthy Fats", val: "42g" },
    ],
    tags: ["White Seeds", "Bakery Grade"],
  },
  {
    id: "star-anise",
    name: "Star Anise (Chakra Phool)",
    img: staranise,
    origin: "Vietnam / India",
    season: "Year Round",
    desc: "Star-shaped spice with a strong licorice flavor.",
    nutrients: [
      { icon: "💪", label: "Fiber", val: "15g / 100g" },
      { icon: "⚙️", label: "Iron", val: "37 mg" },
      { icon: "🦴", label: "Calcium", val: "646 mg" },
      { icon: "🔋", label: "Magnesium", val: "170 mg" },
      { icon: "🧬", label: "Antioxidants", val: "High" },
    ],
    tags: ["Whole Star", "Premium Grade"],
  },
  {
    id: "imli",
    name: "Tamarind (Imli)",
    img: tamarind,
    origin: "India / Thailand",
    season: "Mar – Jun",
    desc: "Sweet and tangy pulp widely used in chutneys and sauces.",
    nutrients: [
      { icon: "💪", label: "Carbs", val: "63g" },
      { icon: "🌿", label: "Fiber", val: "5g" },
      { icon: "⚙️", label: "Iron", val: "2.8 mg" },
      { icon: "🦴", label: "Calcium", val: "74 mg" },
      { icon: "🔋", label: "Potassium", val: "628 mg" },
      { icon: "🧬", label: "Vitamin B1", val: "0.4 mg" },
    ],
    tags: ["Seedless", "Natural Pulp"],
  },
  {
    id: "haldi",
    name: "Turmeric (Haldi)",
    img: haldi,
    origin: "India",
    season: "Jan – Mar",
    desc: "Golden spice known for its color, flavor, and medicinal properties.",
    nutrients: [
      { icon: "💪", label: "Curcumin", val: "3–5%" },
      { icon: "🌿", label: "Fiber", val: "21g / 100g" },
      { icon: "⚙️", label: "Iron", val: "41 mg" },
      { icon: "🦴", label: "Calcium", val: "183 mg" },
      { icon: "🔋", label: "Potassium", val: "2080 mg" },
      { icon: "🧬", label: "Vitamin C", val: "25 mg" },
    ],
    tags: ["High Curcumin", "Export Quality"],
  },
]
};

const BASE = {
  green: "#2d5a1b",
  greenMid: "#4a7c2f",
  greenLight: "#a8d96c",
  greenPale: "#eaf4e0",
  cream: "#f8f5ee",
  gold: "#c8a84b",
  goldLight: "#f0e4b8",
  dark: "#1a1f0e",
  text: "#3a3a2e",
  muted: "#7a7a6a",
  white: "#ffffff",
};
const Products = () => {
  const [active, setActive] = useState(0);
  const width = useWindowWidth();
  const isMobile = width < 768;
  const [activeCat, setActiveCat] = useState("pulses");
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [fadeKey, setFadeKey] = useState(0);
  const sliderRef = useRef(null);
 
  const catData = categories.find(c => c.id === activeCat);
  const items = products[activeCat];
  const selected = items[selectedIdx];
 
  const switchCat = (id) => {
    setActiveCat(id);
    setSelectedIdx(0);
    setFadeKey(k => k + 1);
  };

  function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return width;
}
 
const services = [
    { number: "01", name: "Pulses & Lentils", tagline: "The daily staple, perfected.", desc: "Chana, Masoor, Moong, Urad, Toor — every pulse you need, cleaned to perfection and priced below market. Bulk and retail packs available.", highlights: ["Machine sorted", "No preservatives", "Pan-India delivery", "Min. order: 25 MT"], color: BASE.green, pale: BASE.greenPale },
    { number: "02", name: "Dry Fruits", tagline: "Nature's finest, honestly priced.", desc: "Almonds, Cashews, Walnuts, Raisins, Pistachios — premium-grade dry fruits sourced from origin states, offered at agent-direct pricing.", highlights: ["Origin certified", "Gift packs available", "Seasonal procurement", "Min. order: 25 MT"], color: "#8B5E1A", pale: "#fdf0d8" },
    { number: "03", name: "Seeds", tagline: "From soil to shelf, traceable.", desc: "Flaxseeds, Chia, Sesame, Sunflower, Pumpkin seeds — health-forward products with high germination rates and zero adulteration.", highlights: ["High germination", "Lab tested", "Airtight packing", "Min. order: 25 MT"], color: "#1a7a6e", pale: "#e0f5f2" },
    { number: "04", name: "Spices & Condiments", tagline: "Pure aroma, honest origin.", desc: "Turmeric, Red Chili, Cumin, Coriander, Fenugreek — ground and whole, sourced from state-designated spice belts across India.", highlights: ["No fillers", "Origin labelled", "Retail & bulk", "Min. order: 25 MT"], color: "#c14a2f", pale: "#faeae0" },
    { number: "05", name: "Bulk Supply", tagline: "Scale with confidence.", desc: "Custom sourcing for hotels, restaurants, supermarkets and distributors. Contract farming, custom labelling, and logistics support included.", highlights: ["Custom packaging", "Monthly contracts", "Dedicated agent", "Min. order: 25 MT"], color: "#4a3a7a", pale: "#ede0fa" },
  ];
 
  const s = services[active];
 
 
  const selectProduct = (i) => {
    setSelectedIdx(i);
    setFadeKey(k => k + 1);
  };
 
  const scrollSlider = (dir) => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({ left: dir * 160, behavior: "smooth" });
  };
  return (
    <>
      <style>{`
        /* Banner */
        .product-banner {
        padding:12%;
          background-size: cover;
          background-position: bottom;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .product-banner-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
  135deg,
  rgba(0, 0, 0, 0.6),
  rgba(97, 206, 112, 0.6),
  rgba(0, 0, 0, 0.3)
);
        }

        .product-banner-title {
          position: relative;
          color: white;
          margin-top:75px;
          font-size: 4rem;
          font-weight: 700;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
          z-index: 1;
        }

       
      `}</style>

      {/* Banner */}
      <div
        className="product-banner"
        style={{
          backgroundImage: `url(${require('../assets/images/PRODUCT.jpg.jpeg')})`,
        }}
      >
        <div className="product-banner-overlay"></div>
        <h1 className="product-banner-title">Our Products</h1>
      </div>

      {/* Main Products Section */}
         <div className="prod-root"> 
      {/* Header */}
      <div className="prod-header">
        <div className="prod-eyebrow">Explore Range</div>
        <h2 className="prod-title">What We <em>Sell</em></h2>
      </div>
 
      {/* Category Tabs */}
      <div className="cat-tabs">
        {categories.map(cat => (
          <button
            key={cat.id}
            className={`cat-tab ${activeCat === cat.id ? "active" : ""}`}
            onClick={() => switchCat(cat.id)}
          >
            <span className="cat-tab-emoji">{cat.emoji}</span>
            {cat.label}
          </button>
        ))}
      </div>
 
      {/* Grid */}
      <div className="prod-grid">
 
        {/* Left — Slider */}
        <div className="slider-panel">
          <div className="slider-label">{catData.emoji} {catData.label} — {items.length} Products</div>
          <div className="slider-wrap">
            <button className="slider-arrow left" onClick={() => scrollSlider(-1)}>←</button>
            <div className="slider-row" ref={sliderRef}>
              {items.map((item, i) => (
                <div
                  key={item.id}
                  className={`prod-thumb ${i === selectedIdx ? "selected" : ""}`}
                  onClick={() => selectProduct(i)}
                >
                  <div className="thumb-img-ring">
                    <img src={item.img} alt={item.name} loading="lazy" />
                  </div>
                  <span className="thumb-name">{item.name}</span>
                </div>
              ))}
            </div>
            <button className="slider-arrow right" onClick={() => scrollSlider(1)}>→</button>
          </div>
        </div>
 
        {/* Right — Detail */}
        <div className="detail-panel fade-in" key={fadeKey}>
          <div className="detail-img-strip">
            <img src={selected.img} alt={selected.name} />
            <span className="detail-cat-badge">{catData.label}</span>
          </div>
 
          <div className="detail-body">
            <div className="detail-name">{selected.name}</div>
            <p className="detail-desc">{selected.desc}</p>
 
            <div className="detail-tags">
              {selected.tags.map(t => <span key={t} className="detail-tag">{t}</span>)}
            </div>
 
            <div className="nutrients-label">Nutritional Highlights</div>
            <div className="nutrients-grid">
              {selected.nutrients.map(n => (
                <div className="nutrient-item" key={n.label}>
                  <span className="nutrient-icon">{n.icon}</span>
                  <div className="nutrient-text">
                    <div className="nutrient-name">{n.label}</div>
                    <div className="nutrient-val">{n.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
 
      </div>
    </div>

    <section style={{ background: BASE.dark, fontFamily: "'Outfit', sans-serif" }}>
 
      <div style={{ padding: isMobile ? "52px 24px 32px" : "72px 48px 0", textAlign: "center" }}>
        <span style={{ fontSize: 11, letterSpacing: 3, color: BASE.gold, textTransform: "uppercase", fontWeight: 500 }}>What We Supply</span>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px, 5vw, 52px)", color: BASE.white, marginTop: 12, fontWeight: 600, lineHeight: 1.2 }}>
          Everything from the<br /><em style={{ color: BASE.greenLight }}>Earth's Best</em>
        </h2>
      </div>
 
      <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", padding: isMobile ? "24px 16px 40px" : "60px 48px", gap: isMobile ? 16 : 48, maxWidth: 1200, margin: "0 auto" }}>
 
        {/* Tabs */}
        <div style={{
          display: "flex",
          flexDirection: isMobile ? "row" : "column",
          gap: 6,
          overflowX: isMobile ? "auto" : "visible",
          minWidth: isMobile ? "unset" : 220,
          paddingBottom: isMobile ? 4 : 0,
          WebkitOverflowScrolling: "touch",
        }}>
          {services.map((svc, i) => (
            <button key={i} onClick={() => setActive(i)} style={{
              background: active === i ? svc.color : "transparent",
              border: active === i ? "none" : "0.5px solid rgba(255,255,255,0.1)",
              borderRadius: 10,
              padding: isMobile ? "10px 16px" : "16px 20px",
              display: "flex", alignItems: "center",
              gap: isMobile ? 8 : 16,
              cursor: "pointer", transition: "all 0.25s",
              textAlign: "left", whiteSpace: "nowrap", flexShrink: 0,
            }}>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? 16 : 22, color: active === i ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.2)", fontWeight: 600, minWidth: 22 }}>
                {svc.number}
              </span>
              <span style={{ fontSize: isMobile ? 12 : 13, fontWeight: active === i ? 500 : 300, color: active === i ? BASE.white : "rgba(255,255,255,0.5)" }}>
                {svc.name}
              </span>
            </button>
          ))}
        </div>
 
        {/* Detail panel */}
        <div style={{ flex: 1, background: s.pale, borderRadius: 20, padding: isMobile ? "28px 20px" : "48px 40px", position: "relative", overflow: "hidden" }}>
          {!isMobile && (
            <div style={{ position: "absolute", top: -20, right: 20, fontFamily: "'Cormorant Garamond', serif", fontSize: 160, color: "rgba(0,0,0,0.06)", fontWeight: 700, lineHeight: 1, userSelect: "none" }}>
              {s.number}
            </div>
          )}
          <span style={{ fontSize: 11, letterSpacing: 2, color: s.color, textTransform: "uppercase", fontWeight: 600 }}>{s.tagline}</span>
          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(24px, 4vw, 44px)", color: BASE.dark, margin: "10px 0 16px", fontWeight: 600, lineHeight: 1.2 }}>{s.name}</h3>
          <p style={{ fontSize: 14, color: BASE.text, lineHeight: 1.9, marginBottom: 24, fontWeight: 300 }}>{s.desc}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {s.highlights.map((h, i) => (
              <span key={i} style={{ fontSize: 12, padding: "6px 14px", borderRadius: 20, background: BASE.white, color: s.color, border: `1px solid ${s.color}30`, fontWeight: 500 }}>✓ {h}</span>
            ))}
          </div>
          <div style={{ marginTop: 32, paddingTop: 22, borderTop: `1px solid ${s.color}20`, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <span style={{ fontSize: 12, color: BASE.muted }}>Interested in this product?</span>
            <Link to='/contact'><button style={{ background: s.color, color: BASE.white, border: "none", borderRadius: 8, padding: "10px 22px", fontSize: 13, fontWeight: 500, cursor: "pointer", fontFamily: "inherit" }}>
              Request a Quote ↗
            </button></Link>
          </div>
        </div>
      </div>
 
      <div style={{ overflow: "hidden", borderTop: "0.5px solid rgba(255,255,255,0.08)", padding: "18px 0" }}>
        <div style={{ display: "flex", gap: 48, animation: "marquee 18s linear infinite", whiteSpace: "nowrap" }}>
          {["Pulses", "Dry Fruits", "Seeds", "Spices", "Condiments", "Bulk Supply", "Pulses", "Dry Fruits", "Seeds", "Spices",].map((t, i) => (
            <span key={i} style={{ fontSize: 13, color: "rgba(255,255,255,0.2)", fontWeight: 300, letterSpacing: 1 }}>
              {t} <span style={{ color: BASE.gold, margin: "0 8px" }}>✦</span>
            </span>
          ))}
        </div>
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </section>
    </>
  );
};

export default Products;
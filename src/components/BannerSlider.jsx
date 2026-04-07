import React, { useState, useEffect } from 'react';
import image1 from '../../src/assets/images/grainbeansbanner.jpeg'
import image2 from '../../src/assets/images/greenmongbanner.jpeg'
import image3 from '../../src/assets/images/whitecheakpeabanner.jpeg'
import image4 from '../../src/assets/images/herbsspicesbanner.jpeg'
import image5 from '../../src/assets/images/redcheakpeabanner.jpeg'
import image6 from '../../src/assets/images/dryfruitsbanner.jpeg'
import image7 from '../../src/assets/images/oilseedsbanner.jpeg'  
const banners = [
  {
    image: image1, 
    head: "Let the nature heal you",
    title: "Balanced daily nutrition",
    subtitle: "GRAINS & NUTS Mix",
    text: "Balanced nutrition in every bite.",
  },
  {
    image: image2,  // ← Use the imported variable
    head: "Wellness for your body",
    title: "Natural & protein-rich",
    subtitle: "PURE Green Moong",
    text: "Fresh, protein-rich and naturally nutritious.",
  },
  {
    image: image3,  // ← Use the imported variable
    head: "Nourish your skin naturally",
    title: "Wholesome & nutritious",
    subtitle: "PREMIUM Chickpeas",
    text: "Wholesome, tasty and full of essential nutrients.",
  },
  {
    image: image4,  // ← Use the imported variable
    head: "Taste the authentic tradition",
    title: "Rich aroma & flavor",
    subtitle: "AUTHENTIC Spices",
    text: "Rich aroma and flavor for every dish.",
  },
   {
  image: image5,
  head: "Experience True Indian Nutrition",
  title: "High protein source",
  subtitle: "NATURAL Kala Chana",
  text: "High in protein and great for daily energy.",
},
{
  image: image6,
  head: "Experience True Indian Nutrition",
  title: "Rich, healthy & energizing",
  subtitle: "PREMIUM Dry Fruits",
  text: "Naturally rich in nutrients and energy.",
},
{
  image: image7,
  head: "Experience True Indian Nutrition",
  title: "Pure & nutrient-dense",
  subtitle: "NATURAL Oil Seeds",
  text: "Packed with healthy fats and nutrition.",
},
];

export default function BannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fadeState, setFadeState] = useState('fade-in');

  useEffect(() => {
    const interval = setInterval(() => {
    
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % banners.length);
        setFadeState('fade-in');
      }, 200);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
   
    setTimeout(() => {
      setCurrentSlide(index);
     
    }, 2000);
  };

  const banner = banners[currentSlide];

  return (
    <div className="banner-slider" style={{ position: 'relative', width: '100%', height: '600px', overflow: 'hidden' }}>
      <div className="slide" style={{ position: 'relative', width: '100%', height: '100%' }}>
        <img 
          src={banner.image} 
          alt={`Banner ${currentSlide + 1}`} 
          style={{ 
            maxHeight: '600px', 
            width: '100%', 
            height: '100%',
            objectFit: 'revert-layer',
            position: 'absolute',
            top: 0,
            left: 0,
            transition: 'opacity 0.8s ease-in-out',
            opacity: fadeState === 'fade-in' ? 1 : 0
          }} 
        />
        
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
      
          opacity: fadeState === 'fade-in' ? 1 : 0
        }} />
        
        <div 
          className="slide-text" 
          style={{
            position: 'absolute',
            top: '50%',
            left: '0',
            transform: 'translateY(-50%)',
            padding: '0 80px',
            maxWidth: '800px',
            color: 'white',
            zIndex: 10,
            transition: 'all 0.7s ease-in-out',
            opacity: fadeState === 'fade-in' ? 1 : 0,
            marginLeft: fadeState === 'fade-in' ? '0' : '-30px'
          }}
        >
         
          
          <h1 style={{
            fontSize: '72px',
            fontWeight: 'bold',
            lineHeight: '1.1',
            marginBottom: '20px'
          }}>
            <span style={{ 
              display: 'block', 
              color: '#61ce70',
              marginBottom: '10px',
              fontSize:"40px"
            }}>
              {banner.title}
            </span>
            <span style={{ display: 'block' }}>
              {banner.subtitle}
            </span>
          </h1>
          
          <p style={{
            fontSize: '20px',
            fontWeight: '300',
            color: '#ffff',
            marginBottom: '30px',
            lineHeight: '1.6'
          }}>
            {banner.text}
          </p>
        </div>
      </div>

      <div style={{
        position: 'absolute',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '12px',
        zIndex: 10
      }}>
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              width: currentSlide === index ? '32px' : '12px',
              height: '12px',
              borderRadius: '6px',
              backgroundColor: currentSlide === index ? '#61ce70' : '#61ce70',
              border: 'none',
              cursor: 'pointer',
            
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
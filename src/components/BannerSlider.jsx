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
    title: "Balanced daily nutrition",
    subtitle: "GRAINS & NUTS MIX",
    text: "Balanced nutrition in every bite.",
  },
  {
    image: image2,
    title: "Natural & protein-rich",
    subtitle: "PURE GREEN MOONG",
    text: "Fresh, protein-rich and naturally nutritious.",
  },
  {
    image: image3,
    title: "Wholesome & nutritious",
    subtitle: "PREMIUM CHICKPEAS",
    text: "Wholesome, tasty and full of essential nutrients.",
  },
  {
    image: image4,
    title: "Rich aroma & flavor",
    subtitle: "AUTHENTIC SPICES",
    text: "Rich aroma and flavor for every dish.",
  },
  {
    image: image5,
    title: "High protein source",
    subtitle: "NATURAL KALA CHANA",
    text: "High in protein and great for daily energy.",
  },
  {
    image: image6,
    title: "Rich, healthy & energizing",
    subtitle: "PREMIUM DRY FRUITS",
    text: "Naturally rich in nutrients and energy.",
  },
  {
    image: image7,
    title: "Pure & nutrient-dense",
    subtitle: "NATURAL OIL SEEDS",
    text: "Packed with healthy fats and nutrition.",
  },
];

export default function BannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fadeState, setFadeState] = useState('fade-in');

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out
      setFadeState('fade-out');

      // Change slide after fade-out
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % banners.length);
        setFadeState('fade-in');
      }, 500);
    }, 2000); // total duration per slide

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setFadeState('fade-out');

    setTimeout(() => {
      setCurrentSlide(index);
      setFadeState('fade-in');
    }, 300);
  };

  const banner = banners[currentSlide];

  return (
    <div
      className="banner-slider"
      style={{
        position: 'relative',
        width: '100%',
        height: '600px',
        overflow: 'hidden'
      }}
    >
      <div style={{ width: '100%', height: '100%', position: 'relative' }}>
        
        {/* IMAGE */}
        <img
          src={banner.image}
          alt={`Banner ${currentSlide + 1}`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            transition: 'opacity 0.5s ease-in-out',
            // opacity: fadeState === 'fade-in' ? 1 : 0
          }}
        />

        {/* OVERLAY */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.4)',
            transition: 'opacity 0.5s ease-in-out',
            opacity: fadeState === 'fade-in' ? 1 : 0
          }}
        />

        {/* TEXT */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: 0,
            transform: 'translateY(-50%)',
            padding: '0 80px',
            maxWidth: '800px',
            color: '#fff',
            zIndex: 10,
            transition: 'all 0.5s ease-in-out',
            opacity: fadeState === 'fade-in' ? 1 : 0,
            marginLeft: fadeState === 'fade-in' ? '0' : '-30px'
          }}
        >
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              lineHeight: '1.1',
              marginBottom: '20px'
            }}
          >
            <span
              style={{
                display: 'block',
                color: '#61ce70',
                fontSize: '40px',
                marginBottom: '10px'
              }}
            >
              {banner.title}
            </span>

            <span>{banner.subtitle}</span>
          </h1>

          <p
            style={{
              fontSize: '20px',
              fontWeight: '300',
              lineHeight: '1.6'
            }}
          >
            {banner.text}
          </p>
        </div>
      </div>

      {/* DOTS */}
      <div
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '12px',
          zIndex: 10
        }}
      >
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              width: currentSlide === index ? '32px' : '12px',
              height: '12px',
              borderRadius: '6px',
              backgroundColor: '#61ce70',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          />
        ))}
      </div>
    </div>
  );
}
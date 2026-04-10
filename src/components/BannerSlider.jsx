import React, { useState, useEffect } from "react";

import image1 from "../../src/assets/images/grainbeansbanner.jpeg";
import image2 from "../../src/assets/images/greenmongbanner.jpeg";
import image3 from "../../src/assets/images/whitecheakpeabanner.jpeg";
import image4 from "../../src/assets/images/herbsspicesbanner.jpeg";
import image5 from "../../src/assets/images/redcheakpeabanner.jpeg";
import image6 from "../../src/assets/images/dryfruitsbanner.jpeg";
import image7 from "../../src/assets/images/oilseedsbanner.jpeg";

const banners = [
  {
    image: image1,
    title: "Balanced daily nutrition",
    subtitle: "GRAINS & NUTS MIX",
    text: "Balanced nutrition in every bite."
  },
  {
    image: image2,
    title: "Natural & protein-rich",
    subtitle: "PURE GREEN MOONG",
    text: "Fresh, protein-rich and naturally nutritious."
  },
  {
    image: image3,
    title: "Wholesome & nutritious",
    subtitle: "PREMIUM CHICKPEAS",
    text: "Wholesome, tasty and full of essential nutrients."
  },
  {
    image: image4,
    title: "Rich aroma & flavor",
    subtitle: "AUTHENTIC SPICES",
    text: "Rich aroma and flavor for every dish."
  },
  {
    image: image5,
    title: "High protein source",
    subtitle: "NATURAL KALA CHANA",
    text: "High in protein and great for daily energy."
  },
  {
    image: image6,
    title: "Rich, healthy & energizing",
    subtitle: "PREMIUM DRY FRUITS",
    text: "Naturally rich in nutrients and energy."
  },
  {
    image: image7,
    title: "Pure & nutrient-dense",
    subtitle: "NATURAL OIL SEEDS",
    text: "Packed with healthy fats and nutrition."
  }
];

export default function BannerSlider() {

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 2000);

    return () => clearInterval(slider);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "600px",
        overflow: "hidden"
      }}
    >
      {banners.map((banner, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            opacity: index === current ? 1 : 0,
            transition: "opacity 1s ease-in-out"
          }}
        >
          {/* IMAGE */}
          <img
            src={banner.image}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }}
          />

          {/* DARK OVERLAY */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.4)"
            }}
          />

          {/* TEXT */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "80px",
              transform: "translateY(-50%)",
              color: "white",
              maxWidth: "700px"
            }}
          >
            <h1
              style={{
                fontSize: "70px",
                lineHeight: "1.1",
                marginBottom: "20px"
              }}
            >
              <span
                style={{
                  color: "#61ce70",
                  fontSize: "40px",
                  display: "block"
                }}
              >
                {banner.title}
              </span>

              {banner.subtitle}
            </h1>

            <p
              style={{
                fontSize: "20px",
                lineHeight: "1.6"
              }}
            >
              {banner.text}
            </p>
          </div>
        </div>
      ))}

      {/* DOTS */}
      <div
        style={{
          position: "absolute",
          bottom: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "10px"
        }}
      >
        {banners.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: current === i ? "30px" : "10px",
              height: "10px",
              background: "#61ce70",
              borderRadius: "10px",
              cursor: "pointer",
              transition: "all 0.3s"
            }}
          />
        ))}
      </div>
    </div>
  );
}
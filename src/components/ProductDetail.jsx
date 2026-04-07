import React, { useCallback, useEffect, useRef, useState } from 'react';
import '../styles/Product.css'
import image1 from '../assets/images/pulsehome.jpg'
import image2 from '../assets/images/spiceshome.jpg'
import image3 from '../assets/images/dryfruitshome.jpg'
import image4 from '../assets/images/TJ-Peanuts.jpg'
import image5 from '../assets/images/Oilseedhome.webp'
import gulfood from '../assets/images/sweeperipga.png'
import apeda from "../assets/images/swiperapidi.png";
import fssai from "../assets/images/swiperfrank.png";
import ipga from "../assets/images/sweeperipga.png";
import gpc from "../assets/images/swipergpc.png";

import { Link } from 'react-router-dom';
const cards = [
  {
    img: image1,
    category: "Pulses",
    catColor: "rgba(42,109,212,0.75)",
    catText: "#ddeeff",
    title: "Premium Quality Pulses",
    desc: "Sourced from trusted farms, our pulses ensure high nutrition, purity, and global export standards.",
  },
  {
    img: image2,
    category: "Spices",
    catColor: "rgba(212,98,42,0.75)",
    catText: "#ffede3",
    title: "Authentic Indian Spices",
    desc: "Rich in aroma and flavor, our spices are carefully selected to deliver freshness and quality worldwide.",
  },
  {
    img: image3,
    category: "Dry Fruits",
    catColor: "rgba(30,130,80,0.7)",
    catText: "#d4f0e4",
    title: "Finest Dry Fruits Collection",
    desc: "Premium dry fruits packed with freshness, taste, and nutrition for global markets.",
  },
  {
    img: image4,
    category: "Peanuts",
    catColor: "rgba(120,60,200,0.7)",
    catText: "#ede0ff",
    title: "High-Grade Peanuts Supply",
    desc: "Carefully processed peanuts with excellent quality, ideal for export and bulk supply.",
  },
  {
    img: image5,
    category: "Oil Seeds",
    catColor: "rgba(180,30,60,0.7)",
    catText: "#ffdde4",
    title: "Premium Oil Seeds",
    desc: "Top-quality oil seeds ensuring high yield and purity for industrial and inmercial use.",
  },
];

const logos = [
  { name: "Gulfood", img: gulfood},
  { name: "APEDA", img: apeda },
  { name: "FSSAI", img: fssai },
  { name: "IPGA", img: ipga },
  { name: "GPC", img: gpc },
    { name: "Gulfood", img: gulfood},
  { name: "APEDA", img: apeda },
  { name: "FSSAI", img: fssai },
  { name: "IPGA", img: ipga },
  { name: "GPC", img: gpc },
    { name: "Gulfood", img: gulfood},
  { name: "APEDA", img: apeda },
  { name: "FSSAI", img: fssai },
  { name: "IPGA", img: ipga },
  { name: "GPC", img: gpc }
];


const ProductDetail = () => {
  const [current, setCurrent] = useState(0);
  const allLogos = [...logos, ...logos];
  const [visible, setVisible] = useState(getVisibleCount());
  const [dragStart, setDragStart] = useState(null);
  const [dragDelta, setDragDelta] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const trackRef = useRef(null);
  const total = cards.length;
  const maxIndex = total - visible;
 
  useEffect(() => {
    const onResize = () => {
      const v = getVisibleCount();
      setVisible(v);
      setCurrent(c => Math.min(c, cards.length - v));
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
 
  const goTo = useCallback((idx) => {
    setCurrent(Math.max(0, Math.min(idx, maxIndex)));
  }, [maxIndex]);
 
  // Drag / swipe
  const onPointerDown = (e) => {
    setDragStart(e.clientX);
    setIsDragging(false);
    setDragDelta(0);
  };
  const onPointerMove = (e) => {
    if (dragStart === null) return;
    const d = e.clientX - dragStart;
    if (Math.abs(d) > 5) setIsDragging(true);
    setDragDelta(d);
  };
  const onPointerUp = () => {
    if (isDragging) {
      if (dragDelta < -60) goTo(current + 1);
      else if (dragDelta > 60) goTo(current - 1);
    }
    setDragStart(null);
    setDragDelta(0);
    setIsDragging(false);
  };
 
  // Card width calculation
  const GAP = 20;
  const cardWidthPct = `calc((100% - ${GAP * (visible - 1)}px) / ${visible})`;
  const translateX = `calc(-${current} * (${cardWidthPct} + ${GAP}px) + ${isDragging ? dragDelta : 0}px)`;
function getVisibleCount() {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth < 600) return 1;
  if (window.innerWidth < 900) return 2;
  return 3;
}

  return (
    <>
      <div className="cr-root"> 
      {/* Header */}
      <div className="cr-header">
        <div className="cr-eyebrow">
          <span className="cr-eyebrow-line" />
          Our Products
          <span className="cr-eyebrow-line" />
        </div>
        <h2 className="cr-title">Explore the <em>World</em></h2>
        <p className="cr-subtitle">Curated stories from photographers, chefs, and explorers living beautifully.</p>
      </div>
 
      {/* Carousel */}
      <div className="cr-wrapper">
        <button
          className="cr-arrow cr-arrow-left"
          onClick={() => goTo(current - 1)}
          disabled={current === 0}
          aria-label="Previous"
        >
          ←
        </button>
 
        <div
          className="cr-viewport"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
        >
          <div
            ref={trackRef}
            className={`cr-track ${isDragging ? "dragging" : ""}`}
            style={{ transform: `translateX(${translateX})` }}
          >
            {cards.map((c, i) => {
              const isCenter = i === current + Math.floor(visible / 2);
              return (
                <div
                  key={i}
                  className={`cr-card ${isCenter ? "center" : ""}`}
                  style={{ width: cardWidthPct, flexShrink: 0 }}
                >
                  <div className="cr-card-img-wrap">
                    <img className="cr-card-img" src={c.img} alt={c.title} loading="lazy" draggable={false} />
                    <span
                      className="cr-category"
                      style={{ background: c.catColor, color: c.catText }}
                    >
                      {c.category}
                    </span>
                  </div>
                  <div className="cr-card-body">
                    <div className="cr-card-meta">
                      <span className="cr-card-date">{c.date}</span>
                      <span className="cr-card-rating">★ {c.rating}</span>
                    </div>
                    <div className="cr-card-title">{c.title}</div>
                    <div className="cr-card-desc">{c.desc}</div>
                    <div className="cr-card-desc" ><Link to="/products" style={{textDecoration:"none",color:"green",textAlign:"center"}}>Read More</Link></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
 
        <button
          className="cr-arrow cr-arrow-right"
          onClick={() => goTo(current + 1)}
          disabled={current >= maxIndex}
          aria-label="Next"
        >
          →
        </button>
      </div>
 
      {/* Controls */}
      <div className="cr-controls">
        <span className="cr-counter">
          <span>{String(current + 1).padStart(2, "0")}</span>/{String(maxIndex + 1).padStart(2, "0")}
        </span>
        <div className="cr-dots">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              className={`cr-dot ${i === current ? "active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <span className="cr-counter" style={{ opacity: 0, pointerEvents: "none" }}>00/00</span>
      </div>
      </div>
        <div className="logo-track-wrap">
  <div className="logo-track">
    {logos.map((l, i) => (
      <div className="logo-item" key={i}>
        <div className="logo-img-box">
          <img
            src={l.img}
            alt={l.name}
            style={{
              width: "110px",
              height: "54px",
              objectFit: "contain",
            }}
          />
        </div>

        <span className="logo-item-name">{l.name}</span>
      </div>
    ))}
  </div>
</div>
    </>
  );
};

export default ProductDetail;
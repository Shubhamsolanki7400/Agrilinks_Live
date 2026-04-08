import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/About.css";
import phoneimage from "../assets/images/mobile2.png";

const accordionData = [
  {
    id: 1,
    title: "SPEED & SECURITY",
    content:
      "Agrilinks ensures lightning-fast trade execution with strong protection. From instant market rate access to secure payments and legally-backed transactions, Agrilinks delivers a seamless and safe trading experience—anytime, anywhere in India.",
  },
  {
    id: 2,
    title: "REAL TIME INFORMATION",
    content:
      "Stay ahead with real-time market data. Agrilinks provides instant access to live prices across India, ensuring fully informed trading decisions with zero delays and 100% transparency.",
  },
  {
    id: 3,
    title: "GUIDANCE & EXPERTISE",
    content:
      "Expert guidance at every step. Agrilinks offers trusted support and industry insights to help you navigate trading, transportation, payments, and legal processes with confidence.",
  },
  {
    id: 4,
    title: "LOW BROKERAGE",
    content:
      "Maximize your profits with minimal costs. Agrilinks offers the lowest and single brokerage fee across all products, making trading affordable and transparent.",
  },
  {
    id: 5,
    title: "TRADING EASE PLATFORM",
    content:
      "Agrilinks simplifies agricultural trading by offering a fast, transparent, and user-friendly digital marketplace that connects Traders and Millers directly, making transactions easier and more efficient.",
  },
  {
    id: 6,
    title: "REMOVE LANGUAGE BARRIER",
    content:
      "Agrilinks removes language barriers by providing a user-friendly platform with multilingual support, enabling farmers and traders from diverse linguistic backgrounds to communicate easily and access market opportunities without language constraints.",
  },
];

const styles = {
  page: {
    fontFamily: "'Segoe UI', system-ui, sans-serif",
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "60px 24px",
  },
  btn:{
 padding: "10px 20px",
      background: "#2e7d32",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      width:"100%",
      maxWidth:"fit-content",
      display:"flex",
      margin:"0 auto",
      marginBottom:"20px"
  },
  heading: {
    textAlign: "center",
    fontSize: "clamp(20px, 3vw, 28px)",
    fontWeight: 700,
    color: "#1a1a1a",
    marginBottom: "48px",
    lineHeight: 1.4,
  },
  container: {
    display: "flex",
    alignItems: "center",
    gap: "60px",
    flexWrap: "wrap",
  },
  imageCol: {
    flex: "0 0 auto",
    width: "100%",
    maxWidth: "320px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    maxWidth: "300px",
    height: "auto",
    display: "block",
    mixBlendMode: "multiply",
    minWidth: "500px",
  },
  accordionCol: {
    flex: 1,
    minWidth: "280px",
  },
  accItem: {
    borderBottom: "1px solid #e0e0e0",
  },
  accHeader: {
    width: "100%",
    background: "none",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px 0",
    textAlign: "left",
    gap: "12px",
  },
  accTitle: {
    fontSize: "18px",
    fontWeight: 700,
    letterSpacing: "0.07em",
    transition: "color 0.2s",
  },
  accContent: {
    fontSize: "16px",
    color: "#555",
    lineHeight: 1.8,
    margin: 0,
    padding: "0 0 20px 0",
  },
};

const AccordionItem = ({ item, isOpen, onToggle }) => {
  const contentRef = useRef(null);

  return (
    <div style={styles.accItem}>
      <button style={styles.accHeader} onClick={onToggle}>
        <span
          style={{
            ...styles.accTitle,
            color: isOpen ? "#1b5e20" : "#1a1a1a",
          }}
        >
          {item.title}
        </span>

        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke={isOpen ? "#2e7d32" : "#888"}
          strokeWidth="2.5"
          strokeLinecap="round"
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
            flexShrink: 0,
          }}
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>

      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen
            ? `${contentRef.current?.scrollHeight}px`
            : "0px",
          opacity: isOpen ? 1 : 0,
          overflow: "hidden",
          transition: "max-height 0.4s ease-in-out, opacity 0.3s ease",
        }}
      >
        <p style={styles.accContent}>{item.content}</p>
      </div>
    </div>
  );
};

const AboutDetail = () => {
  const [openId, setOpenId] = useState(1);

  return (
    <>
      <section className="hero">
        <div style={styles.page}>
          <h2 style={styles.heading}>
            Streamline Operations, Coordinate Better, & Deliver Faster
          </h2>

          <div style={styles.container}>
            {/* LEFT IMAGE */}
            <div style={styles.imageCol}>
              <img
                src={phoneimage}
                alt="Agrilinks App"
                style={styles.image}
              />
            </div>

            {/* RIGHT ACCORDION */}
            <div style={styles.accordionCol}>
              {accordionData.map((item) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isOpen={openId === item.id}
                  onToggle={() =>
                    setOpenId(openId === item.id ? null : item.id)
                  }
                />
              ))}
            </div>
          </div>
           <Link style={{textDecoration:"none"}} to="/about"><button style={styles.btn}>Know More</button></Link>
        </div>
       
      </section>
    </>
  );
};

export default AboutDetail;
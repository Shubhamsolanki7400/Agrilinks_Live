import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import phoneimage from "../assets/images/mobile1.png";
const About = () => {
  const width = useWindowWidth();
  const isMobile = width < 768;
  const isTablet = width < 1024;
  function useWindowWidth() {
    const [width, setWidth] = useState(
      typeof window !== "undefined" ? window.innerWidth : 1024,
    );
    useEffect(() => {
      const handler = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handler);
      return () => window.removeEventListener("resize", handler);
    }, []);
    return width;
  }

  const whyPoints = [
    {
      title: "Deep Agro Export Expertise",
      desc: "AgriLink brings strong experience in sourcing, quality control, and global trade of spices, dry fruits, oilseeds, and peanuts.",
    },
    {
      title: "Strong Supply Chain Network",
      desc: "We work directly with farmers, processors, and certified units to ensure consistent quality, traceability, and timely delivery.",
    },
    {
      title: "Global Standards & Compliance",
      desc: "All products are processed and packed as per international standards with proper certifications for smooth export operations.",
    },
    {
      title: "Reliable & Transparent Partnerships",
      desc: "At AgriLink, we focus on long-term relationships by offering honest pricing, clear communication, and dependable service.",
    },
  ];

  const whyUs = [
    {
      label: "Direct Sourcing",
      sub: "No middlemen. Straight from farm to you.",
      svg: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <circle cx="14" cy="14" r="13" stroke="#4a7c2f" strokeWidth="1.2" />
          <path
            d="M8 14.5l4 4 8-8"
            stroke="#4a7c2f"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      label: "Lowest Prices",
      sub: "Best market rates on every product category.",
      svg: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <rect
            x="2"
            y="6"
            width="24"
            height="16"
            rx="3"
            stroke="#4a7c2f"
            strokeWidth="1.2"
          />
          <path
            d="M8 14h12M14 10v8"
            stroke="#4a7c2f"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      label: "Grade A Quality",
      sub: "Cleaned, sorted, and quality-tested stock.",
      svg: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path
            d="M14 3l2.8 8.5H25l-7 5.1 2.7 8.4L14 20l-6.7 5 2.7-8.4-7-5.1h8.2z"
            stroke="#4a7c2f"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      label: "Fast Delivery",
      sub: "Pan-India shipping with quick turnaround.",
      svg: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <circle cx="14" cy="14" r="11" stroke="#4a7c2f" strokeWidth="1.2" />
          <path
            d="M14 8v6l3.5 3.5"
            stroke="#4a7c2f"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      label: "Bulk Friendly",
      sub: "Special rates for distributors and wholesalers.",
      svg: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path
            d="M5 22l4-4m0 0l6-9 5 3-7 8m-4-2l3-3"
            stroke="#4a7c2f"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="20" cy="8" r="4" stroke="#4a7c2f" strokeWidth="1.2" />
        </svg>
      ),
    },
  ];

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

  const styles = {
    section: {
      padding: "60px 20px",
      background: "#f9f9f9",
    },

    container: {
      maxWidth: "1100px",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "40px",
      flexWrap: "wrap", // makes it responsive
    },

    textCol: {
      flex: 1,
      minWidth: "280px",
    },

    heading: {
      fontSize: "30px",
      fontWeight: "700",
      marginBottom: "16px",
      color: "#1a1a1a",
    },

    desc: {
      fontSize: "20px",
      lineHeight: "1.7",
      color: "#555",
      marginBottom: "16px",
    },

    btn: {
      padding: "10px 20px",
      background: "#2e7d32",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
    },

    imageCol: {
      flex: 1,
      minWidth: "280px",
      textAlign: "center",
    },

    image: {
      width: "100%",
      maxWidth: "350px",
      height: "auto",
    },
  };

  return (
    <>
      <div
        className="services-banner"
        style={{
          backgroundImage: `url(${require("../../src/assets/images/Aboutusbanner.jpg")})`,
        }}
      >
        <div className="banner-overlay"></div>
        <h1 className="banner-title">About us</h1>
      </div>

      <section style={styles.section}>
        <div style={styles.container}>
          {/* LEFT TEXT */}
          <div style={styles.textCol}>
            <h2 style={styles.heading}>About Us</h2>
            <p style={styles.desc}>
              Mateshwari Agrilink Pvt Ltd is India’s first platform for trading agricultural
              commodities. “Dalal Chanchaldas and Sons was established in 1976
              by the late Shri Chanchaldas Hablani Ji. Now the Company has been
              led by Dheeraj Hablani, For the past 20 years. The company now
              serves about 700 clients in India, Primarily Grain and Pulse
              Importers, Exporters, Millers, and Traders.
            </p>

            <p style={styles.desc}>
              Last Year Company
              Launched New App Called “Agrilinks”.Which is India’s First
              Platform for Trading Agriculture Commodities with Agrilinks,
              Buyers & Sellers trade with Complete Transparency on the App,
              Where prices Can be Easily Checked, this App offers Additional
              Features that can be explored by Downloading it.
            </p>

          </div>

          {/* RIGHT IMAGE */}
          <div style={styles.imageCol}>
            <img src={phoneimage} alt="About Agrilinks" style={styles.image} />
          </div>
        </div>
      </section>
      <div
        style={{
          background: "#fff",
          borderTop: "0.5px solid #e0e0d8",
          borderBottom: "0.5px solid #e0e0d8",
          padding: "36px 32px",
          marginTop: 20,
        }}
      >
        <div>
          <h2 className="section-title mb-5" style={{ textAlign: "center" }}>
            What We<em>Offer</em>
          </h2>
        </div>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 24,
            textAlign: "center",
          }}
        >
          {whyUs.map((w) => (
            <div key={w.label}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: 10,
                }}
              >
                {w.svg}
              </div>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: "#1a1a1a",
                  marginBottom: 4,
                }}
              >
                {w.label}
              </div>
              <div style={{ fontSize: 12, color: "#888", lineHeight: 1.5 }}>
                {w.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
      {isMobile ? (
        /* MOBILE: stacked */
        <div>
          <div
            style={{
              background: BASE.green,
              padding: "56px 24px 48px",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -40,
                left: -40,
                width: 120,
                height: 120,
                borderRadius: "50%",
                border: "1px solid rgba(168,217,108,0.15)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: -20,
                right: -20,
                width: 80,
                height: 80,
                borderRadius: "50%",
                border: "1px solid rgba(168,217,108,0.1)",
              }}
            />
            <span
              style={{
                fontSize: 10,
                letterSpacing: 3,
                color: BASE.greenLight,
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              Who We Are
            </span>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 36,
                color: BASE.white,
                lineHeight: 1.2,
                margin: "14px 0 20px",
                fontWeight: 600,
              }}
            >
              Your Trusted
              <br />
              <em style={{ color: BASE.greenLight }}>Agricultural</em> Agent
            </h2>
            <p
              style={{
                fontSize: 14,
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.8,
                fontWeight: 300,
                maxWidth: 340,
                margin: "0 auto",
              }}
            >
              For over a decade, bridging fertile farms and your table — finest
              pulses, seeds, dry fruits, and spices at fair prices.
            </p>
          </div>
          <div style={{ background: BASE.cream, padding: "40px 24px" }}>
            <p
              style={{
                fontSize: 12,
                letterSpacing: 2,
                color: BASE.gold,
                textTransform: "uppercase",
                fontWeight: 500,
                marginBottom: 16,
              }}
            >
              Our Story
            </p>
            <p
              style={{
                fontSize: 14,
                color: BASE.text,
                lineHeight: 1.9,
                marginBottom: 16,
                fontWeight: 300,
              }}
            >
              We started as a small family-run trading business in the heartland
              of India. Today we supply premium-grade commodities to retailers,
              distributors, and households across the country.
            </p>
            <p
              style={{
                fontSize: 14,
                color: BASE.text,
                lineHeight: 1.9,
                fontWeight: 300,
                marginBottom: 24,
              }}
            >
              Every batch is hand-selected. Every price is fair. Every
              relationship is built on trust.
            </p>
            <div
              style={{ borderLeft: `3px solid ${BASE.gold}`, paddingLeft: 18 }}
            >
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 18,
                  fontStyle: "italic",
                  color: BASE.greenMid,
                  lineHeight: 1.5,
                }}
              >
                "From the farm, with honesty."
              </p>
            </div>
          </div>
        </div>
      ) : (
        /* TABLET/DESKTOP: diagonal split */
        <div
          style={{
            position: "relative",
            minHeight: isTablet ? 440 : 520,
            display: "flex",
            alignItems: "stretch",
          }}
        >
          <div
            style={{
              background: BASE.green,
              width: "48%",
              clipPath: "polygon(0 0, 100% 0, 88% 100%, 0 100%)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: isTablet ? "56px 64px 56px 40px" : "72px 72px 72px 48px",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 30,
                left: 30,
                width: 120,
                height: 120,
                borderRadius: "50%",
                border: "1px solid rgba(168,217,108,0.2)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 40,
                right: 60,
                width: 80,
                height: 80,
                borderRadius: "50%",
                border: "1px solid rgba(168,217,108,0.15)",
              }}
            />
            <span
              style={{
                fontSize: 11,
                letterSpacing: 3,
                color: BASE.greenLight,
                textTransform: "uppercase",
                fontWeight: 500,
                marginBottom: 18,
              }}
            >
              Who We Are
            </span>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(28px, 3.5vw, 54px)",
                color: BASE.white,
                lineHeight: 1.15,
                margin: "0 0 24px",
                fontWeight: 600,
              }}
            >
              Your Trusted
              <br />
              <em style={{ color: BASE.greenLight }}>Agricultural</em>
              <br />
              Agent
            </h2>
            <p
              style={{
                fontSize: 14,
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.8,
                maxWidth: 300,
                fontWeight: 300,
              }}
            >
              For over a decade, we have been the bridge between fertile farms
              and your table — finest pulses, seeds, dry fruits, and spices at
              fair prices.
            </p>
            <div style={{ marginTop: 32, display: "flex", gap: 12 }}>
              <div
                style={{
                  width: 48,
                  height: 3,
                  background: BASE.greenLight,
                  borderRadius: 2,
                }}
              />
              <div
                style={{
                  width: 24,
                  height: 3,
                  background: "rgba(168,217,108,0.3)",
                  borderRadius: 2,
                }}
              />
              <div
                style={{
                  width: 12,
                  height: 3,
                  background: "rgba(168,217,108,0.15)",
                  borderRadius: 2,
                }}
              />
            </div>
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: isTablet ? "56px 32px 56px 64px" : "72px 48px 72px 80px",
            }}
          >
            <p
              style={{
                fontSize: 13,
                letterSpacing: 2,
                color: BASE.gold,
                textTransform: "uppercase",
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              Our Story
            </p>
            <p
              style={{
                fontSize: 15,
                color: BASE.text,
                lineHeight: 1.9,
                marginBottom: 20,
                fontWeight: 300,
              }}
            >
              We started as a small family-run trading business in the heartland
              of India. Today we supply premium-grade commodities to retailers,
              distributors, and households across the country.
            </p>
            <p
              style={{
                fontSize: 15,
                color: BASE.text,
                lineHeight: 1.9,
                fontWeight: 300,
              }}
            >
              Every batch is hand-selected. Every price is fair. Every
              relationship is built on trust.
            </p>
            <div
              style={{
                marginTop: 32,
                borderLeft: `3px solid ${BASE.gold}`,
                paddingLeft: 20,
              }}
            >
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 20,
                  fontStyle: "italic",
                  color: BASE.greenMid,
                  lineHeight: 1.5,
                }}
              >
                "From the farm, with honesty."
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Why Choose Us */}
      <section className="section why-section">
        <div className="why-grid">
          <div className="why-text">
            <div className="section-head">
              <div className="section-eyebrow">
                <span className="eyebrow-line" />
                Why Choose Us
              </div>
              <h2 className="section-title">
                Built for Serious <em>Exporters</em>
              </h2>
              <p
                className="section-sub"
                style={{ textAlign: "left", marginLeft: 0 }}
              >
                We don't just consult — we walk the entire journey with you,
                from first shipment to established trade routes.
              </p>
            </div>
            <div className="why-list">
              {whyPoints.map((w, i) => (
                <div className="why-item" key={i}>
                  <div className="why-num">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="why-item-text">
                    <h4>{w.title}</h4>
                    <p>{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-section">
        <h2>Ready to Export Premium Agro Products Worldwide?</h2>

        <p>
          Partner with us for high-quality spices, dry fruits, oilseeds, and
          peanuts. We help global buyers and importers source trusted Indian
          products with consistent quality and competitive pricing.
        </p>

        <div className="cta-btns">
          <Link to="/contact">
            <button className="btn-cta-white">Get in Touch</button>
          </Link>

          <button
            className="btn-cta-outline"
            onClick={() =>
              window.open("https://calendly.com/your-link", "_blank")
            }
          >
            Schedule a Call
          </button>
        </div>
      </section>
    </>
  );
};

export default About;

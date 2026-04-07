import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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
const Services = () => {
  const width = useWindowWidth();
  const isMobile = width < 768;
  const services = [
    {
      icon: "🌶️",
      iconBg: "#eef6f0",
      iconColor: "#1a5c2a",
      title: "Premium Spices Export",
      desc: "High-quality Indian spices including turmeric, cumin, chilli, and coriander — sourced directly and processed for global export standards.",
      tags: [
        { label: "Spices", bg: "#eef6f0", color: "#1a5c2a" },
        { label: "Export Quality", bg: "#f5f5f5", color: "#5a5a5a" },
      ],
      featured: false,
    },
    {
      icon: "🥜",
      iconBg: "#fdf5e8",
      iconColor: "#c8821a",
      title: "Peanuts & Oilseeds Supply",
      desc: "Reliable supply of bold peanuts, sesame seeds, and other oilseeds with high purity, proper grading, and export-ready packaging.",
      tags: [
        { label: "Oilseeds", bg: "#fdf5e8", color: "#c8821a" },
        { label: "Bulk Supply", bg: "#eef6f0", color: "#1a5c2a" },
      ],
      featured: false,
    },
    {
      icon: "🌍",
      iconBg: "#fff",
      iconColor: "#fff",
      title: "Global Agro Export Solutions",
      desc: "AgriLink connects international buyers with premium Indian agro products. We manage sourcing, quality control, packaging, and global shipping across multiple countries.",
      tags: [
        {
          label: "Export",
          bg: "rgba(255,255,255,0.15)",
          color: "rgba(255,255,255,0.9)",
        },
        {
          label: "B2B",
          bg: "rgba(255,255,255,0.15)",
          color: "rgba(255,255,255,0.9)",
        },
        {
          label: "Global Supply",
          bg: "rgba(255,255,255,0.15)",
          color: "rgba(255,255,255,0.9)",
        },
      ],
      featured: true,
    },
    {
      icon: "🥜",
      iconBg: "#eef2fd",
      iconColor: "#1a4fa8",
      title: "Dry Fruits Trading",
      desc: "Premium dry fruits like almonds, cashews, pistachios, raisins, and figs — carefully selected for quality and freshness.",
      tags: [
        { label: "Dry Fruits", bg: "#eef2fd", color: "#1a4fa8" },
        { label: "Premium Quality", bg: "#f5f5f5", color: "#5a5a5a" },
      ],
      featured: false,
    },
    {
      icon: "📦",
      iconBg: "#fdf5e8",
      iconColor: "#c8821a",
      title: "Packaging & Private Labeling",
      desc: "Customized packaging solutions including bulk export bags and private labeling for international brands and distributors.",
      tags: [
        { label: "Packaging", bg: "#fdf5e8", color: "#c8821a" },
        { label: "Private Label", bg: "#f5f5f5", color: "#5a5a5a" },
      ],
      featured: false,
    },
    {
      icon: "🚚",
      iconBg: "#f7eefb",
      iconColor: "#8a3aaa",
      title: "Logistics & Timely Delivery",
      desc: "Efficient logistics and shipping solutions ensuring safe, timely delivery of goods across international markets.",
      tags: [
        { label: "Logistics", bg: "#f7eefb", color: "#8a3aaa" },
        { label: "On-Time Delivery", bg: "#fdf0ee", color: "#c0392b" },
      ],
      featured: false,
    },
  ];

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

  return (
    <>
      <div
        className="services-banner"
        style={{
          backgroundImage: `url(${require("../../src/assets/images/aboutusbannermain.jpg")})`,
        }}
      >
        <div className="banner-overlay"></div>
        <h1 className="banner-title">Services</h1>
      </div>
      <div
        style={{
          padding: isMobile ? "48px 20px" : "64px 48px",
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        <div className="section-eyebrow" style={{ textAlign: "center" }}>
          <span className="eyebrow-line" />
          WHAT DRIVES US
          <span className="eyebrow-line" />
        </div>
        <h2 className="section-title" style={{ textAlign: "center" }}>
          Our Core<em>Values</em>
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile
              ? "1fr 1fr"
              : "repeat(auto-fit, minmax(200px, 1fr))",
            gap: isMobile ? 14 : 24,
          }}
        >
          {[
            {
              icon: "🌱",
              title: "Farm Fresh",
              desc: "Sourced directly from cultivators — no long cold chains, no compromises.",
            },
            {
              icon: "⚖️",
              title: "Fair Pricing",
              desc: "Transparent rates for everyone, whether 1 kg or 1 tonne.",
            },
            {
              icon: "🤝",
              title: "Trust First",
              desc: "Long-term relationships over short-term profits — always.",
            },
            {
              icon: "🏆",
              title: "Top Grade",
              desc: "Only A-grade, machine-sorted produce leaves our warehouse.",
            },
          ].map((v, i) => (
            <div
              key={i}
              style={{
                background: BASE.white,
                borderRadius: 16,
                padding: isMobile ? "22px 16px" : "32px 24px",
                border: "0.5px solid #e8e8d8",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -20,
                  right: -20,
                  width: 70,
                  height: 70,
                  borderRadius: "50%",
                  background: BASE.greenPale,
                  opacity: 0.6,
                }}
              />
              <div style={{ fontSize: isMobile ? 24 : 28, marginBottom: 12 }}>
                {v.icon}
              </div>
              <div
                style={{
                  fontSize: isMobile ? 13 : 14,
                  fontWeight: 600,
                  color: BASE.dark,
                  marginBottom: 6,
                }}
              >
                {v.title}
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: BASE.muted,
                  lineHeight: 1.7,
                  fontWeight: 300,
                }}
              >
                {v.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
      <section className="section services-section" id="services">
        <div className="section-head">
          <div className="section-eyebrow">
            <span className="eyebrow-line" />
            WHAT WE DO
            <span className="eyebrow-line" />
          </div>
          <h2 className="section-title">
            Comprehensive Trade <em>Services</em>
          </h2>
          <p className="section-sub">
            From certification to market entry — every service your agri-food
            business needs to thrive globally.
          </p>
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <div
              key={i}
              className={`service-card ${s.featured ? "service-featured" : ""}`}
            >
              <div
                className="service-icon-wrap"
                style={{
                  background: s.featured ? "rgba(255,255,255,0.12)" : s.iconBg,
                }}
              >
                <span style={{ fontSize: "1.5rem" }}>{s.icon}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="service-tags">
                {s.tags.map((t, j) => (
                  <span
                    key={j}
                    className="service-tag"
                    style={{
                      background: t.bg,
                      color: t.color,
                      border: `1px solid ${t.color}33`,
                    }}
                  >
                    {t.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <div
        style={{
          background:
            "linear-gradient(135deg, #2d5a1b 0%, #4a7c2f 40%, #3d6b24 100%)",
          padding: "64px 40px 56px",
          textAlign: "center",
        }}
      >
        <span
          style={{
            display: "inline-block",
            background: "rgba(255,255,255,0.15)",
            color: "#c8e6a0",
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: 2,
            textTransform: "uppercase",
            padding: "6px 18px",
            borderRadius: 20,
            border: "1px solid rgba(255,255,255,0.2)",
            marginBottom: 18,
          }}
        >
          Trusted Agricultural Agent
        </span>

        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(28px, 5vw, 46px)",
            fontWeight: 700,
            color: "#fff",
            lineHeight: 1.2,
            marginBottom: 14,
          }}
        >
          Premium Quality.{" "}
          <span style={{ color: "#a8d96c" }}>Unbeatable Prices.</span>
        </h1>

        <p
          style={{
            fontSize: 15,
            color: "rgba(255,255,255,0.75)",
            maxWidth: 520,
            margin: "0 auto 28px",
            lineHeight: 1.7,
            fontWeight: 300,
          }}
        >
          Direct from source to your doorstep — pulses, seeds, dry fruits &
          more. We are your trusted agent for bulk and retail agricultural
          commodities.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            justifyContent: "center",
          }}
        >
          {[
            "100% Natural Products",
            "Bulk Orders Welcome",
            "Pan-India Delivery",
            "Quality Guaranteed",
          ].map((t) => (
            <span
              key={t}
              style={{
                background: "rgba(255,255,255,0.12)",
                color: "#e8f5d0",
                fontSize: 12,
                padding: "5px 14px",
                borderRadius: 20,
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;

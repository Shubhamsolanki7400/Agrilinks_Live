import React, { useState } from "react";
import globalSourcing from '../assets/images/globalsourcingmain.jpg' 
import importExport from '../assets/images/importexportmain.jpg'
import quality from '../assets/images/qualityassurancemain.jpg'
import trend1 from '../assets/images/trendproduct.jpg'
import trend2 from '../assets/images/target.jpg'
import trend3 from '../assets/images/trend3.jpg'
import '../styles/service.css'
import { Link } from "react-router-dom";
const tabs = [
  {
    id: 0,
    label: "Vision",
    tag: "Our Purpose",
    tagBg: "rgba(251,191,36,0.18)",
    tagColor: "#fbbf24",
    accent: "linear-gradient(90deg, #fbbf24, #f59e0b)",
    title: "Global Sourcing",
    desc: "We aim to source the finest pulses, dry fruits, and agro products from trusted origins worldwide, ensuring consistent quality and reliable supply across global markets.",
    bg: globalSourcing,
    meta: [],
    cta: "More",
  },
  {
    id: 1,
    label: "Mission",
    tag: "What We Do",
    tagBg: "rgba(52,211,153,0.15)",
    tagColor: "#34d399",
    accent: "linear-gradient(90deg, #34d399, #10b981)",
    title: "Export & Import Management",
    desc: "We streamline international trade with efficient import and export processes, ensuring timely delivery, proper documentation, and seamless logistics for our global clients.",
    bg: importExport,
    meta: [],
    cta: "More",
  },
  {
    id: 2,
    label: "Impact",
    tag: "Results",
    tagBg: "rgba(248,113,113,0.15)",
    tagColor: "#f87171",
    accent: "linear-gradient(90deg, #f87171, #ef4444)",
    title: "Quality Assurance",
    desc: "We maintain strict quality checks at every stage, ensuring our products meet international standards for purity, freshness, and customer satisfaction.",
    bg: quality,
    meta: [],
    cta: "More",
  },
];

const blogs = [
  {
    img: trend1,
    cat: "Market Trends",
    date: "Mar 18, 2025",
    readTime: "5 min read",
    title: "Consumer Trends in Grain Products: Meeting Demand in a Changing Market",
    excerpt: "How shifting consumer preferences for specialty and organic grains are reshaping procurement strategies across India.",
  },
  {
    img: trend2,
    cat: "Niche Markets",
    date: "Mar 5, 2025",
    readTime: "7 min read",
    title: "Exploring Niche Markets: A Deep Dive into Specialty Grains",
    excerpt: "From amaranth to quinoa — understanding the growing demand for specialty grains and how Indian farmers can capitalise.",
  },
  {
    img: trend3,
    cat: "Trade Insights",
    date: "Feb 22, 2025",
    readTime: "6 min read",
    title: "Spotting Opportunities: Identifying Emerging Markets for Grain Trading",
    excerpt: "Data-driven analysis of export corridors opening up in Southeast Asia and the Middle East for Indian grain exporters.",
  },
];

const ServiceDetail = () => {
    const [active, setActive] = useState(0);

  return (
    <>
      <div className="tabs-root"> 
      {/* Header */}
      <div className="tabs-header">
        <div className="tabs-eyebrow">Our Services</div>
        <h2 className="tabs-title">WHAT <span> WE</span> PROVIDE</h2>
      </div>
 
      {/* Panels */}
      <div className="tabs-container">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab-panel ${active === tab.id ? "active" : ""}`}
            onMouseEnter={() => setActive(tab.id)}
          >
            {/* Background image */}
            <div className="tab-bg" style={{ backgroundImage: `url(${tab.bg})` }} />
 
            {/* Overlays */}
            <div className="tab-overlay" />
            <div className="tab-overlay-bottom" />
 
            {/* Top accent line */}
            <div className="tab-accent" style={{ background: tab.accent }} />
 
            {/* Number */}
            <div className="tab-number">0{tab.id + 1}</div>
 
            {/* Vertical label (collapsed state) */}
            <div className="tab-label-vertical">{tab.label}</div>
 
            {/* Expanded content */}
            <div className="tab-content">
              <div
                className="tab-tag"
                style={{ background: tab.tagBg, color: tab.tagColor, border: `1px solid ${tab.tagColor}33` }}
              >
                {tab.tag}
              </div>
              <div className="tab-content-title">
                {tab.title.split("\n").map((line, i) => <div key={i}>{line}</div>)}
              </div>
              <div className="tab-content-desc">{tab.desc}</div>
              <div className="tab-content-meta">
                {tab.meta.map((m, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
                    {i > 0 && <div className="tab-meta-divider" />}
                    <div className="tab-meta-item">
                      <div className="tab-meta-val" style={{ color: tab.tagColor }}>{m.val}</div>
                      <div className="tab-meta-label">{m.label}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link to='/services'><button className="tab-cta" style={{ borderColor: `${tab.tagColor}44` }}>
                {tab.cta}
                <span className="tab-cta-arrow">→</span>
              </button></Link>
            </div>
          </div>
        ))}
      </div>
 
      <div className="tabs-hint">Hover to explore</div>
    </div>

      <section className="sec blog-sec">
        <div className="sec-head">
          <div className="sec-tag"><span className="sec-tag-line" />Knowledge Hub<span className="sec-tag-line" /></div>
          <h2 className="sec-title">Latest From Our <em>Blog</em></h2>
          <p className="sec-sub">Stay ahead with market insights, trade strategies, and agri-business intelligence from our experts.</p>
        </div>
        <div className="blog-grid">
          {blogs.map((b, i) => (
            <div className="blog-card" key={i}>
              <div className="blog-img-wrap">
                <img className="blog-img" src={b.img} alt={b.title} loading="lazy" />
                <span className="blog-cat">{b.cat}</span>
              </div>
              <div className="blog-body">
                <div className="blog-meta">
                  <span>{b.date}</span>
                  <span className="blog-meta-dot" />
                  <span>{b.readTime}</span>
                </div>
                <div className="blog-title">{b.title}</div>
                <div className="blog-excerpt">{b.excerpt}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
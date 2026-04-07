import 'react-toastify/dist/ReactToastify.css';
import ContactDetail from '../components/ContactDetail';
import { useEffect, useState } from 'react';
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
 
const Contact = () => {
  const width = useWindowWidth();
  const isMobile = width < 768;
 
  const channels = [
    { icon: "📱", method: "WhatsApp", primary: "+91 9993120085", secondary: "Tap to chat instantly", action: "Chat Now", bg: "#e8f5e1", accent: "#25a244", href: "https://wa.me/message/GM6ESJM6AKJQF1" },
    { icon: "📞", method: "Call Us", primary: "+91 9993120085", secondary: "Mon–Sat, 9AM–7PM", action: "Call", bg: "#e8f0fb", accent: "#1a5cbf", href: "tel:+91 9993120085" },
    { icon: "✉️", method: "Email", primary: "Hello@agrilinks.in", secondary: "We reply within 24 hrs", action: "Send Mail", bg: "#fdf0d8", accent: "#c17a1a", href: "mailto:Hello@agrilinks.in" },
  ];

  return (
   <>
    <div
        className="services-banner"
        style={{
          backgroundImage: `url(${require('../../src/assets/images/contactusbanner.jpeg')})`,
        }}
      >
        <div className="banner-overlay"></div>
        <h1 className="banner-title">Contact Us</h1>
      </div>
       <section style={{ background: BASE.cream, fontFamily: "'Outfit', sans-serif" }}>
 
      {/* Header */}
      {/* Channel cards lifted over banner */}
     
      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
        gap: 16,
        maxWidth: 900,
        margin: isMobile ? "-40px 16px 0" : "-48px auto 0",
        padding: isMobile ? 0 : "0 32px",
        position: "relative",
        zIndex: 2,
      }}>
        
        {channels.map((c, i) => (
          <a key={i} href={c.href} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
            <div
              style={{ background: c.bg, border: `1px solid ${c.accent}20`, borderRadius: 18, padding: isMobile ? "24px 20px" : "32px 26px", transition: "transform 0.2s, box-shadow 0.2s", cursor: "pointer" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.1)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div style={{ fontSize: 28, marginBottom: 14 }}>{c.icon}</div>
              <div style={{ fontSize: 10, letterSpacing: 2, color: c.accent, textTransform: "uppercase", fontWeight: 600, marginBottom: 6 }}>{c.method}</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: BASE.dark, marginBottom: 4, wordBreak: "break-all" }}>{c.primary}</div>
              <div style={{ fontSize: 12, color: BASE.muted, marginBottom: 18 }}>{c.secondary}</div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, color: c.accent, border: `1px solid ${c.accent}`, borderRadius: 20, padding: "5px 14px", fontWeight: 500 }}>
                {c.action} →
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
   <ContactDetail/>

   </>
    
  );
}

export default Contact
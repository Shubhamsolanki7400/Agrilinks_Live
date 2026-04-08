import React, { useState } from 'react'
import '../styles/Product.css'
const sections = [
  {
    id: "collect",
    icon: "📋",
    iconBg: "#edf7f0",
    title: "Information We Collect",
    num: "01",
    content: (
      <>
        <p>We may collect personal information from you when you interact with our website or use our services. This includes the following categories of data:</p>
        <ul className="pp-list">
          {[
            ["Contact information", "such as your name, email address, Mobile, and postal address."],
            ["Financial information", "such as payment details required for transaction processing."],
            ["Transaction information", "related to your buying or selling activities on our platform."],
            ["Voluntary information", "any additional details you choose to share with us through forms or communication."],
          ].map(([bold, rest], i) => (
            <li key={i}>
              <span className="pp-list-dot">✓</span>
              <span><strong style={{ color: "var(--ink)", fontWeight: 600 }}>{bold}</strong> {rest}</span>
            </li>
          ))}
        </ul>
        <div className="pp-highlight">
          <span className="pp-highlight-icon">🔒</span>
          We only collect information that is necessary to provide you with our services and improve your experience on the platform.
        </div>
      </>
    ),
  },
  {
    id: "use",
    icon: "⚙️",
    iconBg: "#fdf6ea",
    title: "How We Use Your Information",
    num: "02",
    content: (
      <>
        <p>The information we collect is used strictly to serve you better and operate our platform effectively. Purposes include:</p>
        <ul className="pp-list">
          {[
            ["Providing services", "Delivering and maintaining all platform features you access."],
            ["Processing transactions", "Handling payments, invoices, and financial records securely."],
            ["Communication", "Sending updates, promotions, and service-related notifications."],
            ["Service improvement", "Analysing usage patterns to enhance website performance and features."],
            ["Legal compliance", "Meeting applicable regulatory and legal obligations under Indian law."],
          ].map(([bold, rest], i) => (
            <li key={i}>
              <span className="pp-list-dot">✓</span>
              <span><strong style={{ color: "var(--ink)", fontWeight: 600 }}>{bold}:</strong> {rest}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "security",
    icon: "🛡️",
    iconBg: "#edf7f0",
    title: "Data Security",
    num: "03",
    content: (
      <>
        <p>Mateshwari AgriLinks treats data security as a top priority. We implement appropriate technical and organisational measures to protect your personal information from unauthorised access, disclosure, alteration, or destruction.</p>
        <div className="pp-highlight">
          <span className="pp-highlight-icon">🛡️</span>
          Our security practices are reviewed and updated regularly to align with industry standards and best practices for agricultural and financial data platforms.
        </div>
      </>
    ),
  },
  {
    id: "disclosure",
    icon: "🤝",
    iconBg: "#fdf6ea",
    title: "Disclosure of Your Information",
    num: "04",
    content: (
      <>
        <p>We respect your privacy and do not sell your personal information. We may disclose your data to third parties only in the following limited circumstances:</p>
        <ul className="pp-list">
          {[
            ["With your consent", "When you have explicitly authorised us to share specific information."],
            ["Legal obligations", "When required to comply with applicable laws, regulations, or court orders."],
            ["Rights protection", "To protect the rights, property, or safety of Mateshwari AgriLinks, our users, or others."],
          ].map(([bold, rest], i) => (
            <li key={i}>
              <span className="pp-list-dot">✓</span>
              <span><strong style={{ color: "var(--ink)", fontWeight: 600 }}>{bold}:</strong> {rest}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "thirdparty",
    icon: "🔗",
    iconBg: "#eef3fd",
    title: "Third-Party Links",
    num: "05",
    content: (
      <>
        <p>Our website may contain links to external third-party websites for your convenience and reference. Please be aware that we are not responsible for the privacy practices or content of such external sites.</p>
        <div className="pp-highlight">
          <span className="pp-highlight-icon">⚠️</span>
          We strongly encourage you to review the Privacy Policy of any third-party website before providing your personal information. Your use of third-party websites is entirely at your own discretion.
        </div>
      </>
    ),
  },
  {
    id: "choices",
    icon: "✅",
    iconBg: "#edf7f0",
    title: "Your Choices & Rights",
    num: "06",
    content: (
      <>
        <p>You have important rights regarding your personal information collected by Mateshwari AgriLinks:</p>
        <ul className="pp-list">
          {[
            ["Access", "You may request a copy of the personal data we hold about you."],
            ["Correction", "You have the right to request corrections to inaccurate or incomplete data."],
            ["Deletion", "You may ask us to delete your personal information, subject to legal requirements."],
            ["Opt-out", "You can unsubscribe from promotional communications at any time via the link in our emails."],
          ].map(([bold, rest], i) => (
            <li key={i}>
              <span className="pp-list-dot">✓</span>
              <span><strong style={{ color: "var(--ink)", fontWeight: 600 }}>{bold}:</strong> {rest}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "changes",
    icon: "🔄",
    iconBg: "#fdf6ea",
    title: "Changes to This Policy",
    num: "07",
    content: (
      <>
        <p>Mateshwari AgriLinks reserves the right to update or modify this Privacy Policy at any time to reflect changes in our practices, services, or applicable laws.</p>
        <p>Any revisions will be posted on this page with an updated effective date. We encourage you to review this Policy periodically to stay informed about how we protect your information.</p>
        <div className="pp-highlight">
          <span className="pp-highlight-icon">📅</span>
          This Privacy Policy was last updated on <strong>April 2025</strong>. Continued use of our platform after any changes constitutes your acceptance of the revised Policy.
        </div>
      </>
    ),
  },
];
const Privacy = () => {
   const [openSections, setOpenSections] = useState(new Set(["collect"]));
  const [activeNav, setActiveNav] = useState("collect");
 
  const toggle = (id) => {
    setOpenSections(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
    setActiveNav(id);
  };
 
  const scrollTo = (id) => {
    const el = document.getElementById("pp-sec-" + id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveNav(id);
    setOpenSections(prev => new Set([...prev, id]));
  };

  return (
     <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#f8f9f6" }}> 
      {/* Hero */}
      <div className="pp-hero">
        <div className="pp-shield">🔐</div>
        <h1>Privacy <em>Policy</em></h1>
        <p className="pp-hero-sub">Mateshwari AgriLinks is committed to protecting your personal information with the highest standards of security and transparency.</p>
        <div className="pp-meta-row">
          <span className="pp-meta-pill">📅 Effective: April 2025</span>
          <span className="pp-meta-pill">📍 Indore, Madhya Pradesh</span>
          <span className="pp-meta-pill">🇮🇳 Governed by Indian Law</span>
        </div>
      </div>
 
      {/* Layout */}
      <div className="pp-layout">
 
        {/* Sidebar */}
        <aside className="pp-sidebar">
          <div className="sidebar-box">
            <div className="sidebar-head">
              <span className="sidebar-head-icon">📑</span>
              <span className="sidebar-head-txt">Quick Navigation</span>
            </div>
            <div className="sidebar-nav">
              {sections.map((s, i) => (
                <div key={s.id}>
                  <div
                    className={`sidebar-link ${activeNav === s.id ? "active" : ""}`}
                    onClick={() => scrollTo(s.id)}
                  >
                    <span className="sidebar-dot" />
                    <span>{s.num}. {s.title}</span>
                  </div>
                  {i < sections.length - 1 && i % 3 === 2 && <div className="sidebar-divider" />}
                </div>
              ))}
            </div>
          </div>
 
          <div className="sidebar-contact-box">
            <div className="scb-title">Need Help?</div>
            <a className="scb-item" href="mailto:hello@agrilinks.in">
              <div className="scb-icon" style={{ background: "#edf7f0" }}>📧</div>
              <div>
                <div className="scb-label">Email Us</div>
                <div className="scb-val">hello@agrilinks.in</div>
              </div>
            </a>
            <a className="scb-item" href="tel:07314000085">
              <div className="scb-icon" style={{ background: "#fdf6ea" }}>📞</div>
              <div>
                <div className="scb-label">Call Us</div>
                <div className="scb-val">+91 9993120085</div>
              </div>
            </a>
          </div>
        </aside>
 
        {/* Content */}
        <div className="pp-content">
 
          {/* Intro */}
          <div className="pp-intro">
            <p>
              <strong>Mateshwari AgriLinks</strong> is committed to protecting the privacy and security of your personal information.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              By using our platform, you agree to the terms described in this Policy.
            </p>
          </div>
 
          {/* Accordion sections */}
          {sections.map(s => {
            const isOpen = openSections.has(s.id);
            return (
              <div className="pp-section" key={s.id} id={"pp-sec-" + s.id}>
                <div className="pp-sec-header" onClick={() => toggle(s.id)}>
                  <div className="pp-sec-icon" style={{ background: s.iconBg }}>
                    {s.icon}
                  </div>
                  <div className="pp-sec-title">{s.title}</div>
                  <span className="pp-sec-num">{s.num}</span>
                  <span className={`pp-chevron ${isOpen ? "open" : ""}`}>▾</span>
                </div>
                <div className={`pp-sec-body ${isOpen ? "open" : ""}`}>
                  {s.content}
                </div>
              </div>
            );
          })}
 
          {/* Contact CTA */}
          <div className="pp-contact-section">
            <div className="pp-contact-text">
              <h3>Have Questions About Your Privacy?</h3>
              <p>Our team is happy to clarify any aspect of this policy or your data rights.</p>
            </div>
            <div className="pp-contact-links">
              <a className="pp-contact-btn" href="mailto:hello@agrilinks.in">
                <span className="pp-contact-btn-icon">📧</span>
                hello@agrilinks.in
              </a>
              <a className="pp-contact-btn" href="tel:07314000085">
                <span className="pp-contact-btn-icon">📞</span>
               +91 9993120085
              </a>
            </div>
          </div>
 
        </div>
      </div>
    </div>
  )
}

export default Privacy
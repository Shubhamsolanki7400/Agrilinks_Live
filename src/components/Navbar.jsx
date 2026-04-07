import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/images/agrilogo.png";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">

        {/* Logo */}
        <NavLink to="/" className="logo">
          <img src={logo} alt="Logo" className="logo-image" />
        </NavLink>

        {/* Hamburger */}
        <div
          className={`hamburger ${isMenuOpen ? "open" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Nav Links */}
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          
          <li>
            <NavLink to="/" end onClick={() => setIsMenuOpen(false)}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/products" onClick={() => setIsMenuOpen(false)}>
              Products
            </NavLink>
          </li>

          <li>
            <NavLink to="/services" onClick={() => setIsMenuOpen(false)}>
              Services
            </NavLink>
          </li>

          <li>
            <NavLink to="/privacy" onClick={() => setIsMenuOpen(false)}>
              Privacy & Policy
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </NavLink>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/About.css'
import { useInView } from "react-intersection-observer";
const AboutDetail = () => {

  function AnimSection({ children, delay = 0 }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(36px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
  return (
    <>
     <section className="hero">
        <div className="hero-bg-shape" />
        <AnimSection>
          <div className="hero-tag">About Us</div>
          <h1>
            Nourishing World <br />
            with <em>Premium</em><br />
            Goods.
          </h1>
          <p className="hero-sub">
           We specialize in the global trade of premium pulses, dry fruits, and agro products.
Delivering consistent quality and reliability across international markets.
          </p>
          <div className="hero-actions">
            <button style={{borderRadius:"10px", border:"2px solid #3bbf5a",padding:"10px",color:"black",}}><Link to='/about' style={{textDecoration:"none",color:"black",fontWeight:"500"}}>Show More</Link></button>
          </div>
        </AnimSection>
        <div className="hero-scroll">
          <div className="scroll-line" />
          scroll
        </div>
      </section>
   
    </>
  );
};


export default AboutDetail;
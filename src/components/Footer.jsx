import React from "react";
import { Link } from "react-router-dom";
import apple from '../assets/images/appstorepng.png'
import play from '../assets/images/playstore.png'
import logo from '../assets/images/agrilogo.png'
const Footer = () => {
  return (
    <>
      <footer className="footer-section">
        <div className="container">
          <div className="footer-cta pt-5 pb-5">
            <div className="row">
                <div className="logostore" >
                <img src={logo} alt="logo" style={{height:"50px",width:"200px",marginBottom:"20px"}}/>
              </div>
              {/* === Column 1: Address (Unchanged) === */}
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="fas fa-map-marker-alt"></i>
                  <div className="cta-text">
                    <h4>Office Address</h4>
                    <span>
                      204, Bansiwala Tower, Above Morni Sarees, Sapna Sangeeta
                      Road, Indore, Madhya Pradesh, 452001 India
                    </span>
                  </div>
                </div>
                  <div className="playlogostore" >
                <img src={play} alt=""/>
              </div>
               <div className="applelogostore" >
                <img src={apple} alt=""/>
              </div>
              </div>

              {/* === Column 2: Quick Links (NEW POSITION) === */}
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="fas fa-link"></i>{" "}
                  {/* Changed icon to represent links */}
                  <div className="cta-text">
                    <h4>Quick Links</h4>
                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                        flexFlow: "column",
                      }}
                    >
                      <p>
                        <Link
                          to="/"
                          style={{ textDecoration: "none", color: "#5294ea" }}
                        >
                          Home
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/about"
                          style={{ textDecoration: "none", color: "#5294ea" }}
                        >
                          About
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/products"
                          style={{ textDecoration: "none", color: "#5294ea" }}
                        >
                          Products
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/services"
                          style={{ textDecoration: "none", color: "#5294ea" }}
                        >
                          Services
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/contact"
                          style={{ textDecoration: "none", color: "#5294ea" }}
                        >
                          Contact
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/privacy"
                          style={{ textDecoration: "none", color: "#5294ea" }}
                        >
                         Privacy & Policy
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* === Column 3: Mail, Call, and WhatsApp (NEW POSITION) === */}
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="far fa-envelope-open"></i>
                  <div className="cta-text">
                    <h4>Mail us</h4>
                    <span>hello@agrilinks.in</span>

                    {/* --- Phone/WhatsApp Added Below Email --- */}
                    <h4 style={{ marginTop: "15px" }}>Call/WhatsApp</h4>
                    <span>+91 9993120085 </span>
                    {/* --- END Phone/WhatsApp --- */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 text-center text-lg-left">
                <div className="copyright-text">
                  <p>Mateshwari Agrilinks Pvt, Ltd All Right Reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

        
      </footer>
    </>
  );
};

export default Footer;

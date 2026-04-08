import React from 'react';
import '../styles/Banner.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";
const ContactDetail = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast.success("✅ Message sent successfully!");
        form.reset();
      } else {
        toast.error("❌ Failed to send message.");
      }
    } catch (error) {
      toast.error("⚠️ Something went wrong. Try again.");
    }
  };

  return (
    <>
      <div className="cg-root">

        {/* HERO */}
        <div className="cg-hero">
          <div className="cg-hero-tag">Contact Us</div>
          <h1>Let's <em>Talk</em> Business</h1>
          <p>Reach out for product inquiries, partnerships, or just to say hello — we're always happy to connect.</p>
          <div className="cg-wave" />
        </div>

        {/* BODY */}
        <div className="cg-body">

          {/* FORM */}
          <div className="cg-form-card">
            <h3>Send a Message</h3>
            <p>Feel free to contact us anytime. We'll get back to you as soon as we can!</p>

            <form
              onSubmit={handleSubmit}
              action="https://formsubmit.co/hello@agrilinks.in"
              method="POST"
            >

              {/* Hidden Fields */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_subject" value="New Message from Website" />

              <div className="cg-field">
                <label>Your Name</label>
                <input type="text" name="name" required />
              </div>

              <div className="cg-field">
                <label>Email Address</label>
                <input type="email" name="email" placeholder="you@example.in" required />
              </div>

              <div className="cg-field">
                <label>Message</label>
                <textarea name="message" placeholder="Write your message here..." required />
              </div>

              <button type="submit" className="cg-btn">
                Send Message
              </button>
            </form>
          </div>

          {/* INFO */}
        <div className="cg-info-card">
  <div className="cg-info-box">
    <h4>Contact Information</h4>
    <p>Mateshwari Agrilink Pvt Ltd</p>

    <div className="cg-info-item">
      <strong>Mobile:</strong>
      <span>+91 9993120085</span>
    </div>

    <div className="cg-info-item">
      <strong>Email:</strong>
      <span>hello@agrilinks.in</span>
    </div>

    <div className="cg-info-item">
      <strong>Address:</strong>
      <span>
        204, Bansiwala Tower Above Morni Sarees, Sapna Sangeeta Road Indore, Madhya Pradesh, India 452001
      </span>
    </div>

    {/* 🔥 SOCIAL ICONS */}
    <div className="cg-socials">
      <a href="https://www.instagram.com/agrilinks.in/" target="_blank" rel="noreferrer" className="cg-ig">
        <FaInstagram />
      </a>

      <a href="https://wa.me/message/GM6ESJM6AKJQF1" target="_blank" rel="noreferrer" className="cg-wa">
        <FaWhatsapp />
      </a>

      <a href="https://www.linkedin.com/company/109203987/admin/dashboard/" target="_blank" rel="noreferrer" className="cg-li">
        <FaLinkedin />
      </a>
    </div>
  </div>
</div>
        </div>

        {/* MAP */}
        <div className="cg-map-section">
          <iframe
            src="https://www.google.com/maps?q=204,+Bansiwala+Tower,+Sapna+Sangeeta+Road,+Indore&output=embed"
            width="100%"
            height="400"
            loading="lazy"
            title="Location"
          />
        </div>
      </div>

      {/* ✅ TOASTER (IMPORTANT) */}
      <ToastContainer className="my-toast" style={{paddingBottom:"0px !important"}} position="top-center" autoClose={3000} />
    </>
  );
};

export default ContactDetail;
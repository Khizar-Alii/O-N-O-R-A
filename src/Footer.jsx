import React, { useEffect } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>Get New Updates</h4>
        <div className="subscribe-container">
          <input type="email" placeholder="Enter your Email*" />
          <button>Subscribe</button>
        </div>
        <p>Stay informed with our latest news and exclusive content.</p>
      </div>

      <div className="midFooter">
        <h1>ONORA</h1>
        <p>Where Quality Meets Innovation.</p>
        <p>© 2023 Khizar. All Rights Reserved.</p>
        <h4>Follow Us</h4>
        <div className="social-icons">
          <a href="/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      <div className="rightFooter">
        <h4>Our Premier Solutions</h4>
        <Link className="rightFooterLinks" to="/services">Services</Link>
        <Link className="rightFooterLinks" to="/case-studies">Case-Studies</Link>
        <Link className="rightFooterLinks" to="/specialities">Specialities</Link>
        <Link className="rightFooterLinks" to="/contact">Contact</Link>
      </div>
    </footer>
  );
};

export default Footer;

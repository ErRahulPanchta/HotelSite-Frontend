import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP, FaDribbble } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerTop">
        {/* Logo Section */}
        <div className="footerLogo">
          <img src="/Logo.png" alt="Imperial Grand Hotel" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="footerLinks">
          <h4>USEFUL LINKS</h4>
          <ul>
            <li><a href="/">HOME</a></li>
            <li><a href="/about">ABOUT</a></li>
            <li><a href="/service">SERVICE</a></li>
            <li><a href="/room">ROOM</a></li>
          </ul>

          <div className="footerSocialIcons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaPinterestP /></a>
            <a href="#"><FaDribbble /></a>
          </div>
        </div>

        
        <div className="footerSubscribe">
          <h4>SUBSCRIBE</h4>
          <p>Don’t miss to subscribe our news,<br /> kindly fill the form below</p>
          <div className="subscribeInput">
            <input type="email" placeholder="Your Email Here" />
            <button>{'>'}</button>
          </div>
        </div>
      </div>

  
      <div className="footerDivider" />

      
      <div className="footerBottom">
        <p>© 2025 Imperial Grand Hotel. All Rights Reserved.</p>
        <div className="footerPolicies">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

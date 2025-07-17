import React from 'react';
import './Contact.css';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Contact = () => {
  return (
    <div className="contactPage">
      <div className="contactHeader">
        <Navbar />
        <div className="headerLeft">
          <h4>CONTACT US</h4>
          <h2>Get In Touch<br />With Us</h2>
        </div>
      </div>




      <div className="contactFormBox">
        <form>
          <label>Name</label>
          <input type="text" placeholder="Your Name Here" />
          <label>Email</label>
          <input type="email" placeholder="Your Email Here" />
          <label>Message</label>
          <textarea placeholder="Your Message Here" />
          <button type="submit">
            Check Availability <span style={{ marginLeft: 'auto' }}>→</span>
          </button>
        </form>
      </div>
      <div className="mainSection">
        <div className="mapBox">
          <iframe
            title="Imperial Grand Hotel Location"
            src="https://maps.google.com/maps?q=1250+West+6th+Ave+New+York+NY+10036&t=&z=13&ie=UTF8&iwloc=&output=embed"
            allowFullScreen
          />
        </div>

        <div className="contactDetails">
          <div className="line"></div>
          <div className="information">

          
          <h5>CONTACT INFO</h5>
          <h2>Contact Us</h2>

          <div className="contactItem">
            <FaEnvelope className="icon" />
            <div>
              <strong>Email Address</strong>
              <p>info@8pixlstudio</p>
            </div>
          </div>
          <div className="contactItem">
            <FaMapMarkerAlt className="icon" />
            <div>
              <strong>Hotel Location</strong>
              <p>1250 West 6th Ave, New York, NY 10036, United States</p>
            </div>
          </div>
          <div className="contactItem">
            <FaPhone className="icon" />
            <div>
              <strong>Phone Number</strong>
              <p>+0123456789</p>
            </div>
          </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;

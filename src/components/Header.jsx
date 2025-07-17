import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import './Header.css';

const Header = () => {
  const location = useLocation();

  let heading = null;

  if (location.pathname === '/service') {
    heading = (
      <div className="headerText">
        <h3 className="subheading">OUR SERVICES</h3>
        <h2 className="mainheading">Introducing Our<br />Best Services</h2>
      </div>
    );
  } else if (location.pathname === '/contact') {
    heading = (
      <div className="headerText">
        <h3 className="subheading">CONTACT US</h3>
        <h2 className="mainheading">Get In Touch<br />With Us</h2>
      </div>
    );
  }

  return (
    <header className="header">
      <Navbar />
      {heading}
    </header>
  );
};

export default Header;

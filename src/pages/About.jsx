

import Footer from '../components/Footer';
import Header from '../components/Header';


const About = () => {
  return (
    <>
      <Header/>
      <div className="aboutPage">
        <div className="aboutHeader">
          <h1>About Us</h1>
          <p>Welcome to our hotel. We aim to deliver the best hospitality experience.</p>
        </div>
        <div className="aboutContent">
          <p>
            The Imperial Grand Hotel is a luxurious destination offering world-class amenities,
            exceptional service, and unforgettable stays. Whether you're here for business or
            leisure, we ensure your visit is memorable.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;

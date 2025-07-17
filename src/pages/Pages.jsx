
import Footer from '../components/Footer';
import Header from '../components/Header';


const Pages = () => {
  return (
    <>
      <Header/>
      <div className="pagesPage">
        <div className="pagesHeader">
          <h1>Our Pages</h1>
          <p>Explore the various sections of our luxury hotel website.</p>
        </div>
        <div className="pagesContent">
          <ul>
            <li>Home</li>
            <li>Rooms & Suites</li>
            <li>Dining</li>
            <li>Spa & Wellness</li>
            <li>Events & Conferences</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Pages;

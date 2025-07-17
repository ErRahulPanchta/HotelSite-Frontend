import './Service.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BookingSection from '../components/BookingSection';
import { FaConciergeBell, FaSpa, FaBuilding, FaUtensils } from 'react-icons/fa';
import { useState } from 'react';
import axios from 'axios'; 

const serviceCards = [
  { title: '', desc: '', icon: null },
  {
    title: 'Room Service',
    desc: 'Enjoy 24/7 room service with delicious menu options delivered to your door.',
    icon: <FaConciergeBell />,
  },
  {
    title: 'Spa & Wellness',
    desc: 'Relax and rejuvenate with our luxury spa and wellness treatments.',
    icon: <FaSpa />,
  },
  { title: '', desc: '', icon: null },
  { title: '', desc: '', icon: null },
  {
    title: 'Conference Hall',
    desc: 'Spacious and well-equipped for business meetings or events.',
    icon: <FaBuilding />,
  },
  {
    title: 'Fine Dining',
    desc: 'Experience gourmet meals at our in-house restaurant with world-class chefs.',
    icon: <FaUtensils />,
  },
  { title: '', desc: '', icon: null },
];

const Service = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [buttonText, setButtonText] = useState('');
  const [buttonLink, setButtonLink] = useState('');
  const [ctaButtons, setCtaButtons] = useState([]);

  const [isEditing, setIsEditing] = useState(false);
  const [loremText, setLoremText] = useState(
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eius quae laborum ea consequatur quidem, et placeat hic eaque deserunt, odit vel iste.'
  );

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      const response = await axios.post('http://localhost:8080/update-section', {
        component: 'ServicePage',
        field: 'lorem23',
        value: loremText,
      });

      if (response.status === 200) {
        alert('Content updated successfully!');
        setIsEditing(false);
      } else {
        alert('Failed to update content.');
      }
    } catch (error) {
      console.error('Error saving content:', error);
      alert('Server error while saving.');
    }
  };

  const handleAddButtonClick = () => {
    setIsFormVisible(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!buttonText.trim() || !buttonLink.trim()) {
      alert('Please fill in all fields');
      return;
    }

    const newButton = {
      text: buttonText,
      link: buttonLink,
    };

    setCtaButtons([...ctaButtons, newButton]);
    setButtonText('');
    setButtonLink('');
    setIsFormVisible(false);
  };

  return (
    <div className="servicePage">
      <header className="serviceHeader">
        <Navbar />
        <div className="serviceHeaderText">
          <div className="lineH"></div>
          <h4>OUR SERVICES</h4>
          <h2>Introducing Our Best Services</h2>
        </div>

        <div className="addButtonWrapper">
          <button onClick={handleAddButtonClick} className="addButton">
            + Add Button
          </button>
        </div>

        {isFormVisible && (
          <form onSubmit={handleFormSubmit} className="ctaForm">
            <label htmlFor="buttonText">Button Text</label>
            <input
              type="text"
              id="buttonText"
              placeholder="e.g., Call Us"
              value={buttonText}
              onChange={(e) => setButtonText(e.target.value)}
              required
            />

            <label htmlFor="buttonLink">Button Link</label>
            <input
              type="text"
              id="buttonLink"
              placeholder="e.g., tel:9876543210"
              value={buttonLink}
              onChange={(e) => setButtonLink(e.target.value)}
              required
            />

            <button type="submit" className="submitCtaButton">Add CTA</button>
          </form>
        )}

        <div className="ctaButtonsDisplay">
          {ctaButtons.map((btn, index) => (
            <a href={btn.link} target="_blank" rel="noopener noreferrer" key={index} className="ctaButtonItem">
              {btn.text}
            </a>
          ))}
        </div>
      </header>

      <div className="mainContent">
        <section className="amenitiesIntro">
          <div className="serviceText">
            <div className="line"></div>
            <h2 className="mainH">Introducing our services</h2>
            <h1>Amenities That You <br />Can Enjoy</h1>
          </div>

          <div className="lorem23">
            {isEditing ? (
              <>
                <textarea
                  className="loremEditBox"
                  value={loremText}
                  onChange={(e) => setLoremText(e.target.value)}
                />
                <button onClick={handleSaveClick} className="saveEditBtn">Save</button>
              </>
            ) : (
              <p onClick={handleEditClick} title="Click to edit">{loremText}</p>
            )}
          </div>
        </section>

        <section className="amenitiesGrid">
          {serviceCards.map((item, index) => (
            <div className={`amenityCard ${item.title ? 'dark' : ''}`} key={index}>
              {item.title && (
                <>
                  <div className="textContent">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                    <a href="#">Learn More →</a>
                  </div>
                  <div className="iconRight">{item.icon}</div>
                </>
              )}
            </div>
          ))}
        </section>
      </div>

      <BookingSection />
      <Footer />
    </div>
  );
};

export default Service;

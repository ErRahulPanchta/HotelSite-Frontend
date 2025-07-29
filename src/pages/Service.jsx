import './Service.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BookingSection from '../components/BookingSection';
import { FaConciergeBell, FaSpa, FaBuilding, FaUtensils } from 'react-icons/fa';
import { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import AddButtonForm from '../components/AddButtonForm';
import coding from "../assets/coding.webp";

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
  const [isEditing, setIsEditing] = useState(false);
  const [image, setImage] = useState(null);
  const [loremText, setLoremText] = useState(
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eius quae laborum ea consequatur quidem, et placeat hic eaque deserunt, odit vel iste.'
  );

  const fileInput = useRef(null);

  useEffect(() => {
    const savedImage = localStorage.getItem("serviceImage");
    if (savedImage) {
      setImage(savedImage);
    }
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      const response = await axios.post("https://growthzybackend.onrender.com/update-section", {
        component: "ServicePage",
        field: "lorem23",
        value: loremText,
      });

      if (response.status === 200) {
        alert("Content updated successfully!");
        setIsEditing(false);
      } else {
        alert("Failed to update content.");
      }
    } catch (error) {
      console.error("Error saving content:", error);
      alert("Server error while saving.");
    }
  };

  const handleImageClick = () => {
    fileInput.current.click();
  };

  const handleNewImage = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const formData = new FormData();
      formData.append("image", file);
      formData.append("image_id", "lorem23");

      const response = await axios.post("https://growthzybackend.onrender.com/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const uploadedUrl = "https://growthzybackend.onrender.com" + response.data.url;
      setImage(uploadedUrl);
      localStorage.setItem("serviceImage", uploadedUrl);
      console.log("Image uploaded successfully.");
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Image upload failed.");
    }
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
        <AddButtonForm />
      </header>

      <div className="mainContent">
        <section className="amenitiesIntro">
          <div className="serviceText">
            <div className="line"></div>
            <h2 className="mainH">Introducing our services</h2>
            <h1>
              Amenities That You <br />
              Can Enjoy
            </h1>
          </div>

          <div>
            <img
              src={image || coding}
              alt="Preview"
              onClick={handleImageClick}
              style={{ cursor: "pointer" }}
            />
            <input
              type="file"
              name="image"
              id="image"
              ref={fileInput}
              onChange={handleNewImage}
              hidden
              accept="image/*"
            />
          </div>

          <div className="lorem23">
            {isEditing ? (
              <>
                <textarea
                  className="loremEditBox"
                  value={loremText}
                  onChange={(e) => setLoremText(e.target.value)}
                />
                <button onClick={handleSaveClick} className="saveEditBtn">
                  Save
                </button>
              </>
            ) : (
              <p onClick={handleEditClick} title="Click to edit">
                {loremText}
              </p>
            )}
          </div>
        </section>

        <section className="amenitiesGrid">
          {serviceCards.map((item, index) => (
            <div
              className={`amenityCard ${item.title ? "dark" : ""}`}
              key={index}
            >
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

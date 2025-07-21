import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import "./AddButtonForm.css";

const AddButtonForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [buttons, setButtons] = useState([]);
  const [formData, setFormData] = useState({
    page: "Home",
    btnText: "",
    color: "#1a1e95",
    btnStyle: "fill",
    btnSize: "medium",
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleAddClick = () => {
    setFormData({
      page: "Home",
      btnText: "",
      color: "#1a1e95",
      btnStyle: "fill",
      btnSize: "medium",
    });
    setEditIndex(null);
    setShowForm(true);
  };

  const handleSave = () => {
    if (!formData.btnText.trim()) return alert("Button text is required!");

    if (editIndex !== null) {
      const updatedButtons = [...buttons];
      updatedButtons[editIndex] = formData;
      setButtons(updatedButtons);
    } else {
      setButtons([...buttons, formData]);
    }

    setShowForm(false);
    setEditIndex(null);
  };

  const handleEdit = (index) => {
    setFormData(buttons[index]);
    setEditIndex(index);
    setShowForm(true);
  };

  const handleDelete = () => {
    if (editIndex !== null) {
      const updatedButtons = buttons.filter((_, idx) => idx !== editIndex);
      setButtons(updatedButtons);
      setEditIndex(null);
      setShowForm(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="addButtom">
      <button className="btn" onClick={handleAddClick}>+ Add Button</button>

      {showForm && (
        <form className="addBtnForm" onSubmit={(e) => e.preventDefault()}>
          <div className="formHeader">
            <h1>Link Button to page or URL</h1>
            <h2>You can select any specific page</h2>
            <select name="page" value={formData.page} onChange={handleChange}>
              <option value="/">Home</option>
              <option value="/about">About</option>
              <option value="/contact">Contact</option>
              <option value="/service">Service</option>
              <option value="/pages">Pages</option>
            </select>
          </div>

          <div className="buttonStyle">
            <label>
              <h1>Button Style</h1>
              <h2>Fill with solid color or outline</h2>
              <select name="btnStyle" value={formData.btnStyle} onChange={handleChange}>
                <option value="fill">Fill</option>
                <option value="bordered">Bordered</option>
              </select>
            </label>
          </div>

          <div className="buttonText">
            <label>
              <h1>Button Text</h1>
              <h2>Add call to action text</h2>
              <input
                type="text"
                name="btnText"
                value={formData.btnText}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="buttonColor">
            <label>
              <h1>Color</h1>
              <h2>Button Color</h2>
              <input
                type="color"
                name="color"
                value={formData.color}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="buttonSize">
            <label>
              <h1>Button Size</h1>
              <h2>Size of Button</h2>
              <select name="btnSize" value={formData.btnSize} onChange={handleChange}>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </label>
          </div>

          <div className="formActions">
            <button type="button" className="saveBtn" onClick={handleSave}>Save</button>
            {editIndex !== null && (
              <button type="button" className="deleteBtn" onClick={handleDelete}>
                Delete
              </button>
            )}
          </div>
        </form>
      )}

      <div className="renderedButtons">
        {buttons.map((btn, idx) => (
          <div key={idx} className="customBtnWrapper">
            <button
              style={{
                backgroundColor: btn.btnStyle === "fill" ? btn.color : "transparent",
                border: btn.btnStyle === "bordered" ? `2px solid ${btn.color}` : "none",
                color: btn.btnStyle === "fill" ? "#fff" : btn.color,
                fontSize:
                  btn.btnSize === "small"
                    ? "12px"
                    : btn.btnSize === "medium"
                      ? "16px"
                      : "20px",
                padding:
                  btn.btnSize === "small"
                    ? "4px 8px"
                    : btn.btnSize === "medium"
                      ? "6px 12px"
                      : "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={(e) => e.preventDefault()}
            >
              {btn.btnText}
            </button>
            <FaEdit className="editIcon" onClick={() => handleEdit(idx)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddButtonForm;

import React, { useState } from "react";
import "./CardComponent.css"; 

function CardComponent() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`app-container ${darkMode ? "dark" : "light"}`}>
      <div className="toggle-container">
        <label className="switch">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <span className="slider"></span>
        </label>
        <span className="toggle-label">Toggle Theme</span>
      </div>

      <div className="card">
        <img
          className="card-image"
          src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/26739048/2025/1/28/23e86139-f1f7-4f12-b46d-3c4b7286aef51739079968404-MINIONS-X-MINNIE-MOUSE-Women-Yellow--Black-Printed-Skater-Dre-1.jpg"
          alt="Product"
        />
        <h2 className="card-title">Vishudh</h2>
        <p className="card-description">Women Ethnic Motifs Printed Ethnic Empire Top
        </p>
        <button className="card-button">Add to Cart</button>
      </div>
    </div>
  );
}

export default CardComponent;

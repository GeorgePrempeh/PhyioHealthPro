import React, { useState } from "react";
import "./LandingPageSplit.css";

function LandingPageSplit() {
  const images = [
    "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1550831107-cb1b4e94b6b6?auto=format&fit=crop&w=600&q=80"
  ];
  const [selected, setSelected] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    alert("Registration successful!");
    setShowForm(false);
  };
  return (
  <div className="split-container">
    <div className="split-left">
      <h1>PhysioConnect</h1>
      <p className="split-tagline">
        Microblogging for Physiotherapists & Healthcare Professionals
      </p>
      <div className="split-description">
        <p>
          PhysioConnect is a microblogging social network designed exclusively for physiotherapists and healthcare professionals. It offers a dynamic platform to share clinical insights, quick tips, case reflections, and research updates in bite-sized posts.
        </p>
        <p>
          Whether you're looking to exchange ideas, stay current with industry trends, or build a professional community, PhysioConnect makes it easy to connect, collaborate, and grow—one post at a time.
        </p>
      </div>
      <button className="split-btn">Get Started</button>
      <div className="split-register">
        <p className="split-register-comment">
          If you have not registered, please
          <button className="split-register-btn" onClick={() => setShowForm(true)}>register here</button>.
        </p>
        {showForm && (
          <form className="split-register-form" onSubmit={handleRegister}>
            <input
              type="text"
              className="split-register-input"
              placeholder="Full Name"
              required
            />
            <input
              type="email"
              className="split-register-input"
              placeholder="Work Email"
              required
            />
            <input
              type="text"
              className="split-register-input"
              placeholder="ID Number"
              required
            />
            <button type="submit" className="split-btn">Register</button>
          </form>
        )}
      </div>
    </div>
    <div className="split-right">
      <img src={images[selected]} alt="Health Professionals" className="split-img" />
      <div className="split-img-selector">
        {images.map((url, idx) => (
          <button
            key={url}
            className={selected === idx ? "split-img-btn active" : "split-img-btn"}
            onClick={() => setSelected(idx)}
            aria-label={`Select image ${idx + 1}`}
          >
            {idx + 1}
          </button>
        ))}
      </div>
    </div>
    <footer className="split-footer">
      <small>&copy; {new Date().getFullYear()} PhysioConnect. All rights reserved.</small>
    </footer>
  </div>
  );
}


export default LandingPageSplit;

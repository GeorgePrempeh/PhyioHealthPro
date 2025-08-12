import React, { useState } from "react";
import "./LandingPageHero.css";

function LandingPageHero() {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const validCredentials = ["physio@example.com", "123456"];

  const handleAccess = () => {
    if (validCredentials.includes(input.trim())) {
      setMessage("Access granted! Welcome to PhysioConnect.");
    } else {
      setMessage("Error: Wrong details. Please enter a valid work email or ID number.");
    }
  };

  return (
    <div className="hero-container">
      <div className="hero-bg">
        <div className="hero-overlay">
          <header className="hero-header">
            <h1>PhysioConnect</h1>
            <p className="hero-tagline">
              Microblogging for Physiotherapists & Healthcare Professionals
            </p>
          </header>
          <main className="hero-main">
            <p className="hero-description">
              PhysioConnect is a microblogging social network designed exclusively for physiotherapists and healthcare professionals. It offers a dynamic platform to share clinical insights, quick tips, case reflections, and research updates in bite-sized posts.
            </p>
            <p className="hero-description">
              Whether you're looking to exchange ideas, stay current with industry trends, or build a professional community, PhysioConnect makes it easy to connect, collaborate, and grow—one post at a time.
            </p>
            <div className="hero-access">
              <input
                type="text"
                className="hero-input"
                placeholder="Enter your work email or ID number"
                aria-label="Work email or ID number"
                value={input}
                onChange={e => setInput(e.target.value)}
              />
              <button className="hero-btn" onClick={handleAccess}>Access Page</button>
            </div>
            {message && (
              <div className={message.startsWith("Access granted") ? "hero-success" : "hero-error"}>
                {message}
              </div>
            )}
          </main>
          <footer className="hero-footer">
            <small>&copy; {new Date().getFullYear()} PhysioConnect. All rights reserved.</small>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default LandingPageHero;

import React, { useState } from "react";
import "./LandingPageHero.css";

function LandingPageHero() {
  const [input, setInput] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showForm, setShowForm] = useState(false);
  const validCredentials = [
    { user: "physio@lamberthospital.com", pass: "pA55w0rdX" },
    { user: "123456", pass: "pin7A9B" },
    { user: "physio123", pass: "abc123Xy" },
    { user: "physio456@NHS.com", pass: "NHSx456z" },
    { user: "dannyblue@westchospitals.com", pass: "DbLuE789" }
  ];

  const handleAccess = () => {
    const found = validCredentials.find(
      cred => cred.user === input.trim() && cred.pass === password.trim()
    );
    if (found) {
      setMessage("Access granted! Welcome to PhysioConnect.");
    } else {
      setMessage("Error: Wrong details. Please enter a valid work email or ID number.");
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    alert("Registration successful!");
    setShowForm(false);
  };

  return (
    <div className="hero-container">
      <div className="hero-bg">
        <div className="hero-overlay">
          <header className="hero-header">
            <h1>PhysioHealthConnect</h1>
            <p className="hero-tagline">
              Microblogging for Physiotherapists and Healthcare Professionals
            </p>
          </header>
          <main className="hero-main">
            <p className="hero-description">
              PhysioHealthConnect is a microblogging social network designed exclusively for physiotherapists and healthcare professionals. It offers a dynamic platform to share clinical insights, quick tips, case reflections, and research updates in bite-sized posts.
            </p>
            <p className="hero-description">
              Whether you're looking to exchange ideas, stay up to date with industry trends, or build a professional community, PhysioHealthConnect makes it easy to connect, collaborate, and grow — one post at a time.
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
              <input
                type="password"
                className="hero-input"
                placeholder="Password or PIN number"
                aria-label="Password or PIN number"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <button className="hero-btn" onClick={handleAccess}>Access Page</button>
            </div>
            <div className="hero-register">
              <p className="hero-register-comment">
                If you have not registered, please
                <button className="hero-register-btn" onClick={() => setShowForm(true)}>register here</button>.
              </p>
              {showForm && (
                <form className="hero-register-form" onSubmit={handleRegister}>
                  <input
                    type="text"
                    className="hero-register-input"
                    placeholder="Full Name"
                    required
                  />
                  <input
                    type="email"
                    className="hero-register-input"
                    placeholder="Work Email or ID Number"
                    required
                  />
                  <input
                    type="password"
                    className="hero-register-input"
                    placeholder="Create Password (8-12 chars, alphanumeric & special)"
                    required
                    minLength={8}
                    maxLength={12}
                    pattern={'^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+=[]{};\'":\\|,.<>/?-]).{8,12}$'}
                    title="Password must be 8-12 characters, include letters, numbers, and at least one special character."
                  />
                  <button type="submit" className="hero-btn">Register</button>
                </form>
              )}
            </div>
            {message && (
              <div className={message.startsWith("Access granted") ? "hero-success" : "hero-error"}>
                {message}
              </div>
            )}
          </main>
          <footer className="hero-footer">
            <small>&copy; {new Date().getFullYear()} PhysioHealthConnect. All rights reserved.</small>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default LandingPageHero;

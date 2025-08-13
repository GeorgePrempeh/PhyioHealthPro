import React from "react";
import "./LandingPage.css";

const LandingPage = () => (
  <div className="landing-container">
    <header className="landing-header">
      <h1>PhysioHealthConnect</h1>
      <p className="landing-tagline">
        Microblogging for Physiotherapists and Healthcare Professionals
      </p>
    </header>
    <main className="landing-main">
      <section className="landing-description">
        <p>
          PhysioHealthConnect is a microblogging social network designed exclusively for physiotherapists and healthcare professionals. It offers a dynamic platform to share clinical insights, quick tips, case reflections, and research updates in bite-sized posts
        </p>
        <p>
          Whether you're looking to exchange ideas, stay up to date with industry trends, or build a professional community, PhysioHealthConnect makes it easy to connect, collaborate, and grow — one post at a time.
        </p>
      </section>
      <section className="landing-actions">
        <button className="landing-btn">Get Started</button>
        <button className="landing-btn secondary">Learn More</button>
      </section>
    </main>
    <footer className="landing-footer">
      <small>&copy; {new Date().getFullYear()} PhysioConnect. All rights reserved.</small>
    </footer>
  </div>
);

export default LandingPage;

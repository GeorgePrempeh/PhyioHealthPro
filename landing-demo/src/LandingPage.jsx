import React from "react";
import "./LandingPage.css";

const LandingPage = () => (
  <div className="landing-container">
    <header className="landing-header">
      <h1>PhysioConnect</h1>
      <p className="landing-tagline">
        Microblogging for Physiotherapists & Healthcare Professionals
      </p>
    </header>
    <main className="landing-main">
      <section className="landing-description">
        <p>
          PhysioConnect is a microblogging social network designed exclusively for physiotherapists and healthcare professionals. It offers a dynamic platform to share clinical insights, quick tips, case reflections, and research updates in bite-sized posts.
        </p>
        <p>
          Whether you're looking to exchange ideas, stay current with industry trends, or build a professional community, PhysioConnect makes it easy to connect, collaborate, and grow—one post at a time.
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

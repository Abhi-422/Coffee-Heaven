// src/pages/About.js
import React from 'react';

function About() {
  return (
    <section className="about">
      <h2>About Coffee Heaven</h2>
      <p>
        At Coffee Heaven, we believe that a great cup of coffee can brighten your day and bring people together.
        Our beans are ethically sourced, freshly roasted, and brewed to perfection — every single time.
      </p>
      <div className="about-grid">
        <div className="about-card">
          <h3>☕ Quality Beans</h3>
          <p>We partner with small farms to ensure our beans are of the highest quality and sustainably sourced.</p>
        </div>
        <div className="about-card">
          <h3>🌍 Sustainable Practices</h3>
          <p>Eco-friendly packaging, fair-trade sourcing, and carbon-offset shipping are our priorities.</p>
        </div>
        <div className="about-card">
          <h3>❤️ Our Community</h3>
          <p>We support local artists, host events, and provide a warm space for people to connect.</p>
        </div>
      </div>
    </section>
  );
}

export default About;

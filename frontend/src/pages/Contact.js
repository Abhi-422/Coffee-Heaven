import React from 'react';

function Contact() {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <p>We'd love to hear from you! Whether it's feedback, questions, or collaboration ideas — reach out any time.</p>
      <div className="contact-grid">
        <div className="contact-info">
          <h3>📍 Visit Us</h3>
          <p>123 Brew Street, Bean City, CA</p>
        </div>
        <div className="contact-info">
          <h3>📞 Call</h3>
          <p>+1 (555) 123-4567</p>
        </div>
        <div className="contact-info">
          <h3>✉️ Email</h3>
          <p>hello@coffeeheaven.com</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;

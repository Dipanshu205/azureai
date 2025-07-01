import React from "react";

const Contact = () => {
  return (
    <section id="contact" style={{ padding: '4rem 1rem', backgroundColor: '#0c0c0c', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Let’s Build Smarter AI Together</h2>
      <p style={{ color: '#aaa', fontSize: '1.1rem', marginBottom: '2rem' }}>
        Tell us about your project or get a free quote by reaching out now.
      </p>
      <button style={{ padding: '1rem 2rem', backgroundColor: '#00bfff', border: 'none', borderRadius: '25px', color: '#fff', fontSize: '1rem', cursor: 'pointer' }}>
        Contact Us
      </button>
    </section>
  );
};

export default Contact;
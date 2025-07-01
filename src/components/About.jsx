import React from "react";

const About = () => {
  return (
    <section id="about" style={{ padding: '4rem 1rem', backgroundColor: '#111', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>About AiAzure</h2>
      <p style={{ color: '#aaa', maxWidth: '700px', margin: 'auto', fontSize: '1.1rem' }}>
        AiAzure was founded to bridge the gap between raw data and AI readiness. We partner with startups and enterprises
        globally to provide highly accurate, scalable data labeling with a human touch enhanced by AI oversight.
      </p>
    </section>
  );
};

export default About;
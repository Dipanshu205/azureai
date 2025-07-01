import React from "react";

const Hero = () => {
  return (
    <section style={{ textAlign: 'center', padding: '5rem 1rem' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Premium AI Labeling Solutions</h1>
      <p style={{ color: '#aaa', marginTop: '1rem', fontSize: '1.2rem', maxWidth: '600px', margin: 'auto' }}>
        AiAzure helps AI startups, enterprises, and research labs label massive amounts of data accurately and at scale.
      </p>
      <button style={{ marginTop: '2rem', padding: '1rem 2rem', backgroundColor: '#00bfff', border: 'none', borderRadius: '25px', color: '#fff', fontSize: '1rem', cursor: 'pointer' }}>
        Get Started
      </button>
    </section>
  );
};

export default Hero;
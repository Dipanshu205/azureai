import React from "react";

const services = [
  "Image Annotation",
  "Text Classification",
  "Object Detection",
  "Video Tagging",
  "Audio Labeling",
  "Semantic Segmentation",
];

const Services = () => {
  return (
    <section id="services" style={{ padding: '4rem 1rem', backgroundColor: '#111' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2rem' }}>Our Services</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}>
        {services.map((service) => (
          <div key={service} style={{ backgroundColor: '#222', padding: '1.5rem', borderRadius: '15px', width: '250px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{service}</h3>
            <p style={{ color: '#aaa', fontSize: '0.95rem' }}>
              Professional, scalable, and accurate {service.toLowerCase()} for your AI models.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

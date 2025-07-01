import React from "react";

const steps = [
  {
    title: "Define Requirements",
    description: "We understand your data and project scope to tailor our services."
  },
  {
    title: "Dedicated Labeling Team",
    description: "Trained experts handle your data using our advanced internal tooling."
  },
  {
    title: "Quality Assurance",
    description: "Multi-stage QA processes ensure accurate and consistent labeling."
  }
];

const Process = () => {
  return (
    <section id="process" style={{ padding: '4rem 1rem', backgroundColor: '#0c0c0c' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2rem' }}>How It Works</h2>
      <div style={{ maxWidth: '800px', margin: 'auto', color: '#ccc' }}>
        {steps.map((step, index) => (
          <div key={index} style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>{index + 1}. {step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
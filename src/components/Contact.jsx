// import React from "react";

// const Contact = () => {
//   return (
//     <section id="contact" style={{ padding: '4rem 1rem', backgroundColor: '#0c0c0c', textAlign: 'center' }}>
//       <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Let’s Build Smarter AI Together</h2>
//       <p style={{ color: '#aaa', fontSize: '1.1rem', marginBottom: '2rem' }}>
//         Tell us about your project or get a free quote by reaching out now.
//       </p>
//       <button style={{ padding: '1rem 2rem', backgroundColor: '#00bfff', border: 'none', borderRadius: '25px', color: '#fff', fontSize: '1rem', cursor: 'pointer' }}>
//         Contact Us
//       </button>
//     </section>
//   );
// };

// export default Contact;

import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactComponent() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_uxkr7zn', 'template_geoq1yv', form.current, 'lU3J4uI4owD2emeM1')
        e.target.reset()
    }
    return (
        <>
        <style>
  {`
    textarea::placeholder {
      font-family: Arial, sans-serif;
      font-size: 1rem;
      color: #666;
    }
  `}
</style>
        <section id="contact" 
        data-aos="fade-up"
        
        style={{ margin: '1rem', padding: '4rem 1rem', backgroundColor: '#0c0c0c', color: 'white' }}>
            <div style={{ maxWidth: '1200px', margin: 'auto' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '0.5rem' }}>Contact Us</h2>
                <p style={{ textAlign: 'center', color: '#aaa', marginBottom: '2.5rem' }}>We're here to elevate your experience.</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
                    {/* Contact Form */}
                    <div style={{ flex: '1 1 400px', maxWidth: '600px' }}>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1.5rem', textAlign: 'center' }}>Let’s talk business — our team is ready to assist.</h3>

                        <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#ccc' }}>Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your full name"
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem 1rem',
                                        border: '1px solid #444',
                                        borderRadius: '10px',
                                        fontSize: '1rem',
                                        color: '#000'
                                    }}
                                    required
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#ccc' }}>Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem 1rem',
                                        border: '1px solid #444',
                                        borderRadius: '10px',
                                        fontSize: '1rem',
                                        color: '#000'
                                    }}
                                    required
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#ccc' }}>How can we help you?</label>
                                <textarea
                                    name="project"
                                    rows="5"
                                    placeholder="Tell us briefly about your requirements or query"
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem 1rem',
                                        border: '1px solid #444',
                                        borderRadius: '10px',
                                        fontSize: '1rem',
                                        resize: 'none',
                                        color: '#000'
                                    }}
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                style={{
                                    maxWidth: '200px',
                                    backgroundColor: '#00bfff',
                                    color: '#fff',
                                    border: 'none',
                                    padding: '0.75rem 1.5rem',
                                    borderRadius: '10px',
                                    fontSize: '1rem',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}
                            >
                                Send Message
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    width="20"
                                    height="20"
                                >
                                    <path d="M14.22 21.935c-1.18 0-2.85-.83-4.17-4.8l-.72-2.16-2.16-.72c-3.96-1.32-4.79-3-4.79-4.18s.83-2.85 4.79-4.17l8.49-2.83c2.12-.71 3.89-.5 4.98.58 1.09 1.08 1.3 2.86.59 4.98l-2.83 8.49c-1.32 3.97-3 4.8-4.18 4.8zM7.64 7.34c-2.78.93-3.77 2.03-3.77 2.74s.99 1.82 3.77 2.74l2.52.84c.22.07.4.25.47.47l.84 2.52c.93 2.78 2.03 3.77 2.74 3.77s1.82-.99 2.74-3.77l2.83-8.49c.51-1.54.41-2.8-.2-3.45-.61-.66-1.87-.76-3.41-.24L7.64 7.34z" />
                                    <path d="M10.11 14.705a.747.747 0 01-.53-1.28l3.58-3.59a.75.75 0 111.06 1.06l-3.58 3.59a.747.747 0 01-.53.22z" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};
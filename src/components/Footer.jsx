import React from "react";

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#111', color: '#777', fontSize: '0.9rem' }}>
      © {new Date().getFullYear()} AiAzure. All rights reserved.
    </footer>
  );
};

export default Footer;

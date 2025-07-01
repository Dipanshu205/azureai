import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main style={{ fontFamily: 'Arial, sans-serif', color: 'white', backgroundColor: '#0c0c0c' }}>
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <About />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;

import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
      <h1 className="hero-title">Zerodha Products</h1>

      <p className="hero-subtitle">
        Sleek, modern, and intuitive trading platforms
      </p>

      <a className="hero-link" href="#">
        Check out our <span>investment offerings →</span>
      </a>
    </section>
  );
};

export default Hero;

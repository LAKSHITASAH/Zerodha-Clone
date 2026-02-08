import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-image-container">
        <img src="/image.png" alt="Hero" className="hero-img" />
      </div>

      <h1 className="hero-title">Invest in everything</h1>

      <p className="hero-subtitle">
        Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
      </p>

      <button className="hero-btn">Sign up for free</button>
    </section>
  );
}

export default Hero;

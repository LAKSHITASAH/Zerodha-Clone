import React from "react";
import "./RightSection.css";

function RightSection() {
  return (
    <div className="product-right">
      <h2 className="product-title">Kite</h2>

      <p className="product-description">
        Our ultra-fast flagship trading platform with streaming market data,
        advanced charts, an elegant UI, and more. Enjoy the Kite experience
        seamlessly on your Android and iOS devices.
      </p>

      <div className="product-links">
        <a
          href="https://kite-demo.zerodha.com"
          className="product-link"
          target="_blank"
          rel="noreferrer"
        >
          Try demo →
        </a>
        <a
          href="https://zerodha.com/products/kite"
          className="product-link"
          target="_blank"
          rel="noreferrer"
        >
          Learn more →
        </a>
      </div>

      <div className="app-buttons">
        <button className="store-btn">Google Play</button>
        <button className="store-btn">App Store</button>
      </div>
    </div>
  );
}

export default RightSection;

import React from "react";
import "./ConsoleSection.css";

function ConsoleSection() {
  return (
    <section className="console-section">
      <div className="console-text">
        <h2 className="console-title">Console</h2>
        <p className="console-description">
          The central dashboard for your Zerodha account. Gain insights into
          your trades and investments with in-depth reports and visualisations.
        </p>
        <a
          href="https://console.zerodha.com"
          className="console-link"
          target="_blank"
          rel="noreferrer"
        >
          Learn more →
        </a>
      </div>

      <div className="console-visual">
        <div className="console-image-wrapper">
          <img
            src="/products-console.png"
            alt="Console dashboard"
            className="console-image"
          />
        </div>
      </div>
    </section>
  );
}

export default ConsoleSection;

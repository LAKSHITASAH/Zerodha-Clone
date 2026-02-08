import React from "react";
import "./CoinSection.css";

function CoinSection() {
  return (
    <section className="coin-section">
      <div className="coin-visual">
        <div className="coin-image-wrapper">
          <img
            src="/products-coin.png"
            alt="Coin mutual fund platform"
            className="coin-image"
          />
        </div>
      </div>

      <div className="coin-text">
        <h2 className="coin-title">Coin</h2>
        <p className="coin-description">
          Buy direct mutual funds online, commission-free, delivered directly to
          your Demat account. Enjoy the investment experience on your Android
          and iOS devices.
        </p>

        <a
          href="https://coin.zerodha.com"
          className="coin-link"
          target="_blank"
          rel="noreferrer"
        >
          Coin →
        </a>

        <div className="coin-app-buttons">
          <img
            src="/google-play-badge.png"
            alt="Google Play"
            className="store-badge"
          />
          <img
            src="/app-store-badge.png"
            alt="App Store"
            className="store-badge"
          />
        </div>
      </div>
    </section>
  );
}

export default CoinSection;

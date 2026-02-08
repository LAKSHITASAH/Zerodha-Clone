import React from "react";
import "./Awards.css";

function Awards() {
  return (
    <section className="awards-section">
      <div className="awards-container">
        
        {/* Left side – image */}
        <div className="awards-left">
          <img
            src="/images.png"
            alt="Awards illustration"
            className="awards-img"
          />

          <p className="awards-caption">
            Economic Times Startup of the Year – 2020
          </p>
          <p className="awards-subcaption">
            NSE, BSE, MCX – Best retail brokerage awards (2018–2020)
          </p>
        </div>

        {/* Right side – text */}
        <div className="awards-right">
          <h2 className="awards-title">Largest stock broker in India</h2>

          <p className="awards-text">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          <div className="awards-lists">
            <ul>
              <li>Futures and options</li>
              <li>Commodity derivatives</li>
              <li>Currency derivatives</li>
            </ul>

            <ul>
              <li>Stocks & IPOs</li>
              <li>Direct mutual funds</li>
              <li>Bonds and more</li>
            </ul>
          </div>

          <div className="awards-logos">
            <span>The Economic Times</span>
            <span>Forbes</span>
            <span>Business Line</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Awards;

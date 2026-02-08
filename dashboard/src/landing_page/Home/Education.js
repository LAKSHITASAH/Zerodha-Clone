import React from "react";
import "./Education.css";

function Education() {
  return (
    <section className="education-section">
      <div className="education-container">

        {/* LEFT SIDE – IMAGE */}
        <div className="education-left">
          <img
            src="/index-education.svg"
            alt="Education Illustration"
            className="education-img"
          />
        </div>

        {/* RIGHT SIDE – TEXT */}
        <div className="education-right">
          <h2 className="education-title">Free and open market education</h2>

          <p className="education-desc">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>

          <a href="https://zerodha.com/varsity" className="education-link">
            Varsity →
          </a>

          <p className="education-desc2">
            TradingQ&amp;A, the most active trading and investment community in
            India for all your market related queries.
          </p>

          <a href="https://tradingqna.com" className="education-link">
            TradingQ&amp;A →
          </a>
        </div>

      </div>
    </section>
  );
}

export default Education;

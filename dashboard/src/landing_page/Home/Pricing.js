import React from "react";
import "./Pricing.css";

function Pricing() {
  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-container">
        {/* LEFT SIDE */}
        <div className="pricing-left">
          <h2 className="pricing-heading">Unbeatable pricing</h2>
          <p className="pricing-text">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>

          {/* Redirect to pricing page */}
          <a
            href="https://zerodha.com/pricing"  /* or /pricing if you make a route */
            className="pricing-link"
          >
            See pricing
          </a>
        </div>

        {/* RIGHT SIDE – CARDS */}
        <div className="pricing-right">
          <div className="price-card">
            <div className="price-value">₹0</div>
            <p className="price-desc">
              Free equity delivery and <br />
              direct mutual funds
            </p>
          </div>

          <div className="price-card">
            <div className="price-value">₹20</div>
            <p className="price-desc">Intraday and F&amp;O</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;

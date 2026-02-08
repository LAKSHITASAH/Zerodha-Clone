import React from "react";
import "./Stats.css";

function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-container">
        {/* LEFT SIDE – TEXT */}
        <div className="stats-left">
          <h2 className="stats-heading">Trust with confidence</h2>

          <div className="stats-block">
            <h3>Customer-first always</h3>
            <p>
              That&apos;s why millions of customers trust Zerodha with their
              equity investments.
            </p>
          </div>

          <div className="stats-block">
            <h3>No spam or gimmicks</h3>
            <p>
              No gimmicks, spam, or annoying push notifications. Just high
              quality products that you use at your own pace.
            </p>
          </div>

          <div className="stats-block">
            <h3>The Zerodha universe</h3>
            <p>
              Not just an app, but a whole ecosystem. Investments in fintech
              startups offer powerful tools tailored to your needs.
            </p>
          </div>

          <div className="stats-block">
            <h3>Do better with money</h3>
            <p>
              With features like Nudge and Kill Switch, we help you make better,
              more informed decisions with your money.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE – IMAGE + LINKS */}
        <div className="stats-right">
          <img
            src="/ecosystem (1).png"
            alt="Zerodha ecosystem"
            className="stats-img"
          />

          <div className="stats-links">
            <a href="#products" className="stats-link primary">
              Explore our products
            </a>
            <a href="#kite" className="stats-link">
              Try Kite
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;

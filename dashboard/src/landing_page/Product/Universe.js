import React from "react";
import "./Universe.css";

function Universe() {
  return (
    <section className="universe">
      <div className="universe-header">
        <h2 className="universe-title">The Zerodha Universe</h2>
        <p className="universe-subtitle">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div className="universe-grid">
        {/* Zerodha Fund House */}
        <div className="universe-item">
          <img
            src="/zerodhafundhouse.png"
            alt="Zerodha Fund House"
            className="universe-logo"
          />
          <h3 className="universe-item-title">Zerodha Fund House</h3>
          <p className="universe-item-text">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>

        {/* Sensibull */}
        <div className="universe-item">
          <img
            src="/sensibull-logo.svg"
            alt="Sensibull"
            className="universe-logo"
          />
          <h3 className="universe-item-title">Sensibull</h3>
          <p className="universe-item-text">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>

        {/* Tijori */}
        <div className="universe-item">
          <img
            src="/tijori.svg"
            alt="Tijori"
            className="universe-logo"
          />
          <h3 className="universe-item-title">Tijori</h3>
          <p className="universe-item-text">
            Investment research platform offering deep insights into stocks,
            sectors, supply chains, and more.
          </p>
        </div>

        {/* Streak */}
        <div className="universe-item">
          <img
            src="/streak-logo.png"
            alt="Streak"
            className="universe-logo"
          />
          <h3 className="universe-item-title">Streak</h3>
          <p className="universe-item-text">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>

        {/* smallcase */}
        <div className="universe-item">
          <img
            src="/smallcase-logo.png"
            alt="smallcase"
            className="universe-logo"
          />
          <h3 className="universe-item-title">smallcase</h3>
          <p className="universe-item-text">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks or ETFs.
          </p>
        </div>

        {/* ditto */}
        <div className="universe-item">
          <img
            src="/ditto-logo.png"
            alt="ditto"
            className="universe-logo"
          />
          <h3 className="universe-item-title">ditto</h3>
          <p className="universe-item-text">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
      </div>

      <div className="universe-cta">
        <button type="button" className="universe-button">
          Sign up for free
        </button>
      </div>
    </section>
  );
}

export default Universe;

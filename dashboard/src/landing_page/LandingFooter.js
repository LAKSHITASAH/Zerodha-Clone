import React from "react";
import { Link } from "react-router-dom";
import "./LandingFooter.css";

export default function LandingFooter() {
  const cols = [
    {
      title: "Account",
      links: [
        "Open demat account",
        "Minor demat account",
        "NRI demat account",
        "Commodity",
        "Dematerialisation",
        "Fund transfer",
        "MTF",
        "Referral program",
      ],
    },
    {
      title: "Support",
      links: [
        "Contact us",
        "Support portal",
        "How to file a complaint?",
        "Status of your complaints",
        "Bulletin",
        "Circular",
        "Z-Connect blog",
        "Downloads",
      ],
    },
    {
      title: "Company",
      links: [
        "About",
        "Philosophy",
        "Press & media",
        "Careers",
        "Zerodha Cares (CSR)",
        "Zerodha.tech",
        "Open source",
      ],
    },
    {
      title: "Quick links",
      links: [
        "Upcoming IPOs",
        "Brokerage charges",
        "Market holidays",
        "Economic calendar",
        "Calculators",
        "Markets",
        "Sectors",
      ],
    },
  ];

  return (
    <footer className="zf-footer">
      <div className="zf-inner">
        <div className="zf-grid">
          {/* Brand */}
          <div className="zf-brandCol">
            <Link to="/home" className="zf-brand">
              <div className="zf-logo" />
              <span>ZERODHA</span>
            </Link>

            <div className="zf-meta">
              © 2010 - 2025, Zerodha Broking Ltd.
              <br />
              All rights reserved.
            </div>

            <div className="zf-social">
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                Twitter
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                Facebook
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Columns */}
          {cols.map((c) => (
            <div key={c.title}>
              <div className="zf-title">{c.title}</div>
              {c.links.map((t) => (
                <a key={t} href="#!" className="zf-link">
                  {t}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom legal text */}
        <div className="zf-legal">
          Zerodha Broking Ltd.: Member of NSE, BSE &amp; MCX — SEBI Registration
          no.: INZ000031633. CDSL/NSDL: Depository services through Zerodha
          Broking Ltd. — SEBI Registration no.: IN-DP-431-2019. Commodity
          Trading through Zerodha Commodities Pvt. Ltd.
        </div>
      </div>
    </footer>
  );
}

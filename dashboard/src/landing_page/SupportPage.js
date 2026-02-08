import React, { useMemo, useState } from "react";
import LandingNavbar from "./LandingNavbar"; // ✅ if LandingNavbar.js is in landing_page folder
import "./SupportPage.css";
import LandingFooter from "./LandingFooter";


export default function SupportPage() {
  const [q, setQ] = useState("");

  const quickLinks = [
    { title: "Account opening", desc: "Open an account, KYC, documents", icon: "👤" },
    { title: "Funds", desc: "Add/withdraw funds, bank details", icon: "💳" },
    { title: "Kite", desc: "Orders, charts, watchlist, login", icon: "📈" },
    { title: "Console", desc: "Reports, statements, profile", icon: "🧾" },
    { title: "Coin", desc: "Mutual funds, SIPs, mandates", icon: "🪙" },
    { title: "Charges", desc: "Brokerage, GST, contract notes", icon: "🧮" },
  ];

  const categories = [
    {
      title: "Getting started",
      items: ["Create account", "KYC process", "Login & 2FA", "Account activation"],
    },
    {
      title: "Trading & markets",
      items: ["Placing orders", "Margins", "Order types", "Trading holidays"],
    },
    {
      title: "Funds & banking",
      items: ["Add funds", "Withdraw funds", "Bank change", "UPI / netbanking"],
    },
    {
      title: "Reports & taxation",
      items: ["P&L report", "Contract notes", "Tax P&L", "Statements"],
    },
    {
      title: "Products",
      items: ["Kite", "Console", "Coin", "Varsity"],
    },
    {
      title: "Charges & pricing",
      items: ["Brokerage", "DP charges", "AMC", "Other charges"],
    },
  ];

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return { quick: quickLinks, categories };
    return {
      quick: quickLinks.filter(
        (x) =>
          x.title.toLowerCase().includes(s) || x.desc.toLowerCase().includes(s)
      ),
      categories: categories
        .map((c) => ({
          ...c,
          items: c.items.filter((i) => i.toLowerCase().includes(s)),
        }))
        .filter((c) => c.items.length > 0),
    };
  }, [q]);

  return (
    <div className="zs-page">
      <LandingNavbar />

      {/* Hero */}
      <section className="zs-hero">
        <div className="zs-hero-inner">
          <div>
            <h1 className="zs-title">Support Portal</h1>
            <p className="zs-subtitle">
              Search for help, browse topics, or raise a ticket.
            </p>
          </div>

          <a className="zs-ticketBtn" href="#tickets">
            Raise a ticket
          </a>
        </div>

        {/* Search bar */}
        <div className="zs-searchWrap">
          <div className="zs-search">
            <span className="zs-searchIcon">🔎</span>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search support articles… (eg: margin, withdrawal, kyc)"
            />
          </div>
          <div className="zs-searchHint">
            Popular: <span>Margins</span> · <span>KYC</span> ·{" "}
            <span>Withdraw funds</span> · <span>IPO</span>
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="zs-section">
        <div className="zs-container">
          <h2 className="zs-h2">Quick links</h2>

          <div className="zs-grid">
            {filtered.quick.map((x) => (
              <div className="zs-card" key={x.title}>
                <div className="zs-cardIcon">{x.icon}</div>
                <div className="zs-cardBody">
                  <div className="zs-cardTitle">{x.title}</div>
                  <div className="zs-cardDesc">{x.desc}</div>
                  <a className="zs-cardLink" href="#tickets">
                    View topics →
                  </a>
                </div>
              </div>
            ))}
            {filtered.quick.length === 0 ? (
              <div className="zs-empty">No quick links found for “{q}”.</div>
            ) : null}
          </div>
        </div>
      </section>

      {/* Ticket categories */}
      <section className="zs-section" id="tickets">
        <div className="zs-container">
          <div className="zs-row">
            <h2 className="zs-h2">Browse ticket categories</h2>
            <div className="zs-muted">
              Select a category to raise a ticket (UI demo).
            </div>
          </div>

          <div className="zs-cats">
            {filtered.categories.map((c) => (
              <div className="zs-cat" key={c.title}>
                <div className="zs-catTitle">{c.title}</div>
                <ul className="zs-list">
                  {c.items.map((i) => (
                    <li key={i}>
                      <button
                        className="zs-listBtn"
                        onClick={() =>
                          alert(`Ticket category selected: ${c.title} → ${i}`)
                        }
                      >
                        {i}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {filtered.categories.length === 0 ? (
              <div className="zs-empty">
                No topics found for “{q}”. Try a different keyword.
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {/* Footer note */}
      <section className="zs-footer">
        <div className="zs-container zs-footerInner">
          <div>
            <div className="zs-footerTitle">Need help faster?</div>
            <div className="zs-footerText">
              This is a Zerodha-style support page (frontend demo). You can plug
              this into your backend later.
            </div>
          </div>

          <div className="zs-footerLinks">
            <a href="#tickets">Raise a ticket</a>
            <a href="/pricing">Pricing</a>
            <a href="/about">About Zerodha</a>
          </div>
        </div>
      </section>
    </div>
  );
}

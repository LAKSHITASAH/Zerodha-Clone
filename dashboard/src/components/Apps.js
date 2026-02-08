import React, { useMemo, useState } from "react";
import { GeneralContextProvider } from "./GeneralContext";

const APPS = [
  {
    name: "Sensibull",
    by: "Options trading platform",
    desc: "Options analysis, strategy building, and advanced option chain.",
    tags: ["Options", "Strategies"],
    status: "Connect",
  },
  {
    name: "smallcase",
    by: "Thematic investing",
    desc: "Invest in curated portfolios (smallcases) and rebalance anytime.",
    tags: ["Investing", "Portfolios"],
    status: "Connect",
  },
  {
    name: "Streak",
    by: "Algo & strategy builder",
    desc: "Create, backtest, and deploy strategies without coding.",
    tags: ["Algo", "Backtest"],
    status: "Connect",
  },
  {
    name: "Tijori",
    by: "Markets insights",
    desc: "Company fundamentals, sector insights, and market intelligence.",
    tags: ["Research", "Fundamentals"],
    status: "Connect",
  },
  {
    name: "Quicko",
    by: "Taxes & reports",
    desc: "Easily generate tax reports and manage capital gains statements.",
    tags: ["Taxes", "Reports"],
    status: "Connect",
  },
  {
    name: "Kite Connect",
    by: "Trading APIs",
    desc: "Build trading & investing apps using Zerodha’s APIs.",
    tags: ["API", "Developers"],
    status: "Open",
  },
];

function AppsPage() {
  const [q, setQ] = useState("");
  const [tab, setTab] = useState("explore"); // explore | connected

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return APPS;
    return APPS.filter(
      (a) =>
        a.name.toLowerCase().includes(s) ||
        a.by.toLowerCase().includes(s) ||
        a.desc.toLowerCase().includes(s) ||
        a.tags.join(" ").toLowerCase().includes(s)
    );
  }, [q]);

  const connectedApps = []; // demo: empty

  return (
    <div className="kite-page">
      <div className="kite-page-title-lg">Apps</div>

      {/* Tabs + Search (Zerodha-like) */}
      <div className="apps-top">
        <div className="apps-tabs">
          <button
            className={"apps-tab " + (tab === "explore" ? "active" : "")}
            onClick={() => setTab("explore")}
            type="button"
          >
            Explore
          </button>
          <button
            className={"apps-tab " + (tab === "connected" ? "active" : "")}
            onClick={() => setTab("connected")}
            type="button"
          >
            Connected
          </button>
        </div>

        <div className="apps-search">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search apps"
          />
        </div>
      </div>

      {/* Content */}
      {tab === "connected" ? (
        connectedApps.length === 0 ? (
          <div className="apps-empty">
            <div className="kite-empty-text">No connected apps</div>
            <button
              className="kite-btn-outline"
              type="button"
              onClick={() => setTab("explore")}
            >
              Explore apps
            </button>
          </div>
        ) : (
          <div className="apps-grid">
            {connectedApps.map((a) => (
              <AppCard key={a.name} app={a} />
            ))}
          </div>
        )
      ) : (
        <div className="apps-grid">
          {filtered.map((a) => (
            <AppCard key={a.name} app={a} />
          ))}
        </div>
      )}
    </div>
  );
}

function AppCard({ app }) {
  const initials = (app.name || "A")
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div className="app-card">
      <div className="app-head">
        <div className="app-logo">{initials}</div>
        <div className="app-meta">
          <div className="app-name">{app.name}</div>
          <div className="app-by">{app.by}</div>
        </div>
      </div>

      <div className="app-desc">{app.desc}</div>

      <div className="app-tags">
        {app.tags.map((t) => (
          <span key={t} className="app-tag">
            {t}
          </span>
        ))}
      </div>

      <div className="app-actions">
        <button className="kite-btn-outline" type="button">
          Learn more
        </button>

        <button
          className={"app-primary " + (app.status === "Open" ? "open" : "")}
          type="button"
        >
          {app.status}
        </button>
      </div>
    </div>
  );
}

export default function Apps() {
  return (
    <GeneralContextProvider>
      <AppsPage />
    </GeneralContextProvider>
  );
}

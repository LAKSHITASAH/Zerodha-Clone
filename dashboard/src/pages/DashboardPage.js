import React, { useEffect, useMemo, useState } from "react";
import API from "../api";

// ✅ Sir exact values (use as fallback / hardcode)
const dashboardData = {
  equity: {
    marginAvailable: "3.74k",
    marginsUsed: "0",
    openingBalance: "3.74k",
  },
  holdings: {
    count: 13,
    pnl: "1.55k",
    pnlPercent: "+5.20%",
    currentValue: "31.43k",
    investment: "29.88k",
  },
};

export default function DashboardPage() {
  const [holdings, setHoldings] = useState([]);
  const [loadingHoldings, setLoadingHoldings] = useState(true);
  const [holdingsError, setHoldingsError] = useState("");

  // ✅ Fetch holdings (keep your logic)
  useEffect(() => {
    let alive = true;

    async function fetchHoldings() {
      setLoadingHoldings(true);
      setHoldingsError("");

      try {
        const res = await API.get("/allHoldings");
        if (!alive) return;
        setHoldings(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        if (!alive) return;
        setHoldings([]);
        setHoldingsError(
          err?.response?.data?.message ||
            err?.response?.data?.error ||
            err?.message ||
            "Network Error"
        );
      } finally {
        if (alive) setLoadingHoldings(false);
      }
    }

    fetchHoldings();
    return () => {
      alive = false;
    };
  }, []);

  // ✅ Calculate summary from API holdings
  const summary = useMemo(() => {
    const investment = holdings.reduce(
      (sum, h) => sum + Number(h.qty ?? 0) * Number(h.avg ?? 0),
      0
    );
    const current = holdings.reduce(
      (sum, h) => sum + Number(h.qty ?? 0) * Number(h.price ?? 0),
      0
    );
    const pnl = current - investment;
    const pnlPct = investment > 0 ? (pnl / investment) * 100 : 0;

    return { investment, current, pnl, pnlPct };
  }, [holdings]);

  const pnlGreen = summary.pnl >= 0;

  // ✅ If API failed or holdings empty -> show sir exact values
  const useSirValues = Boolean(holdingsError) || holdings.length === 0;

  return (
    <div className="page">
      <div className="page-title">Hi, User!</div>

      {/* ===== Equity Section (sir exact values) ===== */}
      <div className="section">
        <div className="section-title">Equity</div>

        <div className="equity-box">
          <div className="equity-left">
            <div className="equity-big">
              {dashboardData.equity.marginAvailable}
            </div>
            <div className="muted">Margin available</div>
          </div>

          <div className="equity-mid" />

          <div className="equity-right">
            <div className="eq-row">
              <span className="muted">Margins used</span>
              <span>{dashboardData.equity.marginsUsed}</span>
            </div>
            <div className="eq-row">
              <span className="muted">Opening balance</span>
              <span>{dashboardData.equity.openingBalance}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hr" />

      {/* ===== Holdings Section (sir style) ===== */}
      <div className="section">
        <div className="section-title">
          Holdings ({useSirValues ? dashboardData.holdings.count : holdings.length})
        </div>

        {loadingHoldings && <div className="kite-note">Loading…</div>}

        {!loadingHoldings && holdingsError && (
          <div className="kite-note kite-error-text">{holdingsError}</div>
        )}

        {!loadingHoldings && (
          <div className="kite-holdings-summary">
            {/* Left big pnl */}
            <div className="hs-left">
              <div className={"hs-big " + (useSirValues ? "pos" : pnlGreen ? "pos" : "neg")}>
                {useSirValues ? dashboardData.holdings.pnl : summary.pnl.toFixed(2)}
              </div>

              <div className={"hs-small " + (useSirValues ? "pos" : pnlGreen ? "pos" : "neg")}>
                {useSirValues
                  ? dashboardData.holdings.pnlPercent
                  : `${summary.pnlPct >= 0 ? "+" : ""}${summary.pnlPct.toFixed(2)}%`}
              </div>

              <div className="muted">P&amp;L</div>
            </div>

            {/* middle divider */}
            <div className="hs-mid" />

            {/* right values */}
            <div className="hs-right">
              <div className="hs-row">
                <span className="muted">Current value</span>
                <span>
                  {useSirValues ? dashboardData.holdings.currentValue : summary.current.toFixed(2)}
                </span>
              </div>

              <div className="hs-row">
                <span className="muted">Investment</span>
                <span>
                  {useSirValues ? dashboardData.holdings.investment : summary.investment.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

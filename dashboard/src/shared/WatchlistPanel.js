import React, { useMemo, useState } from "react";

const WATCHLIST = [
  { symbol: "INFY", chg: -1.6, ltp: 1555.45 },
  { symbol: "ONGC", chg: -0.09, ltp: 116.8 },
  { symbol: "TCS", chg: -0.25, ltp: 3194.8 },
  { symbol: "KPITTECH", chg: 3.54, ltp: 266.45 },
  { symbol: "QUICKHEAL", chg: -0.15, ltp: 308.55 },
  { symbol: "WIPRO", chg: 0.32, ltp: 577.75 },
  { symbol: "M&M", chg: -0.01, ltp: 779.8 },
  { symbol: "RELIANCE", chg: 1.44, ltp: 2112.4 },
  { symbol: "HUL", chg: 1.04, ltp: 512.4 },
];

export default function WatchlistPanel({
  selectedSymbol,
  onSelectSymbol,
  onBuy,
  onSell,
}) {
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return WATCHLIST;
    return WATCHLIST.filter((x) => x.symbol.toLowerCase().includes(s));
  }, [q]);

  return (
    <aside className="kite-left">
      <div className="wl-search">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search eg: infy, bse, nifty fut weekly, gold mcx"
        />
        <span className="wl-count">9 / 50</span>
      </div>

      <div className="wl-list">
        {list.map((item) => {
          const active = item.symbol === selectedSymbol;
          const pos = item.chg >= 0;

          return (
            <div
              key={item.symbol}
              className={"wl-row " + (active ? "active" : "")}
              onClick={() => onSelectSymbol?.(item.symbol)}
              role="button"
              tabIndex={0}
            >
              <div className="wl-symbol">{item.symbol}</div>

              <div className="wl-right">
                <div className={"wl-chg " + (pos ? "pos" : "neg")}>
                  {pos ? "+" : ""}
                  {item.chg.toFixed(2)}%
                </div>
                <div className="wl-ltp">{item.ltp}</div>
              </div>
              
<div className="kite-user">
  <div className="kite-avatar">LS</div>
  <span>USERID</span>
</div>

              {/* ONLY visible on hover by CSS */}
              <div className="wl-actions" onClick={(e) => e.stopPropagation()}>
                <button
                  className="wl-btn wl-buy"
                  type="button"
                  onClick={() => onBuy?.(item.symbol)}
                >
                  Buy
                </button>

                <button
                  className="wl-btn wl-sell"
                  type="button"
                  onClick={() => onSell?.(item.symbol)}
                >
                  Sell
                </button>

                <button className="wl-icon" type="button" title="Analytics (A)">
                  A
                </button>

                <button className="wl-icon" type="button" title="More">
                  …
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
}

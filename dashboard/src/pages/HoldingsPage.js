import React, { useMemo } from "react";

export default function HoldingsPage() {
  // ✅ EXACT holdings data from image
  const holdings = [
    { symbol: "BHARTIARTL", qty: 5, avg: 538.05, price: 541.15, dayChg: 0.58 },
    { symbol: "HDFCBANK", qty: 2, avg: 1383.40, price: 1522.35, dayChg: 0.11 },
    { symbol: "HINDUNILVR", qty: 1, avg: 2335.85, price: 2417.40, dayChg: 0.21 },
    { symbol: "INFY", qty: 1, avg: 1350.50, price: 1555.45, dayChg: -1.60 },
    { symbol: "ITC", qty: 5, avg: 202.00, price: 207.90, dayChg: 0.80 },
    { symbol: "KPITTECH", qty: 5, avg: 250.30, price: 266.45, dayChg: 3.54 },
    { symbol: "M&M", qty: 2, avg: 809.90, price: 779.80, dayChg: -0.01 },
    { symbol: "RELIANCE", qty: 1, avg: 2193.70, price: 2112.40, dayChg: 1.44 },
    { symbol: "SBIN", qty: 4, avg: 324.35, price: 430.20, dayChg: -0.34 },
    { symbol: "SGBMAY29", qty: 2, avg: 4727.00, price: 4719.00, dayChg: 0.15 },
    { symbol: "TATAPOWER", qty: 5, avg: 104.20, price: 124.15, dayChg: -0.24 },
    { symbol: "TCS", qty: 1, avg: 3041.70, price: 3194.80, dayChg: 0.25 },
    { symbol: "WIPRO", qty: 4, avg: 489.30, price: 577.75, dayChg: 0.32 },
  ];

  const rows = useMemo(() => {
    return holdings.map((h) => {
      const curVal = h.qty * h.price;
      const pnl = curVal - h.qty * h.avg;
      const netChg = (pnl / (h.qty * h.avg)) * 100;

      return { ...h, curVal, pnl, netChg };
    });
  }, [holdings]);

  return (
    <div className="page">
      <div className="page-title">Holdings ({rows.length})</div>

      <div className="table-wrap">
        <div className="kite-table">
          <div className="tr th">
            <div>Instrument</div>
            <div>Qty.</div>
            <div>Avg. cost</div>
            <div>LTP</div>
            <div>Cur. val</div>
            <div>P&amp;L</div>
            <div>Net chg.</div>
            <div>Day chg.</div>
          </div>

          {rows.map((r) => (
            <div className="tr" key={r.symbol}>
              <div className="sym">{r.symbol}</div>
              <div>{r.qty}</div>
              <div>{r.avg.toFixed(2)}</div>
              <div>{r.price.toFixed(2)}</div>
              <div>{r.curVal.toFixed(2)}</div>
              <div className={r.pnl >= 0 ? "pos" : "neg"}>
                {r.pnl.toFixed(2)}
              </div>
              <div className={r.netChg >= 0 ? "pos" : "neg"}>
                {r.netChg >= 0 ? "+" : ""}
                {r.netChg.toFixed(2)}%
              </div>
              <div className={r.dayChg >= 0 ? "pos" : "neg"}>
                {r.dayChg >= 0 ? "+" : ""}
                {r.dayChg.toFixed(2)}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

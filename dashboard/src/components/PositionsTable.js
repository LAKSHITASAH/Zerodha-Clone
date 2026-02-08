import React from "react";

const positionsData = [
  {
    product: "CNC",
    instrument: "EVEREADY",
    qty: 2,
    avg: 316.27,
    ltp: 312.35,
  },
  {
    product: "CNC",
    instrument: "JUBLFOOD",
    qty: 1,
    avg: 3124.75,
    ltp: 3082.65,
  },
];

export default function PositionsTable() {
  return (
    <div className="table-wrap">
      <div className="kite-table">
        {/* table header */}
        <div className="tr th">
          <div>Product</div>
          <div>Instrument</div>
          <div>Qty.</div>
          <div>Avg.</div>
          <div>LTP</div>
          <div>P&amp;L</div>
          <div>Chg.</div>
        </div>

        {/* table rows */}
        {positionsData.map((p, i) => {
          const pnl = (p.ltp - p.avg) * p.qty;
          const chg = ((p.ltp - p.avg) / p.avg) * 100;
          const neg = pnl < 0;

          return (
            <div className="tr" key={i}>
              <div>{p.product}</div>
              <div className="sym">{p.instrument}</div>
              <div>{p.qty}</div>
              <div>{p.avg.toFixed(2)}</div>
              <div>{p.ltp.toFixed(2)}</div>

              <div className={neg ? "neg" : "pos"}>
                {pnl.toFixed(2)}
              </div>

              <div className={neg ? "neg" : "pos"}>
                {chg.toFixed(2)}%
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

import React, { useMemo } from "react";

export default function HoldingsTable({ holdings = [] }) {
  const rows = useMemo(() => {
    return holdings.map((h) => {
      const qty = Number(h.qty ?? 0);
      const avg = Number(h.avg ?? 0);
      const ltp = Number(h.price ?? 0);

      const curVal = qty * ltp;
      const investment = qty * avg;

      const pnl = curVal - investment;
      const netChg = investment > 0 ? (pnl / investment) * 100 : 0;

      // if backend doesn't have dayChg/day, reuse netChg
      const dayChg =
        h.dayChg != null
          ? Number(h.dayChg)
          : h.day != null
          ? Number(h.day)
          : netChg;

      return {
        id: h._id || h.id || h.symbol || Math.random(),
        name: h.name || h.symbol || "-",
        symbol: h.symbol || h.name || "-",
        qty,
        avg,
        ltp,
        curVal,
        pnl,
        netChg,
        dayChg,
      };
    });
  }, [holdings]);

  const totals = useMemo(() => {
    const investment = rows.reduce((s, r) => s + r.qty * r.avg, 0);
    const currentValue = rows.reduce((s, r) => s + r.qty * r.ltp, 0);
    const pnl = currentValue - investment;
    return { investment, currentValue, pnl };
  }, [rows]);

  return (
    <div className="table-wrap">
      {/* Header row */}
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

        {/* Data rows */}
        {rows.map((r) => {
          const pnlOk = r.pnl >= 0;
          const netOk = r.netChg >= 0;
          const dayOk = r.dayChg >= 0;

          return (
            <div className="tr" key={r.id}>
              {/* instrument cell: shows NAME and SYMBOL same like screenshot */}
              <div className="sym">
                <div style={{ color: "#555" }}>{r.symbol}</div>
              </div>

              <div>{r.qty}</div>
              <div>{r.avg.toFixed(2)}</div>
              <div>{r.ltp.toFixed(2)}</div>
              <div>{r.curVal.toFixed(2)}</div>

              <div className={pnlOk ? "pos" : "neg"}>{r.pnl.toFixed(2)}</div>

              <div className={netOk ? "pos" : "neg"}>
                {netOk ? "+" : ""}
                {r.netChg.toFixed(2)}%
              </div>

              <div className={dayOk ? "pos" : "neg"}>
                {dayOk ? "+" : ""}
                {r.dayChg.toFixed(2)}%
              </div>
            </div>
          );
        })}

        {/* Empty state */}
        {rows.length === 0 && (
          <div className="pad muted">No holdings found.</div>
        )}
      </div>

      {/* Totals (bottom numbers like screenshot) */}
      <div style={{ height: 16 }} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 22,
          paddingTop: 18,
          borderTop: "1px solid #eee",
        }}
      >
        <div>
          <div className="muted">Investment</div>
          <div style={{ fontSize: 28, color: "#666", marginTop: 6 }}>
            {totals.investment.toFixed(0)}
          </div>
        </div>

        <div>
          <div className="muted">Current value</div>
          <div style={{ fontSize: 28, color: "#666", marginTop: 6 }}>
            {totals.currentValue.toFixed(0)}
          </div>
        </div>

        <div>
          <div className="muted">P&amp;L</div>
          <div
            style={{
              fontSize: 28,
              marginTop: 6,
            }}
            className={totals.pnl >= 0 ? "pos" : "neg"}
          >
            {totals.pnl.toFixed(0)}
          </div>
        </div>
      </div>
    </div>
  );
}

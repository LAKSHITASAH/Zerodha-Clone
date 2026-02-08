import React from "react";

export default function Orders({ orders = [] }) {
  const isEmpty = !orders || orders.length === 0;

  return (
    <div className="kite-page">
      <div className="kite-page-title-lg">Orders</div>

      {isEmpty ? (
        <div className="kite-empty">
          <div className="kite-empty-text">You haven't placed any orders today</div>
          <button className="kite-btn-outline" type="button">
            Get started
          </button>
        </div>
      ) : (
        <div className="kite-card">
          <div className="kite-card-title">Your orders</div>

          <div className="kite-order-table">
            <div className="kite-order-row kite-order-head">
              <div>Time</div>
              <div>Instrument</div>
              <div>Type</div>
              <div>Qty</div>
              <div>Price</div>
              <div>Status</div>
            </div>

            {orders.map((o, idx) => (
              <div className="kite-order-row" key={idx}>
                <div>{o.time ?? "--"}</div>
                <div className="kite-strong">{o.symbol ?? String(o)}</div>
                <div>{o.orderType ?? "--"}</div>
                <div className="kite-num">{o.qty ?? "--"}</div>
                <div className="kite-num">
                  {o.price !== undefined && o.price !== null ? Number(o.price).toFixed(2) : "--"}
                </div>
                <div className={o.status === "REJECTED" ? "kite-neg" : "kite-muted"}>
                  {o.status ?? "--"}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

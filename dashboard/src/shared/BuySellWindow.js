import React, { useMemo, useState } from "react";

export default function BuySellWindow({
  open,
  side = "BUY", // BUY | SELL
  symbol = "INFY",
  onClose,
  onSubmit,
}) {
  const isBuy = side === "BUY";

  const [mode, setMode] = useState("REGULAR"); // REGULAR | COVER | AMO
  const [product, setProduct] = useState("CNC"); // MIS | CNC
  const [qty, setQty] = useState(1);

  const [priceType, setPriceType] = useState("MARKET"); // MARKET | LIMIT
  const [price, setPrice] = useState(137.6);

  const [triggerType, setTriggerType] = useState(""); // "" | "SL" | "SL-M"
  const [triggerPrice, setTriggerPrice] = useState("");

  const headerTitle = `${side} ${symbol}  NSE  x ${qty} Qty`;

  // fake exchange prices like in screenshot
  const exchange = useMemo(
    () => ({
      BSE: "₹212.75",
      NSE: "₹212.70",
    }),
    []
  );

  const marginRequired = useMemo(() => {
    // simple demo calc
    const base = product === "MIS" ? 120.0 : 140.0;
    const q = Number(qty || 0);
    return (base + q * 0.65).toFixed(2);
  }, [product, qty]);

  if (!open) return null;

  const submit = (e) => {
    e.preventDefault();

    const payload = {
      side,
      symbol,
      mode, // REGULAR/COVER/AMO
      product, // MIS/CNC
      qty: Number(qty),
      priceType, // MARKET/LIMIT
      price: priceType === "LIMIT" ? Number(price) : null,
      triggerType, // SL/SL-M/""
      triggerPrice: triggerType ? Number(triggerPrice || 0) : null,
    };

    onSubmit?.(payload);
  };

  return (
    <div className="kite-modal-backdrop" onClick={onClose}>
      <div className="kite-modal" onClick={(e) => e.stopPropagation()}>
        {/* HEADER */}
        <div className={"kite-modal-header " + (isBuy ? "buy" : "sell")}>
          <div className="kite-modal-title">{headerTitle}</div>

          <div className="kite-modal-sub">
            <label>
              <input type="radio" name="ex" defaultChecked />
              <span> BSE {exchange.BSE}</span>
            </label>
            <label>
              <input type="radio" name="ex" />
              <span> NSE {exchange.NSE}</span>
            </label>
          </div>
        </div>

        {/* TABS */}
        <div className="kite-modal-tabs">
          <button
            className={"kite-tab " + (mode === "REGULAR" ? "active" : "")}
            onClick={() => setMode("REGULAR")}
            type="button"
          >
            Regular
          </button>
          <button
            className={"kite-tab " + (mode === "COVER" ? "active" : "")}
            onClick={() => setMode("COVER")}
            type="button"
          >
            Cover
          </button>
          <button
            className={"kite-tab " + (mode === "AMO" ? "active" : "")}
            onClick={() => setMode("AMO")}
            type="button"
          >
            AMO
          </button>
        </div>

        {/* BODY */}
        <form onSubmit={submit} className="kite-modal-body">
          {/* MIS/CNC */}
          <div className="kite-row-2">
            <label className="kite-radio">
              <input
                type="radio"
                name="product"
                checked={product === "MIS"}
                onChange={() => setProduct("MIS")}
              />
              <span> Intraday MIS</span>
            </label>

            <label className="kite-radio">
              <input
                type="radio"
                name="product"
                checked={product === "CNC"}
                onChange={() => setProduct("CNC")}
              />
              <span> Longterm CNC</span>
            </label>
          </div>

          {/* Qty + Price */}
          <div className="kite-row-2 kite-gap-lg">
            <div className="kite-field">
              <div className="kite-label">Qty.</div>
              <input
                className="kite-input"
                type="number"
                min="1"
                value={qty}
                onChange={(e) => setQty(e.target.value)}
              />
              <div className="kite-more">More</div>
            </div>

            <div className="kite-field">
              <div className="kite-label">Price</div>
              <input
                className="kite-input"
                type="number"
                step="0.05"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                disabled={priceType === "MARKET"}
              />

              <div className="kite-inline">
                <label className="kite-radio small">
                  <input
                    type="radio"
                    name="ptype"
                    checked={priceType === "MARKET"}
                    onChange={() => setPriceType("MARKET")}
                  />
                  <span> Market</span>
                </label>
                <label className="kite-radio small">
                  <input
                    type="radio"
                    name="ptype"
                    checked={priceType === "LIMIT"}
                    onChange={() => setPriceType("LIMIT")}
                  />
                  <span> Limit</span>
                </label>
              </div>
            </div>
          </div>

          {/* Trigger */}
          <div className="kite-row-2 kite-gap-lg">
            <div className="kite-field">
              <div className="kite-label">Trigger price</div>
              <input
                className="kite-input"
                type="number"
                step="0.05"
                placeholder="Trigger price"
                value={triggerPrice}
                onChange={(e) => setTriggerPrice(e.target.value)}
                disabled={!triggerType}
              />
            </div>

            <div className="kite-inline right">
              <label className="kite-radio small">
                <input
                  type="radio"
                  name="sl"
                  checked={triggerType === "SL"}
                  onChange={() => setTriggerType("SL")}
                />
                <span> SL</span>
              </label>
              <label className="kite-radio small">
                <input
                  type="radio"
                  name="sl"
                  checked={triggerType === "SL-M"}
                  onChange={() => setTriggerType("SL-M")}
                />
                <span> SL-M</span>
              </label>
              <label className="kite-radio small">
                <input
                  type="radio"
                  name="sl"
                  checked={triggerType === ""}
                  onChange={() => setTriggerType("")}
                />
                <span> --</span>
              </label>
            </div>
          </div>

          {/* FOOTER */}
          <div className="kite-modal-footer">
            <div className="kite-muted-sm">
              Margin required <b>₹{marginRequired}</b>
            </div>

            <div className="kite-footer-actions">
              <button
                className={"kite-btn " + (isBuy ? "buy" : "sell")}
                type="submit"
              >
                {isBuy ? "Buy" : "Sell"}
              </button>
              <button className="kite-btn ghost" type="button" onClick={onClose}>
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

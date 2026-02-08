import React from "react";

export default function Funds() {
  // ✅ Demo values (Zerodha-like sample)
  const equity = {
    availableMargin: "4,043.10",
    usedMargin: "0.00",
    availableCash: "4,043.10",

    openingBalance: "4,043.10",
    payin: "0.00",
    payout: "0.00",

    span: "0.00",
    deliveryMargin: "0.00",
    exposure: "0.00",
    optionsPremium: "0.00",

    collateralLiquid: "0.00",
    collateralEquity: "0.00",
    totalCollateral: "0.00",
  };

  return (
    <div className="page">
      {/* top actions */}
      <div className="funds-top">
        <button className="funds-btn funds-btn-primary">Add funds</button>
        <button className="funds-btn funds-btn-outline">Withdraw</button>
      </div>

      {/* Equity */}
      <div className="section">
        <div className="section-title">Equity</div>

        <div className="funds-card">
          <div className="funds-row">
            <span className="muted">Available margin</span>
            <span>{equity.availableMargin}</span>
          </div>

          <div className="funds-row">
            <span className="muted">Used margin</span>
            <span>{equity.usedMargin}</span>
          </div>

          <div className="funds-row">
            <span className="muted">Available cash</span>
            <span>{equity.availableCash}</span>
          </div>

          <div className="funds-hr" />

          <div className="funds-row">
            <span className="muted">Opening balance</span>
            <span>{equity.openingBalance}</span>
          </div>

          <div className="funds-row">
            <span className="muted">Payin</span>
            <span>{equity.payin}</span>
          </div>

          <div className="funds-row">
            <span className="muted">Payout</span>
            <span>{equity.payout}</span>
          </div>

          <div className="funds-row">
            <span className="muted">SPAN</span>
            <span>{equity.span}</span>
          </div>

          <div className="funds-row">
            <span className="muted">Delivery margin</span>
            <span>{equity.deliveryMargin}</span>
          </div>

          <div className="funds-row">
            <span className="muted">Exposure</span>
            <span>{equity.exposure}</span>
          </div>

          <div className="funds-row">
            <span className="muted">Options premium</span>
            <span>{equity.optionsPremium}</span>
          </div>

          <div className="funds-hr" />

          <div className="funds-row">
            <span className="muted">Collateral (Liquid funds)</span>
            <span>{equity.collateralLiquid}</span>
          </div>

          <div className="funds-row">
            <span className="muted">Collateral (Equity)</span>
            <span>{equity.collateralEquity}</span>
          </div>

          <div className="funds-row">
            <span className="muted">Total collateral</span>
            <span>{equity.totalCollateral}</span>
          </div>
        </div>
      </div>

      {/* Commodity */}
      <div className="funds-commodity">
        <div className="muted">You don’t have a commodity account</div>
      </div>
    </div>
  );
}

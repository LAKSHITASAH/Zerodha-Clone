// src/Pricing/ChargesTable.js
import React, { useState } from "react";

const tabs = ["Equity", "Currency", "Commodity"];

const ChargesTable = () => {
  const [activeTab, setActiveTab] = useState("Equity");

  return (
    <section style={{ maxWidth: "1100px", margin: "40px auto 80px" }}>
      {/* Tabs */}
      <div
        style={{
          display: "flex",
          gap: "32px",
          fontSize: "22px",
          marginBottom: "16px",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              border: "none",
              background: "none",
              padding: "8px 0",
              marginBottom: "-1px",
              cursor: "pointer",
              fontSize: "inherit",
              color: activeTab === tab ? "#1f4ba8" : "#666",
              borderBottom:
                activeTab === tab ? "3px solid #1f4ba8" : "3px solid transparent",
              fontWeight: activeTab === tab ? 600 : 400,
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tables for each tab */}
      {activeTab === "Equity" && <EquityTable />}
      {activeTab === "Currency" && <CurrencyTable />}
      {activeTab === "Commodity" && <CommodityTable />}

      {/* Bottom link */}
      <div
        style={{
          textAlign: "center",
          marginTop: "32px",
          fontSize: "18px",
        }}
      >
        <a
          href="#"
          style={{
            color: "#1f4ba8",
            textDecoration: "none",
          }}
        >
          Calculate your costs upfront
        </a>{" "}
        using our brokerage calculator
      </div>
    </section>
  );
};

/* ----------------- SHARED STYLES ----------------- */

const tableWrapper = {
  border: "1px solid #e0e0e0",
  borderRadius: "4px",
  overflow: "hidden",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  fontSize: "14px",
};

const thStyle = {
  padding: "12px 16px",
  borderBottom: "1px solid #e0e0e0",
  backgroundColor: "#fafafa",
  textAlign: "left",
  fontWeight: 600,
};

const rowHeadingStyle = {
  padding: "12px 16px",
  borderBottom: "1px solid #f2f2f2",
  backgroundColor: "#fafafa",
  fontWeight: 600,
  width: "180px",
};

const tdStyle = {
  padding: "12px 16px",
  borderBottom: "1px solid #f2f2f2",
  verticalAlign: "top",
};

/* ----------------- EQUITY TABLE ----------------- */

const EquityTable = () => (
  <div style={tableWrapper}>
    <table style={tableStyle}>
      <thead>
        <tr>
          <th style={thStyle}></th>
          <th style={thStyle}>Equity delivery</th>
          <th style={thStyle}>Equity intraday</th>
          <th style={thStyle}>F&amp;O - Futures</th>
          <th style={thStyle}>F&amp;O - Options</th>
        </tr>
      </thead>
      <tbody>
        {/* Brokerage */}
        <tr>
          <td style={rowHeadingStyle}>Brokerage</td>
          <td style={tdStyle}>Zero Brokerage</td>
          <td style={tdStyle}>
            0.03% or Rs. 20/executed order whichever is lower
          </td>
          <td style={tdStyle}>
            0.03% or Rs. 20/executed order whichever is lower
          </td>
          <td style={tdStyle}>Flat Rs. 20 per executed order</td>
        </tr>

        {/* STT / CTT */}
        <tr>
          <td style={rowHeadingStyle}>STT/CTT</td>
          <td style={tdStyle}>0.1% on buy &amp; sell</td>
          <td style={tdStyle}>0.025% on the sell side</td>
          <td style={tdStyle}>0.02% on the sell side</td>
          <td style={tdStyle}>
            <ul style={{ margin: 0, paddingLeft: "18px" }}>
              <li>
                0.125% of the intrinsic value on options that are bought and
                exercised
              </li>
              <li>0.1% on sell side (on premium)</li>
            </ul>
          </td>
        </tr>

        {/* Transaction charges */}
        <tr>
          <td style={rowHeadingStyle}>Transaction charges</td>
          <td style={tdStyle}>
            NSE: 0.00297% <br />
            BSE: 0.00375%
          </td>
          <td style={tdStyle}>
            NSE: 0.00297% <br />
            BSE: 0.00375%
          </td>
          <td style={tdStyle}>
            NSE: 0.00173% <br />
            BSE: 0
          </td>
          <td style={tdStyle}>
            NSE: 0.03503% (on premium) <br />
            BSE: 0.0325% (on premium)
          </td>
        </tr>

        {/* GST */}
        <tr>
          <td style={rowHeadingStyle}>GST</td>
          <td style={tdStyle}>
            18% on (brokerage + SEBI charges + transaction charges)
          </td>
          <td style={tdStyle}>
            18% on (brokerage + SEBI charges + transaction charges)
          </td>
          <td style={tdStyle}>
            18% on (brokerage + SEBI charges + transaction charges)
          </td>
          <td style={tdStyle}>
            18% on (brokerage + SEBI charges + transaction charges)
          </td>
        </tr>

        {/* SEBI charges */}
        <tr>
          <td style={rowHeadingStyle}>SEBI charges</td>
          <td style={tdStyle}>₹10 / crore</td>
          <td style={tdStyle}>₹10 / crore</td>
          <td style={tdStyle}>₹10 / crore</td>
          <td style={tdStyle}>₹10 / crore</td>
        </tr>

        {/* Stamp charges */}
        <tr>
          <td style={rowHeadingStyle}>Stamp charges</td>
          <td style={tdStyle}>0.015% or ₹1500 / crore on buy side</td>
          <td style={tdStyle}>0.003% or ₹300 / crore on buy side</td>
          <td style={tdStyle}>0.002% or ₹200 / crore on buy side</td>
          <td style={tdStyle}>0.003% or ₹300 / crore on buy side</td>
        </tr>
      </tbody>
    </table>
  </div>
);

/* ----------------- CURRENCY TABLE ----------------- */

const CurrencyTable = () => (
  <div style={tableWrapper}>
    <table style={tableStyle}>
      <thead>
        <tr>
          <th style={thStyle}></th>
          <th style={thStyle}>Currency futures</th>
          <th style={thStyle}>Currency options</th>
        </tr>
      </thead>
      <tbody>
        {/* Brokerage */}
        <tr>
          <td style={rowHeadingStyle}>Brokerage</td>
          <td style={tdStyle}>
            0.03% or ₹ 20/executed order whichever is lower
          </td>
          <td style={tdStyle}>₹ 20/executed order</td>
        </tr>

        {/* STT / CTT */}
        <tr>
          <td style={rowHeadingStyle}>STT/CTT</td>
          <td style={tdStyle}>No STT</td>
          <td style={tdStyle}>No STT</td>
        </tr>

        {/* Transaction charges */}
        <tr>
          <td style={rowHeadingStyle}>Transaction charges</td>
          <td style={tdStyle}>
            NSE: 0.00035% <br />
            BSE: 0.00045%
          </td>
          <td style={tdStyle}>
            NSE: 0.0311% <br />
            BSE: 0.001%
          </td>
        </tr>

        {/* GST */}
        <tr>
          <td style={rowHeadingStyle}>GST</td>
          <td style={tdStyle}>
            18% on (brokerage + SEBI charges + transaction charges)
          </td>
          <td style={tdStyle}>
            18% on (brokerage + SEBI charges + transaction charges)
          </td>
        </tr>

        {/* SEBI charges */}
        <tr>
          <td style={rowHeadingStyle}>SEBI charges</td>
          <td style={tdStyle}>₹10 / crore</td>
          <td style={tdStyle}>₹10 / crore</td>
        </tr>

        {/* Stamp charges */}
        <tr>
          <td style={rowHeadingStyle}>Stamp charges</td>
          <td style={tdStyle}>0.0001% or ₹10 / crore on buy side</td>
          <td style={tdStyle}>0.0001% or ₹10 / crore on buy side</td>
        </tr>
      </tbody>
    </table>
  </div>
);

/* ----------------- COMMODITY TABLE ----------------- */

const CommodityTable = () => (
  <div style={tableWrapper}>
    <table style={tableStyle}>
      <thead>
        <tr>
          <th style={thStyle}></th>
          <th style={thStyle}>Commodity futures</th>
          <th style={thStyle}>Commodity options</th>
        </tr>
      </thead>
      <tbody>
        {/* Brokerage */}
        <tr>
          <td style={rowHeadingStyle}>Brokerage</td>
          <td style={tdStyle}>
            0.03% or Rs. 20/executed order whichever is lower
          </td>
          <td style={tdStyle}>₹ 20/executed order</td>
        </tr>

        {/* STT / CTT */}
        <tr>
          <td style={rowHeadingStyle}>STT/CTT</td>
          <td style={tdStyle}>0.01% on sell side (Non-Agri)</td>
          <td style={tdStyle}>0.05% on sell side</td>
        </tr>

        {/* Transaction charges */}
        <tr>
          <td style={rowHeadingStyle}>Transaction charges</td>
          <td style={tdStyle}>
            MCX: 0.0021% <br />
            NSE: 0.0001%
          </td>
          <td style={tdStyle}>
            MCX: 0.0418% <br />
            NSE: 0.001%
          </td>
        </tr>

        {/* GST */}
        <tr>
          <td style={rowHeadingStyle}>GST</td>
          <td style={tdStyle}>
            18% on (brokerage + SEBI charges + transaction charges)
          </td>
          <td style={tdStyle}>
            18% on (brokerage + SEBI charges + transaction charges)
          </td>
        </tr>

        {/* SEBI charges */}
        <tr>
          <td style={rowHeadingStyle}>SEBI charges</td>
          <td style={tdStyle}>
            Agri:
            <br />
            ₹1 / crore
            <br />
            <br />
            Non-agri:
            <br />
            ₹10 / crore
          </td>
          <td style={tdStyle}>₹10 / crore</td>
        </tr>

        {/* Stamp charges */}
        <tr>
          <td style={rowHeadingStyle}>Stamp charges</td>
          <td style={tdStyle}>0.002% or ₹200 / crore on buy side</td>
          <td style={tdStyle}>0.003% or ₹300 / crore on buy side</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default ChargesTable;

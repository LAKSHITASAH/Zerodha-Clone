// src/Pricing/Brokerage.js
import React from "react";

const cardStyle = {
  flex: 1,
  minWidth: 250,
  padding: "32px 24px 40px",
  margin: "12px",
  borderRadius: "10px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  textAlign: "center",
};

const priceStyle = {
  fontSize: "96px",
  fontWeight: 600,
  color: "#f4a300",
  lineHeight: 1,
};

const labelStyle = {
  fontSize: "20px",
  marginTop: "16px",
};

const Brokerage = () => {
  return (
    <section style={{ paddingBottom: "60px" }}>
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {/* Card 1 */}
        <div style={cardStyle}>
          <div style={priceStyle}>₹0</div>
          <p style={labelStyle}>Free equity delivery</p>
        </div>

        {/* Card 2 */}
        <div style={cardStyle}>
          <div style={priceStyle}>₹20</div>
          <p style={labelStyle}>Intraday and F&amp;O trades</p>
        </div>

        {/* Card 3 */}
        <div style={cardStyle}>
          <div style={priceStyle}>₹0</div>
          <p style={labelStyle}>Free direct MF</p>
        </div>
      </div>
    </section>
  );
};

export default Brokerage;

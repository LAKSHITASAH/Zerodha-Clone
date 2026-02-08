// src/Pricing/AccountCharges.js
import React from "react";

const wrapperStyle = {
  maxWidth: "1100px",
  margin: "0 auto 80px",
};

const sectionTitleStyle = {
  fontSize: "28px",
  fontWeight: 500,
  margin: "40px 0 16px",
};

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

const tdStyle = {
  padding: "12px 16px",
  borderBottom: "1px solid #f2f2f2",
};

const freeBadgeStyle = {
  display: "inline-block",
  padding: "2px 10px",
  borderRadius: "3px",
  fontSize: "12px",
  fontWeight: 600,
  backgroundColor: "#27ae60",
  color: "#fff",
};

const noteStyle = {
  fontSize: "12px",
  color: "#666",
  marginTop: "8px",
};

const AccountCharges = () => {
  return (
    <div style={wrapperStyle}>
      {/* Charges for account opening */}
      <h2 style={sectionTitleStyle}>Charges for account opening</h2>
      <div style={tableWrapper}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Type of account</th>
              <th style={thStyle}>Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Online account</td>
              <td style={tdStyle}>
                <span style={freeBadgeStyle}>FREE</span>
              </td>
            </tr>
            <tr style={{ backgroundColor: "#fafafa" }}>
              <td style={tdStyle}>Offline account</td>
              <td style={tdStyle}>
                <span style={freeBadgeStyle}>FREE</span>
              </td>
            </tr>
            <tr>
              <td style={tdStyle}>NRI account (offline only)</td>
              <td style={tdStyle}>₹ 500</td>
            </tr>
            <tr style={{ backgroundColor: "#fafafa" }}>
              <td style={tdStyle}>
                Partnership, LLP, HUF, or Corporate accounts (offline only)
              </td>
              <td style={tdStyle}>₹ 500</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Demat AMC */}
      <h2 style={sectionTitleStyle}>
        Demat AMC (Annual Maintenance Charge)
      </h2>
      <div style={tableWrapper}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Value of holdings</th>
              <th style={thStyle}>AMC</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Up to ₹4 lakh</td>
              <td style={tdStyle}>
                <span style={freeBadgeStyle}>FREE*</span>
              </td>
            </tr>
            <tr style={{ backgroundColor: "#fafafa" }}>
              <td style={tdStyle}>₹4 lakh – ₹10 lakh</td>
              <td style={tdStyle}>₹ 100 per year, charged quarterly*</td>
            </tr>
            <tr>
              <td style={tdStyle}>Above ₹10 lakh</td>
              <td style={tdStyle}>₹ 300 per year, charged quarterly</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={noteStyle}>
        * Lower AMC is applicable only if the account qualifies as a Basic
        Services Demat Account (BSDA). BSDA account holders cannot hold more
        than one demat account.
      </p>
    </div>
  );
};

export default AccountCharges;

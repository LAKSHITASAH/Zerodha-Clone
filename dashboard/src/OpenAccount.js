import React from "react";
import { Link } from "react-router-dom";

export default function OpenAccount() {
  return (
    <section style={styles.wrap}>
      <div style={styles.inner}>
        <h2 style={styles.title}>Open a Zerodha account</h2>
        <p style={styles.subtitle}>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&amp;O trades.
        </p>

        <div style={styles.actions}>
          <Link to="/signup" style={styles.primaryBtn}>
            Sign up for free
          </Link>
          <Link to="/login" style={styles.secondaryBtn}>
            Login
          </Link>
        </div>

        <p style={styles.note}>
          Demo project: signup stores user in localStorage and opens Kite dashboard.
        </p>
      </div>
    </section>
  );
}

const styles = {
  wrap: {
    padding: "64px 0",
    background: "#fff",
    borderTop: "1px solid #eee",
  },
  inner: {
    width: "min(1120px, calc(100% - 48px))",
    margin: "0 auto",
    textAlign: "center",
  },
  title: {
    margin: 0,
    fontSize: 32,
    fontWeight: 700,
    color: "#1f2d3d",
  },
  subtitle: {
    margin: "12px auto 0",
    maxWidth: 760,
    fontSize: 16,
    lineHeight: 1.6,
    color: "#6b7c93",
  },
  actions: {
    marginTop: 22,
    display: "flex",
    gap: 12,
    justifyContent: "center",
    flexWrap: "wrap",
  },
  primaryBtn: {
    display: "inline-block",
    padding: "12px 18px",
    background: "#387ed1",
    color: "#fff",
    borderRadius: 6,
    textDecoration: "none",
    fontWeight: 700,
  },
  secondaryBtn: {
    display: "inline-block",
    padding: "12px 18px",
    background: "#fff",
    color: "#387ed1",
    border: "1px solid #cfd8e3",
    borderRadius: 6,
    textDecoration: "none",
    fontWeight: 700,
  },
  note: {
    marginTop: 14,
    fontSize: 13,
    color: "#8a94a6",
  },
};

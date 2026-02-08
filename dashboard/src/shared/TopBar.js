import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../auth";

export default function TopBar() {
  const navigate = useNavigate();

  const user =
    (() => {
      try {
        return JSON.parse(localStorage.getItem("zerodha_user") || "null");
      } catch {
        return null;
      }
    })() || {};

  const username = (user.email || "USERID").toUpperCase();
  const avatarText = (user.name || user.email || "USER")
    .toString()
    .trim()
    .slice(0, 2)
    .toUpperCase();

  function handleLogout() {
    logout(); // ✅ your auth.js (sets false)
    navigate("/login", { replace: true });
  }

  return (
    <header className="kite-topbar">
      <div className="kite-topbar-left">
        <div className="kite-indices">
          <div className="idx">
            <span className="idx-name">NIFTY 50</span>
            <span className="idx-val neg">100.2</span>
          </div>
          <div className="idx">
            <span className="idx-name">SENSEX</span>
            <span className="idx-val neg">100.2</span>
          </div>
        </div>
      </div>

      <div className="kite-topbar-center">
        <div className="kite-logo" title="Kite">
          <span className="kite-logo-mark" />
        </div>
      </div>

      <div className="kite-topbar-right">
        <nav className="kite-nav">
          <NavLink
            to="/app"
            end
            className={({ isActive }) => "navitem " + (isActive ? "active" : "")}
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/app/orders"
            className={({ isActive }) => "navitem " + (isActive ? "active" : "")}
          >
            Orders
          </NavLink>

          <NavLink
            to="/app/holdings"
            className={({ isActive }) => "navitem " + (isActive ? "active" : "")}
          >
            Holdings
          </NavLink>

          <NavLink
            to="/app/positions"
            className={({ isActive }) => "navitem " + (isActive ? "active" : "")}
          >
            Positions
          </NavLink>

          <NavLink
            to="/app/funds"
            className={({ isActive }) => "navitem " + (isActive ? "active" : "")}
          >
            Funds
          </NavLink>

          <NavLink
            to="/app/apps"
            className={({ isActive }) => "navitem " + (isActive ? "active" : "")}
          >
            Apps
          </NavLink>
        </nav>

        {/* ✅ user + logout */}
        <div className="kite-user" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span className="kite-avatar">{avatarText}</span>
          <span className="kite-username" title={username}>
            {username}
          </span>

          <button
            onClick={handleLogout}
            style={{
              border: "1px solid #d9deea",
              background: "#fff",
              padding: "6px 10px",
              borderRadius: 8,
              cursor: "pointer",
              fontWeight: 600,
              fontSize: 12,
            }}
            title="Logout"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}

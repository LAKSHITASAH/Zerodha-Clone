import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./LandingNavbar.css";

export default function LandingNavbar() {
  return (
    <header className="landing-nav">
      <div className="landing-nav-inner">
        <Link to="/home" className="landing-brand">
          <img src="/download.png" alt="Zerodha" />
          <span>ZERODHA</span>
        </Link>

        <nav className="landing-links">
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Signup</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/product">Product</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
          <NavLink to="/support">Support</NavLink>
        </nav>
      </div>
    </header>
  );
}

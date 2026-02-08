import React, { useState } from "react";
import { useNavigate, Link, Navigate, useLocation } from "react-router-dom";
import { login, isLoggedIn } from "../auth";

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  if (isLoggedIn()) return <Navigate to="/app" replace />;

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!email || !pass) {
      setError("Please enter email and password");
      return;
    }

    const raw = localStorage.getItem("zerodha_user");
    if (raw) {
      const user = JSON.parse(raw);
      const ok =
        user.email?.toLowerCase() === email.toLowerCase() &&
        user.password === pass;

      if (!ok) {
        setError("Invalid email or password");
        return;
      }
    }

    login();
    const to = location.state?.from?.pathname || "/app";
    navigate(to, { replace: true });
  }

  return (
    <div>
      <header style={styles.nav}>
        <div style={styles.navInner}>
          {/* ✅ Logo click -> Hero/Home page */}
          <Link to="/home" style={styles.brand}>
            <div style={styles.logo} />
            <span style={styles.brandText}>ZERODHA</span>
          </Link>

          <nav style={styles.navLinks}>
            <Link to="/login" style={styles.linkActive}>Login</Link>
            <Link to="/signup" style={styles.link}>Signup</Link>

            <Link to="/about" style={styles.link}>About</Link>
            <Link to="/product" style={styles.link}>Product</Link>
            <Link to="/pricing" style={styles.link}>Pricing</Link>
            <Link to="/support" style={styles.link}>Support</Link>
          </nav>

          <button style={styles.hamburger} aria-label="menu">☰</button>
        </div>
      </header>

      <main style={styles.authWrap}>
        <section style={styles.card}>
          <h1 style={styles.h1}>Login</h1>

          {error ? <div style={styles.error}>{error}</div> : null}

          <form onSubmit={handleSubmit}>
            <div style={styles.field}>
              <label style={styles.label}>Email address</label>
              <input
                style={styles.input}
                placeholder="Enter email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div style={styles.field}>
              <label style={styles.label}>Password</label>
              <input
                style={styles.input}
                placeholder="Enter password"
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
            </div>

            <button type="submit" style={styles.btn}>Login</button>

            <div style={styles.bottomText}>
              Don’t have an account?{" "}
              <Link to="/signup" style={styles.bottomLink}>Signup</Link>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}

const styles = {
  nav: { height: 72, borderBottom: "1px solid #eee", display: "flex", alignItems: "center", background: "#fff" },
  navInner: { width: "min(1120px, calc(100% - 48px))", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" },
  brand: { display: "flex", alignItems: "center", gap: 10, textDecoration: "none" },
  logo: { width: 26, height: 26, borderRadius: 4, background: "linear-gradient(145deg, #2b6cb0, #4aa3ff)", clipPath: "polygon(0 0, 65% 0, 100% 100%, 0 100%)" },
  brandText: { fontSize: 20, color: "#1d4ed8", fontWeight: 700 },
  navLinks: { display: "flex", gap: 26, alignItems: "center" },
  link: { color: "#2b2f36", fontWeight: 500, textDecoration: "none" },
  linkActive: { color: "#387ed1", fontWeight: 700, textDecoration: "none" },
  hamburger: { display: "none", border: "1px solid #ddd", padding: "8px 10px", borderRadius: 6, background: "#fff", cursor: "pointer" },

  authWrap: { minHeight: "calc(100vh - 72px)", display: "grid", placeItems: "center", padding: "40px 0", background: "#fff" },
  card: { width: "min(520px, 92vw)", background: "#fff", border: "1px solid #eee", borderRadius: 4, boxShadow: "0 12px 28px rgba(16,24,40,.12)", padding: "44px 48px" },
  h1: { margin: "0 0 18px", fontSize: 44, fontWeight: 700, textAlign: "center" },
  error: { marginBottom: 16, background: "#fff2f2", border: "1px solid #ffd0d0", padding: "10px 12px", borderRadius: 6, color: "#b42318", fontSize: 14 },
  field: { marginBottom: 18 },
  label: { display: "block", fontSize: 16, marginBottom: 8, color: "#222" },
  input: { width: "100%", height: 46, border: "1px solid #dfe3e8", borderRadius: 4, padding: "0 14px", fontSize: 16, outline: "none" },
  btn: { width: "100%", height: 48, border: 0, borderRadius: 4, background: "#387ed1", color: "#fff", fontSize: 18, fontWeight: 600, cursor: "pointer", marginTop: 10 },
  bottomText: { marginTop: 14, textAlign: "center", color: "#2b2f36" },
  bottomLink: { color: "#387ed1", fontWeight: 700, textDecoration: "none" },
};

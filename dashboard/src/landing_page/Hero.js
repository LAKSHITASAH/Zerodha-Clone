// src/Support/Hero.js
import React from "react";

const Hero = () => {
  return (
    <header
      style={{
        backgroundColor: "#f7f7f7",
        padding: "32px 0 24px",
        borderBottom: "1px solid #e3e3e3",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <h1
            style={{
              fontSize: "36px",
              fontWeight: 500,
            }}
          >
            Support Portal
          </h1>

          <button
            style={{
              padding: "8px 18px",
              borderRadius: "4px",
              border: "none",
              backgroundColor: "#404040",
              color: "#fff",
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            My tickets
          </button>
        </div>

        {/* Search bar */}
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "4px",
            border: "1px solid #e0e0e0",
            padding: "10px 16px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span
            style={{
              marginRight: "8px",
              fontSize: "18px",
              opacity: 0.5,
            }}
          >
            🔍
          </span>
          <input
            type="text"
            placeholder="Eg: How do I open my account, How do I activate F&O..."
            style={{
              border: "none",
              outline: "none",
              width: "100%",
              fontSize: "15px",
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;

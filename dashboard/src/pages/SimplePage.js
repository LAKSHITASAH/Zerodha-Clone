import React from "react";

export default function SimplePage({ title }) {
  return (
    <div className="page">
      <div className="page-title">{title}</div>
      <div className="muted pad">Coming soon…</div>
    </div>
  );
}

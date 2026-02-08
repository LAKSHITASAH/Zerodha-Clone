import React from "react";
import "./Team.css";

function Team() {
  return (
    <div className="team-section">
      <h1 className="team-title">People</h1>

      {/* ===== LAKSHITA SAH ===== */}
      <div className="team-container">
        <div className="team-image-wrapper">
          <img
  src="/my photo.jpeg"
  alt="Lakshita Sah"
  className="team-image"
/>

          <h2 className="team-name">Lakshita Sah</h2>
          <p className="team-role">CEO</p>
        </div>

        <div className="team-info">
          <p>
            Lakshita Sah is the CEO, leading the company with a strong focus on
            innovation, strategy, and long-term growth.
          </p>

          <p>
            She plays a key role in shaping organizational vision, overseeing
            operations, and driving impactful decision-making.
          </p>

          <p>Leadership, creativity, and execution define her approach.</p>

          <p>
            <p>
  Connect on{" "}
  <a
    href="https://www.linkedin.com/in/lakshita-sah-b06b0b283"
    target="_blank"
    rel="noopener noreferrer"
  >
    LinkedIn
  </a>{" "}
  / <a href="#">Twitter</a>
</p>

          </p>
        </div>
      </div>

      {/* ===== NITHIN KAMATH ===== */}
      <div className="team-container">
        <div className="team-image-wrapper">
          <img
            src="/nithin-kamath.jpg"
            alt="Nithin Kamath"
            className="team-image"
          />
          <h2 className="team-name">Nithin Kamath</h2>
          <p className="team-role">Founder</p>
        </div>

        <div className="team-info">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade-long stint as a trader. Today,
            Zerodha has transformed the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC)
            and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>

          <p>
            Connect on <a href="#">Homepage</a> /{" "}
            <a href="#">TradingQnA</a> / <a href="#">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;

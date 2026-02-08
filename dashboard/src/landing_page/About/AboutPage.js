import React from "react";
import "./About.css";
import Team from "./Team";
function AboutPage() {
  return (
    <>
      <main className="about-page">
        {/* Top heading */}
        <section className="about-hero">
          <h1>We pioneered the discount broking model in India.</h1>
          <h1>Now, we are breaking ground with our technology.</h1>
        </section>

        <hr className="about-divider" />

        {/* Two-column text section */}
        <section className="about-content">
          <div className="about-col">
            <p>
              We started operations in August 2010 with the goal of removing all
              barriers that traders and investors in India faced in terms of
              cost, support, and technology. The name Zerodha comes from a
              combination of “Zero” and “Rodh”, the Sanskrit word for barrier.
            </p>
            <p>
              Our low, transparent pricing model and in-house technology have
              helped us become one of the largest stock brokers in India by
              active clients.
            </p>
            <p>
              Today, millions of clients place orders through our platforms
              every day across equity, derivatives, currencies, and
              commodities.
            </p>
          </div>

          <div className="about-col">
            <p>
              Alongside our broking business, we also run several open online
              education and community initiatives to help retail investors and
              traders learn about the markets.
            </p>
            <p>
              <a
                href="https://rainmatter.com"
                target="_blank"
                rel="noreferrer"
              >
                Rainmatter
              </a>
              , our fintech fund and incubator, has invested in multiple
              startups building tools and platforms around the Indian capital
              markets.
            </p>
            <p>
              You can read more on our{" "}
              <a
                href="https://zerodha.com/z-connect"
                target="_blank"
                rel="noreferrer"
              >
                blog
              </a>{" "}
              or see what the media is{" "}
              <a
                href="https://zerodha.com/media"
                target="_blank"
                rel="noreferrer"
              >
                saying about us
              </a>
              , and learn more about our business and product{" "}
              <a
                href="https://zerodha.com/philosophy"
                target="_blank"
                rel="noreferrer"
              >
                philosophies
              </a>
              .
            </p>
          </div>
        </section>
      </main>

      {/* People / founder section */}
      <Team />
    </>
  );
}

export default AboutPage;

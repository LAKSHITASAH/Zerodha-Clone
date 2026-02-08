// src/Pricing/ChargesExplained.js
import React from "react";

const wrapperStyle = {
  maxWidth: "1100px",
  margin: "40px auto 80px",
};

const titleStyle = {
  fontSize: "32px",
  fontWeight: 500,
  marginBottom: "24px",
};

const columnsStyle = {
  display: "flex",
  gap: "60px",
};

const columnStyle = {
  flex: 1,
};

const headingStyle = {
  fontSize: "20px",
  fontWeight: 500,
  margin: "16px 0 8px",
};

const paragraphStyle = {
  fontSize: "14px",
  lineHeight: 1.6,
  color: "#555",
  marginBottom: "10px",
};

const ChargesExplained = () => {
  return (
    <section style={wrapperStyle}>
      <h2 style={titleStyle}>Charges explained</h2>

      <div style={columnsStyle}>
        {/* LEFT COLUMN */}
        <div style={columnStyle}>
          <h3 style={headingStyle}>Securities/Commodities transaction tax</h3>
          <p style={paragraphStyle}>
            Tax by the government when transacting on the exchanges. Charged as
            above on both buy and sell sides when trading equity delivery.
            Charged only on selling side when trading intraday or on F&amp;O.
          </p>
          <p style={paragraphStyle}>
            When trading at Zerodha, STT/CTT can be a lot more than the
            brokerage we charge. Important to keep a tab.
          </p>

          <h3 style={headingStyle}>Transaction/Turnover Charges</h3>
          <p style={paragraphStyle}>
            Charged by exchanges (NSE, BSE, MCX) on the value of your
            transactions.
          </p>
          <p style={paragraphStyle}>
            BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
            to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been
            merged into a new group X w.e.f 01.12.2017)
          </p>
          <p style={paragraphStyle}>
            BSE has revised transaction charges in SS and ST groups to ₹1,00,000
            per crore of gross turnover.
          </p>
          <p style={paragraphStyle}>
            BSE has revised transaction charges for group A, B and other non
            exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC,
            W, T) at ₹375 per crore of turnover on flat rate basis w.e.f.
            December 1, 2022.
          </p>
          <p style={paragraphStyle}>
            BSE has revised transaction charges in M, MT, TS and MS groups to
            ₹275 per crore of gross turnover.
          </p>

          <h3 style={headingStyle}>Call &amp; trade</h3>
          <p style={paragraphStyle}>
            Additional charges of ₹50 per order for orders placed through a
            dealer at Zerodha including auto square off orders.
          </p>

          <h3 style={headingStyle}>Stamp charges</h3>
          <p style={paragraphStyle}>
            Stamp charges by the Government of India as per the Indian Stamp Act
            of 1899 for transacting in instruments on the stock exchanges and
            depositories.
          </p>

          <h3 style={headingStyle}>NRI brokerage charges</h3>
          <p style={paragraphStyle}>
            For a non-PIS account, 0.5% or ₹50 per executed order for equity and
            F&amp;O (whichever is lower).
          </p>
          <p style={paragraphStyle}>
            For a PIS account, 0.5% or ₹200 per executed order for equity
            (whichever is lower).
          </p>
          <p style={paragraphStyle}>
            ₹500 + GST as yearly account maintenance charges (AMC) charges.
          </p>

          <h3 style={headingStyle}>Account with debit balance</h3>
          <p style={paragraphStyle}>
            If the account is in debit balance, any order placed will be charged
            ₹40 per executed order instead of ₹20 per executed order.
          </p>

          <h3 style={headingStyle}>
            Charges for Investor&apos;s Protection Fund Trust (IPFT) by NSE
          </h3>
          <p style={paragraphStyle}>
            Equity and Futures - ₹10 per crore + GST of the traded value.
          </p>
          <p style={paragraphStyle}>
            Options - ₹50 per crore + GST traded value (premium value).
          </p>
          <p style={paragraphStyle}>
            Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per
            lakh + GST of premium for Options.
          </p>

          <h3 style={headingStyle}>Margin Trading Facility (MTF)</h3>
          <p style={paragraphStyle}>
            MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The
            interest is applied from T+1 day until the day MTF stocks are sold.
          </p>
          <p style={paragraphStyle}>
            MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.
          </p>
          <p style={paragraphStyle}>
            MTF pledge charge: ₹15 + GST per pledge and unpledge request per
            ISIN.
          </p>
        </div>

        {/* RIGHT COLUMN */}
        <div style={columnStyle}>
          <h3 style={headingStyle}>GST</h3>
          <p style={paragraphStyle}>
            Tax levied by the government on the services rendered. 18% of
            (brokerage + SEBI charges + transaction charges)
          </p>

          <h3 style={headingStyle}>SEBI Charges</h3>
          <p style={paragraphStyle}>
            Charged at ₹10 per crore + GST by Securities and Exchange Board of
            India for regulating the markets.
          </p>

          <h3 style={headingStyle}>DP (Depository participant) charges</h3>
          <p style={paragraphStyle}>
            ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
            charged on the trading account ledger when stocks are sold,
            irrespective of quantity.
          </p>
          <p style={paragraphStyle}>
            Female demat account holders (as first holder) will enjoy a discount
            of ₹0.25 per transaction on the CDSL fee.
          </p>
          <p style={paragraphStyle}>
            Debit transactions of mutual funds &amp; bonds get an additional
            discount of ₹0.25 on the CDSL fee.
          </p>

          <h3 style={headingStyle}>Pledging charges</h3>
          <p style={paragraphStyle}>
            ₹30 + GST per pledge request per ISIN.
          </p>

          <h3 style={headingStyle}>AMC (Account maintenance charges)</h3>
          <p style={paragraphStyle}>
            For BSDA demat account: Zero charges if the holding value is less
            than ₹4,00,000. To learn more about BSDA, Click here
          </p>
          <p style={paragraphStyle}>
            For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly
            (90 days). To learn more about AMC, Click here
          </p>

          <h3 style={headingStyle}>Corporate action order charges</h3>
          <p style={paragraphStyle}>
            ₹20 plus GST will be charged for OFS / buyback / takeover /
            delisting orders placed through Console.
          </p>

          <h3 style={headingStyle}>Off-market transfer charges</h3>
          <p style={paragraphStyle}>₹25 per transaction.</p>

          <h3 style={headingStyle}>Physical CMR request</h3>
          <p style={paragraphStyle}>
            First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for
            subsequent requests.
          </p>

          <h3 style={headingStyle}>Payment gateway charges</h3>
          <p style={paragraphStyle}>
            ₹9 + GST (Not levied on transfers done via UPI)
          </p>

          <h3 style={headingStyle}>Delayed Payment Charges</h3>
          <p style={paragraphStyle}>
            Interest is levied at 18% a year or 0.05% per day on the debit
            balance in your trading account. Learn more.
          </p>

          <h3 style={headingStyle}>
            Trading using 3-in-1 account with block functionality
          </h3>
          <p style={paragraphStyle}>
            Delivery &amp; MTF Brokerage: 0.5% per executed order.
          </p>
          <p style={paragraphStyle}>
            Intraday Brokerage: 0.05% per executed order.
          </p>

          <h3 style={headingStyle}>Disclaimer</h3>
          <p style={paragraphStyle}>
            For Delivery based trades, a minimum of ₹0.01 will be charged per
            contract note. Clients who opt to receive physical contract notes
            will be charged ₹20 per contract note plus courier charges.
            Brokerage will not exceed the rates specified by SEBI and the
            exchanges. All statutory and regulatory charges will be levied at
            actuals. Brokerage is also charged on expired, exercised, and
            assigned options contracts. Free investments are available only for
            our retail individual clients. Companies, Partnerships, Trusts, and
            HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery
            brokerage. A brokerage of 0.25% of the contract value will be
            charged for contracts where physical delivery happens. For netted
            off positions in physically settled contracts, a brokerage of 0.1%
            will be charged.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChargesExplained;

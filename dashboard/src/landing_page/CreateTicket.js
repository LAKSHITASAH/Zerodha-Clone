// src/Support/CreateTicket.js
import React from "react";
import "./support.css";

const CreateTicket = () => {
  return (
    <section className="support-create-wrapper">
      <div className="support-create-inner">
        <h2 className="support-create-title">Still need help?</h2>
        <p className="support-create-text">
          Raise a ticket and our support team will get back to you.
        </p>
        <button className="support-create-btn">Create a ticket</button>
      </div>
    </section>
  );
};

export default CreateTicket;

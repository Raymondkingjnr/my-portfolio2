import React from "react";
import "./contact.css";
function Contact() {
  return (
    <div className="section--form_sec section-width">
      <div className="contact--form_header">
        <h1>Contact</h1>
        <div className="form--underline"></div>
        <p className="p__poppins">
          submit the form below or send me an email - nnajiarinze001@gmail.com
        </p>
      </div>
      <form
        method="POST"
        action="https://getform.io/f/503d52b9-c83d-4216-907f-bb32b6a7d65b"
        className="contact--form"
      >
        <input
          className="form--name"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="form--email"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="form--message"
          name="message"
          rows="15"
          placeholder="Message"
        ></textarea>
        <button className="contact--form_btn btn">Let's Collaborate</button>
      </form>
    </div>
  );
}

export default Contact;

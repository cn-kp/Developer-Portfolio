import React, { useRef, useState } from "react";
import "./Contact.scss";
import emailjs from "emailjs-com";

export default function Contact() {
  const formRef = useRef();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_pal5gyd",
        "template_olm1omc",
        formRef.current,
        "tSfBZekEuXtfmyPdV"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contacts" id="contacts">
      <div className="contacts-container">
        <div className="social-media">
          <h1 className="contact-title">Contact Me</h1>
          <div className="contact-info">
            <div className="contact-info-list">
              <a href="https://www.linkedin.com/in/kevin-peng-3299b41a2/">
                <img src="assets/images/linkedin.png" alt="" className="icon" />
              </a>
              <p>LinkedIn</p>
            </div>
            <div className="contact-info-list">
              <img className="icon" src="assets/images/gmail.png" alt="" />
              kpeng.work1@gmail.com
            </div>
            <div className="contact-info-list">
              <img className="icon" src="assets/images/location.png" alt="" />
              NSW, Sydney, Australia
            </div>
          </div>
        </div>
        <div className="email-form">
          <p className="email-description">
            Get in touch by sending me an email
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input placeholder="Email" name="user_email" />
            <input placeholder="Message" name="message" />
            <button>Submit</button>
            {sent && "Your Message has been sent"}
          </form>
        </div>
      </div>
    </div>
  );
}

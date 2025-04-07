import "./Contact.scss";
import { Element } from "react-scroll";
import { RiSendPlaneFill } from "react-icons/ri";
import { useState } from "react";
import emailjs from "@emailjs/browser";

import { IoLogoWhatsapp } from "react-icons/io5";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
import { BsLinkedin } from "react-icons/bs";
import { IoCallSharp } from "react-icons/io5";

const Contact = () => {
  const serviceId = import.meta.env.VITE_APP_SERVICE_ID;
  const templateId = import.meta.env.VITE_APP_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_APP_PUBLIC_KEY;

  const [invalidEmail, setInvalidEmail] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const validateEmail = () => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailValue = document.getElementById("email").value;
    const email = emailValue.trim().toLowerCase();

    if (!emailPattern.test(email)) {
      setInvalidEmail(true);
    } else {
      setInvalidEmail(false);
    }

    if (emailValue === "") {
      setInvalidEmail(false);
    }
  };

  const clickIcon = (icon) => {
    if (icon === "whatsapp") {
      window.open("https://wa.me/2348061482847", "_blank");
    }
    if (icon === "outlook") {
      window.open("https://outlook.live.com/owa/", "_blank");
    }
    if (icon === "linkedin") {
      window.open("https://www.linkedin.com/in/judy-odiakose/", "_blank");
    }
    if (icon === "call") {
      window.open("tel:+2348061482847", "_blank");
    }
  };

  const sendEmail = (e) => {
    const templateParams = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };
    e.preventDefault();

    if (invalidEmail) {
      return;
    } else {
      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then(() => {
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
          setSent(true);
          setTimeout(() => {
            setSent(false);
          }, 3000);
        })
        .catch(() => {
          setError(true);

          setTimeout(() => {
            setError(false);
          }, 3000);
        });
    }
  };

  return (
    <Element name="Contact">
      <section className="section container contact">
        <h2 className="section-title">Talk to me</h2>

        <div className="contact__content">
          <div className="contact__content--text">
            <h3 className="contact__content--text__superTitle">
              Let’s Build Something Incredible Together!
            </h3>

            <p className="contact__content--text__desc">
              Whether you’re looking for a detail-oriented developer to bring your ideas
              to life or just want to say hello, I’d love to hear from you. I’m always
              open to exciting projects, meaningful collaborations, or full-time
              opportunities where creativity and clean code meet.
            </p>

            <p className="contact__content--text__subtitle">
              Leave a message — your next go-to frontend developer might just be one click
              away.
            </p>

            <div className="contact__content--text__socials">
              <button
                type="button"
                onClick={() => clickIcon("whatsapp")}
                className="social-icon"
                title="Connect with me on whatsapp">
                <IoLogoWhatsapp />
              </button>

              <button
                type="button"
                onClick={() => clickIcon("outlook")}
                className="social-icon"
                title="Mail me on outlook">
                <PiMicrosoftOutlookLogoFill />
              </button>

              <button
                type="button"
                onClick={() => clickIcon("linkedin")}
                rel="noreferrer"
                className="social-icon"
                title="Connect with me on LinkedIn">
                <BsLinkedin />
              </button>

              <button
                type="button"
                onClick={() => clickIcon("call")}
                className="social-icon"
                title="Call me">
                <IoCallSharp />
              </button>
            </div>
          </div>

          <div className="contact__content--form">
            <form action="" method="POST" onSubmit={sendEmail}>
              <div className="contact__content--form__input">
                <div>
                  <label htmlFor="name">Full Name:</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="on"
                    placeholder="John Doe"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="on"
                    placeholder="example@email.com"
                    required
                    value={email}
                    onChange={(e) => {
                      validateEmail();
                      setEmail(e.target.value);
                    }}
                  />

                  {invalidEmail && (
                    <p className="error-message">Please enter a valid email address !</p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject">Subject:</label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Job Opportunity, Collaboration, Feedback."
                    required
                    autoComplete="on"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message">Your Message:</label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  id="message"
                  placeholder="Your message goes here...

"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}></textarea>
              </div>

              <button type="submit">
                Send Message
                <RiSendPlaneFill />
              </button>

              {sent && <p className=" msg sent">Message sent successfully ✅</p>}
              {error && <p className="msg error">Oops! Message not sent ❌</p>}
            </form>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Contact;

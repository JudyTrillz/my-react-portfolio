import "./Contact.scss";
import { Element } from "react-scroll";
import { RiSendPlaneFill } from "react-icons/ri";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

import { IoLogoWhatsapp } from "react-icons/io5";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
import { BsLinkedin } from "react-icons/bs";
import { IoCallSharp } from "react-icons/io5";

const isMobile = window.innerWidth <= 992;

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

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);

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
      name,
      email,
      subject,
      message,
    };
    e.preventDefault();

    if (!nameRef.current.value) {
      nameRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      nameRef.current.focus();
      return;
    }

    if (!emailRef.current.value) {
      emailRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      emailRef.current.focus();
      return;
    }

    if (!subjectRef.current.value) {
      subjectRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      subjectRef.current.focus();
      return;
    }

    if (!messageRef.current.value) {
      messageRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      messageRef.current.focus();
      return;
    }

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

  const listVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: isMobile ? 0.2 : 0.5,
        delayChildren: isMobile ? 0.2 : 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -500 },
    whileInView: {
      opacity: 1,
      x: 0,
      transition: { duration: 1 },
    },
  };

  return (
    <Element name="Contact">
      <section className="section container contact">
        <h2 className="section-title">Talk to me</h2>

        <motion.div
          className="contact__content"
          initial={{ y: 100, filter: "blur(10px)" }}
          whileInView={{
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 1, ease: "easeIn" },
          }}>
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

            <motion.div
              variants={listVariants}
              className="contact__content--text__socials">
              <motion.button
                variants={itemVariants}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.5, staggerChildren: 0.2 },
                }}
                type="button"
                onClick={() => clickIcon("whatsapp")}
                className="social-icon"
                title="Connect with me on whatsapp">
                <IoLogoWhatsapp />
              </motion.button>

              <motion.button
                variants={itemVariants}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.5, staggerChildren: 0.2 },
                }}
                type="button"
                onClick={() => clickIcon("outlook")}
                className="social-icon"
                title="Mail me on outlook">
                <PiMicrosoftOutlookLogoFill />
              </motion.button>

              <motion.button
                variants={itemVariants}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.5, staggerChildren: 0.2 },
                }}
                type="button"
                onClick={() => clickIcon("linkedin")}
                rel="noreferrer"
                className="social-icon"
                title="Connect with me on LinkedIn">
                <BsLinkedin />
              </motion.button>

              <motion.button
                variants={itemVariants}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.5, staggerChildren: 0.2 },
                }}
                type="button"
                onClick={() => clickIcon("call")}
                className="social-icon"
                title="Call me">
                <IoCallSharp />
              </motion.button>
            </motion.div>
          </div>

          <div className="contact__content--form">
            <form action="" method="POST">
              <div className="contact__content--form__input">
                <div>
                  <label htmlFor="name">Full Name:</label>
                  <input
                    ref={nameRef}
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
                    ref={emailRef}
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
                    ref={subjectRef}
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
                  ref={messageRef}
                  name="message"
                  rows="5"
                  required
                  id="message"
                  placeholder="Your message goes here...

"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}></textarea>
              </div>

              <button type="submit" onClick={sendEmail}>
                Send Message
                <RiSendPlaneFill />
              </button>

              {sent && <p className=" msg sent">Message sent successfully ✅</p>}
              {error && <p className="msg error">Oops! Message not sent ❌</p>}
            </form>
          </div>
        </motion.div>
      </section>
    </Element>
  );
};

export default Contact;

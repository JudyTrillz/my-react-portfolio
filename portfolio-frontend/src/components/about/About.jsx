import "./About.scss";
import { Element } from "react-scroll";
import { LiaDownloadSolid } from "react-icons/lia";

import aboutBanner from "../../assets/img/banners/check 1 (1)-Photoroom.png";
import cv from "../../assets/JUDY CHUKWU ODIAKOSE.pdf";
import Skill from "../skill/Skill";
import Quality from "../quality/Quality";

const About = () => {
  const handleDownload = () => {
    const fileUrl = cv;
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", "Judy chukwu odiakose");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Element name="About">
      <section className="section container about">
        <h2 className="section-title">lil about me</h2>

        <div className="about__content">
          <div className="about__content--img">
            <img src={aboutBanner} alt="about banner" loading="lazy" />
          </div>

          <div className="about__content--text">
            <h2 className="about__content--text__title">
              Hi, I&apos;m <em>Judy Chukwu Odiakose</em>
            </h2>

            <p className="about__content--text__desc">
              A frontend developer passionate about crafting exceptional web experiences.
              Proficient in React, Next.js, TypeScript, JavaScript, Git/GitHub, Tailwind,
              SCSS, and Sanity. Adaptable, collaborative, and driven by creativity, I
              thrive on challenges and stay ahead of new technologies. Let’s build
              something extraordinary!
            </p>

            <button
              type="button"
              className="btn about__content--text__btn"
              onClick={handleDownload}>
              Download Resumé
              <LiaDownloadSolid />
            </button>

            <div className="about__content--text__ticker">
              <Skill />
            </div>
          </div>
        </div>
        <div className="about__content--qualities">
          <Quality
            icon={"🧩"}
            title={"Problem Solving"}
            desc={
              "I break down complex challenges, debug efficiently, and optimize performance with logic and creativity."
            }
          />
          <Quality
            icon={"🤝"}
            title={"Communication"}
            desc={
              "I convey ideas clearly, collaborate seamlessly, and ensure smooth teamwork through effective dialogue."
            }
          />
          <Quality
            icon={" 🚀 "}
            title={"Continuous Learning"}
            desc={
              "I quickly adjust to new technologies, and workflows ensuring smooth collaboration and continuous growth."
            }
          />
        </div>
      </section>
    </Element>
  );
};

export default About;

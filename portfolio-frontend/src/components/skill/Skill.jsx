import { Element } from "react-scroll";
import "./Skill.scss";

import {
  bootstrap,
  html,
  css,
  scss,
  js,
  jest,
  tailwind,
  sanity,
  react,
  next,
  ts,
  github,
} from "../../img/logos";

const Skill = () => {
  const skillIcons = [
    { icon: html, name: "HTML" },
    { icon: css, name: "CSS 3" },
    { icon: scss, name: "SCSS" },
    { icon: js, name: "JS" },
    { icon: react, name: "REACT JS" },
    { icon: bootstrap, name: "BOOTSTRAP" },
    { icon: tailwind, name: "TAILWIND" },
    { icon: next, name: "NEXT JS" },
    { icon: ts, name: "TYPESCRIPT" },
    { icon: sanity, name: "SANITY" },
    { icon: github, name: "GIT-HUB" },
    { icon: jest, name: "JEST" },
  ];

  return (
    <Element name="Skills">
      <section className="section container skills">
        <h2 className="section-title">Skills</h2>

        <p className="section-intro">
          Here are the tools and frameworks I specialize in for building modern, scalable
          web applications.
        </p>

        <div className="skills__wrapper">
          {skillIcons.map((icon, index) => (
            <div className="skills__wrapper--img" key={index} title={icon.name}>
              <img src={icon.icon} alt="skills icons" loading="lazy" />
            </div>
          ))}
        </div>
      </section>
    </Element>
  );
};

export default Skill;

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
  github,
  next,
  ts,
} from "../../assets/img/logos";

const Skill = () => {
  const skillIcons = [
    { icon: html, name: "HTML" },
    { icon: css, name: "CSS" },
    { icon: scss, name: "SCSS" },
    { icon: js, name: "JAVASCRIPT" },
    { icon: react, name: "REACT JS" },
    { icon: bootstrap, name: "BOOTSTRAP" },
    { icon: tailwind, name: "TAILWIND" },
    { icon: github, name: "GIT-HUB" },
    { icon: next, name: "NEXT JS" },
    { icon: ts, name: "TYPESCRIPT" },
    { icon: sanity, name: "SANITY" },
    { icon: jest, name: "JEST" },
  ];

  return (
    <Element name="Skills">
      <div className="  skills">
        <div className="skills__wrapper">
          {[...skillIcons, ...skillIcons].map((icon, index) => (
            <div className="skills__wrapper--img" key={index} title={icon.name}>
              <img src={icon.icon} alt="skills icons" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Skill;

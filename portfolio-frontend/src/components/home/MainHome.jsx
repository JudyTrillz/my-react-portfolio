import "./MainHome.scss";
import { Element, Link } from "react-scroll";
import homeImg from "../../img/banners/home-banner-alt.svg";

import { BiRightArrowAlt } from "react-icons/bi";
import { RiTwitterXLine } from "react-icons/ri";
import { RiFacebookCircleFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { RiLinkedinFill } from "react-icons/ri";
import { RiGithubFill } from "react-icons/ri";

const twi = <RiTwitterXLine key={"twitter"} />;
const fb = <RiFacebookCircleFill key={"facebook"} />;
const ig = <RiInstagramFill key={"instagram"} />;
const li = <RiLinkedinFill key={"linkedin"} />;
const gh = <RiGithubFill key={"github"} />;

const MainHome = () => {
  const icons = [
    { icon: twi, link: "https://x.com/offixial_judy" },
    { icon: fb, link: "https://www.facebook.com/juddy.trillz" },
    { icon: ig, link: "https://www.instagram.com/offixial_judy/" },
    { icon: li, link: "https://www.linkedin.com/in/judy-odiakose/" },
    { icon: gh, link: "https://github.com/JudyTrillz" },
  ];

  const DisplayIcons = () => {
    return (
      <div className="home__container--data__socials">
        {icons.map((icon, index) => (
          <a
            href={icon.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="home__container--data__socials__icon">
            {icon.icon}
          </a>
        ))}
      </div>
    );
  };

  return (
    <Element name="Home">
      <section className="section home container">
        <div className="home__container">
          <div className="home__container--data">
            <div className="home__container--data__holder">
              <h2 className="home__container--data__tag"> Hi, I&apos;m Judy</h2>
            </div>

            <h1 className="home__container--data__title">
              <em className="home__container--data__title--span">A Developer</em> <br />{" "}
              With a <em className="home__container--data__title--span">Difference.</em>
            </h1>

            <p className="home__container--data__desc ">
              Building visually consistent and <br /> high-performance websites,
              Delivering smooth, Scalable, and accessible digital products with Impact and
              enhancing user engagement with smooth and intuitive user interfaces.
            </p>

            <div className="home__container--data__socials home__container--data__holder">
              <DisplayIcons />
            </div>

            <div className="home__container--data__btn primary home__container--data__holder">
              <Link to="Portfolio" className="home__container--data__btn-primary">
                Explore Projects
              </Link>

              <Link to="Contact" className="home__container--data__btn-secondary">
                Hire Me
                <BiRightArrowAlt />
              </Link>
            </div>
          </div>

          <div className="home__container--img">
            <figure>
              <img src={homeImg} alt="home-banner" />
            </figure>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default MainHome;

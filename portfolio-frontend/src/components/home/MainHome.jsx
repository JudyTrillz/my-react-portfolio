import "./MainHome.scss";
import { Element, Link } from "react-scroll";
import { motion } from "framer-motion";

import { BiRightArrowAlt } from "react-icons/bi";
import { RiTwitterXLine } from "react-icons/ri";
import { RiLinkedinFill } from "react-icons/ri";
import { RiGithubFill } from "react-icons/ri";

import homeImg from "../../assets/img/banners/home-banner-alt.svg";
const twi = <RiTwitterXLine key={"twitter"} />;

const li = <RiLinkedinFill key={"linkedin"} />;
const gh = <RiGithubFill key={"github"} />;

const isMobile = window.innerWidth <= 992;

const MainHome = () => {
  const icons = [
    { icon: twi, link: "https://x.com/offixial_judy" },

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
      <motion.section
        className="section home container"
        // initial={{ opacity: 0 }}
        // animate={{
        //   opacity: 1,
        //   transition: { staggerChildren: 0.8, delayChildren: 0.8 },
        // }}
      >
        <div className="home__container">
          <div className="home__gradient"></div>
          <div className="home__container--data">
            <div className="home__container--data__holder">
              <motion.h2
                initial={{ opacity: 0, x: -100, filter: "blur(2px)" }}
                animate={{
                  opacity: 1,
                  filter: "blur(0px)",
                  x: 0,
                  transition: { duration: 1, ease: "easeOut", delay: isMobile ? 1 : 2.5 },
                }}
                className="home__container--data__tag">
                {" "}
                Hi, I&apos;m Judy
              </motion.h2>
            </div>

            <motion.h1
              className="home__container--data__title"
              initial={{ opacity: 0, x: -100, filter: "blur(2px)" }}
              animate={{
                opacity: 1,
                filter: "blur(0px)",
                x: 0,
                blur: 0,

                transition: { duration: 1, ease: "easeOut", delay: isMobile ? 1 : 2.7 },
              }}>
              <em className="home__container--data__title--span">A Developer</em> <br />{" "}
              With a <em className="home__container--data__title--span">Difference.</em>
            </motion.h1>

            <motion.p
              className="home__container--data__desc "
              initial={{ opacity: 0, x: -100, filter: "blur(2px)" }}
              animate={{
                opacity: 1,
                filter: "blur(0px)",
                x: 0,
                transition: { duration: 1, ease: "easeOut", delay: isMobile ? 1 : 2.9 },
              }}>
              Delivering smooth, Scalable, and accessible digital products with Impact and
              enhancing user engagement with smooth and intuitive user interfaces.
            </motion.p>

            <motion.div
              className="home__container--data__socials home__container--data__holder"
              initial={{ opacity: 0, x: -100, filter: "blur(2px)" }}
              animate={{
                opacity: 1,
                filter: "blur(0px)",
                x: 0,
                transition: { duration: 1, ease: "easeOut", delay: isMobile ? 1 : 3.1 },
              }}>
              <DisplayIcons />
            </motion.div>

            <motion.div
              className="home__container--data__btn primary home__container--data__holder"
              initial={{ opacity: 0, x: -100, filter: "blur(2px)" }}
              animate={{
                opacity: 1,
                filter: "blur(0px)",
                x: 0,
                transition: { duration: 1, ease: "easeOut", delay: isMobile ? 1 : 3.3 },
              }}>
              <Link to="Portfolio" className="home__container--data__btn-primary">
                Explore Projects
              </Link>

              <Link to="Contact" className="home__container--data__btn-secondary">
                Hire Me
                <BiRightArrowAlt />
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="home__container--img"
            initial={{ opacity: 0, x: -100, filter: "blur(2px)" }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
              x: 0,
              transition: { duration: 1, ease: "easeOut", delay: isMobile ? 1 : 3.5 },
            }}>
            <figure>
              <img src={homeImg} alt="home-banner" />
            </figure>
          </motion.div>
        </div>
      </motion.section>
    </Element>
  );
};

export default MainHome;

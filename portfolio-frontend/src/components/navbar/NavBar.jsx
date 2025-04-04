import { /*useEffect*/ useEffect, useState } from "react";
import { RiCloseLine, RiMenu5Fill } from "react-icons/ri";
import { Link } from "react-scroll";

import "./NavBar.scss";
const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  // const [activeNav, setActiveNav] = useState(false);

  const links = ["Home", "Portfolio", "About", "Contact"];

  const Menu = () => (
    <ul className="nav__items">
      {links.map((item, index) => (
        <li className="nav__item" key={index}>
          <Link
            to={item}
            smooth={true}
            duration={500}
            className="nav__items--link"
            onClick={() => setToggleMenu(false)}>
            {item}
          </Link>
        </li>
      ))}
    </ul>
  );

  const openMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    if (toggleMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [toggleMenu]);

  return (
    <>
      <nav className="nav">
        <div className="nav__container  container">
          <div className="nav__container--logo">
            <a href="#">
              <span>J</span>
              udy
              <span>.</span>
            </a>
          </div>

          <div className="nav__container--menu">
            <Menu />
          </div>

          {/* toggle for navigation  */}
          <div className="nav__toggle">
            <RiMenu5Fill
              className="nav__icon nav__icon--open"
              size={27}
              onClick={() => {
                openMenu();
                document
                  .querySelector(".nav__container--menu__mobile")
                  .classList.add("slide-left");
              }}
            />
          </div>
        </div>

        <div
          className={
            toggleMenu
              ? "nav__container--menu__mobile slide-left"
              : "nav__container--menu__mobile "
          }>
          <RiCloseLine
            className="nav__icon nav__icon--close"
            size={27}
            onClick={() => {
              openMenu();
              document
                .querySelector(".nav__container--menu__mobile")
                .classList.remove("slide-left");
            }}
          />
          <Menu />
        </div>

        {toggleMenu && (
          <div className="overlay" onClick={() => setToggleMenu(false)}></div>
        )}
      </nav>
    </>
  );
};

export default NavBar;

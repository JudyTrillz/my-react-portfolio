import "./Header.scss";
import NavBar from "../navbar/NavBar";
import { useEffect } from "react";

const Header = () => {
  const activeHeader = () => {
    const header = document.querySelector(".header");
    if (window.scrollY > 50) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", activeHeader);
  });
  return (
    <header className="header">
      <NavBar />
    </header>
  );
};

export default Header;

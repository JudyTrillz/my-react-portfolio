import { useEffect, useState } from "react";
import "./Footer.scss";

const Footer = () => {
  const [year, setYear] = useState(null);

  const handleDate = () => {
    const date = new Date();
    const specificYear = date.getUTCFullYear();
    setYear(specificYear);
  };

  useEffect(() => {
    handleDate();
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__text">
          &copy; {year} Judy Chukwu Odiakose. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

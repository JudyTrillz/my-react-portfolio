import { Link } from "react-scroll";
import { CgArrowUp } from "react-icons/cg";
import { useState } from "react";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./scrollUp.scss";

const ScrollUp = () => {
  const [showScroll, setShowScroll] = useState(false);

  const activeScroll = () => {
    if (window.scrollY > 100) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", activeScroll);
  }, [showScroll]);

  return (
    <AnimatePresence>
      {showScroll && (
        <motion.div
          className="scroll-up"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}>
          <Link to="Home" smooth={true} duration={500}>
            <CgArrowUp />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollUp;

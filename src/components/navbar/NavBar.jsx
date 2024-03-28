import React, { useContext } from "react";
import navbarstyle from "./NavBar.module.css";
import { data } from "../context/Context";
import { motion } from "framer-motion";

function NavBar() {
  const { burgermenu, setburgermenu, aboutdata } = useContext(data);

  const toggleburgermenu = () => {
    setburgermenu(!burgermenu);
  };

  return (
    <motion.div
      className={`${navbarstyle.main}  ${burgermenu ? navbarstyle.active : ""}`}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className={navbarstyle.nav}>
        <motion.button className={navbarstyle.button}>
          {aboutdata.name}
        </motion.button>
        <div
          className={navbarstyle.navburgercontainer}
          onClick={() => toggleburgermenu()}
        >
          <div className={navbarstyle.navburger}></div>
          <div className={navbarstyle.navburgermenu}></div>
        </div>
      </div>
      <div className={navbarstyle.menu}>
        <motion.ul
          variants={{
            open: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
                staggerDirection: 1,
              },
            },
            closed: {
              opacity: 0,
            },
          }}
          animate={burgermenu ? "open" : "closed"}
        >
          <motion.li
            variants={{
              open: {
                opacity: 1,
              },
              closed: {
                opacity: 0,
              },
            }}
          >
            <a href="/">Skills</a>
          </motion.li>
          <motion.li
            variants={{
              open: {
                opacity: 1,
              },
              closed: {
                opacity: 0,
              },
            }}
          >
            <a href="/">Projects</a>
          </motion.li>
          <motion.li
            variants={{
              open: {
                opacity: 1,
              },
              closed: {
                opacity: 0,
              },
            }}
          >
            <a href="/">Services</a>
          </motion.li>
          <motion.li
            variants={{
              open: {
                opacity: 1,
              },
              closed: {
                opacity: 0,
              },
            }}
          >
            <a href="/">Testimonials</a>
          </motion.li>
        </motion.ul>
      </div>
    </motion.div>
  );
}

export default NavBar;

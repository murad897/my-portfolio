import React from "react";
import Cta from "./Cta";
import HeaderSocial from "./HeaderSocial";
import reactImg from "../../Assets/react2.png";
import styles from "./Header.module.css";
import Typewriter from "typewriter-effect";

const Header = () => {
  return (
    <header id="header" className={styles.header}>
      <div
        className="container"
        style={{ height: "100%", position: "relative" }}
      >
        <h5>hello I`m</h5>
        <h1>Muradi jamburia</h1>
        <div className={styles.textAnimation}>
          <Typewriter
            options={{
              strings: ["Front End Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <Cta />
        <HeaderSocial />
        <div className={styles.headerImg}>
          <img src={reactImg} alt="" />
        </div>
        <a href="#about" className={styles.scrollDown}>
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;

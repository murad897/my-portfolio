import React from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import styles from "./Nav.module.css";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav>
      <Link activeClass={styles.active} spy to="header">
        <AiOutlineHome />
      </Link>
      <Link activeClass={styles.active} spy to="about">
        <AiOutlineUser />
      </Link>
      <Link activeClass={styles.active} spy to="experience">
        <BiBook />
      </Link>
      <Link activeClass={styles.active} spy to="services">
        <RiServiceLine />
      </Link>
      <Link activeClass={styles.active} spy to="contact">
        <BiMessageSquareDetail />
      </Link>
    </nav>
  );
};

export default Nav;

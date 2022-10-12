import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import styles from ".././Header.module.css";

const index = () => {
  return (
    <div className={styles.headerSocial}>
      <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
        <BsLinkedin color="#4db5ff" className={styles.icons} />
      </a>
      <a href="https://github.com/" target="_blank" rel="noreferrer">
        <FaGithub color="#4db5ff" className={styles.icons} />
      </a>
    </div>
  );
};

export default index;

import React from "react";
import CV from "../../../Assets/CV.pdf";
import styles from ".././Header.module.css";

const index = () => {
  return (
    <div className={styles.cta}>
      <a href={CV} download className="btn">
        Download cv
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default index;

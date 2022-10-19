import React from "react";
import styles from "./Experience.module.css";

const index = () => {
  return (
    <section id="experience" className={styles.experience}>
      <div className="container">
        <h5 className={styles.mySkill}>What skills I have</h5>
        <h2 className={styles.mySkillP}>My experience</h2>
        <div className="experienceContainer">
          <div className="experienceFrontEnd">
            <h3>Frontend Development</h3>
          </div>
          <div className="experienceBackend"></div>
        </div>
      </div>
    </section>
  );
};

export default index;

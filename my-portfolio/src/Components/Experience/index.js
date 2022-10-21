import React from "react";
import styles from "./Experience.module.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { motion } from "framer-motion";

const index = () => {
  return (
    <section id="experience" className={styles.experience}>
      <div className="container">
        <h5 className={styles.mySkill}>What skills I have</h5>
        <h2 className={styles.mySkillP}>My experience</h2>
        <div className={styles.experienceContainer}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.9 }}
            className="experienceFrontEnd"
          >
            <h3>Frontend Development</h3>
            <div className={styles.experienceContent}>
              <article className="exprerienceDetails">
                <BsPatchCheckFill color="var(--color-primary)" />
                <h4>JWT</h4>
                <small className="profi-text">Experienced</small>
              </article>
              <article className="exprerienceDetails">
                <BsPatchCheckFill color="var(--color-primary)" />
                <h4>Vue</h4>
                <small className="profi-text">Experienced</small>
              </article>
              <article className="exprerienceDetails">
                <BsPatchCheckFill color="var(--color-primary)" />
                <h4>JS</h4>
                <small className="profi-text">Experienced</small>
              </article>
              <article className="exprerienceDetails">
                <BsPatchCheckFill color="var(--color-primary)" />
                <h4>React</h4>
                <small className="profi-text">Experienced</small>
              </article>
              <article className="exprerienceDetails">
                <BsPatchCheckFill color="var(--color-primary)" />
                <h4>Redux</h4>
                <small className="profi-text">Middle</small>
              </article>
              <article className="exprerienceDetails">
                <BsPatchCheckFill color="var(--color-primary)" />
                <h4>Material UI</h4>
                <small className="profi-text">Middle</small>
              </article>
              <article className="exprerienceDetails">
                <BsPatchCheckFill color="var(--color-primary)" />
                <h4>Typescript</h4>
                <small className="profi-text">Low</small>
              </article>
              <article className="exprerienceDetails">
                <BsPatchCheckFill color="var(--color-primary)" />
                <h4>Next js</h4>
                <small className="profi-text">Middle</small>
              </article>
              <article className="exprerienceDetails">
                <BsPatchCheckFill color="var(--color-primary)" />
                <h4>GraphQL</h4>
                <small className="profi-text">Middle</small>
              </article>
              <article className="exprerienceDetails">
                <BsPatchCheckFill color="var(--color-primary)" />
                <h4>Tailwind</h4>
                <small className="profi-text">Middle</small>
              </article>
              <article className="exprerienceDetails">
                <BsPatchCheckFill color="var(--color-primary)" />
                <h4>Redux Saga</h4>
                <small className="profi-text">Middle</small>
              </article>
              <article className="exprerienceDetails">
                <BsPatchCheckFill color="var(--color-primary)" />
                <h4>Websocket</h4>
                <small className="profi-text">Middle</small>
              </article>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.9 }}
            className="experienceBackend"
          >
            <h3>Backend Development</h3>
            <div className={styles.experienceContent}>
              <article className="exprerienceDetails">
                <BsPatchCheckFill color="var(--color-primary)" />
                <h4>Node (express)</h4>
                <small className="profi-text">Middle</small>
              </article>
              <article className="exprerienceDetails">
                <BsPatchCheckFill color="var(--color-primary)" />
                <h4>mongoDB</h4>
                <small className="profi-text">Middle</small>
              </article>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default index;

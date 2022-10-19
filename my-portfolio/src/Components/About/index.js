import React from "react";
import styles from "./About.module.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import reactImg from "../../Assets/react2.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <h5 className={styles.getToKnow}>Get to Know</h5>
      <h2 className={styles.aboutMe}>About me</h2>
      <div className="container">
        <div className={styles.aboutContainer}>
          <div className="aboutMe">
            <div className={styles.aboutMeImage}>
              <img src={reactImg} alt="" />
            </div>
          </div>
          <div className={styles.aboutContent}>
            <div className={styles.aboutCards}>
              <motion.article
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={styles.aboutCard}
              >
                <FaAward
                  className={styles.aboutIcon}
                  color="var(--color-primary)"
                />
                <h5>Experience</h5>
                <small>2 + years experience</small>
              </motion.article>
              <motion.article
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={styles.aboutCard}
              >
                <FiUsers
                  className={styles.aboutIcon}
                  color="var(--color-primary)"
                />
                <h5>Clients</h5>
                <small>20 + clients</small>
              </motion.article>
              <motion.article
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={styles.aboutCard}
              >
                <VscFolderLibrary
                  className={styles.aboutIcon}
                  color="var(--color-primary)"
                />
                <h5>Projects</h5>
                <small>30 + projects</small>
              </motion.article>
            </div>
            <p>
              I am Front end developer with 2+ years of hands-on experience
              developing and implementing websites, web apps and solutions using
              a range of technologies and programming languages. Also seeking to
              leverage broad development experience and hands-on technical
              expertise in a challenging role as a Full-stack developer. I am
              ambitious, assiduous, purposeful, hard-working. Technical skills:
              React.js, Next.js, React Redux, Html5, Css3, Sass, Vue.js,
              Javascript Es6+, Node.js, Express, MongoDB, Rest APIs, Websocket,
              graphQL, Libraries Other skills: Linux, Git, Trello, Jira, Figma,
              Xd, Photoshop, Zeplin etc.
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

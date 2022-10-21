import React from "react";
import styles from "./Service.module.css";
import { BiCheck } from "react-icons/bi";
import { motion } from "framer-motion";

const index = () => {
  return (
    <section id="services" className={styles.serviceContainer}>
      <h5 style={styles.offerText}>What I Offer</h5>
      <h2 style={styles.serviceText}>Services</h2>
      <div id={styles.flexContainer} className="container">
        <motion.article
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.9 }}
          className={styles.service}
        >
          <div className="serviceHead">
            <h3>Ceo optimization</h3>
          </div>
          <ul className={styles.serviceList}>
            <li>
              <BiCheck
                className="serviceListIcon"
                color="var(--color-primary)"
              />
              <p>Modify Ceo optimization using Next</p>
            </li>
            <li>
              <BiCheck
                className="serviceListIcon"
                color="var(--color-primary)"
              />
              <p>Next Ceo tags</p>
            </li>
            <li>
              <BiCheck
                className="serviceListIcon"
                color="var(--color-primary)"
              />
              <p>Html5 Ceo tags</p>
            </li>
          </ul>
        </motion.article>
        <motion.article
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.9 }}
          className={styles.service}
        >
          <div className={styles.serviceHead}>
            <h3>E commerce</h3>
          </div>
          <ul className={styles.serviceList}>
            <li>
              <BiCheck
                className="serviceListIcon"
                color="var(--color-primary)"
              />
              <p>Modify Seo optimization using Next</p>
            </li>
            <li>
              <BiCheck
                className="serviceListIcon"
                color="var(--color-primary)"
              />
              <p>Typescript</p>
            </li>
            <li>
              <BiCheck
                className="serviceListIcon"
                color="var(--color-primary)"
              />
              <p>Redux for state manager</p>
            </li>
            <li>
              <BiCheck
                className="serviceListIcon"
                color="var(--color-primary)"
              />
              <p>JS animations</p>
            </li>
            <li>
              <BiCheck
                className="serviceListIcon"
                color="var(--color-primary)"
              />
              <p>Material UI</p>
            </li>
            <li>
              <BiCheck
                className="serviceListIcon"
                color="var(--color-primary)"
              />
              <p>Modern Code</p>
            </li>
          </ul>
        </motion.article>
        <motion.article
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.9 }}
          className={styles.service}
        >
          <div className="serviceHead">
            <h3>Website</h3>
          </div>
          <ul className={styles.serviceList}>
            <li>
              <BiCheck
                className="serviceListIcon"
                color="var(--color-primary)"
              />
              <p>Clean code</p>
            </li>
            <li>
              <BiCheck
                className="serviceListIcon"
                color="var(--color-primary)"
              />
              <p>Fast working</p>
            </li>
            <li>
              <BiCheck
                className="serviceListIcon"
                color="var(--color-primary)"
              />
              <p>Memorize code</p>
            </li>
          </ul>
        </motion.article>
      </div>
    </section>
  );
};

export default index;

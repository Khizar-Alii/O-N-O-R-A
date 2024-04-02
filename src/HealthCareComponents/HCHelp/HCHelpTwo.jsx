import React from "react";
import styles from "./HCHelp.module.css";

const HCHelpTwo = ({ title, desc, img }) => {
  const isMobile = window.innerWidth <= 700;

  return (
    <section
      className={styles.HCHelpContainer}
      // style={{ flexDirection: isMobile ? "column-reverse" : "row"}}
    >
      <section className={styles.HCHelpContainerRight}>
        <h1>{title}</h1>
        <p>{desc}</p>
      </section>
      <section className={styles.HCHelpContainerLeft}>
        <img src={img} alt="" />
      </section>
    </section>
  );
};

export default HCHelpTwo;

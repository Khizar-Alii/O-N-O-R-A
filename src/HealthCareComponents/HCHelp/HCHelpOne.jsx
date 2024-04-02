import React from "react";
import styles from "./HCHelp.module.css";

const HCHelpOne = ({title,desc,img}) => {
  return (
    <section className={styles.HCHelpContainer}>
      <section className={styles.HCHelpContainerLeft}>
        <img src={img} alt="" />
      </section>
      <section className={styles.HCHelpContainerRight}>
        <h1>{title}</h1>
        <p>
            {desc}
        </p>
      </section>
    </section>
  );
};

export default HCHelpOne;

import React from "react";
import styles from "./HCBottom.module.css";

const HCBottom = ({desc}) => {
  return (
    <div className={styles.HCBottom}>
      <h1 className={styles.HCBottomHeading}>
      YOU ARE OUR<br />
        <span>PRIORITY.</span>
      </h1>
      <div className={styles.HCBottomUnderline}></div>
      <article className={styles.HCBottomArticle}>
        {desc}
      </article>
      <h1
        className={styles.HCBottomHeading}
        id="howWeHelp"
        style={{
          marginTop: "50px",
        }}
      >
        HOW WE CAN <br />
        <span>HELP.</span>
      </h1>
      <div className={styles.HCBottomUnderline}></div>
    </div>
  );
};

export default HCBottom;

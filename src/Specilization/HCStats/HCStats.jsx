import React from "react";
import styles from "./HCStats.module.css";

const HCStats = ({s1,t1,s2,t2,s3,t3,s4,t4}) => {
  return (
    <>
      <div className={styles.HCStats} id="stats">
        <h1>THE STATS SPEAK FOR THEMSELVES.</h1>
        <section className={styles.HCStatsContainer}>
          <section>
            <p className={styles.HCStatsContainerHeading}>{s1}</p>
            <p className={styles.HCStatsContainerDesc}>
              {t1}
            </p>
          </section>
          <section>
            <p className={styles.HCStatsContainerHeading}>{s2}</p>
            <p className={styles.HCStatsContainerDesc}>
              {t2}
            </p>
          </section>
          <section>
            <p className={styles.HCStatsContainerHeading}>{s3}</p>
            <p className={styles.HCStatsContainerDesc}>
              {t3}
            </p>
          </section>
          <section>
            <p className={styles.HCStatsContainerHeading}>{s4}</p>
            <p className={styles.HCStatsContainerDesc}>
              {t4}
            </p>
          </section>
        </section>
      </div>
      <h1 className={styles.HCStatsHeading}>
        NICHES
        <br />
      </h1>
      <div className={styles.HCStatsUnderline}></div>
    </>
  );
};

export default HCStats;

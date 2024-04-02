import React from "react";
import styles from "./HCStats.module.css";

const HCStats = () => {
  return (
    <>
      <div className={styles.HCStats}>
        <h1>THE STATS SPEAK FOR THEMSELVES.</h1>
        <section className={styles.HCStatsContainer}>
          <section>
            <p className={styles.HCStatsContainerHeading}>146%</p>
            <p className={styles.HCStatsContainerDesc}>
              Increase In Total Website Users In 7 Days Post Campaign Launch
            </p>
          </section>
          <section>
            <p className={styles.HCStatsContainerHeading}>48%</p>
            <p className={styles.HCStatsContainerDesc}>
              Higher Google Conversion Rate Than Medical Industry Standard
            </p>
          </section>
          <section>
            <p className={styles.HCStatsContainerHeading}>130K</p>
            <p className={styles.HCStatsContainerDesc}>
              Over 130K Impressions On Google Display Per Month
            </p>
          </section>
          <section>
            <p className={styles.HCStatsContainerHeading}>82%</p>
            <p className={styles.HCStatsContainerDesc}>
              Lower Cost Per Conversion On Google Than Medical Industry Standard
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

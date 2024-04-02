import React from 'react'
import styles from "./HCHero.module.css"
const HCHero = () => {
  return (
    <div className={styles.HCHero}>
      <h1 className={styles.HCHeroHeading}>HEALTHCARE & ALLIED <br /> HEALTH MARKETING <br />SPECIALISTS</h1>
      <p className={styles.HCHeroSubHeading}>
      Acquire more patients, recruit more talent, grow your billings.
      </p>
      <section className={styles.HCButtonSection}>
        <button>How We Help</button>
        <button>Result</button>
        <button>Specialities</button>
        <button>Case Studies</button>
        <button>Insights</button>
      </section>
    </div>
  )
}

export default HCHero

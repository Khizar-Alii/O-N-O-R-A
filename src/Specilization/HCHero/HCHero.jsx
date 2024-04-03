import React from 'react'
import styles from "./HCHero.module.css"
const HCHero = ({topTitle,desc}) => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className={styles.HCHero}>
      <h1 className={styles.HCHeroHeading}>{topTitle}</h1>
      <p className={styles.HCHeroSubHeading}>
        {desc}
      </p>
      <section className={styles.HCButtonSection}>
        <button onClick={() => scrollToSection("howWeHelp")}>How We Help</button>
        <button onClick={() => scrollToSection("stats")}>Result</button>
        <button onClick={() => scrollToSection("niches")}>Specialities</button>
        <button onClick={() => scrollToSection("services")}>Case Studies</button>
        <button onClick={() => scrollToSection("hcHelpTwo")}>Insights</button>
      </section>
    </div>
  )
}

export default HCHero

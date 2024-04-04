import React from 'react'
import styles from "./ServicesHero.module.css"
const ServicesHero = ({topTitle,desc,btn1,btn2,btn3,btn4,btn5}) => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className={styles.ServicesHero}>
      <h1 className={styles.ServicesHeroHeading}>{topTitle}</h1>
      <p className={styles.ServicesHeroSubHeading}>
        {desc}
      </p>
      <section className={styles.ServicesHeroButtonSection}>
        <button onClick={() => scrollToSection("")}>{btn1}</button>
        <button onClick={() => scrollToSection("")}>{btn2}</button>
        <button onClick={() => scrollToSection("")}>{btn3}</button>
        <button onClick={() => scrollToSection("")}>{btn4}</button>
        <button onClick={() => scrollToSection("")}>{btn5}</button>
      </section>
    </div>
  )
}

export default ServicesHero

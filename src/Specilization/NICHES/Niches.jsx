import React from "react";
import styles from "./Niches.module.css";
import {Link} from "react-router-dom"

const Niches = ({ data }) => {
  return (
    <div className={styles.Niches} id="niches">
      <div className={styles.NichesContainer}>
        {data.map((niche) =>
          niche.redirect == "" ? (
            <div
              href={niche.redirect}
              className={styles.NichesBox}
              key={niche.id}
            >
              <h3>{niche.title}</h3>
              <span>{niche.description}</span>
            </div>
          ) : (
            <Link
              to={niche.redirect}
              key={niche.id}
              className={styles.NichesBox}
            >
              <h3>{niche.title}</h3>
              <span>{niche.description}</span>
            </Link>
          )
        )}
      </div>
      <h1 className={styles.NichesBottomHeading}>
      WE COVER<br />
        <span>EVERY ANGLE.</span>
      </h1>
      <div className={styles.NichesBottomUnderline}></div>
    </div>
  );
};

export default Niches;

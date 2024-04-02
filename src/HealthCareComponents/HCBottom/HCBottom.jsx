import React from "react";
import styles from "./HCBottom.module.css";

const HCBottom = () => {
  return (
    <div className={styles.HCBottom}>
      <h1 className={styles.HCBottomHeading}>
        YOU ARE OUR <br />
        <span> PRIORITY.</span>
      </h1>
      <div className={styles.HCBottomUnderline}></div>
      <article className={styles.HCBottomArticle}>
        Healthcare & Allied Health marketing takes knowledge and experience. We
        work with over 100 medical and allied health brands and providers across
        general practice, dentistry, specialists, products and devices,
        occupational therapy, physiotherapy, NDIS, DVA and industry bodies.{" "}
        <br />
        Connecting potential clients with your service offering is more
        efficient with the support of our team of digital marketing experts. We
        understand the challenges of regulations in your industry and can
        deliver strategies that respond to the ever-evolving health space while
        remaining respectful to your client's needs. <br /> Our people-first
        approach to digital marketing ensures you can speak directly to
        potential clients and provide them with an exceptional level of service
        that's both accessible and genuinely supportive. From patient and
        referral acquisition to communications and positioning, we manage it all
        with the care and professionalism the industry requires. We love working
        in medical and allied health. Not just because of the incredible people
        in the sector but the growth opportunities on offer.
      </article>

      <h1
        className={styles.HCBottomHeading}
        style={{
          marginTop: "50px",
        }}
      >
        How We Can <br />
        <span> Help.</span>
      </h1>
      <div className={styles.HCBottomUnderline}></div>
    </div>
  );
};

export default HCBottom;

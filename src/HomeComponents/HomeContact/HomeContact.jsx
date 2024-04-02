import React from "react";
import styles from "./HomeContact.module.css";

const HomeContact = () => {
  return (
    <div className={styles.HomeContact}>
      <div class={styles.box}>
        <div class={styles.form}>
          <h2>REQUEST A PROPOSAL</h2>
          <div class={styles.inputBox}>
            <input type="text" required="required" />
            <span>Name</span>
            <i></i>
          </div>
          <div class={styles.inputBox}>
            <input type="text" required="required" />
            <span>Phone Number</span>
            <i></i>
          </div>
          <div class={styles.inputBox}>
            <input type="email" required="required" />
            <span>Email</span>
            <i></i>
          </div>
          <div class={styles.inputBox}>
            <input type="text" required="required" />
            <span>Business Name</span>
            <i></i>
          </div>
          <div class={styles.inputBox}>
            <input type="text" required="required" />
            <span>Tell us about your Business.</span>
            <i></i>
          </div>
          <input type="submit" value="Submit" />
        </div>
      </div>
    </div>
  );
};

export default HomeContact;

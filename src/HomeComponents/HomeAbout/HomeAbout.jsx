import React from "react";
import styles from "./HomeAbout.module.css";

const HomeAbout = () => {
  return (
    <>
      <div className={styles.mainContainer__about}>
        <div className={styles.mainContainer__about_top}>
          <h3>
            OUR MISSION IS TO <br /> HELP OUR CLIENTS <br /> GROW.
          </h3>
        </div>
        <div className={styles.mainContainer__about_content}>
          <h1 className={styles.mainContainer__about_content__heading}>
            ABOUT.
          </h1>
          <div className={styles.mainContainer__about_content_top}>
            <p>
              Our team at Onora is here to help you succeed. We have a deep
              understanding of business and a proven track record of delivering
              results for CEOs, GMs, CMOs, and Marketing Managers across THE
              MENA region. With our digital marketing solutions, we will help
              you generate more leads, improve your ROAS, and develop a winning
              strategy. Our team in Egypt and Dubai is made up of passionate,
              enthusiastic, and talented individuals who are dedicated to
              providing the best service possible to our clients. We are
              confident in our ability to solve your business challenges and
              help you achieve your goals.
            </p>
            <br />
            <strong>
              Omnia Barakat , CEO spent two decades building her marketing
              experience in the midde East and South East Asia before setting in
              Egypt and launching Onòra.
            </strong>
          </div>
          <h1
            className={styles.mainContainer__about_content__heading}
            style={{ marginTop: "80px" }}
          >
            MANTRA.
          </h1>
          <div className={styles.mainContainer__about_content_top_2}>
            <p>
              Digital advertising is not a race to the bottom. It's a fight for
              the top. You can't discount your way to profitability in business.
              But with our growth strategies, you'll be laughing all the way to
              the bank.
              <br />
              <br />
              We take the time to get to know you and your business. We leverage
              AI to give your brand the competitive advantage you've been
              searching for. Powered by actual intelligence, data driven
              decisions, creative thinking and commercial maturity, Onora is
              like no agency you've met before.
              <br />
              <br />
              We believe that revenue growth and client acquisition shouldn't
              come at the cost of margin. We follow an investment thesis that is
              built around the responsible management of a clients' budgets.
              Designed to achieve above-market returns using an unparalleled
              marketing strategy.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeAbout;

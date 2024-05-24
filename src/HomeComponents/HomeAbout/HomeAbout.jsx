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
              Onora is a digital performance agency with an innate
              understanding of business. We manage a national portfolio of
              clients with specialisations in;
              <b>
                medical and allied health, financial services, professional
                services, ecommerce, education, government, SAAS and FMCG.
              </b>
              <br />
              Our founders, April Forbes and Brendan Ford, spent two decades
              building and exiting companies in consulting, property, and M&A
              before launching AF in 2017. Having bootstrapped growth without
              taking outside investment, Onora has in a few short years,
              developed a national footprint with multiple offices and a
              blue-chip client base. We're a business built on results, not
              false promises.
              <br />
              Our team is the perfect balance of seasoned vets and youthful
              enthusiasm, brought together by a joint
              <b> unconditional focus on performance.</b> Our expertise lies in
              lead generation and ecommerce. Our passion lives in business
              growth.
            </p>
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
              But with our growth strategies you'll be laughing all the way to
              the bank.
              <br />
              <br />
              We take the time to get to know you and your business. We leverage
              AI to give your brand the competitive advantage you've been
              searching for. Powered by actual intelligence, data driven
              decisions, creative thinking and commercial maturity, Onora
              is like no agency you've met before.
              <br />
              <br />
              We believe that revenue growth and client acquisition shouldn't
              come at the cost of margin. We follow an
              <b> investment thesis </b> that is built around the responsible
              management of a clients' budgets. Designed to achieve above market
              returns using an unparalleled marketing strategy.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeAbout;

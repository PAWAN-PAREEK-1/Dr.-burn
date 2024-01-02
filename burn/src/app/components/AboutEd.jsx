import React from "react";
import styles from "../style/aboutEd.module.css";
import styles2 from "../style/aboutPage.module.css";
const AboutEd = ({ isWhiteBG, isHeadingColor }) => {
  return (
    <div className={`${styles.about} ${isWhiteBG && styles2.aboutBg}`}>
      <div className={styles.aboutMain}>
        <div className={styles.Ed}>
          <h1
            className={`colorPrimary ${
              isHeadingColor ? styles2.aboutHead : ""
            }`}
          >
            {isWhiteBG ? "Who Is Edward Burns" : "Who Is Edward Burns "}
          </h1>
          <p className={isWhiteBG ? styles2.aboutHead : ""}>
            After an honorable career as a Marine, I found my calling in the
            world of entrepreneurship. My journey has been one of resilience and
            triumph, marked by overcoming personal struggles, serving two tours
            in Iraq, and facing homelessness after military retirement. From
            battling adversity with only $34.41 to my name, I rose to build a
            successful cleaning service company, Valor Janitorial.
            <br /> <br />
            My work ethic and perseverance propelled this business to
            unprecedented heights, eventually leading to its acquisition by a
            private equity firm. In doing so, I became the first
            multi-millionaire in my family. But my journey didn&apos;t stop there.
            Driven by a passion for excellence and a desire to uplift others, I
            pursued a Ph.D. in Business Administration and Management from
            Harvard, setting the stage for my current role as a financial
            services professional and national advanced market specialist.
            <br />
            <br />
            At Valor Financial Group, I am dedicated to helping individuals,
            business owners, and financial entrepreneurs shape a brighter future
            and cultivate robust portfolios. My commitment extends beyond
            transactions; I aim to empower consumers with greater financial
            literacy, ensuring they have the resources to protect their families
            and build a secure future.
            <br />
            <br />
            Connecting business owners with the right financial and insurance
            products is not just a job; it&apos;s a mission to enhance their coverage
            and add value to employee benefits packages. Additionally, I guide
            financial services entrepreneurs in building thriving businesses,
            offering access to industry-leading investment and insurance
            products
          </p>

          <button className={isWhiteBG ? styles2.btn : ""}>
            Discover Ed&apos;s Personal Story
          </button>

          <div className={`${styles.Social}`}>
            <img
              src={isWhiteBG ? "/images/Forbes3.svg" : "/images/Forbes2.svg"}
              alt=""
            />
            <img
              src={isWhiteBG ? "/images/BuzzFeed2.svg" : "/images/BuzzFeed.svg"}
              alt=""
            />
            <img
              src={isWhiteBG ? "/images/CNBC2.svg" : "/images/CNBC.svg"}
              alt=""
            />
            <img
              src={
                isWhiteBG
                  ? "/images/Entrepreneur3.svg"
                  : "/images/Entrepreneur2.svg"
              }
              alt=""
            />
            <img
              src={isWhiteBG ? "/images/Money2.svg" : "/images/Money.svg"}
              alt=""
            />
          </div>
        </div>

        <div className={styles.Edimg}>
          <img src="/images/about.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutEd;

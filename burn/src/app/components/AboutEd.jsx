import React from "react";
import styles from "../style/aboutEd.module.css";
import styles2 from "../style/aboutPage.module.css";
const AboutEd = ({ isWhiteBG, isHeadingColor}) => {
  return (
    <div className={`${styles.about} ${isWhiteBG && styles2.aboutBg}`}>
      <div className={styles.aboutMain}>
      <div className={styles.Ed}>
        <h1 className={`colorPrimary ${isHeadingColor ? styles2.aboutHead : ''}`} >{isWhiteBG ? 'Who Is Edward Burns': 'Who Is Edward Burns '}</h1>
        <p className={isWhiteBG ? styles2.aboutHead :""}>
          Edward Burns is a global speaker, coach, entrepreneur, 2x bestselling
          author, tv host, top ranked podcast host, and is considered one the
          most inspiring speakers of our time.
          <br />
          <br /> Ed has been sought after, and privately mentored many of the
          top professional athletes, entertainers, business executives, and
          politicians in the world. He is considered the “success and
          fulfillment whisperer” for elite achievers in helping them to perform
          at #MAXOUT levels of their lives. <br />
          <br /> He was ranked one of the country&apos;s top 50 wealthiest under
          the age of 50, and has been recognized by multiple publications as the
          “Fastest-growing business personality in the history of social media,”
          and has decided to share the strategies and techniques used for elite
          performers publicly with the world. <br />
          <br /> He is well known for combining spirituality, faith, the inner
          workings of the mind, and tactical thoughts and actions to help people
          produce real changes in their lives.
        </p>

        <button className={isWhiteBG ? styles2.btn : ""}>Discover Ed&apos;s Personal Story</button>

        <div className={`${styles.Social}`}>
          <img src={isWhiteBG ? "/images/Forbes3.svg" :"/images/Forbes2.svg"} alt=""  />
          <img src= {isWhiteBG ? "/images/BuzzFeed2.svg" :"/images/BuzzFeed.svg"} alt="" />
          <img src= {isWhiteBG ? "/images/CNBC2.svg" :"/images/CNBC.svg"} alt=""  />
          <img src= {isWhiteBG ? "/images/Entrepreneur3.svg" :"/images/Entrepreneur2.svg"} alt=""  />
          <img src={isWhiteBG ? "/images/Money2.svg" :"/images/Money.svg"} alt="" />
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

import React from "react";
import styles from "../style/footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className={styles.footerSec}>
        <div className={styles.footerMain}>
          <div className={`${styles.footer} ${styles.footer1} `}>
            <h2>ABOUT ED MYLETT</h2>
            <p>
              Ed Mylett is one of the top business leaders and peak performance
              experts in the world today. Ed has a passion for mentoring and
              coaching others on what it takes to become a champion!
            </p>

            <Link href="#">
              {" "}
              <div className={styles.social}>
                <div className={styles.imgSocial}>
                  <img src="/images/instagram2.svg" alt="" />
                  <div className={styles.detail}>
                    <h4>instagram</h4>
                    <h6>2.2M Followers</h6>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className={`${styles.footer} ${styles.footer2} `}>
            <h1 className="colorPrimary">
              JOIN THE WORLD&apos;S BIGGEST
              <br />
              MOVEMENT AND MAXOUT YOUR LIFE
            </h1>
            <h2>
              GET OUR LATEST EPISODES PLUS <br /> INSPIRING CONTENT EMAILED TO
              YOU
            </h2>

            <form action="">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <button>Submit</button>
            </form>
          </div>
          <div className={`${styles.footer} ${styles.footer3} `}>
            <h2>ABOUT ED MYLETT</h2>
            <p>
              Ed Mylett is one of the top business leaders and peak performance
              experts in the world today. Ed has a passion for mentoring and
              coaching others on what it takes to become a champion!
            </p>

            <Link href="#">
              {" "}
              <div className={styles.social}>
                <div className={styles.imgSocial}>
                  <img src="/images/instagram2.svg" alt="" />
                  <div className={styles.detail}>
                    <h4>instagram</h4>
                    <h6>2.2M Followers</h6>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

import React from "react";
import styles from "../style/winner.module.css";
import Link from "next/link";
const WinnerCirlce = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerMain}>
          <h1 className="colorPrimary">The Winner Circle</h1>

          <div className={styles.circle}>
            <div className={styles.circles}>
              <Link href="/lavel1" className={styles.lavel1}>
                <div className={styles.circleInner}>
                  <p className={styles.text}>Level 1</p>
                </div>
              </Link>

              <Link href="/lavel2" className={styles.lavel2}>
                <div className={styles.circleInner}>
                  <p className={styles.text}>Level 2</p>
                </div>
              </Link>

              <Link href="/lavel3" className={styles.lavel3}>
                <div className={styles.circleInner}>
                  <p style={{color: 'white'}} className={styles.text}>Exclusive inner circle</p>
                  <p style={{color: 'white'}} className={`${styles.text} ${styles.lavel3Text}`}>Level 3</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WinnerCirlce;

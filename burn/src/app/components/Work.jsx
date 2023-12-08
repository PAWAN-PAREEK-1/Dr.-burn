import React from "react";
import styles from "../style/work.module.css";
const Work = () => {
  return (
    <div className={styles.container}>
      <h1>WORK WITH ED</h1>

      <div className={styles.box}>
        <div className={styles.Sbox}>
          <div className={styles.boxLeft}>
            <h4>Hire Ed Mylett to Speak</h4>
            <p>
              Ed Mylett has spoken at a number of conferences and always enjoy
              collaborating with like-minded individuals.
            </p>
            <button>BOOK ED MYLETT</button>
          </div>
          <div className={styles.boxRight}>
            <img src="/images/blue.png" alt="" />
          </div>
        </div>
        <div className={styles.Sbox}>
          <div className={styles.boxLeft}>
            <h4>Hire Ed Mylett to Speak</h4>
            <p>
              Ed Mylett has spoken at a number of conferences and always enjoy
              collaborating with like-minded individuals.
            </p>
            <button>BOOK ED MYLETT</button>
          </div>
          <div className={styles.boxRight}>
            <img src="/images/blue.png" alt="" />
          </div>
        </div>
        <div className={styles.Sbox}>
          <div className={styles.boxLeft}>
            <h4>Hire Ed Mylett to Speak</h4>
            <p>
              Ed Mylett has spoken at a number of conferences and always enjoy
              collaborating with like-minded individuals.
            </p>
            <button>BOOK ED MYLETT</button>
          </div>
          <div className={styles.boxRight}>
            <img src="/images/blue.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

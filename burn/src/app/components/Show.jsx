import React from "react";
import styles from "../style/show.module.css";

const Show = () => {
  return (
    <>
      <div className={styles.showMain}>
        <div className={styles.container}>
          <div className={styles.lastPodcast}>
            <h4 className="colorPrimary">
              Become the Best Version of You with
            </h4>
            <h1>The ed mylett show</h1>
            <h3>
              RANKED <span className="colorPrimary">TOP 5 PODCASTS</span> IN THE
              WORLD
            </h3>

            <button>Watch / Listen Now</button>

            <div className={styles.ep}>
              <div className={styles.ep1}>
                <h2>5000+</h2>
                <h6>5-Star Reviews</h6>
              </div>
              <div className={styles.ep2}>
                <h2>5000+</h2>
                <h6>5-Star Reviews</h6>
              </div>
            </div>
          </div>

          <div className={styles.epBox}>
            <div className={styles.epMainBox}>
              <img src="/images/ep.png" alt="" />

              <h2 className={styles.epMainBoxHead}> EP. 267</h2>
              <div className={styles.epMainBoxDetail}>
                <h2 className="colorPrimary">ED MYLETT</h2>
                <h3>10 LESSONS I LEARNED FROM MY DOGS</h3>
              </div>
            </div>
            <div className={styles.epMainBox}>
              <img src="/images/ep.png" alt="" />

              <h2 className={styles.epMainBoxHead}> EP. 267</h2>
              <div className={styles.epMainBoxDetail}>
                <h2 className="colorPrimary">ED MYLETT</h2>
                <h3>10 LESSONS I LEARNED FROM MY DOGS</h3>
              </div>
            </div>
            <div className={styles.epMainBox}>
              <img src="/images/ep.png" alt="" />

              <h2 className={styles.epMainBoxHead}> EP. 267</h2>
              <div className={styles.epMainBoxDetail}>
                <h2 className="colorPrimary">ED MYLETT</h2>
                <h3>10 LESSONS I LEARNED FROM MY DOGS</h3>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Show;

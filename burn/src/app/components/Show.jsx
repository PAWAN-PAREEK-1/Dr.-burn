import React from "react";
import styles from "../style/show.module.css";





const episodes = [
  {epNo: 267,guestName: 'Edward Burns', epTitle: '10 LESSONS I LEARNED FROM MY DOGS'},
  {epNo: 268,guestName: 'Edward Burns', epTitle: '10 LESSONS I LEARNED FROM MY DOGS'},
  {epNo: 269,guestName: 'Edward Burns', epTitle: '10 LESSONS I LEARNED FROM MY DOGS'}
]

const Show = () => {


  return (
    <>
      <div className={styles.showMain}>
        <div className={styles.container}>
          <div className={styles.lastPodcast}>
            <h4 className="colorPrimary">
              Become the Best Version of You with
            </h4>
            <h1>The Edward Burns show</h1>
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
          {episodes.map((ep,index)=>(
            <div className={styles.epMainBox} key={index}>
              <img src="/images/podcast.png" alt="" />

              <h2 className={styles.epMainBoxHead}>EP. {ep.epNo}</h2>
              <div className={styles.epMainBoxDetail}>
                <h2 className="colorPrimary">{ep.guestName}</h2>
                <h3>{ep.epTitle}</h3>
              </div>
            </div>
           ) )}


          </div>
        </div>
      </div>
    </>
  );
};

export default Show;

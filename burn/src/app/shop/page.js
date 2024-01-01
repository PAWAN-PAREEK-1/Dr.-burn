import React from "react";
import styles2 from "../style/shopPage.module.css";
import styles from "../style/tv-show.module.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const page = () => {
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.container}>
          <div
            className={`${styles2.hero} ${styles2.hero}`}

          >
            <Navigation />
            <div className={`${styles.tvShow} ${styles2.tvShow} `}>
              <div className={`${styles.mainHero} ${styles2.mainHero}`}>
                <div className={styles2.left}>
                  <img
                    src="https://www.edmylett.com/img/shop/ed_l.png"
                    alt=""
                  />

                  <button>THE POWER OF ONE MORE COLLECTION</button>
                </div>
                <div className={styles2.right}>
                  <img
                    src="https://www.edmylett.com/img/shop/ed_r.png"
                    alt=""
                  />
                  <button>THE POWER OF ONE MORE COLLECTION</button>
                  <div className={styles.watch}>
                    {/* <button>Watch Now</button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default page;

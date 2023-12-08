import React from 'react'
import styles from "../style/home.module.css";
const SocialBox = () => {
  return (
    <div className={styles.growMain}>
      <div className={styles.grow}>
             <div className={styles.growHead}>
             <h1>JOIN THE GROWING <span>MAXOUT</span>  COMMUNITY</h1>

             </div>

             <div className={styles.growSocial}>
                <div className={styles.SocialBox}>
                  <img src="/images/instagram.svg" alt="" />
                  <div className={styles.socialName}>
                    <h4>Instagram</h4>
                    <h6>
                      2.6M Follwers
                    </h6>
                  </div>
                </div>

                <div className={styles.SocialBox}>
                  <img src="/images/youtube.svg" alt="" />
                  <div className={styles.socialName}>
                    <h4>Youtube</h4>
                    <h6>
                      2.6M Follwers
                    </h6>
                  </div>
                </div>

                <div className={styles.SocialBox}>
                  <img src="/images/tiktok.svg" alt="" />
                  <div className={styles.socialName}>
                    <h4>Tiktok</h4>
                    <h6>
                      2.6M Follwers
                    </h6>
                  </div>
                </div>

                <div className={styles.SocialBox}>
                  <img src="/images/facebook.svg" alt="" />
                  <div className={styles.socialName}>
                    <h4>Facebook</h4>
                    <h6>
                      2.6M Follwers
                    </h6>
                  </div>
                </div>

                <div className={styles.SocialBox}>
                  <img src="/images/twitter.svg" alt="" />
                  <div className={styles.socialName}>
                    <h4>twitter</h4>
                    <h6>
                      2.6M Follwers
                    </h6>
                  </div>
                </div>

             </div>
             </div>
      </div>
  )
}

export default SocialBox
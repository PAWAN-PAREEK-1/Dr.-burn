"use client";
import React, { lazy, Suspense } from "react";
import { Main } from "next/document";
import styles from "./style/home.module.css";
// Assuming you have a Loading component
import Loading from "./components/Loading";

const Navbar = lazy(() => import("./components/Navbar"));

const Navigation = lazy(() => import("./components/Navigation"));

export default function Home() {
  return (
    <Suspense
      fallback={
        <div>
          <Loading />
        </div>
      }
    >

      <div className={styles.mainHero}>
      <div className={styles.hero}>
        <Navigation />
        <div className={styles.heroMain}>
          <img src="/images/mainimag.png" alt="" />
        </div>

        <div className={styles.brandMain}>
          <div className={styles.brand}>
            <div className={styles.brandImg}>
              <img src="/images/forbes.svg" alt="" />
              <img src="/images/success.svg" alt="" />
              <img src="/images/Entrepreneur.svg" alt="" />
            </div>

            <div className={styles.brandName}>
              <img src="/images/usa-today.png" alt="" />
              <div>
                Ranked <span className={styles.colorPrimary}>#1</span> Mindset
                &amp; <br /> Performance Coach in the World
              </div>
            </div>
          </div>
        </div>



      </div>

      </div>

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

      {/* <div className={styles.jh}>
sda
      </div> */}
    </Suspense>
  );
}

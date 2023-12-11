"use client";

import React, { lazy, Suspense } from "react";
import styles from "./style/home.module.css";

import Loading from "./components/Loading";

const SocialBox = lazy(() => import("./components/SocialBox"));
const Show = lazy(() => import("./components/Show"));
const AboutEd = lazy(() => import("./components/AboutEd"));
const Books = lazy(() => import("./components/Books"));
const Media = lazy(() => import("./components/Media"));
const Work = lazy(() => import("./components/Work"));
const Footer = lazy(() => import("./components/Footer"));

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
            <img src="/images/HomePage.png" alt="" />
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
        <SocialBox />
      </div>

      <Show/>
      <AboutEd/>
      <Books/>
      <Media/>
      <Work/>
      <Footer/>

      {/* <div className={styles.jh}>
sda
      </div> */}
    </Suspense>
  );
}

"use client";
import React, { lazy, Suspense } from "react";
import { Main } from "next/document";
import styles from "./style/home.module.css";

import Loading from "./components/Loading";

const SocialBox = lazy(() => import("./components/SocialBox"));
const Show = lazy(() => import("./components/show"));

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
      <SocialBox />
      <Show/>

      {/* <div className={styles.jh}>
sda
      </div> */}
    </Suspense>
  );
}

import React, { lazy, Suspense } from "react";
const AboutImage = lazy(() => import("../components/AboutImage"));
const Navigation = lazy(() => import("../components/Navigation"));
const AboutEd = lazy(() => import("../components/AboutEd"));
const EdStory = lazy(() => import("../components/EdStory"));
const Work = lazy(() => import("../components/Work"));
const Footer = lazy(() => import("../components/Footer"));

import Loading from "../components/Loading";
import styles from "../style/home.module.css";
import styles2 from "../style/aboutPage.module.css";


const About = () => {
  return (
    <Suspense
    fallback={
      <div>
        <Loading />
      </div>
    }
  >
    <div>

<div className={styles.mainHero}>
        <div className={styles.hero}>
          <Navigation />
          <div className={`${styles.heroMain} ${styles2.heroMain}`}>
            <img src="/images/aboutUs.png" alt="" />

            <h1 className={styles2.heroText}> <span className="colorPrimary">Ed Mylett</span> is a global keynote speaker, <span className="colorPrimary"> 2x bestselling author</span>, the host of the critically acclaimed and top rated podcast, <span className="colorPrimary">“The Ed Mylett Show.”</span></h1>
            <h3 className={styles2.heroSmallText}>Ed has a passion for mentoring and coaching others on what it takes to become a <span className="colorPrimary">champion</span>!</h3>


          </div>
          <AboutImage/>


        </div>

      </div>
      <AboutEd isWhiteBG={true} isHeadingColor={true} />
      <EdStory/>
      <Work/>
      <Footer/>
    </div>
    </Suspense>
  )
}

export default About
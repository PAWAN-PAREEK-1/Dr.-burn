import React, { lazy, Suspense } from "react";
import styles2 from "../style/hire.module.css";
import styles from "../style/home.module.css";

import Loading from "../components/Loading";
import ContactForm from "../components/ContactForm"

const Navigation = lazy(() => import("../components/Navigation"));

const Footer = lazy(() => import("../components/Footer"));
const page = () => {
  return (
    <Suspense
      fallback={
        <div>
          <Loading />
        </div>
      }
    >
      <div>
        <div className={`${styles.mainHero} ${styles2.mainHero}`}>
          <div className={`${styles.hero} ${styles2.hero}`}>
            <Navigation />
            <div className={`${styles.heroMain} ${styles2.heroMain}`}>
              <h1>
                For over 3 decades,{" "}
                <span className="colorPrimary">Edward Burns</span> has been{" "}
                <span className="colorPrimary">inspiring</span> and{" "}
                <span className="colorPrimary">empowering </span>audiences
                across the globe.
              </h1>
            </div>
          </div>
        </div>
        <div className={styles2.hire}>

        <div className={styles2.hireLeft}>
            <p>Ed has repeatedly been ranked #1 on the list of the world&#39;s greatest speakers. A born storyteller, Ed weaves together personal anecdotes and universal truths to deliver a message that is both relatable and transformative. Whether he&#39;s sharing his own journey from humble beginnings to becoming a top-earning entrepreneur or teaching others how to unleash their full potential, Ed always leaves his audiences inspired and ready to take action.</p>
            <br/>
            <p>If you&#39;re looking for a speaker who can deliver an unforgettable experience and truly create change, contact Edward Burns today.</p>

            <div className={styles2.socialImage}>

            <img src="/images/Forbes3.svg" alt=""  />
          <img src= "/images/BuzzFeed2.svg" alt="" />
          <img src= "/images/CNBC2.svg" alt=""  />
          <img src= "/images/Entrepreneur3.svg" alt=""  />
          <img src="/images/Money2.svg" alt="" />

            </div>

        </div>
        <div className={styles2.hireRight}>
                <img src="/images/hire.png" alt="" />
        </div>

        </div>
        <ContactForm/>

      </div>
      <Footer/>

    </Suspense>
  );
};

export default page;

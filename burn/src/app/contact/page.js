import React from "react";
import styles4 from "../style/hire.module.css";
import styles5 from "../style/home.module.css";

import styles3 from "../style/podcastPage.module.css";
import Navigation from "../components/Navigation";
import styles from "../style/contactPage.module.css";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const page = () => {
  return (
    <div>
      <div className={` ${styles3.mainHero} ${styles.mainHero}`}>
        <div className={` ${styles3.hero} ${styles.hero}`}>
          <Navigation />
          <div
            className={`${styles5.heroMain} ${styles4.heroMain} ${styles3.heroMain} ${styles.heroMain}`}
          >
            <button>Connect</button>
          </div>
        </div>

        <div className={styles.textBox}>
          <h3>
            Our team gets hundreds of emails, notes and requests for different
            opportunities every day. Yet we do our best to answer most of your
            questions in a timely manner as every message is really important to
            us.
          </h3>
        </div>
      </div>


            <div className={styles.contact}>
                <div className={styles.left}>
                        <img src="/images/contactus2.png" alt="" />
                </div>
                <div className={styles.left}>
                        <ContactForm isContactPage={true} />
                </div>

            </div>

            <Footer/>


    </div>
  );
};

export default page;

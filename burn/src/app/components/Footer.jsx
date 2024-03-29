import React from "react";
import styles from "../style/footer.module.css";
import Link from "next/link";

const footerSocial = [
  {
    link: "https://www.instagram.com/dr.edwardburnsjr?igsh=ODA1NTc5OTg5Nw==",
    img: "/images/instagram2.svg",
    name: "Instagram",
    followers: 2.25,
  },
  {
    link: "https://www.tiktok.com/@dr.edwardburns?_t=8iavjpZ8fPi&_r=1",
    img: "	https://www.edmylett.com/icons/footer/tiktok.svg",
    name: "TikTok",
    followers: 2.25,
  },
  {
    link: "https://www.facebook.com/profile.php?id=100084015300138&mibextid=LQQJ4d",
    img: "		https://www.edmylett.com/icons/footer/facebook.svg",
    name: "Facebook",
    followers: 2.25,
  },
  {
    link: "https://www.linkedin.com/in/edwardburnsjr?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    img: "	/images/linkdin.svg",
    name: "linkedin",
    followers: 2.25,
  },
  {
    link: "https://x.com/edwardburnsjr27/",
    img: "	/images/twitter2.svg",
    name: "Twitter",
    followers: 2.25,
  },
];

const Footer = () => {
  return (
    <>
      <div className={styles.footerSec}>
        <div className={styles.footerMain}>
          <div className={styles.containerMain}>
            <div className={`${styles.footer} ${styles.footer1} `}>
              <h2>ABOUT Edward Burns</h2>
              <p>
                Edward Burns is one of the top business leaders and peak
                performance experts in the world today. Ed has a passion for
                mentoring and coaching others on what it takes to become a
                champion!
              </p>

              {footerSocial.slice(0, 3).map((social, i) => (
                <Link href={social.link} key={i}>
                  {" "}
                  <div className={styles.social}>
                    <div className={styles.imgSocial}>
                      <img src={social.img} alt="" />
                      <div className={styles.detail}>
                        <h4>{social.name}</h4>
                        <h6>{social.followers} Followers</h6>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className={`${styles.footer} ${styles.footer2} `}>
              <h1 className="colorPrimary">
                JOIN THE WORLD&apos;S BIGGEST
                <br />
                MOVEMENT AND MAXOUT YOUR LIFE
              </h1>
              <h2>
                GET OUR LATEST EPISODES PLUS <br /> INSPIRING CONTENT EMAILED TO
                YOU
              </h2>

              <form action="">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
                <button>Submit</button>
              </form>
            </div>
            <div className={`${styles.footer} ${styles.footer3} `}>
              <h2>ABOUT Edward Burns</h2>
              <p>
                Edward Burns is one of the top business leaders and peak
                performance experts in the world today. Ed has a passion for
                mentoring and coaching others on what it takes to become a
                champion!
              </p>

              {footerSocial.slice(3).map((social, i) => (
                <Link href={social.link} key={i}>
                  {" "}
                  <div className={styles.social}>
                    <div className={styles.imgSocial}>
                      <img src={social.img} alt="" />
                      <div className={styles.detail}>
                        <h4>{social.name}</h4>
                        <h6>{social.followers} Followers</h6>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

import React from "react";
import styles from "../style/filter.module.css";

const buttons = [
  {
    text: "Sport Legends",
  },
  {
    text: "Health Experts",
  },
  {
    text: "Me Speaking to You",
  },
  {
    text: "Entrepreneurs",
  },
];

const podcast = [
  {
    img: "	https://ed-mylett-web.s3.us-west-1.amazonaws.com/frZKOokwW.PNG",
    epNO: "270",
    date: "27/12/2015",
    author: "ed my ",
    text: "12 Steps To Become A Master Listene",
  },
];

const Filter = () => {
  return (
    <div className={styles.main}>
      <div className={styles.filterName}>
        {buttons.map((data) => (
          <button>{data.text}</button>
        ))}
      </div>
      <div className={styles.socialBox}>
        {podcast.map((pod, index) => (
          <div className={styles.box} key={index}>
            <img src={pod.img} alt="" />
            <div className={styles.detail}>
              <div className={styles.date}>
                <h2>Ep. {pod.epNo}</h2>
                <h2>12/21/2023</h2>
              </div>
              <h3>Ed Mylett</h3>
              <h1>12 Steps To Become A Master Listener</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;

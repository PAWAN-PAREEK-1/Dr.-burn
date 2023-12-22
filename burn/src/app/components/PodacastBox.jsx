import React from 'react'
import styles from "../style/podcastBox.module.css";

const podcastData = [
    {
        img:"https://www.edmylett.com/icons/ms-download.svg",name:"Over 20 milion of Downloads"
    },
    {
        img:"https://www.edmylett.com/icons/ms-download.svg",name:"#1 Podcast in the world"
    },
    {
        img:"https://www.edmylett.com/icons/ms-download.svg",name:"Listened in over 67 countries "
    },
    {
        img:"https://www.edmylett.com/icons/ms-download.svg",name:"Over 10,400 5-Star Ratings", isBorder:true
    }
]

const PodacastBox = () => {
  return (
    <>
    <div className={styles.mainBody}>
    <div className={styles.main}>

            <div className={styles.podcatsMain}>
            {podcastData.map((data, index)=>(
        <div className={styles.podcast} key={index}>
                <img src={data.img} alt="" />
                <h3>{data.name}</h3>
                <hr className={data.isBorder ? styles.borderHr: ""} />

        </div>
         ))}
        </div>



    </div>

    </div>

    </>
  )
}

export default PodacastBox
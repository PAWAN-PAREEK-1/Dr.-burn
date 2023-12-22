import React from 'react'
import styles4 from "../style/hire.module.css";
import styles5 from "../style/home.module.css";

import styles3 from "../style/podcastPage.module.css";
import Navigation  from "../components/Navigation";
import PodacastBox from '../components/PodacastBox';
import Subscribe from '../components/Subscribe';
import Filter from '../components/Filter';

const page = () => {
  return (
    <div>
        <div className={` ${styles3.mainHero}`}>
          <div className={` ${styles3.hero}`}>
            <Navigation />
            <div className={`${styles5.heroMain} ${styles4.heroMain} ${styles3.heroMain}`}>
              <h1>
              Listen to the <span className='colorPrimary'>greatest peak-performers</span>  across all industries in one place, sharing their <span className='colorPrimary'>journey, knowledge</span>  and  <span className='colorPrimary'>thought leadership.</span>
              </h1>
            </div>
          </div>
          <PodacastBox/>

        </div>
        <Subscribe/>
          <Filter/>
    </div>
  )
}

export default page
import React from 'react'
import styles from "../style/contactForm.module.css";

const ContactForm = () => {
  return (
    <div>

      <div className={styles.hero}>

          <div className={`${styles.contactForm}`}>

            <h2>Hire Me to Speak</h2>

            <form action="">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <input type="text" placeholder="Company Name" />
              <input type="text" placeholder="Subject of inquiry" />
              <textarea name="request" id="" cols="30" rows="5" placeholder='Request'></textarea>
              <button>Send A Booking Request</button>
            </form>

          </div>

      </div>


    </div>
  )
}

export default ContactForm
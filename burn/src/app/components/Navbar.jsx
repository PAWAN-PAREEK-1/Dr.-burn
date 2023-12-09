import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../style/navbar.module.css';
import logo from "/public/images/logo.svg"
const Navbar = () => {
  return (
    <div>
        <div className="navbar-header">
     <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
            <img src="/images/logo.png" alt="" />
        </Link>
      </div>
      <div className={styles.links}>
      <Link href="/">
        Home
        </Link>
        <Link href="/about">
         AboutEd
        </Link>
        <Link href="/services">
        Hire Ed to Speak
        </Link>
        <Link href="/services">
        Podcast
        </Link>
        <Link href="/services">
        TV Show
        </Link>
        <Link href="/services">
        Books

        </Link>
        <Link href="/services">
        Shop
        </Link>
        <Link href="/services">
        Contact
        </Link>
        {/* Add more links as needed */}
      </div>
    </nav>
    </div>
    </div>
  );
};



export default Navbar
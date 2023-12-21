"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../style/navbar.module.css';


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className={`navbar-header ${scrolled ? styles.scrolled : ''}`}>
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
          <div className={styles.logo}>
            <Link href="/">
              <img src="/images/logo.png" alt="" />
            </Link>
          </div>
          <div className={styles.links}>
            <Link href="/">Home</Link>
            <Link href="/about">AboutEd</Link>
            <Link href="/Hire">Hire Ed to Speak</Link>
            <Link href="/services">Podcast</Link>
            <Link href="/services">TV Show</Link>
            <Link href="/services">Books</Link>
            <Link href="/services">Shop</Link>
            <Link href="/services">Contact</Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

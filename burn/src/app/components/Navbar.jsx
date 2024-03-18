"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../style/navbar.module.css";
import "../globals.css";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pathname = usePathname();
  const [togle, setTogle] = useState(false);

  return (
    <div style={{ position: "relative", zIndex: 999 }}>
      <div className={`navbar-header`}>
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
          <div className={scrolled ? styles.scrollDiv : styles.navbar}>
            <div className={styles.logo}>
              <Link href="/">
                <img src="/images/logo.svg" alt="" />
              </Link>
            </div>
            <div className={styles.links}>
              <Link
                className={`link ${pathname === "/" ? "active" : ""}`}
                href="/"
              >
                Home
              </Link>
              <Link
                className={`link ${pathname === "/about" ? "active" : ""}`}
                href="/about"
              >
                AboutEd
              </Link>
              <Link
                className={`link ${pathname === "/Hire" ? "active" : ""}`}
                href="/Hire"
              >
                Hire Ed to Speak
              </Link>
              <Link
                className={`link ${pathname === "/podcast" ? "active" : ""}`}
                href="/podcast"
              >
                Podcast
              </Link>
              {/* <Link  className={`link ${pathname === '/tv-show' ? 'active' : ''}`} href="/tv-show">TV Show</Link> */}
              <Link
                className={`link ${pathname === "/book" ? "active" : ""}`}
                href="/book"
              >
                Books
              </Link>
              <Link
                className={`link ${pathname === "/shop" ? "active" : ""}`}
                href="/shop"
              >
                Shop
              </Link>
              <Link
                className={`link ${pathname === "/contact" ? "active" : ""}`}
                href="/contact"
              >
                Contact
              </Link>
            </div>

            <div
              onClick={() => setTogle(!togle)}
              className={`${styles.menuBar}`}
            >
              <CiMenuFries />
            </div>
          </div>
          <div className={`${styles.mobileMenu} ${togle ? styles.togle : ""}`}>
            <div>
              <Link
                className={`link ${pathname === "/" ? "active" : ""}`}
                href="/"
              >
                Home
              </Link>
            </div>

            <div>
              <Link
                className={`link ${pathname === "/about" ? "active" : ""}`}
                href="/about"
              >
                AboutEd
              </Link>
            </div>

            <div>
              <Link
                className={`link ${pathname === "/Hire" ? "active" : ""}`}
                href="/Hire"
              >
                Hire Ed to Speak
              </Link>
            </div>

            <div>
              <Link
                className={`link ${pathname === "/podcast" ? "active" : ""}`}
                href="/podcast"
              >
                Podcast
              </Link>
            </div>
            {/* <Link  className={`link ${pathname === '/tv-show' ? 'active' : ''}`} href="/tv-show">TV Show</Link> */}
            <div>
              <Link
                className={`link ${pathname === "/book" ? "active" : ""}`}
                href="/book"
              >
                Books
              </Link>
            </div>
            <div>
              <Link
                className={`link ${pathname === "/shop" ? "active" : ""}`}
                href="/shop"
              >
                Shop
              </Link>
            </div>
            <div>
              <Link
                className={`link ${pathname === "/contact" ? "active" : ""}`}
                href="/contact"
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

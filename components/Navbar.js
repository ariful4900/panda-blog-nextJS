import Link from 'next/link';
import React from 'react';
import styles from '../styles/Home.module.css';

const Navbar = () => {
    return (
        <nav className={styles.mainNav}>
        <ul>
          <li>
            <Link href={"/"} legacyBehavior>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href={"/about"} legacyBehavior>
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href={"/blog"} legacyBehavior>
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href={"/contact"} legacyBehavior>
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    );
};

export default Navbar;
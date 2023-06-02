"use client";

import Link from 'next/link'
import React from 'react';

import styles from './navbar.module.css'
import DarkModeToggle from '../DarkmodeToggle/DarkModeToggle';

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  }
];


const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>Logofy</Link>
      <div className={styles.links}>
        <DarkModeToggle/>
        {
          links.map((link) => <Link href={link.url} key={link.id} className={styles.link}>{link.title}</Link>)
        }
        <button className={styles.logout} onClick={() => console.log("Logged out")}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
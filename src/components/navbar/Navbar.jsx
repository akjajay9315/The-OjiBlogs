import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Link href="https://www.linkedin.com/in/ajay-kumar-2991871b4/" passHref>
          <Image src="/linkedin.png" alt="LinkedIn" width={24} height={24} />
        </Link>
        <Link href="https://www.instagram.com/akjajay8595/" passHref>
          <Image src="/instagram.png" alt="Instagram" width={24} height={24} />
        </Link>
        <Link
          href="https://www.youtube.com/channel/UCK8G5Jyzwik3ippOvYHaTIA"
          passHref
        >
          <Image src="/youtube.png" alt="YouTube" width={24} height={24} />
        </Link>
      </div>
      <div className={styles.logo}>OjiBlogs</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>
          Homepage
        </Link>
        {/* <Link href="/" className={styles.link}>Contact</Link> */}
        {/* <Link href="/" className={styles.link}>About</Link> */}
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;

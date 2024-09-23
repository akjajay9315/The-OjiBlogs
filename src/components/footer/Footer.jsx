"use client";
import React, { useEffect, useState } from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const [visitCount, setVisitCount] = useState(229);

  useEffect(() => {
    const sessionKey = "hasVisited";
    const countKey = "visitCount";

    // Check if the session has already recorded a visit
    const hasVisited = sessionStorage.getItem(sessionKey);

    if (!hasVisited) {
      // If not visited, increment the count
      const count = localStorage.getItem(countKey);
      const newCount = count ? parseInt(count) + 1 :229;

      localStorage.setItem(countKey, newCount);
      setVisitCount(newCount);

      // Set the session visit flag
      sessionStorage.setItem(sessionKey, "true");
    } else {
      // If already visited in this session, just get the count
      const count = localStorage.getItem(countKey);
      setVisitCount(count ? parseInt(count) : 0);
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="OjiBlogs" width={50} height={50} />
          <h1 className={styles.logoText}>OjiBlogs</h1>
        </div>
        {/* Display Visit Count */}
        <div className={styles.visitCount}>
          <h2 className="text-sm text-gray-500">Visits: {visitCount}</h2>
        </div>
        <p className={styles.desc}>
          OjiBlogs is a part of Ojiskills-bythe3D where users share and explore
          each other’s stories and creative ideas, fostering a collaborative and
          inspiring community.
        </p>
        <div className={styles.icons}>
          <Link
            href="https://www.linkedin.com/in/ajay-kumar-2991871b4/"
            passHref
          >
            <Image src="/linkedin.png" alt="LinkedIn" width={18} height={18} />
          </Link>
          <Link href="https://www.instagram.com/akjajay8595/" passHref>
            <Image
              src="/instagram.png"
              alt="Instagram"
              width={18}
              height={18}
            />
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCK8G5Jyzwik3ippOvYHaTIA"
            passHref
          >
            <Image src="/youtube.png" alt="YouTube" width={18} height={18} />
          </Link>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/posts/why-ojiblogs-growing-together-with-ideas-stories">
            Author
          </Link>
          <Link href="/write">Write</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/blog?cat=ideas">Ideas</Link>
          <Link href="/blog?cat=fashion">Fashion</Link>
          <Link href="/blog?cat=coding">Coding</Link>
          <Link href="/blog?cat=travel">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="https://www.linkedin.com/in/ajay-kumar-2991871b4/">
            LinkedIn
          </Link>
          <Link href="https://www.instagram.com/akjajay8595/">Instagram</Link>
          <Link href="https://www.youtube.com/channel/UCK8G5Jyzwik3ippOvYHaTIA">
            YouTube
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

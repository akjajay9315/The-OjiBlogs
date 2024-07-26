// import React from "react";
// import styles from "./featured.module.css";
// import Image from "next/image";
// import Link from "next/link";

// const Featured = () => {
//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>
//         <b>Hey, Ajay Kumar here!</b> Welcome to OjiBlogs where ideas and
//         thoughts thrive.
//       </h1>
//       <div className={styles.post}>
//         <div className={styles.imgContainer}>
//           <Image src="/p1.jpg" alt="" fill className={styles.image} />
//         </div>
//         <div className={styles.textContainer}>
//           <h1 className={styles.postTitle}>
//             Let's discover my and yours stories/creative ideas together.
//           </h1>
//           <p className={styles.postDesc}>
//             OjiBlogs is a part of Ojiskills-bythe3D where users share and
//             explore each other’s stories and creative ideas, fostering a
//             collaborative and inspiring community.
//           </p>
//           <Link href="/posts/why-ojiblogs-growing-together-with-ideas-stories">
//             <button className={styles.button}>Read More</button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Featured;


import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import Link from "next/link";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Ajay Kumar here!</b> Welcome to OjiBlogs where ideas and
        thoughts thrive.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image
            src="/p1.jpg"
            alt="Featured image"
            fill
            className={styles.image}
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw" // Adjust sizes as needed
            priority // Optional: Add if this image is critical
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Let's discover my and yours stories/creative ideas together.
          </h1>
          <p className={styles.postDesc}>
            OjiBlogs is a part of Ojiskills-bythe3D where users share and
            explore each other’s stories and creative ideas, fostering a
            collaborative and inspiring community.
          </p>
          <Link href="/posts/why-ojiblogs-growing-together-with-ideas-stories">
            <button className={styles.button}>Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;

// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import styles from "./menuPosts.module.css";

// const MenuPosts = ({ withImage }) => {
//   return (
//     <div className={styles.items}>
//       <Link href="/blog?cat=travel" className={styles.item}>
//         {withImage && (
//           <div className={styles.imageContainer}>
//             <Image src="/p1.jpg" alt="" fill className={styles.image} />
//           </div>
//         )}
//         <div className={styles.textContainer}>
//           <span className={`${styles.category} ${styles.travel}`}>Travel</span>
//           <h3 className={styles.postTitle}>
//             "The world is a book and those who do not travel read only one
//             page."
//           </h3>
//           <div className={styles.detail}>
//             <span className={styles.username}>Saint Augustine</span>
//             <span className={styles.date}> - 25.07.2023</span>
//           </div>
//         </div>
//       </Link>
//       <Link href="/blog?cat=culture" className={styles.item}>
//         {withImage && (
//           <div className={styles.imageContainer}>
//             <Image src="/p1.jpg" alt="" fill className={styles.image} />
//           </div>
//         )}
//         <div className={styles.textContainer}>
//           <span className={`${styles.category} ${styles.culture}`}>
//             Culture
//           </span>
//           <h3 className={styles.postTitle}>
//             "Culture is the widening of the mind and of the spirit."
//           </h3>
//           <div className={styles.detail}>
//             <span className={styles.username}>Jawaharlal Nehru</span>
//             <span className={styles.date}> - 25.07.1950</span>
//           </div>
//         </div>
//       </Link>
//       <Link href="/blog?cat=food" className={styles.item}>
//         {withImage && (
//           <div className={styles.imageContainer}>
//             <Image src="/p1.jpg" alt="" fill className={styles.image} />
//           </div>
//         )}
//         <div className={styles.textContainer}>
//           <span className={`${styles.category} ${styles.food}`}>Food</span>
//           <h3 className={styles.postTitle}>
//             "Food brings us together, and it's the heart of every gathering."
//           </h3>
//           <div className={styles.detail}>
//             <span className={styles.username}>Julia Child</span>
//             <span className={styles.date}> - 25.07.1990</span>
//           </div>
//         </div>
//       </Link>
//       <Link href="/blog?cat=fashion" className={styles.item}>
//         {withImage && (
//           <div className={styles.imageContainer}>
//             <Image src="/p1.jpg" alt="" fill className={styles.image} />
//           </div>
//         )}
//         <div className={styles.textContainer}>
//           <span className={`${styles.category} ${styles.fashion}`}>
//             Fashion
//           </span>
//           <h3 className={styles.postTitle}>
//             "Fashion is the armor to survive the reality of everyday life."
//           </h3>
//           <div className={styles.detail}>
//             <span className={styles.username}>Bill Cunningham</span>
//             <span className={styles.date}> - 25.07.2010</span>
//           </div>
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default MenuPosts;
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css";

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href="/blog?cat=travel" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image
              src="/p1.jpg"
              alt="Travel category image"
              fill
              className={styles.image}
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw" // Adjust as needed
              priority // Optional: Add if this image is critical for the initial load
            />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h3 className={styles.postTitle}>
            "The world is a book and those who do not travel read only one
            page."
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Saint Augustine</span>
            <span className={styles.date}> - 25.07.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/blog?cat=culture" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image
              src="/p1.jpg"
              alt="Culture category image"
              fill
              className={styles.image}
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw" // Adjust as needed
              priority // Optional: Add if this image is critical for the initial load
            />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>
            Culture
          </span>
          <h3 className={styles.postTitle}>
            "Culture is the widening of the mind and of the spirit."
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Jawaharlal Nehru</span>
            <span className={styles.date}> - 25.07.1950</span>
          </div>
        </div>
      </Link>
      <Link href="/blog?cat=food" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image
              src="/p1.jpg"
              alt="Food category image"
              fill
              className={styles.image}
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw" // Adjust as needed
              priority // Optional: Add if this image is critical for the initial load
            />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>Food</span>
          <h3 className={styles.postTitle}>
            "Food brings us together, and it's the heart of every gathering."
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Julia Child</span>
            <span className={styles.date}> - 25.07.1990</span>
          </div>
        </div>
      </Link>
      <Link href="/blog?cat=fashion" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image
              src="/p1.jpg"
              alt="Fashion category image"
              fill
              className={styles.image}
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw" // Adjust as needed
              priority // Optional: Add if this image is critical for the initial load
            />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>
            Fashion
          </span>
          <h3 className={styles.postTitle}>
            "Fashion is the armor to survive the reality of everyday life."
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Bill Cunningham</span>
            <span className={styles.date}> - 25.07.2010</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;

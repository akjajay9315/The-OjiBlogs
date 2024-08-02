// correct locally ---

// import Image from "next/image";
// import styles from "./card.module.css";
// import Link from "next/link";

// const Card = ({ key, item }) => {
//   return (
//     <div className={styles.container} key={key}>
//       {item.img && (
//         <div className={styles.imageContainer}>
//           <Image
//             src={item.img}
//             alt=""
//             fill
//             className={styles.image}
//             sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw" // Adjust based on design
//             priority // Optional: Add if this image is critical
//           />
//         </div>
//       )}
//       <div className={styles.textContainer}>
//         <div className={styles.detail}>
//           <span className={styles.date}>
//             {item.createdAt.substring(0, 10)} -{" "}
//           </span>
//           <span className={styles.category}>{item.catSlug}</span>
//         </div>
//         <Link href={`/posts/${item.slug}`}>
//           <h1>{item.title}</h1>
//         </Link>
//         <div className={styles.desc} dangerouslySetInnerHTML={{ __html: item?.desc.substring(0, 60) }} />
//         <Link href={`/posts/${item.slug}`} className={styles.link}>
//           Read More
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Card;

// Correctly commited------------------

// import Image from "next/image";
// import styles from "./card.module.css";
// import Link from "next/link";

// const Card = ({ key, item }) => {
//   return (
//     <div className={styles.container} key={key}>
//       {item.img && (
//         <div className={styles.imageContainer}>
//           <Image
//             src={item.img}
//             alt=""
//             fill
//             className={styles.image}
//             sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw" // Adjust based on design
//             priority // Optional: Add if this image is critical
//           />
//         </div>
//       )}
//       <div className={styles.textContainer}>
//         <div className={styles.detail}>
//           <span className={styles.date}>
//             {item.createdAt.substring(0, 10)} -{" "}
//           </span>
//           <span className={styles.category}>{item.catSlug}</span>
//         </div>
//         <Link href={`/posts/${item.slug}`}>
//           <h1>{item.title}</h1>
//         </Link>
//         <div
//           className={styles.desc}
//           dangerouslySetInnerHTML={{ __html: item?.desc.substring(0, 60) }}
//         />
//         <Link href={`/posts/${item.slug}`} className={styles.link}>
//           Read More
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Card;

import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

// Function to convert raw Draft.js content to plain text
const convertRawToPlainText = (rawContent) => {
  try {
    const contentState = JSON.parse(rawContent);
    return contentState.blocks.map((block) => block.text).join("\n");
  } catch (error) {
    console.error("Error converting raw Draft.js content:", error);
    return ""; // Return empty string in case of an error
  }
};

const Card = ({ item }) => {
  // Convert raw Draft.js content to plain text
  const plainTextDesc = convertRawToPlainText(item.desc);

  return (
    <div className={styles.container}>
      {item.img && (
        <div className={styles.imageContainer}>
          <Image
            src={item.img}
            alt={item.title || "Image"} // Improved alt text
            fill
            className={styles.image}
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority // Optional: Add if this image is critical
          />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {item.createdAt.substring(0, 10)} -{" "}
          </span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`} legacyBehavior>
          <a>
            <h1>{item.title}</h1>
          </a>
        </Link>
        <div
          className={styles.desc}
          dangerouslySetInnerHTML={{ __html: plainTextDesc.substring(0, 60) }}
        />
        <div className={styles.views}>{item.views} views</div>
        <Link href={`/posts/${item.slug}`} legacyBehavior>
          <a className={styles.link}>Read More</a>
        </Link>
      </div>
    </div>
  );
};

export default Card;




// import React from "react";
// import Image from "next/image";
// import styles from "./card.module.css";
// import Link from "next/link";

// const Card = () => {
//   return (
//     <div className={styles.container}>
//       <div className={styles.imageContainer}>
//         <Image
//           src="/p1.jpg"
//           alt=""
//           fill
//           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//           className={styles.image}
//         />
//       </div>
//       <div className={styles.textContainer}>
//         <div className={styles.detail}>
//           <span className={styles.date}>11.02.2023</span>
//           <span className={styles.category}>CULTURE</span>
//         </div>
//         <Link href="/">
//           <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
//         </Link>
//         <p className={styles.desc}>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eaque
//           dignissimos ullam commodi eos adipisci facere! Quis id explicabo ipsam
//           totam libero ipsa aliquam obcaecati, in facere molestiae architecto
//           asperiores?...
//         </p>
//         <Link href="/" className={styles.link}>Read More</Link>
//       </div>
//     </div>
//   );
// };

// export default Card;



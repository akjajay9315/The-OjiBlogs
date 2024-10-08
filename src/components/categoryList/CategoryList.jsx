import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const getData = async () => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}api/categories`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CategoryList = async () => {
  const data = await getData();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data?.map((item) => (
          <Link
            href={`/blog?cat=${item.slug}`}
            className={`${styles.category} ${styles[item.slug]}`}
            key={item._id}
          >
            {item.img && (
              <Image
                src={item.img}
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;


// import React from 'react'
// import styles from "./categoryList.module.css";
// import Link from "next/link";
// import Image from "next/image";

// const CategoryList = () => {
// return (
//   <div className={styles.container}>
//     <h1 className={styles.title}>Popular Categories</h1>
//     <div className={styles.categories}>
//       <Link
//         href="/blog?cat=style"
//         className={`${styles.category} ${styles.style}`}
//       >
//         <Image
//           src="/style.png"
//           alt=""
//           width={32}
//           height={32}
//           className={styles.image}
//         />
//         Styles
//       </Link>
//       <Link
//         href="/blog?cat=style"
//         className={`${styles.category} ${styles.fashion}`}
//       >
//         <Image
//           src="/fashion.png"
//           alt=""
//           width={32}
//           height={32}
//           className={styles.image}
//         />
//         Fashion
//       </Link>
//       <Link
//         href="/blog?cat=style"
//         className={`${styles.category} ${styles.food}`}
//       >
//         <Image
//           src="/food.png"
//           alt=""
//           width={32}
//           height={32}
//           className={styles.image}
//         />
//         Food
//       </Link>
//       <Link
//         href="/blog?cat=style"
//         className={`${styles.category} ${styles.culture}`}
//       >
//         <Image
//           src="/culture.png"
//           alt=""
//           width={32}
//           height={32}
//           className={styles.image}
//         />
//         Culture
//       </Link>
//       <Link
//         href="/blog?cat=style"
//         className={`${styles.category} ${styles.travel}`}
//       >
//         <Image
//           src="/travel.png"
//           alt=""
//           width={32}
//           height={32}
//           className={styles.image}
//         />
//         Travel
//       </Link>
//       <Link
//         href="/blog?cat=style"
//         className={`${styles.category} ${styles.coding}`}
//       >
//         <Image
//           src="/coding.png"
//           alt=""
//           width={32}
//           height={32}
//           className={styles.image}
//         />
//         Coding
//       </Link>
//     </div>
//   </div>
// );
// };

// export default CategoryList;

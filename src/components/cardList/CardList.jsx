// import React from "react";
// import styles from "./cardList.module.css";
// import Pagination from "../pagination/Pagination";
// import Image from "next/image";
// import Card from "../card/Card";

// const getData = async (page, cat) => {
//   const res = await fetch(
//     `${process.env.NEXTAUTH_URL}api/posts?page=${page}&cat=${cat || ""}`,
//     // const res = await fetch(
//     // `${process.env.NEXTAUTH_URL}api/posts?page=${page}}`,
//     {
//       cache: "no-store",
//     }
//   );

//   if (!res.ok) {
//     throw new Error("Failed");
//   }

//   return res.json();
// };

// const CardList = async ({ page, cat }) => {
//   const { posts, count } = await getData(page, cat);

//   const POST_PER_PAGE = 2;

//   const hasPrev = POST_PER_PAGE * (page - 1) > 0;
//   const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>Recent Posts</h1>
//       <div className={styles.posts}>
//         {posts?.map((item) => (
//           <Card item={item} key={item._id} />
//         ))}
//       </div>
//       <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
//     </div>
//   );
// };

// export default CardList;





import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Image from "next/image";
import Card from "../card/Card";

const getData = async (page, cat) => {
  const url = `${process.env.NEXTAUTH_URL}api/posts?page=${page}&cat=${cat || ""}`;
  console.log("Fetching URL:", url);
  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    const errorText = await res.text();
    console.error("Fetch error:", errorText);
    throw new Error(`Failed to fetch data: ${errorText}`);
  }

  return res.json();
};

const CardList = async ({ page, cat }) => {
  try {
    const { posts, count } = await getData(page, cat);

    const POST_PER_PAGE = 2;

    const hasPrev = POST_PER_PAGE * (page - 1) > 0;
    const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Recent Posts</h1>
        <div className={styles.posts}>
          {posts?.map((item) => (
            <Card item={item} key={item._id} />
          ))}
        </div>
        <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
      </div>
    );
  } catch (error) {
    return (
      <div className={styles.error}>Error loading posts: {error.message}</div>
    );
  }
};

export default CardList;

// import React from "react";
// import styles from "./cardList.module.css";
// import Pagination from "../pagination/Pagination";
// import Image from "next/image";
// import Card from "../card/Card";
// const CardList = async({page}) => {

//   const data = await getData(page)
//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>Recent Posts</h1>
//       <div className={styles.posts}>
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//       </div>
//       <Pagination />
//     </div>
//   );
// };
// export default CardList;
// import Menu from "@/components/Menu/Menu";
// import styles from "./singlePage.module.css";
// import Image from "next/image";
// import Comments from "@/components/comments/Comments";

// const getData = async (slug) => {
//   const res = await fetch(`${process.env.NEXTAUTH_URL}api/posts/${slug}`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed");
//   }

//   return res.json();
// };

// const SinglePage = async ({ params }) => {
//   const { slug } = params;

//   const data = await getData(slug);

//   return (
//     <div className={styles.container}>
//       <div className={styles.infoContainer}>
//         <div className={styles.textContainer}>
//           <h1 className={styles.title}>{data?.title}</h1>
//           <div className={styles.user}>
//             {data?.user?.image && (
//               <div className={styles.userImageContainer}>
//                 <Image src={data.user.image} alt="" fill className={styles.avatar} />
//               </div>
//             )}
//             <div className={styles.userTextContainer}>
//               <span className={styles.username}>{data?.user.name}</span>
//               <span className={styles.date}>01.01.2024</span>
//             </div>
//           </div>
//         </div>
//         {data?.img && (
//           <div className={styles.imageContainer}>
//             <Image src={data.img} alt="" fill className={styles.image} />
//           </div>
//         )}
//       </div>
//       <div className={styles.content}>
//         <div className={styles.post}>
//           <div
//             className={styles.description}
//             dangerouslySetInnerHTML={{ __html: data?.desc }}
//           />
//           <div className={styles.comment}>
//             <Comments postSlug={slug}/>
//           </div>
//         </div>
//         <Menu />
//       </div>
//     </div>
//   );
// };

// export default SinglePage;


import Menu from "@/components/Menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

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

const getData = async (slug) => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const SinglePage = async ({ params }) => {
  const { slug } = params;

  const data = await getData(slug);

  // Convert raw Draft.js content to plain text
  const plainTextDesc = convertRawToPlainText(data?.desc);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data?.title}</h1>
          <div className={styles.user}>
            {data?.user?.image && (
              <div className={styles.userImageContainer}>
                <Image
                  src={data.user.image}
                  alt=""
                  fill
                  className={styles.avatar}
                  sizes="(max-width: 600px) 50px, (max-width: 1200px) 75px, 100px" // Adjust sizes as needed
                />
              </div>
            )}
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{data?.user.name}</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        {data?.img && (
          <div className={styles.imageContainer}>
            <Image
              src={data.img}
              alt=""
              fill
              className={styles.image}
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw" // Adjust sizes as needed
            />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.descriptionText}>{plainTextDesc}</div>
          <div className={styles.comment}>
            <Comments postSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;

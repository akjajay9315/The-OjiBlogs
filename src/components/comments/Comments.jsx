// "use client";

// import Link from "next/link";
// import styles from "./comments.module.css";
// import Image from "next/image";
// import useSWR from "swr";
// import { useSession } from "next-auth/react";
// import { useState } from "react";

// const fetcher = async (url) => {
//   const res = await fetch(url);

//   const data = await res.json();

//   if (!res.ok) {
//     const error = new Error(data.message);
//     throw error;
//   }

//   return data;
// };

// const Comments = ({ postSlug }) => {
//   const { status } = useSession();

//   const { data, mutate, isLoading } = useSWR(
//     `${process.env.NEXTAUTH_URL}api/comments?postSlug=${postSlug}`,
//     fetcher
//   );

//   const [desc, setDesc] = useState("");

//   const handleSubmit = async () => {
//     await fetch("/api/comments", {
//       method: "POST",
//       body: JSON.stringify({ desc, postSlug }),
//     });
//     setDesc(""); // Reset the desc state
//     mutate(); // Refresh comments
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>Comments</h1>
//       {status === "authenticated" ? (
//         <div className={styles.write}>
//           <textarea
//             placeholder="write a comment..."
//             className={styles.input}
//             value={desc} // Ensure the textarea reflects the state
//             onChange={(e) => setDesc(e.target.value)}
//           />
//           <button className={styles.button} onClick={handleSubmit}>
//             Send
//           </button>
//         </div>
//       ) : (
//         <Link href="/login">Login to write a comment</Link>
//       )}
//       <div className={styles.comments}>
//         {isLoading
//           ? "loading"
//           : data?.map((item) => (
//               <div className={styles.comment} key={item._id}>
//                 <div className={styles.user}>
//                   {item?.user?.image && (
//                     <Image
//                       src={item.user.image}
//                       alt=""
//                       width={50}
//                       height={50}
//                       className={styles.image}
//                     />
//                   )}
//                   <div className={styles.userInfo}>
//                     <span className={styles.username}>{item.user.name}</span>
//                     <span className={styles.date}>{item.createdAt}</span>
//                   </div>
//                 </div>
//                 <p className={styles.desc}>{item.desc}</p>
//               </div>
//             ))}
//       </div>
//     </div>
//   );
// };

// export default Comments;
"use client";
import { useSession } from "next-auth/react";
import { useState } from "react";
import useSWR from "swr";
import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";

const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    const error = new Error("An error occurred while fetching data.");
    throw error;
  }
  const data = await res.json();
  console.log("Fetched data:", data); // Log fetched data
  return data;
};

const Comments = ({ postSlug }) => {
  const { status } = useSession();
  const { data, error, mutate, isLoading } = useSWR(
    `https://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );
  const [desc, setDesc] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ desc, postSlug }),
      });

      if (!response.ok) {
        throw new Error("Failed to post comment");
      }

      const data = await response.json();
      console.log("Comment posted:", data);
      setDesc(""); // Reset the desc state
      mutate(); // Refresh comments
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  if (error) return <div>Error loading comments</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="Write a comment..."
            className={styles.input}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button className={styles.button} onClick={handleSubmit}>
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        {data?.length > 0 ? (
          data.map((item) => (
            <div className={styles.comment} key={item._id}>
              <div className={styles.user}>
                {item?.user?.image && (
                  <Image
                    src={item.user.image}
                    alt=""
                    width={50}
                    height={50}
                    className={styles.image}
                  />
                )}
                <div className={styles.userInfo}>
                  <span className={styles.username}>{item.user.name}</span>
                  <span className={styles.date}>{item.createdAt}</span>
                </div>
              </div>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          ))
        ) : (
          <p>No comments yet.</p>
        )}
      </div>
    </div>
  );
};

export default Comments;

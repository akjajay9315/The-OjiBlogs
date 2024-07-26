// "use client";
// import Image from "next/image";
// import styles from "./writePage.module.css";
// import { useEffect, useState } from "react";
// import "react-quill/dist/quill.bubble.css";
// import { useRouter } from "next/navigation";
// import { useSession } from "next-auth/react";
// import {
//   getStorage,
//   ref,
//   uploadBytesResumable,
//   getDownloadURL,
// } from "firebase/storage";
// import { app } from "@/utils/firebase";
// import ReactQuill from "react-quill";

// const WritePage = () => {
//   const { status } = useSession();
//   const router = useRouter();

//   const [open, setOpen] = useState(false);
//   const [file, setFile] = useState(null);
//   const [media, setMedia] = useState("");
//   const [value, setValue] = useState("");
//   const [title, setTitle] = useState("");
//   const [catSlug, setCatSlug] = useState("");

//   useEffect(() => {
//     const storage = getStorage(app);
//     const upload = () => {
//       const name = new Date().getTime() + file.name;
//       const storageRef = ref(storage, name);

//       const uploadTask = uploadBytesResumable(storageRef, file);

//       uploadTask.on(
//         "state_changed",
//         (snapshot) => {
//           const progress =
//             (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//           console.log("Upload is " + progress + "% done");
//           switch (snapshot.state) {
//             case "paused":
//               console.log("Upload is paused");
//               break;
//             case "running":
//               console.log("Upload is running");
//               break;
//           }
//         },
//         (error) => {},
//         () => {
//           getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//             setMedia(downloadURL);
//           });
//         }
//       );
//     };

//     file && upload();
//   }, [file]);

//   if (status === "loading") {
//     return <div className={styles.loading}>Loading...</div>;
//   }

//   if (status === "unauthenticated") {
//     router.push("/");
//   }

//   const slugify = (str) =>
//     str
//       .toLowerCase()
//       .trim()
//       .replace(/[^\w\s-]/g, "")
//       .replace(/[\s_-]+/g, "-")
//       .replace(/^-+|-+$/g, "");

//   const handleSubmit = async () => {
//     const res = await fetch("/api/posts", {
//       method: "POST",
//       body: JSON.stringify({
//         title,
//         desc: value,
//         img: media,
//         slug: slugify(title),
//         catSlug: catSlug || "ideas", //If not selected, choose the general category
//       }),
//     });

//     if (res.status === 200) {
//       const data = await res.json();
//       router.push(`/posts/${data.slug}`);
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <input
//         type="text"
//         placeholder="Title"
//         className={styles.input}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <select className={styles.select} onChange={(e) => setCatSlug(e.target.value)}>
//         <option value="ideas">ideas</option>
//         <option value="style">style</option>
//         <option value="fashion">fashion</option>
//         <option value="food">food</option>
//         <option value="culture">culture</option>
//         <option value="travel">travel</option>
//         <option value="coding">coding</option>
//       </select>
//       <div className={styles.editor}>
//         <button className={styles.button} onClick={() => setOpen(!open)}>
//           <Image src="/plus.png" alt="" width={16} height={16} />
//         </button>
//         {open && (
//           <div className={styles.add}>
//             <input
//               type="file"
//               id="image"
//               onChange={(e) => setFile(e.target.files[0])}
//               style={{ display: "none" }}
//             />
//             <button className={styles.addButton}>
//               <label htmlFor="image">
//                 <Image src="/image.png" alt="" width={16} height={16} />
//               </label>
//             </button>
//             <button className={styles.addButton}>
//               <Image src="/external.png" alt="" width={16} height={16} />
//             </button>
//             <button className={styles.addButton}>
//               <Image src="/video.png" alt="" width={16} height={16} />
//             </button>
//           </div>
//         )}
//         <ReactQuill
//           className={styles.textArea}
//           theme="bubble"
//           value={value}
//           onChange={setValue}
//           placeholder="Tell your story..."
//         />
//       </div>
//       <button className={styles.publish} onClick={handleSubmit}>
//         Publish
//       </button>
//     </div>
//   );
// };

// export default WritePage;

// src/app/write/page.jsx

// "use client";
// import dynamic from "next/dynamic";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { useSession } from "next-auth/react";
// import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { app } from "@/utils/firebase";

// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

// const WritePage = () => {
//   const { status } = useSession();
//   const router = useRouter();

//   const [open, setOpen] = useState(false);
//   const [file, setFile] = useState(null);
//   const [media, setMedia] = useState("");
//   const [value, setValue] = useState("");
//   const [title, setTitle] = useState("");
//   const [catSlug, setCatSlug] = useState("");

//   useEffect(() => {
//     if (file) {
//       const storage = getStorage(app);
//       const name = new Date().getTime() + file.name;
//       const storageRef = ref(storage, name);
//       const uploadTask = uploadBytesResumable(storageRef, file);

//       uploadTask.on(
//         "state_changed",
//         (snapshot) => {
//           const progress =
//             (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//           console.log("Upload is " + progress + "% done");
//         },
//         (error) => {
//           console.error("Upload error:", error);
//         },
//         () => {
//           getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//             setMedia(downloadURL);
//           });
//         }
//       );
//     }
//   }, [file]);

//   useEffect(() => {
//     if (status === "unauthenticated") {
//       router.push("/");
//     }
//   }, [status, router]);

//   const handleSubmit = async () => {
//     const res = await fetch("/api/posts", {
//       method: "POST",
//       body: JSON.stringify({
//         title,
//         desc: value,
//         img: media,
//         slug: title.toLowerCase().replace(/ /g, "-"),
//         catSlug: catSlug || "ideas",
//       }),
//     });

//     if (res.status === 200) {
//       const data = await res.json();
//       router.push(`/posts/${data.slug}`);
//     }
//   };

//   if (status === "loading") {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Title"
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <select onChange={(e) => setCatSlug(e.target.value)}>
//         <option value="ideas">ideas</option>
//         <option value="style">style</option>
//         <option value="fashion">fashion</option>
//         <option value="food">food</option>
//         <option value="culture">culture</option>
//         <option value="travel">travel</option>
//         <option value="coding">coding</option>
//       </select>
//       <div>
//         <button onClick={() => setOpen(!open)}>Toggle Add Options</button>
//         {open && (
//           <div>
//             <input
//               type="file"
//               id="image"
//               onChange={(e) => setFile(e.target.files[0])}
//               style={{ display: "none" }}
//             />
//             <label htmlFor="image">Upload Image</label>
//           </div>
//         )}
//         <ReactQuill
//           theme="bubble"
//           value={value}
//           onChange={setValue}
//           placeholder="Tell your story..."
//         />
//       </div>
//       <button onClick={handleSubmit}>Publish</button>
//     </div>
//   );
// };

// export default WritePage;


// "use client";
// import Image from "next/image";
// import styles from "./writePage.module.css";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { useSession } from "next-auth/react";
// import {
//   getStorage,
//   ref,
//   uploadBytesResumable,
//   getDownloadURL,
// } from "firebase/storage";
// import { app } from "@/utils/firebase";
// import { Editor, EditorState, convertToRaw } from "draft-js";
// import "draft-js/dist/Draft.css";

// const WritePage = () => {
//   const { status } = useSession();
//   const router = useRouter();

//   const [open, setOpen] = useState(false);
//   const [file, setFile] = useState(null);
//   const [media, setMedia] = useState("");
//   const [editorState, setEditorState] = useState(EditorState.createEmpty());
//   const [title, setTitle] = useState("");
//   const [catSlug, setCatSlug] = useState("");

//   useEffect(() => {
//     if (file) {
//       const storage = getStorage(app);
//       const name = new Date().getTime() + file.name;
//       const storageRef = ref(storage, name);
//       const uploadTask = uploadBytesResumable(storageRef, file);

//       uploadTask.on(
//         "state_changed",
//         (snapshot) => {
//           const progress =
//             (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//           console.log("Upload is " + progress + "% done");
//           switch (snapshot.state) {
//             case "paused":
//               console.log("Upload is paused");
//               break;
//             case "running":
//               console.log("Upload is running");
//               break;
//           }
//         },
//         (error) => {
//           console.error("Upload error:", error);
//         },
//         () => {
//           getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//             setMedia(downloadURL);
//           });
//         }
//       );
//     }
//   }, [file]);

//   useEffect(() => {
//     if (status === "unauthenticated") {
//       router.push("/");
//     }
//   }, [status, router]);

//   const slugify = (str) =>
//     str
//       .toLowerCase()
//       .trim()
//       .replace(/[^\w\s-]/g, "")
//       .replace(/[\s_-]+/g, "-")
//       .replace(/^-+|-+$/g, "");

//   const handleSubmit = async () => {
//     const contentState = editorState.getCurrentContent();
//     const rawContent = JSON.stringify(convertToRaw(contentState));

//     const res = await fetch("/api/posts", {
//       method: "POST",
//       body: JSON.stringify({
//         title,
//         desc: rawContent, // Send raw Draft.js content
//         img: media,
//         slug: slugify(title),
//         catSlug: catSlug || "ideas", // If not selected, choose the general category
//       }),
//       headers: { "Content-Type": "application/json" }, // Set headers to ensure proper JSON handling
//     });

//     if (res.status === 200) {
//       const data = await res.json();
//       router.push(`/posts/${data.slug}`);
//     }
//   };

//   if (status === "loading") {
//     return <div className={styles.loading}>Loading...</div>;
//   }

//   return (
//     <div className={styles.container}>
//       <input
//         type="text"
//         placeholder="Title"
//         className={styles.input}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <select
//         className={styles.select}
//         onChange={(e) => setCatSlug(e.target.value)}
//       >
//         <option value="ideas">ideas</option>
//         <option value="style">style</option>
//         <option value="fashion">fashion</option>
//         <option value="food">food</option>
//         <option value="culture">culture</option>
//         <option value="travel">travel</option>
//         <option value="coding">coding</option>
//       </select>
//       <div className={styles.editor}>
//         <button className={styles.button} onClick={() => setOpen(!open)}>
//           <Image src="/plus.png" alt="" width={16} height={16} />
//         </button>
//         {open && (
//           <div className={styles.add}>
//             <input
//               type="file"
//               id="image"
//               onChange={(e) => setFile(e.target.files[0])}
//               style={{ display: "none" }}
//             />
//             <button className={styles.addButton}>
//               <label htmlFor="image">
//                 <Image src="/image.png" alt="" width={16} height={16} />
//               </label>
//             </button>
//             <button className={styles.addButton}>
//               <Image src="/external.png" alt="" width={16} height={16} />
//             </button>
//             <button className={styles.addButton}>
//               <Image src="/video.png" alt="" width={16} height={16} />
//             </button>
//           </div>
//         )}
//         <div className={styles.textArea}>
//           <Editor
//             editorState={editorState}
//             onChange={setEditorState}
//             placeholder="Tell your story..."
//           />
//         </div>
//       </div>
//       <button className={styles.publish} onClick={handleSubmit}>
//         Publish
//       </button>
//     </div>
//   );
// };

// export default WritePage;


"use client";
import Image from "next/image";
import styles from "./writePage.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";
import dynamic from "next/dynamic";

// Dynamically import Draft.js Editor component with SSR disabled
const Editor = dynamic(() => import("draft-js").then((mod) => mod.Editor), {
  ssr: false,
});
import "draft-js/dist/Draft.css";
import { EditorState, convertToRaw } from "draft-js";

const WritePage = () => {
  const { status } = useSession();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");

  useEffect(() => {
    if (file) {
      const storage = getStorage(app);
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.error("Upload error:", error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    }
  }, [file]);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const contentState = editorState.getCurrentContent();
    const rawContent = JSON.stringify(convertToRaw(contentState));

    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: rawContent, // Send raw Draft.js content
        img: media,
        slug: slugify(title),
        catSlug: catSlug || "ideas", // If not selected, choose the general category
      }),
      headers: { "Content-Type": "application/json" }, // Set headers to ensure proper JSON handling
    });

    if (res.status === 200) {
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
    }
  };

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Title"
        className={styles.input}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select
        className={styles.select}
        onChange={(e) => setCatSlug(e.target.value)}
      >
        <option value="ideas">ideas</option>
        <option value="art">art</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="culture">culture</option>
        <option value="travel">travel</option>
        <option value="coding">coding</option>
      </select>
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src="/plus.png" alt="" width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <input
              type="file"
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
            <button className={styles.addButton}>
              <label htmlFor="image">
                <Image src="/image.png" alt="" width={16} height={16} />
              </label>
            </button>
            <button className={styles.addButton}>
              <Image src="/external.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/video.png" alt="" width={16} height={16} />
            </button>
          </div>
        )}
        <div className={styles.textArea}>
          <Editor
            editorState={editorState}
            onChange={setEditorState}
            placeholder="Tell your story..."
          />
        </div>
      </div>
      <button className={styles.publish} onClick={handleSubmit}>
        Publish
      </button>
    </div>
  );
};

export default WritePage;

// "use client";
// import Link from "next/link";
// import styles from "./authLinks.module.css";
// import { useState } from "react";
// import { signOut, useSession } from "next-auth/react";

// const AuthLinks = () => {
//   const [open, setOpen] = useState(false);

//   const { status } = useSession();

//   return (
//     <>
//       {status === "unauthenticated" ? (
//         <Link href="/login" className={styles.link}>
//           Login
//         </Link>
//       ) : (
//         <>
//           <Link href="/write" className={styles.link}>
//             Write
//           </Link>
//           <span className={styles.link} onClick={signOut}>
//             Logout
//           </span>
//         </>
//       )}
//       <div className={styles.burger} onClick={() => setOpen(!open)}>
//         <div className={styles.line}></div>
//         <div className={styles.line}></div>
//         <div className={styles.line}></div>
//       </div>
//       {open && (
//         <div className={styles.responsiveMenu}>
//           <Link href="/">Homepage</Link>
//           <Link href="/">About</Link>
//           <Link href="/">Contact</Link>
//           {status === "notauthenticated" ? (
//             <Link href="/login">Login</Link>
//           ) : (
//             <>
//               <Link href="/write">Write</Link>
//               <span className={styles.link}>Logout</span>
//             </>
//           )}
//         </div>
//       )}
//     </>
//   );
// };

// export default AuthLinks;

"use client";
import Link from "next/link";
import styles from "./authLinks.module.css";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);

  const { status } = useSession();

  const handleSignOut = () => {
    signOut();
    setOpen(false); // Close the menu when signing out
  };

  const handleMenuClick = () => {
    setOpen(!open);
  };

  const handleLinkClick = () => {
    setOpen(false); // Close the menu when a link is clicked
  };

  return (
    <>
      {/* Debugging status */}
      <div style={{ display: "none" }}>Session status: {status}</div>

      {status === "unauthenticated" ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            Write
          </Link>
          <span className={styles.link} onClick={handleSignOut}>
            Logout
          </span>
        </>
      )}
      <div className={styles.burger} onClick={handleMenuClick}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/" onClick={handleLinkClick}>
            Homepage
          </Link>
          {/* <Link href="">About</Link> */}
          {/* <Link href="">Contact</Link> */}
          {status === "unauthenticated" ? (
            <Link href="/login" onClick={handleLinkClick}>
              Login
            </Link>
          ) : (
            <>
              <Link href="/write" onClick={handleLinkClick}>
                Write
              </Link>
              <Link href="/" onClick={handleSignOut}>
                Logout
              </Link>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;

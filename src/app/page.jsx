// import Link from "next/link";
// import styles from "./homepage.module.css";
// import Featured from "@/components/featured/Featured";
// import CategoryList from "@/components/categoryList/CategoryList";
// import CardList from "@/components/cardList/CardList";
// import Menu from "@/components/Menu/Menu";

// export default function Home({ searchParams }) {
//   const page = parseInt(searchParams.page) || 1;

//   return (
//     <div className={styles.container}>
//       <Featured />
//       <CategoryList />
//       <div className={styles.content}>
//         <CardList page={page}/>
//         <Menu />
//       </div>
//     </div>
//   );
// }

import dynamic from "next/dynamic";
import styles from "./homepage.module.css";

// Dynamically import components to handle SSR issues
const Featured = dynamic(() => import("@/components/featured/Featured"), {
  ssr: false,
});
const CategoryList = dynamic(
  () => import(`@/components/categoryList/CategoryList`),
  {
    ssr: false,
  }
);
const CardList = dynamic(() => import("@/components/cardList/CardList"), {
  ssr: false,
});
const Menu = dynamic(() => import("@/components/Menu/Menu"), {
  ssr: false,
});

export default function Home({ searchParams }) {
  // Handle potential issues with searchParams
  const page = isNaN(parseInt(searchParams.page))
    ? 1
    : parseInt(searchParams.page);

  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList page={page} />
        <Menu />
      </div>
    </div>
  );
}

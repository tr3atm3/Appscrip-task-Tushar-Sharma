"use client";

import { useState } from "react";
import Discover from "../mainComponents/Discover";
import FilterOptionPanel from "../mainComponents/FilterOptionPanel";
import FiltersSidebar from "../mainComponents/FiltersSidebar";
import ItemsContainer from "../mainComponents/ItemsContainer";
import styles from "./Main.module.css";

export default function Main({ data }) {
  const [showCategory, setShowCategory] = useState(false);

  function toggleCategory() {
    setShowCategory((pre) => !pre);
  }
  return (
    <main className={styles.mainContainer}>
      <Discover />
      <FilterOptionPanel
        data={data}
        showCategory={showCategory}
        toggleCategory={toggleCategory}
      />
      <section className={styles.mainContent}>
        {showCategory && <FiltersSidebar />}
        <ItemsContainer data={data} />
      </section>
    </main>
  );
}

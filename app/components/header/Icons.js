import Image from "next/image";
import styles from "./Icons.module.css";
export default function Icons() {
  return (
    <div className={styles.iconsContainer}>
      <Image
        src="/VectorassignmentLogo.png"
        alt="Image of logo"
        width={36}
        height={36}
        className={styles.logo}
      />
      <h1 className={styles.logoName}>CHARMNEST</h1>
      <div className={styles.icons}>
        <Image
          src="/search-normal.png"
          alt="Image of search icon"
          width={24}
          height={24}
          className={styles.search}
        />
        <Image
          src="/heart.png"
          alt="Image of heart icon"
          width={24}
          height={24}
          className={styles.search}
        />
        <Image
          src="/shopping-bag.png"
          alt="Image of shopping bag icon"
          width={24}
          height={24}
          className={styles.search}
        />
        <Image
          src="/profile.png"
          alt="Image of profile icon"
          width={24}
          height={24}
          className={styles.hidden}
        />
        <div className={styles.lang}>
          <p className={styles.langText}>ENG</p>
          <Image
            src="/arrow-left.png"
            alt="Image of left arrow icon"
            width={16}
            height={16}
          />
        </div>
      </div>
    </div>
  );
}

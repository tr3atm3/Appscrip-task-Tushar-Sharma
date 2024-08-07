import Link from "next/link";
import styles from "./NavigationBar.module.css";
export default function NavigationBar() {
  return (
    <ul className={styles.navigationList}>
      <li>
        <Link className={styles.link} href="/">
          SHOP
        </Link>
      </li>
      <li>
        <Link className={styles.link} href="/">
          SKILLS
        </Link>
      </li>
      <li>
        <Link className={styles.link} href="/">
          STORIES
        </Link>
      </li>
      <li>
        <Link className={styles.link} href="/">
          ABOUT
        </Link>
      </li>
      <li>
        <Link className={styles.link} href="/">
          CONTACT US
        </Link>
      </li>
    </ul>
  );
}

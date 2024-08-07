import Icons from "./Icons";
import styles from "./Header.module.css";
import NavigationBar from "./NavigationBar";
export default function Header() {
  return (
    <div className={styles.header}>
      <Icons />
      <NavigationBar />
    </div>
  );
}

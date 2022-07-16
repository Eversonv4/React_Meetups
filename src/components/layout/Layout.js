import styles from "./Layout.module.css";
import { MainNavigation } from "../index";

export default function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className={styles.main}>{props.children}</main>
    </div>
  );
}

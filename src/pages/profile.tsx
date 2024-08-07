import Header from "./component/Header";
import styles from "../styles/index.module.css";
import { useTheme } from "../contexts/ThemeContext";
import Footer from "./component/Footer";
export default function Home({}) {
  const { getColor } = useTheme();
  return (
    <>
      <Header />
      <strong
        style={{
          backgroundColor: getColor("secondary"),
          color: getColor("primary"),
        }}
        className={styles.groupName}
      >
        profile!!
      </strong>
      <div
        style={{
          backgroundColor: getColor("secondary"),
          color: getColor("primary"),
        }}
        className={styles.container}
      >
      </div>
      <Footer />
    </>
  );
}

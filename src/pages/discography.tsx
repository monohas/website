import Header from "./component/Header";
import styles from "../styles/discography.module.css";
import { useTheme } from "../contexts/ThemeContext";
import Footer from "./component/Footer";

import Image from "next/image";
import disc1 from "../assets/1st.png";
import disc2 from "../assets/2nd.jpg";
import disc3 from "../assets/3rd.png";
import Link from "next/link";

export default function Home({}) {
  const { getColor } = useTheme();
  return (
    <body className={styles.body}
    style={
      { color: getColor("primary"),
      backgroundColor: getColor("secondary"),
    }
  }
    >
      <Header />
      <div className={styles.title}>discography</div>
      <div className={styles.title}>discography</div>
      <Link  href={"/"}  style={{    color: getColor("secondary"),    textDecoration: "none",  }}>←</Link>
      <div className={styles.title}>discography</div>
      <Image src={disc1} className={styles.navitem} alt="1st" />

      <div>オーガニックとジャンクフード</div>
      <div> &ensp;M1.ボーイ</div>
      <div> &ensp;M2.あああ</div>
      <div> &ensp;M3.あああ</div>
      <div> &ensp;M4.あああ</div>
      <div> &ensp;M5.あああ</div>
      <Image src={disc2} className={styles.navitem} alt="1st" />
      <div>明け方</div>
      <Image src={disc3} className={styles.navitem} alt="1st" />
      <div>チェイス！！！</div>
      <div>アルバム説明</div>
      <div>アルバム説明</div>

      <Footer />
    </body>
  );
}

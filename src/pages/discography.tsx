import Header from "./component/Header";
import styles from "../styles/discography.module.css";
import { useTheme } from "../contexts/ThemeContext";
import Footer from "./component/Footer";
import Image from "next/image";
import Link from "next/link";
import disc1 from "../assets/1st.png";
import disc2 from "../assets/2nd.png";
import disc3 from "../assets/3rd.png";

export default function Home({}) {
  const { getColor } = useTheme();
  return (
    <>
      <Header />

      <div className={styles.parent}
      // style={{backgroundColor: getColor("secondary")}}
      >
        <div className={styles.pageTitle}>
          <span className={styles.highlight}>discography</span>
        </div>

        <Image src={disc3} className={styles.artwork} alt="3rd" />
        <div className={styles.discTitle}> 
          <span className={styles.highlight}>チェイス!!!</span>
        </div>
        <ol className={styles.tuneList}>
          <li className={styles.tuneName}> <span className={styles.highlight}>m1.&nbsp;休日</span></li>
          <li className={styles.tuneName}> <span className={styles.highlight}>m2.&nbsp;明け方 -feat CO2-</span></li>
          <li className={styles.tuneName}> <span className={styles.highlight}>m3.&nbsp;ボーイ</span></li>
          <li className={styles.tuneName}> <span className={styles.highlight}>m4.&nbsp;ベイビー</span></li>
          <li className={styles.tuneName}> <span className={styles.highlight}>m5.&nbsp;トレジャー </span></li>
          <li className={styles.tuneName}> <span className={styles.highlight}>m6.&nbsp;コンティニュー</span></li>
          <li className={styles.tuneName}> <span className={styles.highlight}>m7.&nbsp;リンボーダンス</span></li>
          <li className={styles.tuneName}> <span className={styles.highlight}>m8.&nbsp;ハンサム</span></li>
          <li className={styles.tuneName}> <span className={styles.highlight}>m9.&nbsp;ワンダー</span></li>
          <li className={styles.tuneName}> <span className={styles.highlight}>m10.&nbsp;幽玄</span></li>
          <li className={styles.tuneName}> <span className={styles.highlight}>m11.&nbsp;ホーム</span></li>
        </ol>

        <Image src={disc2} className={styles.artwork} alt="2st" />
        <div className={styles.discTitle}> 
          <span className={styles.highlight}>明け方</span>
        </div>
        <ol className={styles.tuneList}>
          <li className={styles.tuneName}> <span className={styles.highlight}>m1.&nbsp;明け方 -feat CO2-</span></li>
        </ol>

        <Image src={disc1} className={styles.artwork} alt="1rd" />
        <div className={styles.discTitle}> 
          <span className={styles.highlight}>オーガニックとジャンクフード</span>
        </div>
        <ol className={styles.tuneList}>
          <li className={styles.tuneName}> <span className={styles.highlight}>m1.&nbsp;BOY</span></li>
          <li className={styles.tuneName}> <span className={styles.highlight}>m2.&nbsp;RED</span></li>
          <li className={styles.tuneName}> <span className={styles.highlight}>m3.&nbsp;ハンサム</span></li>
          <li className={styles.tuneName}> <span className={styles.highlight}>m4.&nbsp;continue</span></li>
          <li className={styles.tuneName}> <span className={styles.highlight}>m5.&nbsp;ワンダー </span></li>
          <li className={styles.tuneName}> <span className={styles.highlight}>m6.&nbsp;Home</span></li>
        </ol>

        <div className={styles.backTop}>
          <Link href="." > 
            <span className={styles.highlight}>◀︎&thinsp;top&thinsp;</span>
          </Link>
        </div>
      </div>

    </>
  );
}

import Header from "./component/Header";
import Footer from "./component/Footer";
import Image from "next/image";
import TT from "../assets/af_tt_color.png";
import MUTA from "../assets/af_muta_color.png";
import S2 from "../assets/af_2s_color.png";
import styles from "../styles/index.module.css";
import { useTheme } from "../contexts/ThemeContext";

export default function Home({}) {
  const { getColor } = useTheme();
  return (
    <>
      <Header />

      <strong
        style={{ color: getColor("primary"), fontWeight: "bold" }}
        className={styles.groupName}
      >
        monohas!!
      </strong>
      <Image className={styles.TT} src={TT} alt="TT" priority={true}/>
      <Image className={styles.MUTA} src={MUTA} alt="MUTA" priority={true}/>

      <Footer />
    </>
  );
}

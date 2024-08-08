import Header from "./component/Header";
import Footer from "./component/Footer";
import Image from "next/image";
import TT from "../assets/af_tt_mono.png";
import MUTA from "../assets/af_muta_mono.png";
import S2 from "../assets/af_2s_color.png";
import styles from "../styles/index.module.css";
import { useTheme } from "../contexts/ThemeContext";

export default function Home({}) {
  const { getColor } = useTheme();
  return (
    <>
      <Header />
      <strong
        style={{ color: getColor("primary"),fontWeight: "bold"} }
        className={styles.groupName}
      >
        monohas!!
      </strong>

      <div
        style={{
          backgroundColor: getColor("secondary"),
          color: getColor("primary"),
        }}
        className={styles.container}
      ></div>

      {/* <Image
          className={styles.TT}
          src={TT}
          alt="アー写"
        /> 

      <Image
          className={styles.groupImage}
          src={MUTA}
          alt="アー写"
        /> 
         */}

      <Image className={styles.groupImage} src={S2} alt="アー写" />
      <Footer />
    </>
  );
}

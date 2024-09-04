import Header from "./component/Header";
import styles from "../styles/index.module.css";
import { useTheme } from "../contexts/ThemeContext";
import Footer from "./component/Footer";
export default function Home({}) {
  const { getColor } = useTheme();
  return (
    <>
      <Header />
      <div style={{backgroundColor: getColor("secondary"),
        fontSize: 12
      }}>
      <br /><br /><br /><br /><br />
      プロフィール<br />
      <br />
      2021年結成。ボーカル・TTとトラックメイカー・mumumutaの2人組テクノポップバンド。
      「テクノやジャズ、ロックを中心とした音楽的背景から生まれたダンサブルなサウンド」と
      「唯一無二のファニーな言葉づかいで構築された歌詞」の組み合わせで”陽気に踊れるダンサブル・ファニー・J-POP”を実現する。<br />
      作詞作曲をはじめ、ミックス・マスタリング・アートワークなどすべての工程を自分たちで行う"完全インディペンデントアーティスト"である。<br />
      2022年にリリースした『明け方 (feat. CO2)』は、Spotify公式プレイリスト『キラキラポップ：ジャパン』にも選出された。<br />
      最新リリースは2ndアルバム『チェイス！！！』で、1曲目の『休日』はmumumutaの音楽的個性がパーカッション部分に発揮された、<br />
      テクニカルな1曲になっている。<br />
      </div>
      <Footer />
    </>
  );
}

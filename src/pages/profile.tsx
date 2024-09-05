import Header from "./component/Header";
import { useTheme } from "../contexts/ThemeContext";
import Footer from "./component/Footer";
import Link from "next/link";
import { CiTextAlignRight } from "react-icons/ci";
export default function Home({}) {
  const { getColor } = useTheme();
  return (
    <>
      <Header />
      <div style={{ backgroundColor: getColor("secondary"), fontSize: 20 }}>
        <br />
        <br />
        <br />
        <span>プロフィール</span>
      </div>
      <div style={{ backgroundColor: getColor("secondary"), fontSize: 13 }}>
        <br />
        2021年結成。ボーカル・TTとトラックメイカー・mumumutaの2人組テクノポップバンド。
        <br />
        <br />
        「テクノやジャズ、ロックを中心とした音楽的背景から生まれたダンサブルなサウンド」と
        「唯一無二のファニーな言葉づかいで構築された歌詞」の組み合わせで&ldquo;陽気に踊れるダンサブル・ファニー・J-POP&ldquo;を実現する。
        <br />
        <br />
        作詞作曲をはじめ、ミックス・マスタリング・アートワークなどすべての工程を自分たちで行う&ldquo;完全インディペンデントアーティスト&ldquo;である。
        <br />
        <br />
        2022年にリリースした『明け方 (feat.CO2)』は、Spotify公式プレイリスト『キラキラポップ：ジャパン』にも選出された。
        <br />
        <br />
        最新リリース2ndアルバム『チェイス！！！』、1曲目の『休日』はmumumutaの音楽的個性がパーカッション部分に発揮された、
        テクニカルな1曲になっている。
        <br />
        <br />
          <Link href=".">top</Link>
      </div>
      <Footer />
    </>
  );
}

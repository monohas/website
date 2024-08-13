import React, { useState } from "react";
import {
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaSpotify,
  FaBandcamp,
} from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiAlignRight } from "react-icons/tfi";
import { SiApplemusic } from "react-icons/si";
import { ImSoundcloud } from "react-icons/im";
import styles from "./Header.module.css";
import { useTheme } from "../../contexts/ThemeContext";
import MenuModal from "./MenuModal";

interface SocialLink {
  href: string;
  ariaLabel: string;
  icon: React.ElementType;
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const iconSize: number = 37;
  const { getColor } = useTheme();

  const socialLinks: SocialLink[] = [
    { href: "https://x.com/monohasu", ariaLabel: "Twitter", icon: FaTwitter },
    {
      href: "https://www.instagram.com/monohasu83/",
      ariaLabel: "Instagram",
      icon: FaInstagram,
    },
    {
      href: "https://www.youtube.com/@user-wu8qv7oj4f",
      ariaLabel: "YouTube",
      icon: FaYoutube,
    },
    // {
    //   href: "https://open.spotify.com/intl-ja/artist/2TFixHo19Etq8pB3CdqJof?si=cCdyOaF2TkKfAz1ydN6uJw",
    //   ariaLabel: "Spotify",
    //   icon: FaSpotify,
    // },
    // {
    //   href: "https://music.apple.com/jp/artist/%E3%83%A2%E3%83%8E%E3%83%8F%E3%82%B9/1580673917",
    //   ariaLabel: "Apple Music",
    //   icon: SiApplemusic,
    // },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={styles.header}
      style={{ backgroundColor: getColor("primary") }}
    >
      <nav
        className={styles.nav}
        style={{ backgroundColor: getColor("primary") }}
      >
        <div className={styles.socialLinks}>
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
              style={{
                backgroundColor: getColor("primary"),
                color: getColor("secondary"),
              }}
              className={styles.navLink}
            >
              <link.icon size={iconSize} />
            </a>
          ))}
        </div>

        <button
          className={styles.menuButton}
          style={{
            backgroundColor: getColor("primary"),
            color: getColor("secondary"),
          }}
          onClick={toggleMenu}
        >
          <RxHamburgerMenu size={iconSize} />
        </button>
      </nav>
      <MenuModal isOpen={isMenuOpen} onClose={toggleMenu} />
    </header>
  );
};

export default Header;

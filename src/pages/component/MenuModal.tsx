import React from "react";
import Link from "next/link";
import styles from "./MenuModal.module.css";
import { IoCloseOutline } from "react-icons/io5";
import { useTheme } from "../../contexts/ThemeContext";

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface MenuItem {
  name: string;
  path: string;
}

const MenuModal: React.FC<MenuModalProps> = ({ isOpen, onClose }) => {
  const { getColor } = useTheme();

  if (!isOpen) return null;

  const menuItems: MenuItem[] = [
    { name: "discography", path: "/discography" },
    { name: "profile", path: "/profile" },
    { name: "contact", path: "/contact" },
  ];

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
        style={{ backgroundColor: getColor("primary") }}
      >
        <ul className={styles.menuList}>
          {menuItems.map((item, index) => (
            <li key={index} className={styles.menuItem}>
              <Link
                href={item.path}
                onClick={onClose}
                style={{
                  color: getColor("secondary"),
                  textDecoration: "none",
                }}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <button
          className={styles.closeButton}
          onClick={onClose}
          style={{ color: getColor("secondary") }}
        >
          <IoCloseOutline size={29}/>
        </button>
      </div>
    </div>
  );
};

export default MenuModal;

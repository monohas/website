import React from 'react';
import styles from './Footer.module.css';
import { useTheme } from '../../contexts/ThemeContext';

const Footer: React.FC = () => {
  const { getColor } = useTheme();

  return (
    <footer 
      className={styles.footer}
      style={{ 
        backgroundColor: getColor("primary"),
        color: getColor("secondary")
      }}
    >
      <p>&copy; 2024 モノハス. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
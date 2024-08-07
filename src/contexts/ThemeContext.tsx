// src/contexts/ThemeContext.tsx

import React, { createContext, useContext, ReactNode } from "react";
import { colors, ColorName } from "../styles/colors";

type ThemeContextType = {
  colors: typeof colors;
  getColor: (colorName: ColorName) => string;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const getColor = (colorName: ColorName) => colors[colorName];

  return (
    <ThemeContext.Provider value={{ colors, getColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

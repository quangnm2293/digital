// components/client/theme-swither.tsx
"use client";

import { useState } from "react";

export const ThemeSwitcher = ({ theme }) => {
  const [_theme, setTheme] = useState(theme);

  const toggleTheme = () => {
    const root = document.getElementsByTagName("html")[0];
    root.classList.toggle("dark");
    if (root.classList.contains("dark")) {
      setTheme("dark");
      document.cookie = `theme=${"dark"}`;
    } else {
      setTheme("light");
      document.cookie = `theme=${"light"}`;
    }
  };

  return (
    <button onClick={toggleTheme}>
      {_theme == "dark" ? <h1>Light</h1> : <h1>Dark</h1>}
    </button>
  );
};

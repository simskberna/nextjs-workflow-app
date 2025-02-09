"use client";
import { useEffect, useState } from "react";
type Theme = "light" | "dark";

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const currentTheme: Theme =
      (localStorage.getItem("theme") as Theme) || "light";
    setTheme(currentTheme);
    document.body.setAttribute("data-theme", currentTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme: Theme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };
  return { theme, toggleTheme };
};

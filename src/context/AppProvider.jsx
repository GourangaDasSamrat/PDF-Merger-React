import { useEffect, useState } from "react";
import { AppContext } from "./AppContext";

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );
  const [mergeCount, setMergeCount] = useState(() =>
    parseInt(localStorage.getItem("mergeCount") || "0")
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-bs-theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("mergeCount", mergeCount.toString());
  }, [mergeCount]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const incrementMergeCount = () => {
    setMergeCount((prev) => prev + 1);
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        mergeCount,
        incrementMergeCount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

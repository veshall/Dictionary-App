import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function ThemeMenu() {
  const [darkMode, setDarkMode] = useState(undefined);

  const switchMode = () => {
    console.log("darkMode");
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      localStorage.setItem("darkMode", "true");
      window.document.documentElement.classList.add("dark");
    } else if (darkMode === false) {
      localStorage.setItem("darkMode", "false");
      window.document.documentElement.classList.remove("dark");
    } else {
      setDarkMode(localStorage.getItem("darkMode") === "true");
    }
  }, [darkMode]);

  return (
    <button onClick={switchMode} className=" ">
      {darkMode ? (
        <MoonIcon className=" h-7 w-7 text-gray-600 stroke-violet-700 stroke-1" />
      ) : (
        <SunIcon className=" h-7 w-7 text-gray-600 stroke-violet-700 stroke-1" />
      )}
    </button>
  );
}

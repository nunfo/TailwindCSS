import React from "react";
import { useState, useEffect } from "react";

export const Header = () => {
  
  const [ darkMode, setDarkMode ] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  useEffect(() => {
    console.log(darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="bg-white dark:bg-very-dark-blue pt-8 px-6 md:flex md:justify-between">
      <div>
      <h1 className="text-very-dark-blue dark:text-white text-2xl font-bold mb-1">Social Media Dashboard</h1>
      <p className="text-dark-grayish-blue dark:text-desaturated-blue font-bold mb-6">Total Followers: 23,004</p>
      </div>
      <hr className="bg-black dark:bg-desaturated-blue h-[2px] mb-[1.5rem]" />

      <div className="flex justify-between md:gap-4">
        <p className="text-dark-grayish-blue dark:text-desaturated-blue font-bold">Dark Mode</p>
        <label htmlFor="dark-mode" className="relative bg-toggle p-[3px] w-12 h-6 rounded-full overflow-hidden cursor-pointer">
          <input onClick={handleDarkMode} id="dark-mode" type="checkbox" className="peer sr-only" />
          <div className="w-full h-full absolute top-0 left-0 peer-checked:bg-toggle-gradient"></div>
          <div className="w-[1.125rem] h-[1.125rem] bg-light-grayish-blue dark:bg-very-dark-blue rounded-full peer-checked:translate-x-[24px] transition-all"></div>
        </label>
      </div>
    </header>
  );
}
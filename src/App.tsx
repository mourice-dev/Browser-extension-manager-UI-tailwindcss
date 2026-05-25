/** @format */

import Header from "./components/Header";
import List from "./components/List";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { createContext } from "react";
import type { RootState } from "./main";

export const ThemeContext = createContext(false);

function App() {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={isDarkMode}>
      <div className=' min-h-screen bg-gray-200 dark:bg-gradient-to-b from-dark-blue to-Neutral-900'>
        <div className='px-5 md:px-70 pt-8'>
          <Header />
          <List />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

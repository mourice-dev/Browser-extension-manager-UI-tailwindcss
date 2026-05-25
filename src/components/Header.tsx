import sun from "../assets/images/icon-sun.svg";
import moon from "../assets/images/icon-moon.svg";
import logo from "../assets/images/logo.svg";
import logo2 from "../assets/images/logo-light.svg";
import { toggleTheme } from "../themeSlice";
import { useDispatch } from "react-redux";
import { useContext } from "react";
import { ThemeContext } from "../App";



export default function Header() {
  const dispatch = useDispatch();
  const isDarkMode = useContext(ThemeContext);

  return (
    <div
      className={`flex justify-between items-center p-3 bg-white dark:bg-Neutral-800 shadow-md border-1 border-gray-300 dark:border-0 dark:shadow-0 rounded-xl `}>
      <div>
        <img src={isDarkMode ? logo : logo2} alt='' className='h-7' />
      </div>

      <div
        className='bg-gray-200 border-Neutral-100 dark:border-Neutral-700 dark:bg-Neutral-700 p-1 rounded-md cursor-pointer border-2 hover:border-Red'
        onClick={() => dispatch(toggleTheme())}>
        <img src={isDarkMode ? sun : moon} alt='' />
      </div>
    </div>
  );
}

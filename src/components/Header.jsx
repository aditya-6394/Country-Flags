import { BsMoon } from "react-icons/bs";
import { ThemeContext } from "../App";
import { useContext } from "react";

export default function Header({ toggleTheme }) {
  let theme = useContext(ThemeContext);
  console.log(theme);
  return (
    <header
      className={`row px-5 py-2 align-items-center g-0 mb-2 shadow-sm p-3 rounded ${theme}`}
    >
      <div className={`${theme}  col-6`}>
        <h3>Where in the world?</h3>
      </div>
      <div className={`${theme}  col-6 text-end`}>
        <p>
          <BsMoon className={` icon-moon p-0 me-1`} onClick={toggleTheme} />
          <span>Dark Mode</span>
        </p>
      </div>
    </header>
  );
}

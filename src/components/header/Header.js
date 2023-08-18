import React from "react";
import AppContext from "../../store/appContext";
import { useContext, useState } from "react";
import darkIcon from "../../assets/icons/darkicon.svg";
import lightIcon from "../../assets/icons/lighticon.svg";
import { Menu, X } from "lucide-react";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";
function Header() {
  const appCtx = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode } = appCtx;
  const navigate =useNavigate();

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  const redirectHome =()=>{
    navigate("/");
  }
  return (
    <header className="py-10  mx-auto  flex w-full max-w-7xl flex-wrap items-center justify-between   dark:text-white border-b-2 border-gray-100 dark:border-gray-800 md:border-none">
      <h1 className="text-2xl font-burtons lowercase cursor-pointer" onClick={redirectHome}>Hemant</h1>
      <nav className="flex  items-center justify-end overflow-hidden gap-2">
        <div className="hidden justify-end md:flex ">
          <NavBar  direction="row" />
        </div>

        <button
          className="dark:text-light rounded-lg p-3 ml-2 bg-slate-100 dark:bg-gray-800"
          onClick={() => {
            appCtx.toggleDarkMode();
          }}
        >
          {!isDarkMode && <img src={darkIcon} alt="dark mode icon" />}
          {isDarkMode && <img src={lightIcon} alt="light mode icon" />}
        </button>

        <div className="flex w-10  justify-end md:hidden">
          <button onClick={toggleNavBar}>{!isOpen ? <Menu /> : <X />}</button>
        </div>
      </nav>
      {isOpen && (
        <div className="mt-4 flex basis-full md:hidden flex-col justify-center text-center">
          <ul>
            <NavBar  direction="col" />
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;

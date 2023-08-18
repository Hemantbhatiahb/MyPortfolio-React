import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(props) {
  return (
    <ul className={`flex gap-4 md:gap-6 flex-${props.direction}`}>
      <li className="hover:translate-y-1 hover:bg-gradient-to-r text-lg font-medium hover:from-cyan-500 hover:to-teal-500 bg-clip-text hover:text-transparent">
        <NavLink to="/" className={({isActive})=> isActive ? 'bg-gradient-to-r from-cyan-500 to-teal-500 underline text-transparent bg-clip-text' : ''}>
          About
        </NavLink>
      </li>
      <li className="hover:translate-y-1 hover:bg-gradient-to-r text-lg font-medium hover:from-cyan-500 hover:to-teal-500 bg-clip-text hover:text-transparent active:underline">
        <NavLink to="/projects" className={({isActive})=> isActive ? 'bg-gradient-to-r from-cyan-500 to-teal-500 underline text-transparent bg-clip-text' : ''}>
          Projects
        </NavLink>
      </li>
      <li className="hover:translate-y-1 hover:bg-gradient-to-r text-lg font-medium hover:from-cyan-500 hover:to-teal-500 bg-clip-text hover:text-transparent active:underline">
        <NavLink to="/experience" className={({isActive})=> isActive ? 'bg-gradient-to-r from-cyan-500 to-teal-500 underline text-transparent bg-clip-text' : ''}>
          Experience
        </NavLink>
      </li>
      <li className="hover:translate-y-1 hover:bg-gradient-to-r text-lg font-medium hover:from-cyan-500 hover:to-teal-500 bg-clip-text hover:text-transparent">
        <NavLink to="/skills" className={({isActive})=> isActive ? 'bg-gradient-to-r from-cyan-500 to-teal-500 underline text-transparent bg-clip-text' : ''}>
          Skills
        </NavLink>
      </li>
      <li className="hover:translate-y-1 hover:bg-gradient-to-r text-lg font-medium hover:from-cyan-500 hover:to-teal-500 bg-clip-text hover:text-transparent">
        <NavLink to="/contact" className={({isActive})=> isActive ? 'bg-gradient-to-r from-cyan-500 to-teal-500 underline text-transparent bg-clip-text' : ''}>
          Contact
        </NavLink>
      </li>
    </ul>
  );
}

export default NavBar;

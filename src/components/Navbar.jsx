import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navItemClass = ({ isActive }) =>
    `block py-2 transition duration-300
     ${isActive
       ? "text-red-400 underline decoration-2 underline-offset-3"
       : "text-gray-300 hover:text-red-400"}`;

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-300">RizorsWeb</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li><NavLink to="/" className={navItemClass}>Home</NavLink></li>
          <li><NavLink to="/about" className={navItemClass}>About</NavLink></li>
          <li><NavLink to="/projects" className={navItemClass}>Projects</NavLink></li>
          <li><NavLink to="/fanarts" className={navItemClass}>Fanarts</NavLink></li>
          <li><NavLink to="/contact" className={navItemClass}>Contact</NavLink></li>
        </ul>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-gray-300 text-xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300
        ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
      >
        <ul className="flex flex-col px-6 pb-4 font-medium">
          <li onClick={() => setOpen(false)}>
            <NavLink to="/" className={navItemClass}>Home</NavLink>
          </li>
          <li onClick={() => setOpen(false)}>
            <NavLink to="/about" className={navItemClass}>About</NavLink>
          </li>
          <li onClick={() => setOpen(false)}>
            <NavLink to="/projects" className={navItemClass}>Projects</NavLink>
          </li>
          <li onClick={() => setOpen(false)}>
            <NavLink to="/fanarts" className={navItemClass}>Fanarts</NavLink>
          </li>
          <li onClick={() => setOpen(false)}>
            <NavLink to="/contact" className={navItemClass}>Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

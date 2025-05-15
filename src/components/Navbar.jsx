import { NavLink } from "react-router-dom";
import { navItems } from "../constants/navItems";
import logo from "../images/logo.png";
import { FaBars, FaFacebookF, FaTimes } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { TbBrandFiverr } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";
import { useState } from "react";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="relative bg-[rgb(1,53,1)]  flex  justify-between items-center px-5 py-2.5">
      <div className=" flex mx-2 p-2 justify-center items-center gap-4">
        <img src={logo} alt="logo" className="h-16 w-16" />
        <h2 className="text-red-300 text-2xl font-bold">ACS</h2>
      </div>
      {/* mobile toggle icon */}
      <div
        className="md:hidden text-white text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      {/* navigation links created by iteration using map() in an array */}
      <div className="hidden md:flex space-x-10 font-poppins text-[18px]">
        {navItems.map(({ id, name, path }) => (
          <NavLink
            key={id}
            to={path}
            className={({ isActive }) =>
              isActive
                ? "text-red-300 font-bold "
                : "text-white/70 hover:text-red-300"
            }
          >
            {name}
          </NavLink>
        ))}
      </div>
      {/* social links-desktop mode*/}
      <div className="hidden md:flex text-xl text-white gap-4 p-[10px] justify-center items-center ">
        <div>
          <FaFacebookF className=" hover:text-red-300" />
        </div>
        <div>
          <FaXTwitter className=" hover:text-red-300" />
        </div>
        <div>
          <FiInstagram className=" hover:text-red-300" />
        </div>
        <div>
          <TbBrandFiverr className=" hover:text-red-300" />
        </div>
        <div>
          <FaLinkedinIn className=" hover:text-red-300" />
        </div>
      </div>
      {/* mobile mode */}
      {menuOpen && (
        <div className="absolute top-[100%] right-0 w-[45%] bg-white shadow-md rounded-bl-[10px] text-left m-0 p-2 flex flex-col items-left px-4 py-4 space-y-4 md:hidden">
          {navItems.map(({ id, name, path }) => (
            <NavLink
              key={id}
              to={path}
              className="text-black text-lg hover:text-red-300"
              onClick={() => setMenuOpen(false)}
            >
              {name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;

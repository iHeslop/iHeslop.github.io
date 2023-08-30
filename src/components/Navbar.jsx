import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { styles } from "../styles";
import { TypeAnimation } from "react-type-animation";
import { close, menu } from "../assets";

const Navbar = (props) => {
  const [toggle, setToggle] = useState(false);

  const activeLink = (path) => {
    return location.pathname === path
      ? "active-navlink"
      : "text-eerieBlack hover:text-french nav-links cursor-pointer";
  };

  return (
    <nav
      className={`${styles.paddingX} absolute flex
      z-30 sm:opacity-[0.97] xxs:h-[12vh] fade-in-animation`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl">
        <ul className="list-none flex flex-col gap-3 sm:mt-2">
          <li className="text-eerieBlack font-neuelight tracking-wider -mb-1">
            <h1 className={`${styles.heroHeadText} text-black`}>
              Isaac Heslop
            </h1>
          </li>

          <li className="text-eerieBlack font-neuelight">
            <TypeAnimation
              sequence={["", 3000, "software engineer and architect.", 3000]}
              wrapper="p"
              className={`${styles.heroSubText}`}
              speed={50}
              repeat={0}
            />
          </li>

          <li
            className={
              "text-[12px] sm:text-[14px] font-neueregular tracking-widest"
            }
          >
            <NavLink
              to={"/"}
              className={activeLink("/")}
              onClick={() => {
                props.generateRandomColour();
              }}
            >
              home.
            </NavLink>
          </li>

          <li
            className={
              "text-[12px] sm:text-[14px] font-neueregular tracking-widest"
            }
          >
            <NavLink
              to={"/projects"}
              className={activeLink("/projects")}
              onClick={() => {
                props.generateRandomColour();
              }}
            >
              projects.
            </NavLink>
          </li>

          <li
            className={
              "text-[12px] sm:text-[14px] font-neueregular tracking-widest"
            }
          >
            <NavLink
              to={"/experience"}
              className={activeLink("/experience")}
              onClick={() => {
                props.generateRandomColour();
              }}
            >
              experience.
            </NavLink>
          </li>

          <li
            className={
              "text-[12px] sm:text-[14px] font-neueregular tracking-widest"
            }
          >
            <NavLink
              to={"/contact"}
              className={activeLink("/contact")}
              onClick={() => {
                props.generateRandomColour();
              }}
            >
              contact.
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

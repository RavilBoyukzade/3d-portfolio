import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { styles } from "../style";
import { navLinks } from "../constants";
import { logo } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const { pathname } = useLocation();

  return (
    <nav
      className={`${styles.paddingX} fixed top-0 z-20 flex w-full items-center bg-primary/90 py-5 backdrop-blur`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="h-9 w-9 object-contain" />
          <p className="cursor-pointer text-[18px] font-bold text-white">
            Ravil
            <span className="hidden sm:block"> | Frontend developer</span>
          </p>
        </Link>

        <ul className="hidden list-none flex-row gap-8 sm:flex">
          {navLinks.map((nav) => {
            const isBlog = nav.path === "/blog";
            const isActive = isBlog
              ? pathname === "/blog"
              : active === nav.title;

            return (
              <li key={nav.id}>
                <Link
                  to={nav.path}
                  onClick={() => setActive(nav.title)}
                  className={`text-[18px] font-medium transition ${
                    isActive ? "text-white" : "text-secondary hover:text-white"
                  }`}
                >
                  {nav.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

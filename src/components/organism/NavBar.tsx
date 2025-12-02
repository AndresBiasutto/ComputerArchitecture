import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className=" px-2 sm:px-4 py-2.5 rounded bg-gray-900 shadow w-auto">
      <div className="container flex flex-wrap justify-end items-center mx-auto">
        {/* HAMBURGER BUTTON (mobile) */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setOpen(!open)}
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg 
                       hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 
                       dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* MENU DESKTOP */}
        <div className="hidden md:block md:w-auto">
          <ul className="flex flex-row md:space-x-8 md:text-sm md:font-medium">
            <NavItem to="/" text="Inicio" />
            <NavItem to="/unitone" text="Unidad 1" />
            <NavItem to="/unittwo" text="Unidad 2" />
            <NavItem to="/unitthree" text="Unidad 3" />
            <NavItem to="/unitfour" text="Unidad 4" />
            <NavItem to="/unitfive" text="Unidad 5" />
          </ul>
        </div>

        {/* MENU MOBILE (animado) */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="w-full md:hidden mt-4"
            >
              <ul className="flex flex-col space-y-2 md:text-sm md:font-medium pb-4">
                <MobileNavItem
                  to="/"
                  text="Inicio"
                  close={() => setOpen(false)}
                />
                <MobileNavItem
                  to="/unitone"
                  text="Unidad 1"
                  close={() => setOpen(false)}
                />
                <MobileNavItem
                  to="/unittwo"
                  text="Unidad 2"
                  close={() => setOpen(false)}
                />
                <MobileNavItem
                  to="/unitthree"
                  text="Unidad 3"
                  close={() => setOpen(false)}
                />
                <MobileNavItem
                  to="/unitfour"
                  text="Unidad 4"
                  close={() => setOpen(false)}
                />
                <MobileNavItem
                  to="/unitfive"
                  text="Unidad 5"
                  close={() => setOpen(false)}
                />
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default NavBar;

type Props = {
  to: string;
  text: string;
  close?: () => void;
};

const NavItem = ({ to, text }: Props) => (
  <li>
    <NavLink
      to={to}
      className={({ isActive }) =>
        `block py-2 pr-4 pl-3 rounded md:p-0 hover:underline hover:bg-blue-900  p-1 font-vt323 text-2xl text-blue-500 transition
        ${isActive ? "text-blue-700 " : "text-gray-50  hover:bg-blue-900"}`
      }
    >
      {text}
    </NavLink>
  </li>
);

const MobileNavItem = ({ to, text, close }: Props) => (
  <li>
    <NavLink
      to={to}
      onClick={close}
      className="block hover:underline hover:bg-blue-900 rounded-2xl p-1 font-vt323 text-2xl text-blue-500 transition"
    >
      {text}
    </NavLink>
  </li>
);

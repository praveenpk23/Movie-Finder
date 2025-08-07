import React, { useState } from "react";
import { NavLink, useSearchParams,useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigation = useNavigate();
  const handleSubmit = (e) =>{
    const query = e.target.search.value
    e.preventDefault();
    navigation(`/search?query=${query}`);
    e.target.reset();
  }

  const activeClass = "block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500";
  const inactiveClass = "block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";

  return (
    <div className="fixed w-full z-50">
      <nav className="bg-white w-auto border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              CineBite
            </span>
          </NavLink>

          {/* Search and Hamburger */}
          <div className="flex md:order-2">
            {/* <NavLink to="/search" className="hidden md:block"> */}
            <form onSubmit={handleSubmit}>
                <div className="relative hidden md:block">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search..."
                  name="search"
                  className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
            </form>
            {/* </NavLink> */}

            {/* Hamburger icon */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 focus:outline-none"
              aria-controls="navbar-search"
              aria-expanded={isMenuOpen}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
              <span className="sr-only">Toggle menu</span>
            </button>
          </div>

          {/* Responsive menu (toggleable) */}
          <div
            className={`${isMenuOpen ? "block" : "hidden"} items-center justify-between w-full md:flex md:w-auto md:order-1`}
            id="navbar-search"
          >
            {/* Optional mobile search input */}
           {/* <NavLink to="/search" className="relative mt-3 md:hidden"> */}
          <form >
              <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
          </form>
            {/* </NavLink> */}

            {/* Nav Links */}
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? activeClass : inactiveClass)} end>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/movies/popular" className={({ isActive }) => (isActive ? activeClass : inactiveClass)}>
                  Popular
                </NavLink>
              </li>
              <li>
                <NavLink to="/movies/top" className={({ isActive }) => (isActive ? activeClass : inactiveClass)}>
                  Top
                </NavLink>
              </li>
              <li>
                <NavLink to="/movies/upcoming" className={({ isActive }) => (isActive ? activeClass : inactiveClass)}>
                  Upcoming
                </NavLink>
              </li>
              <li>
                <NavLink to="/series/topseries" className={({ isActive }) => (isActive ? activeClass : inactiveClass)}>
                  Top TV Series
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

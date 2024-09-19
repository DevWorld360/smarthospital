import React, { useState } from 'react'
import { Icon } from "@iconify/react";
import { navLinks } from '../data/data'
import logo from '../assets/logo.png'
import admin from '../assets/admin.jpg'

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false)

    const toggleLinks = () => {
        setShowLinks(!showLinks)
    }

    return (
      <nav>
        <div className="flex justify-between items-center py-4 px-4 bg-primary-color fixed top-0 left-0 right-0 z-">
          <div className="flex items-center gap-8">
            <div className="w-52">
              <img src={logo} alt="" />
            </div>
            <h1 className="text-white font-Urbanist font-bold text-lg lg:text-2xl">
              Smart Hospital & Research Center
            </h1>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <ul className="flex items-center gap-6">
              {navLinks.map((nav) => (
                <li key={nav.id} className="flex items-center gap-2 text-base">
                  <Icon icon={nav.icon} width={20} style={{ color: "white" }} />
                </li>
              ))}
            </ul>
            <div className="w-5 h-5 rounded-full overflow-hidden">
              <img src={admin} alt="" />
            </div>
          </div>
          <button
            id="menu-btn"
            className={`${
              showLinks ? "open" : "hamburger"
            } block hamburger md:hidden focus:outline-none outline-none`}
            onClick={toggleLinks}
          >
            <span className="hamburger-top">-</span>
            <span className="hamburger-middle">-</span>
            <span className="hamburger-bottom">-</span>
          </button>
        </div>
        <div className="md:hidden relative z-10">
          {showLinks && (
            <div className="absolute flex-col items-center self-end py-8 mt-8 space-y-6 bg-white sm:w-auto sm:self-center left-8 right-8 drop-shadow-md rounded-md">
              <ul className="flex flex-col justify-center items-center gap-y-4">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className="cursor-pointer text-violetColor text-sm "
                  >
                    <a href={`#${nav.id}`}>{nav.text}</a>
                  </li>
                ))}
              </ul>
              <button
                type="submit"
                className="flex justify-center items-center my-0 mx-auto gap-2 text-violetColor border border-violetColor rounded px-6 py-2 bg-transparent"
              >
                Donate <img src={logo} className="w-3" alt="" />
              </button>
            </div>
          )}
        </div>
      </nav>
    );
}

export default Navbar
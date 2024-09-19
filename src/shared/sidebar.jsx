import React from "react";
import { sideLinks } from "../data/data";
import { Icon } from "@iconify/react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside
      className={
        "bg-gray-50 lg:flex flex-col justify-between min-h-dvh border-r mt-[4.5rem] w-[15%]"
      }
    >
      <div className={"bg-gray-50 lg:flex flex-col font-Urbanist"}>
        <nav className={""}>
          <ul className={"flex flex-col w-full"}>
            {sideLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className={`flex gap-2 px-4 py-3 w-full font-Urbanist font-semibold transition-colors justify-start focus-visible:ring-primary-800 text-[#014F86] 
                        ${isActive ? "bg-gray-200" : "bg-transparent hover:bg-gray-200"}`}
                  >
                    <Icon icon={link.icon} width={20} />
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;

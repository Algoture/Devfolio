"use client";
import { useState } from "react";
import Link from "next/link";
import { MoonIcon, SunIcon } from "./Icons";
import clsx from "clsx";
import { buttons } from "../utils/Socials";

const Nav = () => {
  const [dark, setDark] = useState<boolean>(false);
  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <div className="fixed bottom-2 right-1/2 transform translate-x-1/2">
      <nav className="flex px-4 py-3 gap-3  rounded-full bg-white shadow-sh">
        {buttons.map((data) => {
          return (
            <Link key={data.name} href={data.link}>
              {data.icon}
            </Link>
          );
        })}

        <div className="border-l-2 flex items-center pl-2">
          <button
            onClick={() => darkModeHandler()}
            className={clsx(
              "cen transition-all rounded-full focus:outline-none",
              dark ? "rotate-0" : "rotate-90"
            )}>
            {dark && <MoonIcon width={25} height={25} />}
            {!dark && <SunIcon width={25} height={25} />}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

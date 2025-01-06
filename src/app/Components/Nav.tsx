"use client";
import { useState } from "react";
import Link from "next/link";
import {
  DiscordIcon,
  GitHubIcon,
  InstaIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from "./Icons";
import clsx from "clsx";

const Nav = () => {
  const [dark, setDark] = useState<boolean>(false);
  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <div className="fixed bottom-2 right-1/2 transform translate-x-1/2">
      <nav className="flex px-4 py-3 gap-4  rounded-full bg-white shadow-sh">
        <Link href="https://github.com/Algoture/PortFolio">
          <GitHubIcon width={25} height={25} />
        </Link>
        <Link href="https://github.com/Algoture/PortFolio">
          <InstaIcon width={25} height={25} />
        </Link>
        <Link href="https://github.com/Algoture/PortFolio">
          <TwitterIcon width={25} height={25} />
        </Link>
        <Link href="https://github.com/Algoture/PortFolio">
          <DiscordIcon width={25} height={25} />
        </Link>

        <div className="border-l-2 flex items-center pl-2">
          <button
            onClick={() => darkModeHandler()}
            className={clsx(
              "cen transition-all rounded-full focus:outline-none",
              dark ? "rotate-0" : "rotate-90"
            )}
          >
            {dark && <MoonIcon width={25} height={25} />}
            {!dark && <SunIcon width={25} height={25} />}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

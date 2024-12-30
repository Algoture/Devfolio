"use client";
import Image from "next/image";
import { aboutMe } from "@/app/utils/Data";
import { buttons } from "./utils/Socials";
import BentoGrid from "./Components/BentoGrid";
import localFont from "next/font/local";
import { MoonIcon, SunIcon } from "./Components/Icons";
import { useState } from "react";
const myFont = localFont({ src: "./font/Louize.woff2" });
export default function Home() {
  const [dark, setDark] = useState<boolean>(false);
  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <div className="w-full h-dvh dark:bg-foreground cen flex-col">
      {/* <Image
        src="/Joe.png"
        width={200}
        height={150}
        className="rounded object-cover size-52"
        alt="joe"
      /> */}
      {/* <Image src="/RoleMaster.png" alt="rolemaster" className="shadow-xl rounded-xl" width={500} height={150}/> */}
      <p
        className={`md:text-9xl sm:text-7xl text-5xl txt text-black dark:text-background text-center ${myFont.className}`}
      >
        I'm {aboutMe.name}
      </p>
      <p className="xl:text-3xl md:text-3xl text-xl dark:text-gray-300 text-gray-500 p-3 text-center">
        A passionate Full-Stack{" "}
        <span className="text-darkaccent dark:text-accent">&lt;Developer/&gt;</span> with 4+
        years of experience.
      </p>
      <div className="cen md:flex-row flex-wrap gap-2 p-2   rounded-lg">
        {buttons.map(({ name, icon }, i) => {
          return (
            <button key={i} className="btn">
              {icon}
              {name}
            </button>
          );
        })}
      </div>
      <button
        onClick={() => darkModeHandler()}
        className="dark:bg-accent bg-darkaccent cen transition-all dark:text-background absolute right-8 top-8 p-2 rounded-full focus:outline-none"
      >
        {dark && <SunIcon width={24} height={24} />}
        {!dark && <MoonIcon width={24} height={24} />}
      </button>
      {/* <BentoGrid /> */}
    </div>
  );
}

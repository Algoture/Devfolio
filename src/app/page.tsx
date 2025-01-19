"use client";
import Image from "next/image";
import { aboutMe, transition, variants } from "@/app/utils/data";
import { buttons } from "./utils/Socials";
import BentoGrid from "./Components/BentoGrid";

import Nav from "./Components/Nav";
import Skills from "./Components/Skills";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <div className="w-full h-dvh cen bg-background2 dark:bg-foreground flex-col">
      <motion.div
        initial="hidden"
        whileInView="visible"
        animate="visible"
        variants={variants}
        transition={transition}
        className="flex flex-col ">
        <div className="flex md:flex-row flex-col-reverse items-center md:text-left text-center md:mt-20 gap-2 p-2">
          <div>
            <p
              className={`md:text-5xl text-4xl txt text-black dark:text-background font-bold`}>
              I'm {aboutMe.name}
            </p>
            <p className="xl:text-xl md:text-xl text-xl dark:text-gray-300 text-gray-700">
              A Developer who loves building things for the web.
            </p>
          </div>
          <Image
            src="/Umesh2.jpg"
            width={40}
            height={50}
            className="rounded-md shadow-sh md:size-20 size-28 object-cover"
            alt="joe"
          />
        </div>
      </motion.div>
      {/* <div className="cen md:flex-row flex-wrap gap-2 p-2   rounded-lg">
        {buttons.map(({ name, icon }, i) => {
          return (
            <button key={i} className="btn">
              {icon}
              {name}
            </button>
          );
        })}
      </div> */}

      {/* <BentoGrid /> */}
      <Nav />
      <Skills />
    </div>
  );
}

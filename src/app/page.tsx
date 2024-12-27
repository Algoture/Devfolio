import Image from "next/image";
import { aboutMe } from "@/app/utils/Data";
import { buttons } from "./utils/Socials";
import BentoGrid from "./Components/BentoGrid";

export default function Home() {
  return (
    <div className="w-full mt-4 cen flex-col">
      <Image
        src="/Joe.jpg"
        width={200}
        height={150}
        className="rounded-full object-cover bg-orange-400 size-52"
        alt="joe"
      />
      {/* <Image src="/RoleMaster.png" alt="rolemaster" className="shadow-xl rounded-xl" width={500} height={150}/> */}
      <p className="xl:text-9xl md:text-7xl text-4xl text-left font-semibold">
        I'm {aboutMe.name}
      </p>
      <p className="xl:text-3xl md:text-2xl text-xl text-gray-500 p-3 text-center">
        A passionate Full-Stack{" "}
        <span className="text-orange-400">&lt;Developer/&gt;</span> with 4+
        years of experience.
      </p>
      <div className="cen md:flex-row flex-wrap gap-2 p-2   rounded-lg">
        {buttons.map(({ name, icon }, i) => {
          return (
            <button key={i} className="btn ">
              {icon}
              {name}
            </button>
          );
        })}
      </div>
      <BentoGrid />
    </div>
  );
}

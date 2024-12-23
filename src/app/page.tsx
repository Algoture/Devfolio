import { GitHubIcon } from "./Components/Icons";
import { aboutMe } from "./utils/data";

export default function Home() {
  return (
    <div className="w-full h-dvh center flex-col">
      {/* <button className="btn">
        <GitHubIcon width={18} height={18} />
        GitHub
      </button> */}
      <div></div>

      <p className="xl:text-9xl md:text-7xl text-4xl text-left font-semibold">I'm {aboutMe.name}</p>
      <p className="xl:text-3xl md:text-2xl text-xl text-gray-500 p-3 text-center">
        A passionate Full-Stack <span className="text-orange-500">&lt;Developer/&gt;</span> with 4+ years of experience.
      </p>
    </div>
  );
}

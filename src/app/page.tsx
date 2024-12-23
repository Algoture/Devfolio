import { GitHubIcon } from "./Components/Icons";

export default function Home() {
  return (
    <div className="w-full h-dvh center">
      <button className="btn">
        <GitHubIcon width={18} height={18} />
        GitHub
      </button>
    </div>
  );
}

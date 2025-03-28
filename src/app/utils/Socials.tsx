import {
  GitHubIcon,
  LinkedInIcon,
  InstaIcon,
  TwitterIcon,
  DiscordIcon,
} from "../Components/Icons";
import { ButtonData } from "./types";

export const buttons: ButtonData[] = [
  {
    name: "GitHub",
    icon: <GitHubIcon width={25} height={25} />,
    link: "https://github.com/Algoture",
  },
  {
    name: "Discord",
    icon: <DiscordIcon width={25} height={25} />,
    link: "https://discord.com/users/790565393659330591",
  },
  {
    name: "LinkedIn",
    icon: <LinkedInIcon width={25} height={25} />,
    link: "https://www.linkedin.com/in/umesh27/",
  },
  {
    name: "Instagram",
    icon: <InstaIcon width={25} height={25} />,
    link: "https://www.instagram.com/2.0_27/",
  },
  {
    name: "Twitter",
    icon: <TwitterIcon width={25} height={25} />,
    link: "https://x.com/umeshn22",
  },
];

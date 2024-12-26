import {
  GitHubIcon,
  LinkedInIcon,
  InstaIcon,
  TwitterIcon,
  FacebookIcon,
  DiscordIcon,
  SlackIcon,
} from "../Components/Icons";
import { ButtonData } from "./types";

export const buttons: ButtonData[] = [
  { name: "GitHub", icon: <GitHubIcon width={18} height={18} /> },
  { name: "Discord", icon: <DiscordIcon width={18} height={18} /> },
  { name: "LinkedIn", icon: <LinkedInIcon width={18} height={18} /> },
  { name: "Slack", icon: <SlackIcon width={18} height={18} /> },
  { name: "Instagram", icon: <InstaIcon width={18} height={18} /> },
  { name: "Twitter", icon: <TwitterIcon width={18} height={18} /> },
  { name: "Facebook", icon: <FacebookIcon width={18} height={18} /> },
];

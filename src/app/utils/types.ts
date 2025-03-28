import { JSX } from "react";

export type dimensions = {
  height: number;
  width: number;
};

export type ButtonData = {
  name: string;
  icon: JSX.Element;
  link: string;
};

export type skills = {
  id: number;
  skill: string;
};

import { skills } from "./types";

export const aboutMe = {
  name: "Umesh Nagare",
  description:
    "A passionate Full-Stack <Developer/> with 4+ years of experience.",
};
export const projects = [
  {
    name: "DevConnect",
    description:
      "A social networking platform for developers to share ideas and collaborate.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    liveDemo: "https://devconnect.com",
    github: "https://github.com/alexjohnson/devconnect",
  },
  {
    name: "ShopEase",
    description:
      "An e-commerce web app with a seamless shopping experience and secure payment gateway.",
    technologies: ["Next.js", "Firebase", "Stripe API"],
    liveDemo: "https://shopease.com",
    github: "https://github.com/alexjohnson/shopease",
  },
];
// export const skills = {
//   languages: ["JavaScript", "TypeScript", "Python"],
//   frontend: ["React", "Next.js", "Tailwind CSS"],
//   backend: ["Node.js", "Express", "GraphQL"],
//   tools: ["Docker", "Git", "Jenkins"],
// };
export const experience = [
  {
    title: "Software Engineer",
    company: "TechCorp Solutions",
    duration: "Jan 2021 – Present",
    responsibilities: [
      "Developed and maintained scalable REST APIs using Node.js and Express.",
      "Improved page load speed by 35% through optimized React components.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "CreativeWeb Studio",
    duration: "Aug 2019 – Dec 2020",
    responsibilities: [
      "Designed responsive web interfaces using Tailwind CSS and React.",
      "Collaborated with designers to ensure consistent UI/UX.",
    ],
  },
];
export const contact = {
  email: "alex.johnson.dev@gmail.com",
  linkedIn: "https://linkedin.com/in/alexjohnson",
  github: "https://github.com/alexjohnson",
};
export const education = [
  {
    degree: "B.Sc. in Computer Science",
    institution: "University of TechVille",
    year: 2019,
  },
  {
    certification: "Certified JavaScript Developer",
    provider: "CodeCamp",
    year: 2020,
  },
];
export const skill: skills[] = [
  {
    id: 2,
    skill: "React.js",
  },
  {
    id: 3,
    skill: "Next.js",
  },
  {
    id: 4,
    skill: "AWS",
  },
  {
    id: 5,
    skill: "TypeScript",
  },

  {
    id: 7,
    skill: "React Native",
  },
  {
    id: 8,
    skill: "Node.js",
  },
  {
    id: 9,
    skill: "Express.js",
  },
  {
    id: 10,
    skill: "MongoDB",
  },
  {
    id: 11,
    skill: "SQL",
  },
  {
    id: 12,
    skill: "PostgreSQL",
  },
];
export const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
export const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};
import netflixClone from "@/public/netflix-clone.png";
import ecommerceApp from "@/public/ecommerce.png";
import newsApp from "@/public/news-app.png";
import passwordGenerator from "@/public/password-generator.png";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor of Technology Graduation",
    location: "Coimbatore, India",
    description:
      "Graduated with a B.Tech degree in Computer science.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2022",
  },
  {
    title: "Front-end Developer Intern",
    location: "Multiway, India",
    description:
      "Completed a 6months Front-end Developer Internship at Multiway Technologies. Collaborated with experienced developers, contributing to real-world projects and refining my skills.",
    icon: React.createElement(CgWorkAlt),
    date: "sep 2023 - Feb 2024",
  },
  {
    title: "Software engineer Intern",
    location: "Ford, India",
    description:
      "Transitioned to  role as a  Intern at Ford motors private Limited India. Continuing to apply my expertise and passion for development to create innovative solutions and make a meaningful impact within the company.",
    icon: React.createElement(FaReact),
    date: "jan 2022 - apr 2022 ",
  },
] as const;

export const projectsData = [
  {
    title: "Netflix Clone",
    description:
      "A Netflix clone built with React.js. It has a responsive design and a movie trailer feature.",
    tags: ["React.js", "TMDB API"],
    imageUrl: netflixClone,
  },
  {
    title: "Daily news",
    description: "A news app that fetches news from the News API.",
    tags: ["Next.js", "Tailwind"],
    imageUrl: newsApp,
  },
  {
    title: "Ecommerce website",
    description: "An E-commerce website built with React.js",
    tags: ["React.js"],
    imageUrl: ecommerceApp,
  },
  {
    title: "Password Generator",
    description: "A password generator built with React.js",
    tags: ["React.js"],
    imageUrl: passwordGenerator,
  },
] as const;

export const skillsData = [
  "React",
  "Next.js",
  "TypeScript",
  "Git",
  "Tailwind",
  "Web development",
  "Data Structures",
] as const;

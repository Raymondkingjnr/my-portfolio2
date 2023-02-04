import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineHtml5,
} from "react-icons/ai";
import { FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiCss3, SiTailwindcss } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";

const icons = [
  {
    id: "0",
    icon: <AiOutlineGithub />,
    link: "https://github.com/Raymondkingjnr",
  },

  {
    id: "1",
    icon: <AiOutlineTwitter />,
    link: "https://twitter.com/ArihamSK",
  },

  {
    id: "2",
    icon: <AiFillInstagram />,
    link: "https://instagram.com/raymondking.i.o",
  },

  {
    id: "3",
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/nnaji-raymond-26584b1a6/",
  },
];

const skillSet = [
  {
    id: 0,
    icon: <AiOutlineHtml5 />,
    text: "html",
  },
  {
    id: 0,
    icon: <SiCss3 />,
    text: "Css",
  },
  {
    id: 0,
    icon: <FaReact />,
    text: "React",
  },
  {
    id: 0,
    icon: <TbBrandJavascript />,
    text: "javascript(ES6)",
  },
  {
    id: 0,
    icon: <SiTailwindcss />,
    text: "tailwindcss",
  },
];

const projects = [{}];

export { icons, projects, skillSet };

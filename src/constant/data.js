import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineHtml5,
} from "react-icons/ai";

import { FaLinkedinIn } from "react-icons/fa";
import { DiCss3Full } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";

import chatGbt from "../assets/chatgbt.png";
import cockTail from "../assets/cocktail.png";
import gericht from "../assets/gerict.png";
import banking from "../assets/banking.png";
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

const SkillSet = [
  {
    id: 0,
    icon: <AiOutlineHtml5 />,
    text: "html",
  },
  {
    id: 0,
    icon: <DiCss3Full />,
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

const projects = [
  {
    id: 0,
    img: gericht,
    tag: "react",
    site: "https://gericht01.netlify.app/",
    code: "https://github.com/Raymondkingjnr/Getrich-Restaurant-",
  },
  {
    id: 1,
    img: chatGbt,
    tag: "react",
    site: "https://gbt3ai.netlify.app/",
    code: "https://github.com/Raymondkingjnr/gbt3",
  },
  {
    id: 2,
    img: cockTail,
    tag: "React , API, React-Router-Dom",
    site: "https://cocktailsite2.netlify.app/",
    code: "https://github.com/Raymondkingjnr/cocktail-site",
  },
  {
    id: 2,
    img: banking,
    tag: "React , Tailwincss",
    site: "https://modern-bank-site.netlify.app/",
    code: " https://github.com/Raymondkingjnr/modern-banking-site",
  },
];

export { icons, projects, SkillSet };

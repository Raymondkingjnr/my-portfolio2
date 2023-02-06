import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import chatGbt from "../assets/chatgbt.png";
import cockTail from "../assets/cocktail.png";
import gericht from "../assets/gerict.png";
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
    text: "html",
  },
  {
    id: 0,
    text: "Css",
  },
  {
    id: 0,
    text: "React",
  },
  {
    id: 0,
    text: "javascript(ES6)",
  },
  {
    id: 0,
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
    tag: "React , API",
    site: "https://cocktailsite2.netlify.app/",
    code: "https://github.com/Raymondkingjnr/cocktail-site",
  },
];

export { icons, projects, SkillSet };

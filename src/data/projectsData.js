import { FaReact, FaLaravel, FaItchIo } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandVite } from "react-icons/tb";
import { FaUnity } from "react-icons/fa6";
import { SiGodotengine, SiRobloxstudio } from "react-icons/si";

import website1 from "../assets/websites/Website1.png"
import website2 from "../assets/websites/Website2.png"
import game2 from "../assets/games/Game2.jpeg"
import game3 from "../assets/games/Game3.jpeg"
import game4 from "../assets/games/Game4.jpeg"
import game5 from "../assets/games/Game5.jpeg"

export const projects = [
  {
    id: 1,
    category: "website",
    title: "Website CTO",
    image: website1,
    buttonLink: "https://cto-website.vercel.app/",
    buttonText: "View Website",

    reactIcon: [
      { icon: FaReact, tooltip: "React" },
      { icon: RiTailwindCssFill, tooltip: "Tailwind CSS" },
      { icon: TbBrandVite, tooltip: "Vite" },
      { icon: FaLaravel, tooltip: "Laravel" },
    ],

    description: "During my internship program, I built this web for CTO team at ",
    descLink: {
      name: "PT Finnet Indonesia",
      link: "https://www.finpay.id/tentangkami"
    },

    badges: [
      {
        id: 1,
        text: "Created on Nov 2025",
        color: "blue"
      }
    ]
  },

  {
    id: 2,
    category: "game",
    title: "Kucing Oren Lapar",
    image: game4,
    buttonLink: "https://yellorddev.itch.io/kucing-oren-lapar",
    buttonText: "Play Now",

    reactIcon: [
      { icon: FaUnity, tooltip: "Unity" },
      { icon: FaItchIo, tooltip: "itch.io" },
    ],

    description: "My first 2D Unity platformer game that I published. This game is about a hungry cat.",

    badges: [
      {
        id: 1,
        text: "Published on Jan 2023",
        color: "blue"
      },
      {
        id: 2,
        text: "3rd Place Showcase",
        color: "yellow"
      }
    ]
  },

  {
    id: 3,
    category: "game",
    title: "Perang Antar Warga",
    image: game5,
    buttonLink: "https://yellorddev.itch.io/perang-antar-warga",
    buttonText: "Play Now",

    reactIcon: [
      { icon: SiGodotengine, tooltip: "Godot" },
      { icon: FaItchIo, tooltip: "itch.io" },
    ],

    description: "My first 2D Godot game that I published. This is a 2D fighting strategy game.",

    badges: [
      {
        id: 1,
        text: "Published on Feb 2026",
        color: "blue"
      }
    ]
  },

  {
    id: 4,
    category: "website",
    title: "Uni Craft Profile Web",
    image: website2,
    buttonLink: "https://gilang-uni-website.vercel.app",
    buttonText: "View Website",

    reactIcon: [
      { icon: FaReact, tooltip: "React" },
      { icon: RiTailwindCssFill, tooltip: "Tailwind CSS" },
      { icon: TbBrandVite, tooltip: "Vite" },
    ],

    description: "A web version of my Uni Craft profile, you can view it without installing the app.",

    badges: [
      {
        id: 1,
        text: "Created on Oct 2026",
        color: "blue"
      }
    ]
  },
  {
    id: 5,
    category: "game",
    title: "Oreo Tower",
    image: game3,
    buttonLink: "https://www.roblox.com/games/125111872877155/Oreo-Tower",
    buttonText: "Play Now",

    reactIcon: [
      { icon: SiRobloxstudio, tooltip: "Roblox" },
    ],

    description: "I made this game on Roblox Studio. This game is simple, just an oreo obby tower.",

    badges: [
      {
        id: 1,
        text: "Published on April 2026",
        color: "blue"
      }
    ]
  },

  {
    id: 6,
    category: "game",
    title: "Zombie Shooter",
    image: game2,
    buttonLink: "https://www.greenfoot.org/scenarios/30953",
    buttonText: "Play Now",

    localIcon: { src: "./greenfoot_icon.png", tooltip: "Greenfoot" },

    description: "My first 2D Greenfoot survival game that I published. Shoot the zombies to win.",

    badges: [
      {
        id: 1,
        text: "Published on March 2023",
        color: "blue"
      }
    ]
  },
];
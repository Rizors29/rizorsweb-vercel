import { FaReact, FaLaravel, FaItchIo } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandVite } from "react-icons/tb";
import { FaUnity } from "react-icons/fa6";
import { SiGodotengine, SiRobloxstudio } from "react-icons/si";

export const projects = [
  {
    id: 1,
    title: "Website CTO",
    image: "./img/WebsiteCover.png",
    buttonLink: "https://cto-website.vercel.app/",
    buttonText: "See Website",

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
    title: "Kucing Oren Lapar",
    image: "./img/Game4.jpeg",
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
    title: "Perang Antar Warga",
    image: "./img/Game5.jpeg",
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
    title: "Matematika atau Mati",
    image: "./img/Game1.jpeg",
    buttonLink: "https://uni.prd.h5.uni2play.com/prod/landing/?to=uni://unicc.com/world/detail?id=FDFLA9X_264",
    buttonText: "Play Now",

    localIcon: { src: "./uni_icon.png", tooltip: "Uni Craft" },

    description: "This is a Math game. I made this game on Uni Craft Your World. ",
    descLink: {
      name: "How to make this?",
      link: "https://www.youtube.com/@peanut8819/videos"
    },

    badges: [
      {
        id: 1,
        text: "Published on Jan 2024",
        color: "blue"
      }
    ]
  },

  {
    id: 5,
    title: "Oreo Tower",
    image: "./img/Game3.jpeg",
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
    title: "Zombie Shooter",
    image: "./img/Game2.jpeg",
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
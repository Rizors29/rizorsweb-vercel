import { FaReact, FaLaravel, FaItchIo } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandVite } from "react-icons/tb";
import { FaUnity } from "react-icons/fa6";
import { SiGodotengine } from "react-icons/si";

export const projects = [
  {
    title: "Website CTO",
    image: "./img/WebsiteCover.png",
    link: "https://cto-website.vercel.app/",
    buttonText: "See Website",

    reactIcon: [FaReact, RiTailwindCssFill, TbBrandVite, FaLaravel],

    description: "During my internship program, I built this web for CTO team at ",
    descLink: {
      name: "PT Finnet Indonesia",
      link: "https://www.finpay.id/tentangkami"
    },

    badges: [
      {
        text: "Created on Nov 2025",
        color: "blue"
      }
    ]
  },

  {
    title: "Kucing Oren Lapar",
    image: "./img/Game4.jpeg",
    link: "https://yellorddev.itch.io/kucing-oren-lapar",
    buttonText: "Play Now",

    reactIcon: [FaUnity, FaItchIo],

    description: "My first 2D Unity platformer game that I published. This game is about a hungry cat.",

    badges: [
      {
        text: "Published on Jan 2023",
        color: "blue"
      },
      {
        text: "3rd Place Showcase",
        color: "yellow"
      }
    ]
  },

  {
    title: "Perang Antar Warga",
    image: "./img/Game5.jpeg",
    link: "https://yellorddev.itch.io/perang-antar-warga",
    buttonText: "Play Now",

    reactIcon: [SiGodotengine, FaItchIo],

    description: "My first 2D Godot game that I published. This is a 2D fighting strategy game.",

    badges: [
      {
        text: "Published on Feb 2026",
        color: "blue"
      }
    ]
  },

  {
    title: "Matematika atau Mati",
    image: "./img/Game1.jpeg",
    link: "https://uni.prd.h5.uni2play.com/prod/landing/?to=uni://unicc.com/world/detail?id=FDFLA9X_264",
    buttonText: "Play Now",

    localIcon: "./uni_icon.png",

    description: "This is a Math game. I made this game on Uni Craft Your World. ",
    descLink: {
      name: "How to make this?",
      link: "https://www.youtube.com/@peanut8819/videos"
    },

    badges: [
      {
        text: "Published on Jan 2024",
        color: "blue"
      }
    ]
  },

  {
    title: "Save the Car",
    image: "./img/Game3.jpeg",
    link: "https://castle.xyz/d/J-W5rWoVz",
    buttonText: "Play Now",

    localIcon: "./castle_icon.png",

    description: "I made this game on Castle platform on my phone. Save the red car to the finish line.",

    badges: [
      {
        text: "Published on Jan 2022",
        color: "blue"
      }
    ]
  },

  {
    title: "Zombie Shooter",
    image: "./img/Game2.jpeg",
    link: "https://www.greenfoot.org/scenarios/30953",
    buttonText: "Play Now",

    localIcon: "./greenfoot_icon.png",

    description: "My first 2D Greenfoot survival game that I published. Shoot the zombies to win.",

    badges: [
      {
        text: "Published on March 2023",
        color: "blue"
      }
    ]
  },
];
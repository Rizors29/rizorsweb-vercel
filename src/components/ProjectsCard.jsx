import { useEffect } from "react";
import { FaReact, FaLaravel, FaItchIo } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandVite } from "react-icons/tb";
import { FaUnity } from "react-icons/fa6";
import { SiGodotengine } from "react-icons/si";

function ProjectsCard() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="px-6 py-24 text-white bg-black/40 backdrop-blur-sm">
      <h2 className="text-3xl font-bold text-center mb-12 animate-slide-up underline underline-offset-4 decoration-red-500">
        My Projects
      </h2>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        <div className="bg-gray-500/30 rounded-xl overflow-hidden shadow-lg hover:scale-[1.05] transition block animate-slide-up ring ring-white/30">
          <div className="w-full aspect-[16/9] bg-zinc-800">
            <img src="./img/WebsiteCover.png" className="h-full w-full object-cover" />
          </div>
          <div className="p-5">
            <div className="justify-between flex mb-1">
              <h3 className="text-xl font-semibold">Website CTO</h3>
              <div className="flex font-semibold gap-2">
                <FaReact />
                <RiTailwindCssFill />
                <TbBrandVite />
                <FaLaravel />
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-2">
              During my internship program, I built this web for CTO team at
              <a
                href="https://www.finpay.id/tentangkami"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline ms-1"
              >
                PT Finnet Indonesia
              </a>
              .
            </p>
            <span className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-blue-300 ring ring-blue-300/40">Created on Nov 2025</span>
          </div>
        </div>
        <div className="bg-gray-500/30 rounded-xl overflow-hidden shadow-lg hover:scale-[1.05] transition block animate-slide-up ring ring-white/30">
          <div className="relative w-full aspect-[16/9] bg-zinc-800">
            <img src="./img/Game4.jpeg" className="h-full w-full object-cover" />
            <a
              href="https://yellorddev.itch.io/kucing-oren-lapar"
              target="_blank"
              className="absolute bottom-4 right-0
               text-white text-sm font-semibold
               rounded-md px-4 py-2"
            >
              <span className="bg-white/80 text-black font-bold rounded-full px-5 py-2">
                Play Now
              </span>
            </a>
          </div>
          <div className="p-5">
            <div className="justify-between flex mb-1 font-semibold">
              <h3 className="text-xl">Kucing Oren Lapar</h3>
              <div className="flex font-semibold gap-2">
                <FaUnity />
                <FaItchIo />
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-2">My first 2D Unity platformer game that I published. This game is about a hungry cat.</p>
            <span class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-blue-300 ring ring-blue-300/40 me-2">Published on Jan 2023</span>
            <span class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-yellow-300 ring ring-yellow-300/40">3rd Place Showcase</span>
          </div>
        </div>
        <div className="bg-gray-500/30 rounded-xl overflow-hidden shadow-lg hover:scale-[1.05] transition block animate-slide-up ring ring-white/30">
          <div className="relative w-full aspect-[16/9] bg-zinc-800">
            <img src="./img/Game5.jpeg" className="h-full w-full object-cover" />
            <a
              href="https://yellorddev.itch.io/perang-antar-warga"
              target="_blank"
              className="absolute bottom-4 right-0
               text-white text-sm font-semibold
               rounded-md px-4 py-2"
            >
              <span className="bg-white/80 text-black font-bold rounded-full px-5 py-2">
                Play Now
              </span>
            </a>
          </div>
          <div className="p-5">
            <div className="justify-between flex mb-1 font-semibold">
              <h3 className="text-xl">Perang Antar Warga</h3>
              <div className="flex font-semibold gap-2">
                <SiGodotengine />
                <FaItchIo />
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-2">My first 2D Godot game that I published. This is a 2D fighting strategy game.</p>
            <span class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-blue-300 ring ring-blue-300/40 m-1">Published on Feb 2026</span>
          </div>
        </div>
        <div className="bg-gray-500/30 rounded-xl overflow-hidden shadow-lg hover:scale-[1.05] transition block animate-slide-up ring ring-white/30">
          <div className="relative w-full aspect-[16/9] bg-zinc-800">
            <img src="./img/Game1.jpeg" className="h-full w-full object-cover" />
            <a
              href="https://uni.prd.h5.uni2play.com/prod/landing/?to=uni://unicc.com/world/detail?id=FDFLA9X_264"
              target="_blank"
              className="absolute bottom-4 right-0
               text-white text-sm font-semibold
               rounded-md px-4 py-2"
            >
              <span className="bg-white/80 text-black font-bold rounded-full px-6 py-2">
                Play Now
              </span>
            </a>
          </div>
          <div className="p-5">
            <div className="justify-between flex mb-1 font-semibold">
              <h3 className="text-xl">Matematika atau Mati</h3>
              <img src="./uni_icon.png" alt="Castle icon" className="w-5 h-5" />
            </div>
            <p className="text-sm text-gray-300 mb-2">
              This is a Math game. I made this game on Uni Craft Your World.
              <a
                href="https://www.youtube.com/@peanut8819/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline ms-1"
              >
                How to make this?
              </a>
            </p>
            <span class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-blue-300 inset-ring inset-ring-blue-300/20">Published on Jan 2024</span>
          </div>
        </div>
        <div className="bg-gray-500/30 rounded-xl overflow-hidden shadow-lg hover:scale-[1.05] transition block animate-slide-up ring ring-white/30">
          <div className="relative w-full aspect-[16/9] bg-zinc-800">
            <img src="./img/Game3.jpeg" className="h-full w-full object-cover" />
            <a
              href="https://castle.xyz/d/J-W5rWoVz"
              target="_blank"
              className="absolute bottom-4 right-0
               text-white text-sm font-semibold
               rounded-md px-4 py-2"
            >
              <span className="bg-white/80 text-black font-bold rounded-full px-5 py-2">
                Play Now
              </span>
            </a>
          </div>
          <div className="p-5">
            <div className="justify-between flex mb-1 font-semibold">
              <h3 className="text-xl">Save the Car</h3>
              <img src="./castle_icon.png" alt="Castle icon" className="w-5 h-5" />
            </div>
            <p className="text-sm text-gray-300 mb-2">I made this game on Castle platform on my phone. Save the red car to the finish line.</p>
            <span class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-blue-300 inset-ring inset-ring-blue-300/20">Published on Jan 2022</span>
          </div>
        </div>
        <div className="bg-gray-500/30 rounded-xl overflow-hidden shadow-lg hover:scale-[1.05] transition block animate-slide-up ring ring-white/30">
          <div className="relative w-full aspect-[16/9] bg-zinc-800">
            <img src="./img/Game2.jpeg" className="h-full w-full object-cover" />
            <a
              href="https://www.greenfoot.org/scenarios/30953"
              target="_blank"
              className="absolute bottom-4 right-0
               text-white text-sm font-semibold
               rounded-md px-4 py-2"
            >
              <span className="bg-white/80 text-black font-bold rounded-full px-5 py-2">
                Play Now
              </span>
            </a>
          </div>
          <div className="p-5">
            <div className="justify-between flex mb-1 font-semibold">
              <h3 className="text-xl">Zombie Shooter</h3>
              <img src="./greenfoot_icon.png" alt="Castle icon" className="w-5 h-5" />
            </div>
            <p className="text-sm text-gray-300 mb-2">My first 2D Greenfoot survival game that I published. Shoot the zombies to win.</p>
            <span class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-blue-300 inset-ring inset-ring-blue-300/20">Published on March 2023</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsCard;
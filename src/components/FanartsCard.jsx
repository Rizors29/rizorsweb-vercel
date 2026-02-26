import { useEffect } from "react";

function FanartsCard() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="px-6 py-24 text-white bg-black/40 backdrop-blur-sm">
      <h2 className="text-3xl font-bold text-center mb-12 underline underline-offset-4 decoration-red-500">
        My Fanarts
      </h2>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        <div className="bg-gray-500/30 rounded-xl overflow-hidden shadow-lg hover:scale-[1.05] transition block animate-slide-up ring ring-white/30">
          <video
            className="w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="./img/Fanart3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="p-5">
            <h3 className="text-xl font-semibold mb-1">Ray Versi Rambut Poni</h3>
            <p className="text-sm text-gray-300 mb-2">I like participating in a fanart competitions on Discord. I usually draw my fanarts on IbisPaint.</p>
            <span class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-blue-300 inset-ring inset-ring-blue-300/20 me-2">Drawn on April 2024</span>
            <span class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-yellow-300 inset-ring inset-ring-yellow-300/20">Won the Competition</span>
          </div>
        </div>
        <div className="bg-gray-500/30 rounded-xl overflow-hidden shadow-lg hover:scale-[1.05] transition block animate-slide-up ring ring-white/30">
          <video
            className="w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="./img/Fanart5.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="p-5">
            <h3 className="text-xl font-semibold mb-1">Mba Eci makan Es Krim</h3>
            <p className="text-sm text-gray-300 mb-2">She is Eci, this character is inspired by the game School Cafeteria Simulator.</p>
            <span class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-blue-300 inset-ring inset-ring-blue-300/20 me-2">Drawn on July 2023</span>
          </div>
        </div>
        <div className="bg-gray-500/30 rounded-xl overflow-hidden shadow-lg hover:scale-[1.05] transition block animate-slide-up ring ring-white/30">
          <div className="w-full aspect-[16/9] bg-zinc-800">      
            <img src="./img/Fanart1.jpeg" className="h-full w-full object-cover" />
          </div>
          <div className="p-5">
            <h3 className="text-xl font-semibold mb-1">Kang Basket dan Emak</h3>
            <p className="text-sm text-gray-300 mb-2">These two characters are inspired by the game Warnet Life by Akhir Pekan Studio.</p>
            <span class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-blue-300 inset-ring inset-ring-blue-300/20">Drawn on March 2022</span>
          </div>
        </div>
        <div className="bg-gray-500/30 rounded-xl overflow-hidden shadow-lg hover:scale-[1.05] transition block animate-slide-up ring ring-white/30">
          <div className="w-full aspect-[16/9] bg-zinc-800">      
            <img src="./img/Fanart4.jpeg" className="h-full w-full object-cover" />
          </div>
          <div className="p-5">
            <h3 className="text-xl font-semibold mb-1">Mba Penyihir</h3>
            <p className="text-sm text-gray-300 mb-2">This is a witch, also inspired by the game Warnet Life by Akhir Pekan Studio.</p>
            <span class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-blue-300 inset-ring inset-ring-blue-300/20">Drawn on April 2022</span>
          </div>
        </div>
        <div className="bg-gray-500/30 rounded-xl overflow-hidden shadow-lg hover:scale-[1.05] transition block animate-slide-up ring ring-white/30">
          <div className="w-full aspect-[16/9] bg-zinc-800">      
            <img src="./img/Fanart2.jpeg" className="h-full w-full object-cover" />
          </div>
          <div className="p-5">
            <h3 className="text-xl font-semibold mb-1">Mba Sasa dan Kang Bakso</h3>
            <p className="text-sm text-gray-300 mb-2">This is my fanart that won a competition on Discord. As a reward, this fanart was added into a game.</p>
            <span class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-blue-300 inset-ring inset-ring-blue-300/20 me-2">Drawn on June 2022</span>
            <span class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-yellow-300 inset-ring inset-ring-yellow-300/20">Won the Competition</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FanartsCard;
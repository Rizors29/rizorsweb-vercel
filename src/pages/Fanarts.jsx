import { useEffect } from "react";
import FanartsCard from "../components/FanartsCard";
import { fanarts } from "../data/fanartsData";

function Fanarts() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="px-6 py-24 text-white bg-black/40 backdrop-blur-sm">
      <h2 className="text-3xl font-bold text-center mb-12 animate-slide-up underline underline-offset-4 decoration-red-500">
        My Fanarts
      </h2>
      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {fanarts.map((fanart, index) => (
          <FanartsCard
            key={fanart.id}
            index={index}
            {...fanart}
          />
        ))}
      </div>
    </section>
  );
}

export default Fanarts;

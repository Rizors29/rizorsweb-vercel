import { useState } from "react";
import ProjectsCard from "../components/ProjectsCard";
import { projects } from "../data/projectsData";

const TABS = [
  { label: "All", value: "all" },
  { label: "Website", value: "website" },
  { label: "Game", value: "game" },
];

function Projects() {
  const [activeTab, setActiveTab] = useState("all");

  const filtered = activeTab === "all"
    ? projects
    : projects.filter((p) => p.category === activeTab);

  return (
    <section className="px-6 py-24 text-white">
      <h2 className="text-3xl font-bold text-center mb-6 animate-slide-up underline underline-offset-4 decoration-red-500">
        My Projects
      </h2>

      {/* Filter tabs */}
      <div className="flex justify-center gap-2 mb-8 animate-slide-up">
        {TABS.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`px-5 py-1.5 rounded-full text-sm font-semibold transition duration-300 cursor-pointer ${
              activeTab === tab.value
                ? "bg-white text-black"
                : "bg-white/20 text-white hover:bg-white/30"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {filtered.map((project, index) => (
          <ProjectsCard
            key={`${activeTab}-${project.id}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;

import { useEffect } from "react";
import ProjectsCard from "../components/ProjectsCard";
import { projects } from "../data/projectsData";

function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="px-6 py-24 text-white bg-black/40 backdrop-blur-sm">
      <h2 className="text-3xl font-bold text-center mb-12 animate-slide-up underline underline-offset-4 decoration-red-500">
        My Projects
      </h2>
      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project) => (
          <ProjectsCard
            key={project.id}
            {...project}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
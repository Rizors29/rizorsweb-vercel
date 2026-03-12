function ProjectsCard({ project }) {
  return (
    <div className="bg-gray-500/30 rounded-xl overflow-hidden shadow-lg hover:scale-[1.05] transition block animate-slide-up ring ring-white/30">
      <div className="relative w-full aspect-[16/9] bg-zinc-800">
        <img src={project.image} className="h-full w-full object-cover" />
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="absolute bottom-4 right-0 text-white text-sm font-semibold rounded-md px-4 py-2">
          <span className="bg-white/80 text-black font-bold rounded-full px-5 py-2 ring-1 ring-black/20">
            {project.buttonText}
          </span>
        </a>
      </div>

      <div className="p-5">
        <div className="flex justify-between mb-1">
          <h3 className="text-xl font-semibold">
            {project.title}
          </h3>
          {project.localIcon && (
            <img
              src={project.localIcon}
              alt="platform icon"
              className="w-5 h-5"
            />
          )}
          {project.reactIcon && (
            <div className="flex gap-2">
              {project.reactIcon?.map((Icon, index) => (
                <Icon key={index} />
              ))}
            </div>
          )}
        </div>

        <p className="text-sm text-gray-300 mb-2">
          {project.description}
          {project.descLink && (
            <a href={project.descLink.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
              {project.descLink.name}
            </a>
          )}
        </p>

        <div className="flex gap-2 flex-wrap py-1">
          {project.badges?.map((badge, index) => (
            <span key={index} className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${badge.color === "yellow" ? "text-yellow-300 ring ring-yellow-300/40" : "text-blue-300 ring ring-blue-300/40"}`}>
              {badge.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsCard;
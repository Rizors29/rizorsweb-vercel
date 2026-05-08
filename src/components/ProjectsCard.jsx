function ProjectsCard({ title, image, buttonLink, buttonText, reactIcon, localIcon, description, descLink, badges, index = 0 }) {
  return (
    <div
      className="bg-gray-500/30 rounded-xl overflow-hidden shadow-lg hover:scale-[1.05] transition block animate-slide-up ring ring-white/30"
      style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'both' }}
    >
      <div className="relative w-full aspect-[16/9] bg-zinc-800">
        <img src={image} className="h-full w-full object-cover" />
        <a href={buttonLink} target="_blank" rel="noopener noreferrer" className="absolute bottom-4 right-0 text-white text-sm font-semibold rounded-md px-4 py-2">
          <span className="bg-white/80 text-black font-bold rounded-full px-5 py-2 ring-1 ring-black/20 hover:bg-blue-400 transition duration-300">
            {buttonText}
          </span>
        </a>
      </div>

      <div className="p-5">
        <div className="flex justify-between mb-1">
          <h3 className="text-xl font-semibold">
            {title}
          </h3>
          {localIcon && (
            <div className="relative group flex items-center">
              <img
                src={localIcon.src}
                alt="platform icon"
                className="w-5 h-5"
              />
              <span className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/80 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition pointer-events-none">
                {localIcon.tooltip}
              </span>
            </div>
          )}
          {reactIcon && (
            <div className="flex gap-2">
              {reactIcon?.map(({ icon: Icon, tooltip }, id) => (
                <div key={id} className="relative group flex items-center">
                  <Icon />
                  <span className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/80 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition pointer-events-none">
                    {tooltip}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        <p className="text-sm text-gray-300 mb-2">
          {description}
          {descLink && (
            <a href={descLink.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
              {descLink.name}
            </a>
          )}
        </p>

        <div className="flex gap-2 flex-wrap py-1">
          {badges?.map((badge) => (
            <span key={badge.id} className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${badge.color === "yellow" ? "text-yellow-300 ring ring-yellow-300/40" : "text-blue-300 ring ring-blue-300/40"}`}>
              {badge.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsCard;
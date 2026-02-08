function Card({ project, index }) {
  return (
    <a
      href={project.link}
      target="_blank"
      className="bg-gray-500/30 rounded-xl overflow-hidden shadow-lg hover:scale-[1.05] transition block animate-slide-up"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <img src={project.image} className="h-50 w-full object-cover" />

      <div className="p-5">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-sm text-gray-300">{project.description}</p>

        <div className="pt-2 text-xs text-gray-300 flex justify-between items-center">
          Created in {project.date}
        </div>
      </div>
    </a>
  );
}

export default Card;

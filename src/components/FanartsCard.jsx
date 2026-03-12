function FanartsCard({ fanart }) {
  return (
    <div className="bg-gray-500/30 rounded-xl overflow-hidden shadow-lg hover:scale-[1.05] transition block animate-slide-up ring ring-white/30">
      {fanart.video && (
        <video className="w-full object-cover" autoPlay loop muted playsInline>
          <source src={fanart.video} type="video/mp4" />
        </video>
      )}
      {fanart.image && (
        <div className="w-full aspect-[16/9] bg-zinc-800">
          <img src={fanart.image} className="h-full w-full object-cover" />
        </div>
      )}

      <div className="p-5">
        <h3 className="text-xl font-semibold mb-1">
          {fanart.title}
        </h3>

        <p className="text-sm text-gray-300 mb-2">
          {fanart.description}
          {fanart.descLink && (
            <a href={fanart.descLink.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
              {fanart.descLink.name}
            </a>
          )}
        </p>

        <div className="flex gap-2 flex-wrap py-1">
          {fanart.badges?.map((badge, index) => (
            <span key={index} className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${badge.color === "yellow" ? "text-yellow-300 ring ring-yellow-300/40" : "text-blue-300 ring ring-blue-300/40"}`}>
              {badge.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FanartsCard;
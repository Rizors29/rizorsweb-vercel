import { FaEye } from "react-icons/fa";

const API_BASE =
  import.meta.env.PROD ? "" : "https://rizorsweb-vercel.vercel.app";

function Card({ project, index, setViews }) {
  const handleClick = async () => {
    const key = `clicked-${project.id}`;

    if (sessionStorage.getItem(key)) return;
    sessionStorage.setItem(key, "true");

    try {
      const res = await fetch(
        `${API_BASE}/api/views?id=${project.id}`
      );
      const data = await res.json();

      setViews((prev) => ({
        ...prev,
        [project.id]: data.views,
      }));

      console.log("VIEW ADDED:", project.id);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <a
      href={project.link}
      target="_blank"
      onClick={handleClick}
      className="bg-gray-500/30 rounded-xl overflow-hidden shadow-lg hover:scale-[1.05] transition block"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <img src={project.image} className="h-50 w-full object-cover" />

      <div className="p-5">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-sm text-gray-300">{project.description}</p>

        <div className="pt-2 text-xs text-gray-300 flex justify-between items-center">
          Created in {project.date}
          <div className="flex items-center gap-2">
            <FaEye /> {project.views ?? 0}
          </div>
        </div>
      </div>
    </a>
  );
}

export default Card;

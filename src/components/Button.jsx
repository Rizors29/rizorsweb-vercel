import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

function Button() {
  function scrollToProjects() {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="flex justify-center mt-5 gap-1 md:gap-3 ms-0 md:ms-120 animate-slide-up">
      <button
        onClick={scrollToProjects}
        className="px-7 py-2 rounded-full bg-white/80 backdrop-blur-md text-black font-bold hover:bg-blue-400 transition duration-300 cursor-pointer"
      >
        View Projects
      </button>

      <a href="https://www.instagram.com/riza_alfhr" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/80 rounded-full hover:bg-blue-400 transition duration-300">
        <FaInstagram className="text-xl text-black" />
      </a>

      <a href="https://github.com/Rizors29" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/80 rounded-full hover:bg-blue-400 transition duration-300">
        <FaGithub className="text-xl text-black" />
      </a>

      <a href="https://www.linkedin.com/in/mohammad-riza-al-fahrie" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/80 rounded-full hover:bg-blue-400 transition duration-300">
        <FaLinkedin className="text-xl text-black" />
      </a>
    </div>
  );
}

export default Button;

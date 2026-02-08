import { Link } from "react-router-dom";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

function Button({ onClick }) {
  return (
    <div className="flex justify-center mt-5 gap-1 md:gap-3 ms-0 md:ms-120 animate-slide-up">
      <Link
        to="/projects"
        onClick={onClick}
        className="px-7 py-2 rounded-full bg-white/80 backdrop-blur-md text-black font-bold hover:bg-blue-400 transition duration-300"
      >
        See Projects
      </Link>
      <a href="https://www.instagram.com/riza_alfhr" target="_blank"
        className="p-3 bg-white/80 rounded-full hover:bg-blue-400 transition duration-300">
        <FaInstagram className="text-xl text-black" />
      </a>
      <a href="https://github.com/Rizors29" target="_blank"
        className="p-3 bg-white/80 rounded-full hover:bg-blue-400 transition duration-300">
        <FaGithub className="text-xl text-black" />
      </a>
      <a href="https://www.linkedin.com/in/mohammad-riza-al-fahrie" target="_blank"
        className="p-3 bg-white/80 rounded-full hover:bg-blue-400 transition duration-300">
        <FaLinkedin className="text-xl text-black" />
      </a>
    </div>
  )
}

export default Button
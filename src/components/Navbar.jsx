import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { label: "Home",     id: "home"     },
  { label: "About",    id: "about"    },
  { label: "Projects", id: "projects" },
  { label: "Fanarts",  id: "fanarts"  },
  { label: "Contact",  id: "contact"  },
];

const isMobile = () => window.innerWidth < 768;

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Track which section is visible — observe both desktop and mobile ids
  useEffect(() => {
    const allIds = [
      "home",
      "about", "about-m",
      "projects", "projects-m",
      "fanarts", "fanarts-m",
      "contact", "contact-m",
    ];

    const observers = allIds.map((elId) => {
      const el = document.getElementById(elId);
      if (!el) return null;

      // Strip the "-m" suffix to get the canonical nav id
      const canonicalId = elId.replace(/-m$/, "");

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(canonicalId);
        },
        { threshold: 0, rootMargin: "-20% 0px -70% 0px" }
      );
      observer.observe(el);
      return observer;
    });

    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  function scrollTo(id) {
    // Pick mobile or desktop element based on viewport
    const targetId = isMobile() && id !== "home" ? `${id}-m` : id;
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  }

  const itemClass = (id) =>
    `block py-2 transition duration-300 cursor-pointer ${
      active === id
        ? "text-red-400 underline decoration-2 underline-offset-3"
        : "text-gray-300 hover:text-red-400"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1
          className="text-xl font-bold text-gray-300 cursor-pointer"
          onClick={() => scrollTo("home")}
        >
          RizorsWeb
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          {navItems.map(({ label, id }) => (
            <li key={id}>
              <span className={itemClass(id)} onClick={() => scrollTo(id)}>
                {label}
              </span>
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-gray-300 text-xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col px-6 pb-4 font-medium">
          {navItems.map(({ label, id }) => (
            <li key={id} onClick={() => scrollTo(id)}>
              <span className={itemClass(id)}>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

import { useEffect, useRef, useState } from "react"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Fanarts from "./pages/Fanarts"
import Contact from "./pages/Contact"

function App() {
  const [dimmed, setDimmed] = useState(false)
  const projectsRef = useRef(null)
  const fanartsRef = useRef(null)
  const aboutMRef = useRef(null)
  const projectsMRef = useRef(null)
  const fanartsMRef = useRef(null)
  const contactMRef = useRef(null)


  useEffect(() => {
    const visibleSections = new Set()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.add(entry.target)
          } else {
            visibleSections.delete(entry.target)
          }
        })
        setDimmed(visibleSections.size > 0)
      },
      { threshold: 0.05, rootMargin: "0px 0px -70% 0px" }
    )

    const refs = [projectsRef, fanartsRef, aboutMRef, projectsMRef, fanartsMRef, contactMRef]
    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />

      <div
        className="fixed -z-10 w-full bg-[url(/img/background.png)] bg-cover bg-[position:15%_top] md:bg-center"
        style={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          minHeight: "100lvh",
        }}
      />

      {/* Dark overlay — fades in when Projects or Fanarts is visible */}
      <div
        className="fixed inset-0 -z-10 bg-black/30 backdrop-blur-sm pointer-events-none transition-opacity duration-700"
        style={{ opacity: dimmed ? 1 : 0 }}
      />

      <main className="w-full">
        <section id="home"><Home /></section>

        <div className="hidden md:block">
          <section id="about"><About /></section>
          <section id="projects" ref={projectsRef}><Projects /></section>
          <section id="fanarts" ref={fanartsRef}><Fanarts /></section>
          <section id="contact"><Contact /></section>
        </div>

        <div className="md:hidden">
          <section id="about-m" ref={aboutMRef}><About /></section>
          <section id="projects-m" ref={projectsMRef}><Projects /></section>
          <section id="fanarts-m" ref={fanartsMRef}><Fanarts /></section>
          <section id="contact-m" ref={contactMRef}><Contact /></section>
        </div>
      </main>

      <footer className="fixed bottom-0 w-full py-3 text-center text-sm text-white/50 z-50">
        &copy; {new Date().getFullYear()} RizorsWeb
      </footer>
    </>
  );
}

export default App;

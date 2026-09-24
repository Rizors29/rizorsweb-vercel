import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Fanarts from "./pages/Fanarts"
import Contact from "./pages/Contact"

function App() {
  return (
    <>
      <Navbar />

      <div className="fixed inset-0 -z-10 bg-[url(/img/background.png)] bg-cover bg-[position:15%_center] md:bg-center" />

      <main className="w-full">
        <section id="home"><Home /></section>

        <div className="hidden md:block">
          <section id="about"><About /></section>
          <div className="h-32 bg-gradient-to-b from-transparent to-black/40 pointer-events-none" />
          <div className="bg-black/40">
            <section id="projects"><Projects /></section>
            <section id="fanarts"><Fanarts /></section>
          </div>
          <div className="h-32 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
          <section id="contact"><Contact /></section>
        </div>

        <div className="md:hidden">
          <div className="h-32 bg-gradient-to-b from-transparent to-black/40 pointer-events-none" />
          <div className="bg-black/40">
            <section id="about-m"><About /></section>
            <section id="projects-m"><Projects /></section>
            <section id="fanarts-m"><Fanarts /></section>
            <section id="contact-m"><Contact /></section>
          </div>
        </div>
      </main>

      <footer className="fixed bottom-0 w-full py-3 text-center text-sm text-white/50 z-50">
        &copy; {new Date().getFullYear()} RizorsWeb
      </footer>
    </>
  );
}

export default App;

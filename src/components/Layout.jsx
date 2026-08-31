import Navbar from "./Navbar"
import { Outlet } from "react-router-dom"

function Layout() {
  return (
    <>
      <Navbar />

      <div className="fixed inset-0 -z-10 bg-[url(/img/background.png)] bg-cover bg-[position:15%_center] md:bg-center"/>

      <main className="w-full min-h-[100svh] overflow-hidden">
        <Outlet />
      </main>

      <footer className="fixed bottom-0 w-full py-3 text-center text-sm text-white/50 z-10">
        &copy; {new Date().getFullYear()} RizorsWeb
      </footer>
    </>
  );
}

export default Layout;

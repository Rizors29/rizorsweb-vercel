import Navbar from "./Navbar"
import { Outlet } from "react-router-dom"

function Layout() {
  return (
    <>
      <Navbar />

      <div
        className="
          fixed inset-0 -z-10
          bg-[url(/img/background.png)]
          bg-cover
          bg-[position:15%_center]
          md:bg-center
        "
      />

      <main className="w-full min-h-[100svh] overflow-hidden">
        <Outlet />
      </main>
    </>
  );
}


export default Layout

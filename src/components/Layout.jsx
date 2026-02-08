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
          bg-center
          will-change-transform
          transform translate-z-0
        "
      />

      <main className="w-full min-h-[100svh] overflow-x-hidden">
        <Outlet />
      </main>
    </>
  );
}


export default Layout

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-300">RizorsWeb</h1>
        <ul className="hidden md:flex gap-8 text-gray-300 font-medium">
          <li className="hover:text-red-400 cursor-pointer transition">Home</li>
          <li className="hover:text-red-400 cursor-pointer transition">About</li>
          <li className="hover:text-red-400 cursor-pointer transition">Projects</li>
          <li className="hover:text-red-400 cursor-pointer transition">Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar

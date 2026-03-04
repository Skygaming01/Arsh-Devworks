
"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md z-50 border-b border-yellow-500/20">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="text-yellow-500 font-bold text-xl">
          Arsh Saifi
        </h1>

        <div className="flex gap-6 text-sm text-gray-300">
          <a href="#about" className="hover:text-yellow-500 transition">About</a>
          <a href="#web" className="hover:text-yellow-500 transition">Web</a>
          <a href="#discord" className="hover:text-yellow-500 transition">Discord</a>
          <a href="#projects" className="hover:text-yellow-500 transition">Projects</a>
          <a href="#contact" className="hover:text-yellow-500 transition">Contact</a>
        </div>

      </div>
    </nav>
  );
}

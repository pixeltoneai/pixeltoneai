export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md text-white px-6 py-4 flex justify-between items-center z-50">

      <h1 className="text-lg font-semibold">
        PixeltoneAI
      </h1>

      <div className="flex gap-6 text-sm text-gray-300">
        <a href="#services" className="hover:text-white">Services</a>
        <a href="#projects" className="hover:text-white">Projects</a>
        <a href="#contact" className="hover:text-white">Contact</a>
      </div>

    </nav>
  );
}
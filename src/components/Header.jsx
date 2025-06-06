import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // Lucide icons

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
        scrolled ? "bg-blue-900" : "bg-blue-200 bg-opacity-30"
      }`}
      style={{ backdropFilter: "blur(10px)" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo container */}
        <div className="flex items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbcJNKayYUyCy3sEK27vfEjCmTZVXCLMaFog&s"
            alt="Miracle Infotech Logo"
            className="h-10 w-auto block"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-white font-medium">
          {[
            "Home",
            "Company Profile",
            "Products",
            "Services",
            "Training",
            "Team",
            "Contact",
          ].map((item, i) => (
            <a
              key={i}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              className="relative transition duration-500 ease-in-out hover:text-yellow-500 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-green-400 after:transition-all after:duration-700 hover:after:w-full"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-white focus:outline-none z-50"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-900 bg-opacity-95 text-white px-6 py-4 space-y-4">
          {[
            "Home",
            "Company Profile",
            "Products",
            "Services",
            "Training",
            "Team",
            "Contact",
          ].map((item, i) => (
            <a
              key={i}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              className="block text-lg font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;

import { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
        scrolled ? "bg-blue-900" : "bg-blue-200 bg-opacity-30"
      }`}
      style={{ backdropFilter: "blur(10px)" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Miracle Tech</div>

        <nav className="hidden md:flex gap-6 text-white font-medium">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">Company Profile</a>
          <a href="#features" className="nav-link">Products</a>
          <a href="#gallery" className="nav-link">Services</a>
          <a href="#team" className="nav-link">Training</a>
          <a href="#pricing" className="nav-link">Team</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </div>

      {/* Add style block here or add these styles to your global CSS */}
      <style jsx>{`
        .nav-link {
          position: relative;
          text-decoration: none;
          color: white;
          padding-bottom: 2px;
        }
        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          height: 2px;
          width: 100%;
          background-color: #22c55e; /* Tailwind green-400 */
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 3s ease-in;
        }
        .nav-link:hover::after {
          transform: scaleX(1);
        }
      `}</style>
    </header>
  );
};

export default Header;

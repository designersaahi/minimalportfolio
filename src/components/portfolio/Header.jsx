import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="lg:h-[25vh] h-[15vh] flex px-8 sm:px-12 lg:px-16">
      {" "}
      <div className="flex justify-between md:px-6 w-full items-center">
        <Link to="/" className="text-lg font-semibold">Sahitya Kashyap</Link>
        <nav className="hidden md:flex space-x-10">
          <NavLink
            to="/"
            className={
              ({ isActive }) =>
                isActive
                  ? "text-gray-900 font-semibold" 
                  : "text-gray-600 hover:text-gray-900" 
            }
          >
            Work
          </NavLink>
          <NavLink
            to="/sandbox"
            className={({ isActive }) =>
              isActive
                ? "text-gray-900 font-semibold"
                : "text-gray-600 hover:text-gray-900"
            }
          >
            Sandbox
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-gray-900 font-semibold"
                : "text-gray-600 hover:text-gray-900"
            }
          >
            About
          </NavLink>
         
        </nav>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-gray-900 z-50 relative"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex items-center justify-center md:hidden">
          <nav className="text-center">
            <div className="flex flex-col space-y-8">
              <Link
                to="/"
                className="text-2xl text-gray-800 hover:text-gray-900"
                onClick={toggleMenu}
              >
                Work
              </Link>
              <Link
                to="/sandbox"
                className="text-2xl text-gray-800 hover:text-gray-900"
                onClick={toggleMenu}
              >
                Sandbox
              </Link>
              <Link
                to="/about"
                className="text-2xl text-gray-800 hover:text-gray-900"
                onClick={toggleMenu}
              >
                About
              </Link>
             
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

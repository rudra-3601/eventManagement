import { useState } from "react";
import { Link, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 flex justify-between items-center h-[10vh]">

        
        <a href="/" className="text-2xl font-bold text-gray-800">
        TrueEvent
        </a>

        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            About
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Events
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Gallery
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Contact
          </a>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link to={"/login"} className="text-gray-700 hover:text-blue-600">
            Login
          </Link>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Register
          </a>
        </div>

       
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col space-y-4 p-4">
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Events
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Gallery
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Contact
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Login
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Register
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

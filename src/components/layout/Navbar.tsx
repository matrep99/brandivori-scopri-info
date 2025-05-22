
import { useState } from "react";
import { Link } from "react-router-dom";
import { Database, Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import BrandivoraLogo from "@/assets/brandivori-logo.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b py-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
          <div className="w-8 h-8 bg-[#0071bc] rounded-md flex items-center justify-center p-1">
            <img src={BrandivoraLogo} alt="Brandivori Logo" className="w-6 h-6" />
          </div>
          <span className="text-[#0071bc]">Brandivori</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-[#0071bc]">Home</Link>
          <Link to="/brands" className="text-gray-700 hover:text-[#0071bc] flex items-center gap-1">
            <Database size={16} />
            <span>Database</span>
          </Link>
          <Link to="/mission" className="text-gray-700 hover:text-[#0071bc]">Missione</Link>
          <Link to="/content" className="text-gray-700 hover:text-[#0071bc]">Contenuti</Link>
          <Link to="/contribute" className="text-gray-700 hover:text-[#0071bc]">Contribuisci</Link>
          <Button variant="outline" size="sm" className="flex items-center gap-2 border-[#0071bc] text-[#0071bc] hover:bg-[#0071bc]/10">
            <Search size={16} />
            <span>Cerca</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b p-4 animate-fade-in shadow-md">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-[#0071bc] px-2 py-1">Home</Link>
            <Link to="/brands" className="text-gray-700 hover:text-[#0071bc] px-2 py-1 flex items-center gap-1">
              <Database size={16} />
              <span>Database</span>
            </Link>
            <Link to="/mission" className="text-gray-700 hover:text-[#0071bc] px-2 py-1">Missione</Link>
            <Link to="/content" className="text-gray-700 hover:text-[#0071bc] px-2 py-1">Contenuti</Link>
            <Link to="/contribute" className="text-gray-700 hover:text-[#0071bc] px-2 py-1">Contribuisci</Link>
            <div className="pt-2">
              <Button variant="outline" size="sm" className="w-full flex items-center justify-center gap-2 border-[#0071bc] text-[#0071bc] hover:bg-[#0071bc]/10">
                <Search size={16} />
                <span>Cerca</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

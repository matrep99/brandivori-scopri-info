
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
          <span className="text-2xl">🦊</span>
          <span className="text-brandivori-blue">Brandivori</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-brandivori-blue">Home</Link>
          <Link to="/mission" className="text-gray-700 hover:text-brandivori-blue">Missione</Link>
          <Link to="/content" className="text-gray-700 hover:text-brandivori-blue">Contenuti</Link>
          <Link to="/contribute" className="text-gray-700 hover:text-brandivori-blue">Contribuisci</Link>
          <Button variant="outline" size="sm" className="flex items-center gap-2 border-brandivori-blue text-brandivori-blue hover:bg-brandivori-blue/10">
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
        <div className="md:hidden bg-white border-b p-4 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-brandivori-blue px-2 py-1">Home</Link>
            <Link to="/mission" className="text-gray-700 hover:text-brandivori-blue px-2 py-1">Missione</Link>
            <Link to="/content" className="text-gray-700 hover:text-brandivori-blue px-2 py-1">Contenuti</Link>
            <Link to="/contribute" className="text-gray-700 hover:text-brandivori-blue px-2 py-1">Contribuisci</Link>
            <div className="pt-2">
              <Button variant="outline" size="sm" className="w-full flex items-center justify-center gap-2 border-brandivori-blue text-brandivori-blue hover:bg-brandivori-blue/10">
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

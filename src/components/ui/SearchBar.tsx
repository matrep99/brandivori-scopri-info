
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  className?: string;
  isVisible?: boolean;
}

const SearchBar = ({ className = "", isVisible = true }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/brand/${encodeURIComponent(searchTerm.trim().toLowerCase())}`);
    }
  };

  return (
    <div 
      className={`w-full max-w-xl mx-auto ${isVisible ? 'opacity-100' : 'opacity-0'} 
        ${isVisible ? 'animate-search-appear' : ''} ${className}`}
    >
      <form onSubmit={handleSearch} className="relative flex items-center">
        <Input
          type="text"
          placeholder="Cerca un brand (es. Nike, Nestlé, Patagonia...)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pr-24 h-12 text-lg bg-white shadow-md rounded-lg"
        />
        <Button 
          type="submit"
          className="absolute right-1 h-10 bg-[#0071bc] hover:bg-[#0071bc]/90"
          disabled={!searchTerm.trim()}
        >
          <Search className="mr-2 h-4 w-4" />
          Cerca
        </Button>
      </form>
    </div>
  );
};

export default SearchBar;

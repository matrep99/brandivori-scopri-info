
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { getBrands } from "../services/brandService";
import { BrandInfo } from "@/components/ui/BrandCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BrandsPage = () => {
  const [brands, setBrands] = useState<BrandInfo[]>([]);
  const [filteredBrands, setFilteredBrands] = useState<BrandInfo[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const data = await getBrands();
        setBrands(data);
        setFilteredBrands(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch brands:", error);
        toast({
          variant: "destructive",
          title: "Errore",
          description: "Impossibile caricare l'elenco dei brand.",
        });
        setLoading(false);
      }
    };

    fetchBrands();
  }, [toast]);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredBrands(brands);
      return;
    }

    const filtered = brands.filter(brand => 
      brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      brand.industry?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBrands(filtered);
  }, [searchTerm, brands]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="brand-gradient rounded-lg p-8 mb-8 text-white text-center shadow-lg">
            <h1 className="text-3xl font-bold mb-4">Database Brand</h1>
            <p className="mb-6">
              Esplora tutti i brand nel nostro database e scopri chi c'è veramente dietro i prodotti che usi.
            </p>

            <div className="relative max-w-xl mx-auto">
              <Input
                type="text"
                placeholder="Filtra brand per nome o settore..."
                className="pl-10 bg-white/90 border-white shadow-inner focus:ring-white"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            </div>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="w-12 h-12 border-4 border-t-[#0071bc] rounded-full animate-spin mx-auto mb-4"></div>
              <p>Caricamento brand in corso...</p>
            </div>
          ) : (
            <>
              {filteredBrands.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-lg shadow-sm border">
                  <p className="text-lg text-gray-500">Nessun brand trovato con questi criteri di ricerca.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredBrands.map((brand) => (
                    <Link 
                      to={`/brand/${encodeURIComponent(brand.name.toLowerCase())}`} 
                      key={brand.name}
                      className="card-hover"
                    >
                      <div className="bg-white p-6 rounded-lg shadow-md border flex flex-col h-full">
                        <div className="flex items-center mb-4">
                          {brand.logo && (
                            <div className="w-12 h-12 bg-white rounded-md flex items-center justify-center p-1 border mr-4 shadow-sm">
                              <img src={brand.logo} alt={brand.name} className="max-w-full max-h-full object-contain" />
                            </div>
                          )}
                          <div>
                            <h3 className="font-bold text-gray-800">{brand.name}</h3>
                            <p className="text-sm text-gray-600">{brand.industry}</p>
                          </div>
                        </div>
                        {brand.parent && brand.parent !== brand.name && (
                          <p className="text-sm mt-auto pt-4 border-t border-gray-100">
                            <span className="text-gray-500">Parte di:</span> {brand.parent}
                          </p>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default BrandsPage;

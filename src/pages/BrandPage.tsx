
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import BrandCard, { BrandInfo } from "@/components/ui/BrandCard";
import { Input } from "@/components/ui/input";
import { Search, ArrowLeft } from "lucide-react";
import { getBrandBySlug } from "../services/brandService";
import { Button } from "@/components/ui/button";

const BrandPage = () => {
  const { brandSlug } = useParams<{ brandSlug: string }>();
  const [brand, setBrand] = useState<BrandInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (!brandSlug) return;

    const fetchBrand = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getBrandBySlug(brandSlug);
        if (data) {
          setBrand(data);
        } else {
          setError(`Brand "${brandSlug}" non trovato`);
        }
      } catch (err) {
        console.error("Error fetching brand:", err);
        setError("Errore nel caricamento del brand");
      } finally {
        setLoading(false);
      }
    };

    fetchBrand();
  }, [brandSlug]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm) {
      window.location.href = `/brand/${searchTerm.toLowerCase()}`;
    }
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="mb-8">
          <Link to="/brands" className="inline-flex items-center text-[#0071bc] hover:underline mb-4">
            <ArrowLeft size={16} className="mr-1" /> Torna all'elenco
          </Link>
          <div className="brand-gradient p-6 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-4 text-white">Dettagli Brand</h1>
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Cerca un altro brand..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/90 border-white"
              />
            </form>
          </div>
        </div>
        
        {loading ? (
          <div className="text-center py-12">
            <div className="w-12 h-12 border-4 border-t-[#0071bc] rounded-full animate-spin mx-auto mb-4"></div>
            <p>Caricamento brand in corso...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12 bg-white rounded-lg shadow-md border">
            <p className="text-xl text-gray-700 mb-4">{error}</p>
            <p className="mb-6 text-gray-500">Prova a cercare un altro brand o torna all'elenco completo.</p>
            <Button asChild variant="outline" className="border-[#0071bc] text-[#0071bc]">
              <Link to="/brands">Visualizza tutti i brand</Link>
            </Button>
          </div>
        ) : brand ? (
          <BrandCard brand={brand} />
        ) : null}
      </div>
    </Layout>
  );
};

export default BrandPage;

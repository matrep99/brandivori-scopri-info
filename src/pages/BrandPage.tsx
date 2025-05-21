
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import BrandCard, { BrandInfo } from "../components/ui/BrandCard";
import { Button } from "@/components/ui/button";
import SearchBar from "../components/ui/SearchBar";
import { useToast } from "@/hooks/use-toast";
import { getBrandByName } from "@/services/brandService";

const BrandPage = () => {
  const { brandSlug } = useParams<{ brandSlug: string }>();
  const [brand, setBrand] = useState<BrandInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const fetchBrand = async () => {
      if (!brandSlug) return;
      
      setLoading(true);
      setError(null);
      
      try {
        // Convert brandSlug to a readable name format
        const brandName = decodeURIComponent(brandSlug).replace(/-/g, ' ');
        const result = await getBrandByName(brandName);
        
        if (result) {
          setBrand(result);
        } else {
          setError(`Non abbiamo ancora informazioni su "${brandSlug}"`);
        }
      } catch (err) {
        console.error("Failed to fetch brand data:", err);
        setError("Si è verificato un errore nel recupero dei dati.");
        toast({
          variant: "destructive",
          title: "Errore",
          description: "Non è stato possibile caricare i dati del brand.",
        });
      } finally {
        setLoading(false);
      }
    };

    if (brandSlug) {
      fetchBrand();
    }
  }, [brandSlug, toast]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <SearchBar className="mb-8" />
          
          <div className="flex items-center mb-6 gap-4">
            <Link to="/">
              <Button variant="outline" size="sm">
                ← Home
              </Button>
            </Link>
            <Link to="/brands">
              <Button variant="outline" size="sm">
                Database Brand
              </Button>
            </Link>
          </div>

          {loading && (
            <div className="text-center py-16">
              <div className="w-12 h-12 mx-auto mb-4 border-4 border-t-primary rounded-full animate-spin"></div>
              <p>Ricerca in corso...</p>
            </div>
          )}

          {error && !loading && (
            <div className="text-center py-16">
              <div className="bg-brandivori-peach/30 p-6 rounded-lg max-w-md mx-auto">
                <p className="mb-4">{error}</p>
                <Button asChild>
                  <Link to="/contribute">Suggerisci questo brand</Link>
                </Button>
              </div>
            </div>
          )}

          {brand && !loading && !error && (
            <BrandCard brand={brand} />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default BrandPage;

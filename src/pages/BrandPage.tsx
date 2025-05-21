
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import BrandCard, { BrandInfo } from "../components/ui/BrandCard";
import { Button } from "@/components/ui/button";
import SearchBar from "../components/ui/SearchBar";
import { useToast } from "@/hooks/use-toast";

const BrandPage = () => {
  const { brandSlug } = useParams<{ brandSlug: string }>();
  const [brand, setBrand] = useState<BrandInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const fetchBrand = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // In a real app, this would be a call to your FastAPI backend
        // For now we'll simulate a response with mock data
        // Simulating API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data based on the brand searched
        if (brandSlug?.toLowerCase() === "nike") {
          setBrand({
            name: "Nike",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png",
            owner: "Nike, Inc.",
            parent: "Nike, Inc.",
            industry: "Abbigliamento sportivo e calzature",
            facts: [
              "Fondata nel 1964 come Blue Ribbon Sports, rinominata Nike nel 1971",
              "Il famoso logo \"swoosh\" è stato creato da Carolyn Davidson per soli $35",
              "Sede principale a Beaverton, Oregon, USA"
            ],
            certifications: ["Fair Labor Association", "Sustainable Apparel Coalition"],
            controversies: [
              "Critiche per le condizioni di lavoro nelle fabbriche del sud-est asiatico",
              "Problemi legati all'uso di materiali non sostenibili",
              "Accuse di evasione fiscale tramite paradisi fiscali"
            ]
          });
        } else if (brandSlug?.toLowerCase() === "nestlé") {
          setBrand({
            name: "Nestlé",
            logo: "https://upload.wikimedia.org/wikipedia/en/d/d8/Nestlé.svg",
            owner: "Pubblico (quotata in borsa)",
            parent: "Nestlé S.A.",
            industry: "Alimentare e bevande",
            facts: [
              "Fondata nel 1866 in Svizzera",
              "Uno dei più grandi gruppi alimentari al mondo",
              "Proprietario di centinaia di marchi tra cui KitKat, Nespresso, San Pellegrino"
            ],
            certifications: ["Rainforest Alliance", "UTZ Certified"],
            controversies: [
              "Scandalo del latte in polvere negli anni '70",
              "Critiche per l'estrazione e l'imbottigliamento di acqua",
              "Deforestazione e uso dell'olio di palma"
            ]
          });
        } else {
          // No data found for this brand
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
          
          <div className="flex items-center mb-6">
            <Link to="/">
              <Button variant="outline" size="sm">
                ← Torna alla ricerca
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

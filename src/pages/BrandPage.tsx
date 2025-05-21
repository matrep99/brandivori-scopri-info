import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { BrandInfo } from "@/components/ui/BrandCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const staticBrands: BrandInfo[] = [
  {
    name: "Nike",
    slug: "nike",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
    description: "Leader mondiale nell'abbigliamento sportivo.",
    industry: "Sport",
  },
  {
    name: "Apple",
    slug: "apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    description: "Tecnologia all'avanguardia per tutti.",
    industry: "Tech",
  },
  {
    name: "Coca-Cola",
    slug: "coca-cola",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Coca-Cola_logo.svg",
    description: "La bevanda più famosa al mondo.",
    industry: "Bevande",
  },
  {
    name: "Adidas",
    slug: "adidas",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
    description: "Innovazione e stile nello sport.",
    industry: "Sport",
  },
  {
    name: "Samsung",
    slug: "samsung",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
    description: "Soluzioni tecnologiche innovative.",
    industry: "Tech",
  },
  // Brand 6–50 generici
  ...Array.from({ length: 45 }, (_, i) => {
    const n = i + 6;
    return {
      name: `Brand ${n}`,
      slug: `brand-${n}`,
      logo: "https://via.placeholder.com/150x50?text=Logo",
      description: `Descrizione per Brand ${n}.`,
      industry: "Generico",
    };
  }),
];

const BrandsPage = () => {
  const [brands, setBrands] = useState<BrandInfo[]>([]);
  const [filteredBrands, setFilteredBrands] = useState<BrandInfo[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    setBrands(staticBrands);
    setFilteredBrands(staticBrands);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredBrands(brands);
      return;
    }

    const filtered = brands.filter((brand) =>
      brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      brand.industry?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBrands(filtered);
  }, [searchTerm, brands]);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6">Scopri i Brand</h1>

        <div className="relative mb-6">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Cerca brand..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        {loading ? (
          <p>Caricamento in corso...</p>
        ) : filteredBrands.length === 0 ? (
          <p>Nessun brand trovato.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2">
            {filteredBrands.map((brand) => (
              <Link
                to={`/brand/${brand.slug}`}
                key={brand.slug}
                className="border rounded-lg p-4 hover:shadow transition"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-12 object-contain mb-4"
                />
                <h2 className="text-xl font-semibold">{brand.name}</h2>
                <p className="text-sm text-muted-foreground">
                  {brand.description}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default BrandsPage;


import Layout from "../components/layout/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

// Sample articles for the content page
const articles = [
  {
    id: 1,
    title: "Come leggere le etichette dei prodotti",
    description: "Una guida pratica per decifrare tutte le informazioni presenti sulle etichette dei prodotti alimentari e non solo.",
    category: "Guide",
    date: "2023-05-15",
    image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhYmVsfGVufDB8fDB8fHww"
  },
  {
    id: 2,
    title: "I marchi sostenibili nell'abbigliamento",
    description: "Quali sono i brand di moda realmente impegnati nella sostenibilità e perché è importante sostenerli.",
    category: "Sostenibilità",
    date: "2023-06-22",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 3,
    title: "Greenwashing: come riconoscerlo",
    description: "Tecniche e strategie usate dalle aziende per apparire più ecologiche di quanto realmente siano.",
    category: "Consapevolezza",
    date: "2023-07-10",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JlZW53YXNoaW5nfGVufDB8fDB8fHww"
  },
  {
    id: 4,
    title: "Chi possiede davvero i marchi di cosmetici?",
    description: "Alla scoperta dei grandi gruppi che controllano la maggior parte dei brand di cosmetici sul mercato.",
    category: "Analisi",
    date: "2023-08-05",
    image: "https://images.unsplash.com/photo-1571781418606-d638328036f9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvc21ldGljc3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 5,
    title: "Supply chain: il percorso nascosto dei prodotti",
    description: "Come funzionano le filiere produttive globali e quali sono le loro implicazioni etiche e ambientali.",
    category: "Approfondimento",
    date: "2023-09-18",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VwcGx5JTIwY2hhaW58ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 6,
    title: "Consumo etico: oltre le etichette",
    description: "Strategie pratiche per fare scelte di consumo più etiche e consapevoli nella vita quotidiana.",
    category: "Guide",
    date: "2023-10-30",
    image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbnN1bWVyfGVufDB8fDB8fHww"
  }
];

// Categories for filtering
const categories = ["Tutti", "Guide", "Sostenibilità", "Consapevolezza", "Analisi", "Approfondimento"];

const ContentPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Contenuti</h1>
          <p className="text-lg text-gray-600 mb-8">
            Articoli, guide e approfondimenti sul consumo consapevole e l'etica dei brand
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant={category === "Tutti" ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary/20"
              >
                {category}
              </Badge>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Card key={article.id} className="overflow-hidden card-hover">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <Badge variant="outline" className="mb-2">
                      {article.category}
                    </Badge>
                    <span className="text-sm text-gray-500">
                      {new Date(article.date).toLocaleDateString('it-IT')}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="line-clamp-2">
                    {article.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Link 
                    to={`/content/${article.id}`} 
                    className="text-primary hover:underline font-medium"
                  >
                    Leggi di più →
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-6">Argomenti di tendenza</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {["Sostenibilità", "Fast Fashion", "Agricoltura Bio", "Certificazioni", "Made in Italy", "Industria Alimentare",
               "Moda Etica", "Consumo Locale", "Commercio Equo", "Cosmesi Naturale"].map((tag) => (
                <Badge key={tag} variant="secondary" className="text-sm px-3 py-1 cursor-pointer">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContentPage;

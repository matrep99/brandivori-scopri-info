
import { BrandInfo } from "@/components/ui/BrandCard";

// This would eventually connect to your FastAPI backend
// For now we'll use mock data
const mockBrands: BrandInfo[] = [
  {
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
  },
  {
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
  },
  {
    name: "Unilever",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Unilever_logo.svg/1200px-Unilever_logo.svg.png",
    owner: "Pubblico (quotata in borsa)",
    parent: "Unilever PLC",
    industry: "Beni di consumo",
    facts: [
      "Fondata nel 1929 dalla fusione di una società olandese e una britannica",
      "Possiede oltre 400 marchi in tutto il mondo",
      "Tra i maggiori produttori mondiali di alimenti, bevande, prodotti per la casa e per l'igiene personale"
    ],
    certifications: ["B Corp", "Sustainable Agriculture"],
    controversies: [
      "Impatto ambientale degli imballaggi monouso",
      "Questioni legate ai test sugli animali",
      "Controversie sul marketing di alcuni prodotti nei paesi in via di sviluppo"
    ]
  }
];

export const getBrands = async (): Promise<BrandInfo[]> => {
  // In a real implementation, this would fetch from your FastAPI backend
  // For now, return mock data
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockBrands), 500); // Simulating network delay
  });
};

export const getBrandByName = async (name: string): Promise<BrandInfo | null> => {
  // In a real implementation, this would fetch from your FastAPI backend
  const normalizedName = name.toLowerCase();
  const brand = mockBrands.find(
    brand => brand.name.toLowerCase() === normalizedName
  );
  
  return new Promise((resolve) => {
    setTimeout(() => resolve(brand || null), 300);
  });
};

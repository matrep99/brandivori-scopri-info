import { BrandInfo } from "@/components/ui/BrandCard";

const staticBrands: BrandInfo[] = [
  {
    name: "Patagonia",
    slug: "patagonia",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Patagonia_logo.svg",
    owner: "Patagonia Inc.",
    parent: "Indipendente",
    industry: "Abbigliamento outdoor",
    facts: ["Donato interamente a cause ambientali", "Fondata nel 1973"],
    certifications: ["B Corp", "Fair Trade"],
    controversies: ["Critiche su prezzi elevati"]
  },
  {
    name: "Unilever",
    slug: "unilever",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Unilever.svg",
    owner: "Unilever PLC",
    parent: "Indipendente",
    industry: "Beni di consumo",
    facts: ["Possiede oltre 400 marchi", "Attiva in 190 paesi"],
    certifications: ["RSPO", "ISO 14001"],
    controversies: ["Uso olio di palma", "Pubblicità ingannevoli"]
  },
  {
    name: "Nestlé",
    slug: "nestle",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Nestle_textlogo_blue.svg",
    owner: "Nestlé S.A.",
    parent: "Indipendente",
    industry: "Alimentare",
    facts: ["Fondata nel 1866", "Leader mondiale nel food & beverage"],
    certifications: ["ISO 22000", "UTZ"],
    controversies: ["Privatizzazione dell'acqua", "Latte in polvere nei paesi poveri"]
  },
  {
    name: "H&M",
    slug: "hm",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg",
    owner: "H&M Group",
    parent: "H&M Group",
    industry: "Moda",
    facts: ["Fast fashion globale", "Fondata in Svezia"],
    certifications: ["Global Organic Textile Standard"],
    controversies: ["Sfruttamento del lavoro", "Fast fashion e sostenibilità"]
  },
  {
    name: "LEGO",
    slug: "lego",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Lego_logo.svg",
    owner: "The LEGO Group",
    parent: "Indipendente",
    industry: "Giochi",
    facts: ["Fondata nel 1932", "Mattoncini in plastica riciclata"],
    certifications: ["ISO 14001"],
    controversies: ["Uso plastica", "Accordi con Shell"]
  },
  {
    name: "Zara",
    slug: "zara",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/30/Zara_Logo.svg",
    owner: "Inditex",
    parent: "Inditex",
    industry: "Moda",
    facts: ["Fondato in Spagna", "Parte del gruppo Inditex"],
    certifications: ["ISO 9001"],
    controversies: ["Fast fashion e sostenibilità"]
  },
  {
    name: "Starbucks",
    slug: "starbucks",
    logo: "https://upload.wikimedia.org/wikipedia/sco/4/45/Starbucks_Corporation_Logo_2011.svg",
    owner: "Starbucks Corp.",
    parent: "Starbucks Corp.",
    industry: "Caffetterie",
    facts: ["Oltre 30.000 punti vendita", "Iconica sirena verde"],
    certifications: ["Fair Trade"],
    controversies: ["Evitamento fiscale", "Condizioni dei lavoratori"]
  },
  {
    name: "Tesla",
    slug: "tesla",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    owner: "Tesla Inc.",
    parent: "Tesla Inc.",
    industry: "Automotive",
    facts: ["Auto elettriche ad alte prestazioni", "Fondata da Elon Musk"],
    certifications: ["ISO 26262"],
    controversies: ["Incidenti in guida autonoma", "Sindacalizzazione"]
  },
  {
    name: "L'Oréal",
    slug: "loreal",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/L%27Or%C3%A9al_logo.svg",
    owner: "L'Oréal Group",
    parent: "L'Oréal Group",
    industry: "Cosmetici",
    facts: ["Leader mondiale nella bellezza", "Presente in oltre 150 paesi"],
    certifications: ["Cruelty Free"],
    controversies: ["Sbiancamento pelle", "Greenwashing"]
  },
  {
    name: "IKEA",
    slug: "ikea",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8f/IKEA_logo.svg",
    owner: "Inter IKEA Systems",
    parent: "Inter IKEA Holding",
    industry: "Arredamento",
    facts: ["Fondata in Svezia", "Mobilio accessibile e modulare"],
    certifications: ["FSC", "ISO 14001"],
    controversies: ["Condizioni lavorative", "Deforestazione"]
  },
  {
    name: "McDonald's",
    slug: "mcdonalds",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/McDonald%27s_logo.svg",
    owner: "McDonald's Corp.",
    parent: "McDonald's Corp.",
    industry: "Ristorazione",
    facts: ["Più di 38.000 ristoranti nel mondo", "Fondata nel 1940"],
    certifications: ["ISO 22000"],
    controversies: ["Cibo spazzatura", "Salari minimi"]
  },
  {
    name: "Sony",
    slug: "sony",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Sony_Logo.svg",
    owner: "Sony Group",
    parent: "Sony Group",
    industry: "Elettronica",
    facts: ["Creatori di PlayStation", "Presente in cinema, musica e TV"],
    certifications: ["ISO 9001"],
    controversies: ["Data breach", "Strategie monopolistiche"]
  },
  {
    name: "Toyota",
    slug: "toyota",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_logo.svg",
    owner: "Toyota Motor Corporation",
    parent: "Toyota Group",
    industry: "Automotive",
    facts: ["Ibrido più venduto al mondo", "Fondata nel 1937"],
    certifications: ["ISO 26262"],
    controversies: ["Emissioni", "Richiami di massa"]
  },
  {
    name: "Gucci",
    slug: "gucci",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/80/Gucci_Logo.svg",
    owner: "Kering",
    parent: "Kering",
    industry: "Moda",
    facts: ["Fondato a Firenze", "Simbolo del lusso"],
    certifications: ["ISO 14001"],
    controversies: ["Pellicce animali", "Marketing controverso"]
  },
  {
    name: "Heineken",
    slug: "heineken",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/Heineken_logo.svg",
    owner: "Heineken International",
    parent: "Heineken Group",
    industry: "Birra",
    facts: ["Fondata nel 1864", "Distribuita in oltre 190 paesi"],
    certifications: ["ISO 22000"],
    controversies: ["Alcolismo", "Sponsorizzazioni discutibili"]
  },
  {
    name: "Barilla",
    slug: "barilla",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Barilla_logo.svg",
    owner: "Barilla Group",
    parent: "Barilla Group",
    industry: "Alimentare",
    facts: ["Pastificio italiano dal 1877", "Leader mondiale nella pasta"],
    certifications: ["ISO 9001", "FSSC 22000"],
    controversies: ["Dichiarazioni discriminatorie in passato"]
  },
  {
    name: "Ferrero",
    slug: "ferrero",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/88/Ferrero_logo.svg",
    owner: "Ferrero Group",
    parent: "Ferrero Group",
    industry: "Dolciumi",
    facts: ["Nutella, Kinder, Rocher", "Fondata ad Alba nel 1946"],
    certifications: ["UTZ", "ISO 22000"],
    controversies: ["Olio di palma", "Rifiuti da imballaggi"]
  },
  {
    name: "PepsiCo",
    slug: "pepsico",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/PepsiCo_logo.svg",
    owner: "PepsiCo Inc.",
    parent: "PepsiCo Inc.",
    industry: "Bevande",
    facts: ["Competitor storico di Coca-Cola", "Anche snack (Lay's, Doritos)"],
    certifications: ["ISO 14001"],
    controversies: ["Zuccheri e salute pubblica"]
  },
  {
    name: "Danone",
    slug: "danone",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Danone_logo.svg",
    owner: "Danone S.A.",
    parent: "Danone Group",
    industry: "Alimentare",
    facts: ["Yogurt e prodotti vegetali", "Attiva in oltre 120 paesi"],
    certifications: ["B Corp"],
    controversies: ["Concorrenza aggressiva"]
  },
  {
    name: "Netflix",
    slug: "netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    owner: "Netflix Inc.",
    parent: "Netflix Inc.",
    industry: "Intrattenimento",
    facts: ["Streaming leader globale", "Fondata nel 1997"],
    certifications: ["Carbon Neutral"],
    controversies: ["Contenuti sensibili", "Algoritmi opachi"]
  }
];

export const getBrands = async (): Promise<BrandInfo[]> => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(staticBrands);
    }, 500);
  });
};

export const getBrandBySlug = async (slug: string): Promise<BrandInfo | undefined> => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      const brand = staticBrands.find((b) => 
        b.slug === slug || 
        b.name.toLowerCase() === slug || 
        b.name.toLowerCase().replace(/\s+/g, '-') === slug
      );
      resolve(brand);
    }, 500);
  });
};

export const addBrand = async (brandData: Partial<BrandInfo>): Promise<BrandInfo> => {
  // In a real app, this would make an API call to save the brand
  // For now, we'll just simulate it
  
  console.log("Adding brand:", brandData);
  
  // Create a slug from the brand name if provided
  const slug = brandData.name ? 
    brandData.name.toLowerCase().replace(/\s+/g, '-') : 
    `brand-${Date.now()}`;
  
  // Create a new brand object with the submitted data
  const newBrand: BrandInfo = {
    name: brandData.name || "Unnamed Brand",
    slug,
    logo: brandData.logo || "",
    owner: brandData.owner || "",
    parent: brandData.parent || "",
    industry: brandData.industry || "",
    facts: brandData.facts || [],
    certifications: brandData.certifications || [],
    controversies: brandData.controversies || []
  };
  
  return new Promise((resolve) => {
    setTimeout(() => {
      // In a real app, we would add this to the database
      // For now, just return the new brand
      resolve(newBrand);
    }, 500);
  });
};

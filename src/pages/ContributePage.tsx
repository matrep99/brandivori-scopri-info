
import Layout from "../components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Plus, Flag, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContributePage = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Grazie per il tuo contributo!",
      description: "Esamineremo la tua segnalazione il prima possibile.",
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Contribuisci al progetto</h1>
          <p className="text-lg mb-8">
            Brandivori è un progetto collaborativo che cresce grazie al contributo della community.
            Ci sono diversi modi in cui puoi partecipare e aiutarci a migliorare.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Plus className="h-5 w-5 text-primary" />
                  <CardTitle>Suggerisci un brand</CardTitle>
                </div>
                <CardDescription>
                  Proponi un nuovo brand da aggiungere al nostro database
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="brand-name" className="block text-sm font-medium mb-1">
                      Nome del brand
                    </label>
                    <Input 
                      id="brand-name" 
                      placeholder="Inserisci il nome del brand"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="brand-industry" className="block text-sm font-medium mb-1">
                      Settore
                    </label>
                    <Select>
                      <SelectTrigger id="brand-industry">
                        <SelectValue placeholder="Seleziona il settore" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="food">Alimentare</SelectItem>
                        <SelectItem value="fashion">Moda e abbigliamento</SelectItem>
                        <SelectItem value="tech">Tecnologia</SelectItem>
                        <SelectItem value="beauty">Bellezza e cosmetica</SelectItem>
                        <SelectItem value="home">Casa e arredamento</SelectItem>
                        <SelectItem value="other">Altro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="brand-notes" className="block text-sm font-medium mb-1">
                      Note o informazioni utili
                    </label>
                    <Textarea 
                      id="brand-notes" 
                      placeholder="Aggiungi qualsiasi informazione che ritieni utile"
                      className="min-h-[100px]"
                    />
                  </div>
                  <Button type="submit">Invia suggerimento</Button>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Flag className="h-5 w-5 text-primary" />
                  <CardTitle>Segnala una correzione</CardTitle>
                </div>
                <CardDescription>
                  Aiutaci a correggere informazioni errate o incomplete
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="correction-brand" className="block text-sm font-medium mb-1">
                      Brand interessato
                    </label>
                    <Input 
                      id="correction-brand" 
                      placeholder="Inserisci il nome del brand"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="correction-type" className="block text-sm font-medium mb-1">
                      Tipo di correzione
                    </label>
                    <Select>
                      <SelectTrigger id="correction-type">
                        <SelectValue placeholder="Seleziona il tipo di correzione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ownership">Proprietà/struttura aziendale</SelectItem>
                        <SelectItem value="certification">Certificazioni</SelectItem>
                        <SelectItem value="controversy">Controversie</SelectItem>
                        <SelectItem value="general">Informazioni generali</SelectItem>
                        <SelectItem value="other">Altro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="correction-details" className="block text-sm font-medium mb-1">
                      Dettagli della correzione
                    </label>
                    <Textarea 
                      id="correction-details" 
                      placeholder="Descrivi la correzione da apportare"
                      className="min-h-[100px]"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="correction-source" className="block text-sm font-medium mb-1">
                      Fonte (opzionale)
                    </label>
                    <Input 
                      id="correction-source" 
                      placeholder="URL o riferimento alla fonte"
                    />
                  </div>
                  <Button type="submit">Invia correzione</Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="bg-brandivori-blue/20 rounded-lg p-8 mb-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-3">Altre modalità di contributo</h2>
              <p className="text-gray-600">Il progetto ha bisogno del tuo supporto per crescere</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="flex justify-center mb-4">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Newsletter</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Iscriviti alla newsletter per rimanere aggiornato sulle novità
                </p>
                <Input placeholder="La tua email" className="mb-2" />
                <Button variant="outline" className="w-full">Iscrivimi</Button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="flex justify-center mb-4">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Sostieni il progetto</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Aiutaci a mantenere Brandivori indipendente e gratuito
                </p>
                <Button className="w-full">Fai una donazione</Button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="flex justify-center mb-4">
                  <Flag className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Richiedi funzionalità</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Suggerisci nuove funzionalità per migliorare l'esperienza
                </p>
                <Button variant="outline" className="w-full">Invia suggerimento</Button>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Aggiornamenti di sviluppo</h2>
            <p className="mb-6">
              Segui i progressi del progetto e scopri le prossime funzionalità in arrivo
            </p>
            <div className="bg-white border rounded-lg p-4 max-w-xl mx-auto">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium">Ricerca avanzata per filtri</p>
                    <p className="text-sm text-gray-600">In sviluppo - Prevista per Giugno 2023</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium">Comparazione tra brand dello stesso settore</p>
                    <p className="text-sm text-gray-600">In pianificazione - Estate 2023</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium">App mobile per consultazione offline</p>
                    <p className="text-sm text-gray-600">Idea futura - Ancora da pianificare</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContributePage;


import { useState } from "react";
import Layout from "../components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Plus, Flag, Star, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const brandFormSchema = z.object({
  name: z.string().min(2, {
    message: "Il nome del brand deve avere almeno 2 caratteri",
  }),
  industry: z.string({
    required_error: "Seleziona un settore per il brand",
  }),
  description: z.string().optional(),
  owner: z.string().optional(),
  parent: z.string().optional(),
  logo: z.any().optional(),
  certifications: z.string().optional(),
  controversies: z.string().optional(),
});

type BrandFormValues = z.infer<typeof brandFormSchema>;

const ContributePage = () => {
  const { toast } = useToast();
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [submittedBrand, setSubmittedBrand] = useState<BrandFormValues | null>(null);

  const form = useForm<BrandFormValues>({
    resolver: zodResolver(brandFormSchema),
    defaultValues: {
      name: "",
      industry: "",
      description: "",
      owner: "",
      parent: "",
      certifications: "",
      controversies: "",
    },
  });

  function onSubmit(data: BrandFormValues) {
    console.log("Form submission:", data);
    // In a real implementation, this would save to your database
    setSubmittedBrand(data);
    setShowSuccessDialog(true);
    toast({
      title: "Brand inviato con successo!",
      description: "Grazie per il tuo contributo al database.",
    });
    form.reset();
  }

  const handleSimpleSubmit = (e: React.FormEvent) => {
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

          <div className="grid grid-cols-1 gap-8 mb-12">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Plus className="h-5 w-5 text-primary" />
                  <CardTitle>Aggiungi un brand al database</CardTitle>
                </div>
                <CardDescription>
                  Inserisci i dettagli di un brand da aggiungere al nostro database
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nome del brand *</FormLabel>
                            <FormControl>
                              <Input placeholder="Es. Nike, Nestlé, Patagonia" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="industry"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Settore *</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Seleziona un settore" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="food">Alimentare</SelectItem>
                                <SelectItem value="fashion">Moda e abbigliamento</SelectItem>
                                <SelectItem value="tech">Tecnologia</SelectItem>
                                <SelectItem value="beauty">Bellezza e cosmetica</SelectItem>
                                <SelectItem value="home">Casa e arredamento</SelectItem>
                                <SelectItem value="other">Altro</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Descrizione</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Breve descrizione del brand"
                              className="min-h-[100px]"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Inserisci una breve descrizione del brand e della sua storia
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="owner"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Proprietario</FormLabel>
                            <FormControl>
                              <Input placeholder="Es. Società privata, Pubblico" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="parent"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Gruppo/Azienda Madre</FormLabel>
                            <FormControl>
                              <Input placeholder="Es. LVMH, Unilever" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="logo"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Logo (URL)</FormLabel>
                          <FormControl>
                            <div className="flex gap-2">
                              <Input 
                                placeholder="URL del logo del brand" 
                                {...field}
                                value={field.value || ""}
                                onChange={(e) => field.onChange(e.target.value)}
                              />
                              <Button 
                                type="button" 
                                variant="outline" 
                                className="flex gap-2"
                              >
                                <Upload size={16} />
                                Carica
                              </Button>
                            </div>
                          </FormControl>
                          <FormDescription>
                            Inserisci l'URL di un logo esistente o carica un'immagine
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="certifications"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Certificazioni</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Es. B Corp, Fair Trade, Vegan"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Inserisci le certificazioni separate da virgole
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="controversies"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Controversie</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Eventuali controversie conosciute riguardanti il brand"
                              className="min-h-[100px]"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Inserisci una controversia per riga con fonti se possibile
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full md:w-auto">Invia brand</Button>
                  </form>
                </Form>
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
                <form onSubmit={handleSimpleSubmit} className="space-y-4">
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

          <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Brand inviato con successo!</DialogTitle>
                <DialogDescription>
                  Grazie per il tuo contributo al database di Brandivori. 
                  La tua segnalazione verrà esaminata dal nostro team.
                </DialogDescription>
              </DialogHeader>
              <div className="bg-brandivori-mint/20 p-4 rounded-md">
                {submittedBrand && (
                  <div className="space-y-2">
                    <p><strong>Nome:</strong> {submittedBrand.name}</p>
                    <p><strong>Settore:</strong> {submittedBrand.industry}</p>
                    {submittedBrand.owner && (
                      <p><strong>Proprietario:</strong> {submittedBrand.owner}</p>
                    )}
                  </div>
                )}
              </div>
              <DialogFooter>
                <Button onClick={() => setShowSuccessDialog(false)}>Chiudi</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

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


import Layout from "../components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const MissionPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">La nostra missione</h1>
          
          <div className="mb-8 text-center">
            <span className="text-6xl">🦊</span>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl mb-6 font-medium">
              "Vogliamo aiutare le persone a conoscere meglio i brand, per scegliere con più consapevolezza, 
              evitando la pubblicità ingannevole e capendo da chi stanno comprando davvero."
            </p>
            
            <div className="bg-brandivori-yellow/30 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-semibold mb-4">Perché Brandivori?</h2>
              <p className="mb-4">
                In un mondo dominato da grandi corporazioni e pubblicità pervasiva, è sempre più difficile 
                sapere chi c'è davvero dietro i prodotti che acquistiamo. Molte persone pensano di scegliere 
                piccoli brand indipendenti, quando in realtà stanno comprando da multinazionali tramite loro sussidiarie.
              </p>
              <p>
                Il nome "Brandivori" nasce proprio da qui: vogliamo "divorare" e analizzare i brand per rivelare 
                la loro vera natura e struttura, aiutando i consumatori a fare scelte più informate e consapevoli.
              </p>
            </div>
            
            <h2 className="text-2xl font-semibold mb-4">I nostri valori</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-brandivori-mint/40 p-5 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Trasparenza</h3>
                <p>
                  Crediamo che i consumatori abbiano diritto a informazioni chiare e accurate sui brand e le aziende 
                  da cui acquistano prodotti e servizi.
                </p>
              </div>
              
              <div className="bg-brandivori-blue/40 p-5 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Indipendenza</h3>
                <p>
                  Il nostro progetto è indipendente e non accetta finanziamenti da aziende o corporation per garantire 
                  un'analisi oggettiva e libera da conflitti di interesse.
                </p>
              </div>
              
              <div className="bg-brandivori-peach/40 p-5 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Comunità</h3>
                <p>
                  Brandivori è costruito con e per una comunità di consumatori consapevoli. Le vostre segnalazioni e 
                  contributi sono fondamentali per il nostro progetto.
                </p>
              </div>
              
              <div className="bg-brandivori-gray p-5 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Accessibilità</h3>
                <p>
                  Le informazioni devono essere accessibili a tutti, presentate in modo chiaro e comprensibile senza 
                  tecnicismi inutili o barriere.
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold mb-4">Cosa facciamo</h2>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li>Raccogliamo e organizziamo informazioni su brand e aziende</li>
              <li>Identifichiamo le relazioni tra marchi e le loro società madri</li>
              <li>Segnaliamo certificazioni etiche e ambientali</li>
              <li>Documentiamo controversie e problematiche rilevanti</li>
              <li>Pubblichiamo guide e articoli su consumo consapevole</li>
            </ul>
            
            <div className="bg-brandivori-blue/20 p-6 rounded-lg text-center">
              <h2 className="text-xl font-semibold mb-4">Unisciti a noi</h2>
              <p className="mb-4">
                Brandivori è un progetto collaborativo che cresce grazie ai contributi della sua comunità. 
                Se condividi la nostra visione, ci sono molti modi per partecipare.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
                <Button asChild>
                  <Link to="/contribute">Contribuisci al progetto</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/content">Esplora i contenuti</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MissionPage;

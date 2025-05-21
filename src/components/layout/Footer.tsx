
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brandivori-gray py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Brandivori</h3>
            <p className="text-sm text-gray-600 mb-4">
              Aiutiamo le persone a conoscere meglio i brand, per scegliere con più consapevolezza.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Collegamenti</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link></li>
              <li><Link to="/mission" className="text-gray-600 hover:text-gray-900">Missione</Link></li>
              <li><Link to="/content" className="text-gray-600 hover:text-gray-900">Contenuti</Link></li>
              <li><Link to="/contribute" className="text-gray-600 hover:text-gray-900">Contribuisci</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contatti</h3>
            <p className="text-sm text-gray-600">
              Hai domande o suggerimenti? <br />
              <a href="mailto:info@brandivori.it" className="text-primary hover:underline">info@brandivori.it</a>
            </p>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} Brandivori. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

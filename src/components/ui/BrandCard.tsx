
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export interface BrandInfo {
  name: string;
  logo?: string;
  owner?: string;
  parent?: string;
  industry?: string;
  facts?: string[];
  certifications?: string[];
  controversies?: string[];
}

interface BrandCardProps {
  brand: BrandInfo;
}

const BrandCard = ({ brand }: BrandCardProps) => {
  return (
    <Card className="w-full max-w-3xl mx-auto overflow-hidden">
      <CardHeader className="bg-brandivori-blue/20 flex flex-row items-center gap-4">
        {brand.logo && (
          <div className="flex-shrink-0 w-16 h-16 bg-white rounded-md flex items-center justify-center p-1 border">
            <img src={brand.logo} alt={brand.name} className="max-w-full max-h-full object-contain" />
          </div>
        )}
        <div>
          <CardTitle className="text-2xl">{brand.name}</CardTitle>
          <CardDescription>{brand.industry}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-2">Proprietà e struttura</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {brand.owner && (
              <div className="bg-brandivori-gray p-3 rounded-md">
                <p className="text-sm text-gray-500">Proprietario</p>
                <p className="font-medium">{brand.owner}</p>
              </div>
            )}
            {brand.parent && (
              <div className="bg-brandivori-gray p-3 rounded-md">
                <p className="text-sm text-gray-500">Parte del gruppo</p>
                <p className="font-medium">{brand.parent}</p>
              </div>
            )}
          </div>
        </div>

        {brand.facts && brand.facts.length > 0 && (
          <div>
            <h3 className="text-lg font-medium mb-2">Fatti notevoli</h3>
            <ul className="list-disc ml-5 space-y-1">
              {brand.facts.map((fact, index) => (
                <li key={index}>{fact}</li>
              ))}
            </ul>
          </div>
        )}

        {brand.certifications && brand.certifications.length > 0 && (
          <div>
            <h3 className="text-lg font-medium mb-2">Certificazioni</h3>
            <div className="flex flex-wrap gap-2">
              {brand.certifications.map((cert, index) => (
                <Badge key={index} variant="outline" className="bg-brandivori-mint/50">{cert}</Badge>
              ))}
            </div>
          </div>
        )}

        {brand.controversies && brand.controversies.length > 0 && (
          <div>
            <h3 className="text-lg font-medium mb-2">Controversie</h3>
            <div className="bg-brandivori-peach/30 p-4 rounded-lg">
              <ul className="list-disc ml-5 space-y-2">
                {brand.controversies.map((controversy, index) => (
                  <li key={index}>{controversy}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="text-sm text-gray-500 bg-gray-50">
        <p>Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}</p>
      </CardFooter>
    </Card>
  );
};

export default BrandCard;

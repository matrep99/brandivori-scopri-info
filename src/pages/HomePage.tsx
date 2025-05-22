
import { useState } from "react";
import Layout from "../components/layout/Layout";
import FoxAnimation from "../components/ui/FoxAnimation";
import SearchBar from "../components/ui/SearchBar";

const HomePage = () => {
  const [showSearch, setShowSearch] = useState(false);
  
  const handleFoxAnimationComplete = () => {
    setShowSearch(true);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col justify-center items-center min-h-[60vh]">
          <div className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden brand-gradient p-12 mb-8 shadow-lg">
            <h1 className="text-4xl font-bold text-white text-center mb-6">Scopri la verità sui brand</h1>
            <p className="text-white text-center mb-8 text-lg">Brandivori ti aiuta a fare scelte consapevoli</p>
            
            {!showSearch && (
              <FoxAnimation onAnimationComplete={handleFoxAnimationComplete} />
            )}
            
            <SearchBar isVisible={showSearch} />
          </div>
          
          {showSearch && (
            <div className="mt-16 text-center max-w-4xl w-full mx-auto animate-fade-in">
              <h2 className="text-xl mb-6 font-medium text-gray-800">Brandivori ti aiuta a scoprire:</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="bg-white p-6 rounded-lg shadow-lg card-hover border">
                  <p className="font-medium text-[#0071bc]">Chi possiede realmente i brand</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg card-hover border">
                  <p className="font-medium text-[#0071bc]">Certificazioni etiche</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg card-hover border">
                  <p className="font-medium text-[#0071bc]">Controversie rilevanti</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;


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
          {!showSearch && (
            <FoxAnimation onAnimationComplete={handleFoxAnimationComplete} />
          )}
          
          <SearchBar isVisible={showSearch} />
          
          {showSearch && (
            <div className="mt-16 text-center max-w-lg mx-auto animate-fade-in">
              <h2 className="text-xl mb-4 font-medium">Brandivori ti aiuta a scoprire:</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="bg-brandivori-mint/50 p-4 rounded-lg card-hover">
                  <p className="font-medium">Chi possiede realmente i brand</p>
                </div>
                <div className="bg-brandivori-yellow/50 p-4 rounded-lg card-hover">
                  <p className="font-medium">Certificazioni etiche</p>
                </div>
                <div className="bg-brandivori-peach/50 p-4 rounded-lg card-hover">
                  <p className="font-medium">Controversie rilevanti</p>
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

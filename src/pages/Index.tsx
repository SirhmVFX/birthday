
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CoverPage from "@/components/magazine/CoverPage";
import AboutPage from "@/components/magazine/AboutPage";
import MemoriesPage from "@/components/magazine/MemoriesPage";
import GalleryPage from "@/components/magazine/GalleryPage";
import WishesPage from "@/components/magazine/WishesPage";

const Index = () => {
  const [currentPage, setCurrentPage] = useState(0);
  
  const pages = [
    { component: CoverPage, title: "Cover" },
    { component: AboutPage, title: "About Her" },
    { component: GalleryPage, title: "Gallery" },
    { component: WishesPage, title: "Birthday Wishes" }
  ];

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const CurrentPageComponent = pages[currentPage].component;

  return (
    <div className="min-h-screen bg-gradient-to-br ">
      {/* Magazine Container */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Page Counter */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
              <span className="text-sm font-medium text-gray-600">
                Page {currentPage + 1} of {pages.length}
              </span>
              <div className="flex gap-1">
                {pages.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentPage ? "bg-pink-500" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Magazine Page */}
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden min-h-[80vh] relative">
            <CurrentPageComponent />
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-6">
            <Button
              onClick={prevPage}
              disabled={currentPage === 0}
              variant="outline"
              className="flex items-center gap-2 bg-white/80 backdrop-blur-sm hover:bg-pink-50"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>

            <div className="flex gap-2">
              {pages.map((page, index) => (
                <Button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  variant={currentPage === index ? "default" : "outline"}
                  size="sm"
                  className={`text-xs ${
                    currentPage === index
                      ? "bg-pink-500 hover:bg-pink-600"
                      : "bg-white/80 backdrop-blur-sm hover:bg-pink-50"
                  }`}
                >
                  {page.title}
                </Button>
              ))}
            </div>

            <Button
              onClick={nextPage}
              disabled={currentPage === pages.length - 1}
              variant="outline"
              className="flex items-center gap-2 bg-white/80 backdrop-blur-sm hover:bg-pink-50"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

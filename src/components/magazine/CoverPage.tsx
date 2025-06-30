
import { Gift, Star } from "lucide-react";

const CoverPage = () => {
  return (
    <div className="h-full bg-gradient-to-br from-red-500 via-purple-500  relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
        <div className="absolute top-32 right-16 w-32 h-32 bg-yellow-300/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-pink-300/40 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 right-10 w-16 h-16 bg-purple-300/30 rounded-full blur-lg"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute top-16 right-20 animate-bounce">
        <Star className="w-8 h-8 text-yellow-200 fill-current" />
      </div>
      <div className="absolute top-24 left-24 animate-pulse">
        <Gift className="w-6 h-6 text-pink-200" />
      </div>
      <div className="absolute bottom-24 right-32 animate-bounce delay-1000">
        <Star className="w-6 h-6 text-purple-200 fill-current" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 p-20 h-full flex flex-col items-center justify-center text-center px-8">
        <div className="mb-8">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-2 drop-shadow-lg">
            HAPPY BIRTHDAY AUNTY SHOLA
          </h1>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl max-w-md">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            SIMEON ADESOLA
          </h2>
          <h2 className="text-2xl md:text-3xl font-bold text-pink-600 mb-4">
            ABENI
          </h2>
          <p className="text-gray-600 text-lg font-medium">
            A Special Birthday Magazine
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Celebrating an Amazing Aunt
          </p>
        </div>

        <div className="mt-8 text-white text-center">
          <p className="text-xl font-semibold mb-2">
            "To the most wonderful aunt in the world"
          </p>
          <p className="text-lg opacity-90">
            With love and gratitude 💝
          </p>
        </div>
      </div>

      {/* Decorative Border */}
      <div className="absolute inset-0 border-8 border-white/20 rounded-lg"></div>
    </div>
  );
};

export default CoverPage;

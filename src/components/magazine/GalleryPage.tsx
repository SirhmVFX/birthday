
import { Star } from "lucide-react";

const GalleryPage = () => {
  const photoPlaceholders = [
    { id: 1, title: "Family Celebration", description: "Joy and laughter shared", image: "/img/2.jpeg" },
    { id: 2, title: "Aunt Abeni's Smile", description: "The warmth that lights up every room", image: "/img/3.jpeg" },
    { id: 3, title: "Giving Moments", description: "Always helping others", image: "/img/4.jpeg" },
  ];

  return (
    <div className="h-full bg-gradient-to-br from-purple-50 to-pink-50 p-8 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-8 h-8 text-purple-500 fill-current" />
            <h1 className="text-4xl font-bold text-gray-800">Photo Gallery</h1>
            <Star className="w-8 h-8 text-purple-500 fill-current" />
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A visual celebration of Aunt Abeni's beautiful life and the joy she brings to everyone around her.
          </p>
        </div>

        {/* Main Featured Photo */}
        <div className="mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-xl">
            <div className="aspect-video bg-gradient-to-br from-pink-200 to-purple-300 rounded-xl flex items-center justify-center mb-4">
              <img src="/img/1.jpeg" alt="Featured Photo" className="w-full h-full object-top object-cover rounded-xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 text-center">
              I love you
            </h3>
            <p className="text-gray-600 text-center mt-2">
              Every photo tells how stylish you are.
            </p>
          </div>
        </div>

        {/* Photo Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {photoPlaceholders.map((photo) => (
            <div key={photo.id} className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-square bg-gradient-to-br from-yellow-200 to-pink-300 rounded-lg flex items-center justify-center mb-3">
                <img src={photo.image} alt="Photo" className="w-full h-full object-cover rounded-lg" />
              </div>
              {/* <h4 className="font-bold text-gray-800 text-sm mb-1">{photo.title}</h4>
              <p className="text-gray-600 text-xs">{photo.description}</p> */}
            </div>
          ))}
        </div>

        {/* Gallery Message */}
        <div className="bg-gradient-to-r from-purple-200 to-pink-200 rounded-2xl p-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Pictures Worth a Thousand Memories
          </h2>
          {/* <p className="text-gray-700 leading-relaxed">
            Each photograph captures a moment, but together they tell the story of 
            an extraordinary woman who fills our lives with love, wisdom, and endless joy. 
            Aunt Abeni, you are truly picture perfect! 📸💝
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;

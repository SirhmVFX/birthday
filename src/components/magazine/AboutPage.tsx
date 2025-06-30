
import { Star } from "lucide-react";

const AboutPage = () => {
  const qualities = [
    {
      title: "Role Model",
      description: "You inspire me",
      color: "bg-pink-100 text-pink-800"
    },
    {
      title: "Provider",
      description: "Always giving from your heart, no matter how little",
      color: "bg-purple-100 text-purple-800"
    },
    {
      title: "Caring",
      description: "Your love and care knows no bounds",
      color: "bg-yellow-100 text-yellow-800"
    },
    {
      title: "Respectful",
      description: "You command respect through your actions and character",
      color: "bg-green-100 text-green-800"
    },
    {
      title: "Generous",
      description: "Your generosity touches everyone",
      color: "bg-blue-100 text-blue-800"
    },
    {
      title: "Strong",
      description: "Your inner strength is an inspiration ",
      color: "bg-indigo-100 text-indigo-800"
    }
  ];

  return (
    <div className="h-full bg-gradient-to-br from-pink-50 to-purple-50 p-8">
      <div className="max-w-4xl mx-auto h-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-8 h-8 text-pink-500 fill-current" />
            <h1 className="text-4xl font-bold text-gray-800">About Aunty Shola</h1>
            <Star className="w-8 h-8 text-pink-500 fill-current" />
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Meet Aunty SIMEON ADESOLA ABENI - a woman of incredible character, 
            endless love, and unwavering strength. She is not just an aunt, 
            but a beacon of hope and inspiration.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-pink-600 mb-4">
              Why I Look Up To You
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                In a world that often feels uncertain, you stand as a pillar of 
                love. Your life is a testament to resilience, 
                kindness, and the power of unconditional love.
              </p>
              {/* <p className="leading-relaxed">
                You have shown me what it means to be selfless, to give even when 
                you have little, and to always put family first. Your actions 
                speak louder than words, and they have shaped who I am today.
              </p> */}
              <p className="leading-relaxed font-medium text-pink-600">
                "A role model is someone whose footsteps you'd be proud to follow, 
                and yours lead to love, strength, and endless possibility."
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-purple-600 mb-4">
              Your Beautiful Qualities
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {qualities.map((quality, index) => (
                <div
                  key={index}
                  className={`${quality.color} rounded-lg p-3 text-center transition-transform hover:scale-105`}
                >
                  <h3 className="font-bold text-sm mb-1">{quality.title}</h3>
                  <p className="text-xs leading-tight">{quality.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="bg-gradient-to-r from-pink-200 to-purple-200 rounded-2xl p-6 text-center">
          <blockquote className="text-2xl font-bold text-gray-800 mb-2">
            "Aunty Shola, you are the definition of love in action"
          </blockquote>
          <p className="text-gray-600 italic">
            Your little girl who adores you beyond words ❤️
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;


import { Gift, Star } from "lucide-react";

const WishesPage = () => {
  const wishes = [
    "May this new year bring you abundant joy and happiness 🌟",
    "May your health remain strong and your spirit forever young 💪",
    "May all your dreams and aspirations come to fruition 🌈",
    "May you be surrounded by love, laughter, and family always 👨‍👩‍👧‍👦",
    "May your generous heart continue to be blessed abundantly 💝",
    "May peace and contentment fill every day of your life 🕊️",
    "May you see the beautiful impact you have on everyone around you 🌸",
    "May this birthday be the beginning of your best year yet! 🎂"
  ];

  return (
    <div className="h-full bg-gradient-to-br from-purple-100 to-purple-100 p-8 overflow-y-auto relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-4 h-4 bg-pink-300 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-6 h-6 bg-yellow-300 rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 left-16 w-5 h-5 bg-purple-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-4 h-4 bg-green-300 rounded-full animate-bounce"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Gift className="w-10 h-10 text-yellow-500" />
            <h1 className="text-5xl font-bold text-gray-800">Birthday Wishes</h1>
            <Gift className="w-10 h-10 text-yellow-500" />
          </div>
          <p className="text-2xl text-gray-600 font-medium">
           For you aunty shola
          </p>
        </div>

        {/* Main Birthday Message */}
        <div className="bg-white rounded-3xl p-8 shadow-2xl mb-8 border-4 border-yellow-200">
          <div className="text-center mb-6">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-4xl font-bold text-pink-600 mb-4">
              HAPPY BIRTHDAY!
            </h2>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              AUNTY SHOLA
            </h3>
            <p className="text-xl text-gray-600">
              Today we celebrate YOU and all the joy you bring to our lives!
            </p>
          </div>

          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 mb-6">
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              On this special day, we want you to know how much you mean to us. 
              Your birthday isn't just a celebration of another year - it's a 
              celebration of the incredible woman you are and all the lives you've touched.
            </p>
          </div>
        </div>

        {/* Birthday Wishes Grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {wishes.map((wish, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 shadow-lg border-2 border-yellow-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-yellow-500 fill-current mt-1 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed">{wish}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Final Birthday Message */}
        <div className="bg-gradient-to-r from-pink-300 via-purple-300 to-yellow-300 rounded-3xl p-8 text-center shadow-2xl">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Make a Wish! 🌟
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Aunt Shola, as you blow out your candles today, know that we're all 
              wishing for your happiness, health, and continued blessings. You deserve 
              all the wonderful things life has to offer!
            </p>
            <div className="text-4xl mb-4">🎂✨🎈🎁🎊</div>
            <p className="text-xl font-bold text-pink-600">
              Here's to another year of being absolutely amazing!
            </p>
            <p className="text-lg text-gray-600 mt-2">
              With love, respect, and endless appreciation ❤️
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishesPage;

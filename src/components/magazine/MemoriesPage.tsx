
import { Star } from "lucide-react";

const MemoriesPage = () => {
  const memories = [
    {
      title: "The Provider's Heart",
      story: "I remember when you gave me your last bit of money for school supplies, even though you needed it yourself. That moment taught me what true sacrifice looks like.",
      emotion: "Gratitude",
      color: "bg-pink-100 border-pink-300"
    },
    {
      title: "Words of Wisdom",
      story: "Every conversation with you is a lesson. Your advice has guided me through difficult times and helped me make better decisions.",
      emotion: "Wisdom",
      color: "bg-purple-100 border-purple-300"
    },
    {
      title: "The Encourager",
      story: "When I doubted myself, you were there to remind me of my worth. Your belief in me gave me the strength to keep going.",
      emotion: "Inspiration",
      color: "bg-yellow-100 border-yellow-300"
    },
    {
      title: "Family Gatherings",
      story: "Your laughter fills every room, and your presence makes every family gathering special. You bring joy wherever you go.",
      emotion: "Joy",
      color: "bg-green-100 border-green-300"
    },
    {
      title: "Acts of Kindness",
      story: "The countless small acts of kindness - a warm meal, a listening ear, a helping hand - they all add up to show your beautiful heart.",
      emotion: "Love",
      color: "bg-blue-100 border-blue-300"
    },
    {
      title: "Life Lessons",
      story: "You taught me that respect is earned through actions, that kindness costs nothing, and that family is everything. These lessons shape who I am.",
      emotion: "Growth",
      color: "bg-indigo-100 border-indigo-300"
    }
  ];

  return (
    <div className="h-full bg-gradient-to-br from-yellow-50 to-pink-50 p-8 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-8 h-8 text-yellow-500 fill-current" />
            <h1 className="text-4xl font-bold text-gray-800">Precious Memories</h1>
            <Star className="w-8 h-8 text-yellow-500 fill-current" />
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every moment with you is a treasure. Here are some of the memories 
            that hold a special place in my heart.
          </p>
        </div>

        {/* Memories Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {memories.map((memory, index) => (
            <div
              key={index}
              className={`${memory.color} border-2 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-800">{memory.title}</h3>
                <span className="text-sm font-medium px-3 py-1 bg-white/70 rounded-full text-gray-700">
                  {memory.emotion}
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm">
                {memory.story}
              </p>
            </div>
          ))}
        </div>

        {/* Special Message */}
        <div className="bg-gradient-to-r from-pink-200 via-purple-200 to-yellow-200 rounded-2xl p-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Every Memory is a Gift
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto">
            Aunt Abeni, these memories are not just moments in time - they are 
            the building blocks of the person I'm becoming. Each one carries 
            your love, your wisdom, and your incredible spirit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MemoriesPage;

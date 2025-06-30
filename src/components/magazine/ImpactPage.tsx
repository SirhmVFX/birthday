
import { Star } from "lucide-react";

const ImpactPage = () => {
  const impacts = [
    {
      category: "Personal Growth",
      points: [
        "Taught me the value of hard work and perseverance",
        "Showed me how to be respectful and kind to others",
        "Inspired me to always help those in need",
        "Demonstrated the power of staying positive in tough times"
      ],
      icon: "🌱",
      color: "bg-green-100 border-green-300"
    },
    {
      category: "Family Values",
      points: [
        "Brought our family closer together through love and care",
        "Created lasting traditions and beautiful memories",
        "Showed us what unconditional love really means",
        "Built bridges and healed relationships within the family"
      ],
      icon: "👨‍👩‍👧‍👦",
      color: "bg-blue-100 border-blue-300"
    },
    {
      category: "Life Lessons",
      points: [
        "Money isn't everything - love and relationships matter most",
        "Even small acts of kindness can change someone's day",
        "Respect is earned through consistent good character",
        "True strength comes from helping others, not just yourself"
      ],
      icon: "📚",
      color: "bg-purple-100 border-purple-300"
    },
    {
      category: "Community Impact",
      points: [
        "Touched countless lives through her generosity",
        "Became a role model for younger family members",
        "Showed neighbors what good character looks like",
        "Created a ripple effect of kindness in our community"
      ],
      icon: "🏘️",
      color: "bg-yellow-100 border-yellow-300"
    }
  ];

  return (
    <div className="h-full bg-gradient-to-br from-green-50 to-blue-50 p-8 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-8 h-8 text-green-500 fill-current" />
            <h1 className="text-4xl font-bold text-gray-800">Your Amazing Impact</h1>
            <Star className="w-8 h-8 text-green-500 fill-current" />
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Aunt Abeni, your influence extends far beyond what you can see. 
            Here's how you've changed lives and made the world a better place.
          </p>
        </div>

        {/* Impact Categories */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {impacts.map((impact, index) => (
            <div
              key={index}
              className={`${impact.color} border-2 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{impact.icon}</span>
                <h3 className="text-xl font-bold text-gray-800">{impact.category}</h3>
              </div>
              <ul className="space-y-2">
                {impact.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start gap-2 text-gray-700">
                    <Star className="w-4 h-4 text-green-500 fill-current mt-0.5 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Impact Statistics */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            The Numbers Don't Lie
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-pink-50 rounded-lg">
              <div className="text-3xl font-bold text-pink-600">∞</div>
              <div className="text-sm text-gray-600">Lives Touched</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-3xl font-bold text-purple-600">100%</div>
              <div className="text-sm text-gray-600">Love Given</div>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <div className="text-3xl font-bold text-yellow-600">24/7</div>
              <div className="text-sm text-gray-600">Always There</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600">1st</div>
              <div className="text-sm text-gray-600">In Our Hearts</div>
            </div>
          </div>
        </div>

        {/* Final Impact Message */}
        <div className="bg-gradient-to-r from-green-200 via-blue-200 to-purple-200 rounded-2xl p-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            A Legacy of Love
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto">
            Aunt Abeni, your impact is immeasurable. You've shaped hearts, 
            changed minds, and created a legacy of love that will continue 
            for generations. You are truly irreplaceable! 💎
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImpactPage;

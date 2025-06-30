
import { Star } from "lucide-react";

const ThankYouPage = () => {
  return (
    <div className="h-full bg-gradient-to-br from-pink-50 to-yellow-50 p-8 overflow-y-auto">
      <div className="max-w-3xl mx-auto h-full flex flex-col justify-center">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-8 h-8 text-pink-500 fill-current" />
            <h1 className="text-4xl font-bold text-gray-800">Thank You, Aunt Abeni</h1>
            <Star className="w-8 h-8 text-pink-500 fill-current" />
          </div>
        </div>

        {/* Main Thank You Letter */}
        <div className="bg-white rounded-2xl p-8 shadow-xl mb-6">
          <div className="prose prose-lg max-w-none">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-pink-600 mb-2">
                A Letter From My Heart
              </h2>
              <p className="text-gray-500 italic">To the most amazing aunt in the world</p>
            </div>

            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                <span className="font-bold text-pink-600">Dear Aunt Abeni,</span>
              </p>

              <p className="leading-relaxed">
                Words cannot fully express the gratitude that fills my heart when I think of you. 
                You are so much more than an aunt to me - you are my role model, my inspiration, 
                and one of the most important people in my life.
              </p>

              <p className="leading-relaxed">
                Thank you for being my provider in ways both big and small. Even when you had 
                very little, you always found a way to give. Your generosity has taught me that 
                true wealth isn't measured in money, but in the love we share and the lives we touch.
              </p>

              <p className="leading-relaxed">
                Thank you for being someone I can look up to. Your strength, wisdom, and character 
                have shown me what it means to be a good person. Every decision I make, I think 
                about the values you've instilled in me.
              </p>

              <p className="leading-relaxed">
                Thank you for respecting me and teaching me to respect others. You've shown me 
                that respect is earned through consistency, kindness, and staying true to your word. 
                Your example has shaped how I treat everyone I meet.
              </p>

              <p className="leading-relaxed">
                Thank you for being you - authentic, caring, strong, and loving. You make our 
                family better, our gatherings brighter, and our lives infinitely richer.
              </p>

              <p className="leading-relaxed font-medium text-pink-600">
                I respect you so, so much, Aunt Abeni. More than you'll ever know.
              </p>

              <p className="text-lg leading-relaxed">
                <span className="font-bold">With all my love and endless gratitude,</span><br />
                <span className="italic text-pink-600">Your loving nephew/niece</span>
              </p>
            </div>
          </div>
        </div>

        {/* Gratitude Highlights */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-pink-100 rounded-xl p-4 text-center">
            <div className="text-2xl mb-2">💝</div>
            <h3 className="font-bold text-pink-800">For Your Love</h3>
            <p className="text-sm text-pink-700">Unconditional and endless</p>
          </div>
          <div className="bg-purple-100 rounded-xl p-4 text-center">
            <div className="text-2xl mb-2">🌟</div>
            <h3 className="font-bold text-purple-800">For Your Example</h3>
            <p className="text-sm text-purple-700">A guiding light always</p>
          </div>
          <div className="bg-yellow-100 rounded-xl p-4 text-center">
            <div className="text-2xl mb-2">🙏</div>
            <h3 className="font-bold text-yellow-800">For Everything</h3>
            <p className="text-sm text-yellow-700">More than words can say</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;

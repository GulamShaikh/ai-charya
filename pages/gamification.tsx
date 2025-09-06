import Link from 'next/link';
import { useState } from 'react';

export default function Gamification() {
  const [selectedGame, setSelectedGame] = useState(0);

  const gameFeatures = [
    {
      title: "Flipcards",
      description: "Encourage anticipation and active recall with interactive reveal mechanics",
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=500&h=300&fit=crop&crop=center",
      dynamics: ["Exploration", "Surprise", "Progression", "Curiosity", "Feedback Loops"],
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Timed Challenges",
      description: "Race against the clock to boost excitement and focus",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop&crop=center",
      dynamics: ["Time Pressure", "Achievement", "Competition", "Challenge & Mastery"],
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Achievement Badges",
      description: "Visual rewards that motivate and acknowledge student progress",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&h=300&fit=crop&crop=center",
      dynamics: ["Progression", "Achievement", "Acknowledgement"],
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Leaderboards",
      description: "Friendly competition that builds community and motivation",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop&crop=center",
      dynamics: ["Competition", "Social Status", "Community"],
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Interactive Stories",
      description: "Narrative-based learning with branching paths and choices",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=300&fit=crop&crop=center",
      dynamics: ["Narrative", "Progression", "Curiosity", "Feedback Loops"],
      color: "from-indigo-500 to-purple-600"
    },
    {
      title: "Hidden Content",
      description: "Discovery-based learning with click-to-reveal mechanics",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=300&fit=crop&crop=center",
      dynamics: ["Exploration", "Curiosity", "Surprise"],
      color: "from-pink-500 to-rose-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/landing" className="flex items-center space-x-2">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/3048/3048425.png" 
                alt="AI-Charya" 
                className="h-8 w-8"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                AI-Charya
              </span>
            </Link>
            <div className="flex space-x-6">
              <Link href="/landing" className="hover:text-cyan-400 transition-colors">Home</Link>
              <Link href="/features" className="hover:text-cyan-400 transition-colors">Features</Link>
              <Link href="/gamification" className="text-cyan-400">Gamification</Link>
              <Link href="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link>
              <Link href="/login" className="bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-2 rounded-lg">Login</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-500/20 via-purple-600/20 to-pink-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Gamification Platform
            </span>
            <br />
            <span className="text-white">Engage and Connect with Gameplay</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Boost motivation and learning with proven game mechanics. 
            Explore interactive activities that make education addictive and fun.
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105">
            🔊 Switch on sound for immersive experience
          </button>
        </div>
      </section>

      {/* Game Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Boost Motivation with 
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"> Game Mechanics</span>
            </h2>
            <p className="text-xl text-gray-400">
              Explore some of the activities you can create in AI-Charya. Click to play and see how it works!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gameFeatures.map((feature, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onClick={() => setSelectedGame(index)}
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${feature.color} opacity-60 group-hover:opacity-70 transition-opacity`}></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <div className="flex flex-wrap gap-1">
                      {feature.dynamics.slice(0, 2).map((dynamic, idx) => (
                        <span key={idx} className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-white">
                          {dynamic}
                        </span>
                      ))}
                      {feature.dynamics.length > 2 && (
                        <span className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-white">
                          +{feature.dynamics.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Game Details */}
      {selectedGame !== null && (
        <section className="py-20 bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{gameFeatures[selectedGame].title}</h2>
              <p className="text-xl text-gray-300 mb-6">{gameFeatures[selectedGame].description}</p>
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                <span className="text-sm text-gray-400 mr-2">Game dynamics:</span>
                {gameFeatures[selectedGame].dynamics.map((dynamic, idx) => (
                  <span key={idx} className="text-sm bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full">
                    {dynamic}
                  </span>
                ))}
              </div>
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105">
                Try This Game Mechanic
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Competition Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500/10 to-pink-600/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Live Leaderboards
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Who will take the top spot on the podium? The live leaderboard introduces 
                game dynamics like competition, social status, and community into the mix.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Encourage friendly competition between participants
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Real-time audience responses and live feedback
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Play live or asynchronous - compare responses with others
                </li>
              </ul>
              <Link 
                href="/leaderboard" 
                className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
              >
                View Live Leaderboard
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&crop=center"
                alt="Leaderboard"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Gamify Your Learning?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start creating engaging, game-based learning experiences that students can't put down.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/signup" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
            >
              Get Started Free
            </Link>
            <Link 
              href="/dashboard" 
              className="border border-gray-600 hover:border-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:bg-gray-800"
            >
              Try Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

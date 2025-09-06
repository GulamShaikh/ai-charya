import Link from 'next/link';
import { useState } from 'react';

export default function Features() {
  const [selectedFeature, setSelectedFeature] = useState(0);

  const features = [
    {
      title: "Adaptive Learning Engine",
      description: "AI-powered system that adapts to each student's learning pace and style",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop&crop=center",
      details: [
        "Real-time competence assessment",
        "Engagement level detection", 
        "Personalized content delivery",
        "Learning path optimization"
      ]
    },
    {
      title: "Gamification System",
      description: "Engaging game mechanics that boost motivation and retention",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&h=300&fit=crop&crop=center",
      details: [
        "Achievement badges and rewards",
        "Progress tracking and milestones",
        "Leaderboards and competitions",
        "Celebration animations"
      ]
    },
    {
      title: "Interactive Activities",
      description: "Rich, multimedia learning experiences with immediate feedback",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&h=300&fit=crop&crop=center",
      details: [
        "Multiple choice questions",
        "Drag and drop exercises",
        "Fill-in-the-blank activities",
        "Interactive simulations"
      ]
    },
    {
      title: "Analytics Dashboard",
      description: "Comprehensive insights into learning progress and performance",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&crop=center",
      details: [
        "Learning analytics",
        "Performance metrics",
        "Progress reports",
        "Educator insights"
      ]
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
              <Link href="/features" className="text-cyan-400">Features</Link>
              <Link href="/gamification" className="hover:text-cyan-400 transition-colors">Gamification</Link>
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
              Powerful Features
            </span>
            <br />
            <span className="text-white">for Adaptive Learning</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how AI-Charya revolutionizes education with cutting-edge technology 
            and proven pedagogical approaches.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Feature Navigation */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg border cursor-pointer transition-all duration-300 ${
                    selectedFeature === index
                      ? 'border-cyan-500 bg-cyan-500/10'
                      : 'border-gray-700 hover:border-gray-600'
                  }`}
                  onClick={() => setSelectedFeature(index)}
                >
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                  {selectedFeature === index && (
                    <ul className="mt-4 space-y-2">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-cyan-400">
                          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Feature Image */}
            <div className="relative">
              <img
                src={features[selectedFeature].image}
                alt={features[selectedFeature].title}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience These Features Today
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your journey with AI-powered adaptive learning and see the difference it makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/signup" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
            >
              Try It Free
            </Link>
            <Link 
              href="/dashboard" 
              className="border border-gray-600 hover:border-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:bg-gray-800"
            >
              View Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

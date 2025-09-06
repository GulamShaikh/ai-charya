import Link from 'next/link';
import { useState } from 'react';

export default function Templates() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const templates = [
    {
      id: 1,
      title: "Math Fractions Escape Room",
      description: "An interactive escape room where students solve fraction problems to escape",
      category: "escape-room",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop&crop=center",
      difficulty: "Grade 5",
      duration: "15 min",
      features: ["Gamification", "Problem Solving", "Timed Challenges"]
    },
    {
      id: 2,
      title: "Science Lab Quiz Game",
      description: "Interactive quiz with animations and instant feedback for science concepts",
      category: "quiz",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=250&fit=crop&crop=center",
      difficulty: "Grade 6-8",
      duration: "10 min",
      features: ["Animations", "Instant Feedback", "Visual Learning"]
    },
    {
      id: 3,
      title: "Language Arts Memory Game",
      description: "Matching game for vocabulary building with progressive difficulty",
      category: "memory-game",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop&crop=center",
      difficulty: "Grade 3-5",
      duration: "8 min",
      features: ["Memory Training", "Vocabulary", "Progressive Difficulty"]
    },
    {
      id: 4,
      title: "History Timeline Explorer",
      description: "Interactive timeline with drag-and-drop activities and hidden content",
      category: "interactive",
      image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=400&h=250&fit=crop&crop=center",
      difficulty: "Grade 7-9",
      duration: "20 min",
      features: ["Timeline", "Drag & Drop", "Discovery Learning"]
    },
    {
      id: 5,
      title: "Coding Logic Puzzle",
      description: "Programming concepts taught through visual puzzles and challenges",
      category: "puzzle",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=250&fit=crop&crop=center",
      difficulty: "Grade 6+",
      duration: "25 min",
      features: ["Logic", "Programming", "Problem Solving"]
    },
    {
      id: 6,
      title: "Geography Adventure",
      description: "Explore world geography through an interactive map adventure",
      category: "adventure",
      image: "https://images.unsplash.com/photo-1564060108909-2e1a0f12cdcf?w=400&h=250&fit=crop&crop=center",
      difficulty: "Grade 4-7",
      duration: "18 min",
      features: ["Interactive Maps", "Cultural Learning", "Exploration"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Templates', count: templates.length },
    { id: 'escape-room', name: 'Escape Rooms', count: templates.filter(t => t.category === 'escape-room').length },
    { id: 'quiz', name: 'Quizzes', count: templates.filter(t => t.category === 'quiz').length },
    { id: 'memory-game', name: 'Memory Games', count: templates.filter(t => t.category === 'memory-game').length },
    { id: 'interactive', name: 'Interactive Content', count: templates.filter(t => t.category === 'interactive').length },
    { id: 'puzzle', name: 'Puzzles', count: templates.filter(t => t.category === 'puzzle').length },
    { id: 'adventure', name: 'Adventures', count: templates.filter(t => t.category === 'adventure').length }
  ];

  const filteredTemplates = selectedCategory === 'all' 
    ? templates 
    : templates.filter(template => template.category === selectedCategory);

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
              <Link href="/gamification" className="hover:text-cyan-400 transition-colors">Gamification</Link>
              <Link href="/templates" className="text-cyan-400">Templates</Link>
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
              Learning Templates
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Ready-made gamified learning templates that you can customize for your classroom. 
            Professional designs with sound effects, animations, and interactive elements included.
          </p>
          <Link 
            href="/signup" 
            className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
          >
            Start Creating
          </Link>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTemplates.map((template) => (
              <div
                key={template.id}
                className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-cyan-500 transition-all duration-300 transform hover:scale-105"
              >
                {/* Template Image */}
                <div className="relative">
                  <img
                    src={template.image}
                    alt={template.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-cyan-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {template.difficulty}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-gray-900/80 text-white px-2 py-1 rounded-full text-xs">
                      {template.duration}
                    </span>
                  </div>
                </div>

                {/* Template Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{template.title}</h3>
                  <p className="text-gray-400 mb-4">{template.description}</p>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {template.features.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <button className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-4 py-2 rounded-lg font-medium transition-all duration-200">
                      Use Template
                    </button>
                    <button className="px-4 py-2 border border-gray-600 hover:border-cyan-400 rounded-lg transition-colors">
                      Preview
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-gray-800 hover:bg-gray-700 px-8 py-3 rounded-lg border border-gray-600 hover:border-cyan-400 transition-all duration-200">
              Load More Templates
            </button>
          </div>
        </div>
      </section>

      {/* Create Your Own Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Can't Find What You Need?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Create your own gamified learning experience from scratch using our powerful editor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/signup" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
            >
              Start Creating
            </Link>
            <Link 
              href="/features" 
              className="border border-gray-600 hover:border-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:bg-gray-800"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

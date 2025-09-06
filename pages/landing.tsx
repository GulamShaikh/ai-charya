import { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Landing() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation Header */}
      <nav className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/3048/3048425.png" 
                  alt="AI-Charya" 
                  className="h-8 w-8"
                />
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  AI-Charya
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/features" className="hover:text-cyan-400 transition-colors">Features</Link>
                <Link href="/gamification" className="hover:text-cyan-400 transition-colors">Gamification</Link>
                <Link href="/templates" className="hover:text-cyan-400 transition-colors">Templates</Link>
                <Link href="/pricing" className="hover:text-cyan-400 transition-colors">Pricing</Link>
                <Link href="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link>
              </div>
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link 
                href="/login" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                Sign In
              </Link>
              <Link 
                href="/signup" 
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-4 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
              >
                Get Started Free
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-400 hover:text-white"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
              <Link href="/features" className="block px-3 py-2 text-base font-medium hover:text-cyan-400">Features</Link>
              <Link href="/gamification" className="block px-3 py-2 text-base font-medium hover:text-cyan-400">Gamification</Link>
              <Link href="/templates" className="block px-3 py-2 text-base font-medium hover:text-cyan-400">Templates</Link>
              <Link href="/pricing" className="block px-3 py-2 text-base font-medium hover:text-cyan-400">Pricing</Link>
              <Link href="/contact" className="block px-3 py-2 text-base font-medium hover:text-cyan-400">Contact</Link>
              <div className="border-t border-gray-700 pt-4">
                <Link href="/login" className="block px-3 py-2 text-base font-medium hover:text-cyan-400">Sign In</Link>
                <Link href="/signup" className="block px-3 py-2 text-base font-medium bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mt-2">Get Started Free</Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-600/20 to-pink-500/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                AI-Powered Adaptive Learning
              </span>
              <br />
              <span className="text-white">That Engages Every Student</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create immersive, gamified learning experiences with our adaptive AI engine. 
              Personalized micro-lessons that adapt to each student's learning style and pace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/signup" 
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
              >
                Start Learning Free
              </Link>
              <Link 
                href="/dashboard" 
                className="border border-gray-600 hover:border-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:bg-gray-800"
              >
                Try Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Boost Motivation with 
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"> Game Mechanics</span>
            </h2>
            <p className="text-xl text-gray-400">Explore adaptive learning activities that use proven gamification strategies</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-purple-600/10 rounded-lg p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                <img src="https://cdn-icons-png.flaticon.com/512/3179/3179068.png" alt="Adaptive Learning" className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Adaptive Micro-Sessions</h3>
              <p className="text-gray-400">10-minute personalized sessions that detect engagement and mastery levels</p>
              <div className="mt-4 text-sm text-cyan-400">Game dynamics: Progression, Achievement, Mastery</div>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-600/10 rounded-lg p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg mb-4 flex items-center justify-center">
                <img src="https://cdn-icons-png.flaticon.com/512/3094/3094837.png" alt="Real-time Feedback" className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Instant Feedback</h3>
              <p className="text-gray-400">Visual cues, celebrations, and immediate correction guidance</p>
              <div className="mt-4 text-sm text-purple-400">Game dynamics: Feedback Loops, Achievement, Acknowledgement</div>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-gradient-to-br from-pink-500/10 to-cyan-600/10 rounded-lg p-6 border border-gray-700 hover:border-pink-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-cyan-600 rounded-lg mb-4 flex items-center justify-center">
                <img src="https://cdn-icons-png.flaticon.com/512/2936/2936719.png" alt="Leaderboards" className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Live Leaderboards</h3>
              <p className="text-gray-400">Friendly competition and community engagement across all learners</p>
              <div className="mt-4 text-sm text-pink-400">Game dynamics: Competition, Social Status, Community</div>
            </div>

            {/* Feature Card 4 */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-purple-600/10 rounded-lg p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                <img src="https://cdn-icons-png.flaticon.com/512/2936/2936878.png" alt="Progress Tracking" className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
              <p className="text-gray-400">Detailed analytics and milestone celebrations with PDF reports</p>
              <div className="mt-4 text-sm text-cyan-400">Game dynamics: Progression, Achievement, Unlockables</div>
            </div>

            {/* Feature Card 5 */}
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-600/10 rounded-lg p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg mb-4 flex items-center justify-center">
                <img src="https://cdn-icons-png.flaticon.com/512/3048/3048425.png" alt="AI Intelligence" className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered Adaptation</h3>
              <p className="text-gray-400">Smart algorithms that understand learning patterns and optimize content</p>
              <div className="mt-4 text-sm text-purple-400">Game dynamics: Personalization, Challenge & Mastery</div>
            </div>

            {/* Feature Card 6 */}
            <div className="bg-gradient-to-br from-pink-500/10 to-cyan-600/10 rounded-lg p-6 border border-gray-700 hover:border-pink-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-cyan-600 rounded-lg mb-4 flex items-center justify-center">
                <img src="https://cdn-icons-png.flaticon.com/512/3179/3179068.png" alt="Interactive Learning" className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Interactive Activities</h3>
              <p className="text-gray-400">Drag-and-drop, matching games, and multimedia-rich content</p>
              <div className="mt-4 text-sm text-pink-400">Game dynamics: Exploration, Curiosity, Surprise</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-purple-600/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Learning Experience?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of educators and students who are already experiencing the power of adaptive, gamified learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/signup" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
            >
              Get Started Free
            </Link>
            <Link 
              href="/contact" 
              className="border border-gray-600 hover:border-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:bg-gray-800"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

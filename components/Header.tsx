import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-gray-900/95 backdrop-blur-sm text-white shadow-lg border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/home" className="hover:text-cyan-400 transition-colors">Practice</Link>
            <Link href="/session" className="hover:text-cyan-400 transition-colors">Session</Link>
            <Link href="/dashboard" className="hover:text-cyan-400 transition-colors">Dashboard</Link>
            <Link href="/leaderboard" className="hover:text-cyan-400 transition-colors">Leaderboard</Link>
            <Link href="/features" className="hover:text-cyan-400 transition-colors">Features</Link>
          </nav>

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
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-white p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800 rounded-lg mt-2">
              <Link href="/home" className="block px-3 py-2 text-base font-medium hover:text-cyan-400 hover:bg-gray-700 rounded-md">Practice</Link>
              <Link href="/session" className="block px-3 py-2 text-base font-medium hover:text-cyan-400 hover:bg-gray-700 rounded-md">Session</Link>
              <Link href="/dashboard" className="block px-3 py-2 text-base font-medium hover:text-cyan-400 hover:bg-gray-700 rounded-md">Dashboard</Link>
              <Link href="/leaderboard" className="block px-3 py-2 text-base font-medium hover:text-cyan-400 hover:bg-gray-700 rounded-md">Leaderboard</Link>
              <Link href="/features" className="block px-3 py-2 text-base font-medium hover:text-cyan-400 hover:bg-gray-700 rounded-md">Features</Link>
              <div className="border-t border-gray-700 pt-4">
                <Link href="/login" className="block px-3 py-2 text-base font-medium hover:text-cyan-400 hover:bg-gray-700 rounded-md">Sign In</Link>
                <Link href="/signup" className="block px-3 py-2 text-base font-medium bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mt-2">Get Started</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

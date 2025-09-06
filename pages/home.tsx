import ActivityList from '../components/ActivityList';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Animated vibrant gradient background */}
      <div className="absolute inset-0 -z-10 animate-gradient bg-[linear-gradient(135deg,_#43e97b_0%,_#38f9d7_25%,_#fa8bff_50%,_#fda085_75%,_#f6d365_100%)] opacity-80"></div>
      <Header />
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          {/* Modern education-themed SVG icon */}
          <div className="flex justify-center mb-6">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="64" height="64" rx="16" fill="#38f9d7"/>
              <path d="M20 44V36C20 33.7909 21.7909 32 24 32H40C42.2091 32 44 33.7909 44 36V44" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="32" cy="24" r="8" fill="#fff"/>
              <path d="M32 20V28" stroke="#38f9d7" strokeWidth="2" strokeLinecap="round"/>
              <path d="M28 24H36" stroke="#38f9d7" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <ActivityList />
        </div>
      </main>
      <Footer />
    </div>
  );
}

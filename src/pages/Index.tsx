import { useEffect, useState } from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import SearchBar from '@/components/SearchBar';
import QuickLinks from '@/components/QuickLinks';
import logoMain from '@/assets/logo-main.jpg';
import unisphereIcon from '@/assets/unisphere-icon.png';

const Index = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      
      {/* Header with logo */}
      <header className="fixed top-0 left-0 right-0 z-50 p-6">
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 animate-float">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-xl opacity-40 blur-lg animate-glow" />
            <img
              src={unisphereIcon}
              alt="Unisphere Browser"
              className="relative w-full h-full object-contain rounded-xl"
              style={{ mixBlendMode: 'screen' }}
            />
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20">
        <div className="w-full max-w-4xl mx-auto space-y-16">
          {/* Time and Logo Section */}
          <div className="text-center space-y-8">
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-3xl opacity-20 blur-3xl animate-glow" />
              <h1 className="relative text-8xl md:text-9xl font-light tracking-tight text-foreground">
                {formatTime(time)}
              </h1>
            </div>

            {/* Logo and text */}
            <div className="flex items-center justify-center gap-4 mt-12">
              <div className="relative w-16 h-16 md:w-20 md:h-20">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-2xl opacity-30 blur-xl animate-pulse" />
                <img
                  src={logoMain}
                  alt="Unisphere"
                  className="relative w-full h-full object-cover rounded-2xl"
                  style={{ 
                    mixBlendMode: 'screen',
                    opacity: 0.85
                  }}
                />
              </div>
              <div className="text-left">
                <h2 className="text-3xl md:text-4xl font-light text-foreground">
                  Unisphere
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground font-light">
                  Your Minimalist Browser
                </p>
              </div>
            </div>
          </div>

          {/* Search bar */}
          <SearchBar />

          {/* Quick links */}
          <QuickLinks />
        </div>
      </main>

      {/* Floating orbs for extra ambiance */}
      <div className="fixed top-20 right-20 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '0s' }} />
      <div className="fixed bottom-20 left-20 w-80 h-80 bg-pink-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="fixed top-1/2 right-1/3 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
    </div>
  );
};

export default Index;

import { useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Home, AlertCircle } from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
      <AnimatedBackground />
      
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        {/* Animated error icon */}
        <div className="relative inline-block mb-8">
          <div className="absolute -inset-8 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-full opacity-20 blur-3xl animate-glow" />
          <div className="relative glass-strong rounded-full p-8">
            <AlertCircle className="w-24 h-24 text-purple-400 animate-pulse" />
          </div>
        </div>

        {/* Error code */}
        <div className="relative mb-6">
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-3xl opacity-10 blur-2xl" />
          <h1 className="relative text-9xl font-light tracking-tight text-foreground">
            404
          </h1>
        </div>

        {/* Error message */}
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl font-light text-foreground">
            Page Not Found
          </h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            The page you're looking for seems to have drifted into the digital void. 
            Let's get you back on track.
          </p>
          <p className="text-sm text-muted-foreground/60 font-mono">
            {location.pathname}
          </p>
        </div>

        {/* Action button */}
        <Link to="/">
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-2xl opacity-30 group-hover:opacity-50 blur-xl transition-slow" />
            <Button 
              size="lg"
              className="relative glass-strong text-foreground hover:text-foreground border-white/10 hover:border-white/20 transition-smooth px-8 py-6 text-lg"
            >
              <Home className="w-5 h-5 mr-2" />
              Return Home
            </Button>
          </div>
        </Link>

        {/* Decorative elements */}
        <div className="mt-16 flex items-center justify-center gap-2 text-muted-foreground/40">
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
          <span className="text-xs font-light">Unisphere Browser</span>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />
        </div>
      </div>

      {/* Floating orbs */}
      <div className="fixed top-20 right-20 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '0s' }} />
      <div className="fixed bottom-20 left-20 w-80 h-80 bg-pink-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
    </div>
  );
};

export default NotFound;

import { useState, KeyboardEvent } from 'react';
import { Search, Clock, Bookmark, TrendingUp, Globe, Github, Youtube, Twitter, Linkedin, Mail } from 'lucide-react';
import { Input } from '@/components/ui/input';
import AnimatedGrid from './AnimatedGrid';
import AnimatedLogo from './AnimatedLogo';

interface BrowserHomePageProps {
  onNavigate: (url: string) => void;
}

const popularSites = [
  { name: 'Google', icon: Globe, url: 'https://google.com', color: 'orange' },
  { name: 'GitHub', icon: Github, url: 'https://github.com', color: 'orange' },
  { name: 'YouTube', icon: Youtube, url: 'https://youtube.com', color: 'orange' },
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com', color: 'orange' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com', color: 'orange' },
  { name: 'Gmail', icon: Mail, url: 'https://mail.google.com', color: 'orange' },
  { name: 'Reddit', icon: Globe, url: 'https://reddit.com', color: 'orange' },
  { name: 'Netflix', icon: Globe, url: 'https://netflix.com', color: 'orange' },
];

const BrowserHomePage = ({ onNavigate }: BrowserHomePageProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      let url = searchQuery.trim();
      
      if (!url.includes('.') || (!url.startsWith('http://') && !url.startsWith('https://'))) {
        url = `https://www.google.com/search?q=${encodeURIComponent(url)}`;
      } else if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
      }
      
      onNavigate(url);
    }
  };

  const handleSiteClick = (url: string) => {
    onNavigate(url);
  };

  return (
    <div className="relative h-full overflow-auto bg-[#0a0a0a]">
      <AnimatedGrid />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-full px-6 py-16">
        {/* Animated Logo */}
        <div className="mb-8 animate-bounce-slow" data-testid="logo-container">
          <AnimatedLogo />
        </div>

        <p className="text-foreground/60 text-lg mb-12 animate-pulse" data-testid="tagline">Your gateway to the web</p>

        {/* Search Bar */}
        <div className="w-full max-w-2xl mb-12">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/20 to-orange-500/0 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent rounded-xl animate-shimmer" 
                 style={{ backgroundImage: 'linear-gradient(90deg, transparent, rgba(251, 146, 60, 0.1), transparent)' }} />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-orange-500/60 z-10 group-hover:text-orange-500 transition-colors" data-testid="search-icon" />
            <Input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearch}
              placeholder="Search the web or enter URL..."
              className="relative w-full pl-12 pr-4 py-6 bg-[#1a1a1a]/90 backdrop-blur-xl border-white/10 text-foreground rounded-xl text-base focus-visible:ring-orange-500/50 focus-visible:border-orange-500/30 transition-all duration-300 hover:border-orange-500/20"
              data-testid="search-input"
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex gap-4 mb-12" data-testid="quick-actions">
          <button className="relative group flex items-center gap-2 px-6 py-3 bg-[#1a1a1a]/90 backdrop-blur-xl hover:bg-[#252525] border border-white/10 hover:border-orange-500/30 rounded-xl transition-all duration-300" data-testid="button-recent">
            <div className="absolute inset-0 bg-orange-500/10 rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-300" />
            <Clock className="relative w-5 h-5 text-orange-500 group-hover:animate-pulse" />
            <span className="relative text-foreground/80 group-hover:text-foreground transition-colors">Recent</span>
          </button>
          <button className="relative group flex items-center gap-2 px-6 py-3 bg-[#1a1a1a]/90 backdrop-blur-xl hover:bg-[#252525] border border-white/10 hover:border-orange-500/30 rounded-xl transition-all duration-300" data-testid="button-bookmarks">
            <div className="absolute inset-0 bg-orange-500/10 rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-300" />
            <Bookmark className="relative w-5 h-5 text-orange-500 group-hover:animate-pulse" />
            <span className="relative text-foreground/80 group-hover:text-foreground transition-colors">Bookmarks</span>
          </button>
          <button className="relative group flex items-center gap-2 px-6 py-3 bg-[#1a1a1a]/90 backdrop-blur-xl hover:bg-[#252525] border border-white/10 hover:border-orange-500/30 rounded-xl transition-all duration-300" data-testid="button-trending">
            <div className="absolute inset-0 bg-orange-500/10 rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-300" />
            <TrendingUp className="relative w-5 h-5 text-orange-500 group-hover:animate-pulse" />
            <span className="relative text-foreground/80 group-hover:text-foreground transition-colors">Trending</span>
          </button>
        </div>

        {/* Popular Sites */}
        <div className="w-full max-w-4xl">
          <h2 className="text-xl text-foreground/80 mb-6 font-medium">Popular Sites</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {popularSites.map((site, index) => (
              <button
                key={site.name}
                onClick={() => handleSiteClick(site.url)}
                className="relative group flex flex-col items-center gap-3 p-6 bg-[#1a1a1a]/90 backdrop-blur-xl hover:bg-[#252525] border border-white/10 rounded-xl transition-all duration-300 hover:border-orange-500/40 hover:scale-105"
                data-testid={`site-${site.name.toLowerCase()}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-orange-500/10 to-orange-500/0 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
                <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-500/5 flex items-center justify-center border border-orange-500/20 group-hover:border-orange-500/40 transition-all animate-pulse-glow">
                  <site.icon className="w-6 h-6 text-orange-500 group-hover:scale-110 transition-transform" />
                </div>
                <span className="relative text-sm text-foreground/80 group-hover:text-orange-400 transition-colors">{site.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowserHomePage;

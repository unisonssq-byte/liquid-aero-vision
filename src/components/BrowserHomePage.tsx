import { useState, KeyboardEvent } from 'react';
import { Search, Clock, Bookmark, TrendingUp, Globe, Github, Youtube, Twitter, Linkedin, Mail } from 'lucide-react';
import { Input } from '@/components/ui/input';
import AnimatedGrid from './AnimatedGrid';
import logoMain from '@/assets/logo-main.jpg';

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
        {/* Logo and Title */}
        <div className="flex items-center gap-4 mb-3">
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-cyan-500 to-purple-500 rounded-2xl opacity-40 blur-xl" />
            <img
              src={logoMain}
              alt="Unisphere"
              className="relative w-full h-full object-cover rounded-2xl"
              style={{ mixBlendMode: 'screen', opacity: 0.9 }}
            />
          </div>
          <h1 className="text-6xl font-bold">
            <span className="text-orange-500">Uni</span>
            <span className="text-cyan-400">Sphere</span>
          </h1>
        </div>

        <p className="text-foreground/60 text-lg mb-12">Your gateway to the web</p>

        {/* Search Bar */}
        <div className="w-full max-w-2xl mb-12">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
            <Input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearch}
              placeholder="Search the web or enter URL..."
              className="w-full pl-12 pr-4 py-6 bg-[#1a1a1a] border-white/10 text-foreground rounded-xl text-base focus-visible:ring-orange-500/50 focus-visible:border-orange-500/30"
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex gap-4 mb-12">
          <button className="flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] hover:bg-[#252525] border border-white/10 rounded-xl transition-colors">
            <Clock className="w-5 h-5 text-orange-500" />
            <span className="text-foreground/80">Recent</span>
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] hover:bg-[#252525] border border-white/10 rounded-xl transition-colors">
            <Bookmark className="w-5 h-5 text-orange-500" />
            <span className="text-foreground/80">Bookmarks</span>
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] hover:bg-[#252525] border border-white/10 rounded-xl transition-colors">
            <TrendingUp className="w-5 h-5 text-orange-500" />
            <span className="text-foreground/80">Trending</span>
          </button>
        </div>

        {/* Popular Sites */}
        <div className="w-full max-w-4xl">
          <h2 className="text-xl text-foreground/80 mb-6 font-medium">Popular Sites</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {popularSites.map((site) => (
              <button
                key={site.name}
                onClick={() => handleSiteClick(site.url)}
                className="flex flex-col items-center gap-3 p-6 bg-[#1a1a1a] hover:bg-[#252525] border border-white/10 rounded-xl transition-all hover:border-orange-500/30"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-500/5 flex items-center justify-center border border-orange-500/20">
                  <site.icon className="w-6 h-6 text-orange-500" />
                </div>
                <span className="text-sm text-foreground/80">{site.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowserHomePage;

import { useState, KeyboardEvent } from 'react';
import { ArrowLeft, ArrowRight, RotateCw, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface BrowserNavBarProps {
  currentUrl: string;
  onNavigate: (url: string) => void;
  onBack: () => void;
  onForward: () => void;
  onReload: () => void;
  canGoBack: boolean;
  canGoForward: boolean;
}

const BrowserNavBar = ({
  currentUrl,
  onNavigate,
  onBack,
  onForward,
  onReload,
  canGoBack,
  canGoForward,
}: BrowserNavBarProps) => {
  const [inputValue, setInputValue] = useState(currentUrl);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      let url = inputValue.trim();
      
      // If it looks like a search query (no dots, or doesn't start with http)
      if (!url.includes('.') || (!url.startsWith('http://') && !url.startsWith('https://'))) {
        url = `https://www.google.com/search?q=${encodeURIComponent(url)}`;
      } else if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
      }
      
      onNavigate(url);
    }
  };

  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-[#0f0f0f] border-b border-white/5">
      <div className="flex gap-1">
        <Button
          variant="ghost"
          size="icon"
          onClick={onBack}
          disabled={!canGoBack}
          className="h-8 w-8 text-foreground/60 hover:text-foreground hover:bg-white/5 disabled:opacity-30"
        >
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={onForward}
          disabled={!canGoForward}
          className="h-8 w-8 text-foreground/60 hover:text-foreground hover:bg-white/5 disabled:opacity-30"
        >
          <ArrowRight className="w-4 h-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={onReload}
          className="h-8 w-8 text-foreground/60 hover:text-foreground hover:bg-white/5"
        >
          <RotateCw className="w-4 h-4" />
        </Button>
      </div>

      <div className="flex-1 relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search the web or enter URL..."
          className="w-full pl-10 bg-[#1a1a1a] border-white/10 text-foreground/80 placeholder:text-foreground/30 focus-visible:ring-orange-500/50"
        />
      </div>
    </div>
  );
};

export default BrowserNavBar;

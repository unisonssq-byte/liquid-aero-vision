import { Menu, Home, Bookmark, History, Download, Settings, Info } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface BrowserMenuProps {
  onNewTab: () => void;
}

const BrowserMenu = ({ onNewTab }: BrowserMenuProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="relative h-8 w-8 text-foreground/60 hover:text-foreground hover:bg-white/5 group"
        >
          <div className="absolute inset-0 bg-orange-500/20 rounded-lg opacity-0 group-hover:opacity-100 blur-xl transition-slow" />
          <Menu className="relative w-5 h-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[320px] bg-[#0f0f0f] border-white/10">
        <SheetHeader>
          <SheetTitle className="text-2xl font-light text-foreground flex items-center gap-2">
            <Menu className="w-6 h-6 text-orange-500" />
            Menu
          </SheetTitle>
        </SheetHeader>

        <div className="mt-8 space-y-2">
          <Button 
            variant="ghost" 
            className="w-full justify-start text-foreground/80 hover:text-foreground hover:bg-white/5 p-4 transition-smooth group"
            onClick={onNewTab}
          >
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-orange-500 group-hover:h-full transition-all" />
            <Home className="w-5 h-5 mr-3 text-orange-500" />
            New Tab
          </Button>

          <Button 
            variant="ghost" 
            className="w-full justify-start text-foreground/80 hover:text-foreground hover:bg-white/5 p-4 transition-smooth group"
          >
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-orange-500 group-hover:h-full transition-all" />
            <Bookmark className="w-5 h-5 mr-3 text-orange-500" />
            Bookmarks
          </Button>

          <Button 
            variant="ghost" 
            className="w-full justify-start text-foreground/80 hover:text-foreground hover:bg-white/5 p-4 transition-smooth group"
          >
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-orange-500 group-hover:h-full transition-all" />
            <History className="w-5 h-5 mr-3 text-orange-500" />
            History
          </Button>

          <Button 
            variant="ghost" 
            className="w-full justify-start text-foreground/80 hover:text-foreground hover:bg-white/5 p-4 transition-smooth group"
          >
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-orange-500 group-hover:h-full transition-all" />
            <Download className="w-5 h-5 mr-3 text-orange-500" />
            Downloads
          </Button>

          <Separator className="my-4 bg-white/5" />

          <Button 
            variant="ghost" 
            className="w-full justify-start text-foreground/80 hover:text-foreground hover:bg-white/5 p-4 transition-smooth group"
          >
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-orange-500 group-hover:h-full transition-all" />
            <Settings className="w-5 h-5 mr-3 text-orange-500" />
            Settings
          </Button>

          <Button 
            variant="ghost" 
            className="w-full justify-start text-foreground/80 hover:text-foreground hover:bg-white/5 p-4 transition-smooth group"
          >
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-orange-500 group-hover:h-full transition-all" />
            <Info className="w-5 h-5 mr-3 text-orange-500" />
            About
          </Button>
        </div>

        {/* Animated gradient orb */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-32 h-32 bg-gradient-to-br from-orange-500/20 via-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
      </SheetContent>
    </Sheet>
  );
};

export default BrowserMenu;

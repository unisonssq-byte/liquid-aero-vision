import { useState } from 'react';
import { Settings, Moon, Sun, Monitor, Globe, Shield, Download, Trash2, History, Key } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

const SettingsMenu = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [blockAds, setBlockAds] = useState(true);
  const [blockTrackers, setBlockTrackers] = useState(true);
  const [showImages, setShowImages] = useState(true);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="relative h-8 w-8 text-foreground/60 hover:text-foreground hover:bg-white/5 group"
        >
          <div className="absolute inset-0 bg-orange-500/20 rounded-lg opacity-0 group-hover:opacity-100 blur-xl transition-slow" />
          <Settings className="relative w-5 h-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[400px] bg-[#0f0f0f] border-white/10 overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-2xl font-light text-foreground flex items-center gap-2">
            <Settings className="w-6 h-6 text-orange-500" />
            Settings
          </SheetTitle>
          <SheetDescription className="text-foreground/60">
            Customize your browsing experience
          </SheetDescription>
        </SheetHeader>

        <div className="mt-8 space-y-6">
          {/* Appearance */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-foreground/90 flex items-center gap-2">
              <Monitor className="w-5 h-5 text-orange-500" />
              Appearance
            </h3>
            <div className="space-y-3 pl-7">
              <div className="flex items-center justify-between p-3 glass rounded-xl transition-smooth hover:border-orange-500/30">
                <Label htmlFor="dark-mode" className="text-sm text-foreground/80 cursor-pointer">
                  Dark Mode
                </Label>
                <Switch
                  id="dark-mode"
                  checked={darkMode}
                  onCheckedChange={setDarkMode}
                />
              </div>
            </div>
          </div>

          <Separator className="bg-white/5" />

          {/* Privacy & Security */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-foreground/90 flex items-center gap-2">
              <Shield className="w-5 h-5 text-orange-500" />
              Privacy & Security
            </h3>
            <div className="space-y-3 pl-7">
              <div className="flex items-center justify-between p-3 glass rounded-xl transition-smooth hover:border-orange-500/30">
                <Label htmlFor="block-ads" className="text-sm text-foreground/80 cursor-pointer">
                  Block Ads
                </Label>
                <Switch
                  id="block-ads"
                  checked={blockAds}
                  onCheckedChange={setBlockAds}
                />
              </div>
              <div className="flex items-center justify-between p-3 glass rounded-xl transition-smooth hover:border-orange-500/30">
                <Label htmlFor="block-trackers" className="text-sm text-foreground/80 cursor-pointer">
                  Block Trackers
                </Label>
                <Switch
                  id="block-trackers"
                  checked={blockTrackers}
                  onCheckedChange={setBlockTrackers}
                />
              </div>
              <Button 
                variant="ghost" 
                className="w-full justify-start text-foreground/80 hover:text-foreground hover:bg-white/5 p-3"
              >
                <Key className="w-4 h-4 mr-2 text-orange-500" />
                Manage Passwords
              </Button>
            </div>
          </div>

          <Separator className="bg-white/5" />

          {/* Content */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-foreground/90 flex items-center gap-2">
              <Globe className="w-5 h-5 text-orange-500" />
              Content
            </h3>
            <div className="space-y-3 pl-7">
              <div className="flex items-center justify-between p-3 glass rounded-xl transition-smooth hover:border-orange-500/30">
                <Label htmlFor="show-images" className="text-sm text-foreground/80 cursor-pointer">
                  Show Images
                </Label>
                <Switch
                  id="show-images"
                  checked={showImages}
                  onCheckedChange={setShowImages}
                />
              </div>
            </div>
          </div>

          <Separator className="bg-white/5" />

          {/* Data Management */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-foreground/90 flex items-center gap-2">
              <Download className="w-5 h-5 text-orange-500" />
              Data Management
            </h3>
            <div className="space-y-3 pl-7">
              <Button 
                variant="ghost" 
                className="w-full justify-start text-foreground/80 hover:text-foreground hover:bg-white/5 p-3"
              >
                <History className="w-4 h-4 mr-2 text-orange-500" />
                Clear Browsing History
              </Button>
              <Button 
                variant="ghost" 
                className="w-full justify-start text-foreground/80 hover:text-foreground hover:bg-white/5 p-3"
              >
                <Trash2 className="w-4 h-4 mr-2 text-orange-500" />
                Clear Cache & Cookies
              </Button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-white/5">
          <div className="text-center space-y-2">
            <p className="text-sm text-foreground/40">Unisphere Browser</p>
            <p className="text-xs text-foreground/30">Version 1.0.0</p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SettingsMenu;

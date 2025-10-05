import { X, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BrowserTabProps {
  id: string;
  title: string;
  url: string;
  isActive: boolean;
  onSelect: () => void;
  onClose: () => void;
}

const BrowserTab = ({ title, isActive, onSelect, onClose }: BrowserTabProps) => {
  return (
    <div
      onClick={onSelect}
      className={cn(
        "group relative flex items-center gap-2 px-4 py-2.5 min-w-[180px] max-w-[240px] cursor-pointer transition-all",
        "border-r border-white/5",
        isActive 
          ? "bg-[#1a1a1a]" 
          : "bg-[#0f0f0f] hover:bg-[#1a1a1a]"
      )}
    >
      <Globe className="w-4 h-4 text-orange-500 flex-shrink-0" />
      <span className="flex-1 text-sm text-foreground/80 truncate">
        {title}
      </span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-white/10 rounded"
      >
        <X className="w-3 h-3 text-foreground/60" />
      </button>
    </div>
  );
};

export default BrowserTab;

import { useState, FormEvent } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      // Direct search without iframe embedding
      window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
      setQuery('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto relative z-10">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-slow" />
        <div className="relative glass-strong rounded-2xl p-1 transition-smooth group-hover:border-purple-500/30">
          <div className="flex items-center gap-3 px-6 py-4">
            <Search className="w-5 h-5 text-purple-400 transition-smooth group-hover:text-purple-300" />
            <Input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search the web..."
              className="flex-1 bg-transparent border-none text-foreground placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 text-lg"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;

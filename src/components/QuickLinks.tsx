import { BookmarkIcon, Mail, Youtube, Twitter, Github } from 'lucide-react';

const quickLinks = [
  { name: 'Gmail', icon: Mail, url: 'https://mail.google.com', color: 'from-red-500 to-orange-500' },
  { name: 'YouTube', icon: Youtube, url: 'https://youtube.com', color: 'from-red-600 to-red-400' },
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com', color: 'from-blue-400 to-cyan-400' },
  { name: 'GitHub', icon: Github, url: 'https://github.com', color: 'from-purple-500 to-pink-500' },
];

const QuickLinks = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-3xl mx-auto mt-16 relative z-10">
      {quickLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
        >
          <div className={`absolute -inset-2 bg-gradient-to-br ${link.color} rounded-2xl opacity-0 group-hover:opacity-40 blur-xl transition-slow`} />
          <div className="relative glass rounded-2xl p-6 flex flex-col items-center gap-3 transition-smooth group-hover:scale-105 group-hover:border-white/20">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center transition-slow group-hover:scale-110`}>
              <link.icon className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-smooth">
              {link.name}
            </span>
          </div>
        </a>
      ))}
    </div>
  );
};

export default QuickLinks;

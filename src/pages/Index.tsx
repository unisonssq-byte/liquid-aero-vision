import { useState } from 'react';
import { Menu, Bell, Settings, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BrowserTab from '@/components/BrowserTab';
import BrowserNavBar from '@/components/BrowserNavBar';
import BrowserHomePage from '@/components/BrowserHomePage';
import unisphereIcon from '@/assets/unisphere-icon.png';

interface Tab {
  id: string;
  title: string;
  url: string;
  history: string[];
  historyIndex: number;
}

const Index = () => {
  const [tabs, setTabs] = useState<Tab[]>([
    {
      id: '1',
      title: 'New Tab',
      url: '',
      history: [''],
      historyIndex: 0,
    },
  ]);
  const [activeTabId, setActiveTabId] = useState('1');

  const activeTab = tabs.find(tab => tab.id === activeTabId);

  const createNewTab = () => {
    const newTab: Tab = {
      id: Date.now().toString(),
      title: 'New Tab',
      url: '',
      history: [''],
      historyIndex: 0,
    };
    setTabs([...tabs, newTab]);
    setActiveTabId(newTab.id);
  };

  const closeTab = (tabId: string) => {
    if (tabs.length === 1) return;
    
    const tabIndex = tabs.findIndex(tab => tab.id === tabId);
    const newTabs = tabs.filter(tab => tab.id !== tabId);
    
    if (activeTabId === tabId) {
      const newActiveTab = newTabs[Math.max(0, tabIndex - 1)];
      setActiveTabId(newActiveTab.id);
    }
    
    setTabs(newTabs);
  };

  const navigateToUrl = (url: string) => {
    if (!activeTab) return;

    const newHistory = activeTab.history.slice(0, activeTab.historyIndex + 1);
    newHistory.push(url);

    const updatedTabs = tabs.map(tab =>
      tab.id === activeTabId
        ? {
            ...tab,
            url,
            title: new URL(url).hostname.replace('www.', '') || 'New Tab',
            history: newHistory,
            historyIndex: newHistory.length - 1,
          }
        : tab
    );

    setTabs(updatedTabs);
  };

  const goBack = () => {
    if (!activeTab || activeTab.historyIndex <= 0) return;

    const newIndex = activeTab.historyIndex - 1;
    const updatedTabs = tabs.map(tab =>
      tab.id === activeTabId
        ? {
            ...tab,
            url: tab.history[newIndex],
            historyIndex: newIndex,
          }
        : tab
    );

    setTabs(updatedTabs);
  };

  const goForward = () => {
    if (!activeTab || activeTab.historyIndex >= activeTab.history.length - 1) return;

    const newIndex = activeTab.historyIndex + 1;
    const updatedTabs = tabs.map(tab =>
      tab.id === activeTabId
        ? {
            ...tab,
            url: tab.history[newIndex],
            historyIndex: newIndex,
          }
        : tab
    );

    setTabs(updatedTabs);
  };

  const reload = () => {
    if (!activeTab || !activeTab.url) return;
    
    const iframe = document.querySelector(`iframe[data-tab-id="${activeTabId}"]`) as HTMLIFrameElement;
    if (iframe) {
      iframe.src = iframe.src;
    }
  };

  return (
    <div className="h-screen flex flex-col bg-[#0a0a0a] text-foreground overflow-hidden">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#0f0f0f] border-b border-white/5">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="h-8 w-8 text-foreground/60 hover:text-foreground hover:bg-white/5">
            <Menu className="w-5 h-5" />
          </Button>
          <img
            src={unisphereIcon}
            alt="Unisphere"
            className="w-8 h-8 object-contain"
            style={{ mixBlendMode: 'screen' }}
          />
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8 text-foreground/60 hover:text-foreground hover:bg-white/5">
            <Bell className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-foreground/60 hover:text-foreground hover:bg-white/5">
            <Settings className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Tabs Bar */}
      <div className="flex items-center bg-[#0f0f0f] border-b border-white/5">
        <div className="flex flex-1 overflow-x-auto scrollbar-hide">
          {tabs.map(tab => (
            <BrowserTab
              key={tab.id}
              id={tab.id}
              title={tab.title}
              url={tab.url}
              isActive={tab.id === activeTabId}
              onSelect={() => setActiveTabId(tab.id)}
              onClose={() => closeTab(tab.id)}
            />
          ))}
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={createNewTab}
          className="h-9 w-9 text-foreground/60 hover:text-foreground hover:bg-white/5 flex-shrink-0"
        >
          <Plus className="w-5 h-5" />
        </Button>
      </div>

      {/* Navigation Bar - only show when there's a URL */}
      {activeTab && activeTab.url && (
        <BrowserNavBar
          currentUrl={activeTab.url}
          onNavigate={navigateToUrl}
          onBack={goBack}
          onForward={goForward}
          onReload={reload}
          canGoBack={activeTab.historyIndex > 0}
          canGoForward={activeTab.historyIndex < activeTab.history.length - 1}
        />
      )}

      {/* Content Area */}
      <div className="flex-1 relative overflow-hidden">
        {tabs.map(tab => (
          <div
            key={tab.id}
            className={`absolute inset-0 ${tab.id === activeTabId ? 'block' : 'hidden'}`}
          >
            {tab.url ? (
              <iframe
                data-tab-id={tab.id}
                src={tab.url}
                className="w-full h-full border-none"
                title={tab.title}
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals allow-downloads"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            ) : (
              <BrowserHomePage onNavigate={navigateToUrl} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;

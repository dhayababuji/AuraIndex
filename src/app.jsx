import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar, { CATEGORIES } from './components/Sidebar';
import SearchBar from './components/SearchBar';
import ToolCard from './components/ToolCard';
import TrendingSection from './components/TrendingSection';
import ToolDetailModal from './components/ToolDetailModal';
import SubmitModal from './components/SubmitModal';
import { toolsData } from './data/toolsData';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('aura-theme');
    return saved ? saved === 'dark' : true;
  });

  const [tools, setTools] = useState(() => {
    const savedTools = localStorage.getItem('aura-tools-db');
    return savedTools ? JSON.parse(savedTools) : toolsData;
  });

  const [bookmarkedIds, setBookmarkedIds] = useState(() => {
    const saved = localStorage.getItem('aura-bookmarks');
    return saved ? JSON.parse(saved) : [];
  });

  const [upvotedIds, setUpvotedIds] = useState(() => {
    const saved = localStorage.getItem('aura-upvoted');
    return saved ? JSON.parse(saved) : [];
  });

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showBookmarksOnly, setShowBookmarksOnly] = useState(false);
  const [selectedTool, setSelectedTool] = useState(null);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('aura-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('aura-theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('aura-tools-db', JSON.stringify(tools));
  }, [tools]);

  useEffect(() => {
    localStorage.setItem('aura-bookmarks', JSON.stringify(bookmarkedIds));
  }, [bookmarkedIds]);

  useEffect(() => {
    localStorage.setItem('aura-upvoted', JSON.stringify(upvotedIds));
  }, [upvotedIds]);

  const handleUpvote = (id) => {
    if (upvotedIds.includes(id)) {
      setUpvotedIds(upvotedIds.filter(val => val !== id));
      setTools(prev => prev.map(tool => 
        tool.id === id ? { ...tool, upvotes: tool.upvotes - 1 } : tool
      ));
      if (selectedTool && selectedTool.id === id) {
        setSelectedTool(prev => ({ ...prev, upvotes: prev.upvotes - 1 }));
      }
    } else {
      setUpvotedIds([...upvotedIds, id]);
      setTools(prev => prev.map(tool => 
        tool.id === id ? { ...tool, upvotes: tool.upvotes + 1 } : tool
      ));
      if (selectedTool && selectedTool.id === id) {
        setSelectedTool(prev => ({ ...prev, upvotes: prev.upvotes + 1 }));
      }
    }
  };

  const handleBookmark = (id) => {
    if (bookmarkedIds.includes(id)) {
      setBookmarkedIds(bookmarkedIds.filter(val => val !== id));
    } else {
      setBookmarkedIds([...bookmarkedIds, id]);
    }
  };

  const handleSubmitSuccess = (newTool) => {
    if (tools.some(t => t.id === newTool.id)) {
      alert("A tool with this name already exists!");
      return;
    }
    setTools([newTool, ...tools]);
  };

  const filteredTools = tools.filter((tool) => {
    if (showBookmarksOnly && !bookmarkedIds.includes(tool.id)) return false;
    if (selectedCategory !== 'all' && tool.category !== selectedCategory) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = tool.name.toLowerCase().includes(q);
      const matchTagline = tool.tagline.toLowerCase().includes(q);
      const matchDesc = tool.description.toLowerCase().includes(q);
      const matchTags = tool.tags.some(tag => tag.toLowerCase().includes(q));
      return matchName || matchTagline || matchDesc || matchTags;
    }
    return true;
  });

  return (
    <div className="app-container">
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenSubmitModal={() => setIsSubmitModalOpen(true)}
        showBookmarksOnly={showBookmarksOnly}
        setShowBookmarksOnly={setShowBookmarksOnly}
        bookmarkCount={bookmarkedIds.length}
      />

      <div className="main-content">
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          onResetBookmarks={() => setShowBookmarksOnly(false)}
        />

        <main className="feed-container">
          <div className="mobile-categories">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setShowBookmarksOnly(false);
                  }}
                  className={`mobile-category-pill ${isActive ? 'active' : ''}`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

          <div className="hero-banner">
            <h2 className="hero-title">
              Discover the Best <span className="gradient-text">AI Tools</span>
            </h2>
            <p className="hero-subtitle">
              A curated catalog of verified artificial intelligence programs. Upvote your favorites, search capabilities, filter by categories, and find the perfect AI tool for your workflow.
            </p>
          </div>

          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

          {showBookmarksOnly && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 4px' }}>
              <h4 style={{ color: 'var(--brand-color)', fontWeight: 700 }}>Showing Bookmarked Tools Only</h4>
              <button className="secondary-btn" onClick={() => setShowBookmarksOnly(false)}>Show All Tools</button>
            </div>
          )}

          <div className="tools-list">
            {filteredTools.length > 0 ? (
              filteredTools.map((tool) => (
                <ToolCard
                  key={tool.id}
                  tool={tool}
                  onUpvote={handleUpvote}
                  isUpvoted={upvotedIds.includes(tool.id)}
                  onBookmark={handleBookmark}
                  isBookmarked={bookmarkedIds.includes(tool.id)}
                  onSelectTool={setSelectedTool}
                />
              ))
            ) : (
              <div className="empty-state">
                <span style={{ fontSize: '3rem' }}>🔍</span>
                <h3 className="empty-state-title">No AI Tools Found</h3>
                <p className="empty-state-desc">Try clearing your filters or suggest a new tool!</p>
                <button className="primary-btn" onClick={() => { setSearchQuery(''); setSelectedCategory('all'); setShowBookmarksOnly(false); }}>
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </main>

        <TrendingSection tools={tools} onSelectTool={setSelectedTool} />
      </div>

      <ToolDetailModal
        tool={selectedTool}
        isOpen={!!selectedTool}
        onClose={() => setSelectedTool(null)}
        onUpvote={handleUpvote}
        isUpvoted={selectedTool ? upvotedIds.includes(selectedTool.id) : false}
        onBookmark={handleBookmark}
        isBookmarked={selectedTool ? bookmarkedIds.includes(selectedTool.id) : false}
      />

      <SubmitModal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
        onSubmitSuccess={handleSubmitSuccess}
      />
    </div>
  );
}
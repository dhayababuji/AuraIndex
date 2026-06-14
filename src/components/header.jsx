import React from 'react';
import { Sun, Moon, Plus, Bookmark } from 'lucide-react';

export default function Header({ 
  darkMode, 
  setDarkMode, 
  onOpenSubmitModal, 
  showBookmarksOnly, 
  setShowBookmarksOnly, 
  bookmarkCount 
}) {
  return (
    <header className="header-wrapper">
      <div className="header-container">
        <div className="logo-section" onClick={() => setShowBookmarksOnly(false)}>
          <div className="logo-icon">⚡</div>
          <span className="logo-text">
            Aura<span className="gradient-text">Index</span>
          </span>
        </div>

        <div className="header-actions">
          <button 
            className={`visit-link-btn ${showBookmarksOnly ? 'bookmarked' : ''}`}
            onClick={() => setShowBookmarksOnly(!showBookmarksOnly)}
          >
            <Bookmark className="category-icon" fill={showBookmarksOnly ? 'var(--brand-color)' : 'none'} />
            <span>Bookmarks ({bookmarkCount})</span>
          </button>

          <button className="theme-toggle-btn" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button className="primary-btn" onClick={onOpenSubmitModal}>
            <Plus size={18} />
            <span>Submit Tool</span>
          </button>
        </div>
      </div>
    </header>
  );
}
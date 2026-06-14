import React, { useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';

export default function SearchBar({ searchQuery, setSearchQuery }) {
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '/' && document.activeElement !== inputRef.current) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="search-container">
      <Search className="search-icon" size={20} />
      <input
        ref={inputRef}
        type="text"
        placeholder="Search AI tools by name or tags... (Press '/' to focus)"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />
      {searchQuery ? (
        <button onClick={() => setSearchQuery('')} style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
          <X size={18} />
        </button>
      ) : (
        <span className="search-shortcut">/</span>
      )}
    </div>
  );
}
import React from 'react';
import { ChevronUp, Heart, ExternalLink, Info } from 'lucide-react';

export default function ToolCard({ tool, onUpvote, isUpvoted, onBookmark, isBookmarked, onSelectTool }) {
  const { name, tagline, pricing, upvotes, emoji, tags, url } = tool;

  const handleCardClick = (e) => {
    if (e.target.closest('.upvote-container') || e.target.closest('.bookmark-btn') || e.target.closest('.visit-link-btn')) return;
    onSelectTool(tool);
  };

  return (
    <div className="tool-card glass" onClick={handleCardClick}>
      <div className={`upvote-container ${isUpvoted ? 'active' : ''}`} onClick={() => onUpvote(tool.id)}>
        <ChevronUp className="upvote-icon" />
        <span className="upvote-count">{upvotes}</span>
      </div>

      <div className="tool-info-section">
        <div className="tool-avatar">{emoji}</div>
        <div className="tool-meta">
          <div className="tool-name-row">
            <span className="tool-name" onClick={() => onSelectTool(tool)}>{name}</span>
            <span className={`pricing-badge ${pricing.toLowerCase()}`}>{pricing}</span>
          </div>
          <p className="tool-tagline">{tagline}</p>
          <div className="tool-tags-row">
            {tags.slice(0, 3).map((tag, idx) => (
              <span key={idx} className="tool-tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="tool-actions-section">
        <button className={`action-btn-circle bookmark-btn ${isBookmarked ? 'bookmarked' : ''}`} onClick={() => onBookmark(tool.id)}>
          <Heart size={18} fill={isBookmarked ? 'var(--brand-color)' : 'none'} />
        </button>
        <button className="action-btn-circle" onClick={() => onSelectTool(tool)}>
          <Info size={18} />
        </button>
        <a href={url} target="_blank" rel="noopener noreferrer" className="visit-link-btn">
          <span>Visit</span>
          <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
}
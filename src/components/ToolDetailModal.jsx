import React from 'react';
import { X, Heart, ExternalLink, ChevronUp, Star, Check } from 'lucide-react';

export default function ToolDetailModal({ tool, isOpen, onClose, onUpvote, isUpvoted, onBookmark, isBookmarked }) {
  if (!isOpen || !tool) return null;
  const { name, tagline, description, pricing, upvotes, emoji, tags, url, rating, features } = tool;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card glass" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}><X size={22} /></button>
        <div className="detail-header-row">
          <div className="detail-avatar">{emoji}</div>
          <div className="detail-title-col">
            <h3 className="detail-name">{name}</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className={`pricing-badge ${pricing.toLowerCase()}`}>{pricing}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.85rem' }}>
                <Star size={14} color="#f59e0b" fill="#f59e0b" />
                <strong>{rating}</strong>
              </div>
            </div>
          </div>
        </div>
        <p className="detail-description">{description}</p>
        {features && (
          <div className="detail-features">
            <h4 className="detail-features-title">Core Features</h4>
            <ul className="detail-features-list">
              {features.map((feature, idx) => (
                <li key={idx}><Check size={16} color="var(--brand-color)" /><span>{feature}</span></li>
              ))}
            </ul>
          </div>
        )}
        <div className="detail-meta-box">
          <div>
            <div className="detail-meta-item-label">Category</div>
            <div className="detail-meta-item-value">{tool.category}</div>
          </div>
          <div style={{ borderLeft: '1px solid var(--border-color)', height: '36px' }}></div>
          <div>
            <div className="detail-meta-item-label">Status</div>
            <div className="detail-meta-item-value" style={{ color: 'var(--accent-green)' }}>Verified</div>
          </div>
        </div>
        <div className="tool-tags-row" style={{ marginBottom: '30px' }}>
          {tags.map((tag, idx) => (
            <span key={idx} className="tool-tag">{tag}</span>
          ))}
        </div>
        <div className="detail-actions-row">
          <button className={`secondary-btn ${isBookmarked ? 'bookmarked' : ''}`} onClick={() => onBookmark(tool.id)}>
            <Heart size={16} fill={isBookmarked ? 'var(--brand-color)' : 'none'} />
            <span>{isBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
          </button>
          <button className={`secondary-btn ${isUpvoted ? 'active' : ''}`} onClick={() => onUpvote(tool.id)} style={{ backgroundColor: isUpvoted ? 'var(--brand-color)' : 'transparent', color: isUpvoted ? 'white' : 'var(--text-primary)' }}>
            <ChevronUp size={16} />
            <span>Upvote ({upvotes})</span>
          </button>
          <a href={url} target="_blank" rel="noopener noreferrer" className="primary-btn">
            <span>Visit Website</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
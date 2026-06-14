import React from 'react';
import { Flame, ChevronUp } from 'lucide-react';

export default function TrendingSection({ tools, onSelectTool }) {
  const trendingTools = [...tools].sort((a, b) => b.upvotes - a.upvotes).slice(0, 5);

  return (
    <aside className="trending-aside">
      <div className="trending-box glass">
        <h3 className="trending-title">
          <Flame size={18} color="var(--brand-color)" fill="var(--brand-color)" />
          <span>Trending Today</span>
        </h3>
        <div className="trending-list">
          {trendingTools.map((tool) => (
            <div key={tool.id} className="trending-item">
              <div className="trending-item-left">
                <div className="trending-item-avatar">{tool.emoji}</div>
                <div className="trending-item-info">
                  <span className="trending-item-name" onClick={() => onSelectTool(tool)}>{tool.name}</span>
                  <span className="trending-item-category">{tool.category}</span>
                </div>
              </div>
              <div className="trending-item-votes">
                <ChevronUp size={12} color="var(--brand-color)" />
                <span>{tool.upvotes}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
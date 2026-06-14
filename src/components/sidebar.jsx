import React from 'react';
import { Globe, MessageSquare, Image, Code, Film, Music, Palette, CheckSquare } from 'lucide-react';

export const CATEGORIES = [
  { id: 'all', name: 'All Categories', icon: Globe },
  { id: 'chatbots', name: 'Chatbots & Writing', icon: MessageSquare },
  { id: 'image', name: 'Image Gen & Art', icon: Image },
  { id: 'coding', name: 'Code & Developers', icon: Code },
  { id: 'video', name: 'Video & Animation', icon: Film },
  { id: 'audio', name: 'Audio & Music', icon: Music },
  { id: 'design', name: 'Design & UI/UX', icon: Palette },
  { id: 'productivity', name: 'Productivity & Search', icon: CheckSquare }
];

export default function Sidebar({ selectedCategory, setSelectedCategory, onResetBookmarks }) {
  return (
    <aside className="sidebar-aside">
      <div className="sidebar-nav">
        <h2 className="sidebar-heading">Categories</h2>
        {CATEGORIES.map((cat) => {
          const Icon = cat.icon;
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => { setSelectedCategory(cat.id); onResetBookmarks(); }}
              className={`category-btn ${isActive ? 'active' : ''}`}
            >
              <Icon className="category-icon" />
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
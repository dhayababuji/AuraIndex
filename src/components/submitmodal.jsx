import React, { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { CATEGORIES } from './Sidebar';

export default function SubmitModal({ isOpen, onClose, onSubmitSuccess }) {
  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('chatbots');
  const [pricing, setPricing] = useState('freemium');
  const [url, setUrl] = useState('');
  const [tags, setTags] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !tagline || !url) return;
    const tagsArray = tags ? tags.split(',').map(t => t.trim()).filter(Boolean) : [];
    const newTool = {
      id: name.toLowerCase().replace(/\s+/g, '-'),
      name, tagline, description: description || tagline, category, pricing,
      upvotes: 1, rating: 5.0, url, emoji: '💡', features: ["Newly suggested"], tags: tagsArray
    };
    setIsSubmitted(true);
    setTimeout(() => {
      onSubmitSuccess(newTool);
      setIsSubmitted(false);
      setName(''); setTagline(''); setDescription(''); setUrl(''); setTags('');
      onClose();
    }, 2000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card glass" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '520px' }}>
        <button className="modal-close-btn" onClick={onClose}><X size={22} /></button>
        {isSubmitted ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 0', gap: '16px' }}>
            <CheckCircle2 size={54} color="var(--accent-green)" />
            <h3>Submission Received!</h3>
            <p>We will review and add it to AuraIndex shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h3 style={{ marginBottom: '20px', fontWeight: 800 }}>Recommend an AI Tool</h3>
            <div className="form-group"><label className="form-label">Tool Name *</label><input type="text" required value={name} onChange={e => setName(e.target.value)} className="form-input" /></div>
            <div className="form-group"><label className="form-label">Tagline *</label><input type="text" required value={tagline} onChange={e => setTagline(e.target.value)} className="form-input" /></div>
            <div className="form-group"><label className="form-label">Website URL *</label><input type="url" required value={url} onChange={e => setUrl(e.target.value)} className="form-input" /></div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div className="form-group"><label className="form-label">Category</label>
                <select value={category} onChange={e => setCategory(e.target.value)} className="form-select">
                  {CATEGORIES.filter(c => c.id !== 'all').map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
              </div>
              <div className="form-group"><label className="form-label">Pricing</label>
                <select value={pricing} onChange={e => setPricing(e.target.value)} className="form-select">
                  <option value="free">Free</option><option value="freemium">Freemium</option><option value="paid">Paid</option>
                </select>
              </div>
            </div>
            <div className="form-group"><label className="form-label">Tags (comma-separated)</label><input type="text" value={tags} onChange={e => setTags(e.target.value)} className="form-input" /></div>
            <div className="submit-btn-row">
              <button type="button" className="secondary-btn" onClick={onClose}>Cancel</button>
              <button type="submit" className="primary-btn">Submit Proposal</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
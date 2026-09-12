import { CATEGORIES } from '../data/menu';

export default function MainHeader({ activeCategory, onSelectCategory }) {
  return (
    <div className="main-header">
      <div className="tabs">
        {CATEGORIES.map((cat) => (
          <button
            type="button"
            key={cat}
            className={'tab-btn' + (cat === activeCategory ? ' active' : '')}
            onClick={() => onSelectCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="header-right">
        <div className="bar-status">
          <span className="bar-status-dot" />
          <span className="bar-status-label">BAR 2 · KAI</span>
        </div>
        <button type="button" className="all-tabs-btn">
          ALL TABS · 9
        </button>
      </div>
    </div>
  );
}

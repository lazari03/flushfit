import { ACCENTS, MENU } from '../data/menu';

export default function QuickKeyGrid({ activeCategory, onAddItem }) {
  const items = MENU[activeCategory] || [];
  return (
    <div className="quick-key-grid">
      {items.map((item, i) => {
        const accent = ACCENTS[item.accent];
        return (
          <button
            type="button"
            className="quick-key"
            key={i}
            style={{
              '--qk-bg': accent.bg,
              '--qk-border': accent.border,
              '--qk-text': accent.text,
              '--qk-dot': accent.dot,
            }}
            onClick={() => onAddItem(item)}
          >
            <div className="quick-key-top">
              <div className="quick-key-tag">{item.tag}</div>
              <div className="quick-key-dot" />
            </div>
            <div className="quick-key-body">
              <div className="quick-key-name">{item.name}</div>
              <div className="quick-key-price mono">{item.price}</div>
            </div>
          </button>
        );
      })}
    </div>
  );
}

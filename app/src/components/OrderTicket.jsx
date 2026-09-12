import { TICKET } from '../data/menu';

export default function OrderTicket({ onCloseTab }) {
  return (
    <div className="ticket-panel">
      <div className="ticket-header">
        <div className="ticket-header-left">
          <div className="ticket-header-row">
            <span className="status-dot" />
            <span className="ticket-eyebrow">Open Tab</span>
          </div>
          <div className="ticket-title">Tab 14 · Patio</div>
          <div className="ticket-sub mono">M. REYES · CARD ON FILE ····4417</div>
        </div>
        <div className="ticket-header-right">
          <div className="ticket-time mono">23:47</div>
          <div className="ticket-guests">+ 4 GUESTS</div>
        </div>
      </div>

      <div className="ticket-lines">
        {TICKET.map((line, i) => (
          <div className="ticket-line" key={i}>
            <div className="ticket-qty mono">{line.qty}</div>
            <div className="ticket-line-body">
              <div className="ticket-line-name">{line.name}</div>
              {line.modList.length > 0 && (
                <div className="ticket-mods">
                  {line.modList.map((mod, j) => (
                    <div className="ticket-mod" key={j}>
                      {mod}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="ticket-price mono">{line.price}</div>
          </div>
        ))}
      </div>

      <div className="ticket-totals">
        <div className="ticket-total-row">
          <span>Subtotal</span>
          <span className="mono">$38.64</span>
        </div>
        <div className="ticket-total-row">
          <span>Tax (8.875%)</span>
          <span className="mono">$3.43</span>
        </div>
        <div className="ticket-total-row happy-hour">
          <span>Happy hour · 2 items</span>
          <span className="mono">−$4.00</span>
        </div>
      </div>

      <div className="ticket-footer">
        <div className="ticket-grand-total">
          <div className="ticket-grand-total-label">Total</div>
          <div className="ticket-grand-total-value mono">$42.50</div>
        </div>
        <button type="button" className="close-tab-btn" onClick={onCloseTab}>
          Close Tab
        </button>
      </div>
    </div>
  );
}

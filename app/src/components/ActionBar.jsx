export default function ActionBar({ pendingCount, onSplitCheck, onPreAuth, onSendOrder }) {
  return (
    <div className="action-bar">
      <button type="button" className="split-btn" onClick={onSplitCheck}>
        Split Check
      </button>
      <button type="button" className="preauth-btn" onClick={onPreAuth}>
        Pre-Auth Card
      </button>
      <button type="button" className="send-btn" onClick={onSendOrder}>
        <span>Send Order</span>
        <span className="send-badge mono">{pendingCount}</span>
      </button>
    </div>
  );
}

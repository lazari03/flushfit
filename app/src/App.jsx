import { useEffect, useState } from 'react';
import OrderTicket from './components/OrderTicket';
import MainHeader from './components/MainHeader';
import QuickKeyGrid from './components/QuickKeyGrid';
import ActionBar from './components/ActionBar';
import ScreenGlare from './components/ScreenGlare';
import './App.css';

const SCREEN_W = 1600;
const SCREEN_H = 900;

function useFitScale() {
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const fit = () => {
      const pad = 32;
      const s = Math.min(
        (window.innerWidth - pad) / SCREEN_W,
        (window.innerHeight - pad) / SCREEN_H,
        1,
      );
      setScale(s > 0 ? s : 1);
    };
    fit();
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, []);
  return scale;
}

export default function App() {
  const [category, setCategory] = useState('Cocktails');
  const [pending, setPending] = useState(3);
  const scale = useFitScale();

  return (
    <div className="app-shell">
      <div
        className="pos-screen-frame"
        style={{ width: SCREEN_W * scale, height: SCREEN_H * scale }}
      >
        <div
          className="pos-screen"
          style={{ transform: `scale(${scale})` }}
        >
          <OrderTicket onCloseTab={() => console.log('Close Tab')} />

          <div className="main-panel">
            <MainHeader activeCategory={category} onSelectCategory={setCategory} />
            <QuickKeyGrid
              activeCategory={category}
              onAddItem={() => setPending((n) => n + 1)}
            />
            <ActionBar
              pendingCount={pending}
              onSplitCheck={() => console.log('Split Check')}
              onPreAuth={() => console.log('Pre-Auth Card')}
              onSendOrder={() => console.log('Send Order')}
            />
          </div>

          <ScreenGlare />
        </div>
      </div>
    </div>
  );
}

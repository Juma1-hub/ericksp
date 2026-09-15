'use client';

import { useState } from 'react';

const markets = [
  { name: 'EUR/USD', price: '1.17342', change: '+0.24%' },
  { name: 'GBP/USD', price: '1.35781', change: '+0.18%' },
  { name: 'USD/JPY', price: '147.62', change: '-0.12%' },
  { name: 'BTC/USD', price: '116,420.00', change: '+1.42%' }
];

export default function Home() {
  const [amount, setAmount] = useState(50);
  const [direction, setDirection] = useState(null);
  const [notice, setNotice] = useState('');

  function demoTrade(side) {
    setDirection(side);
    setNotice(`Demo ${side.toUpperCase()} order selected for KSh ${amount}. No real funds are moved.`);
  }

  return (
    <main>
      <header className="topbar">
        <div className="brand"><span>ERICK</span>SP</div>
        <nav>
          <a href="#markets">Markets</a>
          <a href="#trade">Trade</a>
          <a href="#account">Account</a>
        </nav>
        <button className="login">Login</button>
      </header>

      <section className="hero">
        <div>
          <p className="eyebrow">SMARTER MARKET ACCESS</p>
          <h1>Trade with a <span>clearer view.</span></h1>
          <p className="lead">
            A modern ERICKSP trading dashboard interface built for desktop,
            tablet and mobile screens.
          </p>
          <div className="actions">
            <a className="primary" href="#trade">Start Demo</a>
            <a className="secondary" href="#markets">View Markets</a>
          </div>
        </div>
        <div className="hero-card">
          <div className="card-head"><span>EUR/USD</span><b>LIVE DEMO</b></div>
          <div className="big-price">1.17342</div>
          <div className="positive">+0.24%</div>
          <div className="chart">
            {[34,45,40,55,49,64,59,72,68,83,76,91].map((h,i)=>
              <i key={i} style={{height:`${h}%`}} />
            )}
          </div>
        </div>
      </section>

      <section id="markets" className="section">
        <div className="section-title"><p className="eyebrow">MARKET WATCH</p><h2>Popular markets</h2></div>
        <div className="market-grid">
          {markets.map(m => (
            <div className="market" key={m.name}>
              <div><strong>{m.name}</strong><small>Demo quote</small></div>
              <div className="market-price">{m.price}</div>
              <div className={m.change.startsWith('+') ? 'positive' : 'negative'}>{m.change}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="trade" className="section trade-section">
        <div className="trade-panel">
          <div>
            <p className="eyebrow">DEMO TRADING</p>
            <h2>Place a demo order</h2>
            <p className="muted">This starter project intentionally uses simulated orders only.</p>
          </div>
          <div className="trade-form">
            <label>Stake amount (KSh)
              <input type="number" min="50" value={amount}
                onChange={e => setAmount(Math.max(50, Number(e.target.value) || 50))} />
            </label>
            <div className="trade-buttons">
              <button className={direction === 'higher' ? 'higher selected' : 'higher'} onClick={() => demoTrade('higher')}>Higher</button>
              <button className={direction === 'lower' ? 'lower selected' : 'lower'} onClick={() => demoTrade('lower')}>Lower</button>
            </div>
            {notice && <div className="notice">{notice}</div>}
          </div>
        </div>
      </section>

      <section id="account" className="section account">
        <div className="account-card">
          <p className="eyebrow">ACCOUNT</p>
          <h2>Ready for the next layer</h2>
          <p>
            Authentication, database storage, payment integration and an admin
            control panel can be connected to this interface as separate,
            properly secured services.
          </p>
          <button className="secondary">Create demo account</button>
        </div>
      </section>

      <footer>© 2026 ERICKSP. Demo interface.</footer>
    </main>
  );
}

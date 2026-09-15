'use client';

import { useState } from "react";

const assets = [
  ["EUR/USD", "1.17342", "+0.24%", "92%"],
  ["GBP/USD", "1.35108", "+0.18%", "89%"],
  ["USD/JPY", "146.821", "-0.11%", "86%"],
  ["BTC/USD", "114,820.40", "+1.42%", "94%"]
];

function Chart() {
  const bars = [32, 48, 42, 65, 54, 78, 71, 92, 83, 108, 97, 122, 113, 137, 128, 151, 143, 165, 154, 177];
  return (
    <div className="chart">
      <div className="chart-grid">
        {[1,2,3,4,5].map(i => <span key={i} style={{top: `${i*20}%`}} />)}
      </div>
      <div className="bars">
        {bars.map((h,i) => (
          <div className={`bar ${i % 5 === 0 || i % 7 === 0 ? "down" : ""}`} key={i}>
            <i style={{height: `${h+22}px`}} />
            <b style={{height: `${h}px`}} />
          </div>
        ))}
      </div>
      <div className="chart-labels"><span>09:00</span><span>12:00</span><span>15:00</span><span>18:00</span></div>
    </div>
  );
}

export default function Home() {
  const [active, setActive] = useState("Trade");
  const [stake, setStake] = useState(100);
  const [asset, setAsset] = useState("EUR/USD");

  return (
    <main className="shell">
      <aside className="sidebar">
        <div className="brand">ERICK<span>SP</span></div>
        <div className="demo-pill">DEMO ACCOUNT</div>
        <nav>
          {["Dashboard", "Markets", "Trade", "History", "Wallet"].map(item => (
            <button className={active === item ? "nav active" : "nav"} onClick={() => setActive(item)} key={item}>
              <span className="nav-icon">{item === "Dashboard" ? "⌂" : item === "Markets" ? "◫" : item === "Trade" ? "↗" : item === "History" ? "◷" : "▣"}</span>
              {item}
            </button>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <button className="nav"><span className="nav-icon">⚙</span>Settings</button>
          <div className="secure">🔒 Demo mode<br/><small>No real-money transactions</small></div>
        </div>
      </aside>

      <section className="content">
        <header className="topbar">
          <div className="mobile-brand">ERICK<span>SP</span></div>
          <div className="market-status"><i/> Markets are open <span>•</span> Live demo prices</div>
          <div className="top-actions">
            <button className="icon-btn">⌕</button>
            <button className="icon-btn">◔</button>
            <button className="avatar">J</button>
          </div>
        </header>

        <div className="page">
          <section className="welcome">
            <div>
              <div className="eyebrow">TRADING OVERVIEW</div>
              <h1>Trade smarter.<br/><em>Stay in control.</em></h1>
              <p>Monitor markets, choose an asset and place a demo position from one clean trading workspace.</p>
            </div>
            <div className="balance-card">
              <span>Demo balance</span>
              <strong>KSh 25,000.00</strong>
              <small>+ KSh 1,240.00 <b>+5.21%</b></small>
            </div>
          </section>

          <section className="ticker">
            {assets.map(([name,price,change]) => (
              <button key={name} onClick={() => setAsset(name)} className={asset === name ? "ticker-card selected" : "ticker-card"}>
                <div><span>{name}</span><small>OTC / DEMO</small></div>
                <strong>{price}</strong>
                <b className={change[0] === "-" ? "negative" : ""}>{change}</b>
              </button>
            ))}
          </section>

          <section className="workspace">
            <div className="panel chart-panel">
              <div className="panel-head">
                <div>
                  <div className="pair-title"><strong>{asset}</strong><span>▾</span></div>
                  <div className="price">1.17342 <b>+0.24%</b></div>
                </div>
                <div className="timeframes"><button>1m</button><button className="chosen">5m</button><button>15m</button><button>1h</button></div>
              </div>
              <Chart />
              <div className="chart-footer">
                <span>● LIVE DEMO FEED</span>
                <span>Spread 0.00012</span>
                <span>Last update: just now</span>
              </div>
            </div>

            <div className="panel order-panel">
              <div className="panel-title"><strong>Place trade</strong><span className="payout">Payout <b>+87%</b></span></div>
              <label>Direction</label>
              <div className="direction">
                <button className="up">↗ <span>Higher</span><small>Potential return</small></button>
                <button className="down">↘ <span>Lower</span><small>Potential return</small></button>
              </div>
              <label>Investment</label>
              <div className="amount"><button onClick={() => setStake(Math.max(50, stake-50))}>−</button><span>KSh <b>{stake}</b></span><button onClick={() => setStake(stake+50)}>+</button></div>
              <div className="chips">{[50,100,250,500].map(v => <button key={v} onClick={() => setStake(v)}>KSh {v}</button>)}</div>
              <div className="summary"><span>Potential profit</span><b>KSh {(stake*.87).toFixed(2)}</b></div>
              <button className="trade-btn">Continue in demo <span>→</span></button>
              <small className="risk">Demo interface only. No funds are transferred.</small>
            </div>
          </section>

          <section className="lower">
            <div className="panel">
              <div className="panel-title"><strong>Popular markets</strong><button className="view">View all →</button></div>
              <div className="market-list">
                {assets.map(([n,p,c,payout]) => <div className="market-row" key={n}><span className="star">☆</span><div><strong>{n}</strong><small>Forex · Demo</small></div><b>{p}</b><span className={c[0]==="-" ? "negative" : "positive"}>{c}</span><em>{payout}</em></div>)}
              </div>
            </div>
            <div className="panel account-panel">
              <div className="panel-title"><strong>Account</strong></div>
              <div className="account-line"><span>Account type</span><b>Demo</b></div>
              <div className="account-line"><span>Demo balance</span><b>KSh 25,000</b></div>
              <button className="login-btn">Login / Create account</button>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

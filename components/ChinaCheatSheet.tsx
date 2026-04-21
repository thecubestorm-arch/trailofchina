'use client'

export default function ChinaCheatSheet() {
  return (
    <div
      id="cheat-sheet-pdf"
      style={{
        width: '794px',
        backgroundColor: '#faf7f2',
        color: '#1f2933',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      <style>{`
        .toc-sheet {
          width: 794px;
          min-height: 1123px;
          box-sizing: border-box;
          background: #faf7f2;
          padding: 28px;
          page-break-after: always;
        }

        .toc-sheet:last-child {
          page-break-after: auto;
        }

        .toc-header {
          background: #1a3a4a;
          color: #ffffff;
          border-radius: 12px;
          padding: 20px 24px;
          border-bottom: 4px solid #e8c47c;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .toc-header-title {
          margin: 0;
          font-size: 32px;
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: 0.01em;
        }

        .toc-header-subtitle {
          margin: 8px 0 0;
          color: #e8c47c;
          font-size: 15px;
          font-weight: 600;
        }

        .toc-warning {
          margin-top: 14px;
          background: #fff4d9;
          border: 1px solid #f1d49a;
          color: #6f4a12;
          border-radius: 8px;
          padding: 10px 12px;
          font-size: 13px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
        }

        .toc-grid {
          margin-top: 16px;
          display: grid;
          gap: 14px;
        }

        .toc-card {
          background: #ffffff;
          border-radius: 8px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          padding: 14px;
        }

        .toc-section-title {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 0 0 10px;
          font-size: 16px;
          font-weight: 800;
          color: #1a3a4a;
        }

        .toc-section-number {
          width: 26px;
          height: 26px;
          border-radius: 999px;
          background: #af5d32;
          color: #ffffff;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 800;
          flex-shrink: 0;
        }

        .toc-band {
          border-left: 5px solid #af5d32;
        }

        .toc-subtitle {
          margin: 10px 0 6px;
          font-size: 12px;
          font-weight: 700;
          color: #1a3a4a;
        }

        .toc-list {
          margin: 0;
          padding: 0;
          list-style: none;
          display: grid;
          gap: 6px;
        }

        .toc-list li {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 12px;
          line-height: 1.4;
        }

        .toc-checkbox {
          width: 12px;
          height: 12px;
          border: 2px solid #af5d32;
          border-radius: 2px;
          margin-top: 2px;
          flex-shrink: 0;
          background: #fff;
        }

        .toc-app-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 8px;
          margin-top: 8px;
        }

        .toc-app {
          border: 1px solid #e5dbcf;
          border-radius: 8px;
          padding: 8px;
          font-size: 12px;
          text-align: center;
          font-weight: 600;
          background: #fffdfa;
        }

        .toc-highlight {
          margin-top: 8px;
          padding: 9px;
          border-radius: 8px;
          background: #fff4df;
          border: 1px solid #f0d29c;
          font-size: 12px;
          font-weight: 700;
          color: #734510;
        }

        .toc-critical {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          border-radius: 999px;
          background: #9d2b2b;
          color: #fff;
          padding: 4px 10px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.04em;
          margin-bottom: 8px;
        }

        .toc-red-callout {
          margin-top: 8px;
          border: 1px solid #e8b4b4;
          background: #ffe8e8;
          color: #8a1f1f;
          border-radius: 8px;
          padding: 9px;
          font-size: 12px;
          font-weight: 700;
        }

        .toc-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .toc-tip-box {
          margin-top: 8px;
          border: 1px solid #ccdbe3;
          background: #edf4f8;
          color: #234558;
          border-radius: 8px;
          padding: 9px;
          font-size: 12px;
          font-weight: 600;
        }

        .toc-surprise-list {
          display: grid;
          gap: 6px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .toc-surprise-list li {
          font-size: 12px;
          line-height: 1.4;
          border-bottom: 1px dashed #ecdcc8;
          padding-bottom: 5px;
        }

        .toc-pro-tips {
          display: grid;
          gap: 8px;
        }

        .toc-pro-tip {
          background: #fff8eb;
          border: 1px solid #efd6a8;
          border-radius: 8px;
          padding: 8px;
          font-size: 12px;
          line-height: 1.35;
        }

        .toc-timeline {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          margin-top: 6px;
          flex-wrap: wrap;
        }

        .toc-stop {
          border: 1px solid #dfd3c6;
          background: #fff;
          border-radius: 8px;
          padding: 8px 10px;
          font-size: 11px;
          font-weight: 700;
          min-width: 132px;
          text-align: center;
        }

        .toc-arrow {
          color: #af5d32;
          font-weight: 800;
          font-size: 15px;
        }

        .toc-cta {
          margin-top: 12px;
          background: #af5d32;
          color: #fff;
          border-radius: 10px;
          padding: 12px 14px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .toc-cta-top {
          font-size: 13px;
          font-weight: 700;
        }

        .toc-cta-copy {
          margin-top: 6px;
          font-size: 12px;
          line-height: 1.45;
          color: #ffe8d8;
        }

        .toc-page-title {
          margin: 0 0 12px;
          font-size: 20px;
          color: #1a3a4a;
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 800;
        }
      `}</style>

      <div className="toc-sheet">
        <header className="toc-header">
          <h1 className="toc-header-title">🇨🇳 CHINA TRAVEL CHEAT SHEET</h1>
          <p className="toc-header-subtitle">2026 Edition — Everything You Need Before You Go</p>
        </header>

        <div className="toc-warning">
          <span>⚠️</span>
          <span>Some info may change. Always verify before travel.</span>
        </div>

        <div className="toc-grid">
          <section className="toc-card toc-band">
            <h2 className="toc-section-title">
              <span className="toc-section-number">1</span>
              BEFORE YOU GO
            </h2>

            <h3 className="toc-subtitle">🛂 Passport & Entry</h3>
            <ul className="toc-list">
              <li>
                <span className="toc-checkbox" />
                Confirm passport validity and current entry requirements.
              </li>
              <li>
                <span className="toc-checkbox" />
                Keep digital + printed copies of passport and visa docs.
              </li>
            </ul>

            <h3 className="toc-subtitle">✈️ Travel Basics</h3>
            <ul className="toc-list">
              <li>
                <span className="toc-checkbox" />
                Save hotel addresses in Chinese characters.
              </li>
              <li>
                <span className="toc-checkbox" />
                Download offline maps and key travel confirmations.
              </li>
            </ul>

            <h3 className="toc-subtitle">🏥 Health & Safety</h3>
            <ul className="toc-list">
              <li>
                <span className="toc-checkbox" />
                Bring prescriptions and basic travel medicine.
              </li>
              <li>
                <span className="toc-checkbox" />
                Buy travel insurance with medical coverage.
              </li>
            </ul>
          </section>

          <section className="toc-card">
            <h2 className="toc-section-title">
              <span className="toc-section-number">2</span>
              MUST-HAVE APPS
            </h2>
            <div className="toc-app-grid">
              <div className="toc-app">💳 Alipay</div>
              <div className="toc-app">💬 WeChat</div>
              <div className="toc-app">🚗 DiDi</div>
              <div className="toc-app">🗺️ Maps</div>
              <div className="toc-app">🌐 Translate</div>
              <div className="toc-app">⚡ VPN</div>
            </div>
            <div className="toc-highlight">⚠️ Set up ALL apps BEFORE arriving!</div>
          </section>

          <section className="toc-card">
            <h2 className="toc-section-title">
              <span className="toc-section-number">3</span>
              PAYMENTS
            </h2>
            <div className="toc-critical">⚡ CRITICAL</div>
            <ul className="toc-list">
              <li>
                <span className="toc-checkbox" />
                Link international cards to Alipay and WeChat Pay.
              </li>
              <li>
                <span className="toc-checkbox" />
                Test small transactions before departure.
              </li>
              <li>
                <span className="toc-checkbox" />
                Keep one backup card and some emergency cash.
              </li>
            </ul>
            <div className="toc-red-callout">Cash is rarely used. QR payments are standard.</div>
          </section>
        </div>
      </div>

      <div className="toc-sheet">
        <h2 className="toc-page-title">Page 2 · On-the-Ground Essentials</h2>

        <div className="toc-two-col">
          <section className="toc-card">
            <h2 className="toc-section-title">
              <span className="toc-section-number">4</span>
              📱 INTERNET ACCESS
            </h2>
            <ul className="toc-list">
              <li>
                <span className="toc-checkbox" />
                eSIM (recommended) for fast setup on arrival.
              </li>
              <li>
                <span className="toc-checkbox" />
                Keep a backup data plan or roaming option.
              </li>
            </ul>
            <div className="toc-highlight">Best flow: Activate eSIM before boarding your flight.</div>
          </section>

          <section className="toc-card">
            <h2 className="toc-section-title">
              <span className="toc-section-number">5</span>
              🚄 GETTING AROUND
            </h2>
            <ul className="toc-list">
              <li>
                <span className="toc-checkbox" />
                High-speed rail for intercity travel.
              </li>
              <li>
                <span className="toc-checkbox" />
                Metro in major cities is fast and reliable.
              </li>
              <li>
                <span className="toc-checkbox" />
                Use DiDi for door-to-door rides.
              </li>
            </ul>
            <div className="toc-tip-box">Always have your destination in Chinese.</div>
          </section>
        </div>

        <div className="toc-grid" style={{ marginTop: '14px' }}>
          <section className="toc-card">
            <h2 className="toc-section-title">
              <span className="toc-section-number">6</span>
              THINGS THAT SURPRISE MOST TRAVELERS
            </h2>
            <ul className="toc-surprise-list">
              <li>⚡ QR everything: menus, payments, bookings.</li>
              <li>⚡ Speed of trains and urban transport.</li>
              <li>⚡ Cashless lifestyle in many cities.</li>
              <li>⚡ Translation apps become daily essentials.</li>
            </ul>
          </section>

          <section className="toc-card">
            <h2 className="toc-section-title">
              <span className="toc-section-number">7</span>
              🎒 PACKING LIST
            </h2>
            <div className="toc-two-col" style={{ gap: '10px' }}>
              <ul className="toc-list">
                <li>
                  <span className="toc-checkbox" />
                  Passport copies
                </li>
                <li>
                  <span className="toc-checkbox" />
                  Power bank
                </li>
                <li>
                  <span className="toc-checkbox" />
                  Universal adapter
                </li>
              </ul>
              <ul className="toc-list">
                <li>
                  <span className="toc-checkbox" />
                  Walking shoes
                </li>
                <li>
                  <span className="toc-checkbox" />
                  Medications
                </li>
                <li>
                  <span className="toc-checkbox" />
                  Tissues + sanitizer
                </li>
              </ul>
            </div>
          </section>

          <section className="toc-card">
            <h2 className="toc-section-title">
              <span className="toc-section-number">8</span>
              💡 PRO TIPS
            </h2>
            <div className="toc-pro-tips">
              <div className="toc-pro-tip">1. Screenshot addresses, tickets, and key phrases offline.</div>
              <div className="toc-pro-tip">2. Carry one backup payment method at all times.</div>
              <div className="toc-pro-tip">3. Build buffer time between intercity travel days.</div>
            </div>
          </section>

          <section className="toc-card">
            <h2 className="toc-section-title">
              <span className="toc-section-number">9</span>
              🗺️ FIRST-TIME ITINERARY
            </h2>
            <div className="toc-timeline">
              <div className="toc-stop">Beijing · 3d</div>
              <div className="toc-arrow">→</div>
              <div className="toc-stop">Xi'an · 2d</div>
              <div className="toc-arrow">→</div>
              <div className="toc-stop">Chengdu · 2-3d</div>
              <div className="toc-arrow">→</div>
              <div className="toc-stop">Shanghai · 3-4d</div>
            </div>
          </section>
        </div>

        <section className="toc-cta">
          <div className="toc-cta-top">Need help planning? trailofchina.com</div>
          <div className="toc-cta-copy">
            China is overwhelming at first — but with the right preparation, it becomes one of the most rewarding travel experiences.
          </div>
        </section>
      </div>
    </div>
  )
}

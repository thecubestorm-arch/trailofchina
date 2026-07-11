"use client";

import { Check, AlertTriangle, ExternalLink, Info } from "lucide-react";

function SectionCard({
  emoji,
  title,
  children,
}: {
  emoji: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-white rounded-xl border border-[#ebe4d8] shadow-sm overflow-hidden">
      <div className="px-5 py-4 md:px-6 md:py-5 border-b border-[#ebe4d8] bg-[#faf8f4]">
        <h2 className="text-xl md:text-2xl font-bold text-[#1a3a4a] flex items-center gap-3">
          <span className="text-2xl md:text-3xl" aria-hidden="true">
            {emoji}
          </span>
          {title}
        </h2>
      </div>
      <div className="px-5 py-5 md:px-6 md:py-6">{children}</div>
    </section>
  );
}

function TipBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2.5 bg-[#fff8f0] border border-[#f0e0cc] rounded-lg px-4 py-3 text-sm text-[#1a3a4a]">
      <Info size={16} className="text-[#af5d32] mt-0.5 flex-shrink-0" />
      <div>{children}</div>
    </div>
  );
}

function WarningBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2.5 bg-[#fff5f5] border border-[#f0d0d0] rounded-lg px-4 py-3 text-sm text-[#1a3a4a]">
      <AlertTriangle size={16} className="text-[#c53030] mt-0.5 flex-shrink-0" />
      <div>{children}</div>
    </div>
  );
}

export default function ChinaBasicsClient() {
  return (
    <div className="min-h-screen bg-[#f5f1ea]">
      {/* ========== HERO ========== */}
      <section className="bg-[#1a3a4a] text-white">
        <div className="max-w-3xl mx-auto px-4 py-14 md:py-20 text-center">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            China Basics — Everything You Need to Know
          </h1>
          <p className="text-white/80 text-base md:text-lg max-w-xl mx-auto">
            The complete first-timer&apos;s guide: visas, apps, money, transport, and culture.
          </p>
        </div>
      </section>

      {/* ========== MAIN CONTENT ========== */}
      <main className="max-w-3xl mx-auto px-4 py-8 md:py-12 space-y-6 md:space-y-8">
        {/* Sektion 1: Visa & Entry */}
        <SectionCard emoji="🛂" title="Visa & Entry">
          <div className="space-y-4 text-[#1a3a4a]">
            <p className="text-sm md:text-base leading-relaxed">
              Since late 2023/2024, China offers{" "}
              <strong>visa-free entry for 15–30 days</strong> for citizens of many
              European countries, including Switzerland. The exact duration and eligible
              nationalities can change, so double-check shortly before departure.
            </p>

            <div className="bg-[#f5f1ea] rounded-lg px-4 py-3">
              <h3 className="font-semibold text-sm mb-2 flex items-center gap-2">
                <Check size={16} className="text-[#af5d32]" />
                What You Need at Entry
              </h3>
              <ul className="space-y-1.5 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#af5d32] mt-0.5">•</span>
                  <span>
                    A passport valid for{" "}
                    <strong>at least 6 months</strong> beyond your planned stay
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#af5d32] mt-0.5">•</span>
                  <span>A confirmed return or onward flight ticket</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#af5d32] mt-0.5">•</span>
                  <span>Proof of hotel booking or accommodation address</span>
                </li>
              </ul>
            </div>

            <p className="text-sm md:text-base leading-relaxed">
              If you need a longer stay, apply for an{" "}
              <strong>e-Visa (L-Visa)</strong> online before your trip. Processing
              typically takes 4–7 business days.
            </p>

            <p className="text-sm md:text-base leading-relaxed">
              At the border, you&apos;ll have your{" "}
              <strong>fingerprints scanned</strong>. China no longer stamps passports
              at many entry points — everything is handled electronically.
            </p>

            <WarningBox>
              <strong>Important:</strong> Your hotel is legally required to register
              you with the police. They will scan your passport at check-in. If you
              stay in a private apartment (e.g., Airbnb), make sure the host handles
              this registration — or do it yourself at the nearest police station
              within 24 hours.
            </WarningBox>
          </div>
        </SectionCard>

        {/* Sektion 2: Internet & Connectivity */}
        <SectionCard emoji="📶" title="Internet & Connectivity">
          <div className="space-y-4 text-[#1a3a4a]">
            <p className="text-sm md:text-base leading-relaxed">
              China operates the{" "}
              <strong>Great Firewall</strong> — a nationwide internet censorship
              system. Google, Gmail, YouTube, WhatsApp, Instagram, Facebook, X/Twitter,
              and many Western news sites are completely blocked.
            </p>

            <p className="text-sm md:text-base leading-relaxed">
              Without preparation, you will land in China and have no access to the
              services you rely on. Here&apos;s how to stay connected:
            </p>

            <div className="bg-[#f5f1ea] rounded-lg px-4 py-3 space-y-3">
              <h3 className="font-semibold text-sm">Two Ways to Get Online</h3>

              <div className="space-y-1">
                <p className="text-sm font-medium">1. eSIM (Recommended)</p>
                <p className="text-sm text-[#64748b]">
                  Buy and activate before you fly. No physical SIM needed.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <a
                    href="https://www.airalo.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-[#af5d32] hover:underline"
                  >
                    Airalo <ExternalLink size={12} />
                  </a>
                  <a
                    href="https://www.holafly.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-[#af5d32] hover:underline"
                  >
                    Holafly <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              <div className="space-y-1">
                <p className="text-sm font-medium">2. Local Chinese SIM</p>
                <p className="text-sm text-[#64748b]">
                  Cheaper data, but requires passport registration at a carrier store
                  (China Mobile, China Unicom, China Telecom).
                </p>
              </div>
            </div>

            <div className="bg-[#f5f1ea] rounded-lg px-4 py-3 space-y-2">
              <h3 className="font-semibold text-sm">VPN — Install Before You Fly</h3>
              <p className="text-sm text-[#64748b]">
                VPN websites are blocked in China. Download and test your VPN at home.
                Recommended providers:
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href="https://www.expressvpn.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-[#af5d32] hover:underline"
                >
                  ExpressVPN <ExternalLink size={12} />
                </a>
                <a
                  href="https://nordvpn.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-[#af5d32] hover:underline"
                >
                  NordVPN <ExternalLink size={12} />
                </a>
              </div>
            </div>

            <WarningBox>
              <strong>Test your VPN before departure.</strong> Make sure it connects
              reliably. Some providers get blocked — have a backup ready.
            </WarningBox>

            <div className="bg-[#f5f1ea] rounded-lg px-4 py-3 space-y-2">
              <h3 className="font-semibold text-sm">Essential Apps to Download</h3>
              <ul className="space-y-1.5 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#af5d32] mt-0.5">•</span>
                  <span>
                    <strong>WeChat</strong> — The everything app. Messaging, payments,
                    mini-programs, train tickets, food delivery. Everyone in China uses it.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#af5d32] mt-0.5">•</span>
                  <span>
                    <strong>Alipay</strong> — Your digital wallet. Pay for everything
                    with a QR code.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#af5d32] mt-0.5">•</span>
                  <span>
                    <strong>Baidu Maps</strong> — Google Maps does not work in China.
                    Baidu Maps is accurate and reliable.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </SectionCard>

        {/* Sektion 3: Money & Payments */}
        <SectionCard emoji="💳" title="Money & Payments">
          <div className="space-y-4 text-[#1a3a4a]">
            <p className="text-sm md:text-base leading-relaxed">
              China is essentially a{" "}
              <strong>cashless society</strong>. Almost everywhere — from street food
              vendors to high-end malls — accepts payment via QR code. Cash is rarely
              used and often not accepted at all.
            </p>

            <WarningBox>
              <strong>Foreign credit cards</strong> (Visa, Mastercard) are rarely
              accepted outside expensive hotels and some international chains. Do not
              rely on them.
            </WarningBox>

            <div className="bg-[#f5f1ea] rounded-lg px-4 py-3 space-y-3">
              <h3 className="font-semibold text-sm">How to Pay as a Foreigner</h3>

              <div className="space-y-1">
                <p className="text-sm font-medium">Alipay (Tourist Version)</p>
                <p className="text-sm text-[#64748b]">
                  The easiest option for foreigners. Download the app, sign up with your
                  passport, and link an international credit card. You can top up your
                  balance and pay via QR code everywhere.
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-sm font-medium">WeChat Pay</p>
                <p className="text-sm text-[#64748b]">
                  More difficult to set up for foreigners, but possible if you have a
                  friend in China who can verify you. Worth having as a backup.
                </p>
              </div>
            </div>

            <TipBox>
              <strong>Pro tip:</strong> Load money onto Alipay once you&apos;re in China
              (via international card top-up). Having both Alipay and some cash as a
              backup is the safest approach. For cash, exchange a small amount at the
              airport — you likely won&apos;t need it, but it&apos;s good insurance.
            </TipBox>
          </div>
        </SectionCard>

        {/* Sektion 4: Getting Around */}
        <SectionCard emoji="🚄" title="Getting Around">
          <div className="space-y-4 text-[#1a3a4a]">
            <div className="space-y-4">
              <div className="bg-[#f5f1ea] rounded-lg px-4 py-3">
                <h3 className="font-semibold text-sm mb-2 flex items-center gap-2">
                  <span className="text-lg">🚅</span> High-Speed Rail (CRH)
                </h3>
                <p className="text-sm text-[#64748b] leading-relaxed">
                  China&apos;s bullet trains are fast, punctual, and affordable. Speeds
                  exceed 300 km/h on major routes. Book tickets via{" "}
                  <a
                    href="https://www.trip.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#af5d32] hover:underline inline-flex items-center gap-0.5"
                  >
                    Trip.com <ExternalLink size={10} />
                  </a>{" "}
                  (English-friendly) or directly at the station with your passport.
                  Book early for holidays — tickets sell out.
                </p>
              </div>

              <div className="bg-[#f5f1ea] rounded-lg px-4 py-3">
                <h3 className="font-semibold text-sm mb-2 flex items-center gap-2">
                  <span className="text-lg">🚇</span> Metro / Subway
                </h3>
                <p className="text-sm text-[#64748b] leading-relaxed">
                  Every major city has an excellent metro system. Use your{" "}
                  <strong>Alipay QR code</strong> to scan in and out — no need to buy
                  physical tickets. Stations have English signage in big cities
                  (Beijing, Shanghai, Shenzhen, Guangzhou, Chengdu).
                </p>
              </div>

              <div className="bg-[#f5f1ea] rounded-lg px-4 py-3">
                <h3 className="font-semibold text-sm mb-2 flex items-center gap-2">
                  <span className="text-lg">🚕</span> Taxi / DiDi
                </h3>
                <p className="text-sm text-[#64748b] leading-relaxed">
                  DiDi is China&apos;s Uber. Download the app and set it up before you
                  go. It has an English interface. Payment is automatic via the app.
                  Very affordable and reliable.
                </p>
              </div>

              <div className="bg-[#f5f1ea] rounded-lg px-4 py-3">
                <h3 className="font-semibold text-sm mb-2 flex items-center gap-2">
                  <span className="text-lg">✈️</span> Domestic Flights
                </h3>
                <p className="text-sm text-[#64748b] leading-relaxed">
                  For long distances (e.g., Beijing to Chengdu), domestic flights are
                  often cheaper and faster than trains. Book via Trip.com or the
                  airline&apos;s official app.
                </p>
              </div>

              <div className="bg-[#f5f1ea] rounded-lg px-4 py-3">
                <h3 className="font-semibold text-sm mb-2 flex items-center gap-2">
                  <span className="text-lg">🚶</span> Walking & Navigation
                </h3>
                <p className="text-sm text-[#64748b] leading-relaxed">
                  Use <strong>Baidu Maps</strong> or <strong>Amap (高德地图)</strong>.
                  Amap is more accurate but entirely in Chinese. Baidu Maps has some
                  English support. Google Maps does not work in China.
                </p>
              </div>
            </div>
          </div>
        </SectionCard>

        {/* Sektion 5: Culture & Tips */}
        <SectionCard emoji="🏯" title="Culture & Tips">
          <div className="space-y-4 text-[#1a3a4a]">
            <div className="grid gap-3">
              <div className="flex items-start gap-3 bg-[#f5f1ea] rounded-lg px-4 py-3">
                <span className="text-lg mt-0.5">🍜</span>
                <div>
                  <p className="text-sm font-medium">Eating & Dining</p>
                  <p className="text-sm text-[#64748b]">
                    Sharing dishes is the norm. Do not stick chopsticks upright in your
                    rice bowl — it resembles incense at funerals. Slurping noodles is
                    perfectly acceptable.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#f5f1ea] rounded-lg px-4 py-3">
                <span className="text-lg mt-0.5">💰</span>
                <div>
                  <p className="text-sm font-medium">Tipping</p>
                  <p className="text-sm text-[#64748b]">
                    There is no tipping culture in China. Do not tip at restaurants,
                    taxis, or hotels. It can even make people uncomfortable.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#f5f1ea] rounded-lg px-4 py-3">
                <span className="text-lg mt-0.5">📸</span>
                <div>
                  <p className="text-sm font-medium">Photography</p>
                  <p className="text-sm text-[#64748b]">
                    Ask before photographing people. Never photograph military
                    installations, government buildings, or police officers. This is
                    taken very seriously.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#f5f1ea] rounded-lg px-4 py-3">
                <span className="text-lg mt-0.5">🚽</span>
                <div>
                  <p className="text-sm font-medium">Toilets</p>
                  <p className="text-sm text-[#64748b]">
                    Squat toilets are common, especially outside major hotels. Always
                    bring your own toilet paper and hand sanitizer. Public restrooms
                    rarely provide paper.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#f5f1ea] rounded-lg px-4 py-3">
                <span className="text-lg mt-0.5">👕</span>
                <div>
                  <p className="text-sm font-medium">Dress Code</p>
                  <p className="text-sm text-[#64748b]">
                    Dress modestly when visiting temples and rural areas. In big cities,
                    casual Western clothing is fine. Shoulders and knees covered in
                    religious sites.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#f5f1ea] rounded-lg px-4 py-3">
                <span className="text-lg mt-0.5">🗣️</span>
                <div>
                  <p className="text-sm font-medium">Language</p>
                  <p className="text-sm text-[#64748b]">
                    Very few people speak English outside tourist hotels. A translation
                    app (e.g., Google Translate offline packs, or Pleco for Chinese) is
                    essential. Learn a few basic phrases — it goes a long way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SectionCard>

        {/* Sektion 6: Safety */}
        <SectionCard emoji="🛡️" title="Safety">
          <div className="space-y-4 text-[#1a3a4a]">
            <p className="text-sm md:text-base leading-relaxed">
              China is one of the{" "}
              <strong>safest countries for travelers</strong> in terms of violent
              crime. Petty theft is rare, and you can walk around at night in most
              cities without worry.
            </p>

            <p className="text-sm md:text-base leading-relaxed">
              That said, tourists are targeted by specific scams. Be aware of these:
            </p>

            <div className="bg-[#f5f1ea] rounded-lg px-4 py-3 space-y-3">
              <h3 className="font-semibold text-sm">Common Scams to Avoid</h3>

              <div className="space-y-1">
                <p className="text-sm font-medium">🍵 The Tea Scam</p>
                <p className="text-sm text-[#64748b]">
                  Friendly strangers (often English-speaking &quot;students&quot;) invite
                  you to a traditional tea ceremony. You end up with a massively
                  overpriced bill. Politely decline invitations from strangers.
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-sm font-medium">🎨 The Art Student Scam</p>
                <p className="text-sm text-[#64748b]">
                  &quot;Art students&quot; approach you near tourist sites and pressure
                  you into buying overpriced, low-quality paintings. Firmly say no and
                  walk away.
                </p>
              </div>
            </div>

            <div className="bg-[#f5f1ea] rounded-lg px-4 py-3 space-y-2">
              <h3 className="font-semibold text-sm">General Safety Tips</h3>
              <ul className="space-y-1.5 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#af5d32] mt-0.5">•</span>
                  <span>
                    Carry a <strong>photocopy of your passport</strong> with you. Leave
                    the original in your hotel safe.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#af5d32] mt-0.5">•</span>
                  <span>
                    <strong>Do not drink tap water.</strong> Only drink boiled or
                    bottled water. Even locals boil water before drinking.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#af5d32] mt-0.5">•</span>
                  <span>
                    Air quality can be poor in some cities, especially in winter.
                    Bring N95 masks if you are sensitive to pollution.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </SectionCard>

        {/* Sektion 7: Packing List */}
        <SectionCard emoji="🎒" title="Packing List">
          <div className="space-y-4 text-[#1a3a4a]">
            <p className="text-sm md:text-base leading-relaxed">
              Here&apos;s your essential checklist for China. Tick these off before you
              leave:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                { label: "VPN installed & tested", important: true },
                { label: "eSIM activated or roaming plan set up", important: true },
                { label: "Alipay account set up", important: true },
                { label: "WeChat downloaded", important: true },
                { label: "Translation app installed (offline packs)", important: true },
                { label: "Passport (6+ months validity)", important: true },
                { label: "Toilet paper & hand sanitizer", important: false },
                { label: "Power bank", important: false },
                { label: "Universal adapter (Type A/C/I plugs)", important: false },
                { label: "Comfortable walking shoes", important: false },
                { label: "N95 masks (for air quality)", important: false },
                { label: "International health insurance card", important: true },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`flex items-start gap-2.5 rounded-lg px-3 py-2.5 text-sm ${
                    item.important
                      ? "bg-[#fff8f0] border border-[#f0e0cc]"
                      : "bg-[#f5f1ea]"
                  }`}
                >
                  <Check
                    size={16}
                    className={`mt-0.5 flex-shrink-0 ${
                      item.important ? "text-[#af5d32]" : "text-[#64748b]"
                    }`}
                  />
                  <span
                    className={item.important ? "font-medium" : "text-[#64748b]"}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <TipBox>
              Download offline maps and translation packs before you go. Once in China,
              you won&apos;t be able to access Google services to set these up.
            </TipBox>
          </div>
        </SectionCard>
      </main>

      {/* ========== FOOTER CTA ========== */}
      <section className="bg-[#1a3a4a] text-white">
        <div className="max-w-3xl mx-auto px-4 py-10 md:py-14 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Ready for China?
          </h2>
          <p className="text-white/80 text-sm md:text-base max-w-lg mx-auto mb-6">
            You&apos;ve got the basics. Now explore our city guides and itineraries
            to plan your perfect trip.
          </p>
          <p className="text-white/50 text-xs">
            Free guides · Updated regularly · Written by China travelers
          </p>
        </div>
      </section>
    </div>
  );
}

"use client";

import { Check, AlertTriangle, ExternalLink, Info } from "lucide-react";
import {
  PageLayout,
  HeroSection,
  ContentSection,
  TipBox,
  FooterCTA,
} from "@/components/PageLayout";

function WarningBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2.5 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-sm text-amber-800 my-6">
      <AlertTriangle size={16} className="mt-0.5 flex-shrink-0 text-amber-600" />
      <div>{children}</div>
    </div>
  );
}

export default function ChinaBasicsClient() {
  return (
    <PageLayout>
      <HeroSection
        label="First-Timer Guide · Updated 2026"
        title="China Basics — Everything You Need to Know"
        subtitle="The complete first-timer's guide: visas, apps, money, transport, and culture."
      />

      <main className="max-w-4xl mx-auto">
        {/* Visa & Entry */}
        <ContentSection icon="🛂" title="Visa & Entry">
          <div className="space-y-4">
            <p>
              Since late 2023/2024, China offers{" "}
              <strong>visa-free entry for 15–30 days</strong> for citizens of many
              European countries, including Switzerland. Double-check shortly before departure.
            </p>

            <div className="bg-[#faf8f4] rounded-lg px-4 py-3 border border-[#ebe4d8]">
              <h3 className="font-semibold text-sm mb-2 flex items-center gap-2">
                <Check size={16} className="text-[#af5d32]" />
                What You Need at Entry
              </h3>
              <ul className="space-y-1.5 text-sm">
                <li>• Passport valid for <strong>at least 6 months</strong></li>
                <li>• Confirmed return or onward flight ticket</li>
                <li>• Proof of hotel booking or accommodation address</li>
              </ul>
            </div>

            <p>
              At the border, you&apos;ll have your{" "}
              <strong>fingerprints scanned</strong>. China no longer stamps passports
              at many entry points — everything is electronic.
            </p>

            <WarningBox>
              <strong>Important:</strong> Your hotel must register you with the police.
              They scan your passport at check-in. If you stay in a private apartment,
              register yourself at the nearest police station within 24 hours.
            </WarningBox>
          </div>
        </ContentSection>

        {/* Internet & Connectivity */}
        <ContentSection icon="📶" title="Internet & Connectivity">
          <div className="space-y-4">
            <p>
              China operates the <strong>Great Firewall</strong> — Google, Gmail, YouTube,
              WhatsApp, Instagram, Facebook, and many Western sites are blocked.
            </p>

            <div className="grid gap-3">
              <div className="bg-[#faf8f4] rounded-lg px-4 py-3 border border-[#ebe4d8]">
                <h3 className="font-semibold text-sm mb-1">1. eSIM (Recommended)</h3>
                <p className="text-sm text-[#64748b]">Buy and activate before you fly. No physical SIM needed.</p>
                <div className="flex gap-3 mt-2">
                  <a href="https://www.airalo.com" target="_blank" rel="noopener noreferrer"
                     className="text-sm text-[#af5d32] hover:underline inline-flex items-center gap-1">
                    Airalo <ExternalLink size={12} />
                  </a>
                  <a href="https://www.holafly.com" target="_blank" rel="noopener noreferrer"
                     className="text-sm text-[#af5d32] hover:underline inline-flex items-center gap-1">
                    Holafly <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              <div className="bg-[#faf8f4] rounded-lg px-4 py-3 border border-[#ebe4d8]">
                <h3 className="font-semibold text-sm mb-1">2. Local Chinese SIM</h3>
                <p className="text-sm text-[#64748b]">Cheaper data, but requires passport registration at a carrier store.</p>
              </div>

              <div className="bg-[#faf8f4] rounded-lg px-4 py-3 border border-[#ebe4d8]">
                <h3 className="font-semibold text-sm mb-1">3. VPN — Install Before You Fly</h3>
                <p className="text-sm text-[#64748b] mb-2">VPN websites are blocked in China. Download and test at home.</p>
                <div className="flex gap-3">
                  <a href="https://www.expressvpn.com" target="_blank" rel="noopener noreferrer"
                     className="text-sm text-[#af5d32] hover:underline inline-flex items-center gap-1">
                    ExpressVPN <ExternalLink size={12} />
                  </a>
                  <a href="https://nordvpn.com" target="_blank" rel="noopener noreferrer"
                     className="text-sm text-[#af5d32] hover:underline inline-flex items-center gap-1">
                    NordVPN <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>

            <WarningBox>
              <strong>Test your VPN before departure.</strong> Some providers get blocked — have a backup ready.
            </WarningBox>

            <div className="bg-[#faf8f4] rounded-lg px-4 py-3 border border-[#ebe4d8]">
              <h3 className="font-semibold text-sm mb-2">Essential Apps</h3>
              <ul className="space-y-1.5 text-sm">
                <li>• <strong>WeChat</strong> — Messaging, payments, train tickets, food delivery</li>
                <li>• <strong>Alipay</strong> — Your digital wallet. Pay with QR code everywhere.</li>
                <li>• <strong>Baidu Maps</strong> — Google Maps doesn't work in China</li>
              </ul>
            </div>
          </div>
        </ContentSection>

        {/* Money & Payments */}
        <ContentSection icon="💳" title="Money & Payments">
          <div className="space-y-4">
            <p>
              China is essentially a <strong>cashless society</strong>. Almost everywhere
              accepts payment via QR code. Cash is rarely used and often not accepted at all.
            </p>

            <WarningBox>
              <strong>Foreign credit cards</strong> (Visa, Mastercard) are rarely
              accepted outside expensive hotels. Do not rely on them.
            </WarningBox>

            <div className="grid gap-3">
              <div className="bg-[#faf8f4] rounded-lg px-4 py-3 border border-[#ebe4d8]">
                <h3 className="font-semibold text-sm mb-1">Alipay (Tourist Version)</h3>
                <p className="text-sm text-[#64748b]">Download the app, sign up with your passport, and link an international credit card.</p>
              </div>

              <div className="bg-[#faf8f4] rounded-lg px-4 py-3 border border-[#ebe4d8]">
                <h3 className="font-semibold text-sm mb-1">WeChat Pay</h3>
                <p className="text-sm text-[#64748b]">More difficult for foreigners, but possible with a friend in China to verify you.</p>
              </div>
            </div>

            <TipBox variant="tip">
              Load money onto Alipay once you're in China. Having both Alipay and some cash as backup is safest.
            </TipBox>
          </div>
        </ContentSection>

        {/* Getting Around */}
        <ContentSection icon="🚄" title="Getting Around">
          <div className="grid gap-3">
            <div className="bg-[#faf8f4] rounded-lg px-4 py-3 border border-[#ebe4d8]">
              <h3 className="font-semibold text-sm mb-1 flex items-center gap-2">
                <span>🚅</span> High-Speed Rail (CRH)
              </h3>
              <p className="text-sm text-[#64748b]">
                Fast, punctual, affordable. Speeds exceed 300 km/h. Book via{" "}
                <a href="https://www.trip.com" target="_blank" rel="noopener noreferrer"
                   className="text-[#af5d32] hover:underline inline-flex items-center gap-0.5">
                  Trip.com <ExternalLink size={10} />
                </a>{" "}
                or at the station with your passport.
              </p>
            </div>

            <div className="bg-[#faf8f4] rounded-lg px-4 py-3 border border-[#ebe4d8]">
              <h3 className="font-semibold text-sm mb-1 flex items-center gap-2">
                <span>🚇</span> Metro
              </h3>
              <p className="text-sm text-[#64748b]">Use your Alipay QR code to scan in and out. No physical tickets needed. English signage in big cities.</p>
            </div>

            <div className="bg-[#faf8f4] rounded-lg px-4 py-3 border border-[#ebe4d8]">
              <h3 className="font-semibold text-sm mb-1 flex items-center gap-2">
                <span>🚕</span> Taxi / DiDi
              </h3>
              <p className="text-sm text-[#64748b]">China's Uber. Download before you go. English interface available. Very affordable.</p>
            </div>

            <div className="bg-[#faf8f4] rounded-lg px-4 py-3 border border-[#ebe4d8]">
              <h3 className="font-semibold text-sm mb-1 flex items-center gap-2">
                <span>✈️</span> Domestic Flights
              </h3>
              <p className="text-sm text-[#64748b]">For long distances, often cheaper and faster than trains. Book via Trip.com.</p>
            </div>

            <div className="bg-[#faf8f4] rounded-lg px-4 py-3 border border-[#ebe4d8]">
              <h3 className="font-semibold text-sm mb-1 flex items-center gap-2">
                <span>🚶</span> Navigation
              </h3>
              <p className="text-sm text-[#64748b]">Use Baidu Maps or Amap. Google Maps does not work in China.</p>
            </div>
          </div>
        </ContentSection>

        {/* Culture & Tips */}
        <ContentSection icon="🏯" title="Culture & Tips">
          <div className="grid gap-3">
            {[
              { emoji: "🍜", title: "Eating & Dining", text: "Sharing dishes is the norm. Don't stick chopsticks upright in rice. Slurping is acceptable." },
              { emoji: "💰", title: "Tipping", text: "No tipping culture. Don't tip at restaurants, taxis, or hotels." },
              { emoji: "📸", title: "Photography", text: "Ask before photographing people. Never photograph military or government buildings." },
              { emoji: "🚽", title: "Toilets", text: "Squat toilets are common. Bring your own toilet paper and hand sanitizer." },
              { emoji: "👕", title: "Dress Code", text: "Modest in temples and rural areas. Casual Western clothing is fine in cities." },
              { emoji: "🗣️", title: "Language", text: "Very few speak English. A translation app is essential." },
            ].map((item) => (
              <div key={item.title} className="bg-[#faf8f4] rounded-lg px-4 py-3 border border-[#ebe4d8] flex items-start gap-3">
                <span className="text-lg mt-0.5">{item.emoji}</span>
                <div>
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="text-sm text-[#64748b]">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </ContentSection>

        {/* Safety */}
        <ContentSection icon="🛡️" title="Safety">
          <div className="space-y-4">
            <p>
              China is one of the <strong>safest countries for travelers</strong>.
              Violent crime is rare. You can walk around at night without worry.
            </p>

            <div className="bg-[#faf8f4] rounded-lg px-4 py-3 border border-[#ebe4d8] space-y-3">
              <h3 className="font-semibold text-sm">Common Scams to Avoid</h3>

              <div>
                <p className="text-sm font-medium">🍵 The Tea Scam</p>
                <p className="text-sm text-[#64748b]">Friendly strangers invite you to a tea ceremony, then charge an outrageous bill. Politely decline.</p>
              </div>

              <div>
                <p className="text-sm font-medium">🎨 The Art Student Scam</p>
                <p className="text-sm text-[#64748b]">"Art students" pressure you into buying overpriced paintings. Firmly say no and walk away.</p>
              </div>
            </div>

            <div className="bg-[#faf8f4] rounded-lg px-4 py-3 border border-[#ebe4d8]">
              <h3 className="font-semibold text-sm mb-2">General Safety Tips</h3>
              <ul className="space-y-1.5 text-sm">
                <li>• Carry a <strong>photocopy of your passport</strong>. Leave the original in your hotel safe.</li>
                <li>• <strong>Don't drink tap water.</strong> Only boiled or bottled water.</li>
                <li>• Bring N95 masks for poor air quality days.</li>
              </ul>
            </div>
          </div>
        </ContentSection>

        {/* Packing List */}
        <ContentSection icon="🎒" title="Packing List">
          <div className="space-y-4">
            <p>Your essential checklist for China:</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                { label: "VPN installed & tested", important: true },
                { label: "eSIM activated", important: true },
                { label: "Alipay set up", important: true },
                { label: "WeChat downloaded", important: true },
                { label: "Translation app (offline packs)", important: true },
                { label: "Passport (6+ months validity)", important: true },
                { label: "Toilet paper & hand sanitizer", important: false },
                { label: "Power bank", important: false },
                { label: "Universal adapter", important: false },
                { label: "Comfortable walking shoes", important: false },
                { label: "N95 masks", important: false },
                { label: "Health insurance card", important: true },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`flex items-start gap-2.5 rounded-lg px-3 py-2.5 text-sm ${
                    item.important
                      ? "bg-[#fff8f0] border border-[#f0e0cc]"
                      : "bg-[#faf8f4] border border-[#ebe4d8]"
                  }`}
                >
                  <Check size={16} className={`mt-0.5 flex-shrink-0 ${item.important ? "text-[#af5d32]" : "text-[#64748b]"}`} />
                  <span className={item.important ? "font-medium" : "text-[#64748b]"}>{item.label}</span>
                </div>
              ))}
            </div>

            <TipBox variant="tip">
              Download offline maps and translation packs before you go. Once in China, you won't be able to access Google services to set these up.
            </TipBox>
          </div>
        </ContentSection>
      </main>

      <FooterCTA
        title="Ready for China?"
        description="You've got the basics. Now explore our city guides and itineraries."
        primaryHref="/destinations"
        primaryText="See Cities"
        secondaryHref="/plan-your-trip"
        secondaryText="Plan Your Trip"
      />
    </PageLayout>
  );
}

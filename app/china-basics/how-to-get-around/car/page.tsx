import { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb'
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'Car Rental in China | Trail of China',
  description: 'Guide to renting a car in China. Requirements, rental companies, and driving tips.',
};

export default function CarPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-6">
          <Breadcrumb items={[{label:'Home',href:'/'},{label:'China Basics',href:'/china-basics'},{label:'How to Get Around',href:'/china-basics/how-to-get-around'},{label:'Car'}]} />
        </div>
        <h1 className="text-4xl font-bold mb-6 text-[#1a3a4a]">Car Rental</h1>
        
        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Renting a car gives maximum flexibility but is challenging in China. 
            Most travelers prefer trains and ride-hailing, but cars are useful for remote areas.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Requirements</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>Valid foreign license</strong> plus official translation</li>
            <li><strong>OR Chinese driver's license</strong> (difficult to obtain)</li>
            <li><strong>Passport</strong> for registration</li>
            <li><strong>Credit card</strong> for deposit</li>
            <li><strong>Age:</strong> Usually 21-25+ depending on company</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Rental Companies</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>Avis, Hertz, Enterprise:</strong> International chains, airport locations</li>
            <li><strong>eHi (一嗨租车):</strong> Major local company, English website</li>
            <li><strong>Shouqi (首汽租车):</strong> Government-backed, reliable</li>
            <li><strong>Alibaba's car rental:</strong> Through Alipay app</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Driving in China</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li>Drive on the <strong>right</strong> side</li>
            <li>Traffic is aggressive - expect the unexpected</li>
            <li>GPS navigation essential (Baidu Maps)</li>
            <li>Speed cameras everywhere</li>
            <li>Parking can be challenging in cities</li>
            <li>Highways are excellent and well-marked</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Costs</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li>Economy car: ¥200-400 per day</li>
            <li>Insurance: ¥50-100 per day (highly recommended)</li>
            <li>Toll roads: ¥0.5-1 per km on highways</li>
            <li>Gas: Similar to US/European prices</li>
            <li>Parking: ¥10-50 per day in cities</li>
          </ul>
        </section>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
          <h3 className="font-semibold text-amber-800 mb-2">💡 When to Rent</h3>
          <ul className="text-amber-900 space-y-2">
            <li>• Exploring rural areas (Guilin, Yunnan, Tibet)</li>
            <li>• Traveling with family (more convenient)</li>
            <li>• Visiting multiple small villages</li>
            <li>• Avoid if staying mainly in big cities</li>
          </ul>
        </div>

        <div className="bg-[var(--accent-soft)] border-l-4 border-[var(--accent)] p-4">
          <h3 className="font-semibold text-[var(--accent-strong)] mb-2">⚠️ Consider Carefully</h3>
          <ul className="text-[var(--foreground)] space-y-2">
            <li>• Traffic accidents are common</li>
            <li>• Chinese driving style is chaotic</li>
            <li>• Road signs mostly in Chinese</li>
            <li>• Cities have traffic restrictions (license plate rules)</li>
            <li>• Alternative: Hire a driver (¥500-800/day)</li>
          </ul>
        </div>
              <RelatedArticles articles={[{title:'Didi Ride-Hailing',description:'Skip self-driving and let Didi handle it.',href:'/china-basics/how-to-get-around/didi'},{title:'How to Get Around',description:'All transportation options in China.',href:'/china-basics/how-to-get-around'}]} />
      </main>
    </div>
  );
}

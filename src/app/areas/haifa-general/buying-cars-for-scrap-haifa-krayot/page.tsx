import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'קונה רכבים לפירוק בחיפה והקריות | תשלום הוגן ומיידי 24/7',
  description: 'מחפשים מי קונה רכבים לפירוק בחיפה והקריות? שירות פינוי מקצועי, גרירה חינם ותשלום הוגן במזומן. הגעה מהירה לכל האזור. התקשרו עכשיו לקבלת הצעה!',
  alternates: {
    canonical: '/areas/haifa-general/buying-cars-for-scrap-haifa-krayot',
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoTowing',
    'name': 'שירותי גרירה ופירוק רכבים חיפה והקריות',
    'areaServed': { '@type': 'City', 'name': 'Haifa and Krayot' },
    'openingHoursSpecification': { '@type': 'OpeningHoursSpecification', 'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], 'opens': '00:00', 'closes': '23:59' },
    'priceRange': 'וגן',
    'serviceType': 'Car Scrap and Towing',
    'geo': { '@type': 'GeoCoordinates', 'latitude': '32.7940', 'longitude': '34.9896' },
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק באזור חיפה והקריות</h1>
          <p className="text-xl mb-8">שירות מקצועי, מהיר ואמין לפינוי רכבים לפירוק. אנו קונים רכבים פרטיים, מסחריים ורכבי שטח. שימו לב: איננו מטפלים באופנועים.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition">
              התקשרו עכשיו לקבלת הצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפירוק רכבים בחיפה?</h2>
          <ul className="space-y-4 text-lg mb-8">
            <li>✓ שירות מהיר בכל אזור חיפה, הקריות והסביבה.</li>
            <li>✓ פינוי רכבים ללא עלות גרירה.</li>
            <li>✓ תשלום הוגן ומיידי עבור הרכב שלכם.</li>
            <li>✓ טיפול מקצועי בכל סוגי הרכבים (למעט אופנועים).</li>
          </ul>
          <p className="text-lg">
            זקוקים לשירותים נוספים? אנו מציעים גם פתרונות כגון <Link href="/areas/haifa-general/car-scrapping-haifa-krayot" className="text-blue-600 font-semibold underline">car scrapping haifa krayot</Link> או עזרה במקרה של תאונה כמו <Link href="/areas/haifa-general/accident-towing-route-22-haifa-kiryat-ata" className="text-blue-600 font-semibold underline">accident towing route 22 haifa kiryat ata</Link>.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על פירוק רכבים</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold">האם אתם מגיעים לכל אזור הקריות?</h3>
              <p>כן, אנו נותנים מענה מלא לכל אזורי הקריות, כולל שירותים כמו <Link href="/areas/haifa-general/cheap-towing-kiryat-motzkin-fair-price" className="text-blue-600 underline">cheap towing kiryat motzkin fair price</Link>.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">תוך כמה זמן תגיעו לפנות את הרכב?</h3>
              <p>אנו משתדלים להגיע בהקדם האפשרי. למידע על פינוי מהיר בקריות, ניתן לבדוק גם את <Link href="/areas/haifa-general/cash-for-junk-cars-for-parts-kiryat-motzkin-immediate-pickup" className="text-blue-600 underline">cash for junk cars for parts kiryat motzkin immediate pickup</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
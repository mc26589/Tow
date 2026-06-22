import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'גרירת רכב בכביש 22 קרית אתא | שירות 24/7 מחיר הוגן',
  description: 'נתקעתם עם הרכב בכביש 22? אנו מספקים שירותי גרירה מקצועיים לרכבים פרטיים ומסחריים באזור קרית אתא. הגעה מהירה, שירות אדיב ומחיר הוגן. התקשרו עכשיו!',
  alternates: {
    canonical: '/areas/haifa-general/motorcycle-towing-accident-road-22-kiryat-ata',
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoTowing',
    'name': 'שירותי גרירה חיפה והקריות',
    'areaServed': 'Haifa and Krayot',
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      'opens': '00:00',
      'closes': '23:59',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '32.7940',
      'longitude': '35.0610',
    },
    'priceRange': '$',
    'serviceType': 'Towing and Roadside Assistance for Cars and Commercial Vehicles',
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">שירותי גרירה וסיוע לרכב בכביש 22 מחלף קרית אתא</h1>
          <p className="text-lg mb-8">
            אנו מבינים את הדחיפות במקרה של תאונה או תקלה בכביש 22. חשוב לציין: אנו מתמחים בגרירת רכבים פרטיים, מסחריים ורכבי 4x4 בלבד. איננו מספקים שירותי גרירה לאופנועים. אם אתם מחפשים מענה מקצועי לרכב שלכם, הגעתם למקום הנכון.
          </p>
          <div className="flex flex-col gap-4">
            <a
              href={`tel:+${BUSINESS_INFO.phone}`}
              className="bg-white text-black px-6 py-3 rounded-lg font-bold text-center"
            >
              התקשרו לייעוץ וגרירה לרכב
            </a>
            <WhatsAppCTA cityName="חיפה והקריות" />
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">שירותי גרירה באזור הקריות</h2>
        <p className="mb-4">
          אנו מספקים שירותי גרירה מקצועיים 24/7. אם נתקעתם באזור מחלף קרית אתא, אנו מציעים מענה מהיר. לצרכים אחרים, ניתן לבדוק גם שירותי <Link href="/areas/haifa-general/cheap-towing-services-check-post-junction" className="text-blue-600 underline">גרירה בצומת צ'ק פוסט</Link> או <Link href="/areas/haifa-general/affordable-emergency-car-towing-check-post-haifa" className="text-blue-600 underline">שירותי גרירה דחופים באזור</Link>.
        </p>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות (FAQ)</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">האם אתם גוררים אופנועים בכביש 22?</h3>
              <p>לא, אנו מתמקדים אך ורק בגרירת רכבים פרטיים, מסחריים ורכבי שטח (4x4).</p>
            </div>
            <div>
              <h3 className="font-bold">תוך כמה זמן תגיעו למחלף קרית אתא?</h3>
              <p>אנו משתדלים להגיע במהירות האפשרית לכל אזור הקריות, בהתאם לעומסי התנועה בכביש 22.</p>
            </div>
            <div>
              <h3 className="font-bold">האם השירות ניתן 24 שעות ביממה?</h3>
              <p>כן, הצוות שלנו זמין עבורכם מסביב לשעון עבור שירותי גרירה לרכב באזור חיפה והסביבה.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

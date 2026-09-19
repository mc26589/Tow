import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'גרירת רכב בכביש 22 קרית אתא | שירות 24/7 הגעה מהירה!',
  description: 'נתקעתם עם הרכב בכביש 22? שירותי גרירה מקצועיים ומהירים בקרית אתא והסביבה. מחיר הוגן, זמינות מלאה 24/7. לחצו להזמנת גרר והגעה מהירה אליכם.',
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
          <h1 className="text-4xl font-bold mb-6">גרירת רכב בכביש 22 מחלף קרית אתא - שירות מהיר 24/7</h1>
          <p className="text-lg mb-8">
            נתקעתם בכביש 22? אנו כאן כדי לסייע לכם במהירות ובמקצועיות. אנו מתמחים בגרירת רכבים פרטיים, מסחריים ורכבי שטח (4x4) באזור הקריות. חשוב לציין: אנו לא מספקים שירותי גרירה לאופנועים. בין אם מדובר בתקלה מכנית או תאונה, הצוות שלנו ערוך להגיע אליכם עם הציוד המתאים כדי לפנות את הרכב בבטחה.
          </p>
          <div className="flex flex-col gap-4">
            <a
              href={`tel:+${BUSINESS_INFO.phone}`}
              className="bg-white text-black px-6 py-3 rounded-lg font-bold text-center"
            >
              התקשרו עכשיו: שירות גרירה 24/7
            </a>
            <WhatsAppCTA cityName="חיפה והקריות" />
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">שירותי גרירה מקצועיים באזור הקריות</h2>
        <p className="mb-4">
          הדרך שלכם היא האחריות שלנו. אנו מציעים מענה מיידי הכולל <Link href="/areas/haifa-general/emergency-towing-cheap-7-kiryat-bialik" className="text-blue-600 underline">שירותי גרירה זולים בקרית ביאליק</Link> ואזור כביש 22. אם הרכב החשמלי שלכם נתקע, אנו מספקים גם <Link href="/areas/haifa-general/emergency-towing-electric-car-route-22-krayot" className="text-blue-600 underline">גרירת רכב חשמלי בחירום בכביש 22</Link>. לצורך פינוי רכבים ישנים, ניתן ליצור קשר גם בנושא <Link href="/areas/haifa-general/scrap-cars-haifa-krayot-immediate-removal" className="text-blue-600 underline">פינוי גרוטאות רכב בחיפה והקריות</Link>. אנו מחויבים למחיר הוגן ולטיפול מקצועי בכל מצב.
        </p>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות (FAQ)</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg">האם אתם גוררים אופנועים בכביש 22?</h3>
              <p>לא, השירות שלנו ממוקד ברכבים פרטיים, מסחריים ורכבי 4x4. איננו מטפלים באופנועים.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">מהו טווח המחירים לגרירה באזור קרית אתא?</h3>
              <p>המחיר תלוי במרחק הגרירה, סוג הרכב והשעה ביום. אנו מציעים תמחור הוגן ושקוף מראש לכל לקוחותינו באזור הקריות והצפון.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">האם ניתן להזמין גרר במקרה של תאונה?</h3>
              <p>כן, אנו מספקים שירותי גרירה במקרי תאונה 24 שעות ביממה, תוך הקפדה על פינוי מהיר של הרכב כדי למנוע חסימת עורקי תנועה מרכזיים בכביש 22.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
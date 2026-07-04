import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'גרירת רכב בכביש 22 קרית אתא | שירות 24/7 הגעה מהירה',
  description: 'נתקעתם עם הרכב בכביש 22? אנו מספקים שירותי גרירה מקצועיים לרכבים בקרית אתא והסביבה 24/7. הגעה מהירה, מחיר הוגן ושירות אדיב. התקשרו עכשיו!',
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
            אנו מבינים את הדחיפות במקרה של תאונה או תקלה בכביש 22. אנו מתמחים בגרירת רכבים פרטיים, מסחריים ורכבי שטח (4x4) באזור הקריות. חשוב להבהיר: איננו מספקים שירותי גרירה לאופנועים. אם הרכב שלכם נתקע, הצוות המיומן שלנו ערוך להגיע אליכם במהירות עם הציוד המתאים.
          </p>
          <div className="flex flex-col gap-4">
            <a
              href={`tel:+${BUSINESS_INFO.phone}`}
              className="bg-white text-black px-6 py-3 rounded-lg font-bold text-center"
            >
              התקשרו לייעוץ וגרירה לרכב 24/7
            </a>
            <WhatsAppCTA cityName="חיפה והקריות" />
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">שירותי גרירה מקצועיים באזור הקריות</h2>
        <p className="mb-4">
          נתקעתם בדרך? אנו מציעים מגוון פתרונות, החל מ-<Link href="/areas/haifa-general/fast-towing-services-road-22-krayot-bypass" className="text-blue-600 underline">שירותי גרירה מהירים בכביש 22</Link> ועד ל-<Link href="/areas/haifa-general/emergency-light-truck-towing-route-22-krayot-bypass" className="text-blue-600 underline">גרירת רכבים מסחריים קלים</Link>. במידה ומדובר ברכב ישן, ניתן גם לבצע <Link href="/areas/haifa-general/towing-for-scrap-kiryat-ata-road-22" className="text-blue-600 underline">פינוי גרוטאות וגרירה באזור קרית אתא</Link>. אנו מחויבים למחיר הוגן ולשירות מקצועי בכל תנאי הדרך.
        </p>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות (FAQ)</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">האם אתם גוררים אופנועים בכביש 22?</h3>
              <p>לא, שירותי הגרירה שלנו מיועדים לרכבים פרטיים, מסחריים ורכבי 4x4 בלבד. איננו נותנים מענה לאופנועים.</p>
            </div>
            <div>
              <h3 className="font-bold">מה זמן ההגעה הממוצע למחלף קרית אתא?</h3>
              <p>אנו משתדלים להגיע במינימום זמן. זמני ההגעה תלויים בעומסי התנועה בכביש 22, אך אנו עושים כל מאמץ לספק מענה מהיר בכל שעות היממה.</p>
            </div>
            <div>
              <h3 className="font-bold">האם ניתן להזמין גרר במקרה של תאונה?</h3>
              <p>כן, אנו מספקים מענה מהיר במקרי תאונה או תקלה פתאומית לרכבים, תוך הקפדה על בטיחות מקסימלית בפינוי הרכב מהכביש.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
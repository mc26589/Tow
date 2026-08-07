import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'גרר לרכב באחוזה חיפה | שירות גרירה 24/7 - מחיר הוגן',
  description: 'נתקעת עם הרכב באזור אחוזה בחיפה? אנו מציעים שירותי גרירה מקצועיים לרכבים פרטיים ומסחריים 24/7. הגעה מהירה, שירות אדיב ומחיר הוגן. התקשרו עכשיו!',
  alternates: {
    canonical: '/areas/haifa-general/motorcycle-towing-ahuza-haifa',
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoTowing',
    'name': 'שירותי גרירה וחילוץ חיפה והקריות',
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
      'longitude': '34.9896',
    },
    'priceRange': '$',
    'serviceType': 'Towing and Roadside Assistance for Cars and 4x4',
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">שירותי גרירה לרכב באחוזה חיפה</h1>
          <p className="text-lg mb-8">
            אנו מבינים את הצורך בשירותי גרירה מהירים באזור אחוזה בחיפה. חשוב להדגיש: אנו מתמחים אך ורק בגרירת רכבים פרטיים, רכבים מסחריים ורכבי 4x4. 
            אם אתם מחפשים <Link href="/areas/haifa-general/cheap-car-towing-service-ahuzah-haifa-transparent-pricing" className="underline font-bold">שירות גרירה זול באחוזה</Link> או צריכים חילוץ לרכב נמוך דרך <Link href="/areas/haifa-general/affordable-low-clearance-sports-car-towing-ahuzah-haifa" className="underline font-bold">שירות גרירה לרכב ספורט נמוך</Link>, הצוות שלנו זמין עבורכם 24/7.
          </p>
          <div className="flex gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשר עכשיו
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">למה לבחור בנו לגרירת רכבים באחוזה?</h2>
        <ul className="list-disc pr-6 space-y-2 mb-8">
          <li>זמינות מלאה 24/7 לכל קריאה באזור חיפה.</li>
          <li>ציוד גרירה מתקדם המבטיח שמירה מקסימלית על רכבך.</li>
          <li>צוות מיומן ומקצועי עם ניסיון רב בשטח.</li>
          <li>שקיפות מלאה והצעת מחיר הוגנת ללא הפתעות.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">שאלות נפוצות על גרירת רכב בחיפה</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold">האם אתם מגררים אופנועים?</h3>
            <p>לא, אנו מתמקדים אך ורק במתן שירותי גרירה וחילוץ לרכבים פרטיים, מסחריים ורכבי שטח.</p>
          </div>
          <div>
            <h3 className="font-bold">כמה זמן לוקח לגרר להגיע לאחוזה?</h3>
            <p>אנו משתדלים להגיע לכל נקודה באחוזה ובמרכז חיפה תוך זמן קצר ככל האפשר בהתאם לעומסי התנועה.</p>
          </div>
          <div>
            <h3 className="font-bold">האם השירות זמין בסופי שבוע?</h3>
            <p>כן, אנו מספקים שירותי גרירה 24 שעות ביממה, 7 ימים בשבוע, כולל שבתות וחגים.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
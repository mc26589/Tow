import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'גרירת משאיות כבדות בקריית חיים | הגעה מהירה 24/7 | מחיר הוגן',
  description: 'נתקעתם עם משאית באזור התעשייה קריית חיים? שירות גרירה מקצועי לרכבים כבדים ומשאיות, הגעה מהירה תוך זמן קצר, מחיר הוגן וזמינות 24/7. התקשרו עכשיו לפתרון מיידי!',
  alternates: {
    canonical: '/areas/haifa-general/heavy-duty-truck-towing-kiryat-haim-industrial-zone',
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoTowing',
    'name': 'שירותי גרירה וחילוץ חיפה והקריות',
    'areaServed': 'Kiryat Haim Industrial Zone',
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      'opens': '00:00',
      'closes': '23:59',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '32.8150',
      'longitude': '35.0650',
    },
    'priceRange': '₪₪-₪₪₪',
    'serviceType': 'Heavy Duty Truck Towing',
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירות גרירת משאיות כבדות באזור התעשייה קריית חיים</h1>
          <p className="text-lg mb-8">
            זקוקים לחילוץ דחוף? אנו מתמחים בגרירת משאיות, רכבים מסחריים וציוד כבד. שירות מקצועי, מהיר ובטוח 24/7. 
            אנו פועלים בפריסה רחבה וזמינים לכל קריאה באזור התעשייה, בחיבור מהיר לצירי תנועה מרכזיים כולל <Link href="/areas/haifa-general/towing-service-road-22-krayot-bypass" className="underline">שירותי גרירה בכביש 22 עוקף קריות</Link>.
          </p>
          <div className="flex gap-4">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white text-black px-6 py-3 rounded-lg font-bold">
              התקשרו עכשיו: {BUSINESS_INFO.phone}
            </a>
            <WhatsAppCTA cityName="קריית חיים" />
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">למה לבחור בשירותי הגרירה שלנו למשאיות?</h2>
          <p className="mb-4">זמן השבתה שווה כסף. הצוות שלנו מיומן בטיפול במצבים מורכבים של משאיות ורכבים כבדים. אנו מבצעים חילוצים גם באזורים סמוכים, כגון <Link href="/areas/haifa-general/affordable-flatbed-towing-kiryat-bialik-industrial-zone" className="underline">גרירה באזור התעשייה קריית ביאליק</Link>.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-8">
            <li>זמינות מלאה 24/7 – לא משאירים אתכם בשטח.</li>
            <li>ציוד הידראולי מתקדם לגרירת משקלים כבדים.</li>
            <li>שקיפות מלאה במחיר ושירות מקצועי ללא פשרות.</li>
            <li>מומחיות בחילוצי דרך דחופים, בדומה לסטנדרטים של <Link href="/areas/haifa-general/cheap-towing-check-post-haifa-fast-service" className="underline">גרירה מהירה בצומת צ'ק פוסט</Link>.</li>
          </ul>

          <div className="mt-10 border-t border-gray-700 pt-8">
            <h3 className="text-xl font-bold mb-4">שאלות נפוצות</h3>
            <div className="space-y-6">
              <div>
                <p className="font-bold text-yellow-400">מהו זמן ההגעה המשוער לקריית חיים?</p>
                <p className="text-gray-300">אנו שואפים להגיע בתוך דקות ספורות מרגע הקריאה באזור התעשייה, הודות למיקום האסטרטגי שלנו בסמוך לכבישים ראשיים.</p>
              </div>
              <div>
                <p className="font-bold text-yellow-400">האם אתם מבצעים פינוי משאיות במצב גרוטאה?</p>
                <p className="text-gray-300">
                  כן, אנו מספקים שירותים משלימים למגוון מצבים. בין אם מדובר בפינוי משאית לפירוק או צורך ב-<Link href="/areas/haifa-general/junk-car-removal-kiryat-yam-immediate-pickup" className="underline">פינוי רכבים לפירוק בקריית ים</Link>, אנו כאן לעזור. 
                </p>
              </div>
              <div>
                <p className="font-bold text-yellow-400">האם אתם גוררים רכבים פרטיים?</p>
                <p className="text-gray-300">בוודאי. אנו מספקים שירותי גרירה לכל סוגי הרכבים, כולל <Link href="/areas/haifa-general/cheap-private-car-towing-ahuza-haifa" className="underline">גרירת רכבים פרטיים באחוזה חיפה</Link> במחיר הוגן.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'גרירת משאיות בקריית חיים | חילוץ מהיר 24/7 | מחיר הוגן',
  description: 'נתקעתם עם משאית באזור התעשייה קריית חיים? גרירת משאיות כבדות, חילוץ רכבים מסחריים וציוד הנדסי. הגעה מהירה, שירות אמין ומחיר הוגן. התקשרו עכשיו!',
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
            זקוקים לחילוץ דחוף למשאית או לרכב כבד? הצוות שלנו מתמחה בגרירת משאיות, רכבים מסחריים וציוד הנדסי כבד. 
            אנו זמינים 24/7 לכל קריאה באזור התעשייה וסביבתו, ומציעים פתרונות מקצועיים גם עבור <Link href="/areas/haifa-general/affordable-emergency-towing-route-22-krayot-bypass" className="underline">גרירה דחופה בכביש 22 עוקף קריות</Link>.
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
          <p className="mb-4">
            עצירה של משאית באזור התעשייה גורמת לעיכובים קריטיים בעבודה. אנו מבינים את המשמעות ופועלים במהירות. 
            אנו מעניקים שירותים גם לאזורים סמוכים, כגון <Link href="/areas/haifa-general/affordable-flatbed-towing-kiryat-bialik-industrial-zone" className="underline">גרירת משטוח בקריית ביאליק</Link>.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-8">
            <li>זמינות מלאה 24/7 – צוות זמין לכל אורך הקריות.</li>
            <li>ציוד הידראולי חזק ומנופים המותאמים למשקלים כבדים.</li>
            <li>מומחיות בחילוץ מורכב בדומה ל-<Link href="/areas/haifa-general/towing-after-accident-check-post-haifa" className="underline">גרירה לאחר תאונה בצומת צ'ק פוסט</Link>.</li>
            <li>מחירים שקופים ללא הפתעות – שירות הוגן ואמין.</li>
          </ul>

          <div className="mt-10 border-t border-gray-700 pt-8">
            <h3 className="text-xl font-bold mb-4">שאלות נפוצות</h3>
            <div className="space-y-6">
              <div>
                <p className="font-bold text-yellow-400">תוך כמה זמן תגיעו למשאית שלי בקריית חיים?</p>
                <p className="text-gray-300">אנו שואפים להגיע בתוך 30 עד 45 דקות מרגע הקריאה, הודות למיקום הניידות שלנו בסמוך לצירים המרכזיים.</p>
              </div>
              <div>
                <p className="font-bold text-yellow-400">האם אתם מבצעים חילוץ של רכבים קלים?</p>
                <p className="text-gray-300">בהחלט. אנו נותנים שירות לכל סוגי הרכבים. אם נתקעת באזור, תוכל לקבל מידע נוסף על <Link href="/areas/haifa-general/cheap-car-towing-service-ahuzah-haifa-transparent-pricing" className="underline">שירותי גרירה זולים באחוזה</Link>.</p>
              </div>
              <div>
                <p className="font-bold text-yellow-400">מה עלות הגרירה באזור התעשייה?</p>
                <p className="text-gray-300">המחיר משתנה בהתאם לסוג הרכב ומרחק הגרירה. אנו מתחייבים למחיר הוגן בהתאם למחירון השוק. במידה ומדובר ברכב ישן, ניתן לבדוק גם <Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-towing-included" className="underline">קניית רכבים לפירוק כולל גרירה בחיפה</Link>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
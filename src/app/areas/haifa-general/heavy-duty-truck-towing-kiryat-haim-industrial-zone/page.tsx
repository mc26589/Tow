import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'גרירת משאיות כבדות בקריית חיים | חילוץ מהיר 24/7 | מחיר הוגן',
  description: 'נתקעתם עם משאית באזור התעשייה קריית חיים? שירות גרירה מקצועי לרכבים כבדים ומשאיות, הגעה מהירה תוך זמן קצר, מחיר הוגן וזמינות 24/7. התקשרו עכשיו!',
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
            אנו זמינים 24/7 לכל קריאה באזור התעשייה וסביבתו, עם פתרונות מקצועיים ל-<Link href="/areas/haifa-general/towing-stuck-car-road-22-krayot" className="underline">גרירת רכבים תקועים בכביש 22 עוקף קריות</Link>.
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
            אנו מעניקים שירותים גם לאזורים סמוכים, כגון <Link href="/areas/haifa-general/grar-zol-lerchev-takua-bekiryat-yam" className="underline">גרירה משתלמת לרכבים תקועים בקריית ים</Link>.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-8">
            <li>זמינות מלאה 24/7 – צוות זמין באזור הקריות.</li>
            <li>ציוד הידראולי חזק ומנופים המותאמים למשקלים כבדים.</li>
            <li>מומחיות בטיפול במקרי חירום, בדומה ל-<Link href="/areas/haifa-general/emergency-car-recovery-ditch-route-4-check-post" className="underline">חילוץ רכבים שנפלו לתעלה בצומת צ'ק פוסט</Link>.</li>
            <li>מחירים שקופים ללא הפתעות – שירות הוגן ואמין.</li>
          </ul>

          <div className="mt-10 border-t border-gray-700 pt-8">
            <h3 className="text-xl font-bold mb-4">שאלות נפוצות</h3>
            <div className="space-y-6">
              <div>
                <p className="font-bold text-yellow-400">תוך כמה זמן תגיעו למשאית שלי בקריית חיים?</p>
                <p className="text-gray-300">אנו שואפים להגיע בתוך 30-45 דקות מרגע הקריאה, הודות למיקום הניידות שלנו בסמוך לצירים המרכזיים.</p>
              </div>
              <div>
                <p className="font-bold text-yellow-400">האם אתם מבצעים גרירה גם לרכבים פרטיים?</p>
                <p className="text-gray-300">בהחלט. אנו נותנים שירות לכל סוגי הרכבים. אם נתקעת באזור, תוכל לקבל מידע נוסף על <Link href="/areas/haifa-general/emergency-towing-horev-ahuza-haifa" className="underline">גרירת חירום באחוזה ומרכז הכרמל</Link>.</p>
              </div>
              <div>
                <p className="font-bold text-yellow-400">מה עלות הגרירה באזור התעשייה?</p>
                <p className="text-gray-300">המחיר משתנה בהתאם לסוג הרכב ומרחק הגרירה. אנו מתחייבים למחיר הוגן בהתאם למחירון השוק. למידע על פינוי גרוטאות מיוחד, בדקו גם <Link href="/areas/haifa-general/kaniyat-rekhavim-yeshanim-lehalafim-kiryat-yam-pinui-meyadi" className="underline">קניית רכבים לפירוק בקריית ים</Link>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
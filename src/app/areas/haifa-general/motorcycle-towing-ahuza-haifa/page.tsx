import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "גרר באחוזה חיפה 24/7 | חילוץ רכבים מקצועי ומהיר | מחיר הוגן",
  description: "נתקעתם עם הרכב באחוזה, חיפה? שירותי גרירה וחילוץ רכבים 24/7. הגעה מהירה, מחיר הוגן וצוות אמין. התקשרו עכשיו לקבלת סיוע!",
  alternates: {
    canonical: "/areas/haifa-general/motorcycle-towing-ahuza-haifa"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": "Haifa and Krayot",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7940",
      "longitude": "34.9896"
    },
    "priceRange": "$",
    "serviceType": "Towing and Roadside Assistance for cars and commercial vehicles"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירה וחילוץ באחוזה, חיפה - זמינות 24/7</h1>
          <p className="text-xl mb-8">צריכים גרר דחוף? אנו מתמחים בחילוץ וגרירת רכבים פרטיים, רכבי שטח ורכבים מסחריים באחוזה ובכל חיפה. שירות אמין במחיר הוגן.</p>
          <div className="flex flex-col md:flex-row gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              התקשרו עכשיו: {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">שירותי גרירה מקצועיים באזור אחוזה והכרמל</h2>
        <p className="mb-4">
          נתקעתם עם הרכב באזור אחוזה? הצוות שלנו מיומן במתן מענה מהיר לכל סוגי הרכבים. אם הרכב שלכם יצא מכלל שימוש, ייתכן שתרצו לבדוק גם אפשרויות של <Link href="/areas/haifa-general/buying-cars-for-scrap-ahoza-haifa" className="text-blue-600 underline">פירוק רכבים באחוזה</Link> או <Link href="/areas/haifa-general/car-rescue-from-mud-carmel-area" className="text-blue-600 underline">חילוץ רכבים מבוץ באזור הכרמל</Link> במידת הצורך.
        </p>
        <p className="mb-6">
          שימו לב: אנו מתמחים בגרירת רכבים ורכבים מסחריים. איננו מספקים שירותי גרירה לאופנועים, אך נשמח לסייע לכם בכל בעיה אחרת בכביש.
        </p>
        
        <div className="mt-12 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">שאלות נפוצות (FAQ)</h3>
            <div className="space-y-4">
                <div>
                    <p className="font-bold">כמה זמן לוקח לגרר להגיע לאחוזה?</p>
                    <p>אנו משתדלים להגיע לכל קריאה באזור חיפה והכרמל בזמן הקצר ביותר, בדרך כלל תוך 30-60 דקות בהתאם לעומסי התנועה.</p>
                </div>
                <div>
                    <p className="font-bold">האם אתם גוררים אופנועים?</p>
                    <p>לא, שירותי הגרירה שלנו מתמקדים ברכבים פרטיים, רכבי שטח ורכבים מסחריים בלבד.</p>
                </div>
                <div>
                    <p className="font-bold">האם השירות זמין גם בסופי שבוע?</p>
                    <p>כן, אנו זמינים 24/7, כולל שבתות וחגים, כדי להבטיח שלא תישארו תקועים בשום מצב.</p>
                </div>
            </div>
        </div>
      </section>
    </main>
  );
}
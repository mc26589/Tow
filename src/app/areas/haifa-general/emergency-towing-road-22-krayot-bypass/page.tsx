import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'גרר דחוף בכביש 22 עוקף קריות | הגעה מהירה 24/7',
  description: 'נתקעתם בכביש 22 עוקף קריות? אנו מספקים שירותי גרירה מקצועיים ומהירים לרכבים פרטיים ומסחריים. הגעה תוך זמן קצר, מחיר הוגן ושירות אדיב. התקשרו עכשיו!',
  alternates: {
    canonical: '/areas/haifa-general/emergency-towing-road-22-krayot-bypass'
  }
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoTowing',
    'name': 'שירותי גרירה בכביש 22 עוקף קריות',
    'areaServed': 'Haifa and Krayot',
    'priceRange': '₪',
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      'opens': '00:00',
      'closes': '23:59'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '32.8190',
      'longitude': '35.0550'
    },
    'serviceType': ['Emergency Towing', 'Roadside Assistance']
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר דחוף לכביש 22 עוקף קריות</h1>
          <p className="text-xl mb-8 leading-relaxed">
            נתקעתם עם הרכב בכביש 22? הצוות שלנו זמין עבורכם 24/7. אנו מתמחים בחילוץ וגרירת רכבים פרטיים, מסחריים ורכבי 4x4 לאורך ציר עוקף קריות. 
            שימו לב: אנו לא מספקים שירותי גרירה לאופנועים. אם אתם זקוקים גם לפתרונות נוספים, ניתן לבדוק אצלנו שירותים כמו <Link href="/areas/haifa-general/cheap-towing-check-post-haifa-fast-service" className="underline">גרירה בצומת צ'ק פוסט</Link> או <Link href="/areas/haifa-general/affordable-flatbed-towing-kiryat-bialik-industrial-zone" className="underline">גרירת רכבים באזור התעשייה קריית ביאליק</Link>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors text-center"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו בכביש 22?</h2>
        <ul className="space-y-4 text-lg mb-12">
          <li>✓ זמינות מלאה 24/7 לכל קריאת חירום.</li>
          <li>✓ הגעה מהירה לכל נקודה בציר עוקף קריות.</li>
          <li>✓ שירות מקצועי לרכבים פרטיים, מסחריים ו-4x4.</li>
          <li>✓ מחירים הוגנים ושקיפות מלאה מול הלקוח.</li>
        </ul>

        <h2 className="text-3xl font-bold mb-6">שאלות נפוצות</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-xl">תוך כמה זמן אתם מגיעים לכביש 22?</h3>
            <p>אנו מבינים את הדחיפות שבנתקעתם בכביש מהיר. אנו שואפים להגיע לכל נקודה בעוקף קריות בזמן הקצר ביותר האפשרי.</p>
          </div>
          <div>
            <h3 className="font-bold text-xl">האם אתם גוררים רכבים מסחריים?</h3>
            <p>כן, אנו מספקים שירותי גרירה ופינוי לרכבים פרטיים ורכבים מסחריים קלים עד בינוניים. לבירור התאמת סוג הרכב, צרו קשר עם המוקד.</p>
          </div>
          <div>
            <h3 className="font-bold text-xl">מהו אזור הפעילות שלכם?</h3>
            <p>אנו פרוסים בכל אזור חיפה והקריות, כולל שירותים מיוחדים כמו <Link href="/areas/haifa-general/junk-car-removal-kiryat-yam-immediate-pickup" className="text-blue-600">פינוי גרוטאות בקריית ים</Link>.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
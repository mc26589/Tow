import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'חילוץ רכב במנהרות הכרמל - הגעה מהירה 24/7 | מחיר הוגן',
  description: 'נתקעתם ברכב במנהרות הכרמל? אנו מספקים חילוץ רכב מהיר, מקצועי ובטוח לכל אורך המנהרות. הגעה לכל נקודה בחיפה 24/7 במחיר הוגן. התקשרו עכשיו!',
  alternates: {
    canonical: '/areas/haifa-general/car-rescue-carmel-tunnels-haifa'
  }
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoTowing',
    'name': 'שירותי גרירה וחילוץ חיפה והקריות',
    'areaServed': 'Haifa',
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      'opens': '00:00',
      'closes': '23:59'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '32.7940',
      'longitude': '34.9896'
    },
    'priceRange': '₪',
    'serviceType': 'Emergency Car Towing and Rescue'
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ רכב במנהרות הכרמל - מענה מהיר 24/7</h1>
          <p className="text-xl mb-8">נתקעתם בתוך המנהרות? אל תישארו בסיכון! צוות החילוץ שלנו ערוך להגעה מהירה לחילוץ בטוח ומקצועי.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              חיוג מהיר למוקד החילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">מענה מיידי לחילוץ בתוך מנהרות הכרמל</h2>
        <p className="mb-4">אם הרכב שלכם נתקע בתוך מנהרות הכרמל, אתם זקוקים לחברה מקצועית ומנוסה בטיפול בתקלות בתוואי תת-קרקעי מורכב. אנו מציעים שירות גרירה מהיר לכל ציר המנהרות.</p>
        
        <p className="mb-4">
          זקוקים לשירות באזור? אנו מציעים גם <Link href="/areas/haifa-general/affordable-car-breakdown-towing-check-post-haifa-krayot" className="text-blue-600 underline">שירותי גרירה בצ'ק פוסט</Link>, סיוע של <Link href="/areas/haifa-general/emergency-car-recovery-ditch-route-4-check-post" className="text-blue-600 underline">חילוץ רכבים מתעלה בכביש 4</Link> או עזרה מקצועית של <Link href="/areas/haifa-general/emergency-light-truck-towing-route-22-krayot-bypass" className="text-blue-600 underline">גרירת רכבים קלים בכביש 22</Link>.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">יתרונות השירות שלנו</h3>
        <ul className="list-disc pr-6 space-y-2 mb-8">
          <li>זמינות 24/7 לכל קריאה בחיפה ובמנהרות.</li>
          <li>ניסיון עשיר בטיפול בתקלות רכב בתוך תוואי מנהרות.</li>
          <li>ציוד גרירה מתקדם ומודרני לשמירה על הרכב.</li>
          <li>מחירים הוגנים ושירות שקוף ללא הפתעות.</li>
        </ul>

        <section className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">שאלות נפוצות</h3>
          <div className="space-y-4">
            <div>
              <p className="font-bold">כמה זמן לוקח לכם להגיע למנהרות הכרמל?</p>
              <p>אנו פרוסים בנקודות אסטרטגיות ליד הכניסות למנהרות וערוכים להגעה מהירה מאוד לכל נקודה לאורך הציר, בהתאם לעומסי התנועה.</p>
            </div>
            <div>
              <p className="font-bold">האם אתם גוררים אופנועים במנהרות?</p>
              <p>השירות שלנו מתמקד בחילוץ רכבים פרטיים, רכבי שטח ורכבים מסחריים. במידה ואתם זקוקים לעזרה עם אופנוע באזור, נמליץ לפנות לשירות ייעודי של <Link href="/areas/haifa-general/heavy-motorcycle-towing-freud-haifa-price" className="text-blue-600 underline">גרירת אופנועים כבדים בחיפה</Link>.</p>
            </div>
            <div>
              <p className="font-bold">מה עושים אם הרכב נתקע באמצע הנסיעה במנהרה?</p>
              <p>יש להדליק אורות מצוקה, לנסות להיצמד לשוליים בבטחה, ולחייג אלינו מיד. מומלץ להמתין בתוך הרכב רק אם זה בטוח, או לעבור אל מעבר למעקה הבטיחות.</p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'חילוץ רכב ממנהרות הכרמל - הגעה מהירה 24/7 | מחיר הוגן',
  description: 'נתקעתם ברכב בתוך מנהרות הכרמל? אנו מספקים חילוץ רכב מהיר, מקצועי ובטוח 24/7. הגעה מהירה לכל נקודה במנהרות חיפה. התקשרו עכשיו לסיוע!',
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ רכב תקוע במנהרות הכרמל - מענה 24/7</h1>
          <p className="text-xl mb-8">נתקעתם בתוך המנהרות? אל תחכו! צוות החילוץ שלנו בדרך אליכם לחילוץ בטוח ומהיר.</p>
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
        <p className="mb-4">אם הרכב שלכם נתקע בתוך מנהרות הכרמל, אתם זקוקים לחברה מקצועית שיודעת לפעול בתוואי מורכב. אנו מבינים את הדחיפות שבשהייה בתוך המנהרה ומציעים שירות גרירה מהיר לכל ציר המנהרות בחיפה.</p>
        
        <p className="mb-4">
          זקוקים לשירות נוסף באזור? אנו מציעים גם <Link href="/areas/haifa-general/emergency-towing-horev-ahuza-haifa" className="text-blue-600 underline">שירותי גרירה בחורב ואחוזה</Link> וכן סיוע בדרכים כגון <Link href="/areas/haifa-general/24-7-towing-electric-vehicle-battery-dead-ahuzah-haifa" className="text-blue-600 underline">חילוץ לרכבים חשמליים</Link>.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">יתרונות השירות שלנו</h3>
        <ul className="list-disc pr-6 space-y-2 mb-8">
          <li>זמינות 24/7 לכל קריאה בחיפה והקריות.</li>
          <li>ניסיון עשיר בחילוץ רכבים מתוך מנהרות.</li>
          <li>ציוד גרירה מתקדם ומודרני לשמירה על שלמות הרכב.</li>
          <li>מחירים הוגנים ושירות שקוף ללא הפתעות.</li>
        </ul>

        <section className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">שאלות נפוצות</h3>
          <div className="space-y-4">
            <div>
              <p className="font-bold">כמה זמן לוקח לכם להגיע למנהרות?</p>
              <p>אנו ערוכים להגעה מהירה מאוד לכל נקודה לאורך מנהרות הכרמל, בהתאם לעומסי התנועה.</p>
            </div>
            <div>
              <p className="font-bold">האם אתם גוררים גם אופנועים?</p>
              <p>השירות שלנו מתמקד בחילוץ רכבים פרטיים, מסחריים ורכבי 4x4. איננו מספקים שירותי חילוץ לאופנועים.</p>
            </div>
            <div>
              <p className="font-bold">מה עושים אם הרכב נתקע באמצע נסיעה במנהרה?</p>
              <p>יש להדליק אורות מצוקה, לנסות להגיע לשוליים אם ניתן, ולחייג אלינו בהקדם האפשרי לסיוע.</p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
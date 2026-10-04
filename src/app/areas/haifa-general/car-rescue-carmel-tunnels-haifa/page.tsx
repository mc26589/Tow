import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'חילוץ רכב במנהרות הכרמל - הגעה תוך 30 דקות | 24/7',
  description: 'נתקעתם ברכב במנהרות הכרמל? שירות חילוץ מקצועי ומהיר לכל אורך ציר המנהרות בחיפה. מחירים הוגנים, זמינות מלאה 24/7. התקשרו עכשיו לעזרה מיידית!',
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
        <p className="mb-4">אם הרכב שלכם נתקע בתוך מנהרות הכרמל, אתם זקוקים לחברה מקצועית ומנוסה בטיפול בתקלות בתוואי תת קרקעי מורכב. אנו מציעים שירות גרירה מהיר לכל ציר המנהרות.</p>
        
        <p className="mb-4">
          אנו מספקים פתרונות משלימים באזור, כגון <Link href="/areas/haifa-general/cheap-towing-check-post-haifa" className="text-blue-600 underline">שירותי גרירה זולים בצ'ק פוסט</Link>, סיוע של <Link href="/areas/haifa-general/emergency-car-breakdown-towing-route-22-check-post-haifa-cheap" className="text-blue-600 underline">גרירת רכבים תקועים בכביש 22</Link> וכן <Link href="/areas/haifa-general/emergency-mud-recovery-service-carmel-forest-haifa" className="text-blue-600 underline">חילוצי שטח ביערות הכרמל</Link>.
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
              <p className="font-bold">תוך כמה זמן תגיעו למנהרות הכרמל?</p>
              <p>אנו פרוסים בנקודות אסטרטגיות ליד הכניסות למנהרות וערוכים להגעה מהירה מאוד, בהתאם לעומסי התנועה באותו הרגע.</p>
            </div>
            <div>
              <p className="font-bold">מה עושים במקרה של תקלה במנהרה?</p>
              <p>חובה להדליק אורות מצוקה, להיצמד לשוליים במידת האפשר ולחייג אלינו. מומלץ לעבור אל מעבר למעקה הבטיחות ולהמתין לכוחות החילוץ במקום בטוח.</p>
            </div>
            <div>
              <p className="font-bold">האם אתם מבצעים חילוץ של רכבים חשמליים?</p>
              <p>כן, אנו ערוכים לטיפול וגרירה של רכבים חשמליים כולל סיוע במקרים של <Link href="/areas/haifa-general/electric-vehicle-flat-battery-towing-route-22-krayot" className="text-blue-600 underline">פריקת סוללה ברכב חשמלי</Link>.</p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
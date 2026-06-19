import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "גרירת רכבים באחוזה חיפה 24/7 | שירות מהיר ומחיר הוגן",
  description: "נתקעת באחוזה? אנו מספקים שירותי גרירה וחילוץ מקצועיים לרכבים פרטיים, מסחריים ו-4x4 בחיפה. הגעה מהירה, שירות אמין ומחיר הוגן. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/heavy-motorcycle-breakdown-towing-ahuzah-haifa"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ באחוזה, חיפה",
    "areaServed": "Haifa",
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
    "priceRange": "$$,$",
    "serviceType": ["Towing", "Roadside Assistance"]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרירת רכבים באחוזה חיפה - שירות מקצועי 24/7</h1>
          <p className="text-xl mb-8">נתקעת באחוזה? שירות גרירה מיומן לרכבים פרטיים, מסחריות ורכבי שטח. אנחנו בדרך אליך.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="אחוזה, חיפה" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירותי גרירה וחילוץ באזור אחוזה</h2>
        <div className="prose max-w-3xl mb-8">
          <p>אנו מציעים פתרונות גרירה מתקדמים לתושבי אחוזה והסביבה. בין אם הרכב לא מניע או שנתקעתם בדרך, הצוות שלנו זמין עבורכם. <strong>חשוב לציין: השירות מיועד לרכבים פרטיים, מסחריים ו-4x4 בלבד. איננו מספקים גרירת אופנועים או דו-גלגלי.</strong></p>
          <p>זקוקים למידע נוסף? ניתן לבדוק גם אפשרויות ל<Link href="/areas/haifa-general/cheap-car-towing-service-ahuzah-haifa-transparent-pricing">שירות גרירה זול באחוזה עם מחיר שקוף</Link> או לבדוק פתרונות ל<Link href="/areas/haifa-general/24-7-towing-electric-vehicle-battery-dead-ahuzah-haifa">רכב חשמלי שנתקע באחוזה</Link>.</p>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על גרירה באחוזה</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">תוך כמה זמן תגיעו לאחוזה?</h3>
              <p>זמן ההגעה משתנה בהתאם לעומסי התנועה באזור הכרמל, אך אנו משתדלים להגיע במהירות המקסימלית לכל קריאה בשכונה.</p>
            </div>
            <div>
              <h3 className="font-bold">מה טווח המחירים לגרירה?</h3>
              <p>המחיר נקבע לפי מרחק הגרירה וסוג הרכב. אנו מקפידים על מחירים הוגנים ושקופים לכל לקוחותינו.</p>
            </div>
            <div>
              <h3 className="font-bold">האם אתם גוררים אופנועים?</h3>
              <p>לא, אנו מתמקדים בשינוע וחילוץ של רכבים פרטיים, מסחריים ורכבי 4x4 בלבד.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
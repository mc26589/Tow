import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "גרר בקרית ים 24/7 | הגעה מהירה עד 30 דקות | מחיר הוגן",
  description: "נתקעתם עם הרכב בקרית ים? שירותי גרירה 24/7 לרכבים פרטיים ומסחריים. מחירים הוגנים, זמינות מיידית, ושירות מקצועי. התקשרו עכשיו להצעת מחיר!",
  alternates: {
    canonical: "/areas/haifa-general/cheap-private-car-towing-24-7-kiryat-yam",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה קרית ים",
    "areaServed": "קרית ים",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "priceRange": "$",
    "serviceType": "Towing Service",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.835",
      "longitude": "35.070"
    }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר רכב פרטי זול 24/7 בקרית ים והסביבה</h1>
          <p className="text-xl mb-8 max-w-2xl">
            זקוקים לשירותי גרירה בקרית ים? אנו מציעים מענה מהיר ומקצועי לכל סוגי הרכבים הפרטיים והמסחריים. במידה ונתקעתם בדרכים המהירות, אנו מספקים <Link href="/areas/haifa-general/fast-towing-road-22-krayot" className="underline font-bold">שירות גרירה מהיר בכביש 22 עוקף קריות</Link>. אנו זמינים 24/7 לכל תקלה.
            מתכננים לגרור רכב לא פעיל? נשמח לסייע גם בפינוי גרוטאות או <Link href="/areas/haifa-general/junk-car-removal-kiryat-yam-beach" className="underline font-bold">פינוי רכב לפירוק בקרית ים</Link>. 
            זקוקים להעברת רכב ליישובים סמוכים? אנו מציעים <Link href="/areas/haifa-general/affordable-car-towing-kiryat-motzkin-24-7" className="underline font-bold">גרירה משתלמת לקרית מוצקין</Link>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="קרית ים" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors text-center"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">שאלות נפוצות על גרירה בקרית ים</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg mb-2">תוך כמה זמן הגרר מגיע לקרית ים?</h3>
              <p>הצוות שלנו ממוקם בפריסה ארצית ומתחייב להגעה מהירה בתוך קרית ים, בדרך כלל תוך 30 דקות בלבד.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg mb-2">האם אתם גוררים רכבים גם מהקריות לעבר חיפה?</h3>
              <p>בהחלט. אנו מבצעים גרירה לכל האזור, כולל <Link href="/areas/haifa-general/cheap-towing-check-post-haifa" className="text-blue-600">גרירה לצומת צ'ק פוסט בחיפה</Link> במחירים נוחים.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg mb-2">האם אתם מספקים שירות לרכבים חשמליים?</h3>
              <p>כן, אנו ערוכים למתן <Link href="/areas/haifa-general/emergency-towing-electric-car-route-22-krayot" className="text-blue-600">שירותי גרירה לרכב חשמלי בכביש 22</Link> עם הציוד המתאים ביותר למניעת נזק.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg mb-2">איך נקבע מחיר הגרירה?</h3>
              <p>המחיר נקבע בהתאם למרחק הנסיעה, סוג הרכב והשעה. אנו מתחייבים למחיר הוגן ללא עמלות נסתרות.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
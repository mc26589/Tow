import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרר באחוזה חיפה 24/7 - שירות מקצועי ואמין | הגעה מהירה",
  description: "זקוקים לשירותי גרירה באחוזה, חיפה? אנו מספקים שירותי גרירה וחילוץ לרכבים פרטיים ומסחריים 24/7. מחירים הוגנים, צוות מיומן ושירות מהיר. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/heavy-motorcycle-towing-ahuza-haifa",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ חיפה והקריות",
    "areaServed": { "@type": "City", "name": "Haifa" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "$",
    "serviceType": "Towing and Roadside Assistance"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">שירותי גרירה וחילוץ באחוזה חיפה - זמינות 24/7</h1>
          <p className="text-lg md:text-xl mb-8">נתקעתם בדרך? אנו מתמחים בחילוץ רכבים פרטיים, מסחריים ורכבי 4x4 באזור אחוזה. שימו לב: השירות אינו כולל גרירת אופנועים.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="אחוזה חיפה" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">שירותי גרירה מקצועיים באזור אחוזה</h2>
        <p className="mb-4">
          אנו מבינים את הצורך במענה מהיר באזור אחוזה והסביבה. עבור בעלי רכבים המחפשים <Link href="/areas/haifa-general/cheap-car-towing-service-ahuzah-haifa-transparent-pricing" className="text-blue-600 underline">שירות גרירה זול ושקוף באחוזה</Link>, אנו מציעים פתרונות מהירים. במידה ונתקעתם עם רכב חשמלי, אנו מציעים גם <Link href="/areas/haifa-general/24-7-towing-electric-vehicle-battery-dead-ahuzah-haifa" className="text-blue-600 underline">שירות גרירה לרכבים חשמליים</Link>. 
          למרות שאיננו מטפלים באופנועים, אנו ערוכים לכל קריאה עבור רכבים פרטיים, מסחריים ורכבי שטח.
        </p>
        <ul className="list-disc list-inside space-y-2 mb-8">
          <li>זמינות 24/7 לכל סוגי הרכבים (למעט אופנועים)</li>
          <li>צוות מיומן, אדיב ומקצועי</li>
          <li>הגעה מהירה לכל שכונות הכרמל ואחוזה</li>
          <li>מחירים הוגנים ושקיפות מלאה בטלפון</li>
        </ul>

        <div className="mt-12 bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">שאלות נפוצות על גרירה באחוזה</h3>
          <div className="space-y-4">
            <div>
              <p className="font-bold">כמה זמן לוקח לגרר להגיע לאחוזה?</p>
              <p>אנו משתדלים להגיע לכל נקודה באחוזה ובחיפה בזמן הקצר ביותר, בדרך כלל תוך 30-60 דקות בהתאם לעומסי התנועה.</p>
            </div>
            <div>
              <p className="font-bold">האם אתם גוררים אופנועים באזור אחוזה?</p>
              <p>לא, אנו מתמחים בגרירת רכבים פרטיים, מסחריים ורכבי שטח בלבד, ואיננו מספקים שירותי גרירה לאופנועים.</p>
            </div>
            <div>
              <p className="font-bold">האם אתם קונים רכבים לפירוק באזור?</p>
              <p>כן, אנו מספקים גם שירותי <Link href="/areas/haifa-general/buying-cars-for-scrap-ahoza-haifa" className="text-blue-600 underline">קניית רכבים לפירוק באחוזה</Link> למי שמעוניין להיפטר מרכב ישן.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
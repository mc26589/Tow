import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר באחוזה חיפה | גרירת רכבים 24/7 | מחיר הוגן",
  description: "זקוקים לגרר באחוזה חיפה? שירות גרירה מקצועי לרכבים פרטיים ומסחריים 24/7. הגעה מהירה, מחיר הוגן ושקיפות מלאה. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/motorcycle-towing-ahuza-haifa",
  },
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
    "serviceType": "Towing Service for Cars and 4x4"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירה וחילוץ באחוזה חיפה והסביבה</h1>
          <p className="text-lg mb-6">
            אנו מספקים שירותי גרירה מהירים וזמינים 24/7 לתושבי שכונת אחוזה והסביבה. חשוב לציין: אנו מתמחים בגרירת רכבים פרטיים, מסחריים ורכבי 4x4. 
            במידה ואתם מחפשים <Link href="/areas/haifa-general/emergency-towing-horev-ahuza-haifa" className="underline font-bold">שירות גרירה דחוף בחורב ואחוזה</Link>, הצוות שלנו זמין עבורכם. 
            שימו לב שאיננו מספקים שירותי גרירה לאופנועים, אך אנו כאן לכל צורך אחר ברכב שלכם.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר למוקד השירות
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">מדוע לבחור בנו לגרירת רכבים באזור חיפה?</h2>
        <ul className="list-disc list-inside space-y-2 mb-8">
          <li>זמינות מלאה 24/7 לכל אזור חיפה והקריות.</li>
          <li>ציוד גרירה מתקדם המבטיח שמירה על הרכב שלכם.</li>
          <li>פתרונות נוספים כגון <Link href="/areas/haifa-general/buying-cars-for-scrap-ahoza-haifa" className="underline">פינוי רכבים לפירוק באחוזה</Link>.</li>
          <li>מחירים הוגנים ושקופים ללא הפתעות.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">שאלות נפוצות</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold">מהו אזור הפעילות שלכם בחיפה?</h3>
            <p>אנו פרוסים בכל רחבי חיפה, לרבות שכונות אחוזה, חורב, מרכז הכרמל ונווה שאנן. למידע נוסף על שירותים באזורים סמוכים, ניתן לבדוק גם <Link href="/areas/haifa-general/emergency-towing-stella-maris-haifa" className="underline">גרירה בסטלה מאריס</Link>.</p>
          </div>
          <div>
            <h3 className="font-bold">האם אתם גוררים רכבים נמוכים או רכבי שטח?</h3>
            <p>בהחלט. יש לנו ניסיון רב עם רכבים בעלי מרווח גחון נמוך. תוכלו לקרוא על כך בדף <Link href="/areas/haifa-general/affordable-low-clearance-sports-car-towing-ahuzah-haifa" className="underline">גרירת רכבי ספורט ונמוכים</Link>.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
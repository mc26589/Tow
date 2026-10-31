import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרירת רכבים באחוזה חיפה 24/7 | הגעה מהירה עד 30 דקות",
  description: "נתקעתם עם הרכב באחוזה, חיפה? שירותי גרירה מקצועיים, מחיר הוגן ושקיפות מלאה. הגעה מהירה לכל נקודה באחוזה. התקשרו עכשיו לקבלת סיוע מיידי!",
  alternates: {
    canonical: "/areas/haifa-general/heavy-motorcycle-towing-service-ahuzah-haifa-now"
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
    "serviceType": "Vehicle Towing and Roadside Assistance"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">שירות גרירה וחילוץ רכבים באחוזה, חיפה</h1>
          <p className="text-lg mb-8">
            נתקעתם באזור אחוזה? אנו מספקים שירותי גרירה מקצועיים לרכבים פרטיים, מסחריים ורכבי שטח. 
            אם אתם מחפשים <Link href="/areas/haifa-general/emergency-towing-horev-ahuza-haifa" className="underline">שירותי גרירה דחופים באזור חורב ואחוזה</Link>, הגעתם למקום הנכון. 
            אנו זמינים לסייע גם במקרי חירום אחרים ומתמחים בפתרון בעיות כביש. 
            שימו לב: שירות זה מתמחה בגרירת רכבים בלבד ולא באופנועים כבדים.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר למוקד החילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">למה לבחור בנו באחוזה?</h2>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>זמינות מלאה 24 שעות ביממה, 7 ימים בשבוע</li>
            <li>ציוד גרירה מתקדם לכל סוגי הרכבים באחוזה והסביבה</li>
            <li>פתרונות לרכבים חשמליים כולל התנעה ושירות חילוץ</li>
            <li>שקיפות מלאה במחיר ושירות אדיב ללא הפתעות</li>
          </ul>
          
          <h3 className="text-xl font-bold mt-8 mb-4">שאלות נפוצות על גרירה באחוזה</h3>
          <div className="space-y-4">
            <div>
              <p className="font-bold">תוך כמה זמן תגיעו לאחוזה?</p>
              <p>אנו משתדלים להגיע לכל נקודה באחוזה ובחיפה בזמן הקצר ביותר, לרוב תוך פחות מ-30 דקות בהתאם לעומסי התנועה באזור חורב ודרך אבא חושי.</p>
            </div>
            <div>
              <p className="font-bold">האם אתם מספקים שירותי גרירה לאופנועים?</p>
              <p>אנו מתמקדים בגרירת רכבים, אך לבעלי אופנועים ניתן להיעזר בשירותים ייעודיים כמו <Link href="/areas/haifa-general/motorcycle-towing-ahuza-haifa" className="underline">גרירת אופנועים באחוזה</Link>.</p>
            </div>
            <div>
              <p className="font-bold">האם אתם נותנים שירות גם במקרה של תאונה?</p>
              <p>כן, אנו נותנים מענה מקצועי גם במקרי תאונה. למידע נוסף על שירותים רחבים באזור כביש 22 ניתן לבדוק גם <Link href="/areas/haifa-general/towing-services-road-22-krayot-bypass" className="underline">שירותי גרירה בכביש 22 עוקף קריות</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
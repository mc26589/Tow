import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר דחוף בכביש 22 עוקף קריות - הגעה מהירה 24/7",
  description: "נתקעת בכביש 22 עוקף קריות? צוות גרר מקצועי זמין עבורך 24/7 עם הגעה מהירה ומחיר הוגן לכל סוגי הרכבים. חייגו עכשיו לשירות אמין!",
  alternates: {
    canonical: "/areas/haifa-general/emergency-towing-road-22-krayot-bypass",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה בכביש 22 עוקף קריות",
    "areaServed": "חיפה והקריות",
    "priceRange": "מחיר הוגן",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8191",
      "longitude": "35.0553"
    },
    "serviceType": "Emergency Towing"
  };

  return (
    <main className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            גרר דחוף לרכב תקוע בכביש 22 עוקף קריות
          </h1>
          <p className="text-lg md:text-xl mb-8">
            נתקעתם בדרך? צוות הגרירה שלנו זמין עבורכם 24 שעות ביממה, 7 ימים בשבוע. שירות מהיר, אמין ומקצועי לכל סוגי הרכבים הפרטיים והמסחריים.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              חיוג מהיר לגרר
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">למה לבחור בנו לשירותי גרירה בכביש 22?</h2>
        <p className="mb-4">
          אנו מתמחים בחילוץ וגרירת רכבים פרטיים, ורכבים מסחריים קלים. חשוב לציין: אנו לא מספקים שירותי גרירה לאופנועים. אם אתם זקוקים למידע נוסף, ניתן לבדוק את עמוד הבית שלנו עבור <Link href="/areas/haifa-general/fast-towing-services-road-22-krayot-bypass" className="text-blue-600 underline">שירותי גרירה מהירים בכביש 22</Link> או לבחון פתרונות עבור <Link href="/areas/haifa-general/towing-services-road-22-krayot-private-car" className="text-blue-600 underline">גרירת רכבים פרטיים בכביש 22</Link>.
        </p>
        <ul className="list-disc pr-6 space-y-2">
          <li>זמינות מלאה בכל שעות היממה, כולל סוף השבוע וחגים.</li>
          <li>הגעה מהירה לכל נקודה לאורך כביש 22 עוקף קריות.</li>
          <li>ציוד גרירה חדיש המבטיח שמירה על הרכב שלכם.</li>
          <li>צוות מיומן ומנוסה בטיפול ברכבים תקועים בתנאי דרך מורכבים.</li>
        </ul>
      </section>

      <section className="py-12 bg-gray-50 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על שירותי גרירה באזור הקריות</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold">תוך כמה זמן הגרר מגיע לכביש 22?</h3>
            <p>אנו משתדלים להגיע לכל נקודה בכביש 22 בזמן הקצר ביותר, בהתאם לעומסי התנועה באותו הרגע.</p>
          </div>
          <div>
            <h3 className="font-bold">האם אתם גוררים רכבים מסחריים?</h3>
            <p>כן, אנו מספקים שירותי גרירה למגוון רכבים פרטיים ומסחריים קלים, אך איננו מספקים שירות לאופנועים.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
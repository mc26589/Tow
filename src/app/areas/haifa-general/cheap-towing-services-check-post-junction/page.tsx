import { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "שירותי גרירה בצומת צ'ק פוסט | 24/7 מחיר הוגן | הגעה מהירה",
  description: "נתקעתם בצומת צ'ק פוסט? אנו מספקים שירותי גרירה מקצועיים ומהירים 24/7. מחירים נוחים ללא הפתעות. התקשרו עכשיו להגעה מהירה!",
  alternates: {
    canonical: "/areas/haifa-general/cheap-towing-services-check-post-junction",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה צ'ק פוסט",
    "areaServed": { "@type": "City", "name": "Haifa and Krayot" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7936", "longitude": "35.0264" },
    "priceRange": "$",
    "serviceType": "Towing Service"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">שירותי גרירה זולים בצומת צ'ק פוסט</h1>
          <p className="text-lg mb-8">
            נתקעתם עם הרכב באזור צומת צ'ק פוסט? אנו מציעים שירותי גרירה מהירים ומקצועיים במחירים הוגנים. 
            אנו מתמחים בחילוץ וגרירת רכבים פרטיים, מסחריים ורכבי 4x4. 
            אם אתם זקוקים לשירותי עזר נוספים, ניתן לבדוק גם <Link href="/areas/haifa-general/towing-service-road-22-krayot-bypass" className="underline">שירותי גרירה בכביש 22 עוקף קריות</Link>. 
            חשוב לציין: איננו מספקים שירותי גרירה לאופנועים.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              חיוג מהיר למוקד הגרירה
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">למה לבחור בנו בצומת צ'ק פוסט?</h2>
        <ul className="list-disc pr-6 space-y-2 mb-8">
          <li>זמינות מלאה 24/7 לכל קריאה באזור הצ'ק פוסט והסביבה.</li>
          <li>מחירים הוגנים ושקופים ללא הפתעות או עלויות נסתרות.</li>
          <li>צוות מיומן המכיר היטב את עומסי התנועה באזור הצ'ק פוסט.</li>
          <li>ציוד גרירה מתקדם המבטיח שמירה מקסימלית על הרכב שלכם.</li>
        </ul>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">שאלות נפוצות על גרירה בצ'ק פוסט</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">כמה זמן לוקח לגרר להגיע לצומת צ'ק פוסט?</h3>
              <p>ברוב המקרים אנו מגיעים תוך 30-45 דקות, בהתאם לעומסי התנועה בציר העמוס הזה.</p>
            </div>
            <div>
              <h3 className="font-bold">האם אתם גוררים גם רכבים שנתקעו בכביש 22?</h3>
              <p>כן, אנו נותנים מענה מלא לכל אזור הצ'ק פוסט כולל הכניסות והיציאות <Link href="/areas/haifa-general/emergency-towing-road-22-krayot-bypass" className="text-blue-600">לכביש 22 עוקף קריות</Link>.</p>
            </div>
            <div>
              <h3 className="font-bold">האם השירות כולל חילוץ 4x4?</h3>
              <p>כן, אנו מציעים שירותי חילוץ מורכבים לרכבי שטח. למידע נוסף על חילוצי בוץ, ראו <Link href="/areas/haifa-general/4x4-mud-recovery-carmel-forest-haifa" className="text-blue-600">חילוץ 4x4 ביערות הכרמל</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
import { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר בדרך בר יהודה חיפה | הגעה תוך 30 דקות | זמינות 24/7",
  description: "נתקעתם בדרך בר יהודה חיפה? זקוקים לגרר מהיר? אנו מספקים שירותי גרירה מקצועיים, מחיר הוגן וזמינות מלאה 24/7. הגעה מהירה לכל אזור הצ'ק פוסט והסביבה. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/towing-service-harley-davidson-derech-bar-yehuda-haifa",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה בדרך בר יהודה חיפה",
    "areaServed": { "@type": "City", "name": "Haifa" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "35.0000" },
    "priceRange": "$$,$",
    "serviceType": "Towing and Roadside Assistance"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">שירות גרירה וחילוץ בדרך בר יהודה חיפה</h1>
          <p className="text-lg mb-8">
            נתקעת בדרך בר יהודה בחיפה? הצוות המקצועי שלנו זמין לספק לכם <Link href="/areas/haifa-general/affordable-emergency-car-towing-check-post-haifa" className="underline font-semibold">גרירת רכב דחופה בצ'ק פוסט</Link>. 
            אנו מתמחים בחילוץ רכבים פרטיים ומסחריים בכל אזור חיפה והצפון. אם הרכב הושבת עקב תקלה טכנית או תאונה, נשמח להעניק לכם פתרון של <Link href="/areas/haifa-general/affordable-car-breakdown-towing-check-post-haifa-krayot" className="underline">סיוע בתקלות דרך באזור הצ'ק פוסט והקריות</Link>. 
            חשוב לציין: אנו לא מספקים שירותי גרירה לאופנועים, אלא מתמקדים ברכבים בלבד.
          </p>
          <div className="flex gap-4">
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold"
            >
              התקשר עכשיו
            </a>
            <WhatsAppCTA cityName="Haifa" />
          </div>
        </div>
      </section>
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">למה לבחור בנו בחיפה?</h2>
        <ul className="list-disc pr-5 space-y-2 mb-10">
          <li>זמינות מלאה 24 שעות ביממה, 7 ימים בשבוע.</li>
          <li>זמני הגעה מהירים לדרך בר יהודה וצירים מרכזיים בחיפה.</li>
          <li>שירות מקיף הכולל גם <Link href="/areas/haifa-general/cheap-towing-check-post-haifa" className="text-blue-600 underline">גרירה זולה בצ'ק פוסט חיפה</Link>.</li>
          <li>מחירים הוגנים ושקיפות מלאה מול הלקוח.</li>
        </ul>
        
        <h2 className="text-2xl font-bold mb-4">שאלות נפוצות על גרירה בחיפה</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold">תוך כמה זמן תגיעו לחלץ אותי בדרך בר יהודה?</h3>
            <p>אנו פרוסים בכל מוקדי התנועה בחיפה. לרוב אנו מגיעים לדרך בר יהודה בתוך זמן קצר מאוד, תלוי בעומסי התנועה באזור הצ'ק פוסט.</p>
          </div>
          <div>
            <h3 className="font-bold">האם אתם גוררים רכבים חשמליים?</h3>
            <p>כן, אנו מספקים מענה מקצועי גם עבור <Link href="/areas/haifa-general/affordable-electric-car-towing-check-post-krayot" className="text-blue-600 underline">גרירת רכבים חשמליים באזור הצ'ק פוסט והקריות</Link>.</p>
          </div>
          <div>
            <h3 className="font-bold">מה עושים אם הרכב לא ניתן לתיקון?</h3>
            <p>במקרים בהם הרכב ישן או במצב גרוע, אנו מציעים שירות של <Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-towing-included" className="text-blue-600 underline">קניית רכבים לפירוק בחיפה כולל גרירה</Link>.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
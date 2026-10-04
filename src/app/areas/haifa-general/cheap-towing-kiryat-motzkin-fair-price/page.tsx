import { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר בקרית מוצקין - מחיר הוגן | הגעה מהירה תוך 30 דקות",
  description: "נתקעתם עם הרכב בקרית מוצקין? גרר מקצועי במחיר הוגן ושירות מהיר 24/7. הגעה מהירה לכל הקריות. לחצו כאן לייעוץ והזמנת גרר עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/cheap-towing-kiryat-motzkin-fair-price"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה בקריות",
    "areaServed": "Kiryat Motzkin",
    "priceRange": "$$,$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8285",
      "longitude": "35.0705"
    },
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר זול בקרית מוצקין - מחיר הוגן ושירות מהיר</h1>
          <p className="text-lg md:text-xl mb-8">
            נתקעתם עם הרכב? אנו מציעים שירותי גרירה מקצועיים, מהירים ובמחיר הוגן לתושבי קרית מוצקין והסביבה. 
            אנו מתמחים בחילוץ וגרירת רכבים פרטיים, מסחריים ורכבי שטח. זקוקים לעזרה בדרכים? אנו כאן עבורכם.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="Kiryat Motzkin" />
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors text-center"
            >
              חיוג מהיר לגרר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בשירות הגרירה שלנו בקרית מוצקין?</h2>
          <ul className="space-y-4 text-lg mb-8">
            <li>✓ זמינות 24/7 לכל קריאה בקרית מוצקין והסביבה</li>
            <li>✓ שקיפות מלאה במחיר הוגן ללא הפתעות</li>
            <li>✓ צוות מיומן עם ציוד חדיש המותאם לרכבים פרטיים ומסחריים</li>
            <li>✓ מתן פתרונות מהירים גם במקרים של <Link href="/areas/haifa-general/emergency-towing-cheap-kiryat-bialik" className="text-blue-400 underline">גרירה דחופה בקרית ביאליק</Link></li>
          </ul>
          <p className="text-sm text-gray-400">
            סובלים מתקלה במצבר? אנו נותנים מענה מקצועי גם עבור <Link href="/areas/haifa-general/electric-vehicle-flat-battery-towing-route-22-krayot" className="text-blue-400 underline">גרירת רכבים חשמליים בכביש 22</Link>.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על גרירת רכב בקרית מוצקין</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl">כמה זמן לוקח לגרר להגיע?</h3>
              <p>אנו משתדלים להגיע לכל נקודה בקרית מוצקין בזמן שיא של 30 עד 45 דקות, בהתאם לעומסי התנועה באזור הקריות.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">האם אתם מציעים שירותי עזרה נוספים בדרכים?</h3>
              <p>בהחלט. אנו מספקים מענה למגוון בעיות טכניות, כולל סיוע לנהגים הזקוקים לשירותי <Link href="/areas/haifa-general/heavy-motorcycle-towing-service-breakdown-route-4-near-kiryat-motzkin" className="text-blue-600 underline">גרירת אופנועים כבדים על כביש 4</Link> או עזרה בהחלפת גלגל.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">אילו סוגי רכבים אתם גוררים?</h3>
              <p>אנו מוסמכים לגרר רכבים פרטיים, רכבי שטח ורכבים מסחריים קלים. לבעלי רכבים ישנים שיצאו משימוש, ניתן לבדוק גם שירותי <Link href="/areas/haifa-general/car-scrapping-haifa-krayot" className="text-blue-600 underline">פירוק רכבים בקריות</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
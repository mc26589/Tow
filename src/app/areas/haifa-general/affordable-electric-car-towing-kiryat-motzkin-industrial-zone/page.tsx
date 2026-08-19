import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרירת רכב חשמלי באזור התעשייה קריית מוצקין | זמינות 24/7",
  description: "נתקעת עם הרכב החשמלי באזור התעשייה קריית מוצקין? שירות גרירה מקצועי, בטוח ובמחיר הוגן. הגעה מהירה לכל אזור התעשייה. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/affordable-electric-car-towing-kiryat-motzkin-industrial-zone"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": "Kiryat Motzkin",
    "priceRange": "₪₪",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8350",
      "longitude": "35.0750"
    },
    "serviceType": "Electric Vehicle Towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">גרירת רכב חשמלי באזור התעשייה קריית מוצקין</h1>
          <p className="text-lg md:text-xl mb-8">
            נתקעת עם הרכב החשמלי באזור התעשייה? אנו מומחים בגרירת רכבים חשמליים והיברידיים בבטחה. 
            ציוד מתקדם המותאם למשקל הסוללות ללא נזק לרכב. הגעה מהירה לכל נקודה באזור התעשייה.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="קריית מוצקין" />
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors text-center"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">למה לבחור בנו לגרירת רכב חשמלי?</h2>
        <ul className="list-disc pr-6 space-y-2 mb-6">
          <li>מומחיות בפינוי בטוח של רכבים חשמליים ללא נזק למערכת הטעינה.</li>
          <li>זמינות מלאה 24/7 לכל תרחיש באזור התעשייה קריית מוצקין.</li>
          <li>מחירים הוגנים ושקופים ללא הפתעות.</li>
          <li>שירות מקצועי המגובה בצוות בעל ניסיון רב.</li>
        </ul>
        <p className="text-gray-700">
          אנו מעניקים שירותים גם באזורים סמוכים, כגון <Link href="/areas/haifa-general/electric-vehicle-breakdown-towing-route-22-krayot-bypass" className="text-blue-600 underline">גרירת רכבים חשמליים בכביש 22</Link> ובמקרה של תקלות מורכבות יותר, אנו מספקים פתרונות מקיפים של <Link href="/areas/haifa-general/affordable-flatbed-towing-kiryat-bialik-industrial-zone" className="text-blue-600 underline">גרירת רכבים בקריית ביאליק</Link>.
        </p>
      </section>

      <section className="py-12 bg-gray-50 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על גרירת רכב חשמלי</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold">האם אתם גוררים רכבים חשמליים עם טעינה נמוכה?</h3>
            <p>כן, אנו ערוכים לחילוץ וגרירה של רכבים חשמליים שנתקעו ללא אנרגיה או עקב תקלה טכנית.</p>
          </div>
          <div>
            <h3 className="font-bold">האם הגרירה מסוכנת לסוללה?</h3>
            <p>אנחנו משתמשים בציוד ייעודי המונע חימום או נזק למערכות הרכב החשמלי, תוך הקפדה על הוראות היצרן.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
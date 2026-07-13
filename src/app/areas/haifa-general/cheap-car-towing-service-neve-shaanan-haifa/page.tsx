import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרירת רכב בנווה שאנן חיפה | מחיר הוגן, הגעה ב-30 דקות 24/7",
  description: "נתקעתם עם הרכב בנווה שאנן? שירות גרירה מקצועי וזול, הגעה מהירה עד 30-45 דקות. זמינים 24/7 לכל סוגי הרכבים. התקשרו עכשיו לשירות אמין ומחיר ללא תחרות!",
  alternates: {
    canonical: "/areas/haifa-general/cheap-car-towing-service-neve-shaanan-haifa",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירות גרירה נווה שאנן חיפה",
    "areaServed": { "@type": "City", "name": "Haifa" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": 32.7833, "longitude": 35.0000 },
    "priceRange": "$",
    "serviceType": "Car Towing and Roadside Assistance"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירות גרירת רכב זול בנווה שאנן חיפה 24/7</h1>
          <p className="text-xl mb-8 max-w-2xl">
            נתקעתם עם הרכב באזור נווה שאנן? הצוות שלנו מספק שירותי גרירה מקצועיים, מהירים ובמחירים הוגנים. 
            אנו ערוכים לכל תקלה וזמינים 24 שעות ביממה, 7 ימים בשבוע. אם נתקעתם בדרכים משובשות ליד <Link href="/areas/haifa-general/4x4-mud-recovery-carmel-forest-haifa" className="underline font-semibold">יערות הכרמל</Link>, אנו כאן לעזור. 
            אנו מתמחים בגרירת רכבים פרטיים ומסחריים. במידה והרכב במצב גרוטאה שאינו ראוי לנסיעה, ניתן לבדוק גם שירותי <Link href="/areas/haifa-general/kone-rehavim-lepiruk-haifa-krayot" className="underline font-semibold">קניית רכבים לפירוק בחיפה והקריות</Link>.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition text-center"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לשירות גרירה בנווה שאנן?</h2>
          <ul className="grid md:grid-cols-3 gap-8">
            <li className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-bold text-xl mb-2">זמינות מלאה 24/7</h3>
              <p>שירות אמין לכל תרחיש, גם בשעות הלילה המאוחרות ובסופי שבוע.</p>
            </li>
            <li className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-bold text-xl mb-2">מחירים הוגנים</h3>
              <p>שקיפות מלאה ללא הפתעות, הצעת מחיר משתלמת בטלפון.</p>
            </li>
            <li className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-bold text-xl mb-2">הגעה מהירה לשכונה</h3>
              <p>הצוות שלנו מכיר היטב את כל רחובות נווה שאנן ומגיע במהירות האפשרית.</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות (FAQ)</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold">האם אתם גוררים רכבים מהאוניברסיטה או מהכרמל?</h3>
              <p>כן, אנו מספקים חילוץ גם למקרים מורכבים יותר כגון <Link href="/areas/haifa-general/car-stuck-in-mud-carmel-forest-haifa-university" className="text-blue-700 underline">חילוץ רכב תקוע בבוץ ליד אוניברסיטת חיפה</Link> בכל שעות היממה.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">האם אתם גוררים למוסכים מחוץ לחיפה?</h3>
              <p>אנו מבצעים גרירה לכל חלקי הארץ, כולל שירותים ייעודיים כמו <Link href="/areas/haifa-general/cheap-towing-check-post-haifa" className="text-blue-700 underline">גרירה לצ'ק פוסט</Link> או למוסכים באזור הקריות במחיר משתלם.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">האם ניתן להזמין גרירה לרכב תקול באזור יציאה מהעיר?</h3>
              <p>בוודאי. אנו מנוסים בגרירה מצירי תנועה עמוסים, כולל טיפול ב-<Link href="/areas/haifa-general/electric-vehicle-accident-towing-route-22-krayot-bypass" className="text-blue-700 underline">תאונות וגרירת רכבים בכביש 22 (עוקף קריות)</Link>.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">מה עושים אם הרכב נתקע עם מצבר ריק?</h3>
              <p>אנו מעניקים שירותי התנעה וגרירה לכל סוגי הרכבים הפרטיים והמסחריים. חשוב לציין: איננו מספקים שירותי גרירה לאופנועים.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

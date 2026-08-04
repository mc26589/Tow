import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר לרכב באחוזה חיפה | שירות גרירה מהיר ומקצועי 24/7",
  description: "זקוקים לגרר באחוזה חיפה? אנו מספקים שירותי גרירה וחילוץ לרכבים פרטיים ושטח בזמינות מלאה 24/7. מחיר הוגן, הגעה מהירה ומקצועיות ללא פשרות. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/motorcycle-towing-ahuza-haifa",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ חיפה והקריות",
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
    "priceRange": "$$,$",
    "serviceType": "Towing and Roadside Assistance for Cars and 4x4"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">גרר לרכב באחוזה חיפה - חילוץ מקצועי 24/7</h1>
          <p className="text-lg mb-8">
            נתקעתם עם הרכב בשכונת אחוזה? אנו מספקים שירותי גרירה וחילוץ מהירים לרכבים פרטיים, מסחריים ורכבי שטח. חשוב להבהיר כי השירות שלנו מיועד לרכבים בלבד (איננו מספקים שירותי גרירה לאופנועים). אם אתם זקוקים לחילוץ מקצועי עקב רכב תקוע בדרכים התלולות של אחוזה, כדאי להכיר את שירותי ה-<Link href="/areas/haifa-general/towing-services-stuck-vehicle-steep-hill-ahuza-haifa" className="underline">גרירה לרכבים תקועים בדרכים תלולות באחוזה</Link> שלנו. אנו כאן למענכם בכל שעה.
          </p>
          <div className="flex gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשר עכשיו
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">למה לבחור בנו לחילוץ רכבים באחוזה?</h2>
        <ul className="list-disc pr-6 space-y-2 mb-8">
          <li>זמינות מלאה 24/7 לכל קריאה באזור חיפה והסביבה.</li>
          <li>ציוד גרירה מתקדם לרכבים פרטיים ו-<Link href="/areas/haifa-general/4x4-mud-recovery-carmel-haifa" className="text-blue-600 underline">חילוץ 4x4 בחיפה והכרמל</Link>.</li>
          <li>שירות אדיב, מקצועי ומחירים הוגנים ללא הפתעות.</li>
          <li>מענה מהיר לכל נקודה בשכונת אחוזה, רמת בגין ומרכז הכרמל.</li>
        </ul>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">שאלות נפוצות על גרירת רכב באחוזה</h3>
          <div className="space-y-4">
            <div>
              <p className="font-bold">האם אתם גוררים גם רכבים חשמליים?</p>
              <p>כן, אנו נותנים מענה מקצועי גם לרכבים חשמליים. למידע נוסף ניתן לעיין בשירותי <Link href="/areas/haifa-general/affordable-electric-car-towing-check-post-krayot" className="text-blue-600 underline">גרירת רכבים חשמליים</Link>.</p>
            </div>
            <div>
              <p className="font-bold">מהו טווח המחירים לגרירה באזור חיפה?</p>
              <p>מחיר הגרירה נקבע לפי מרחק הנסיעה וסוג הרכב. אנו מתחייבים למחירים הוגנים. אם הרכב שלכם אינו בר תיקון, אנו עוסקים גם ב-<Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-towing-included" className="text-blue-600 underline">קניית רכבים לפירוק בחיפה</Link> עם גרירה כלולה.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
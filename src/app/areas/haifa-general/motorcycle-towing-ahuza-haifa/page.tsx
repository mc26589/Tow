import { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרר רכב באחוזה חיפה | שירות מהיר 24/7 | מחיר הוגן",
  description: "זקוקים לשירותי גרירה באחוזה, חיפה? אנו מספקים מענה מהיר ומקצועי לכל סוגי הרכבים. מחירים הוגנים ושירות אדיב 24/7. התקשרו עכשיו לפתרון מיידי!",
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
    "priceRange": "$",
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
    "serviceType": "Car Towing and Roadside Assistance"
  };

  return (
    <main className="bg-neutral-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירה מקצועיים באחוזה, חיפה</h1>
          <p className="text-xl mb-8">צריכים עזרה עם הרכב? אנו מומחים בגרירת רכבים פרטיים ומסחריים. שירות אמין, מהיר וזמין בכל שעות היממה.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-3 rounded-lg font-bold hover:bg-neutral-200 transition"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירותי גרירה באחוזה - מידע חשוב</h2>
        <p className="text-lg leading-relaxed mb-4">
          אנו מבינים שהרכב יכול להיתקע בכל עת, במיוחד באזורים מרכזיים כמו אחוזה. אם אתם מחפשים <Link href="/areas/haifa-general/cheap-car-towing-service-ahuzah-haifa-transparent-pricing" className="text-blue-400 underline">שירות גרירה משתלם ושקוף באחוזה</Link>, הגעתם למקום הנכון.
          חשוב לציין: איננו מספקים שירותי גרירה לאופנועים, אך אנו ערוכים לתת מענה מיידי לכל סוגי הרכבים האחרים. אם נתקעתם בדרכים מרכזיות באזור, ייתכן שתמצאו עניין גם בשירותי <Link href="/areas/haifa-general/cheap-towing-check-post-haifa-fast-service" className="text-blue-400 underline">גרירה מהירה בצומת צ'ק פוסט</Link>.
        </p>
        <ul className="list-disc list-inside space-y-2 text-neutral-300">
          <li>זמינות 24/7 לכל קריאה באזור חיפה</li>
          <li>ציוד גרירה מתקדם לרכבים פרטיים ומסחריים</li>
          <li>מחירים הוגנים ושקיפות מלאה</li>
          <li>צוות מיומן המכיר כל רחוב באחוזה</li>
        </ul>
      </section>

      <section className="py-16 bg-neutral-900 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על גרירה בחיפה</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">תוך כמה זמן תגיעו לאזור אחוזה?</h3>
            <p className="text-neutral-400">אנו שואפים להגיע לכל קריאה באזור אחוזה והסביבה תוך זמן קצר ככל הניתן, בהתאם לעומסי התנועה.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">האם אתם גוררים רכבים מכל סוג?</h3>
            <p className="text-neutral-400">אנו מתמחים ברכבים פרטיים, רכבי שטח ומסחריות קלות. אנא שימו לב שאיננו נותנים שירות לאופנועים.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">האם השירות זמין גם בסופי שבוע?</h3>
            <p className="text-neutral-400">כן, אנו פעילים 24/7, כולל שבתות וחגים, כדי להבטיח שלא תישארו תקועים בדרך.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
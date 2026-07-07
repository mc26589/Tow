import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרר באחוזה חיפה - שירותי גרירה לרכבים 24/7 | מחיר הוגן",
  description: "נתקעתם עם הרכב באחוזה, חיפה? שירותי גרירה מקצועיים, מהירים ובמחיר הוגן זמינים עבורכם 24/7. התקשרו עכשיו לשירות גרירה מומלץ באזור!",
  alternates: {
    canonical: "/areas/haifa-general/motorcycle-towing-ahuza-haifa",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירה באחוזה חיפה - זמינות 24/7 לרכב שלכם</h1>
          <p className="text-xl mb-8">אנו מתמחים בגרירת רכבים פרטיים, מסחריים ו-4x4 באזור אחוזה. זקוקים לחילוץ מהיר? אנחנו כאן בשבילכם.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-3 rounded-lg font-bold hover:bg-neutral-200 transition-colors"
            >
              חיוג מהיר לשירות גרירה
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold">למה לבחור בשירותי הגרירה שלנו באחוזה?</h2>
          <p>
            אם חיפשתם <Link href="/areas/haifa-general/cheap-private-car-towing-ahuza-haifa" className="text-blue-400 underline">גרר לרכב פרטי באחוזה חיפה</Link>, הגעתם למקום הנכון. הצי שלנו ערוך לכל קריאה עבור רכבים פרטיים ומסחריים, ואנו מתחייבים למענה מהיר ושקיפות מלאה במחיר.
          </p>
          <p>
            חשוב לציין: אנו מתמחים ברכבים ורכבי שטח. אם נדרש חילוץ מורכב יותר, אנו מספקים גם שירותי <Link href="/areas/haifa-general/4x4-mud-recovery-carmel-forest-haifa" className="text-blue-400 underline">חילוצי 4x4 באזור הכרמל</Link>.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>זמינות 24/7 לכל אזור חיפה</li>
            <li>ציוד גרירה מתקדם לכל סוגי הרכבים</li>
            <li>צוות מיומן ומקצועי עם ותק רב</li>
            <li>מחירים הוגנים ותחרותיים</li>
          </ul>
        </div>
      </section>

      <section className="py-10 bg-neutral-900 container mx-auto px-4 rounded-xl">
        <h2 className="text-2xl font-bold mb-6 text-center">שאלות נפוצות על שירותי גרירה באחוזה</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          <div>
            <h3 className="font-bold">תוך כמה זמן הגרר מגיע לאזור אחוזה?</h3>
            <p>אנו שואפים להגיע לכל קריאה באזור אחוזה והסביבה תוך זמן קצר ככל האפשר, בהתאם לעומסי התנועה.</p>
          </div>
          <div>
            <h3 className="font-bold">האם אתם גוררים אופנועים?</h3>
            <p>שירותי הגרירה שלנו מתמקדים ברכבים פרטיים, מסחריים ורכבי 4x4. איננו מספקים שירותי גרירה לאופנועים.</p>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
          }),
        }}
      />
    </main>
  );
}
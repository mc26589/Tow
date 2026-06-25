import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר באחוזה חיפה | שירות גרירה לרכבים 24/7 - הגעה מהירה",
  description: "נתקעתם עם הרכב באחוזה חיפה? אנו מספקים שירותי גרירה וחילוץ לרכבים פרטיים ומסחריים 24/7 במחיר הוגן. התקשרו עכשיו לשירות מקצועי ומהיר!",
  alternates: {
    canonical: "/areas/haifa-general/motorcycle-towing-ahuza-haifa",
  },
};

export default function Page() {
  return (
    <main className="bg-neutral-950 min-h-screen text-neutral-100">
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירה באחוזה חיפה - זמינות 24/7 לרכבים</h1>
          <p className="text-xl mb-8">זקוקים לשירותי גרירה מקצועיים באזור אחוזה? אנו מתמחים בחילוץ וגרירת רכבים פרטיים, רכבי שטח ומסחריות. שימו לב: איננו מספקים שירותי גרירה לאופנועים.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-3 rounded-lg font-bold hover:bg-neutral-200 transition"
            >
              חיוג מהיר לשירות גרירה
            </a>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לשירותי גרירה באחוזה?</h2>
        <p className="mb-4">
          אנו מבינים את החשיבות של מענה מהיר כאשר הרכב נתקע בכבישי הכרמל. אנו מספקים שירותי חילוץ מקיפים. אם נתקעתם באזורים מורכבים יותר, אנו ממליצים גם לבדוק שירותי <Link href="/areas/haifa-general/car-rescue-mud-carmel-forest-nesher-24-7" className="text-blue-400 underline">חילוץ מרכב בוץ בכרמל</Link> או <Link href="/areas/haifa-general/car-rescue-from-mud-carmel-area" className="text-blue-400 underline">חילוץ רכבים מהבוץ באזור הכרמל</Link>. למרות שאיננו מטפלים באופנועים, אנו הכתובת המקצועית שלך לכל צורך בגרירת רכבים פרטיים ומסחריים באזור אחוזה והסביבה.
        </p>
        <ul className="list-disc list-inside space-y-2 mb-8">
          <li>זמינות מלאה 24/7 לכל קריאה</li>
          <li>ציוד גרירה מתקדם ומודרני</li>
          <li>מחירים הוגנים ושקופים ללא הפתעות</li>
          <li>צוות מיומן ומנוסה הפועל באזור חיפה והסביבה</li>
        </ul>

        <div className="mt-12 bg-neutral-900 p-6 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">שאלות נפוצות על גרירה באחוזה</h3>
          <div className="space-y-4">
            <div>
              <p className="font-bold">מהו אזור הפעילות שלכם באחוזה?</p>
              <p className="text-neutral-400">אנו מעניקים שירותי גרירה בכל שכונת אחוזה ובכל מרחב העיר חיפה והקריות.</p>
            </div>
            <div>
              <p className="font-bold">האם אתם גוררים אופנועים?</p>
              <p className="text-neutral-400">לא, השירות שלנו מתמקד אך ורק ברכבים פרטיים, רכבים מסחריים ורכבי שטח.</p>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoTowing",
            "name": "שירותי גרירה באחוזה חיפה",
            "areaServed": "Haifa",
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
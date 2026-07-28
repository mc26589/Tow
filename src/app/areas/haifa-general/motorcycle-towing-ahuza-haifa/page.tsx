import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר לרכב באחוזה חיפה - שירות מקצועי ומהיר | זמינות 24/7",
  description: "נתקעתם עם הרכב באחוזה חיפה? אנו מציעים שירותי גרירה מקצועיים, אמינים ובמחיר הוגן לכל סוגי הרכבים. הגעה מהירה, זמינות 24/7. התקשרו עכשיו!",
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
    "serviceType": "Towing and Roadside Assistance for Cars and Commercial Vehicles"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            גרר רכב באחוזה חיפה - שירות מקצועי 24/7
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            זקוקים לחילוץ רכב באזור אחוזה? אנו מספקים שירותי גרירה לרכבים פרטיים ומסחריים. שימו לב: איננו מספקים שירותי גרירה לאופנועים.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">שירותי גרירה מקצועיים באזור אחוזה</h2>
          <p className="mb-4">
            אנו מבינים את הצורך במענה מהיר כאשר הרכב נתקע. הצוות שלנו ערוך לתת מענה לכל סוגי הרכבים באחוזה והסביבה. 
            זקוקים לשירותים נוספים באזור? ניתן לבדוק גם <Link href="/areas/haifa-general/car-rescue-from-mud-carmel-area" className="text-blue-400 underline">חילוץ רכב מהבוץ בכרמל</Link> או <Link href="/areas/haifa-general/car-stuck-in-mud-carmel-forest-haifa-university" className="text-blue-400 underline">חילוץ רכב תקוע באזור אוניברסיטת חיפה</Link>.
          </p>
          <ul className="list-disc list-inside space-y-2 mb-8">
            <li>זמינות 24/7 לכל קריאה באחוזה</li>
            <li>ציוד גרירה מתקדם לרכבים פרטיים ומסחריים</li>
            <li>מחירים הוגנים ושקיפות מלאה</li>
            <li>צוות מיומן ומנוסה</li>
          </ul>

          <div className="mt-12 border-t border-gray-700 pt-8">
            <h3 className="text-xl font-bold mb-4">שאלות נפוצות</h3>
            <div className="space-y-4">
              <div>
                <p className="font-bold">האם אתם גוררים אופנועים באחוזה?</p>
                <p className="text-gray-300">לא, השירות שלנו מיועד לרכבים פרטיים ומסחריים בלבד ואינו כולל גרירת אופנועים.</p>
              </div>
              <div>
                <p className="font-bold">מהו זמן ההגעה הממוצע באחוזה?</p>
                <p className="text-gray-300">אנו שואפים להגיע לכל קריאה באזור אחוזה בזמן הקצר ביותר, בדרך כלל תוך 30-45 דקות בהתאם לעומסי התנועה.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
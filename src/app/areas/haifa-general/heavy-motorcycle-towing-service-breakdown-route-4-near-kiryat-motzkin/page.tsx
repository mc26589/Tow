import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרירת רכב בכביש 4 ליד קריית מוצקין | הגעה מהירה 24/7",
  description: "נתקעתם בכביש 4 ליד קריית מוצקין? שירותי גרירה מקצועיים, מחיר הוגן והגעה מהירה תוך 30 דקות. זמינים 24/7 לכל סוגי הרכבים. התקשרו עכשיו לחילוץ!",
  alternates: {
    canonical: "/areas/haifa-general/heavy-motorcycle-towing-service-breakdown-route-4-near-kiryat-motzkin"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ חיפה והקריות",
    "areaServed": "Haifa and Krayot",
    "priceRange": "$$,$",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירות גרירה וחילוץ רכב בכביש 4 ליד קריית מוצקין</h1>
          <p className="text-lg mb-8">
            נתקעתם עם הרכב בכביש 4? אנו מספקים מענה מהיר ומקצועי לכל תקלה בדרך. אנו מתמחים בחילוץ רכבים פרטיים ומסחריים. זקוקים לעזרה באזור התעשייה? ראו שירותי <Link href="/areas/haifa-general/affordable-electric-car-towing-kiryat-motzkin-industrial-zone" className="underline">גרירת רכב חשמלי באזור התעשייה קריית מוצקין</Link> הזמינים עבורכם.
            <br /><strong>שימו לב: שירותינו מיועדים לרכבים בלבד ואיננו מספקים שירותי גרירה לאופנועים.</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו לחילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בשירותי הגרירה שלנו?</h2>
          <ul className="space-y-4">
            <li>✓ זמינות 24/7 לכל קריאה בכביש 4 ובצפון</li>
            <li>✓ מחירים הוגנים ושקיפות מלאה מול הלקוח</li>
            <li>✓ מומחיות ב<Link href="/areas/haifa-general/accident-towing-route-22-haifa-kiryat-ata" className="text-blue-400">גרירת רכבים לאחר תאונה בכביש 22</Link></li>
            <li>✓ פתרונות מהירים ל<Link href="/areas/haifa-general/emergency-roadside-assistance-flat-tire-route-22-kiryat-bialik" className="text-blue-400">סיוע בדרך ותיקון תקר בגלגל באזור הקריות</Link></li>
          </ul>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על גרירת רכב באזור קריית מוצקין</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold">מהו זמן ההגעה הממוצע בכביש 4?</h3>
              <p>אנו שואפים להגיע לכל קריאה בזמן המהיר ביותר, לרוב תוך 30 דקות בלבד.</p>
            </div>
            <div>
              <h3 className="font-bold">האם אתם קונים רכבים ישנים?</h3>
              <p>כן, אנו מבצעים <Link href="/areas/haifa-general/cash-for-junk-cars-scrap-vehicle-removal-kiryat-motzkin" className="text-blue-600">פינוי רכבים לפירוק בקריית מוצקין</Link> עם מענה מיידי.</p>
            </div>
            <div>
              <h3 className="font-bold">האם אתם מציעים גרירת חירום מורכבת?</h3>
              <p>בהחלט. אנו ערוכים לכל מצב, כולל גרירת רכבים תקולים או מושבתים עם ציוד מתקדם.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
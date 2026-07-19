import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרר באחוזה חיפה 24/7 | הגעה מהירה ומחיר הוגן | שירות גרירה מקצועי",
  description: "זקוקים לגרר באחוזה חיפה? אנו מציעים שירותי גרירה מקצועיים, אמינים ומהירים 24/7 לכל סוגי הרכבים באחוזה והסביבה. מחיר הוגן ושירות אישי. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/heavy-motorcycle-towing-ahuza-haifa-24-7",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ חיפה והקריות",
    "areaServed": "Haifa",
    "description": "שירותי גרירה מקצועיים באזור אחוזה, חיפה והכרמל 24/7",
    "priceRange": "$$, $$$",
    "openingHours": "Mo-Su 00:00-23:59",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7940",
      "longitude": "34.9896"
    }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר באחוזה חיפה: שירות מהיר ואמין 24/7</h1>
          <p className="text-lg mb-8">נתקעתם עם הרכב באחוזה? אנו מציעים פתרונות גרירה מקצועיים לכל סוגי הרכבים הפרטיים והמסחריים. שימו לב: איננו מספקים שירותי גרירה לאופנועים.</p>
          <div className="flex gap-4">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white text-black px-6 py-3 rounded-lg font-bold">
              התקשר עכשיו
            </a>
            <WhatsAppCTA cityName="חיפה - אחוזה" />
          </div>
        </div>
      </section>
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">שירותי גרירה וחילוץ באחוזה והכרמל</h2>
        <p className="mb-4">
          אנו מתמחים במתן מענה מהיר לתושבי אחוזה והסביבה. אם אתם מחפשים <Link href="/areas/haifa-general/cheap-car-towing-service-neve-shaanan-haifa" className="text-blue-600 underline font-semibold">שירות גרירה משתלם בשכונות הסמוכות</Link> או זקוקים לחילוץ מורכב יותר כמו <Link href="/areas/haifa-general/4x4-mud-rescue-towing-carmel-forest-trails-denia-haifa" className="text-blue-600 underline font-semibold">חילוץ שטח באזור רכס הכרמל</Link>, אנחנו הכתובת שלכם. אנו מעניקים שירות מקצועי גם לתושבי דניה ונווה שאנן הזקוקים לפתרונות גרירה שקופים.
        </p>
      </section>
      <section className="py-12 bg-gray-50 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">שאלות נפוצות (FAQ)</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-xl">האם אתם גוררים רכבים חשמליים באחוזה?</h3>
            <p>כן, אנו ערוכים לטיפול וגרירה של רכבים חשמליים עם ציוד מתאים, בבטחה מלאה.</p>
          </div>
          <div>
            <h3 className="font-bold text-xl">מהו אזור הפעילות שלכם בחיפה?</h3>
            <p>אנו פרוסים בכל רחבי חיפה, לרבות אחוזה, מרכז הכרמל, רוממה והציר הראשי. למידע נוסף ניתן לבדוק גם את שירותינו באזורים כמו <Link href="/areas/haifa-general/affordable-towing-check-post-haifa" className="text-blue-600 underline">צומת הצ'ק פוסט</Link>.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
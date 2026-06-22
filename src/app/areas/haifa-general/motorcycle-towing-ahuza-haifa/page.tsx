import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרר לרכב באחוזה חיפה | שירות גרירה מהיר ומקצועי 24/7",
  description: "נתקעתם עם הרכב באזור אחוזה בחיפה? אנו מציעים שירותי גרירה מקצועיים לרכבים פרטיים ומסחריים במחיר הוגן. זמינות 24/7, הגעה מהירה לכל נקודה. התקשרו עכשיו!",
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
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            שירותי גרירה מקצועיים באחוזה חיפה והסביבה
          </h1>
          <p className="text-lg md:text-xl mb-8">
            אנו מתמחים בגרירת רכבים פרטיים, מסחריים ו-4x4. שירות מהיר 24/7 באזור אחוזה והסביבה.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">שירותי גרירה באחוזה - שאלות נפוצות</h2>
        <p className="mb-4">
          אנו מבינים את הצורך בשירותי גרירה מהירים באזור אחוזה בחיפה. חשוב להדגיש כי השירות שלנו מתמקד ברכבים פרטיים, רכבים מסחריים ורכבי שטח. אנחנו לא מספקים שירותי גרירה לאופנועים. אם הרכב שלכם נתקע, אנו כאן עם ציוד מתקדם.
        </p>
        <div className="grid gap-6 mt-8">
          <div>
            <h3 className="font-bold text-lg">באילו מקרים כדאי להזמין גרר?</h3>
            <p>בכל מקרה של תקלה מכנית, תאונה או צורך בפינוי רכב למוסך. למידע נוסף על גרירה במצבי קיצון, בקרו ב-<Link href="/areas/haifa-general/24-7-accident-recovery-towing-check-post-junction-haifa" className="text-blue-600 underline">שירותי גרירה לאחר תאונה בצומת צ'ק פוסט</Link>.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">מהו אזור הפעילות שלכם?</h3>
            <p>אנו פרוסים בכל אזור חיפה והקריות. אם אתם זקוקים לשירות בצפון העיר או בדרכים מהירות, בדקו את שירותי <Link href="/areas/haifa-general/cheap-towing-services-check-post-junction" className="text-blue-600 underline">הגרירה הזולה באזור צומת צ'ק פוסט</Link>.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">האם אתם קונים רכבים לפירוק?</h3>
            <p>כן, אנו מספקים פתרונות לפינוי רכבים ישנים. לפרטים על מכירת רכב פגום, ראו <Link href="/areas/haifa-general/sell-damaged-car-for-parts-haifa-immediate-pickup" className="text-blue-600 underline">מכירת רכב לפירוק בחיפה</Link>.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
import { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "חילוץ שטח ורכב תקוע בבוץ בכרמל | הגעה מהירה 24/7",
  description: "נתקעתם בבוץ בדרכי הכרמל? חילוץ שטח מקצועי לרכבים תקועים באזור חיפה והסביבה. מחיר הוגן ושירות מהיר 24/7. התקשרו עכשיו לחילוץ!",
  alternates: {
    canonical: "/areas/haifa-general/off-road-mud-rescue-carmel-stuck-vehicle",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "חילוץ שטח וגרירה בחיפה והכרמל",
    "areaServed": { "@type": "City", "name": "Haifa and Carmel" },
    "priceRange": "$",
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "serviceType": "Off-road vehicle recovery and mud rescue"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ שטח ורכב תקוע בבוץ בכרמל - מענה מהיר</h1>
          <p className="text-xl mb-8">נתקעתם בבוץ באזור חיפה והכרמל? צוות המומחים שלנו בדרך אליכם. חילוץ מקצועי, מחיר הוגן ושירות 24/7.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו לחילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירותי חילוץ שטח מומחים באזור חיפה והכרמל</h2>
        <p className="mb-4">נתקעתם בבוץ בדרכי העפר של הכרמל? אנחנו כאן כדי לסייע. אנו מתמחים בחילוץ רכב תקוע בבוץ באזור הכרמל ומעניקים שירות מקצועי לרכבי 4x4, רכבים פרטיים ומסחריים. אם אתם זקוקים לחילוץ מורכב בקרבת האוניברסיטה, תוכלו להיעזר בשירותינו ב-<Link href="/areas/haifa-general/car-stuck-in-mud-carmel-forest-near-haifa-university" className="text-blue-600 underline">חילוץ רכב בבוץ ליד אוניברסיטת חיפה</Link>. לחילוץ כלי רכב כבדים יותר באזור, מומלץ לעיין בדפי השירות שלנו על <Link href="/areas/haifa-general/4x4-mud-rescue-towing-carmel-forest-trails-denia-haifa" className="text-blue-600 underline">חילוץ שטח בדניה</Link>.</p>
        
        <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4">שאלות נפוצות בנושא חילוץ שטח</h3>
            <div className="space-y-4">
                <div>
                    <h4 className="font-bold">מהו טווח המחירים לחילוץ שטח בכרמל?</h4>
                    <p>המחיר נקבע בהתאם למורכבות החילוץ, סוג הרכב ומיקום התקיעה בשטח. אנו מקפידים על הצעת מחיר הוגנת ומשתלמת.</p>
                </div>
                <div>
                    <h4 className="font-bold">האם אתם מספקים חילוץ גם לרכבים שאינם 4x4?</h4>
                    <p>בהחלט. אנו מחלצים רכבים פרטיים, מסחריים ושטח כאחד. חשוב לציין שאיננו מחלצים אופנועים.</p>
                </div>
                <div>
                    <h4 className="font-bold">האם אתם מגיעים לכל נקודה ביערות הכרמל?</h4>
                    <p>אנו מגיעים למגוון נתיבים, שבילי עפר ואזורים מיוערים בחיפה והכרמל. אם נתקעתם באזורים סמוכים, אנו מציעים גם שירותי גרירה מקצועיים כגון <Link href="/areas/haifa-general/affordable-towing-check-post-haifa" className="text-blue-600 underline">גרירה במחיר משתלם בצ'ק פוסט</Link>.</p>
                </div>
            </div>
        </div>

        <div className="mt-8 p-6 bg-gray-900 text-white rounded-xl">
          <h3 className="text-2xl font-bold mb-4">צריכים עזרה דחופה?</h3>
          <p>הצוות שלנו זמין 24/7 לחילוץ רכבים תקועים. צרו קשר עכשיו ונגיע אליכם בהקדם האפשרי.</p>
        </div>
      </section>
    </main>
  );
}
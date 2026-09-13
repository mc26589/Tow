import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר לרכב לפירוק בכביש 22 קריית ביאליק | פינוי מהיר 24/7",
  description: "תקועים בכביש 22? זקוקים לפינוי רכב לפירוק בקריית ביאליק? שירות גרירה אמין ומקצועי עם הגעה מהירה ומחיר הוגן. התקשרו עכשיו לתיאום פינוי מיידי!",
  alternates: {
    canonical: "/areas/haifa-general/towing-for-scrap-kiryat-bialik-road-22"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": "Kiryat Bialik",
    "priceRange": "הוגן",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8350",
      "longitude": "35.0700"
    },
    "serviceType": "Towing for scrap vehicles"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            גרר רכבים לפירוק בקריית ביאליק וכביש 22
          </h1>
          <p className="text-xl mb-8">פינוי מקצועי של רכבים לפירוק, רכבים תקועים או רכבים ללא טסט. מענה זמין בכל שעות היממה.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="קריית ביאליק" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בשירות הפינוי שלנו בכביש 22?</h2>
          <p className="mb-4">
            אנו מתמחים בפינוי מהיר של כל סוגי הרכבים. אם הרכב שלכם נתקע על <Link href="/areas/haifa-general/fast-towing-services-road-22-krayot-bypass" className="text-blue-400 hover:underline">כביש 22 (עוקף קריות)</Link>, הצוות שלנו יגיע במהירות האפשרית. אנו מציעים שירות אדיב ופתרונות גרירה משלימים כמו <Link href="/areas/haifa-general/affordable-flatbed-towing-route-22-krayot-area" className="text-blue-400 hover:underline">גרירת משטח לקריות</Link>.
          </p>
          <p className="text-red-400 font-semibold mb-6">שים לב: השירות אינו כולל גרירת אופנועים.</p>
          <div className="mt-8">
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-bold"
            >
              חייגו עכשיו לתיאום פינוי רכב
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">שאלות ותשובות בנושא פינוי רכבים לפירוק בקריות</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold">מהו טווח המחירים לפינוי רכב לפירוק?</h3>
              <p>המחיר תלוי בדגם הרכב ובמצבו המכני. אנו מקפידים על מתן מחיר הוגן ושוקף עבור כל רכב, ללא עלויות נסתרות.</p>
            </div>
            <div>
              <h3 className="font-bold">האם אתם מפנים רכבים מכל אזור בקריית ביאליק?</h3>
              <p>כן, אנו נותנים מענה מלא לכל רחבי העיר, כולל קרבה לאזור התעשייה וצירים מרכזיים. לצרכים נוספים של <Link href="/areas/haifa-general/emergency-light-truck-towing-route-22-krayot-bypass" className="text-blue-600 hover:underline">גרירת רכבים קלים ומשאיות קלות</Link> ניתן לפנות אלינו גם כן.</p>
            </div>
            <div>
              <h3 className="font-bold">האם עלי להכין מסמכים כלשהם לפני הפינוי?</h3>
              <p>מומלץ להחזיק ברישיון הרכב ובתעודה מזהה של בעל הרכב. הצוות שלנו יסייע לכם בתהליך בצורה פשוטה ומהירה כדי שתוכלו להשלים את פינוי הרכב ללא דאגות.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
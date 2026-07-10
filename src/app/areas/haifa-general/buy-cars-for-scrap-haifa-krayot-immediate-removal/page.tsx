import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בחיפה והקריות | פינוי מיידי ומזומן - שירות 24/7",
  description: "רוצים למכור רכב לפירוק בחיפה והקריות? אנו קונים את כל סוגי הרכבים לפירוק במחיר הוגן עם פינוי מיידי ללא עלות! שירות אמין ומהיר 24/7. התקשרו עכשיו לקבלת הצעה!",
  alternates: {
    canonical: "/areas/haifa-general/buy-cars-for-scrap-haifa-krayot-immediate-removal"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופירוק רכבים חיפה והקריות",
    "areaServed": ["Haifa", "Krayot"],
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
    "serviceType": "Car Scrap and Removal"
  };

  return (
    <main className="bg-neutral-950 text-neutral-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות עם פינוי מיידי</h1>
          <p className="text-xl mb-8">נתקעתם עם רכב ישן? אנו מציעים שירות קנייה ופינוי של רכבים לפירוק באזור חיפה והקריות 24/7.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-neutral-200 transition"
            >
              חייגו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירות מקצועי לפינוי רכבים לפירוק</h2>
        <p className="mb-4">אנו מתמחים בקניית רכבים לפירוק בחיפה, הקריות והסביבה. השירות כולל פינוי מהיר מהשטח ללא עלות נוספת. למי שמחפש <Link href="/areas/haifa-general/scrap-car-removal-kiryat-haim-cash" className="text-blue-400 underline">פינוי רכבים לפירוק בקריית חיים במזומן</Link> או זקוק ל- <Link href="/areas/haifa-general/affordable-car-breakdown-towing-check-post-haifa-krayot" className="text-blue-400 underline">שירותי גרירה זולים באזור הצ'ק פוסט</Link>, אנו כאן לתת מענה מיידי. אנו רוכשים רכבים פרטיים ומסחריים.</p>
        <p className="text-red-400 font-semibold mb-6">שים לב: איננו מטפלים בפינוי או קנייה של אופנועים מכל סוג שהוא.</p>
        
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <div className="p-6 bg-neutral-900 rounded-xl border border-neutral-800">
            <h3 className="text-xl font-bold mb-3">פינוי מהיר</h3>
            <p>צוות מיומן שמגיע לכל נקודה בחיפה ובקריות לפינוי הרכב במהירות המקסימלית.</p>
          </div>
          <div className="p-6 bg-neutral-900 rounded-xl border border-neutral-800">
            <h3 className="text-xl font-bold mb-3">מחיר הוגן</h3>
            <p>אנו מעריכים את הרכב ומציעים מחיר הוגן בהתאם למצבו, ללא הפתעות.</p>
          </div>
          <div className="p-6 bg-neutral-900 rounded-xl border border-neutral-800">
            <h3 className="text-xl font-bold mb-3">שירות מלא</h3>
            <p>אנו דואגים לכל התהליך, כולל גרירה וטיפול מול הרשויות במידת הצורך.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על רכבים לפירוק בחיפה</h2>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-lg">האם אתם מגיעים לכל הקריות?</h4>
              <p>כן, אנו מספקים פינוי מהיר לכל אזור הקריות, כולל קריית מוצקין, ביאליק, אתא וים. אם אתם זקוקים ל- <Link href="/areas/haifa-general/cheap-towing-check-post-kiryat-ata" className="text-blue-400 underline">גרר זול בקריית אתא</Link>, צרו קשר.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg">איך קובעים מחיר לפירוק?</h4>
              <p>המחיר נקבע לפי סוג הרכב, השנה והמצב המכני שלו. אנו מציעים מחירים תחרותיים מאוד בשוק המקומי.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
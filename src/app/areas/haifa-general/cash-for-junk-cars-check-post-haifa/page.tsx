import type { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "קניית רכבים לפירוק בצ'ק פוסט חיפה | מחיר הוגן ושירות 24/7",
  description: "רוצים למכור רכב ישן לפירוק בצומת צ'ק פוסט? אנו קונים את כל סוגי הרכבים במחיר הוגן וזמינים 24/7. הגעה מהירה לאזור חיפה והקריות. התקשרו עכשיו להצעת מחיר!",
  alternates: {
    canonical: "/areas/haifa-general/cash-for-junk-cars-check-post-haifa",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופינוי רכבים חיפה והקריות",
    "areaServed": "Haifa and Krayot",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7940",
      "longitude": "35.0230"
    },
    "priceRange": "$",
    "serviceType": "Junk Car Removal and Towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קניית רכבים לפירוק בצומת צ'ק פוסט חיפה</h1>
          <p className="text-xl mb-8">צריכים להיפטר מהרכב הישן? אנו מציעים שירות פינוי רכבים לפירוק בצ'ק פוסט בפריסה מלאה ובמחירים הוגנים.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition">
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפינוי רכבים בצ'ק פוסט?</h2>
          <p className="mb-4">
            אנו מתמחים בפינוי מהיר של כל סוגי הרכבים הפרטיים והמסחריים. אם הרכב שלכם מושבת, אנו מספקים גם <Link href="/areas/haifa-general/affordable-car-breakdown-towing-check-post-haifa-krayot" className="underline text-blue-400">שירותי גרירה בצ'ק פוסט</Link> ובסביבה הקרובה. אנו דוגלים בשקיפות ומציעים <Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-towing-included" className="underline text-blue-400">קניית רכבים לפירוק כולל גרירה</Link> לכל רחבי אזור חיפה והקריות במחיר הוגן. 
            זקוקים לפתרון מיידי? ניתן להתרשם גם משירות <Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-krayot-immediate-removal" className="underline text-blue-400">פינוי רכבים מיידי באזור חיפה והקריות</Link>. שימו לב: אנו לא מטפלים באופנועים, אלא ברכבים ורכבים מסחריים בלבד.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>זמינות מלאה 24/7 לכל סוגי הרכבים</li>
            <li>פינוי מהיר מצומת צ'ק פוסט והסביבה הקרובה</li>
            <li>הצעת מחיר הוגנת במעמד הפינוי</li>
            <li>טיפול מקצועי בכל דגמי הרכבים</li>
          </ul>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">שאלות נפוצות</h2>
          <div className="space-y-6 max-w-2xl mx-auto">
            <div>
              <h3 className="font-bold text-xl">האם אתם מפנים רכבים מכל נקודה בצ'ק פוסט?</h3>
              <p>כן, אנו מגיעים לכל אזורי התעשייה והמגורים סביב צומת צ'ק פוסט, כולל גרירה ממוסכים או חניות פרטיות. במידה ואתם תקועים בדרך, ניתן להזמין גם <Link href="/areas/haifa-general/affordable-emergency-car-towing-check-post-haifa" className="text-blue-600">שירותי גרירה דחופים</Link>.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">מה קורה אם הרכב עבר תאונה?</h3>
              <p>אנו קונים רכבים גם לאחר תאונות. תוכלו לקרוא בהרחבה על <Link href="/areas/haifa-general/sell-damaged-car-for-parts-haifa-immediate-pickup" className="text-blue-600">מכירת רכב פגום לפירוק</Link> ולקבל הערכת מחיר הוגנת בהתאם למצב הרכב.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">כיצד נקבע המחיר לפירוק?</h3>
              <p>המחיר נקבע בהתאם לערך המתכת והחלקים התקינים שניתן להציל מהרכב. התקשרו לקבלת הערכה ראשונית ללא התחייבות.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
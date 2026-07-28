import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "קניית רכבים לפירוק בחיפה והקריות | גרירה חינם 24/7 | שירות מהיר",
  description: "מעוניינים למכור רכב לפירוק בחיפה והקריות? אנו קונים את כל סוגי הרכבים במחיר הוגן כולל גרירה בחינם. מענה מהיר בכל אזור הצפון 24/7. התקשרו עכשיו לקבלת הצעה!",
  alternates: {
    canonical: "/areas/haifa-general/buy-cars-for-scrap-haifa-krayot-towing-included"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירות גרירה וקניית רכבים לפירוק חיפה והקריות",
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
    "serviceType": "Car Scrap and Towing"
  };

  return (
    <main className="bg-neutral-950 text-neutral-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קניית רכבים לפירוק בחיפה והקריות – גרירה עלינו!</h1>
          <p className="text-xl mb-8">נמאס לכם מהרכב הישן? אנו מציעים שירות קניית רכבים לפירוק מהיר, אמין וכולל פינוי וגרירה בחינם עד אליכם.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-3 rounded-lg font-bold hover:bg-neutral-200 transition"
            >
              התקשרו עכשיו להצעת מחיר הוגנת
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירות מקצועי לפינוי רכבים לפירוק</h2>
        <p className="mb-4">אנו מתמחים בקניית רכבים לפירוק מכל הסוגים: רכבים פרטיים, רכבים מסחריים וג'יפונים. השירות שלנו כולל גרירה מקצועית בפריסה ארצית רחבה, בין היתר ב<Link href="/areas/haifa-general/scrap-car-removal-kiryat-haim-cash" className="text-blue-400 underline">קרית חיים</Link> ובכל אזור הקריות. למידע נוסף על פינוי מאזור הצ'ק פוסט, ניתן לבקר גם בדף <Link href="/areas/haifa-general/cheap-towing-check-post-krayot" className="text-blue-400 underline">גרירה זולה בצ'ק פוסט</Link>.</p>
        <p className="mb-4"><strong>הערה חשובה:</strong> השירות מיועד לרכבים בעלי 4 גלגלים ומעלה בלבד. איננו מספקים שירותי פירוק לאופנועים.</p>
        
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6">שאלות נפוצות</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl">האם אתם מגיעים לכל אזור חיפה והקריות?</h3>
              <p>כן, אנו פעילים בכל רחבי חיפה והקריות. אם אתם זקוקים לעזרה בדרכים עוקפות, מומלץ לבדוק גם <Link href="/areas/haifa-general/towing-service-road-22-krayot-bypass" className="text-blue-400 underline">שירותי גרירה בכביש 22 עוקף קריות</Link>.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">האם ניתן לפנות רכב תקוע לאחר תאונה?</h3>
              <p>בוודאי. אנו מנוסים מאוד בפינוי רכבים לאחר תאונה או רכבים שלא מניעים. לתושבי הקריות, אנו מציעים גם <Link href="/areas/haifa-general/scrap-car-removal-for-parts-kiryat-motzkin" className="text-blue-400 underline">פירוק רכבים לחלפים בקרית מוצקין</Link> בשירות מהיר.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">האם שירות הגרירה כלול במחיר הפירוק?</h3>
              <p>בהחלט. אנו מאמינים בשקיפות מלאה ומציעים פינוי רכב הכולל גרירה ללא עלות נוספת ללקוח.</p>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-neutral-900 rounded-xl border border-neutral-800">
          <h3 className="text-2xl font-semibold mb-4">למה לבחור בנו?</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>גרירה ופינוי כלולים במחיר.</li>
            <li>תשלום במזומן או בהעברה מיידית.</li>
            <li>זמינות 24/7 לכל תרחיש.</li>
            <li>מקצועיות ואמינות ללא פשרות.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
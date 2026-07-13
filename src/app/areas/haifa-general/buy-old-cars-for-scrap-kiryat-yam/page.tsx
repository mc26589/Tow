import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בקרית ים - תשלום במזומן ופינוי תוך 30 דקות",
  description: "מעוניינים למכור רכב ישן? קונה רכבים לפירוק בקרית ים עם תשלום מזומן במקום ופינוי מיידי. שירות אמין לכל סוגי הרכבים באזור הקריות. התקשרו עכשיו לבירור מחיר!",
  alternates: {
    canonical: "/areas/haifa-general/buy-old-cars-for-scrap-kiryat-yam",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי קניית רכבים לפירוק וגרירה בקרית ים",
    "areaServed": "Kiryat Yam",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8357",
      "longitude": "35.0686"
    },
    "priceRange": "$",
    "serviceType": "Car Scrap and Removal"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בקרית ים – פינוי מיידי ומזומן</h1>
          <p className="text-xl mb-8">נמאס לכם מהרכב הישן? אנו קונים רכבים ללא טסט, רכבים אחרי תאונה או רכבים עם תקלות מכניות. שירות מהיר בקרית ים והקריות.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="קרית ים" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה למכור את הרכב שלכם לפירוק אצלנו?</h2>
          <p className="mb-4">אנו מציעים פתרון מקצועי לתושבי קרית ים המחפשים <Link href="/areas/haifa-general/kone-rehavim-lepiruk-haifa-krayot" className="text-blue-400 underline">קונה רכבים לפירוק בחיפה והקריות</Link>. אם הרכב שלכם תקוע או שאינכם רוצים להשקיע בתיקונים יקרים, אנו כאן כדי לפנות אותו במהירות.</p>
          <p className="mb-4">השירות שלנו כולל גרירה בטוחה ומהירה מכל רחובות העיר, החל מאזור רוטשילד ועד לשכונות המערביות. למידע נוסף על פינוי ספציפי, ניתן לבדוק גם את שירות <Link href="/areas/haifa-general/buy-cars-for-scrap-kiryat-yam-immediate-removal" className="text-blue-400 underline">פינוי רכבים לפירוק בקרית ים עם מענה מיידי</Link>.</p>
          <p className="text-sm text-gray-400 italic">* שימו לב: אנו מתמחים ברכבים ורכבים מסחריים בלבד. לא מספקים שירותי פינוי לאופנועים.</p>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6">שאלות נפוצות בנושא רכבים לפירוק</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-bold">באילו רכבים אתם מטפלים?</h4>
              <p>אנחנו קונים כל רכב: רכבים ישנים, רכבים שלא עברו טסט, רכבים מושבתים או רכבים שעברו תאונה ואינם במצב נסיעה.</p>
            </div>
            <div>
              <h4 className="font-bold">האם אתם מגיעים לכל אזור בקרית ים?</h4>
              <p>כן, אנו נותנים שירות מלא בכל חלקי העיר וכן מספקים שירותי גרירה משלימים כמו <Link href="/areas/haifa-general/affordable-car-towing-kiryat-motzkin-24-7" className="text-blue-400 underline">גרירה זמינה בקרית מוצקין</Link> במידת הצורך.</p>
            </div>
            <div>
              <h4 className="font-bold">איך נקבע המחיר לרכב לפירוק?</h4>
              <p>המחיר נקבע לפי משקל הרכב, הברזל, החלקים שניתן להציל ועלות השינוע. אנו מבטיחים שירות הוגן ושקוף ללא עלויות נסתרות.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "פינוי רכב לפירוק בקריית חיים | מזומן במקום | שירות מהיר 24/7",
  description: "צריכים פינוי רכב לפירוק בקריית חיים? משלמים מזומן במקום, גרירה מהירה לכל סוגי הרכבים. שירות אמין ומקצועי. התקשרו עכשיו להצעת מחיר משתלמת!",
  alternates: {
    canonical: "/areas/haifa-general/scrap-car-removal-kiryat-haim-cash",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופינוי רכבים חיפה והקריות",
    "areaServed": "קריית חיים",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8192",
      "longitude": "35.0556"
    },
    "priceRange": "$",
    "serviceType": "פינוי רכב לפירוק"
  };

  return (
    <main className="bg-neutral-950 text-neutral-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">פינוי רכב לפירוק בקריית חיים – הצעת מחיר במזומן עוד היום</h1>
          <p className="text-xl mb-8">נתקעתם עם רכב ישן? אנו מציעים פינוי מהיר, שירות אדיב ותשלום הוגן במזומן בקריית חיים והסביבה.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="קריית חיים" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-3 rounded-lg font-bold hover:bg-neutral-200 transition"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6">מדוע לבחור בנו לפינוי רכב לפירוק בקריית חיים?</h2>
        <p className="mb-4">אנו מתמחים בפינוי כל סוגי הרכבים, מרכבים ישנים ועד רכבים לאחר תאונה, ומעניקים שירות מקצועי בכל אזור חיפה והקריות. אם אתם זקוקים לשירותי גרירה דחופים באזור, אנו גם ממליצים על <Link href="/areas/haifa-general/גרירה-24-7-עוקף-קריות-מחיר-הוגן" className="text-blue-400 hover:underline">גרירה 24/7 עוקף קריות מחיר הוגן</Link>. בנוסף, אנו מבצעים רכישת רכבים לפירוק גם ללקוחות המעוניינים ב-<Link href="/areas/haifa-general/kaniyat-rekhavim-yeshanim-lehalafim-kiryat-yam-pinui-meyadi" className="text-blue-400 hover:underline">קניית רכבים ישנים לחלפים בקרית ים</Link> עם פינוי מיידי.</p>
        <ul className="list-disc list-inside space-y-2 mb-8">
          <li>פינוי מהיר ומקצועי ללא עלות גרירה.</li>
          <li>הצעת מחיר הוגנת במזומן במקום - ללא הפתעות.</li>
          <li>זמינות גבוהה לכל תושבי קריית חיים.</li>
          <li>טיפול בכל סוגי הרכבים: פרטי, מסחרי ורכבי שטח.</li>
        </ul>
        
        <div className="mt-12 bg-neutral-900 p-8 rounded-xl border border-neutral-800">
          <h3 className="text-2xl font-bold mb-4">שאלות ותשובות בנושא פינוי רכבים</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-bold">באילו רכבים אתם מטפלים?</h4>
              <p className="text-neutral-300">אנו מפנים רכבים פרטיים, רכבים מסחריים ורכבי 4x4. חשוב לציין: איננו מפנים אופנועים מכל סוג שהוא.</p>
            </div>
            <div>
              <h4 className="font-bold">איך מתבצע התשלום עבור הרכב?</h4>
              <p className="text-neutral-300">התשלום מתבצע במזומן במקום, מיד לאחר בדיקת הרכב ופינויו מהשטח שלכם.</p>
            </div>
            <div>
              <h4 className="font-bold">האם אתם מגיעים גם מחוץ לקריית חיים?</h4>
              <p className="text-neutral-300">כן, אנו נותנים שירות לכל אזור חיפה והקריות, כולל אזורי תעשייה ודרכים ראשיות בקרבת מקום.</p>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 rounded-xl border border-neutral-800">
          <p className="text-sm text-neutral-400">
            *הערה: שירות זה מתמקד ברכבים בעלי 4 גלגלים ומעלה. איננו מספקים פינוי לאופנועים, קטנועים או טרקטורונים.
          </p>
        </div>
      </section>
    </main>
  );
}
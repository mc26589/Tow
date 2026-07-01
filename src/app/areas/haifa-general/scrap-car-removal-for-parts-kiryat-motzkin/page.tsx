import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "פינוי רכבים לפירוק בקרית מוצקין | הגעה תוך 30 דקות | 24/7",
  description: "נתקעתם עם רכב ישן? שירות פינוי רכבים לפירוק בקרית מוצקין והסביבה. פינוי מהיר, שירות אמין ומחיר הוגן במזומן. התקשרו עכשיו לקבלת הצעה!",
  alternates: {
    canonical: "/areas/haifa-general/scrap-car-removal-for-parts-kiryat-motzkin",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופינוי רכבים חיפה והקריות",
    "areaServed": "Kiryat Motzkin",
    "priceRange": "₪₪",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8250",
      "longitude": "35.0750"
    },
    "serviceType": "Scrap car removal"
  };

  return (
    <main className="bg-neutral-950 text-neutral-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">פינוי רכבים לפירוק בקרית מוצקין – שירות מהיר ומקצועי</h1>
          <p className="text-xl mb-8">נפטרים מהרכב הישן במינימום מאמץ. פינוי רכבים לפירוק בקרית מוצקין 24/7 במחיר הוגן.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Kiryat Motzkin" />
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
        <h2 className="text-3xl font-bold mb-6">פינוי רכבים לפירוק בקרית מוצקין – מענה מיידי לכל סוגי הרכבים</h2>
        <p className="mb-4">אם ברשותכם רכב ישן או תקול, אנו מספקים מענה מהיר. מלבד פינוי לרכבים, אנו מציעים שירותי <Link href="/areas/haifa-general/cheap-towing-kiryat-motzkin-fair-price" className="text-blue-400 underline">גרירה זולה בקרית מוצקין במחיר הוגן</Link>. זקוקים לפינוי מהיר גם מהקריות הסמוכות? אנו מבצעים <Link href="/areas/haifa-general/buying-junk-cars-for-parts-kiryat-bialik-immediate-removal" className="text-blue-400 underline">קניית רכבים לפירוק בקרית ביאליק</Link> עם פינוי מיידי.</p>
        <p className="mb-4">השירות שלנו מתאים לכל רכב שאינו כשיר לנסיעה, בין אם מדובר ברכב פרטי או מסחרי. לקוחות רבים מחפשים גם <Link href="/areas/haifa-general/cash-for-junk-cars-scrap-vehicle-removal-kiryat-motzkin" className="text-blue-400 underline">מזומן עבור רכבים לפירוק בקרית מוצקין</Link> - אנו הכתובת הנכונה.</p>
        
        <h3 className="text-2xl font-bold mt-8 mb-4">למה לבחור בנו?</h3>
        <ul className="list-disc list-inside space-y-2 mb-8">
          <li>זמינות מלאה 24/7 באזור חיפה והקריות.</li>
          <li>פינוי בטוח, מהיר ושמירה על סביבה נקייה.</li>
          <li>מחירים הוגנים ותשלום במקום על רכבים לפירוק.</li>
          <li>ניסיון מקצועי רב בטיפול בכל סוגי הרכבים (למעט אופנועים).</li>
        </ul>

        <div className="mt-12 bg-neutral-900 p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-6">שאלות נפוצות על פינוי רכבים בקרית מוצקין</h3>
          <div className="space-y-6">
            <div>
              <p className="font-bold">האם אתם קונים רכבים ללא טסט?</p>
              <p>כן, אנו קונים ומפנים רכבים לפירוק בקרית מוצקין מכל מצב - ללא טסט, לאחר תאונה או רכבים שעמדו שנים.</p>
            </div>
            <div>
              <p className="font-bold">מהו טווח המחירים לרכב לפירוק?</p>
              <p>המחיר משתנה בהתאם למשקל הרכב, חלקי החילוף שניתן להפיק ממנו ודגם הרכב. אנו מתחייבים למחיר הוגן בשוק.</p>
            </div>
            <div>
              <p className="font-bold">תוך כמה זמן תגיעו לפנות את הרכב?</p>
              <p>אנו מבינים את הדחיפות ופועלים להגעה מהירה בכל רחבי קרית מוצקין והסביבה. <Link href="/areas/haifa-general/גרירה-24-7-עוקף-קריות-מחיר-הוגן" className="text-blue-400 underline">צרו קשר לקבלת הערכת זמן מדויקת</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
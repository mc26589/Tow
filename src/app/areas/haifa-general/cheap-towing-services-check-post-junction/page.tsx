import { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרירת רכבים בצומת צ'ק פוסט | שירות 24/7 מהיר ומחיר הוגן",
  description: "נתקעתם בצומת צ'ק פוסט? שירותי גרירה מקצועיים ומהירים 24/7 לרכבים פרטיים ומסחריים. מחיר הוגן, צוות מנוסה והגעה מהירה. התקשרו עכשיו לקבלת שירות!",
  alternates: {
    canonical: "/areas/haifa-general/cheap-towing-services-check-post-junction",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה בצומת צ'ק פוסט",
    "areaServed": "חיפה והקריות",
    "priceRange": "$$,$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7885",
      "longitude": "35.0235"
    },
    "serviceType": ["גרירת רכבים", "חילוץ רכב", "שירותי דרך"]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">שירותי גרירה זולים בצומת צ'ק פוסט</h1>
          <p className="text-lg mb-8 max-w-2xl">
            זקוקים לחילוץ מהיר באזור צומת צ'ק פוסט? אנו מתמחים במתן שירותי גרירה מקצועיים לרכבים פרטיים, מסחריים ורכבי 4x4. 
            אנו מציעים מחירים הוגנים ושירות ללא פשרות 24 שעות ביממה. 
            חשוב לציין: איננו מספקים שירותי גרירה לאופנועים. אם הרכב שלכם מושבת לחלוטין, ייתכן שתרצו לבדוק גם שירותי <Link href="/areas/haifa-general/buy-cars-for-scrap-check-post-haifa" className="underline font-bold">פינוי רכבים לפירוק בצ'ק פוסט</Link>.
          </p>
          <div className="flex flex-wrap gap-4">
            <WhatsAppCTA cityName="צומת צ'ק פוסט" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">למה לבחור בנו בצומת צ'ק פוסט?</h2>
        <ul className="list-disc pr-6 space-y-2 mb-8">
          <li>זמינות מלאה 24/7 לכל קריאה בכל שעות היממה.</li>
          <li>הגעה מהירה לכל נקודה בצומת צ'ק פוסט והסביבה הקרובה.</li>
          <li>מחירים הוגנים ושקופים ללא הפתעות מיותרות.</li>
          <li>צוות מיומן ומקצועי לטיפול בטוח ברכבכם ללא נזקים.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">שאלות נפוצות</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold">האם אתם מבצעים חילוץ תאונות בצומת?</h3>
            <p>כן, אנו מספקים שירותי <Link href="/areas/haifa-general/24-7-accident-recovery-towing-check-post-junction-haifa">חילוץ לאחר תאונות בצומת צ'ק פוסט</Link> בצורה מקצועית.</p>
          </div>
          <div>
            <h3 className="font-bold">מה עושים אם הרכב מושבת לגמרי?</h3>
            <p>במקרים בהם הרכב אינו בר תיקון, אנו מציעים פתרונות של <Link href="/areas/haifa-general/pinui-rechev-grotah-grira-check-post-haifa-krayot-lechalafim">פינוי רכבים לגריטה או פירוק</Link>.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
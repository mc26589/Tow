import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "שירותי גרירה זולים בצומת צ'ק פוסט | הגעה מהירה 24/7",
  description: "זקוקים לגרר בצומת צ'ק פוסט? שירותי גרירה מקצועיים, מחיר הוגן וזמינות מסביב לשעון. אל תתקעו בדרכים – התקשרו עכשיו להזמנת גרר!",
  alternates: {
    canonical: "/areas/haifa-general/cheap-towing-services-check-post-junction",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה בצומת צ'ק פוסט",
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
      "latitude": "32.7885",
      "longitude": "35.0253"
    },
    "serviceType": "Towing Service"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירה זולים בצומת צ'ק פוסט - זמינות 24/7</h1>
          <p className="text-xl mb-8">נתקעתם עם הרכב בצ'ק פוסט? אנחנו כאן בשבילכם עם שירות גרירה מהיר, אמין ובמחיר הוגן לכל סוגי הרכבים.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              התקשרו עכשיו להזמנת גרר
            </a>
            <WhatsAppCTA cityName="Haifa and Krayot" />
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירותי גרירה מקצועיים באזור צ'ק פוסט</h2>
        <p className="mb-4">אנו מספקים מענה מהיר לכל נהג שנתקע באזור צומת צ'ק פוסט. בין אם מדובר בתקלה מכנית או תאונה, הצוות שלנו יגיע לחלץ אתכם בבטחה. אנו מציעים גם פתרונות מסוג <Link href="/areas/haifa-general/affordable-emergency-car-towing-check-post-haifa" className="text-blue-600 underline">affordable emergency car towing check post haifa</Link> לנהגים שזקוקים לעזרה דחופה.</p>
        <p className="mb-4">זקוקים לשירותי גרירה נוספים באזור? תוכלו לבדוק את השירות שלנו ל-<Link href="/areas/haifa-general/cheap-towing-check-post-haifa" className="text-blue-600 underline">cheap towing check post haifa</Link> או לבצע פינוי רכבים לפירוק דרך <Link href="/areas/haifa-general/scrap-cars-haifa-krayot-immediate-removal" className="text-blue-600 underline">scrap cars haifa krayot immediate removal</Link>.</p>
        <p className="text-sm text-gray-500 italic mt-6">שימו לב: אנו מתמחים בגרירת רכבים בלבד ואיננו מספקים שירותי גרירה לאופנועים.</p>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על גרירה בצ'ק פוסט</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">תוך כמה זמן מגיע גרר לצומת צ'ק פוסט?</h3>
              <p>אנו משתדלים להגיע לכל קריאה באזור צומת צ'ק פוסט במינימום זמן. זמני ההגעה תלויים בעומסי התנועה באזור אך אנו ערוכים למתן מענה מהיר.</p>
            </div>
            <div>
              <h3 className="font-bold">מה מחיר גרירה ממוצע באזור?</h3>
              <p>אנו מקפידים על מחיר הוגן ותחרותי. למידע על מחירים וזמינות 24 שעות ביממה, מומלץ ליצור קשר ישירות בטלפון.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
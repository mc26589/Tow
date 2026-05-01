import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "גרירת רכב תקוע בכביש 22 קריות | שירות 24/7",
  description: "נתקעתם בכביש 22? שירות גרירה מהיר ומקצועי לקריות וחיפה. זמינות 24/7, מחירים הוגנים, שירות אמין לרכבים פרטיים ומסחריים."
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
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
      "latitude": "32.8191",
      "longitude": "35.0550"
    },
    "serviceType": "Towing and Roadside Assistance"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="gradient-trust text-white py-14 md:py-20 px-6">
        <h1 className="text-4xl font-bold mb-6">גרירת רכב תקוע בכביש 22 קריות</h1>
        <p className="text-xl mb-8">נתקעתם עם הרכב בכביש עוקף קריות (כביש 22)? אנו מספקים שירותי גרירה וחילוץ מהירים ומקצועיים לכל סוגי הרכבים הפרטיים, המסחריים ורכבי 4x4. הצוות שלנו זמין עבורכם 24 שעות ביממה, 7 ימים בשבוע.</p>
        <div className="flex flex-col gap-4">
          <WhatsAppCTA cityName="Haifa and Krayot" />
          <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-black font-bold py-3 px-6 rounded-lg text-center">
            התקשרו עכשיו לקבלת הצעת מחיר
          </a>
        </div>
      </section>
      <section className="py-12 px-6 bg-gray-900 text-white">
        <h2 className="text-3xl font-bold mb-4">למה לבחור בנו לחילוץ בכביש 22?</h2>
        <ul className="list-disc pl-6 space-y-3">
          <li>זמינות מלאה 24/7 לכל אורך כביש 22.</li>
          <li>הגעה מהירה לנקודת התקיעה במינימום זמן.</li>
          <li>צוות מיומן ומנוסה בטיפול ברכבים תקועים.</li>
          <li>מחירים הוגנים ושקיפות מלאה מול הלקוח.</li>
          <li>ציוד גרירה מתקדם המותאם לרכבים פרטיים ומסחריים.</li>
        </ul>
        <p className="mt-6 text-sm text-gray-400">*שימו לב: אנו מתמחים בגרירת רכבים פרטיים, מסחריים ו-4x4. איננו מספקים שירותי גרירה לאופנועים.</p>
      </section>
    </main>
  );
}
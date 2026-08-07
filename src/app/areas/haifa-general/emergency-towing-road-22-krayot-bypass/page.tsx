import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרירת רכב בכביש 22 עוקף קריות | הגעה מהירה 24/7 | מחיר הוגן",
  description: "נתקעתם על כביש 22? שירות גרירת רכבים מקצועי ומהיר לכל נקודה בעוקף קריות. הגעה תוך 30 דקות, מחיר הוגן ושירות 24/7. התקשרו עכשיו לפתרון מיידי!",
  alternates: {
    canonical: "/areas/haifa-general/emergency-towing-road-22-krayot-bypass",
  },
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
      "latitude": "32.8156",
      "longitude": "35.0653"
    },
    "serviceType": "Emergency Towing"
  };

  return (
    <main className="bg-neutral-950 text-neutral-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירה דחופים בכביש 22 עוקף קריות</h1>
          <p className="text-xl mb-8">נתקעתם בדרך? צוות החילוץ שלנו בדרך אליכם עם מענה מהיר ומקצועי.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all"
            >
              חיוג מהיר לשירות גרירה
            </a>
            <WhatsAppCTA cityName="Haifa and Krayot" />
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לחילוץ בכביש 22?</h2>
        <p className="mb-4">אנו מבינים את הדחיפות שבחילוץ רכב בכביש מהיר כמו כביש 22. אנו מציעים מחירים הוגנים ושירות אמין ללא הפתעות לכלל הנהגים באזור.</p>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>זמינות 24/7 לכל אורך עוקף קריות.</li>
          <li>ציוד גרירה חדיש המתאים לרכבים פרטיים ומסחריים.</li>
          <li>הגעה מהירה לכל נקודה בציר, כולל סיוע ב-<Link href="/areas/haifa-general/emergency-roadside-assistance-flat-tire-route-22-kiryat-bialik" className="text-blue-400 underline">החלפת גלגל או פנצ'ר בקרית ביאליק</Link>.</li>
        </ul>
        <p className="text-neutral-300">
           זקוקים לשירותי גרירה באזורים סמוכים? ניתן לבדוק גם <Link href="/areas/haifa-general/emergency-car-breakdown-towing-route-22-check-post-haifa-cheap" className="text-blue-400 underline">גרירת רכב בצ'ק פוסט</Link> או <Link href="/areas/haifa-general/emergency-towing-cheap-kiryat-bialik" className="text-blue-400 underline">שירותי גרירה זולים בקרית ביאליק</Link>.
        </p>
        <p className="mt-6 text-sm text-neutral-400">* שים לב: איננו מספקים שירותי גרירה לאופנועים.</p>
      </section>

      <section className="py-16 bg-neutral-900 container mx-auto px-4 rounded-xl">
        <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על גרירה בעוקף קריות</h2>
        <div className="space-y-6">
           <div>
             <h3 className="font-bold text-xl mb-2">תוך כמה זמן תגיעו לחלץ אותי בכביש 22?</h3>
             <p>אנו מבינים את הסכנה בעצירה בכביש מהיר. לרוב אנו מגיעים לנקודות מרכזיות בעוקף קריות תוך 30 דקות מרגע הקריאה.</p>
           </div>
           <div>
             <h3 className="font-bold text-xl mb-2">מה כולל המחיר של שירות גרירה?</h3>
             <p>המחיר נקבע בהתאם למרחק הגרירה וסוג הרכב. אנו מקפידים על מחיר הוגן ושקוף ללא עלויות נסתרות, לכלל סוגי התקלות בדרכים.</p>
           </div>
           <div>
             <h3 className="font-bold text-xl mb-2">האם אתם גוררים רכבים גם ממרכז הקריות?</h3>
             <p>בהחלט. מעבר לכביש 22, אנו מספקים פתרונות גרירה מקצועיים בכל אזור המפרץ והקריות, כולל סיוע ל-<Link href="/areas/haifa-general/affordable-car-towing-service-check-post-haifa" className="text-blue-400 underline">רכבים התקועים באזור הצ'ק פוסט</Link>.</p>
           </div>
        </div>
      </section>
    </main>
  );
}
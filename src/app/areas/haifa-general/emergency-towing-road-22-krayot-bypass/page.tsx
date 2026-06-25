import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "שירותי גרירה בכביש 22 עוקף קריות | הגעה מהירה 24/7",
  description: "נתקעתם בכביש 22 עוקף קריות? אנו מספקים שירותי גרירה מקצועיים ואמינים 24/7 במחיר הוגן. צוות מיומן בדרך אליכם. התקשרו עכשיו לחילוץ מהיר!",
  alternates: {
    canonical: "/areas/haifa-general/emergency-towing-road-22-krayot-bypass",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": { "@type": "Place", "name": "כביש 22 עוקף קריות" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "priceRange": "$",
    "serviceType": "Emergency Roadside Assistance and Towing",
    "geo": { "@type": "GeoCoordinates", "latitude": "32.8190", "longitude": "35.0630" }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירה דחופים בכביש 22 עוקף קריות</h1>
          <p className="text-xl mb-8">נתקעתם בדרך? צוות החילוץ שלנו בדרך אליכם. מענה מהיר, מקצועי ובטוח.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg">
              התקשרו עכשיו לחילוץ
            </a>
            <WhatsAppCTA cityName="Haifa and Krayot" />
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירותי גרירה מקצועיים בכביש 22</h2>
        <p className="mb-4">אנו מספקים שירותי גרירה דחופים לכל סוגי הרכבים הפרטיים והמסחריים לאורך כביש 22. אנו מבינים את הדחיפות שבחילוץ מציר תנועה מרכזי כמו עוקף קריות ומבטיחים הגעה מהירה. במידה ואתם זקוקים לשירותי גרירה משלימים באזור, אנו זמינים גם בקרבת <Link href="/areas/haifa-general/cheap-towing-check-post-junction" className="text-blue-600 underline">צומת צ'ק פוסט</Link>.</p>
        <p className="text-red-600 font-bold mb-4">חשוב: איננו מספקים שירותי גרירה לאופנועים.</p>
        <p>אנו מציעים מחירים הוגנים ושירות אדיב 24 שעות ביממה. למידע נוסף על שירותי חילוץ ספציפיים באזור, ניתן לבדוק גם <Link href="/areas/haifa-general/affordable-24-7-towing-kiryat-bialik-flat-tire" className="text-blue-600 underline">שירותי גרירה בקרית ביאליק</Link>.</p>
      </section>

      <section className="py-12 container mx-auto px-4 bg-gray-50">
        <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על גרירה בכביש 22</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold">תוך כמה זמן תגיעו לחילוץ בכביש 22?</h3>
            <p>אנו ממוקמים בפריסה רחבה בחיפה והקריות, מה שמאפשר לנו להגיע לנקודות מרכזיות בכביש 22 בזמן מהיר.</p>
          </div>
          <div>
            <h3 className="font-bold">האם אתם מפנים רכבים ישנים לגריטה?</h3>
            <p>כן, אנו מספקים גם שירותי גרירה לפירוק. ניתן לראות מידע נוסף על <Link href="/areas/haifa-general/towing-for-scrap-kiryat-bialik" className="text-blue-600 underline">גרירה לפירוק בקרית ביאליק</Link>.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
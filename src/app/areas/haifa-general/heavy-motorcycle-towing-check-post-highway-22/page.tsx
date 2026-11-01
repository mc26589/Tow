import { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרירת רכב בכביש 22 וצ'ק פוסט | הגעה מהירה 24/7",
  description: "נתקעת בצ'ק פוסט או בכביש 22? שירותי גרירה מקצועיים 24/7. הגעה מהירה עד 30 דקות במחיר הוגן ושקוף. התקשרו עכשיו לחילוץ בטוח!",
  alternates: {
    canonical: "/areas/haifa-general/heavy-motorcycle-towing-check-post-highway-22"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": "Haifa and Krayot",
    "priceRange": "מחיר הוגן",
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
    "serviceType": "Towing and Roadside Assistance"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            שירותי גרירה וחילוץ רכב במחלף צ'ק פוסט וכביש 22
          </h1>
          <p className="text-lg md:text-xl mb-8">
            נתקעת בדרך? אנו מספקים מענה מקצועי 24/7 לרכבים פרטיים ומסחריים. הגעה מהירה בפריסה רחבה באזור חיפה והקריות.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-200 transition"
            >
              התקשר עכשיו לחילוץ רכב
            </a>
            <WhatsAppCTA cityName="חיפה והקריות" />
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">זקוק לגרירה דחופה באזור הצ'ק פוסט?</h2>
        <p className="mb-4">
          האזור של צ'ק פוסט וכביש 22 הוא ציר תנועה מרכזי שבו אנו פועלים בשוטף. אם רכבך נתקע, ניתן להסתייע בשירותי <Link href="/areas/haifa-general/towing-services-road-22-krayot" className="text-blue-600 underline">towing services road 22 krayot</Link> שלנו למענה מהיר. במידה ומדובר בתקלה במצבר או רכב חשמלי, אנו מציעים פתרונות מותאמים של <Link href="/areas/haifa-general/electric-vehicle-flat-battery-towing-route-22-krayot" className="text-blue-600 underline">electric vehicle flat battery towing route 22 krayot</Link>.
        </p>
        <p className="mb-4">
          למקרים מורכבים יותר כמו חילוץ מתעלה או תאונה, זמין עבורך שירות <Link href="/areas/haifa-general/emergency-car-recovery-ditch-route-4-check-post" className="text-blue-600 underline">emergency car recovery ditch route 4 check post</Link> מקצועי ומיומן.
        </p>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על שירותי גרירה</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg">תוך כמה זמן תגיעו אלי בכביש 22?</h3>
              <p>הצוות שלנו ממוקם בנקודות אסטרטגיות באזור חיפה והקריות, לרוב אנו מגיעים ללקוחותינו בטווח של עד 30 דקות, בכפוף לעומסי התנועה.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">האם אתם נותנים שירות גם במקרה של תאונה?</h3>
              <p>בהחלט. אנו מבצעים פינוי מהיר ומקצועי של רכבים לאחר תאונה למניעת חסימת צירים, תוך עבודה מול חברות הביטוח במידת הצורך.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">האם השירות יקר?</h3>
              <p>אנו מאמינים במחירים הוגנים ושקופים. למידע נוסף ניתן להתרשם משירותי <Link href="/areas/haifa-general/cheap-towing-check-post-junction" className="text-blue-600 underline">cheap towing check post junction</Link> שלנו שמתאימים לכל כיס.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
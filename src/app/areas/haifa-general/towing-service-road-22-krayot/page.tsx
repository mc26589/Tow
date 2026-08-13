import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרר בכביש 22 קריות | חילוץ רכב מהיר 24/7 | מחיר הוגן",
  description: "נתקעתם בכביש 22? שירות גרירה מהיר ומקצועי לרכב פרטי ומסחרי בקריות ובסביבה. הגעה מהירה, מחיר הוגן ושירות 24/7. התקשרו עכשיו לחילוץ!",
  alternates: {
    canonical: "/areas/haifa-general/towing-service-road-22-krayot"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה בכביש 22 קריות",
    "areaServed": "Haifa and Krayot",
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
    "priceRange": "$",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר רכבים תקועים בכביש 22 קריות – שירות מהיר ומקצועי 24/7</h1>
          <p className="text-xl mb-8">נתקעתם בכביש 22? אל תחכו בכביש מסוכן. אנחנו בדרך אליכם.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-200 transition"
            >
              התקשרו עכשיו לחילוץ מהיר
            </a>
            <WhatsAppCTA cityName="Haifa and Krayot" />
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירות גרירה מקצועי לאורך כביש 22</h2>
        <p className="mb-4">כביש 22 הוא עורק תחבורה מרכזי, וכשנתקעים בו, חשוב להזמין שירות גרירה שמכיר את הציר היטב. אנו מספקים מענה מהיר לכל סוגי הרכבים הפרטיים והמסחריים.</p>
        <p className="mb-4">
          זקוקים לפתרונות נוספים באזור? אנו מציעים גם <Link href="/areas/haifa-general/cheap-towing-check-post-haifa-fast-service" className="text-blue-600 underline">שירותי גרירה בצומת צ'ק פוסט</Link> או <Link href="/areas/haifa-general/affordable-flatbed-towing-kiryat-bialik-industrial-zone" className="text-blue-600 underline">גרירה באזור התעשייה קריית ביאליק</Link>.
        </p>
        <p className="mb-4"><strong>שימו לב:</strong> אנו מתמחים ברכבים פרטיים ורכבים מסחריים בלבד. איננו מספקים שירותי גרירה לאופנועים.</p>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על גרירה בכביש 22</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">תוך כמה זמן תגיעו אלי בכביש 22?</h3>
              <p>אנו פרוסים בכל אזור הקריות וחיפה, מה שמאפשר לנו להגיע בדרך כלל תוך 30-45 דקות מרגע הקריאה.</p>
            </div>
            <div>
              <h3 className="font-bold">האם אתם מפנים גם גרוטאות רכב?</h3>
              <p>כן, אנו מספקים שירותי <Link href="/areas/haifa-general/pinui-rechev-grotah-grira-check-post-haifa-krayot-lechalafim" className="text-blue-600 underline">פינוי רכבים לפירוק באזור חיפה והקריות</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
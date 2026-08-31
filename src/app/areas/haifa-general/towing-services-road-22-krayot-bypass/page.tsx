import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר בכביש 22 עוקף קריות | שירות מהיר 24/7 | מחיר הוגן",
  description: "נתקעתם בכביש 22 (עוקף קריות)? אנו מספקים שירותי גרירה מקצועיים ומהירים לרכבים פרטיים ומסחריים. הגעה מהירה, מחיר הוגן ושירות אמין. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/towing-services-road-22-krayot-bypass",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות - כביש 22",
    "areaServed": "Haifa and Krayot",
    "priceRange": "$$,$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8190",
      "longitude": "35.0630"
    },
    "serviceType": "Emergency Roadside Assistance and Towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר רכבים תקועים בכביש 22 עוקף קריות</h1>
          <p className="text-lg md:text-xl mb-8">
            נתקעתם בדרך? אנו מספקים שירותי גרירה מקצועיים לרכבים פרטיים ומסחריים לאורך כביש 22. הגעה מהירה, טיפול זהיר ושירות ללא פשרות. 
            שימו לב: אנו לא מספקים שירותי גרירה לאופנועים.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="כביש 22 עוקף קריות" />
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">למה לבחור בנו בכביש 22?</h2>
          <p className="max-w-3xl mx-auto text-gray-700 mb-8 text-center">
            התקיעה בכביש מהיר כמו עוקף קריות היא מצב מלחיץ. הצוות שלנו מיומן בחילוץ בטוח גם בתנאי תנועה עמוסים. אנו מציעים מענה לכלל האזור, כולל שירותי <Link href="/areas/haifa-general/scrap-car-buyer-haifa-krayot-immediate-removal" className="text-blue-600 underline">פינוי גרוטאות רכב בחיפה והקריות</Link> ושירותי חילוץ מקיפים.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h3 className="text-2xl font-bold mb-6">שאלות נפוצות על שירותי גרירה בעוקף קריות</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold">תוך כמה זמן תגיעו אלי לכביש 22?</h4>
              <p className="text-gray-600">אנו מתחייבים להגעה מהירה ככל הניתן בהתאם לעומסי התנועה באזור הקריות.</p>
            </div>
            <div>
              <h4 className="font-bold">האם אתם גוררים אופנועים?</h4>
              <p className="text-gray-600">אנו מתמקדים ברכבים פרטיים ומסחריים ואיננו גוררים אופנועים. למקרים דומים של <Link href="/areas/haifa-general/motorcycle-towing-service-road-22-krayot-bypass" className="text-blue-600 underline">גרירת רכבים באזור</Link>, נשמח לעזור.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
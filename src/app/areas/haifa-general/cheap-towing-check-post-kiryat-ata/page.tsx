import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "גרר זול בצומת צ'ק פוסט קרית אתא | שירות 24/7",
  description: "זקוקים לגרר בצומת צ'ק פוסט? שירות גרירה מהיר, מקצועי ובמחיר הוגן לרכבים פרטיים ומסחריים. זמינים 24/7 לכל קריאה."
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה צ'ק פוסט קרית אתא",
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
      "latitude": "32.7936",
      "longitude": "35.0353"
    },
    "serviceType": "Emergency Towing"
  };

  return (
    <main className="bg-neutral-950 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">גרר זול בצומת צ'ק פוסט קרית אתא – שירות מהיר ומקצועי 24/7</h1>
        <p className="text-lg md:text-xl mb-8">נתקעתם בדרך? הצוות שלנו מחכה לכם באזור צ'ק פוסט למתן שירות גרירה מהיר ובטוח.</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-neutral-200 transition">
            התקשרו עכשיו להצעת מחיר
          </a>
          <WhatsAppCTA cityName="Haifa and Krayot" />
        </div>
      </section>

      <section className="max-w-4xl mx-auto py-12 px-6 text-white">
        <h2 className="text-2xl font-bold mb-4">שירותי גרירה מקצועיים בצומת צ'ק פוסט</h2>
        <p className="mb-4">אנו מבינים את החשיבות של הגעה מהירה כאשר הרכב נתקע. השירות שלנו מתמקד במתן פתרון מיידי לנהגים באזור צומת צ'ק פוסט וקרית אתא.</p>
        <p className="mb-4"><strong>חשוב לדעת:</strong> אנו מתמחים בגרירת רכבים פרטיים, מסחריים ורכבי 4x4. איננו מספקים שירותי גרירה לאופנועים.</p>
        <h3 className="text-xl font-semibold mt-6 mb-2">למה לבחור בנו?</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>זמינות מלאה 24/7 לכל אזור הקריות וחיפה.</li>
          <li>מחירים הוגנים ושקופים ללא הפתעות.</li>
          <li>ציוד גרירה מתקדם המבטיח שמירה על הרכב שלכם.</li>
        </ul>
      </section>
    </main>
  );
}
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
      "latitude": "32.7885",
      "longitude": "35.0350"
    },
    "serviceType": "Emergency Towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר זול בצומת צ'ק פוסט קרית אתא – שירות מהיר ומקצועי 24/7</h1>
          <p className="text-xl mb-8">נתקעתם בדרך? אנו כאן בשבילכם עם שירות גרירה אמין ומחירים הוגנים.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg">
              התקשרו עכשיו להצעת מחיר
            </a>
            <WhatsAppCTA cityName="Haifa and Krayot" />
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירותי גרירה מקצועיים באזור צ'ק פוסט</h2>
        <p className="mb-4">אנו מספקים מענה מיידי לכל סוגי הרכבים הפרטיים, המסחריים ורכבי 4x4. הצוות שלנו מכיר היטב את עומסי התנועה בצומת צ'ק פוסט ויודע להגיע אליכם בזמן הקצר ביותר.</p>
        <div className="bg-gray-100 p-6 rounded-lg border-r-4 border-red-600">
          <p className="font-bold">הערה חשובה:</p>
          <p>אנו מתמחים בגרירת רכבים פרטיים, מסחריים ורכבי שטח בלבד. איננו מספקים שירותי גרירה לאופנועים.</p>
        </div>
      </section>
    </main>
  );
}
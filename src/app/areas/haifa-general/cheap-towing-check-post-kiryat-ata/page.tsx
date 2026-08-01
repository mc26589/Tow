import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "גרר זול בצומת צ'ק פוסט קרית אתא | שירות 24/7",
  description: "זקוקים לגרר בצומת צ'ק פוסט? שירות גרירה מהיר, מקצועי ובמחיר הוגן לרכבים פרטיים ומסחריים. זמינות 24/7 באזור חיפה והקריות."
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה צ'ק פוסט",
    "areaServed": "Haifa and Krayot",
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
    "priceRange": "$",
    "serviceType": "Towing and Roadside Assistance"
  };

  return (
    <main className="bg-neutral-950 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">גרר זול בצומת צ'ק פוסט קרית אתא</h1>
          <p className="text-xl mb-8">נתקעתם בדרך? אנחנו כאן בשבילכם עם שירות גרירה מהיר, אמין ובמחיר הוגן.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-neutral-200 transition"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
            <WhatsAppCTA cityName="Haifa and Krayot" />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 container mx-auto text-neutral-200">
        <h2 className="text-3xl font-bold mb-6 text-white">שירותי גרירה מקצועיים באזור צ'ק פוסט</h2>
        <p className="mb-4">
          אנו מספקים מענה מיידי לכל סוגי הרכבים הפרטיים, המסחריים ורכבי 4x4. הצוות שלנו מכיר היטב את עומסי התנועה בצומת צ'ק פוסט ופועל בפריסה רחבה כדי להגיע אליכם בזמן הקצר ביותר.
        </p>
        <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800">
          <h3 className="text-xl font-bold text-white mb-3">חשוב לדעת:</h3>
          <p>
            אנו מתמחים בחילוץ וגרירת רכבים פרטיים ומסחריים בלבד. לצערנו, איננו מספקים שירותי גרירה לאופנועים. אנו מתחייבים למחירים הוגנים ושירות ללא פשרות.
          </p>
        </div>
      </section>
    </main>
  );
}
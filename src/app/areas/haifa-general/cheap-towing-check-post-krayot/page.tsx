import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "גרר זול בצומת צ'ק פוסט קריות | שירות 24/7",
  description: "מחפשים גרר זול בצומת צ'ק פוסט? שירות גרירה מקצועי, מהיר ובמחיר הוגן לכל סוגי הרכבים באזור חיפה והקריות. זמינים 24/7."
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
      "latitude": "32.7940",
      "longitude": "35.0250"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר זול בצומת צ'ק פוסט קריות</h1>
          <p className="text-xl mb-8">נתקעתם בצומת צ'ק פוסט? אנו כאן בשבילכם עם שירות גרירה מהיר, אמין ובמחיר הוגן.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              חיוג מהיר לגרר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">שירותי גרירה מקצועיים באזור הצ'ק פוסט</h2>
          <p className="mb-4">אנו מתמחים בחילוץ וגרירת רכבים פרטיים, רכבים מסחריים ורכבי 4x4. הצוות שלנו מכיר היטב את עומסי התנועה בצומת צ'ק פוסט ויודע להגיע אליכם בזמן הקצר ביותר.</p>
          <p className="font-semibold text-red-600">חשוב לציין: אנו לא מספקים שירותי גרירה לאופנועים.</p>
          <p className="mt-4">אנו מתחייבים למחיר הוגן ושקוף. לקבלת הצעת מחיר מדויקת, צרו איתנו קשר טלפוני ונשמח לסייע לכם לחזור לשגרה במהירות.</p>
        </div>
      </section>
    </main>
  );
}
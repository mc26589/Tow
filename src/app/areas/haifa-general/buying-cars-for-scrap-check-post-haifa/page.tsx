import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק במצב סגור צ'ק פוסט חיפה | פינוי מיידי",
  description: "מחפשים קונה רכבים לפירוק במצב סגור באזור צ'ק פוסט חיפה? אנו מציעים שירות פינוי רכבים ללא עלות, הצעות מחיר הוגנות ושירות 24/7. פנו אלינו עוד היום."
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופינוי רכבים חיפה והקריות",
    "areaServed": "Haifa and Krayot",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7940",
      "longitude": "35.0240"
    },
    "priceRange": "$",
    "serviceType": "Car Scrap Removal"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק במצב סגור צ'ק פוסט חיפה</h1>
          <p className="text-xl mb-8">פינוי רכבים מושבתים, לאחר תאונה או ללא טסט – שירות מהיר, אמין ומקצועי באזור חיפה והקריות.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפינוי רכב לפירוק?</h2>
        <p className="mb-4">אנו מבינים את הצורך בפינוי מהיר של רכבים במצב סגור מאזור צ'ק פוסט. הצוות שלנו ערוך להגיע לכל נקודה, לבצע את הפינוי בצורה בטוחה ולהעניק לכם הצעת מחיר הוגנת במקום.</p>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>פינוי רכבים ללא עלות</li>
          <li>שירות מקצועי 24/7</li>
          <li>טיפול בכל סוגי הרכבים הפרטיים והמסחריים</li>
          <li>הצעת מחיר הוגנת ומיידית</li>
        </ul>
        <p className="text-sm text-gray-600 italic">* שים לב: אנו לא מטפלים באופנועים או דו-גלגלי מכל סוג שהוא.</p>
      </section>
    </main>
  );
}
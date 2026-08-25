import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "חילוץ רכב תקוע במנהרות הכרמל שירות מהיר | 24/7",
  description: "נתקעתם במנהרות הכרמל? שירות חילוץ רכב מהיר ומקצועי בחיפה. זמינות 24/7, מחירים הוגנים, צוות מיומן. התקשרו עכשיו לסיוע מיידי."
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ חיפה והקריות",
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
      "longitude": "34.9896"
    },
    "priceRange": "$",
    "serviceType": "Emergency Car Towing and Rescue"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ רכב תקוע במנהרות הכרמל שירות מהיר</h1>
          <p className="text-xl mb-8">נתקעתם בתוך המנהרות? אל תחכו, צוות החילוץ שלנו בדרך אליכם.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              חיוג מהיר למוקד החילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">מענה מיידי לחילוץ בתוך מנהרות הכרמל</h2>
        <p className="mb-4">אם נתקעתם עם הרכב בתוך מנהרות הכרמל, אנו כאן כדי לספק לכם מענה מיידי, בטוח ומקצועי. אנו מבינים את הדחיפות והסכנה הכרוכה בעצירה בתוך המנהרה, ולכן צוות החילוץ שלנו ערוך להגעה מהירה לכל נקודה בציר המנהרות בחיפה. אנו מתמחים בחילוץ רכבים פרטיים, רכבי שטח ומסחריות קלות, תוך הקפדה על נהלי בטיחות מחמירים.</p>
        
        <h3 className="text-2xl font-semibold mt-8 mb-4">למה לבחור בנו?</h3>
        <ul className="list-disc pr-6 space-y-2">
          <li>זמינות 24/7 לכל קריאה בחיפה והקריות.</li>
          <li>ניסיון רב בחילוץ מורכב בתוך מנהרות.</li>
          <li>ציוד גרירה מתקדם המבטיח שמירה על הרכב שלכם.</li>
          <li>מחירים הוגנים ושירות אדיב.</li>
        </ul>

        <div className="mt-8 p-6 bg-gray-100 rounded-lg">
          <p className="font-bold">הערה חשובה:</p>
          <p>השירות שלנו מיועד לרכבים פרטיים, מסחריים ורכבי 4x4 בלבד. איננו מספקים שירותי חילוץ או גרירה לאופנועים.</p>
        </div>
      </section>
    </main>
  );
}
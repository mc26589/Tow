import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "חילוץ רכב תקוע בעלייה תלולה באחוזה, חיפה | הגעה תוך 30 דק'",
  description: "נתקעתם עם הרכב בעלייה באחוזה חיפה? חילוץ מקצועי ומיידי לרכבים פרטיים ומסחריים בשיפועים חדים. מחיר הוגן ושירות 24/7. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/towing-services-stuck-vehicle-steep-hill-ahuza-haifa"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ באחוזה חיפה",
    "areaServed": { "@type": "City", "name": "Haifa" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "$$,$",
    "serviceType": "Emergency Vehicle Towing and Recovery"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ רכב תקוע בעלייה תלולה באחוזה, חיפה</h1>
          <p className="text-xl mb-8">נתקעתם בעלייה? הצוות שלנו בדרך אליכם עם פתרונות חילוץ מקצועיים לרכבים פרטיים ומסחריים בלב הכרמל.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="אחוזה והכרמל" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              חיוג מהיר למוקד החילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">חילוץ מקצועי לרכבים תקועים בשיפועי אחוזה</h2>
        <p className="mb-4">נתקעתם עם הרכב בעלייה תלולה בשכונת אחוזה בחיפה? אנו מספקים מענה מיידי, בטוח ומקצועי לחילוץ רכבים פרטיים ומסחריים שנתקעו בשיפועים חדים. אנו מבינים את האתגר הייחודי של רחובות הכרמל התלולים ומצוידים בציוד גרירה מתקדם המותאם בדיוק למצבים אלו.</p>
        <p className="mb-4">זקוקים לעזרה בדרכים? אנו מציעים גם פתרונות נוספים כמו <Link href="/areas/haifa-general/24-7-towing-electric-vehicle-battery-dead-ahuzah-haifa" className="text-blue-600 underline">גרירת רכבים חשמליים וטיפול במצברים באחוזה</Link>. אם אתם זקוקים לחילוץ רכב דו-גלגלי, אנו מציעים גם <Link href="/areas/haifa-general/heavy-motorcycle-towing-service-ahuzah-haifa-now" className="text-blue-600 underline">שירותי גרירה מקצועיים לאופנועים באחוזה</Link>.</p>
        
        <h3 className="text-2xl font-semibold mt-8 mb-4">שאלות נפוצות</h3>
        <div className="space-y-4">
            <div>
                <h4 className="font-bold">האם אתם מחלצים רכבים שנתקעו באמצע עלייה תלולה?</h4>
                <p>בהחלט. הציוד שלנו כולל רצועות ומנופים המותאמים לעבודה בשיפועים חדים, האופייניים מאוד לרחובות שכונת אחוזה ומרכז הכרמל.</p>
            </div>
            <div>
                <h4 className="font-bold">מהו זמן ההגעה הממוצע באזור אחוזה?</h4>
                <p>אנו פרוסים בנקודות אסטרטגיות בכרמל ומשתדלים להגיע לכל קריאה תוך 30-45 דקות, בהתאם לעומסי התנועה.</p>
            </div>
            <div>
                <h4 className="font-bold">האם אתם מפנים גם רכבים שאינם במצב נסיעה (גרוטאות)?</h4>
                <p>כן, אם הרכב אינו בר תיקון, אנו מציעים שירות של <Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-towing-included" className="text-blue-600 underline">קניית רכבים לפירוק בחיפה כולל גרירה</Link>.</p>
            </div>
        </div>
      </section>
    </main>
  );
}
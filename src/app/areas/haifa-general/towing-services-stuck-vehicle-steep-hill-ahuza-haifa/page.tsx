import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "חילוץ רכב תקוע בעלייה תלולה באחוזה, חיפה | הגעה תוך 30 דקות",
  description: "נתקעתם עם הרכב בשיפוע חזק באחוזה? חילוץ מקצועי לרכבים תקועים בעליות של הכרמל. שירות מהיר, אמין ומחיר הוגן. התקשרו עכשיו לקבלת סיוע!",
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
    "priceRange": "מחירי שוק הוגנים",
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
          <p className="text-xl mb-8">נתקעתם בשיפוע של רחוב תלול באחוזה? אנו מתמחים בחילוץ רכבים בלב הכרמל. שירות מהיר, מקצועי ובטוח.</p>
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
        <h2 className="text-3xl font-bold mb-6">חילוץ רכבים בשיפועים חדים באחוזה והכרמל</h2>
        <p className="mb-4">שכונת אחוזה ידועה בעליות התלולות והשיפועים המאתגרים שלה. אם הרכב שלכם נתקע, אל תנסו לאמץ את הגיר. אנו מציעים שירות גרירה מקצועי ומגיעים מצוידים במערכות המותאמות לעבודה בשיפועים חדים.</p>
        <p className="mb-4">
            נתקעתם בגלל תנאי שטח או בוץ בחורף? אנו מספקים מענה מקצועי גם עבור <Link href="/areas/haifa-general/car-rescue-from-mud-carmel-area" className="text-blue-600 underline font-semibold">חילוץ רכב מבוץ באזור הכרמל</Link>. במידה והרכב שלכם חשמלי, אנו מציעים שירות מיוחד עבור <Link href="/areas/haifa-general/24-7-towing-electric-vehicle-battery-dead-ahuzah-haifa" className="text-blue-600 underline font-semibold">חילוץ רכבים חשמליים באחוזה</Link> במקרה של פריקת סוללה.
        </p>
        
        <h3 className="text-2xl font-semibold mt-8 mb-4">שאלות נפוצות</h3>
        <div className="space-y-4">
            <div>
                <h4 className="font-bold">האם אתם מחלצים רכבים שנתקעו באמצע עלייה תלולה?</h4>
                <p>בהחלט. הציוד שלנו כולל רצועות ומנופי גרירה המותאמים לעבודה בשיפועים חדים, האופייניים מאוד לרחובות שכונת אחוזה וציר מוריה.</p>
            </div>
            <div>
                <h4 className="font-bold">מהו זמן ההגעה הממוצע באזור הכרמל?</h4>
                <p>הצוותים שלנו פרוסים בנקודות אסטרטגיות בחיפה, מה שמאפשר לנו להגיע לכל קריאה באחוזה תוך 30 עד 45 דקות, בהתאם לעומסי התנועה.</p>
            </div>
            <div>
                <h4 className="font-bold">האם אתם מטפלים ברכבים חשמליים?</h4>
                <p>כן, אנו נותנים מענה לרכבים חשמליים שנתקעו בשל פריקת סוללה או תקלה טכנית. מומלץ לציין את סוג הרכב בשיחה כדי שנתאים את הציוד המתאים ביותר.</p>
            </div>
        </div>
      </section>
    </main>
  );
}
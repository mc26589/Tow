import { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרר לרכב באחוזה חיפה - שירות מקצועי ומהיר 24/7",
  description: "זקוקים לגרר באזור אחוזה חיפה? שירותי גרירה מקצועיים לרכבים פרטיים ומסחריים 24/7. הגעה מהירה, מחיר הוגן ושירות אמין. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/motorcycle-towing-ahuza-haifa",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה אחוזה חיפה",
    "areaServed": "Haifa, Ahuza",
    "priceRange": "$$, $$$",
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
    "serviceType": "Car Towing and Roadside Assistance"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            שירותי גרירה באחוזה, חיפה - זמינות 24/7 לרכבכם
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            זקוקים לסיוע בדרך? אנו מספקים שירותי גרירה מקצועיים לרכבים פרטיים ומסחריים באחוזה ובסביבתה. שימו לב: השירות אינו כולל גרירת אופנועים.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Ahuza, Haifa" />
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
        <h2 className="text-2xl font-bold mb-4">שירותי גרירה וחילוף באזור אחוזה</h2>
        <p className="mb-4">
          אנו מבינים את התסכול שבתקלה פתאומית. אם נתקעתם בדרך או מחפשים <Link href="/areas/haifa-general/emergency-car-breakdown-towing-route-22-check-post-haifa-cheap" className="text-blue-600 underline">שירותי גרירה באזור הצ'ק פוסט</Link> או באחוזה, הצוות שלנו זמין להגיע במהירות. 
          למרות שאיננו מטפלים באופנועים, אנו מומחים בחילוץ רכבי 4x4, ומי שזקוק ל-<Link href="/areas/haifa-general/hilutz-4x4-butz-carmel-haifa" className="text-blue-600 underline">חילוץ שטח בכרמל</Link> יכול לסמוך עלינו.
        </p>
        <ul className="list-disc pr-6 space-y-2">
          <li>זמינות 24/7 לכל אזור אחוזה ומרכז הכרמל.</li>
          <li>ציוד גרירה מתקדם לרכבים פרטיים ורכבי שטח.</li>
          <li>מחירים הוגנים ושירות אדיב ללא הפתעות.</li>
          <li>מענה מהיר לכל תקלה בדרך בעיר.</li>
        </ul>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות (FAQ)</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg">מהו זמן ההגעה הממוצע באחוזה?</h3>
              <p>אנו שואפים להגיע לכל נקודה באחוזה ובחיפה בזמן קצר ככל הניתן בהתאם לעומסי התנועה.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">האם אתם מבצעים גרירת אופנועים?</h3>
              <p>כרגע שירותי הגרירה שלנו מיועדים לרכבים פרטיים, מסחריים ורכבי שטח בלבד. איננו מספקים שירותי גרירת אופנועים.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">האם אתם קונים רכבים לפירוק?</h3>
              <p>כן, אנו מציעים שירות מקיף עבור <Link href="/areas/haifa-general/pinui-rechev-grotah-grira-check-post-haifa-krayot-lechalafim" className="text-blue-600 underline">פינוי רכבים לגריטה</Link> באזור חיפה.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
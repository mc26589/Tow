import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרירת רכב בכביש 4 ליד קריית מוצקין | הגעה מהירה 24/7",
  description: "נתקעתם בכביש 4 ליד קריית מוצקין? שירותי גרירה מקצועיים, מחיר הוגן והגעה מהירה לרכבים פרטיים ומסחריים. התקשרו עכשיו לחילוץ מהיר!",
  alternates: {
    canonical: "/areas/haifa-general/heavy-motorcycle-towing-service-breakdown-route-4-near-kiryat-motzkin"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ חיפה והקריות",
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
      "latitude": "32.8350",
      "longitude": "35.0750"
    },
    "serviceType": "Towing and Roadside Assistance"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירות גרירה וחילוץ רכב בכביש 4 ליד קריית מוצקין</h1>
          <p className="text-lg mb-8">
            נתקעתם עם הרכב בכביש 4? אנו מספקים מענה מקצועי לכל תקלה בדרך. אנו מתמחים בחילוץ רכבים פרטיים, רכבים מסחריים ו-4x4.
            אם אתם מחפשים <Link href="/areas/haifa-general/cheap-small-car-towing-kiryat-motzkin-nave-ganim" className="underline">גרירה במחיר הוגן בקריית מוצקין</Link>, הצוות שלנו זמין עבורכם. 
            <br /><strong>שימו לב: שירותינו מיועדים לרכבים בלבד ואיננו מספקים שירותי גרירה לאופנועים.</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו לחילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בשירותי הגרירה שלנו?</h2>
          <ul className="space-y-4">
            <li>✓ זמינות 24/7 לכל קריאה באזור הקריות וכביש 4</li>
            <li>✓ מחירים הוגנים ושקיפות מלאה ללא הפתעות</li>
            <li>✓ ניסיון רב בחילוץ רכבים מורכב, כולל <Link href="/areas/haifa-general/affordable-flatbed-towing-route-22-krayot-area" className="text-blue-400">גרירה בטוחה בשיטת גרר משטח</Link></li>
            <li>✓ שירותים משלימים כגון <Link href="/areas/haifa-general/cheap-towing-check-post-kiryat-ata" className="text-blue-400">גרירה בקריית אתא</Link> וסביבתה</li>
          </ul>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על גרירת רכב בכביש 4</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold">מהו זמן ההגעה הממוצע בכביש 4 ליד מוצקין?</h3>
              <p>אנו משתדלים להגיע לכל קריאה בזמן המהיר ביותר האפשרי, לרוב תוך דקות ספורות ממועד הקריאה, בהתאם לעומסי התנועה בציר.</p>
            </div>
            <div>
              <h3 className="font-bold">האם אתם מטפלים ברכבים שאינם ניתנים לתיקון?</h3>
              <p>כן, במידה והרכב הושבת לחלוטין, ניתן לקבל מידע על <Link href="/areas/haifa-general/פינוי-רכב-גרוטאה-לחלפים-קריית-מוצקין" className="text-blue-600">פינוי רכב גרוטאה לחלפים בקריית מוצקין</Link> ושירותי פינוי נלווים.</p>
            </div>
            <div>
              <h3 className="font-bold">האם השירות כולל חילוץ רכבים כבדים?</h3>
              <p>אנו מצוידים בציוד המתאים לחילוץ רכבים פרטיים ומסחריים. למידע נוסף על שירותים רחבים, בקרו בעמוד <Link href="/areas/haifa-general/affordable-car-breakdown-towing-check-post-haifa-krayot" className="text-blue-600">גרירת רכבים באזור הקריות</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
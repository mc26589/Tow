import { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר לרכב בדרך פרויד חיפה | שירות מקצועי 24/7 | מחיר הוגן",
  description: "נתקעת בדרך פרויד בחיפה? אנו מציעים שירותי גרירה וחילוץ לרכבים פרטיים ומסחריים בפריסה רחבה. מענה מהיר, שקיפות מלאה ומחיר הוגן. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/heavy-motorcycle-towing-freud-haifa-price"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ חיפה והקריות",
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
      "longitude": "34.9896"
    },
    "serviceType": "Towing and Roadside Assistance for Cars and 4x4"
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
            שירותי גרירה בדרך פרויד חיפה
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            נתקעת עם הרכב בדרך פרויד? צוות המומחים שלנו זמין עבורך 24/7 לחילוץ וגרירת רכבים פרטיים ומסחריים. לידיעתכם: איננו מספקים שירותי גרירה לאופנועים.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold mb-4">שירותי גרירה וחילוץ בחיפה והסביבה</h2>
          <p className="mb-6">
            אם הרכב שלך זקוק לחילוץ מהיר באזור חיפה, אנו הכתובת. אנו מספקים שירותים משלימים נוספים כגון <Link href="/areas/haifa-general/cheap-towing-services-check-post-junction" className="text-blue-600 underline">גרירת רכבים בצומת הצ'ק פוסט</Link> או <Link href="/areas/haifa-general/cheap-car-towing-service-ahuzah-haifa-transparent-pricing" className="text-blue-600 underline">גרירת רכבים בשכונת אחוזה</Link>. צוות הגרר שלנו ערוך להגעה מהירה לכל נקודה בעיר.
          </p>
          
          <div className="flex flex-col gap-4 mt-8">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-black text-white py-4 px-8 rounded-lg text-center font-bold hover:bg-gray-800 transition-colors"
            >
              חיוג מהיר למוקד החילוץ
            </a>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-bold mb-4">שאלות נפוצות על שירותי גרירה</h3>
            <div className="space-y-4">
              <div>
                <p className="font-bold">האם אתם גוררים אופנועים בדרך פרויד?</p>
                <p>לא, כרגע איננו מספקים שירותי גרירה לאופנועים, אלא מתמקדים ברכבים פרטיים, רכבי שטח ומסחריות.</p>
              </div>
              <div>
                <p className="font-bold">מהו זמן ההגעה המשוער בחיפה?</p>
                <p>אנו עושים את מירב המאמצים להגיע תוך זמן קצר מרגע הקריאה. למידע נוסף על אזורים אחרים, ניתן לבדוק גם <Link href="/areas/haifa-general/affordable-24-7-towing-kiryat-bialik-flat-tire" className="text-blue-600 underline">שירותי גרירה בקרית ביאליק</Link>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
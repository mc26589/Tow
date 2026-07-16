import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "חילוץ רכב תקוע בבוץ בכרמל ובחיפה - שירות מהיר 24/7",
  description: "נתקעתם בבוץ באזור הכרמל? אנו מספקים שירותי חילוץ רכב מקצועיים בפריסה רחבה בחיפה והסביבה. מחיר הוגן, מענה מהיר וציוד חילוץ מתקדם. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/car-stuck-in-mud-carmel-region",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ וגרירה חיפה והקריות",
    "areaServed": { "@type": "Place", "name": "אזור הכרמל, חיפה" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "$",
    "serviceType": "חילוץ רכב תקוע בבוץ",
    "mainEntityOfPage": {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "כמה זמן לוקח לכם להגיע לחילוץ בכרמל?",
          "acceptedAnswer": { "@type": "Answer", "text": "אנו פועלים בפריסה רחבה בחיפה והכרמל וערוכים להגעה מהירה ככל הניתן בהתאם לעומסי התנועה באזור." }
        }
      ]
    }
  };

  return (
    <main className="bg-neutral-950 text-neutral-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ רכב תקוע בבוץ באזור הכרמל</h1>
          <p className="text-xl mb-8">נתקעתם בבוץ? הצוות המקצועי שלנו בדרך אליכם עם ציוד חילוץ מתקדם.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-3 rounded-lg font-bold hover:bg-neutral-200 transition"
            >
              התקשרו עכשיו לחילוץ מהיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">שירות חילוץ מקצועי לכל סוגי הרכבים</h2>
          <p className="mb-4">אם הרכב שלכם שקע בבוץ בדרכי העפר או בשטחים הפתוחים של הכרמל, אנחנו כאן כדי לסייע לכם באופן מיידי. אנו מתמחים בחילוצי שטח לרכבים פרטיים ורכבי 4x4. אם אתם זקוקים גם ל-<Link href="/areas/haifa-general/4x4-recovery-stuck-sand-kiryat-haim-beach-krayot" className="text-blue-400 underline">4x4 recovery stuck sand kiryat haim beach krayot</Link>, אנו הכתובת.</p>
          <p className="mb-4">אנו מציעים שירותים משלימים בכל האזור, כולל <Link href="/areas/haifa-general/affordable-towing-check-post-haifa" className="text-blue-400 underline">affordable towing check post haifa</Link> למי שנתקע באזור התעשייה או בדרכו לעיר.</p>
          <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 mt-8">
            <h3 className="text-xl font-bold mb-2">הערה חשובה:</h3>
            <p>אנו מתמחים בחילוץ רכבים פרטיים, מסחריים ורכבי שטח. איננו מספקים שירותי חילוץ או גרירה לאופנועים.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
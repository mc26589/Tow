import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "קניית רכבים לפירוק בקרית ביאליק - פינוי מהיר, תשלום במזומן!",
  description: "רוצים למכור רכב ישן? אנו קונים רכבים לפירוק באזור התעשייה הישן של קרית ביאליק. שירות מהיר, תשלום הוגן במזומן ופינוי מהיר מהשטח. התקשרו עכשיו לקבלת הצעה!",
  alternates: {
    canonical: "/areas/haifa-general/car-scrapping-old-industrial-zone-kiryat-bialik"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופירוק רכבים חיפה והקריות",
    "areaServed": "קרית ביאליק",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8285",
      "longitude": "35.0715"
    },
    "priceRange": "$",
    "serviceType": "קניית רכבים לפירוק וברזל"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "תוך כמה זמן אתם מפנים רכב לפירוק באזור התעשייה בקרית ביאליק?",
        "acceptedAnswer": { "@type": "Answer", "text": "אנו מספקים פינוי מהיר באזור התעשייה הישן של קרית ביאליק, לרוב תוך זמן קצר מרגע השיחה ותיאום מול הלקוח." }
      },
      {
        "@type": "Question",
        "name": "האם אתם קונים רכבים ללא טסט או רכבים מושבתים?",
        "acceptedAnswer": { "@type": "Answer", "text": "כן, אנו קונים רכבים ישנים, מושבתים, לאחר תאונה או רכבים המיועדים לפירוק לברזל, ומשלמים במזומן במקום." }
      }
    ]
  };

  return (
    <main className="bg-neutral-950 text-neutral-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">קניית רכבים לפירוק באזור התעשייה הישן של קרית ביאליק</h1>
          <p className="text-lg md:text-xl mb-8">פינוי מהיר, תשלום הוגן במקום וגרירה ללא עלות. אנו מומחים בפינוי רכבים ישנים ומושבתים.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="קרית ביאליק" />
            <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white text-neutral-900 px-8 py-3 rounded-lg font-bold hover:bg-neutral-200 transition">
              חייגו עכשיו לבירור מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">למה לבחור בנו לפירוק רכבים בקרית ביאליק?</h2>
        <p className="mb-4">
          אנו מציעים שירות מקצועי ומקיף באזור התעשייה הישן. אם אתם זקוקים לפתרון פינוי מהיר, אנו כאן עבורכם. 
          ניתן להתרשם גם משירותי <Link href="/areas/haifa-general/affordable-flatbed-towing-kiryat-bialik-industrial-zone" className="text-blue-400">גרירת רכבים באזור התעשייה קרית ביאליק</Link> או לבדוק אפשרויות ל-<Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-krayot" className="text-blue-400">קניית רכבים לפירוק בכל אזור חיפה והקריות</Link>. 
          השירות שלנו כולל פינוי מקצועי של רכבים פרטיים, מסחריים ורכבי 4x4. 
        </p>
        <p className="text-red-400 font-semibold mb-8">חשוב להבהיר: איננו מטפלים באופנועים או בכל סוג של כלי רכב דו-גלגלי.</p>
        
        <div className="mt-12 bg-neutral-900 p-8 rounded-lg">
          <h3 className="text-xl font-bold mb-4">שאלות נפוצות</h3>
          <div className="space-y-4">
            <div>
              <p className="font-bold">באילו אזורים נוספים אתם פעילים?</p>
              <p>אנו מעניקים שירותי פינוי גם ב-<Link href="/areas/haifa-general/cash-for-junk-cars-scrap-vehicle-removal-kiryat-motzkin" className="text-blue-400">קרית מוצקין</Link> ובכל אזור הצפון.</p>
            </div>
            <div>
              <p className="font-bold">מה כולל השירות?</p>
              <p>פינוי הרכב באמצעות גרר, תשלום מיידי במזומן והסדרת הניירת הנדרשת מול הרשויות.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
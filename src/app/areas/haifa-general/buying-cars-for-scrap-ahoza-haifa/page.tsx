import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק באחוזה חיפה | מחיר הוגן ותשלום במזומן",
  description: "מעוניינים למכור רכב לפירוק באחוזה חיפה? אנו קונים רכבים ישנים, תקולים ולאחר תאונה. שירות מהיר, פינוי חינם ותשלום במזומן במקום. התקשרו עכשיו!",
  alternates: {
    canonical: "https://yourdomain.com/areas/haifa-general/buying-cars-for-scrap-ahoza-haifa",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וקניית רכבים לפירוק באחוזה חיפה",
    "description": "קונים רכבים לפירוק באחוזה חיפה והסביבה. שירות מהיר, אמין ומחירים הוגנים לרכבים ישנים, תקולים ולאחר תאונה.",
    "url": "https://yourdomain.com/areas/haifa-general/buying-cars-for-scrap-ahoza-haifa",
    "telephone": `+${BUSINESS_INFO.phone}`,
    "areaServed": ["חיפה", "אחוזה", "חיפה והקריות"],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 32.7940,
      "longitude": 34.9896
    },
    "priceRange": "$",
    "serviceType": ["רכישת רכבים לפירוק", "גריטת רכבים", "פינוי רכבים תקולים"]
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "תוך כמה זמן אתם מגיעים לפנות רכב לפירוק באחוזה?",
        "acceptedAnswer": { "@type": "Answer", "text": "אנו מספקים שירות מהיר באחוזה ובחיפה, לרוב ניתן לתאם פינוי עוד באותו היום." }
      },
      {
        "@type": "Question",
        "name": "האם אתם קונים רכבים לאחר תאונה באחוזה?",
        "acceptedAnswer": { "@type": "Answer", "text": "כן, אנו קונים כל סוגי הרכבים: ישנים, מושבתים, תקולים או לאחר תאונות." }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">קונה רכבים לפירוק באחוזה חיפה – שירות מהיר ואמין</h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            מחפשים שירות אמין לקניית רכבים לפירוק באחוזה חיפה? אנו מתמחים ברכישת כל סוגי הרכבים ומציעים תשלום הוגן במזומן.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppCTA cityName="Haifa" />
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold">התקשרו עכשיו</a>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12 text-gray-800">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">למה לבחור בנו לשירותי פירוק רכבים באחוזה?</h2>
          <p>אנו מבינים את הצורך בפינוי מהיר של רכבים ישנים. לצד שירות זה, אנו מספקים פתרונות נוספים באזור, כגון <Link href="/areas/haifa-general/car-scrapping-haifa-krayot" className="text-blue-600 underline">גריטת רכבים בחיפה והקריות</Link> ושירותי גרירה מקצועיים.</p>
        </section>

        <section className="mb-12 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">האם אתם מגיעים גם לCheck Post?</h3>
              <p>כן, אנו מספקים שירותי <Link href="/areas/haifa-general/buy-cars-for-scrap-check-post-haifa" className="text-blue-600 underline">קניית רכבים לפירוק בצ'ק פוסט חיפה</Link> ומסביב.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
import type { Metadata } from 'next';
import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoTowing",
  "name": "גרר מפרץ אקספרס",
  "description": "גרר מפרץ אקספרס מספקים שירותי גרירה וחילוץ 24/7 בחיפה והקריות. הגעה מהירה, מחירים הוגנים ושירות מקצועי.",
  "url": "https://www.towingrescuehaifa.co.il/cash-for-junk-cars-for-parts-kiryat-motzkin-immediate-pickup",
  "telephone": "tel:+972549174414",
  "priceRange": "$",
  "areaServed": [
    {
      "@type": "Place",
      "name": "Haifa"
    },
    {
      "@type": "Place",
      "name": "Krayot"
    },
    {
      "@type": "Place",
      "name": "Kiryat Motzkin"
    },
    {
      "@type": "Place",
      "name": "Kiryat Bialik"
    },
    {
      "@type": "Place",
      "name": "Kiryat Yam"
    },
    {
      "@type": "Place",
      "name": "Kiryat Haim"
    }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  ],
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "32.8183",
    "longitude": "35.0000"
  },
  "serviceType": ["גרירת רכבים", "חילוץ דרך", "שירותי גרירה", "חילוץ 4x4"],
  "image": "https://www.towingrescuehaifa.co.il/images/towing-truck.jpg",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Towing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Junk Car Towing",
          "description": "גרר מפרץ אקספרס מספקים שירותי גרירה וחילוץ 24/7 בחיפה והקריות. הגעה מהירה, מחירים הוגנים ושירות מקצועי.",
          "areaServed": {
            "@type": "Place",
            "name": "Kiryat Motzkin"
          }
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "ILS",
          "minPrice": 250
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Emergency Towing",
          "description": "גרר מפרץ אקספרס מספקים שירותי גרירה וחילוץ 24/7 בחיפה והקריות. הגעה מהירה, מחירים הוגנים ושירות מקצועי.",
          "areaServed": {
            "@type": "Place",
            "name": "Haifa and Krayot"
          }
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "ILS",
          "minPrice": 0,
          "maxPrice": 0,
          "valueAddedTaxIncluded": false,
          "description": "גרר מפרץ אקספרס מספקים שירותי גרירה וחילוץ 24/7 בחיפה והקריות. הגעה מהירה, מחירים הוגנים ושירות מקצועי."
        }
      }
    ]
  }
};

export const metadata: Metadata = {
  title: "גרירת רכבי גרוטאות לחלפים בקריית מוצקין: פתרונות איסוף מיידי | Towing Rescue Haifa",
  description: 'גרר מפרץ אקספרס מספקים שירותי גרירה וחילוץ 24/7 בחיפה והקריות. הגעה מהירה, מחירים הוגנים ושירות מקצועי. התקשרו עכשיו!',
  alternates: {
    canonical: "https://www.towingrescuehaifa.co.il/cash-for-junk-cars-for-parts-kiryat-motzkin-immediate-pickup",
  },
  openGraph: {
    title: "גרירת רכבי גרוטאות לחלפים בקריית מוצקין: פתרונות איסוף מיידי | Towing Rescue Haifa",
    description: 'גרר מפרץ אקספרס מספקים שירותי גרירה וחילוץ 24/7 בחיפה והקריות. הגעה מהירה, מחירים הוגנים ושירות מקצועי. התקשרו עכשיו!',
    url: "https://www.towingrescuehaifa.co.il/cash-for-junk-cars-for-parts-kiryat-motzkin-immediate-pickup",
    siteName: "Towing Rescue Haifa",
    images: [
      {
        url: "https://www.towingrescuehaifa.co.il/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Towing Rescue Haifa - Junk Car Towing Kiryat Motzkin",
      },
    ],
    locale: "he_IL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "גרירת רכבי גרוטאות לחלפים בקריית מוצקין: פתרונות איסוף מיידי | Towing Rescue Haifa",
    description: 'גרר מפרץ אקספרס מספקים שירותי גרירה וחילוץ 24/7 בחיפה והקריות. הגעה מהירה, מחירים הוגנים ושירות מקצועי. התקשרו עכשיו!',
    images: ["https://www.towingrescuehaifa.co.il/images/twitter-image.jpg"],
  },
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            גרירת רכבי גרוטאות לחלפים בקריית מוצקין: פתרונות איסוף מיידי
          </h1>
          <p className="mt-2 text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            שירותי גרירה וחילוץ מקצועיים 24/7. הגעה מהירה, שירות אמין ומחירים הוגנים לכל תושבי חיפה והקריות.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <WhatsAppCTA cityName="אזור חיפה" />
             <a href={`tel:+${BUSINESS_INFO.phone}`} className="flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white rounded-full px-7 py-3.5 font-semibold text-base border border-white/25 hover:bg-white/25 transition-colors w-full sm:w-auto justify-center">
                📞 התקשרו עכשיו: 054-9174414
             </a>
          </div>
        </div>
      </section>

      <section className="container mx-auto p-4 py-12">
        <p className="text-lg mb-4 leading-relaxed font-rubik text-gray-800">
          נתקעתם עם הרכב? אנחנו ב-<strong className="font-semibold">גרר מפרץ אקספרס</strong> מבינים את המשמעות של מצב חירום. אנו מספקים מענה מהיר ומקצועי למגוון רחב של רכבים, כולל רכבים פרטיים, מסחריים וג'יפים, אך <strong className="font-semibold text-red-600">איננו מספקים שירותי גרירה לאופנועים</strong>.
        </p>

        <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl shadow-sm mb-6">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">למה לבחור בנו?</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li><strong className="font-semibold">זמינות מלאה:</strong> אנחנו ערוכים לכל קריאה, 24 שעות ביממה, 7 ימים בשבוע.</li>
            <li><strong className="font-semibold">מחירים הוגנים וזולים:</strong> אנו מבטיחים הצעת מחיר הוגנת ושקופה בטלפון, ללא הפתעות וטריקים מסחריים.</li>
            <li><strong className="font-semibold">מקצועיות ואמינות:</strong> צוות גוררים מוסמך בעל ניסיון רב, שידאג לרכב שלכם בשיא העדינות והבטיחות של רישיון וביטוח מקיף.</li>
            <li><strong className="font-semibold">הגעה מהירה:</strong> ממוקמים בלב חיפה ומגיעים במהירות לכל פינה בעיר ובקריות.</li>
          </ul>
        </div>
        
        <p className="text-lg leading-relaxed text-gray-800">
          צרו קשר עוד היום בוואטסאפ או בשיחה ישירה, ונהג גרירה מקצועי יהיה בדרך אליכם!
        </p>
      </section>


    </main>
  );
}
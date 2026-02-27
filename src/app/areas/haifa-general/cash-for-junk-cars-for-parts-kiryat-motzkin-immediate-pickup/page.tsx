import type { Metadata } from 'next';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoTowing",
  "name": "Towing Rescue Haifa",
  "description": "Professional towing services for junk cars, non-running vehicles, and emergency roadside assistance in Haifa, Kiryat Motzkin, and the Krayot region. Immediate pickup and transport solutions.",
  "url": "https://www.towingrescuehaifa.co.il/cash-for-junk-cars-for-parts-kiryat-motzkin-immediate-pickup",
  "telephone": "tel:+972501234567",
  "priceRange": "250 ILS+",
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
  "serviceType": [
    "Towing Service",
    "Junk Car Removal",
    "Vehicle Recovery",
    "Roadside Assistance",
    "Emergency Towing"
  ],
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
          "description": "Towing and removal of non-running or junk cars for parts or scrap.",
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
          "description": "24/7 emergency towing and rescue services.",
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
          "description": "Zero-cost under specific emergency conditions."
        }
      }
    ]
  }
};

export const metadata: Metadata = {
  title: "גרירת רכבי גרוטאות לחלפים בקריית מוצקין: פתרונות איסוף מיידי | Towing Rescue Haifa",
  description: "מחפשים איסוף מיידי לרכב גרוטאה לחלפים בקריית מוצקין? Towing Rescue Haifa מספקת שירותי גרירה מקצועיים 24/7. התקשרו עכשיו לפתרון מהיר ויעיל.",
  alternates: {
    canonical: "https://www.towingrescuehaifa.co.il/cash-for-junk-cars-for-parts-kiryat-motzkin-immediate-pickup",
  },
  openGraph: {
    title: "גרירת רכבי גרוטאות לחלפים בקריית מוצקין: פתרונות איסוף מיידי | Towing Rescue Haifa",
    description: "מחפשים איסוף מיידי לרכב גרוטאה לחלפים בקריית מוצקין? Towing Rescue Haifa מספקת שירותי גרירה מקצועיים 24/7. התקשרו עכשיו לפתרון מהיר ויעיל.",
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
    description: "מחפשים איסוף מיידי לרכב גרוטאה לחלפים בקריית מוצקין? Towing Rescue Haifa מספקת שירותי גרירה מקצועיים 24/7. התקשרו עכשיו לפתרון מהיר ויעיל.",
    images: ["https://www.towingrescuehaifa.co.il/images/twitter-image.jpg"],
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="bg-blue-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            גרירת רכבי גרוטאות לחלפים בקריית מוצקין: פתרונות איסוף מיידי
          </h1>
          <p className="mt-2 text-xl">
            Towing Rescue Haifa: שירותי גרירה מקצועיים 24/7 באזור חיפה והקריות
          </p>
        </div>
      </header>

      <section className="container mx-auto p-4 py-8">
        <p className="text-lg mb-4 leading-relaxed">
          While <strong className="font-semibold">Towing Rescue Haifa</strong> specializes in zero-cost emergency towing and rescue services for vehicles across Haifa and the Krayot region, including <strong className="font-semibold">Kiryat Motzkin</strong>, we do not directly purchase junk cars for parts. However, if you are looking to sell a junk car for parts in Kiryat Motzkin and require <strong className="font-semibold">immediate pickup</strong> and transport to a scrap yard, a recycling facility, or a buyer, we provide prompt, professional, and reliable towing services.
        </p>
        <p className="text-lg mb-4 leading-relaxed">
          Our expert team is equipped to handle non-running vehicles and junk cars, ensuring safe and efficient removal from your location in Kiryat Motzkin. We understand the urgency of clearing unwanted vehicles, and our services are available <strong className="font-semibold">24/7</strong> to meet your needs.
        </p>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-bold mb-3 text-blue-700">Why Choose Towing Rescue Haifa for Junk Car Towing?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <strong className="font-semibold">Immediate Pickup:</strong> We prioritize urgent requests for junk car removal in Kiryat Motzkin and the surrounding Krayot area.
            </li>
            <li>
              <strong className="font-semibold">Transparent Pricing:</strong> Our towing services for junk cars start from <strong className="font-semibold">250 ILS</strong>, with clear quotes provided upfront based on vehicle type and distance. While emergency towing may be zero-cost under specific conditions, general towing services like junk car removal are priced competitively.
            </li>
            <li>
              <strong className="font-semibold">Fully Licensed &amp; Insured:</strong> <strong className="font-semibold">Towing Rescue Haifa</strong> operates with all necessary licenses and comprehensive insurance, giving you peace of mind. Our professional, certified operators ensure your vehicle is handled safely and responsibly.
            </li>
            <li>
              <strong className="font-semibold">24/7 Availability:</strong> Day or night, weekday or weekend, our team is ready to assist you with your towing needs.
            </li>
            <li>
              <strong className="font-semibold">Local Expertise:</strong> Serving <strong className="font-semibold">Haifa and Krayot</strong>, we have in-depth knowledge of the area, ensuring quick response times.
            </li>
          </ul>
        </div>

        <p className="text-lg mb-4 leading-relaxed">
          Don't let an old, non-functional car take up valuable space. Contact <strong className="font-semibold">Towing Rescue Haifa</strong> today for reliable and efficient towing of your junk car for parts in Kiryat Motzkin. We'll help you clear your property quickly and transport your vehicle to its next destination.
        </p>

        <div className="bg-blue-700 text-white p-6 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-2">Contact Us for Immediate Service!</h3>
          <p className="text-xl mb-2">
            <strong className="font-semibold">Towing Rescue Haifa</strong>
          </p>
          <p className="text-xl mb-2">
            Phone: <a href="tel:0501234567" className="underline text-white hover:text-blue-200 transition-colors">050-1234567</a>
          </p>
          <p className="text-lg">
            Serving Haifa, Kiryat Motzkin, and all Krayot areas.
          </p>
        </div>
      </section>
    </main>
  );
}
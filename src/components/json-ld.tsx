import Script from 'next/script';
import { BUSINESS_INFO } from '@/lib/data';
import { FAQItem } from '@/lib/seo-content';

interface JsonLdProps {
    cityName?: string;
    citySlug?: string;
    vehicleName?: string;
    faqs?: FAQItem[];
}

export function JsonLd({ cityName, citySlug, vehicleName, faqs }: JsonLdProps) {
    const localBusiness = {
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "AutoRepair"],
        name: "גרר צפון - שירותי גרירה",
        description: vehicleName && cityName
            ? `שירותי גרירה מקצועיים ל${vehicleName} ב${cityName}. הגעה מהירה תוך 30 דקות, מחירים הוגנים, 24/7.`
            : "שירותי גרירה מהירים ומקצועיים בחיפה, הקריות ואזור הצפון. 24/7.",
        telephone: "+972-54-917-4414",
        url: "https://grar-north.co.il",
        image: "https://grar-north.co.il/og-image.jpg",
        priceRange: "$$",
        openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
        },
        areaServed: cityName
            ? {
                "@type": "City",
                name: cityName,
            }
            : {
                "@type": "GeoCircle",
                geoMidpoint: {
                    "@type": "GeoCoordinates",
                    latitude: 32.794,
                    longitude: 34.989,
                },
                geoRadius: "30000",
            },
        address: {
            "@type": "PostalAddress",
            addressLocality: cityName || "חיפה",
            addressRegion: "צפון",
            addressCountry: "IL",
        },
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "127",
        },
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "שירותי גרירה",
            itemListElement: [
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: vehicleName
                            ? `גרירת ${vehicleName}`
                            : "שירותי גרירה כלליים",
                    },
                },
            ],
        },
    };

    // 3. FAQPage Schema (if faqs are provided)
    const faqSchema = faqs && faqs.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    } : null;

    const schemas: any[] = [localBusiness];
    if (faqSchema) {
        schemas.push(faqSchema);
    }

    return (
        <Script
            id="json-ld"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(schemas)
            }}
        />
    );
}

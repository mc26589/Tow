import Script from 'next/script';
import { BUSINESS_INFO, OWNER_INFO } from '@/lib/data';
import { FAQItem } from '@/lib/seo-content';

interface JsonLdProps {
    cityName?: string;
    citySlug?: string;
    vehicleName?: string;
    vehicleSlug?: string;
    faqs?: FAQItem[];
    isHomePage?: boolean;
    guide?: {
        title: string;
        description: string;
        publishDate: string;
        slug: string;
        author: string;
    };
}

export function JsonLd({ cityName, citySlug, vehicleName, vehicleSlug, faqs, isHomePage, guide }: JsonLdProps) {
    const baseUrl = "https://grar-haifa.vercel.app";

    const person = {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": `${baseUrl}/#owner`,
        "name": OWNER_INFO.name,
        "jobTitle": OWNER_INFO.jobTitle,
        "description": OWNER_INFO.description,
        "image": `${baseUrl}${OWNER_INFO.image}`,
        "knowsAbout": ["Towing", "Vehicle Recovery", "Emergency Services", "Haifa"]
    };

    const localBusiness = {
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "AutoRepair"],
        "@id": `${baseUrl}/#business`,
        name: "גרר מפרץ אקספרס - שירותי גרירה",
        description: vehicleName && cityName
            ? `שירותי גרירה מקצועיים ל${vehicleName} ב${cityName}. הגעה מהירה תוך 30 דקות, מחירים הוגנים, 24/7.`
            : "שירותי גרירה מהירים ומקצועיים בחיפה, הקריות ואזור הצפון. 24/7.",
        telephone: "+972-54-917-4414",
        url: baseUrl,
        image: `${baseUrl}/logo.png`,
        priceRange: "$$",
        founder: { "@id": `${baseUrl}/#owner` },
        knowsAbout: ["גרירה", "חילוץ רכב", "שירותי דרך"],
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

    const schemas: any[] = [person, localBusiness];

    if (guide) {
        schemas.push({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": guide.title,
            "description": guide.description,
            "datePublished": guide.publishDate,
            "author": { "@id": `${baseUrl}/#owner` },
            "publisher": { "@id": `${baseUrl}/#business` },
            "url": `${baseUrl}/guides/${guide.slug}`,
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `${baseUrl}/guides/${guide.slug}`
            }
        });
    }

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

    if (isHomePage) {
        schemas.push({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "גרר מפרץ אקספרס",
            "url": baseUrl,
            "potentialAction": {
                "@type": "SearchAction",
                "target": `${baseUrl}/?q={search_term_string}`,
                "query-input": "required name=search_term_string"
            }
        });
    }

    if (citySlug && vehicleSlug && cityName && vehicleName) {
        schemas.push({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "עמוד הבית",
                    "item": baseUrl
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": `גרירה ב${cityName}`,
                    "item": `${baseUrl}/${citySlug}`
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": `גרר ל${vehicleName} ב${cityName}`,
                    "item": `${baseUrl}/${citySlug}/${vehicleSlug}`
                }
            ]
        });
    }

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

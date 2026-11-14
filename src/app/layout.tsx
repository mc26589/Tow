import type { Metadata } from "next";
import { Heebo, Rubik } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AgentTools } from "@/components/agent-tools";

const heebo = Heebo({
    subsets: ["hebrew", "latin"],
    variable: "--font-heebo",
    display: "swap",
});

const rubik = Rubik({
    subsets: ["hebrew", "latin"],
    variable: "--font-rubik",
    display: "swap",
    weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://grar-haifa.vercel.app'),
    title: {
        default: "גרר בחיפה והקריות 24/7 ⭐ 4.9 | הגעה ב-25 דק' • גרר מפרץ אקספרס",
        template: "%s | גרר מפרץ אקספרס",
    },
    description:
        "נתקעתם בחיפה, בקריות או בצפון? גרר אמין מגיע תוך 25–30 דק' (דירוג 4.9★ מ-127+ לקוחות). מחיר הוגן סופי בטלפון ללא הפתעות, כולל לילה, שבת ורכב חשמלי: 054-917-4414",

    openGraph: {
        type: "website",
        locale: "he_IL",
        siteName: "גרר מפרץ אקספרס",
        images: [
            {
                url: "/images/about-tow-truck-haifa.png",
                width: 1200,
                height: 630,
                alt: "גרר מפרץ אקספרס - שירותי גרירה וחילוץ בחיפה והקריות",
            },
        ],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="he" dir="rtl" className={`${heebo.variable} ${rubik.variable}`}>
            <body className="font-heebo antialiased bg-white text-slate-900">
                <Header />
                <main className="min-h-screen pb-safe-cta">{children}</main>
                <Footer />
                <WhatsAppCTA />
                <Analytics />
                <AgentTools />
            </body>
        </html>
    );
}

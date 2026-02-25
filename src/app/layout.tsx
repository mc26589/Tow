import type { Metadata } from "next";
import { Heebo, Rubik } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

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
        default: "גרר מפרץ אקספרס | שירותי גרירה מהירים בצפון - 24/7",
        template: "%s | גרר מפרץ אקספרס",
    },
    description:
        "שירותי גרירה מהירים ומקצועיים בחיפה, הקריות, עכו ויקנעם. הגעה מהירה תוך 30 דקות, מחירים הוגנים, 24 שעות ביממה 7 ימים בשבוע.",
    keywords: [
        "גרירה",
        "גרר",
        "שירותי גרירה",
        "גרירה בחיפה",
        "גרירה בצפון",
        "גרר 24/7",
        "גרירת רכב",
    ],
    openGraph: {
        type: "website",
        locale: "he_IL",
        siteName: "גרר מפרץ אקספרס",
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: '/',
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
            </body>
        </html>
    );
}

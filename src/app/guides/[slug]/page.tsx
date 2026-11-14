import { Metadata } from "next";
import { GUIDES } from "@/lib/guides";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import Link from "next/link";

interface Props {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    return GUIDES.map((guide) => ({
        slug: guide.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const guide = GUIDES.find(g => g.slug === params.slug);
    if (!guide) return {};

    // Avoid double-branding ("| גרר מפרץ אקספרס | גרר מפרץ אקספרס") and keep SERP title <= 65 chars
    const cleanTitle = guide.title.replace(/\s*[|\-–]\s*גרר מפרץ אקספרס\s*$/, "").trim();
    const withBrand = `${cleanTitle} | מפרץ אקספרס`;
    const finalTitle = withBrand.length <= 65 ? withBrand : cleanTitle;

    return {
        title: {
            absolute: finalTitle,
        },
        description: guide.description,
        alternates: {
            canonical: `/guides/${guide.slug}`,
            types: { "text/markdown": `/guides/${guide.slug}.md` },
        },
        openGraph: {
            title: finalTitle,
            description: guide.description,
            type: "article",
            publishedTime: guide.publishDate,
            locale: "he_IL",
        },
    };
}

export default function GuideArticlePage({ params }: Props) {
    const guide = GUIDES.find(g => g.slug === params.slug);
    if (!guide) notFound();

    return (
        <article className="min-h-screen bg-white">
            <JsonLd
                guide={{
                    title: guide.title,
                    description: guide.description,
                    publishDate: guide.publishDate,
                    slug: guide.slug,
                    author: guide.author
                }}
                faqs={guide.faqs}
            />

            <header className="bg-slate-50 py-16 border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-3xl">
                    <Link href="/guides" className="text-blue-600 font-bold mb-8 inline-block hover:underline">
                        חזרה לכל המדריכים
                    </Link>
                    <div className="flex items-center gap-4 mb-6">
                        <span className="bg-blue-600 text-white text-xs font-black px-3 py-1 rounded-md uppercase">
                            {guide.category}
                        </span>
                        <time className="text-slate-500 text-sm">{guide.publishDate}</time>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-rubik font-black text-slate-900 leading-tight mb-8">
                        {guide.title}
                    </h1>
                    <div className="flex items-center gap-3 pt-6 border-t border-slate-200">
                        <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">
                            AS
                        </div>
                        <div>
                            <p className="text-sm font-bold text-slate-900">{guide.author}</p>
                            <p className="text-xs text-slate-500">מומחה לחילוץ וגרירה</p>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-4 py-16 max-w-3xl">
                <div
                    className="prose prose-lg prose-slate max-w-none 
                               prose-headings:font-rubik prose-headings:font-bold prose-headings:text-slate-900
                               prose-p:text-slate-600 prose-p:leading-relaxed
                               prose-li:text-slate-600
                               prose-strong:text-slate-900 prose-strong:font-bold
                               prose-table:border-collapse prose-th:bg-slate-100 prose-th:p-3 prose-td:p-3 prose-td:border prose-th:border"
                    dangerouslySetInnerHTML={{ __html: guide.content }}
                />

                {guide.faqs && guide.faqs.length > 0 && (
                    <section className="mt-14 pt-10 border-t border-slate-200" dir="rtl">
                        <h2 className="text-2xl font-rubik font-bold text-slate-900 mb-6">
                            שאלות נפוצות
                        </h2>
                        <div className="space-y-4">
                            {guide.faqs.map((faq, idx) => (
                                <details
                                    key={idx}
                                    open={idx === 0}
                                    className="group rounded-2xl border border-slate-200 bg-slate-50 p-5"
                                >
                                    <summary className="cursor-pointer font-bold text-slate-900 list-none flex items-center justify-between gap-4">
                                        <span>{faq.question}</span>
                                        <span className="text-blue-600 text-xl font-bold group-open:hidden">+</span>
                                        <span className="text-blue-600 text-xl font-bold hidden group-open:inline">−</span>
                                    </summary>
                                    <p className="mt-3 text-slate-600 leading-relaxed">{faq.answer}</p>
                                </details>
                            ))}
                        </div>
                    </section>
                )}

                <div className="mt-16 pt-10 border-t border-slate-100 bg-slate-50 p-8 rounded-3xl text-center">
                    <h3 className="text-2xl font-bold mb-4 text-slate-900">צריכים חילוץ או גרירה עכשיו?</h3>
                    <p className="text-slate-600 mb-8">אנחנו זמינים עבורכם 24/7 באזור חיפה, הקריות, טירת כרמל והצפון — הגעה תוך 25–30 דק&apos;.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="tel:+972549174414" className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all">
                            התקשרו עכשיו: 054-917-4414
                        </a>
                        <a href="https://wa.me/972549174414" className="bg-whatsapp text-white px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-all">
                            שלחו הודעת וואטסאפ
                        </a>
                    </div>
                </div>
            </div>
        </article>
    );
}

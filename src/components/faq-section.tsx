"use client";

import { FAQItem } from "@/lib/seo-content";
import { useState } from "react";

interface FAQSectionProps {
    faqs: FAQItem[];
    city: string;
    vehicle: string;
}

export function FAQSection({ faqs, city, vehicle }: FAQSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    if (!faqs || faqs.length === 0) return null;

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-14 bg-white">
            <div className="max-w-3xl mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="font-rubik font-black text-3xl md:text-4xl text-slate-900 mb-3 tracking-tight">
                        שאלות נפוצות: גרירת {vehicle} ב{city}
                    </h2>
                    <p className="text-slate-600 font-medium text-lg max-w-2xl mx-auto">
                        ריכזנו עבורכם את התשובות לשאלות הכי נפוצות שאנחנו מקבלים מלקוחות באזור.
                    </p>
                </div>

                <div className="w-full flex flex-col gap-3" dir="rtl">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className="border-2 border-slate-100 rounded-xl overflow-hidden bg-white shadow-sm transition-all hover:border-trust-blue-200"
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full text-right px-5 py-4 font-heebo flex justify-between items-center transition-colors focus-ring"
                                    aria-expanded={isOpen}
                                >
                                    <h3 className={`font-semibold text-base m-0 ${isOpen ? 'text-trust-blue-600' : 'text-slate-800'}`}>{faq.question}</h3>
                                    <span className="text-trust-blue-600 text-lg mr-2 font-bold select-none">
                                        {isOpen ? "−" : "+"}
                                    </span>
                                </button>

                                {isOpen && (
                                    <div className="px-5 pb-5 pt-1 text-slate-600 leading-relaxed font-heebo animate-in fade-in slide-in-from-top-2 duration-300">
                                        <div className="h-px w-full bg-slate-100 mb-4"></div>
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

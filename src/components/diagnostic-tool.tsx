"use client";

import { useState } from "react";
import { Phone, CheckCircle2, AlertTriangle, ShieldAlert } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/data";
import { getPseoWhatsAppLink } from "@/lib/data-pseo";

interface Props {
    lightNameHe: string;
    cityNameHe: string;
    severity: string;
}

export function DiagnosticTool({ lightNameHe, cityNameHe, severity }: Props) {
    const [step, setStep] = useState(0);

    const whatsappMessage = `היי, עשיתי אבחון קצר באתר שלכם. נדלקה לי ${lightNameHe} ואני עומד עכשיו ב${cityNameHe}. אפשר עזרה?`;
    const whatsappLink = getPseoWhatsAppLink(whatsappMessage);

    const isRed = severity === "red";

    return (
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden text-right max-w-xl mx-auto my-8">
            <div className={`p-6 text-white ${isRed ? 'bg-red-600' : 'bg-orange-500'}`}>
                <div className="flex items-center gap-3 mb-2">
                    <ShieldAlert className="w-6 h-6" />
                    <h3 className="font-rubik font-bold text-xl m-0">אבחון סכנה: מזהה דחיפות</h3>
                </div>
                <p className="text-white/90 text-sm m-0">
                    ענו על 2 שאלות כדי לדעת אם בטוח להמשיך בנסיעה:
                </p>
            </div>

            <div className="p-6">
                {step === 0 && (
                    <div className="animate-in fade-in slide-in-from-bottom-2">
                        <p className="font-semibold text-lg text-slate-800 mb-4">
                            1. האם המנוע משמיע רעשים מוזרים או שמרגישים קפיצות?
                        </p>
                        <div className="flex gap-3">
                            <button
                                onClick={() => setStep(1)}
                                className="flex-1 bg-red-100 text-red-700 hover:bg-red-200 font-medium py-3 rounded-xl transition-colors"
                            >
                                כן, יש רעש/קפיצות
                            </button>
                            <button
                                onClick={() => setStep(1)}
                                className="flex-1 bg-slate-100 text-slate-700 hover:bg-slate-200 font-medium py-3 rounded-xl transition-colors"
                            >
                                לא, המנוע עובד רגיל
                            </button>
                        </div>
                    </div>
                )}

                {step === 1 && (
                    <div className="animate-in fade-in slide-in-from-bottom-2">
                        <p className="font-semibold text-lg text-slate-800 mb-4">
                            2. האם יש ריח של שרוף, דלק, או עשן שיוצא מאיפשהו?
                        </p>
                        <div className="flex gap-3">
                            <button
                                onClick={() => setStep(2)}
                                className="flex-1 bg-red-100 text-red-700 hover:bg-red-200 font-medium py-3 rounded-xl transition-colors"
                            >
                                כן, יש ריח
                            </button>
                            <button
                                onClick={() => setStep(2)}
                                className="flex-1 bg-slate-100 text-slate-700 hover:bg-slate-200 font-medium py-3 rounded-xl transition-colors"
                            >
                                לא
                            </button>
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className="animate-in fade-in zoom-in-95">
                        <div className={`p-4 rounded-xl border mb-6 ${isRed ? 'bg-red-50 border-red-200' : 'bg-orange-50 border-orange-200'}`}>
                            <div className="flex items-start gap-3">
                                <AlertTriangle className={`w-6 h-6 mt-1 flex-shrink-0 ${isRed ? 'text-red-600' : 'text-orange-600'}`} />
                                <div>
                                    <h4 className={`font-bold text-lg mb-1 ${isRed ? 'text-red-900' : 'text-orange-900'}`}>
                                        המלצת מכונאי: עצרו הכל.
                                    </h4>
                                    <p className="text-sm text-slate-700">
                                        המשלבת חיווי **{lightNameHe}** עם התסמינים שציינת מראה על סכנה ממשית לנזק מנוע בלתי הפיך או סיכון בטיחותי!
                                        <br />
                                        אנחנו ב{cityNameHe}, נוכל להגיע אליך מהר לפני שהמצב יחמיר.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <a
                                href={`tel:+${BUSINESS_INFO.phone}`}
                                className="flex items-center justify-center gap-2 bg-slate-900 text-white rounded-xl py-3.5 font-bold hover:bg-slate-800 transition-colors w-full"
                            >
                                <Phone className="w-5 h-5" />
                                חלצו אותי עכשיו
                            </a>
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 bg-green-50 text-green-700 border border-green-600/30 rounded-xl py-3.5 font-bold hover:bg-green-100 transition-colors w-full"
                            >
                                העבר ציון מיקום בוואטסאפ
                            </a>
                            <button
                                onClick={() => setStep(0)}
                                className="text-sm text-slate-400 mt-2 hover:text-slate-600"
                            >
                                התחל אבחון מחדש
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

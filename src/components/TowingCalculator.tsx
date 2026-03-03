"use client";

import React, { useState } from "react";
import { Loader2, Calculator, MapPin, Truck } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

export default function TowingCalculator() {
    const [fromLocation, setFromLocation] = useState("");
    const [toLocation, setToLocation] = useState("");
    const [vehicleType, setVehicleType] = useState("");
    const [frontWheels, setFrontWheels] = useState("true");
    const [rearWheels, setRearWheels] = useState("true");
    const [locationType, setLocationType] = useState("");
    const [access, setAccess] = useState("true");

    const [isLoading, setIsLoading] = useState(false);
    const [estimatedPrice, setEstimatedPrice] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const vehicleTypeLabels: Record<string, string> = {
        private: "רכב פרטי",
        commercial: "רכב מסחרי / טנדר",
        motorcycle: "אופנוע / קטנוע",
        suv: "רכב שטח (4x4) / SUV",
    };

    const handleCalculate = async () => {
        setIsLoading(true);
        setError(null);
        setEstimatedPrice(null);

        try {
            const response = await fetch("/api/calculator", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    fromLocation,
                    toLocation,
                    vehicleType,
                    frontWheels: frontWheels === "true",
                    rearWheels: rearWheels === "true",
                    locationType,
                    access: access === "true",
                }),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || "שגיאה בחישוב ההערכה");
            }

            const data = await response.json();
            setEstimatedPrice(data.estimatedPrice);
        } catch (err: any) {
            setError(err.message || "אירעה שגיאה. נסו שוב.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleWhatsAppOrder = () => {
        const vehicleLabel = vehicleTypeLabels[vehicleType] || vehicleType;
        const message =
            `שלום, אשמח להזמין שירות גרר 🚛\n` +
            `מאיפה: ${fromLocation}\n` +
            `לאן: ${toLocation}\n` +
            `סוג רכב: ${vehicleLabel}\n` +
            `הערכת מחיר מהמחשבון: ${estimatedPrice}\n\n` +
            `https://grar-haifa.vercel.app/`;

        const whatsappUrl = `https://wa.me/972533391788?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
    };

    const isFormValid = fromLocation && toLocation && vehicleType && locationType;

    return (
        <Card className="w-full max-w-2xl mx-auto shadow-xl border-t-4 border-t-trust-blue-500 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
            <CardHeader className="text-center pb-4 px-4 sm:px-6">
                <div className="mx-auto bg-trust-blue-100 p-3 rounded-full mb-3 w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center text-trust-blue-600">
                    <Calculator className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <CardTitle className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                    מחשבון הצעת מחיר לגרירה
                </CardTitle>
                <CardDescription className="text-sm sm:text-base text-slate-600 mt-1.5">
                    מלאו את הפרטים לקבלת הערכת מחיר מיידית באמצעות בינה מלאכותית (AI)
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-5 px-4 sm:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                    {/* ===== Location Column ===== */}
                    <div className="space-y-3.5">
                        <div className="flex items-center gap-2">
                            <MapPin className="text-trust-blue-500 flex-shrink-0" size={18} />
                            <h3 className="font-semibold text-slate-800 text-sm sm:text-base">פרטי מיקום</h3>
                        </div>

                        <div className="space-y-1.5">
                            <Label htmlFor="from" className="text-xs sm:text-sm">מאיפה (עיר/כתובת)</Label>
                            <Input
                                id="from"
                                placeholder="לדוגמה: חיפה"
                                value={fromLocation}
                                onChange={(e) => setFromLocation(e.target.value)}
                                className="bg-slate-50 border-slate-200 focus:border-trust-blue-500 focus:ring-trust-blue-500 text-base h-11"
                            />
                        </div>

                        <div className="space-y-1.5">
                            <Label htmlFor="to" className="text-xs sm:text-sm">לאן (עיר/כתובת)</Label>
                            <Input
                                id="to"
                                placeholder="לדוגמה: תל אביב"
                                value={toLocation}
                                onChange={(e) => setToLocation(e.target.value)}
                                className="bg-slate-50 border-slate-200 focus:border-trust-blue-500 focus:ring-trust-blue-500 text-base h-11"
                            />
                        </div>

                        <div className="space-y-1.5">
                            <Label className="text-xs sm:text-sm">סוג המקום (מוצא)</Label>
                            <Select onValueChange={setLocationType} value={locationType}>
                                <SelectTrigger className="bg-slate-50 border-slate-200 h-11 text-base">
                                    <SelectValue placeholder="בחר סוג מקום" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="open">שטח פתוח / רחוב</SelectItem>
                                    <SelectItem value="underground">חניון מקורה / תת-קרקעי</SelectItem>
                                    <SelectItem value="highway">כביש מהיר</SelectItem>
                                    <SelectItem value="offroad">שטח חולי / בוץ (חילוץ)</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-1.5">
                            <Label className="text-xs sm:text-sm">גישה למשאית גרר</Label>
                            <Select onValueChange={setAccess} value={access}>
                                <SelectTrigger className="bg-slate-50 border-slate-200 h-11 text-base">
                                    <SelectValue placeholder="האם יש גישה נוחה?" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="true">יש גישה נוחה לגרר</SelectItem>
                                    <SelectItem value="false">גישה חסומה / בעייתית</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* ===== Vehicle Column ===== */}
                    <div className="space-y-3.5">
                        <div className="flex items-center gap-2">
                            <Truck className="text-trust-blue-500 flex-shrink-0" size={18} />
                            <h3 className="font-semibold text-slate-800 text-sm sm:text-base">פרטי הרכב</h3>
                        </div>

                        <div className="space-y-1.5">
                            <Label className="text-xs sm:text-sm">סוג רכב</Label>
                            <Select onValueChange={setVehicleType} value={vehicleType}>
                                <SelectTrigger className="bg-slate-50 border-slate-200 h-11 text-base">
                                    <SelectValue placeholder="בחר סוג רכב" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="private">רכב פרטי</SelectItem>
                                    <SelectItem value="commercial">רכב מסחרי / טנדר</SelectItem>
                                    <SelectItem value="motorcycle">אופנוע / קטנוע</SelectItem>
                                    <SelectItem value="suv">רכב שטח (4x4) / SUV</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-1.5">
                            <Label className="text-xs sm:text-sm">גלגלים קדמיים מסתובבים חופשי?</Label>
                            <Select onValueChange={setFrontWheels} value={frontWheels}>
                                <SelectTrigger className="bg-slate-50 border-slate-200 h-11 text-base">
                                    <SelectValue placeholder="בחר מצב גלגלים" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="true">כן - מסתובבים</SelectItem>
                                    <SelectItem value="false">לא - נעולים / חסרים</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-1.5">
                            <Label className="text-xs sm:text-sm">גלגלים אחוריים מסתובבים חופשי?</Label>
                            <Select onValueChange={setRearWheels} value={rearWheels}>
                                <SelectTrigger className="bg-slate-50 border-slate-200 h-11 text-base">
                                    <SelectValue placeholder="בחר מצב גלגלים" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="true">כן - מסתובבים</SelectItem>
                                    <SelectItem value="false">לא - נעולים / חסרים</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>

                {/* ===== Error ===== */}
                {error && (
                    <div className="p-3 rounded-lg bg-red-50 text-red-600 text-sm border border-red-200">
                        {error}
                    </div>
                )}

                {/* ===== Estimated Price Result ===== */}
                {estimatedPrice && (
                    <div className="p-5 sm:p-6 rounded-xl bg-gradient-to-br from-trust-blue-50 via-trust-blue-100 to-blue-50 border border-trust-blue-200 text-center animate-in fade-in zoom-in duration-300">
                        <h4 className="text-base sm:text-lg font-medium text-slate-700 mb-2">הערכת מחיר משוערת:</h4>
                        <div className="text-3xl sm:text-4xl font-extrabold text-trust-blue-700 mb-1">
                            {estimatedPrice}
                        </div>
                        <p className="text-[11px] sm:text-xs text-slate-500 mt-2">
                            * מבוסס על הערכת AI (Google Gemini). המחיר הסופי ייקבע מול מוקד השירות.
                        </p>
                    </div>
                )}
            </CardContent>

            <CardFooter className="flex flex-col gap-3 px-4 sm:px-6 pb-5 sm:pb-6">
                {/* ===== Calculate Button ===== */}
                <Button
                    className="w-full text-base sm:text-lg h-12 sm:h-14 bg-trust-blue-600 hover:bg-trust-blue-700 text-white font-bold transition-all shadow-md hover:shadow-lg"
                    onClick={handleCalculate}
                    disabled={!isFormValid || isLoading}
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="ml-2 h-5 w-5 animate-spin" />
                            מחשב...
                        </>
                    ) : (
                        "🧮 קבל הצעת מחיר"
                    )}
                </Button>

                {/* ===== WhatsApp CTA — Big & Prominent ===== */}
                {estimatedPrice && (
                    <Button
                        className="w-full text-base sm:text-lg h-14 sm:h-16 bg-[#25D366] hover:bg-[#1da851] text-white font-extrabold
                                   transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5
                                   flex items-center justify-center gap-3 rounded-xl
                                   animate-in fade-in slide-in-from-bottom-4 duration-500"
                        onClick={handleWhatsAppOrder}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        הזמן עכשיו בוואטסאפ 📲
                    </Button>
                )}
            </CardFooter>
        </Card>
    );
}

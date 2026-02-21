// ============================================
// Type definitions matching Supabase schema
// ============================================

export interface City {
    id: string;
    slug: string;
    name_he: string;
}

export interface Vehicle {
    id: string;
    slug: string;
    name_he: string;
    category: "general" | "brand";
}

export interface Review {
    id: string;
    author: string;
    rating: number;
    body: string;
    city_id: string | null;
    created_at: string;
}

export interface Lead {
    id: string;
    phone: string;
    location: string | null;
    vehicle_details: string | null;
    status: string;
    created_at: string;
}

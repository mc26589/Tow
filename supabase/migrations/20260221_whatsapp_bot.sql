-- Migration: Create WhatsApp Bot Tables (sessions, jobs)

-- 1. Create sessions table for the State Machine
CREATE TABLE IF NOT EXISTS public.sessions (
    phone_number TEXT PRIMARY KEY,
    step TEXT NOT NULL,
    data JSONB DEFAULT '{}'::jsonb,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now())
);

-- Enable RLS for sessions but allow service role unrestricted access
ALTER TABLE public.sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable all access for service role on sessions" ON public.sessions
    FOR ALL
    USING (true)
    WITH CHECK (true);

-- 2. Create jobs table for the Driver Dispatch System
CREATE TABLE IF NOT EXISTS public.jobs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    customer_phone TEXT NOT NULL,
    details JSONB DEFAULT '{}'::jsonb,
    status TEXT NOT NULL DEFAULT 'open', -- 'open' or 'taken'
    taken_by_driver TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now())
);

-- Enable RLS for jobs but allow service role unrestricted access
ALTER TABLE public.jobs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable all access for service role on jobs" ON public.jobs
    FOR ALL
    USING (true)
    WITH CHECK (true);

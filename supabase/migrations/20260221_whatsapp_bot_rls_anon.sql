-- Fix: Enable anon key access for the WhatsApp Webhook

-- 1. Allow the anon key to read, insert, update, delete sessions
CREATE POLICY "Enable all access for anon on sessions" 
    ON public.sessions
    FOR ALL
    TO anon
    USING (true)
    WITH CHECK (true);

-- 2. Allow the anon key to read, insert, update jobs
CREATE POLICY "Enable all access for anon on jobs" 
    ON public.jobs
    FOR ALL
    TO anon
    USING (true)
    WITH CHECK (true);

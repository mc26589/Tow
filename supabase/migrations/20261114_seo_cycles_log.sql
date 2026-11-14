-- Autonomous 4-day Technical SEO & Content Optimization Log
CREATE TABLE IF NOT EXISTS public.seo_cycles_log (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    cycle_started_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    cycle_completed_at TIMESTAMPTZ,
    status TEXT NOT NULL CHECK (status IN ('running', 'success', 'failed', 'skipped')),
    gsc_window_recent JSONB NOT NULL DEFAULT '{}'::jsonb,
    gsc_window_baseline JSONB NOT NULL DEFAULT '{}'::jsonb,
    insights_summary JSONB NOT NULL DEFAULT '{}'::jsonb,
    optimized_urls TEXT[] NOT NULL DEFAULT '{}',
    created_urls TEXT[] NOT NULL DEFAULT '{}',
    added_redirects JSONB NOT NULL DEFAULT '[]'::jsonb,
    skipped_cooldown_urls TEXT[] NOT NULL DEFAULT '{}',
    build_passed BOOLEAN NOT NULL DEFAULT false,
    error_message TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_seo_cycles_log_started_at
    ON public.seo_cycles_log (cycle_started_at DESC);

CREATE INDEX IF NOT EXISTS idx_seo_cycles_log_optimized_urls
    ON public.seo_cycles_log USING GIN (optimized_urls);

ALTER TABLE public.seo_cycles_log ENABLE ROW LEVEL SECURITY;

DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies
        WHERE schemaname = 'public'
          AND tablename = 'seo_cycles_log'
          AND policyname = 'Enable all access for anon and service_role on seo_cycles_log'
    ) THEN
        CREATE POLICY "Enable all access for anon and service_role on seo_cycles_log"
            ON public.seo_cycles_log
            FOR ALL
            TO anon, service_role
            USING (true)
            WITH CHECK (true);
    END IF;
END
$$;


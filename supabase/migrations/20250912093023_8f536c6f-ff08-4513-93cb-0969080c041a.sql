-- Create rate limiting table for security
CREATE TABLE IF NOT EXISTS public.security_rate_limits (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  rate_key text NOT NULL,
  bucket text NOT NULL,
  count integer NOT NULL DEFAULT 1,
  window_start timestamptz NOT NULL DEFAULT now(),
  window_end timestamptz NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create unique index for efficient lookups and upserts
CREATE UNIQUE INDEX IF NOT EXISTS idx_rate_limits_key_bucket 
ON public.security_rate_limits(rate_key, bucket);

-- Enable RLS on rate limits table
ALTER TABLE public.security_rate_limits ENABLE ROW LEVEL SECURITY;

-- Only service role can access rate limits (used by edge functions)
CREATE POLICY "Service role only access" ON public.security_rate_limits
FOR ALL USING (false);

-- Revoke anon access to waitlist function to force use of Edge Function
REVOKE EXECUTE ON FUNCTION public.add_to_waitlist(text) FROM anon;
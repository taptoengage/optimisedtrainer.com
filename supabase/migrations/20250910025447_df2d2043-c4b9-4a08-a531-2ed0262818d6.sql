-- Tighten RLS for waitlist_signups: admin-only read, no public writes
BEGIN;

-- Ensure RLS is enabled
ALTER TABLE public.waitlist_signups ENABLE ROW LEVEL SECURITY;

-- Remove overly permissive policies
DROP POLICY IF EXISTS "Service role can manage waitlist signups" ON public.waitlist_signups;
DROP POLICY IF EXISTS "Admins can read waitlist signups" ON public.waitlist_signups;

-- Create admin-only SELECT policy
CREATE POLICY "Admins can read waitlist signups"
ON public.waitlist_signups
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

-- Note: Service role bypasses RLS; inserts should occur via SECURITY DEFINER function public.add_to_waitlist

COMMIT;
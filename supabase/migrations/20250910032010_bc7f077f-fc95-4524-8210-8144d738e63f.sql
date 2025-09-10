-- Secure client personal data via strict RLS and assignment-based access
BEGIN;

-- 1) Ensure RLS is enabled on clients
ALTER TABLE public.clients ENABLE ROW LEVEL SECURITY;

-- 2) Drop overlapping/unsafe existing policies on clients
DROP POLICY IF EXISTS "Authenticated clients can select their own data" ON public.clients;
DROP POLICY IF EXISTS "Authenticated trainers can manage their own clients" ON public.clients;
DROP POLICY IF EXISTS "Block unauthenticated access" ON public.clients;
DROP POLICY IF EXISTS "Clients can view their own profile" ON public.clients;

-- 3) Create the trainer_client_assignments table if it doesn't exist yet
CREATE TABLE IF NOT EXISTS public.trainer_client_assignments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  trainer_id uuid NOT NULL REFERENCES public.trainers(id) ON DELETE CASCADE,
  client_id uuid NOT NULL REFERENCES public.clients(id) ON DELETE CASCADE,
  assigned_by uuid NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (trainer_id, client_id)
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_tca_trainer ON public.trainer_client_assignments (trainer_id);
CREATE INDEX IF NOT EXISTS idx_tca_client ON public.trainer_client_assignments (client_id);

-- 4) Enable RLS and add strict policies for trainer_client_assignments
ALTER TABLE public.trainer_client_assignments ENABLE ROW LEVEL SECURITY;

-- Clean up any existing policies (if re-running)
DROP POLICY IF EXISTS "Trainers can view their own assignments" ON public.trainer_client_assignments;
DROP POLICY IF EXISTS "Admins manage trainer-client assignments" ON public.trainer_client_assignments;

-- Trainers can only read their own assignments
CREATE POLICY "Trainers can view their own assignments"
ON public.trainer_client_assignments
FOR SELECT
TO authenticated
USING (trainer_id = auth.uid());

-- Admins can manage assignments
CREATE POLICY "Admins manage trainer-client assignments"
ON public.trainer_client_assignments
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));

-- 5) Re-create strict, non-overlapping read policies on clients

-- Client self-access (read-only)
CREATE POLICY "Clients can view their own data"
ON public.clients
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- Trainer can view assigned clients only (read-only)
CREATE POLICY "Trainers can view assigned clients"
ON public.clients
FOR SELECT
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.trainer_client_assignments tca
    WHERE tca.trainer_id = auth.uid()
      AND tca.client_id = clients.id
  )
);

-- Admins can read all clients
CREATE POLICY "Admins can view all clients"
ON public.clients
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

COMMIT;
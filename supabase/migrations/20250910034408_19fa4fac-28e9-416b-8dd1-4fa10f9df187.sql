-- Replace the existing add_to_waitlist function with one that matches our trainer form
CREATE OR REPLACE FUNCTION public.add_to_waitlist(
  p_email text, 
  p_source text DEFAULT 'signup_page',
  p_metadata jsonb DEFAULT NULL
)
RETURNS TABLE(id uuid, email text, created_at timestamp with time zone, duplicate boolean)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $$
DECLARE
  v_id uuid;
  v_email text;
  v_created timestamptz;
  v_duplicate boolean := false;
  v_normalized_email text := lower(trim(p_email));
BEGIN
  -- Validate email format
  IF p_email IS NULL OR length(trim(p_email)) = 0 THEN
    RAISE EXCEPTION 'Valid email address is required';
  END IF;

  -- Insert with the correct table structure using metadata for trainer data
  INSERT INTO public.waitlist_signups (
    email,
    normalized_email,
    source,
    metadata,
    status
  ) VALUES (
    trim(p_email),
    v_normalized_email,
    p_source,
    p_metadata,
    'pending'
  )
  ON CONFLICT (email) DO NOTHING
  RETURNING waitlist_signups.id, waitlist_signups.email, waitlist_signups.created_at
  INTO v_id, v_email, v_created;

  IF v_id IS NULL THEN
    -- Duplicate email
    v_duplicate := true;
    SELECT w.id, w.email, w.created_at
    INTO v_id, v_email, v_created
    FROM public.waitlist_signups w
    WHERE w.normalized_email = v_normalized_email;
  END IF;

  RETURN QUERY SELECT v_id, v_email, v_created, v_duplicate;
END;
$$;
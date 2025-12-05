-- PlaySync Waitlist Database Migration
-- Run this SQL in your Supabase SQL Editor
-- Location: Supabase Dashboard > SQL Editor > New Query

-- ============================================
-- CREATE WAITLIST TABLE
-- ============================================

CREATE TABLE IF NOT EXISTS waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  name text,
  created_at timestamptz DEFAULT now(),
  metadata jsonb
);

-- ============================================
-- ENABLE ROW LEVEL SECURITY
-- ============================================

ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- ============================================
-- CREATE RLS POLICIES
-- ============================================

-- Allow anonymous users to sign up
CREATE POLICY "Anyone can sign up for waitlist"
  ON waitlist
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to sign up
CREATE POLICY "Authenticated users can sign up for waitlist"
  ON waitlist
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- ============================================
-- CREATE INDEXES FOR PERFORMANCE
-- ============================================

CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist(created_at DESC);

-- ============================================
-- VERIFY SETUP (Run these to test)
-- ============================================

-- Check if table exists
SELECT EXISTS (
  SELECT FROM information_schema.tables
  WHERE table_schema = 'public'
  AND table_name = 'waitlist'
);

-- Check RLS is enabled
SELECT tablename, rowsecurity
FROM pg_tables
WHERE tablename = 'waitlist';

-- View all policies
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual
FROM pg_policies
WHERE tablename = 'waitlist';

-- ============================================
-- USEFUL QUERIES
-- ============================================

-- View all waitlist entries
SELECT * FROM waitlist ORDER BY created_at DESC;

-- Count total signups
SELECT COUNT(*) as total_signups FROM waitlist;

-- View recent signups (last 7 days)
SELECT
  email,
  name,
  created_at,
  metadata->>'userAgent' as browser
FROM waitlist
WHERE created_at > NOW() - INTERVAL '7 days'
ORDER BY created_at DESC;

-- Check for duplicates (should return 0)
SELECT email, COUNT(*) as count
FROM waitlist
GROUP BY email
HAVING COUNT(*) > 1;

# PlaySync Landing Page - Setup Guide

Welcome to the PlaySync landing page! This guide will help you get up and running quickly.

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Supabase credentials

# 3. Run the development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your landing page!

## Detailed Setup

### Step 1: Install Dependencies

First, install all required packages:

```bash
npm install
# or use pnpm or yarn
pnpm install
yarn install
```

### Step 2: Set Up Supabase

#### 2.1 Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign up/log in
2. Click "New Project"
3. Fill in your project details
4. Wait for the project to be provisioned (takes about 2 minutes)

#### 2.2 Get Your API Keys

1. In your Supabase dashboard, go to **Settings** > **API**
2. Copy your **Project URL** (looks like `https://xxxxx.supabase.co`)
3. Copy your **anon/public key** (starts with `eyJ...`)

#### 2.3 Configure Environment Variables

Create a `.env.local` file in the project root:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

#### 2.4 Run the Database Migration

Go to your Supabase dashboard:

1. Click on **SQL Editor** in the left sidebar
2. Create a new query
3. Copy and paste the migration SQL below
4. Click **Run** or press `Cmd/Ctrl + Enter`

```sql
-- Create waitlist table
CREATE TABLE IF NOT EXISTS waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  name text,
  created_at timestamptz DEFAULT now(),
  metadata jsonb
);

-- Enable Row Level Security
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone to insert into waitlist
CREATE POLICY "Anyone can sign up for waitlist"
  ON waitlist
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy: Allow authenticated users to insert
CREATE POLICY "Authenticated users can sign up for waitlist"
  ON waitlist
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist(created_at DESC);
```

### Step 3: Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Step 4: Test the Waitlist Form

1. Scroll to the bottom of the page
2. Enter an email address in the waitlist form
3. Click "Join Waitlist"
4. You should see a success message

To verify it worked:
1. Go to your Supabase dashboard
2. Click **Table Editor** > **waitlist**
3. You should see your test entry!

## Production Deployment

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Add your environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Click **Deploy**

Your site will be live in minutes!

### Environment Variables in Production

Make sure to add these in your hosting platform's environment variables section:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Customization Guide

### Update Branding

#### Logo
Replace the `Music2` icon in:
- `components/Header.tsx` (lines 25-30)
- `components/Footer.tsx` (lines 22-27)

Or use your own logo image:
```tsx
<Image src="/logo.png" alt="PlaySync" width={40} height={40} />
```

#### Colors
The Spotify-green theme is defined throughout. To change:
- Search for `#1DB954` and `#1ed760` in all component files
- Or update `tailwind.config.ts` to add your brand colors

#### Copy/Text
All text is in the component files. Key files to update:
- `components/Hero.tsx` - Main headline and subheading
- `components/Features.tsx` - Feature descriptions
- `components/Footer.tsx` - Footer text and links

### Add Your OG Image

1. Create an image (1200x630px recommended)
2. Save it as `public/og-image.png`
3. The image will automatically be used for social sharing

### Update Social Links

In `components/Footer.tsx`, update these URLs:
```tsx
href="https://twitter.com/yourhandle"
href="https://github.com/yourorg"
href="mailto:your@email.com"
```

## Viewing Waitlist Entries

### In Supabase Dashboard

1. Go to **Table Editor** > **waitlist**
2. View all entries sorted by signup date

### Using SQL

Run this query in SQL Editor:

```sql
SELECT
  email,
  name,
  created_at,
  metadata->>'userAgent' as browser,
  metadata->>'referer' as source
FROM waitlist
ORDER BY created_at DESC;
```

### Export to CSV

1. Go to Table Editor > waitlist
2. Click the **Download** button at the top
3. Choose CSV format

## Troubleshooting

### Supabase Connection Error

**Error**: `Failed to run sql query: connect ECONNREFUSED`

**Solution**:
- Check your Supabase project is active
- Verify your environment variables are correct
- Make sure `.env.local` exists and has the right values

### Build Warnings

**Warning**: `metadata.metadataBase is not set`

**Solution**: This is just a warning for local development. In production, add this to `app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  metadataBase: new URL('https://playsync.in'),
  // ... rest of metadata
};
```

### Waitlist Form Not Working

1. Check browser console for errors
2. Verify your API route is accessible: `http://localhost:3000/api/waitlist`
3. Check Supabase connection in Network tab
4. Verify RLS policies are set up correctly

## Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
npm run typecheck  # Check TypeScript types
```

## File Structure Explained

```
├── app/
│   ├── api/waitlist/route.ts    # API endpoint for form submissions
│   ├── layout.tsx               # Root layout (meta tags, fonts)
│   ├── page.tsx                 # Landing page (imports all components)
│   ├── globals.css              # Global styles + animations
│   ├── privacy/page.tsx         # Privacy policy page
│   ├── terms/page.tsx           # Terms of service page
│   └── contact/page.tsx         # Contact page
│
├── components/
│   ├── Header.tsx               # Sticky navigation header
│   ├── Hero.tsx                 # Hero section with device mockup
│   ├── Features.tsx             # 4-card feature grid
│   ├── HowItWorks.tsx          # 3-step process section
│   ├── SocialProof.tsx         # Testimonials & stats
│   ├── CTABlock.tsx            # Mid-page CTA block
│   ├── WaitlistForm.tsx        # Form with validation
│   └── Footer.tsx              # Footer with waitlist
│
├── lib/
│   └── supabase.ts             # Supabase client setup
│
└── public/
    └── og-image.png            # Social sharing image (add yours!)
```

## Need Help?

- **Issues**: [GitHub Issues](https://github.com/yourusername/playsync-landing/issues)
- **Email**: hello@playsync.in
- **Documentation**: Check README.md for more details

---

**Happy building!** 🚀

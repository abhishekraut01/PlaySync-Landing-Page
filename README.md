# PlaySync Landing Page

A modern, production-ready landing page for PlaySync - real-time playlist syncing so friends can listen together.

## Features

- **Modern Design**: Spotify-inspired color scheme with smooth animations
- **Fully Responsive**: Works perfectly on mobile, tablet, and desktop
- **SEO Optimized**: Complete meta tags and Open Graph configuration
- **Accessible**: WCAG compliant with proper ARIA attributes
- **Waitlist Integration**: Full-featured waitlist form with Supabase backend
- **Production Ready**: Built with Next.js 13 App Router, TypeScript, and Tailwind CSS

## Tech Stack

- **Framework**: Next.js 13 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Icons**: Lucide React
- **Font**: Inter

## Getting Started

### 1. Install Dependencies

```bash
npm install
# or
pnpm install
# or
yarn install
```

### 2. Set Up Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Copy your project URL and anon key from Settings > API
3. Create a `.env.local` file (copy from `.env.example`):

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Run Database Migration

Run the SQL migration in your Supabase SQL editor (or use the Supabase CLI):

```sql
-- See supabase/migrations/create_waitlist_table.sql
-- This creates the waitlist table with proper RLS policies
```

The migration file is located at the bottom of this README for easy access.

### 4. Start Development Server

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to see the landing page.

### 5. Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
playsync-landing/
├── app/
│   ├── api/
│   │   └── waitlist/
│   │       └── route.ts          # Waitlist API endpoint
│   ├── layout.tsx                 # Root layout with SEO meta
│   ├── page.tsx                   # Main landing page
│   └── globals.css                # Global styles and animations
├── components/
│   ├── Header.tsx                 # Sticky header with navigation
│   ├── Hero.tsx                   # Hero section with CTA
│   ├── Features.tsx               # Key features grid
│   ├── HowItWorks.tsx            # 3-step process flow
│   ├── SocialProof.tsx           # Testimonials and stats
│   ├── CTABlock.tsx              # Mid-page conversion block
│   ├── WaitlistForm.tsx          # Form with validation
│   └── Footer.tsx                 # Footer with waitlist
├── lib/
│   └── supabase.ts               # Supabase client
└── public/
    └── og-image.png              # Replace with your OG image
```

## Customization

### Replace Images

- Add your OG image to `public/og-image.png` (1200x630px recommended)
- Add favicon to `public/favicon.ico`

### Update Branding

- Logo: Edit the `Music2` icon in `Header.tsx` and `Footer.tsx`
- Colors: Modify Tailwind config or use existing Spotify-green (`#1DB954`)
- Copy: Update text in each component file

### Connect Real Backend

The waitlist API (`app/api/waitlist/route.ts`) is fully functional with Supabase. To view submissions:

```sql
SELECT * FROM waitlist ORDER BY created_at DESC;
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL | Yes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anonymous key | Yes |

## Database Schema

The waitlist table stores:
- `id` - Unique identifier (UUID)
- `email` - User email (unique)
- `name` - Optional user name
- `created_at` - Timestamp
- `metadata` - User agent, referrer, IP (JSONB)

Row Level Security (RLS) is enabled to allow public signups while protecting data.

## API Endpoints

### POST /api/waitlist

Submit a waitlist entry.

**Request:**
```json
{
  "email": "user@example.com",
  "name": "John Doe" // optional
}
```

**Response (Success):**
```json
{
  "ok": true,
  "message": "Successfully added to waitlist",
  "data": { ... }
}
```

**Response (Error):**
```json
{
  "ok": false,
  "error": "This email is already on the waitlist"
}
```

## Accessibility

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Screen reader friendly

## Performance

- Server components by default
- Optimized fonts with Next.js
- Minimal client-side JavaScript
- Lazy loading for animations
- Optimized Tailwind CSS

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this for your own projects!

## Support

For questions or issues, contact: hello@playsync.in

---

## Database Migration SQL

Copy this into your Supabase SQL editor to create the waitlist table:

\`\`\`sql
/*
  # PlaySync Waitlist Table

  1. New Tables
    - \`waitlist\`
      - \`id\` (uuid, primary key) - Unique identifier for each waitlist entry
      - \`email\` (text, unique, not null) - User's email address
      - \`name\` (text, nullable) - User's name (optional)
      - \`created_at\` (timestamptz) - Timestamp of when the entry was created
      - \`metadata\` (jsonb, nullable) - Additional metadata (referrer, user agent, etc.)

  2. Security
    - Enable RLS on \`waitlist\` table
    - Add policy for anonymous users to insert their own waitlist entries
    - Add policy for service role to read all waitlist entries (for admin access)

  3. Important Notes
    - Email is unique to prevent duplicate signups
    - Created_at defaults to current timestamp
    - RLS ensures users can only insert, not read other entries
*/

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

-- Policy: Allow anyone to insert into waitlist (for public signup)
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

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist(created_at DESC);
\`\`\`

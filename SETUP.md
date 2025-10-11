# BSW Basketball Astro Setup Instructions

## Installation Steps

To complete the setup and run the project, follow these steps:

### 1. Install Tailwind CSS Integration

Run the following command to add Tailwind CSS to your Astro project:

```bash
npx astro add tailwind
```

When prompted, accept the defaults. This will:
- Install `tailwindcss` and `@astrojs/tailwind`
- Update `astro.config.mjs` with the Tailwind integration
- Create or update the Tailwind configuration

### 2. Install Dependencies

Make sure all dependencies are installed:

```bash
npm install
# or
pnpm install
```

### 3. Run the Development Server

Start the dev server:

```bash
npm run dev
# or
pnpm dev
```

Your site should now be running at `http://localhost:4321`

## What Was Converted

✅ **All UI Components** - Button, Card, Badge, Input, Textarea  
✅ **Custom Icon System** - SVG-based icons matching Lucide design  
✅ **Layout System** - Updated with proper meta tags and Tailwind CSS  
✅ **Main Page** - Complete BSW Basketball website with all sections:
- Header with navigation
- Hero section
- About section
- Programs overview
- Why choose us
- Latest news
- Gallery preview
- Testimonials
- Contact form
- Footer

✅ **Tailwind Configuration** - Matching your design guide with:
- Neutral color palette
- Lime accent colors (#d4ff00, #bfe600)
- Custom font weights and letter spacing
- Container configuration

## Features

- **Fully static** - No JavaScript required for initial render
- **Responsive design** - Mobile-first approach
- **Tailwind CSS** - Utility-first styling
- **Component-based** - Reusable Astro components
- **SEO-ready** - Proper meta tags and semantic HTML

## Notes

- Images use placeholder SVGs - replace with actual basketball images
- Forms are HTML-only - add form handling as needed
- Icons are SVG-based - no external dependencies required
- All animations use CSS transitions for smooth performance

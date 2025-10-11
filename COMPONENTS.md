# Component Documentation

## UI Components

All components are located in `src/components/ui/`

### Button (`Button.astro`)

**Props:**
- `variant?: 'default' | 'outline' | 'ghost' | 'secondary'` - Button style variant
- `size?: 'sm' | 'default' | 'lg' | 'icon'` - Button size
- `class?: string` - Additional CSS classes
- `href?: string` - If provided, renders as anchor tag

**Usage:**
```astro
<Button>Click me</Button>
<Button variant="outline" size="lg">Large Outline</Button>
<Button href="#contact">Link Button</Button>
```

### Card (`Card.astro`)

Basic card container with rounded corners and overflow hidden.

**Props:**
- `class?: string` - Additional CSS classes

**Usage:**
```astro
<Card>
  <CardHeader>Header content</CardHeader>
  <CardContent>Main content</CardContent>
</Card>
```

### CardHeader (`CardHeader.astro`)

Card header section with no padding by default.

**Props:**
- `class?: string` - Additional CSS classes

### CardContent (`CardContent.astro`)

Card content section with padding.

**Props:**
- `class?: string` - Additional CSS classes

### Badge (`Badge.astro`)

Inline label or tag component.

**Props:**
- `class?: string` - Additional CSS classes (use for colors)

**Usage:**
```astro
<Badge class="bg-lime-400 text-neutral-900">Beginner Friendly</Badge>
<Badge class="bg-blue-500 text-white">Intermediate</Badge>
```

### Input (`Input.astro`)

Text input field with focus states.

**Props:**
- `type?: string` - Input type (default: 'text')
- `placeholder?: string` - Placeholder text
- `class?: string` - Additional CSS classes
- `name?: string` - Form field name

**Usage:**
```astro
<Input type="email" placeholder="your.email@example.com" />
```

### Textarea (`Textarea.astro`)

Multi-line text input with focus states.

**Props:**
- `placeholder?: string` - Placeholder text
- `class?: string` - Additional CSS classes
- `rows?: number` - Number of visible rows (default: 4)
- `name?: string` - Form field name

**Usage:**
```astro
<Textarea placeholder="Your message..." rows={6} />
```

## Icon Component

Located in `src/components/icons/LucideIcon.astro`

### Icon (`LucideIcon.astro`)

SVG-based icon component with support for common icons.

**Props:**
- `name: string` - Icon name (see available icons below)
- `class?: string` - Additional CSS classes
- `size?: number` - Icon size in pixels (default: 24)

**Available Icons:**
- `phone`
- `map-pin`
- `mail`
- `calendar`
- `users`
- `trophy`
- `target`
- `star`
- `clock`
- `award`
- `shield`
- `zap`
- `heart`
- `facebook`
- `twitter`
- `instagram`
- `youtube`
- `menu`
- `plus`
- `arrow-right`

**Usage:**
```astro
<Icon name="phone" class="h-5 w-5" />
<Icon name="trophy" class="h-8 w-8 text-lime-400" size={32} />
```

## Layout Component

Located in `src/layouts/Layout.astro`

### Layout

Main page layout with HTML boilerplate, meta tags, and global styles.

**Props:**
- `title?: string` - Page title (default: 'BSW Basketball - Developing Champions On and Off the Court')
- `description?: string` - Meta description

**Usage:**
```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout title="About Us" description="Learn more about BSW Basketball">
  <!-- Your page content -->
</Layout>
```

## Design Tokens

### Colors

From `tailwind.config.mjs`:

**Neutral Palette:**
- `neutral-50`: #f5f5f5 (Light background)
- `neutral-900`: #1a1a1a (Dark text)
- Full range: 100-800 for intermediate shades

**Lime Accent:**
- `lime-400`: #d4ff00 (Primary accent)
- `lime-500`: #bfe600 (Hover state)

### Typography

**Font Weights:**
- `font-black`: 900 (Used for headings and emphasis)
- `font-bold`: 700 (Used for subheadings)
- `font-medium`: 500 (Used for body text)

**Letter Spacing:**
- `tracking-tighter`: -0.05em (Large headings)
- `tracking-tight`: -0.025em (Regular headings)
- `tracking-wide`: 0.025em (Small text, labels)

### Common Patterns

**Section Header:**
```astro
<div class="text-center mb-16">
  <h2 class="text-4xl md:text-6xl font-black text-neutral-900 uppercase tracking-tighter mb-6">
    SECTION TITLE
  </h2>
  <div class="w-24 h-1 bg-lime-400 mx-auto mb-8"></div>
  <p class="text-lg md:text-xl text-neutral-600 font-medium max-w-3xl mx-auto leading-relaxed">
    Section description
  </p>
</div>
```

**Icon Container:**
```astro
<div class="w-16 h-16 bg-lime-400 rounded-xl flex items-center justify-center">
  <Icon name="trophy" class="h-8 w-8 text-neutral-900" />
</div>
```

**Hover Effects:**
- `hover:scale-105` - Slight grow on hover
- `hover:shadow-lg` - Elevated shadow on hover
- `transition-all` - Smooth transitions

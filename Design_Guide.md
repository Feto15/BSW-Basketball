# Design Guide

This document outlines the design guidelines for the BSW Basketball website, focusing on key aspects such as color palette, typography, spacing, layout, and component library usage.

## Color Palette

The website uses a primary color palette consisting of neutral tones and a vibrant lime accent color. The colors are defined using CSS variables and the OKLCH color space for consistent and accessible color rendering.

-   **Neutral:**
    -   `neutral-50`: #f5f5f5
    -   `neutral-900`: #1a1a1a
-   **Lime:**
    -   `lime-400`: #d4ff00
    -   `lime-500`: #bfe600

The color definitions can be found in [`app/tailwind.config.ts`](app/tailwind.config.ts:22) and [`app/src/app/globals.css`](app/src/app/globals.css:46).

## Typography

The website utilizes a sans-serif font for primary text and a monospace font for code or technical displays.

-   **Sans-serif:** Defined by the `--font-sans` CSS variable.
-   **Monospace:** Defined by the `--font-mono` CSS variable.

Font weights and letter spacing are defined in [`app/tailwind.config.ts`](app/tailwind.config.ts:85):

-   `fontWeight`: `black: "900"`
-   `letterSpacing`:
    -   `tighter: "-0.05em"`
    -   `tight: "-0.025em"`
    -   `wide: "0.025em"`

## Spacing and Layout

The website uses a container-based layout with consistent padding and spacing. Key spacing and layout conventions include:

-   **Container:** Centered content with `2rem` padding on screens larger than `1400px`.
-   **Margin and Padding:** Tailwind CSS spacing utilities (e.g., `mb-8`, `space-x-4`) are used throughout the website for consistent spacing.

The container properties are defined in [`app/tailwind.config.ts`](app/tailwind.config.ts:14).

## Component Library

The website uses a custom component library located in the `app/src/components/ui/` directory. This library provides reusable UI components such as:

-   **Button:** A versatile button component with different variants (e.g., `default`, `outline`, `ghost`) and sizes. Styled using `class-variance-authority` (cva) for easy customization. See [`app/src/components/ui/button.tsx`](app/src/components/ui/button.tsx:1) for implementation details.
-   **Card:** A container component for grouping related content. See [`app/src/components/ui/card.tsx`](app/src/components/ui/card.tsx:1) for implementation details.
-   **Input:** A standard input field for accepting user input.
-   **Textarea:** A multi-line text input field for longer text input.
-   **Badge:** Used to highlight categories or statuses.

## Other Design Guidelines

-   **Transitions:** Use `transition-all` class to make elements have smooth transitions on hover
-   **Shadows:** Use `shadow-sm` and `shadow-lg` to add depth to elements
-   **Border Radius:** Use `rounded-xl` and `rounded-lg` for consistent border radius
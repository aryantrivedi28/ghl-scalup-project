# GHLScaleUp - Development Guide

Complete guide for developing, customizing, and extending the GHLScaleUp website.

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open http://localhost:3000
```

## 📂 Project Structure Explained

### `/app` - Next.js App Router
- **layout.tsx** - Root layout, font configuration, global metadata
- **page.tsx** - Home page that composes all sections
- **globals.css** - Global styles, animations, design tokens

### `/components/ghlscalup` - Reusable Components
Each component is self-contained and represents a section:
- **Navigation.tsx** - Fixed sticky nav with mobile menu
- **Hero.tsx** - Hero section with gradient orbs and metrics
- **Features.tsx** - 6-column feature grid
- **Services.tsx** - Left-right service cards layout
- **WhyChooseUs.tsx** - 4-reason grid with CTA
- **Process.tsx** - 5-step timeline process
- **Testimonials.tsx** - Testimonial cards with stats
- **CTA.tsx** - Final call-to-action section
- **Footer.tsx** - Footer with links and social

### `/lib` - Utilities & Configuration
- **config.ts** - Centralized site configuration
- **utils.ts** - Utility functions (cn for className merging)

### `/public` - Static Assets
Images, icons, fonts, and other static files

## 🎨 Styling & Theme

### Design Tokens
All colors are defined in `/app/globals.css`:

```css
:root {
  --primary: #0a0e17;
  --secondary: #111827;
  --accent: #3b82f6;
  /* ... */
}
```

### Using CSS Variables in Tailwind
```tsx
<div className="bg-[var(--primary)]">
  Text with primary color
</div>
```

### Tailwind Utilities
Project uses custom utilities for common patterns:
- `.container-custom` - Container with max-width and padding
- `.badge-base` - Styled badge component
- `.shadow-card` - Subtle card shadow
- `.shadow-card-hover` - Enhanced hover shadow

### Animations
Custom animations in globals.css:
- `animate-pulse-dot` - Pulsing dot animation
- `animate-grow-bar` - Growing bar animation

## 📝 Adding New Content

### Update Hero Section
Edit `/components/ghlscalup/Hero.tsx`:

```tsx
// Change badge text
<div className="badge-base mb-6">
  <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse-dot" />
  <span>Your badge text here</span>
</div>

// Change headline
<h1 className="...">
  Your headline here
</h1>
```

### Update Features
Edit `/lib/config.ts` features array:

```ts
export const siteConfig = {
  features: [
    {
      icon: '⚡',
      title: 'Your Feature Title',
      description: 'Your feature description',
      color: 'blue', // blue, green, amber, purple, rose, cyan
    },
    // ... more features
  ],
}
```

### Update Testimonials
Edit `/lib/config.ts` testimonials array:

```ts
testimonials: [
  {
    stars: 5,
    quote: 'Client quote here',
    author: 'Client Name',
    role: 'Client Title',
    initials: 'CN',
  },
]
```

### Update Navigation Links
Edit `/lib/config.ts`:

```ts
navigation: {
  links: [
    { label: 'Features', href: '#features' },
    { label: 'Services', href: '#services' },
    // Add more links
  ],
}
```

## 🔧 Customization

### Change Brand Colors
Edit `/app/globals.css`:

```css
:root {
  --accent: #your-color-hex;
  --accent-bright: #your-lighter-color;
}
```

### Change Fonts
Edit `/app/layout.tsx`:

```tsx
import { YourFont } from 'next/font/google'

const yourFont = YourFont({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700'],
})
```

Then update font variable in `tailwind.config.ts`.

### Modify Component Layout
Components use Tailwind grid system:
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* items */}
</div>
```

Change grid columns: `grid-cols-2`, `grid-cols-3`, `grid-cols-4`

### Add New Section
1. Create component: `/components/ghlscalup/NewSection.tsx`
2. Import in `/app/page.tsx`
3. Add to component composition

Example:
```tsx
// components/ghlscalup/NewSection.tsx
export default function NewSection() {
  return (
    <section className="py-24 bg-primary">
      <div className="container-custom">
        {/* Your content */}
      </div>
    </section>
  )
}

// app/page.tsx
import NewSection from '@/components/ghlscalup/NewSection'

export default function Home() {
  return (
    <main>
      {/* ... other sections */}
      <NewSection />
    </main>
  )
}
```

## 🎯 Responsive Design

### Breakpoints (Tailwind)
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### Mobile-First Pattern
```tsx
{/* Mobile (default) */}
<div className="flex flex-col gap-4
  {/* Tablet and up */}
  md:flex-row md:gap-8
  {/* Desktop and up */}
  lg:gap-12">
  Items
</div>
```

## 🔍 Best Practices

### Code Organization
- Keep components focused and single-responsibility
- Use descriptive component names
- Extract repeated logic into utilities

### Performance
- Use Next.js Image for images
- Lazy load heavy components
- Optimize bundle size

### Accessibility
- Use semantic HTML (section, article, nav, main, footer)
- Add proper heading hierarchy (h1 > h2 > h3)
- Include alt text for images
- Use ARIA labels for interactive elements

### TypeScript
- Define types for props:
```tsx
interface FeatureProps {
  icon: string
  title: string
  description: string
  color: 'blue' | 'green' | 'amber'
}

export default function Feature({ icon, title, description, color }: FeatureProps) {
  // ...
}
```

## 🧪 Testing

### Manual Testing Checklist
- [ ] Desktop view (1920px+)
- [ ] Tablet view (768px)
- [ ] Mobile view (375px)
- [ ] Navigation toggle on mobile
- [ ] Hover states on interactive elements
- [ ] Form submissions
- [ ] Link functionality

### Browser Testing
Test on:
- Chrome/Edge (Chromium)
- Firefox
- Safari
- Mobile browsers

## 📦 Building & Deployment

### Development
```bash
pnpm dev
```

### Production Build
```bash
pnpm build
pnpm start
```

### Deployment to Vercel
```bash
# Install Vercel CLI
pnpm i -g vercel

# Deploy
vercel
```

### Environment Variables
Create `.env.local` with values from `.env.example`

## 🐛 Debugging

### React DevTools
- Install [React DevTools extension](https://react-devtools-tutorial.vercel.app/)
- Inspect components and props

### Next.js Debug Mode
```bash
DEBUG=* pnpm dev
```

### Console Logging
```tsx
export default function Component() {
  console.log('Debug info:', data)
  return <div>...</div>
}
```

## 📚 Useful Resources

### Documentation
- [Next.js 16 Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React](https://react.dev)
- [TypeScript](https://www.typescriptlang.org/docs/)

### Tools
- [Tailwind UI](https://tailwindui.com/) - Component inspiration
- [Heroicons](https://heroicons.com/) - Icon library
- [Coolors.co](https://coolors.co/) - Color palette generator
- [Google Fonts](https://fonts.google.com/) - Font selection

## 🚀 Performance Tips

1. **Images**
   - Use Next.js Image component
   - Optimize image sizes
   - Use WebP format

2. **Code**
   - Code split components
   - Lazy load routes
   - Tree shake unused code

3. **Fonts**
   - Use next/font
   - Limit font weights
   - Use variable fonts

4. **Styles**
   - Tailwind purges unused CSS
   - Avoid arbitrary values
   - Use design tokens

## 🔐 Security Checklist

- [ ] No secrets in source code
- [ ] Use environment variables
- [ ] Content Security Policy configured
- [ ] HTTPS enabled on production
- [ ] Regular dependency updates

## 📞 Common Issues & Solutions

### Styles Not Applying
1. Clear `.next` folder: `rm -rf .next`
2. Restart dev server
3. Check Tailwind content paths

### Fonts Not Loading
1. Verify font imports in layout.tsx
2. Check font file paths
3. Clear browser cache

### Build Errors
1. Check TypeScript errors
2. Verify all imports exist
3. Run `pnpm install` again

---

Happy coding! 🎉

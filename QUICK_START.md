# GHLScaleUp - Quick Start Guide

Get up and running with GHLScaleUp in 5 minutes!

## ⚡ Installation

```bash
# 1. Install dependencies
pnpm install

# 2. Start development server
pnpm dev

# 3. Open browser
# Navigate to http://localhost:3000
```

## 📝 Quick Customization

### 1. Change Brand Name
Open `/lib/config.ts`:
```ts
brand: {
  name: 'Your Brand Name',
  shortName: 'YBN',
  // ...
}
```

### 2. Update Colors
Open `/app/globals.css`:
```css
:root {
  --primary: #0a0e17;        /* Dark background */
  --accent: #3b82f6;         /* Main button color */
  --accent-bright: #60a5fa;  /* Hover state */
  /* Update colors to match your brand */
}
```

### 3. Change Hero Text
Open `/lib/config.ts`:
```ts
hero: {
  badge: 'Your badge text',
  headline: 'Your headline here',
  subheadline: 'Your subheadline here',
  // ...
}
```

### 4. Update Features
Open `/lib/config.ts` and modify the `features` array:
```ts
features: [
  {
    icon: '⚡',
    title: 'Feature Title',
    description: 'Feature description',
    color: 'blue',
  },
  // Add/edit more features
]
```

### 5. Update Testimonials
Open `/lib/config.ts` and modify the `testimonials` array:
```ts
testimonials: [
  {
    stars: 5,
    quote: 'Great product!',
    author: 'John Doe',
    role: 'CEO, Company',
    initials: 'JD',
  },
  // Add/edit more testimonials
]
```

## 🎨 Key Files

| File | Purpose |
|------|---------|
| `app/layout.tsx` | Root layout & metadata |
| `app/globals.css` | Global styles & tokens |
| `lib/config.ts` | Content configuration |
| `components/ghlscalup/*.tsx` | Section components |
| `.env.example` | Environment variables template |

## 🚀 Common Tasks

### Add New Navigation Link
Edit `/lib/config.ts`:
```ts
navigation: {
  links: [
    { label: 'Features', href: '#features' },
    { label: 'Your Link', href: '#your-section' }, // Add here
  ],
}
```

### Change Button Colors
In any component, modify button className:
```tsx
<button className="bg-accent hover:bg-accent-bright">
  Button
</button>
```

### Update Footer Links
Edit `/lib/config.ts`:
```ts
footerLinks: {
  product: ['Features', 'Your Link'],
  company: ['About', 'Your Link'],
  legal: ['Privacy', 'Your Link'],
}
```

### Change Font
1. Edit `/app/layout.tsx`
2. Import font from `next/font/google`
3. Add font variable to html className
4. Update `tailwind.config.ts` if needed

## 📱 Responsive Classes

Tailwind responsive prefixes:
- `md:` - Tablet (768px+)
- `lg:` - Desktop (1024px+)
- `xl:` - Large desktop (1280px+)

Example:
```tsx
<div className="flex flex-col md:flex-row lg:gap-12">
  Responsive layout
</div>
```

## 🎯 Color Variants

Use these colors throughout the site:
- `blue` - Primary accent
- `green` - Success/positive
- `amber` - Warning
- `purple` - Info
- `rose` - Error/important
- `cyan` - Secondary

Example:
```tsx
<div className="bg-blue-500/10">Content</div>
<div className="text-green-500">Text</div>
<div className="border border-amber-500">Border</div>
```

## 🔧 Build & Deploy

### Development
```bash
pnpm dev
```

### Production Build
```bash
pnpm build
pnpm start
```

### Deploy to Vercel
```bash
vercel
```

Or connect GitHub repo to Vercel for automatic deployments.

## 📚 Next Steps

1. **Read Full Documentation** - Check `README.md`
2. **Development Guide** - Check `DEVELOPMENT.md`
3. **Customize Content** - Update `lib/config.ts`
4. **Add Features** - Create new components
5. **Deploy** - Push to production

## 🆘 Common Issues

**Styles not loading?**
```bash
rm -rf .next
pnpm dev
```

**Fonts not showing?**
- Clear browser cache
- Check `app/layout.tsx` font imports
- Restart dev server

**Build errors?**
```bash
pnpm install
pnpm build
```

## 📞 Support Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev)

## ✅ Deployment Checklist

- [ ] Update brand colors in `globals.css`
- [ ] Update content in `lib/config.ts`
- [ ] Update meta tags in `app/layout.tsx`
- [ ] Test responsive design
- [ ] Check all links work
- [ ] Test on mobile devices
- [ ] Run `pnpm build` successfully
- [ ] Deploy to production

---

🎉 You're ready to go! Start customizing and deploy with confidence!

# GHLScaleUp - Deployment Checklist

Complete checklist for preparing your site for production deployment.

## ✅ Pre-Deployment Checklist

### 1. Content & Branding (5-10 minutes)

- [ ] Update brand name in `lib/config.ts`
  ```ts
  brand: {
    name: 'Your Brand Name',
    shortName: 'YBN',
  }
  ```

- [ ] Update brand colors in `app/globals.css`
  ```css
  --primary: #your-color;
  --accent: #your-color;
  ```

- [ ] Update hero section content in `lib/config.ts`
  - [ ] Badge text
  - [ ] Headline
  - [ ] Subheadline
  - [ ] CTA button labels
  - [ ] Stats

- [ ] Update features in `lib/config.ts`
  - [ ] Feature titles
  - [ ] Feature descriptions
  - [ ] Icons (emoji or Unicode)

- [ ] Update services in `lib/config.ts`
  - [ ] Service titles
  - [ ] Service descriptions

- [ ] Update testimonials in `lib/config.ts`
  - [ ] Client quotes
  - [ ] Author names
  - [ ] Client roles

- [ ] Update footer links in `lib/config.ts`
  - [ ] Product links
  - [ ] Company links
  - [ ] Legal links

### 2. SEO & Metadata (5 minutes)

- [ ] Update meta title in `app/layout.tsx`
  ```tsx
  title: 'Your Site Title'
  ```

- [ ] Update meta description in `app/layout.tsx`
  ```tsx
  description: 'Your site description'
  ```

- [ ] Update SEO in `lib/config.ts`
  ```ts
  seo: {
    title: 'Your Title',
    description: 'Your description',
    keywords: ['your', 'keywords'],
  }
  ```

- [ ] Update favicon
  - [ ] `/public/icon.svg`
  - [ ] `/public/icon-light-32x32.png`
  - [ ] `/public/icon-dark-32x32.png`
  - [ ] `/public/apple-icon.png`

- [ ] Update OG image (social sharing)
  - [ ] Add `/public/og-image.png` (1200x630px)

### 3. Testing (15-20 minutes)

#### Functionality
- [ ] All links work
- [ ] CTA buttons functional
- [ ] Mobile menu opens/closes
- [ ] Navigation scroll detection works
- [ ] Hover states work
- [ ] Forms (if any) submit

#### Responsive Design
- [ ] Desktop view (1920px)
- [ ] Laptop view (1440px)
- [ ] Tablet view (768px)
- [ ] Mobile view (375px)
- [ ] All text readable
- [ ] Images display properly
- [ ] Navigation adapts to viewport

#### Browser Compatibility
- [ ] Chrome/Chromium ✓
- [ ] Firefox ✓
- [ ] Safari ✓
- [ ] Edge ✓
- [ ] Mobile Safari ✓
- [ ] Mobile Chrome ✓

#### Performance
- [ ] Page loads quickly
- [ ] No console errors
- [ ] No network errors
- [ ] CSS loads properly
- [ ] Fonts display correctly
- [ ] Images optimize properly

#### Accessibility
- [ ] Tab navigation works
- [ ] All buttons keyboard accessible
- [ ] Color contrast sufficient
- [ ] Alt text on images (where needed)
- [ ] Proper heading hierarchy

### 4. Code Quality (5-10 minutes)

- [ ] No TypeScript errors
  ```bash
  pnpm tsc --noEmit
  ```

- [ ] No ESLint warnings
  ```bash
  pnpm lint
  ```

- [ ] Build completes successfully
  ```bash
  pnpm build
  ```

- [ ] No console.log() left in code
- [ ] No TODO comments unresolved
- [ ] No unused imports

### 5. Environment Setup (5 minutes)

- [ ] Create `.env.local` from `.env.example`
- [ ] All required variables set
- [ ] Analytics ID added (if using Google Analytics)
- [ ] API keys configured (if needed)
- [ ] Database URL configured (if needed)

### 6. Documentation (5 minutes)

- [ ] Update README.md with your info
- [ ] Update QUICK_START.md if customized
- [ ] Add setup instructions
- [ ] Add troubleshooting if needed

### 7. Git Setup (5 minutes)

- [ ] Initialize git (if not done)
  ```bash
  git init
  ```

- [ ] Create .gitignore (included)
- [ ] Initial commit
  ```bash
  git add .
  git commit -m "Initial commit: GHLScaleUp site"
  ```

- [ ] Create GitHub repository
- [ ] Push to GitHub
  ```bash
  git remote add origin YOUR_REPO_URL
  git push -u origin main
  ```

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

#### Setup
- [ ] Go to [vercel.com](https://vercel.com)
- [ ] Sign up / Log in
- [ ] Connect GitHub account
- [ ] Select your repository
- [ ] Deploy

#### Commands
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### Benefits
- ✅ Automatic HTTPS
- ✅ Automatic deployments on push
- ✅ Global CDN
- ✅ Analytics included
- ✅ Free tier available

### Option 2: Railway

#### Setup
- [ ] Go to [railway.app](https://railway.app)
- [ ] Sign up with GitHub
- [ ] Create new project
- [ ] Connect GitHub repository
- [ ] Configure environment variables
- [ ] Deploy

### Option 3: Render

#### Setup
- [ ] Go to [render.com](https://render.com)
- [ ] Sign up with GitHub
- [ ] Create new web service
- [ ] Connect repository
- [ ] Set build command: `pnpm build`
- [ ] Set start command: `pnpm start`
- [ ] Deploy

### Option 4: AWS Amplify

#### Setup
- [ ] Go to AWS Amplify Console
- [ ] Connect GitHub repo
- [ ] Set build settings
- [ ] Deploy

### Option 5: Docker Deployment

#### Create Dockerfile
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install

COPY . .
RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]
```

#### Build and Run
```bash
docker build -t ghlscalup .
docker run -p 3000:3000 ghlscalup
```

## 🔒 Production Security Checklist

- [ ] No sensitive data in code
- [ ] Environment variables used for secrets
- [ ] HTTPS enforced
- [ ] Security headers configured
- [ ] CORS properly configured
- [ ] No exposed API keys
- [ ] Rate limiting considered
- [ ] Input validation in place

## 📊 Production Monitoring

### Setup Monitoring
- [ ] Vercel Analytics enabled
- [ ] Google Analytics configured (if desired)
- [ ] Uptime monitoring setup
- [ ] Error tracking configured

### Tools
- [Vercel Analytics](https://vercel.com/analytics) - Built-in
- [Google Analytics](https://analytics.google.com) - Optional
- [Sentry](https://sentry.io) - Error tracking (optional)
- [UptimeRobot](https://uptimerobot.com) - Uptime monitoring (optional)

## 🌐 Custom Domain Setup

### Vercel
1. Go to project settings
2. Domains section
3. Add custom domain
4. Follow DNS instructions

### Other Providers
1. Update DNS records at domain registrar
2. Add CNAME/A records pointing to provider
3. Wait for DNS propagation (can take 24-48 hours)

## 📱 Mobile Testing

Before going live, test on actual devices:

- [ ] iPhone (test on actual device if possible)
- [ ] iPad
- [ ] Android phone
- [ ] Android tablet
- [ ] Check touch interactions
- [ ] Check viewport scaling

## 🎯 Performance Optimization

### Before Deployment
- [ ] Run Lighthouse audit
  ```bash
  # In Chrome DevTools -> Lighthouse
  ```

- [ ] Check Core Web Vitals
  - [ ] Largest Contentful Paint < 2.5s
  - [ ] First Input Delay < 100ms
  - [ ] Cumulative Layout Shift < 0.1

- [ ] Optimize images
  - [ ] Compress images
  - [ ] Use WebP format where possible

### Verification
```bash
# Build and start locally
pnpm build
pnpm start

# Run Lighthouse in DevTools
# Check performance score
```

## 🚨 Post-Deployment

### Immediately After
- [ ] Verify site is live
- [ ] Test all links work
- [ ] Test forms work
- [ ] Check mobile view
- [ ] Verify analytics tracking

### First Week
- [ ] Monitor error logs
- [ ] Check performance metrics
- [ ] Gather feedback
- [ ] Fix any issues found

### First Month
- [ ] Review analytics
- [ ] Check search console
- [ ] Monitor uptime
- [ ] Optimize based on data

## 📋 Final Checklist

**Before Clicking Deploy:**
- [ ] All content updated
- [ ] All links tested
- [ ] Mobile view verified
- [ ] SEO metadata set
- [ ] Environment variables configured
- [ ] Code builds without errors
- [ ] No console errors
- [ ] No TypeScript errors
- [ ] Favicon configured
- [ ] Analytics setup
- [ ] Domain configured (if custom)

**After Deployment:**
- [ ] Site is live and accessible
- [ ] Can access via domain
- [ ] All pages load
- [ ] Mobile view works
- [ ] Analytics tracking works
- [ ] HTTPS is enabled

## 🎉 Deployment Complete!

Once you've checked all boxes:
1. Share your site with the world!
2. Monitor performance and analytics
3. Make updates as needed
4. Celebrate your new site! 🎊

## 📞 Troubleshooting

### Site Not Deploying
- [ ] Check git commits
- [ ] Verify environment variables
- [ ] Check build logs
- [ ] Ensure Node version is 18+

### Links Broken After Deployment
- [ ] Check relative vs absolute paths
- [ ] Verify import paths
- [ ] Clear browser cache

### Styles Not Loading
- [ ] Check CSS imports
- [ ] Verify Tailwind config
- [ ] Clear .next folder and rebuild

### Fonts Not Loading
- [ ] Check next/font imports
- [ ] Verify font variables in layout
- [ ] Clear browser cache

## 🆘 Need Help?

- **Vercel Support**: [vercel.com/help](https://vercel.com/help)
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind Docs**: [tailwindcss.com/docs](https://tailwindcss.com/docs)

---

**Ready to deploy?** Check off all boxes above and you're good to go! 🚀

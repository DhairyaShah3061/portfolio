# Dhairya Shah — Portfolio

A professional portfolio built with **Next.js 14** + **Tailwind CSS v3**.

## Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v3
- **Language**: TypeScript
- **Fonts**: Playfair Display + DM Sans (Google Fonts)

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run dev server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### 3. Build for production
```bash
npm run build
npm start
```

## Project Structure
```
dhairya-portfolio/
├── app/
│   ├── globals.css       # Global styles + Tailwind directives
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Home page (assembles all sections)
├── components/
│   ├── Navbar.tsx        # Fixed top navigation
│   ├── Hero.tsx          # Hero / landing section
│   ├── About.tsx         # About me + stats + education
│   ├── Experience.tsx    # Work & leadership timeline
│   ├── Skills.tsx        # Technical skills grid
│   ├── Achievements.tsx  # Awards, certifications
│   ├── Testimonials.tsx  # Client & peer testimonials
│   ├── Contact.tsx       # Contact CTA + links
│   ├── Footer.tsx        # Footer
│   └── ScrollReveal.tsx  # Scroll animation observer
├── public/
│   └── dhairya.png       # Profile photo
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
└── package.json
```

## Customization
- **Colors**: Edit CSS variables in `app/globals.css` (`:root` block)
- **Content**: All data is inline in each component — easy to find and edit
- **Photo**: Replace `public/dhairya.png` with any updated image
- **Fonts**: Change the Google Fonts import in `globals.css`

## Deployment
Deploy instantly to **Vercel**:
```bash
npx vercel
```
Or push to GitHub and connect to vercel.com for auto-deployments.

# Professional Resume Website

A clean, fast, and mobile-responsive resume website built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**.

## Features

✅ **Mobile Responsive** - Fully optimized for all devices using Tailwind CSS responsive design  
✅ **High Performance** - Built with Next.js for optimal speed and SEO  
✅ **Clean Design** - Professional, developer-focused design (not artsy)  
✅ **Single Page** - All content on one scrollable page  
✅ **Accessibility** - Semantic HTML and proper contrast ratios  
✅ **Print-Friendly** - Optimized for printing to PDF  

## Tech Stack

- **Framework**: Next.js 16+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Runtime**: Node.js 20.9.0+ required

## Getting Started

### Prerequisites

Ensure you have Node.js **20.9.0 or higher** installed:

```bash
node --version  # Should show v20.9.0 or higher
```

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Build for production
npm run build

# Start the production server
npm start
```

## Project Structure

```
src/app/
├── page.tsx          # Main resume page with all sections
├── layout.tsx        # Root layout with metadata and SEO
└── globals.css       # Global styles and Tailwind configuration
```

## Customization

### Update Your Resume Content

Edit [src/app/page.tsx](src/app/page.tsx):

1. **Header** - Replace "Your Name" and contact information
2. **Summary** - Add your professional overview
3. **Experience** - Add your work history with dates and accomplishments
4. **Skills** - Update skill categories and items
5. **Education** - Add your degree and certifications
6. **Links** - Update email, phone, LinkedIn, GitHub URLs

### Customize Styling

All styling uses Tailwind CSS utility classes. To customize:

1. Modify classes directly in [src/app/page.tsx](src/app/page.tsx)
2. Edit Tailwind settings in [tailwind.config.ts](tailwind.config.ts)
3. Adjust global styles in [src/app/globals.css](src/app/globals.css)

## Performance Features

- No external Google Fonts - uses system fonts
- Minimal CSS bundle
- Server-side rendering with Next.js
- Mobile-first responsive design
- Print-optimized styles

## Responsive Design

- **Mobile**: Optimized for phones (< 640px)
- **Tablet**: Optimized for tablets (640px - 1024px)
- **Desktop**: Full-featured layout (> 1024px)

## Deployment

### Deploy to Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Deploy to GitHub Pages

See [Next.js GitHub Pages deployment docs](https://nextjs.org/docs/app/building-your-application/deploying)

### Other Platforms

Compatible with Netlify, Docker, any Node.js host, or static hosting.

## GitHub Repository Setup

```bash
# Initialize git (already done)
git remote add origin https://github.com/yourusername/resume.git
git branch -M main
git push -u origin main
```

## Node.js Version Issue

If you get a Node.js version error:

```bash
# Using nvm (Node Version Manager):
nvm install 20.9.0
nvm use 20.9.0

# Or download from https://nodejs.org/
```

## Next Steps

1. ✏️ Update resume content in `src/app/page.tsx`
2. 🔗 Update your contact links (email, LinkedIn, GitHub, phone)
3. 🎨 Customize styling and colors if needed
4. 🚀 Deploy to Vercel or your hosting provider
5. 📤 Push to GitHub for your portfolio

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

---

Built with Next.js, React, and Tailwind CSS

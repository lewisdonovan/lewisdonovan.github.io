# Lewis Donovan Portfolio - Next.js

A modern, responsive portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui components.

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Build Tool**: Turbo
- **Fonts**: Inter (body) + Fira Code (monospace)
- **Deployment**: Optimized for static generation

## 🎨 Design System

The site maintains the original dark theme with green accent colors:
- **Background**: `#272c30` (dark gray)
- **Text**: `#bec5cb` (light gray)
- **Accent**: `#0da5b1` (teal/green)
- **Borders**: `#373e44` (medium gray)

## 📁 Project Structure

```
src/
├── app/                    # App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── press/             # Press coverage
│   ├── projects/          # Projects portfolio
│   ├── uses/              # Tools & setup
│   ├── globals.css        # Global styles & theme
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── ui/                # shadcn/ui components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   └── ProjectCard.tsx    # Project showcase card
└── lib/                   # Utilities
    └── utils.ts           # Helper functions
```

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Start production server**:
   ```bash
   npm start
   ```

## 📱 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Theme**: Consistent dark theme throughout
- **Static Generation**: All pages are statically generated for optimal performance
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Cards
- **Accessibility**: Semantic HTML and ARIA labels
- **Performance**: Optimized images and fonts
- **Type Safety**: Full TypeScript support

## 🎯 Pages

- **Homepage**: Hero section, featured projects, services, blog posts, press
- **About**: Personal story, philosophy, and background
- **Projects**: Complete portfolio with award badges
- **Press**: Media coverage and mentions
- **Uses**: Tools, software, and hardware setup
- **Contact**: Multiple ways to get in touch

## 🏆 Awards & Recognition

The site showcases various awards and recognitions:
- **Webby Award Nominee** (NAO Orbit interactive video)
- **Clio Award Winner** (Amo In Colour project)
- **BRIT Awards** (Little Mix GIF Generator)

## 🔧 Customization

### Adding New Projects
1. Add project data to the `featuredProjects` array in `src/app/page.tsx`
2. Add project images to `public/images/projects/`
3. Create individual project pages in `src/app/projects/[slug]/`

### Styling
- Global styles: `src/app/globals.css`
- Component styles: Use Tailwind classes
- Custom components: Add to `src/components/`

### Content Updates
- Blog posts: Update the `blogPosts` array in `src/app/page.tsx`
- Press articles: Update the `pressArticles` array
- Services: Modify the `services` array

## 🚀 Deployment

The site is optimized for static deployment on platforms like:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Any static hosting service

### Build Output
```bash
npm run build
```
Generates optimized static files in the `.next` directory.

## 📄 License

This project is for Lewis Donovan's personal portfolio. All rights reserved.

## 🤝 Contributing

This is a personal portfolio site. For suggestions or issues, please contact Lewis directly.

---

Built with ❤️ by Lewis Donovan
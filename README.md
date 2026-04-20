# Varshan K Portfolio

A stunning, modern, and interactive portfolio website built with **Next.js 15**, **Tailwind CSS**, **Framer Motion**, and **TypeScript**.

![Portfolio Preview](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

## ✨ Features

### 🎨 Design
- **Dark theme primary** with neon gradient accents (blue, purple, pink)
- **Glassmorphism UI** with blurred transparent cards
- **Custom cursor** with glow effect and trail
- **Smooth transitions** and micro-interactions everywhere
- **Animated gradient** and **particle background**
- **Noise texture overlay** for premium feel

### 🚀 Advanced Features
- **Loading screen** with animated progress bar
- **Typing animation** in hero section
- **Smooth scrolling** across all sections
- **Scroll-triggered animations** with Framer Motion
- **Dark/Light mode toggle** with persistence
- **Responsive design** for all devices
- **Project modals** with full details
- **Animated skill bars** with shimmer effect
- **Vertical timeline** for experience/education

### 🛠 Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter, JetBrains Mono

## 📁 Project Structure

```
portfolio-nextjs/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx              # Main page assembling all sections
│   └── globals.css           # Global styles & Tailwind directives
├── components/
│   ├── LoadingScreen.tsx     # Animated loading screen
│   ├── CustomCursor.tsx      # Custom cursor with glow
│   ├── ParticleBackground.tsx # Canvas particle system
│   ├── Navbar.tsx            # Glassmorphism navigation
│   ├── Hero.tsx              # Hero with typing animation
│   ├── About.tsx             # About section
│   ├── Skills.tsx            # Skills with animated progress bars
│   ├── Projects.tsx          # Projects grid with modals
│   ├── Experience.tsx        # Timeline for awards & education
│   ├── Contact.tsx           # Contact form & info
│   └── Footer.tsx            # Footer with social links
├── lib/
│   ├── utils.ts              # Utility functions (cn)
│   └── data.ts               # Personal data & content
├── styles/
│   └── globals.css           # Additional global styles
├── public/
│   └── images/               # Project images (optional)
├── tailwind.config.ts        # Tailwind configuration
├── next.config.ts            # Next.js configuration
└── package.json              # Dependencies
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone or download the project:**
   ```bash
   cd portfolio-nextjs
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The static export will be generated in the `dist/` folder.

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Manual Deployment

The project is configured for static export:
```bash
npm run build
# Output will be in dist/ folder
```

## 📝 Customization

### Personal Data
Edit `/lib/data.ts` to update:
- Name, title, tagline
- Contact information
- Skills
- Projects
- Experience & Education

### Styling
- Colors: Edit `tailwind.config.ts`
- Global styles: Edit `styles/globals.css`
- Component styles: Each component has Tailwind classes

### Images
Add project screenshots to `public/images/` and update the image paths in `/lib/data.ts`.

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Neon Blue | `#00f3ff` | Primary accent, links |
| Neon Purple | `#bc13fe` | Secondary accent |
| Neon Pink | `#ff00ff` | Tertiary accent |
| Dark 100 | `#0a0a0a` | Primary background |
| Dark 200 | `#111111` | Card backgrounds |
| Dark 300 | `#1a1a1a` | Elevated surfaces |

## 🎯 Performance

- ✅ Fully responsive (mobile + desktop)
- ✅ Optimized animations (GPU accelerated)
- ✅ Lazy loading with Intersection Observer
- ✅ Reduced motion support
- ✅ Clean, modular component structure

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🙏 Credits

- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [Lucide Icons](https://lucide.dev)

---

Built with ❤️ by **Varshan K**

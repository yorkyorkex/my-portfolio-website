# Hsiang-Jen Yu - Portfolio Website

A modern, responsive portfolio website showcasing my professional journey as a Full-Stack Developer and IT Professional.

## 🚀 Features

- **Modern Design**: Clean, professional design inspired by contemporary portfolio websites
- **Responsive Layout**: Optimized for all devices (desktop, tablet, mobile)
- **Dark/Light Mode**: Toggle between themes with system preference detection
- **Smooth Animations**: Subtle animations and transitions for enhanced UX
- **Interactive Components**: Engaging UI elements and hover effects
- **SEO Optimized**: Meta tags, structured data, and performance optimization
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
├── components/
│   ├── ui/                  # Reusable UI components
│   │   ├── Button.tsx
│   │   └── Card.tsx
│   ├── sections/            # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   ├── Navigation.tsx       # Header navigation
│   └── Footer.tsx           # Footer component
├── lib/
│   ├── data.ts              # Portfolio data and content
│   └── utils.ts             # Utility functions
├── types/
│   └── index.ts             # TypeScript type definitions
└── public/                  # Static assets
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Blue tones (#0ea5e9 - #0c4a6e)
- **Secondary**: Purple accents for gradients
- **Dark Mode**: Sophisticated dark theme with proper contrast ratios

### Typography
- **Primary Font**: Inter (clean, modern sans-serif)
- **Code Font**: JetBrains Mono (for technical content)

### Animations
- Fade-in effects for sections
- Smooth scroll navigation
- Hover transitions on interactive elements
- Gradient text effects

## 📱 Responsive Design

- **Mobile-first approach** with progressive enhancement
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Flexible layouts** that adapt to different screen sizes
- **Touch-friendly** interface for mobile devices

## ⚡ Performance

- **Next.js optimizations**: Automatic code splitting and optimization
- **Image optimization**: Next.js Image component with lazy loading
- **Font optimization**: Google Fonts with display swap
- **Bundle analysis**: Optimized dependencies and tree shaking

## 🔧 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/hsiang-jen-portfolio.git
   cd hsiang-jen-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 📝 Customization

### Adding New Projects

1. Open `lib/data.ts`
2. Add your project to the `projectTemplates` array:

```typescript
{
  id: 'your-project-id',
  title: 'Your Project Title',
  description: 'Brief description',
  longDescription: 'Detailed description',
  technologies: ['React', 'Node.js', 'MongoDB'],
  features: ['Feature 1', 'Feature 2'],
  githubUrl: 'https://github.com/your-repo',
  liveUrl: 'https://your-demo.com',
  category: 'web', // 'web' | 'mobile' | 'ar-vr' | 'backend' | 'fullstack'
  status: 'completed', // 'completed' | 'in-progress' | 'planned'
  highlights: ['Key highlight 1', 'Key highlight 2']
}
```

### Updating Personal Information

Update the data in `lib/data.ts`:
- `contactInfo`: Email, phone, location, social links
- `experiences`: Work experience and job history
- `education`: Academic background
- `skills`: Technical and soft skills
- `awards`: Recognition and achievements

### Styling Customization

- **Colors**: Modify the color palette in `tailwind.config.js`
- **Fonts**: Update font imports in `app/globals.css`
- **Components**: Customize individual components in the `components/` directory

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically build and deploy

### Other Platforms

The app can be deployed on any platform that supports Next.js:
- Netlify
- Railway
- AWS Amplify
- DigitalOcean App Platform

## 📧 Contact

- **Email**: yorkyuex@gmail.com
- **Phone**: +61 416 556 319
- **LinkedIn**: [linkedin.com/in/hsiang-jen-yu-184b22267](https://linkedin.com/in/hsiang-jen-yu-184b22267)
- **Location**: Brisbane, Australia

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Built with Next.js and Tailwind CSS
- Icons by Lucide
- Fonts by Google Fonts

---

**Built with ❤️ by Hsiang-Jen Yu**
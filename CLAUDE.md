# CLAUDE.md - Portfolio Project Instructions

This file contains project-specific instructions for Claude Code to work effectively with the Hsiang-Jen Yu portfolio website.

## Project Overview

**Project**: Professional Portfolio Website for Hsiang-Jen Yu  
**Tech Stack**: Next.js 14, TypeScript, Tailwind CSS, Framer Motion  
**Purpose**: Showcase full-stack development skills and professional experience  
**Target Audience**: Potential employers, clients, and professional network  

## Project Structure

```
my-profolio-web/
├── app/                     # Next.js App Router
│   ├── globals.css         # Global styles & Tailwind
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Main page component
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.tsx      # Custom button component
│   │   └── Card.tsx        # Card component with variants
│   ├── sections/           # Page sections
│   │   ├── Hero.tsx        # Landing/intro section
│   │   ├── About.tsx       # About me with tabs
│   │   ├── Experience.tsx  # Work experience timeline
│   │   ├── Projects.tsx    # Project showcase
│   │   └── Contact.tsx     # Contact form & info
│   ├── Navigation.tsx      # Header navigation
│   └── Footer.tsx          # Footer component
├── lib/
│   ├── data.ts            # Portfolio content data
│   └── utils.ts           # Utility functions
├── types/
│   └── index.ts           # TypeScript definitions
└── public/                # Static assets
```

## Development Commands

- **Start Development**: `npm run dev`
- **Build for Production**: `npm run build`
- **Start Production**: `npm start`
- **Lint Code**: `npm run lint`
- **Type Check**: `npm run type-check`

## Key Design Principles

1. **Professional Excellence**: Clean, modern design reflecting technical expertise
2. **Performance First**: Optimized loading, responsive design, accessibility
3. **User Experience**: Smooth animations, intuitive navigation, mobile-friendly
4. **SEO Optimized**: Proper metadata, structured data, semantic HTML
5. **Maintainable Code**: TypeScript, component modularity, consistent patterns

## Content Management

### Portfolio Data Location
All content is centralized in `lib/data.ts`:
- **Personal Info**: `contactInfo` - email, phone, location, social links
- **Work Experience**: `experiences` - job history, achievements, technologies
- **Education**: `education` - degrees, GPA, achievements, coursework  
- **Skills**: `skills` - technical and soft skills with proficiency levels
- **Awards**: `awards` - academic and professional recognition
- **Volunteer Work**: `volunteerWork` - community involvement
- **Project Templates**: `projectTemplates` - ready-to-customize project showcases
- **References**: `references` - professional references

### Adding New Projects

When adding projects to replace templates in `lib/data.ts`:

```typescript
{
  id: 'unique-project-id',
  title: 'Project Name',
  description: 'Brief project description (1-2 sentences)',
  longDescription: 'Detailed description for project details',
  technologies: ['React', 'Node.js', 'MongoDB'], // Tech stack used
  features: ['Feature 1', 'Feature 2', 'Feature 3'], // Key features
  githubUrl: 'https://github.com/username/repo', // Optional
  liveUrl: 'https://demo-site.com', // Optional
  imageUrl: '/images/project-screenshot.jpg', // Optional
  category: 'web', // 'web' | 'mobile' | 'ar-vr' | 'backend' | 'fullstack'
  status: 'completed', // 'completed' | 'in-progress' | 'planned'
  highlights: ['Key achievement 1', 'Key achievement 2'] // Optional
}
```

## Styling Guidelines

### Colors & Theme
- **Primary**: Blue gradient (#0ea5e9 to #0c4a6e)
- **Secondary**: Purple accents for visual interest
- **Dark Mode**: Sophisticated dark theme with proper contrast
- **Typography**: Inter (headings), JetBrains Mono (code)

### Component Patterns
- **Cards**: Use `Card` component with variants (default, glass, elevated, bordered)
- **Buttons**: Use `Button` component with consistent variants and sizes
- **Icons**: Lucide React icons throughout
- **Animations**: Subtle hover effects, smooth transitions, fade-in animations

### Responsive Design
- **Mobile First**: Design for mobile, enhance for larger screens
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch Friendly**: Adequate touch targets, readable text sizes
- **Performance**: Optimized images, lazy loading, efficient animations

## Code Standards

### TypeScript
- **Strict Mode**: All types must be properly defined
- **Interface First**: Use interfaces in `types/index.ts`
- **Component Props**: Always type component props
- **Utility Functions**: Type all parameters and return values

### Component Guidelines
- **'use client'**: Add for components using React hooks or browser APIs
- **Accessibility**: Include ARIA labels, semantic HTML, keyboard navigation
- **Error Handling**: Graceful error states and loading indicators
- **Performance**: Use React.memo, useMemo, useCallback where appropriate

### Naming Conventions
- **Components**: PascalCase (e.g., `HeroSection.tsx`)
- **Files**: kebab-case for utilities (e.g., `format-date.ts`)
- **Variables**: camelCase
- **Constants**: UPPER_SNAKE_CASE
- **CSS Classes**: Tailwind utility classes

## Performance Optimization

### Next.js Optimizations
- **Image Optimization**: Use Next.js `Image` component
- **Font Optimization**: Preload fonts in layout
- **Code Splitting**: Automatic with Next.js App Router
- **Static Generation**: Pre-render pages where possible

### Loading Performance
- **Lazy Loading**: Images and non-critical components
- **Bundle Size**: Monitor and optimize dependencies
- **Core Web Vitals**: Maintain good LCP, FID, CLS scores
- **Caching**: Leverage browser and CDN caching

## SEO & Analytics

### Meta Tags & SEO
- **Title Tags**: Descriptive, keyword-rich titles
- **Meta Descriptions**: Compelling descriptions under 160 characters
- **Open Graph**: Social media sharing optimization
- **Schema Markup**: Structured data for search engines
- **Sitemap**: Generate for better crawling

### Performance Monitoring
- **Core Web Vitals**: Monitor loading performance
- **Accessibility**: Regular accessibility audits
- **SEO Scores**: Track search engine optimization
- **User Analytics**: Consider adding analytics if needed

## Deployment Guidelines

### Pre-Deployment Checklist
1. ✅ Run `npm run type-check` - No TypeScript errors
2. ✅ Run `npm run lint` - No linting errors  
3. ✅ Run `npm run build` - Successful production build
4. ✅ Test all navigation and functionality
5. ✅ Verify responsive design on different screen sizes
6. ✅ Test dark/light mode toggle
7. ✅ Validate contact form (if using real backend)
8. ✅ Check all external links work correctly

### Recommended Platforms
- **Vercel** (Primary): Optimized for Next.js, automatic deployments
- **Netlify**: Good alternative with form handling
- **Railway**: For full-stack applications
- **AWS Amplify**: Enterprise-grade hosting

### Environment Variables
```env
# Add to .env.local for local development
NEXT_PUBLIC_CONTACT_EMAIL=yorkyuex@gmail.com
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/hsiang-jen-yu-184b22267
# Add others as needed for analytics, forms, etc.
```

## Maintenance & Updates

### Regular Updates
- **Dependencies**: Update packages monthly for security
- **Content**: Keep experience and projects current
- **Performance**: Monitor and optimize loading times
- **SEO**: Update keywords and metadata as needed

### Adding New Features
- **Blog Section**: Consider adding a blog for technical articles
- **Project Details**: Individual project detail pages
- **Contact Backend**: Real form submission handling
- **Analytics**: Google Analytics or similar tracking
- **CMS Integration**: Consider headless CMS for easier content updates

## Troubleshooting

### Common Issues
- **Build Errors**: Check TypeScript types and imports
- **Styling Issues**: Verify Tailwind classes and responsive breakpoints
- **Performance**: Use React DevTools and Lighthouse for debugging
- **Deployment**: Check build logs and environment variables

### Debug Commands
```bash
# Type checking
npm run type-check

# Linting with auto-fix
npm run lint -- --fix

# Build analysis
npm run build -- --debug

# Development with verbose logging
npm run dev -- --verbose
```

## Contact & Support

**Developer**: Hsiang-Jen Yu  
**Email**: yorkyuex@gmail.com  
**LinkedIn**: https://linkedin.com/in/hsiang-jen-yu-184b22267  
**Location**: Brisbane, Australia  

**Project Status**: Production Ready ✅  
**Last Updated**: January 2025  
**Version**: 1.0.0  

---

**Claude Code Instructions**: When working on this project, always refer to this CLAUDE.md file for context, follow the established patterns, and maintain the professional quality standards outlined above.
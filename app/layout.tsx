import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hsiang-Jen Yu | Full-Stack Developer & IT Professional',
  description: 'IT professional skilled in full-stack development, cloud systems, and technical support. Experienced in React, Next.js, TypeScript, and modern web technologies.',
  keywords: ['Full-Stack Developer', 'React', 'Next.js', 'TypeScript', 'Cloud Systems', 'IT Professional', 'Brisbane'],
  authors: [{ name: 'Hsiang-Jen Yu' }],
  creator: 'Hsiang-Jen Yu',
  publisher: 'Hsiang-Jen Yu',
  robots: 'index, follow',
  metadataBase: new URL('https://hsiang-jen-yu.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://hsiang-jen-yu.vercel.app',
    title: 'Hsiang-Jen Yu | Full-Stack Developer',
    description: 'IT professional skilled in full-stack development, cloud systems, and technical support.',
    siteName: 'Hsiang-Jen Yu Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hsiang-Jen Yu | Full-Stack Developer',
    description: 'IT professional skilled in full-stack development, cloud systems, and technical support.',
    creator: '@hsiangjeny',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Prevent theme flashing by setting theme before page renders
              try {
                const theme = localStorage.getItem('theme') || 'dark';
                document.documentElement.classList.toggle('dark', theme === 'dark');
              } catch (e) {
                // Fallback to dark mode if localStorage is not available
                document.documentElement.classList.add('dark');
              }
            `,
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
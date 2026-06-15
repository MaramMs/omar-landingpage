import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Tajawal, Cairo } from 'next/font/google'
import './globals.css'

const cairo = Cairo({
  subsets: ['arabic'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-heading',
})

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['400', '500', '700'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'عمر المشعلي | موثق معتمد ومأذون عقود أنكحة',
  description:
    'خدمات عدلية متكاملة معتمدة من وزارة العدل السعودية — التوثيق العدلي، عقود الأنكحة، الوكالات الشرعية والإفراغ العقاري بسرية وسرعة واحترافية.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0c1a2e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${tajawal.variable} ${cairo.variable} bg-marble`}
    >
      <body className="font-sans antialiased bg-marble min-h-screen">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

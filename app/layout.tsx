import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GetRid.ng - Nigerian Student Marketplace',
  description: 'Get rid of what you don\'t need. Get what you do. Nigeria\'s student marketplace for buying and selling used items.',
  keywords: 'student marketplace, nigeria, buy and sell, used items, university students',
  authors: [{ name: 'GetRid.ng' }],
  openGraph: {
    title: 'GetRid.ng - Nigerian Student Marketplace',
    description: 'Get rid of what you don\'t need. Get what you do.',
    url: 'https://getrid.ng',
    siteName: 'GetRid.ng',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GetRid.ng - Nigerian Student Marketplace',
    description: 'Get rid of what you don\'t need. Get what you do.',
    images: ['/twitter-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
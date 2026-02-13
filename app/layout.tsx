import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const cairo = Cairo({ 
  subsets: ['latin', 'arabic'],
  weight: ['300', '400', '600', '700', '900'],
  variable: '--font-cairo',
})

export const metadata: Metadata = {
  title: 'STRUCTA GENERAL CONTRACTING - أعمال الحديد والصلب',
  description: 'شركة متخصصة في أعمال الحديد والصلب للفلل والمصانع والمشاريع التجارية',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}


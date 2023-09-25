import '@/app/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Welcome',
  description: 'MyNextApp',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth hover:scroll-auto'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

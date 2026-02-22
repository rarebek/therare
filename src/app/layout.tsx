import type { Metadata } from 'next'
import { GeistMono } from 'geist/font/mono'
import { Inter } from 'next/font/google'
import './globals.css'
import GlassPanel from '@/components/shared/glass-panel'
import Navbar from '@/components/nav/navbar'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['600'],
})

export const metadata: Metadata = {
  title: {
    template: '%s — therare.',
    default: 'therare. — Crafting digital permanence',
  },
  description: 'Personal portfolio — crafting digital permanence.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'therare.',
    title: 'therare. — Crafting digital permanence',
    description: 'Personal portfolio — crafting digital permanence.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'therare. — Crafting digital permanence',
    description: 'Personal portfolio — crafting digital permanence.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistMono.className} ${inter.variable} antialiased`}
      >
        <div className="min-h-screen bg-[#030303] text-zinc-300 selection:bg-white/20 selection:text-white relative overflow-x-hidden flex justify-center items-start p-4 md:p-8 py-8 md:py-12">
          {/* Atmospheric background blurs */}
          <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-zinc-800/20 rounded-full mix-blend-screen filter blur-[100px] animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-zinc-900/40 rounded-full mix-blend-screen filter blur-[120px]" />

          <GlassPanel>
            <Navbar />
            <main className="flex-1 flex flex-col">{children}</main>
          </GlassPanel>
        </div>
      </body>
    </html>
  )
}

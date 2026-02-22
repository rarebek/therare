'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Braces } from 'lucide-react'
import { navItems } from '@/data/navigation'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="flex justify-between items-center mb-20">
      <Link href="/" className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
          <Braces size={14} className="text-zinc-400" />
        </div>
        <span className="text-xl tracking-wide text-white italic">therare.</span>
      </Link>
      <nav className="hidden md:flex items-center gap-2 bg-white/[0.02] border border-white/[0.05] rounded-full px-2 py-1.5">
        {navItems.map((item) => {
          const isActive =
            item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${isActive ? 'bg-white/10 text-white' : 'text-zinc-400 hover:text-white'}`}
            >
              {item.label}
            </Link>
          )
        })}
      </nav>
    </header>
  )
}

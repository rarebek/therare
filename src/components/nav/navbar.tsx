'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Braces, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { navItems } from '@/data/navigation'

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="flex justify-between items-center mb-20 relative">
      <Link href="/" className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
          <Braces size={14} className="text-zinc-400" />
        </div>
        <span className="text-xl tracking-wide text-white italic">therare.</span>
      </Link>

      {/* desktop */}
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

      {/* mobile toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-zinc-400 hover:text-white transition-colors p-2"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, filter: 'blur(6px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(6px)' }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full right-0 mt-4 md:hidden bg-white/[0.03] border border-white/[0.05] rounded-2xl p-3 min-w-[160px] z-50 backdrop-blur-xl"
          >
            {navItems.map((item) => {
              const isActive =
                item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-2.5 rounded-xl text-xs font-medium transition-colors ${isActive ? 'bg-white/10 text-white' : 'text-zinc-400 hover:text-white'}`}
                >
                  {item.label}
                </Link>
              )
            })}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

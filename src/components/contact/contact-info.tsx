'use client'

import { Copy, Check } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'motion/react'

const contacts = [
  {
    label: 'Email',
    value: 'nodirbekgolang@gmail.com',
    href: 'mailto:nodirbekgolang@gmail.com',
    copyable: true,
  },
  {
    label: 'GitHub',
    value: 'rarebek',
    href: 'https://github.com/rarebek',
  },
  {
    label: 'Telegram',
    value: '@alwaysgolang',
    href: 'https://t.me/alwaysgolang',
  },
  {
    label: 'Location',
    value: 'Tashkent, Uzbekistan',
  },
]

export default function ContactInfo() {
  const [copied, setCopied] = useState(false)

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-12 flex-1">
      <div className="md:col-span-7 space-y-8">
        <div className="space-y-4">
          <h2 className="text-5xl md:text-7xl text-white leading-[1.05] tracking-tight">
            Get in <span className="italic text-zinc-400">touch</span>.
          </h2>
          <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed max-w-md">
            Reach out through any of these channels. I usually respond within a day.
          </p>
        </div>

      </div>

      <div className="md:col-span-5 space-y-3">
        {contacts.map((contact, i) => {
          const isLink = !!contact.href

          const content = (
            <motion.div
              key={contact.label}
              initial={{ opacity: 0, filter: 'blur(6px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className={`group bg-white/[0.03] border border-white/[0.05] rounded-2xl p-5 flex items-center justify-between transition-all duration-300 ${isLink ? 'hover:bg-white/[0.06] hover:border-white/[0.15] cursor-pointer' : ''}`}
            >
              <div className="space-y-0.5">
                <span className="text-[10px] uppercase tracking-widest text-zinc-600">{contact.label}</span>
                <p className="text-sm text-zinc-300 group-hover:text-white transition-colors">{contact.value}</p>
              </div>

              {contact.copyable && (
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    handleCopy(contact.value)
                  }}
                  className="text-zinc-600 hover:text-zinc-300 transition-colors p-2 rounded-lg hover:bg-white/[0.05]"
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                </button>
              )}
            </motion.div>
          )

          if (isLink) {
            return (
              <a key={contact.label} href={contact.href} target="_blank" rel="noopener noreferrer" className="block">
                {content}
              </a>
            )
          }

          return content
        })}
      </div>
    </div>
  )
}

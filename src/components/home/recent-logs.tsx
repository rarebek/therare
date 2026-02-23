'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'
import type { Post } from '@/lib/posts'

const ease = [0.16, 1, 0.3, 1] as const

interface RecentLogsProps {
  posts: Post[]
}

export default function RecentLogs({ posts }: RecentLogsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(6px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ delay: 0.35, duration: 0.7, ease }}
      className="space-y-5 font-reading"
    >
      <div className="flex items-center gap-2 text-xs text-zinc-500 uppercase tracking-widest">
        <span className="w-1 h-1 rounded-full bg-zinc-500" />
        <span>Recent Logs</span>
      </div>
      <div className="space-y-3">
        {posts.map((post, i) => (
          <Link key={post.slug} href={`/log/${post.slug}`} className="group flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-300">
            <span className="text-sm text-zinc-300 group-hover:text-white transition-colors font-medium">{post.title}</span>
            <div className="flex items-center gap-3">
              <time className="text-[11px] text-zinc-500">{post.date}</time>
              <ArrowUpRight size={14} className="text-zinc-600 group-hover:text-white transition-colors" />
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  )
}

'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import type { Post } from '@/lib/posts'

interface PostListProps {
  posts: Post[]
}

export default function PostList({ posts }: PostListProps) {
  return (
    <div className="max-w-4xl mx-auto w-full font-reading space-y-16">
      <div className="space-y-4">
        <h2 className="text-5xl md:text-6xl text-white tracking-tight">Technical <span className="italic text-zinc-500">Logs</span></h2>
        <p className="text-zinc-400 font-light max-w-xl">A collection of thoughts on software architecture, minimalist systems, and the pursuit of digital permanence.</p>
      </div>

      <div className="space-y-12">
        {posts.map((post, i) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, filter: 'blur(6px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href={`/log/${post.slug}`}
              className="group block p-6 -mx-6 rounded-2xl hover:bg-white/[0.02] transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">{post.category}</span>
                    <span className="w-1 h-1 rounded-full bg-zinc-800" />
                    <time className="text-[10px] text-zinc-600">{post.date}</time>
                    <span className="w-1 h-1 rounded-full bg-zinc-800" />
                    <span className="text-[10px] text-zinc-600">{post.readingTime} min read</span>
                  </div>
                  <h3 className="text-3xl text-zinc-300 group-hover:text-white transition-colors duration-500 leading-tight">
                    {post.title}
                  </h3>
                </div>
                <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <ArrowUpRight size={20} className="text-zinc-500" />
                </div>
              </div>
              <p className="text-zinc-500 font-light leading-relaxed max-w-2xl group-hover:text-zinc-400 transition-colors duration-500">
                {post.excerpt}
              </p>
              <div className="mt-8 h-px w-full bg-white/5" />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

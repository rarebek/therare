'use client'

import { motion } from 'motion/react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Github } from 'lucide-react'
import type { Post } from '@/lib/posts'

interface PostDetailProps {
  post: Post
  onBack: () => void
}

export default function PostDetail({ post, onBack }: PostDetailProps) {
  return (
    <motion.div
      key="detail"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="space-y-12 font-reading"
    >
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-zinc-500 hover:text-white transition-colors group"
      >
        <span className="group-hover:-translate-x-1 transition-transform">&#8592;</span>
        <span>Back to logs</span>
      </button>

      <article className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">{post.category}</span>
          <span className="w-1 h-1 rounded-full bg-zinc-800" />
          <time className="text-[10px] text-zinc-600">{post.date}</time>
        </div>
        <h2 className="text-5xl md:text-6xl text-white tracking-tight leading-tight">
          {post.title}
        </h2>
      </article>

      <div className="prose-custom text-zinc-400 leading-relaxed text-lg">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </div>

      <div className="pt-12 border-t border-white/5 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="text-[10px] text-zinc-600 uppercase tracking-widest">Share</span>
          <div className="flex gap-3">
            <Github size={16} className="text-zinc-500 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
        <button
          onClick={onBack}
          className="bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.06] px-6 py-2 rounded-full text-xs text-white transition-all"
        >
          Finish Reading
        </button>
      </div>
    </motion.div>
  )
}

'use client'

import { useState } from 'react'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Link2, Check } from 'lucide-react'
import type { Post } from '@/lib/posts'

interface PostDetailProps {
  post: Post
}

export default function PostDetail({ post }: PostDetailProps) {
  const [copied, setCopied] = useState(false)

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="max-w-4xl mx-auto w-full font-reading space-y-12">
      <Link
        href="/log"
        className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-zinc-500 hover:text-white transition-colors group"
      >
        <span className="group-hover:-translate-x-1 transition-transform">&#8592;</span>
        <span>Back to logs</span>
      </Link>

      <article className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">{post.category}</span>
          <span className="w-1 h-1 rounded-full bg-zinc-800" />
          <time className="text-[10px] text-zinc-600">{post.date}</time>
          <span className="w-1 h-1 rounded-full bg-zinc-800" />
          <span className="text-[10px] text-zinc-600">{post.readingTime} min read</span>
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
        <button
          onClick={copyLink}
          className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-xs"
        >
          {copied ? <Check size={14} /> : <Link2 size={14} />}
          <span>{copied ? 'copied' : 'copy link'}</span>
        </button>
        <Link
          href="/log"
          className="bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.06] px-6 py-2 rounded-full text-xs text-white transition-all"
        >
          Back to logs
        </Link>
      </div>
    </div>
  )
}

'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { posts } from '@/data/posts'
import PostDetail from './post-detail'

export default function PostList() {
  const [selectedPost, setSelectedPost] = useState<null | number>(null)
  const [direction, setDirection] = useState(1)

  const openPost = useCallback((i: number) => {
    setDirection(1)
    setSelectedPost(i)
    window.history.pushState({ post: i }, '')
  }, [])

  const closePost = useCallback(() => {
    setDirection(-1)
    setSelectedPost(null)
  }, [])

  useEffect(() => {
    const onPopState = () => {
      if (selectedPost !== null) {
        setDirection(-1)
        setSelectedPost(null)
      }
    }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [selectedPost])

  const handleBack = () => {
    window.history.back()
  }

  const slideX = 20 * direction

  return (
    <div className="max-w-4xl mx-auto w-full font-reading">
      <AnimatePresence mode="wait" custom={direction}>
        {selectedPost === null ? (
          <motion.div
            key="list"
            initial={{ opacity: 0, x: -slideX }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -slideX }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-16"
          >
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl text-white tracking-tight">Technical <span className="italic text-zinc-500">Logs</span></h2>
              <p className="text-zinc-400 font-light max-w-xl">A collection of thoughts on software architecture, minimalist systems, and the pursuit of digital permanence.</p>
            </div>

            <div className="space-y-12">
              {posts.map((post, i) => (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, filter: 'blur(0px)' }}
                  transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => openPost(i)}
                  className="group cursor-pointer p-6 -mx-6 rounded-2xl hover:bg-white/[0.02] transition-all duration-500"
                >
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">{post.category}</span>
                        <span className="w-1 h-1 rounded-full bg-zinc-800" />
                        <time className="text-[10px] text-zinc-600">{post.date}</time>
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
                </motion.article>
              ))}
            </div>

            <div className="pt-8 flex justify-center">
              <button className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 hover:text-white transition-colors duration-300">
                Load Archive
              </button>
            </div>
          </motion.div>
        ) : (
          <PostDetail
            post={posts[selectedPost]}
            onBack={handleBack}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

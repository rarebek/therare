import type { Metadata } from 'next'
import { getPosts } from '@/lib/posts'
import PostList from '@/components/log/post-list'
import PageTransition from '@/components/shared/page-transition'

export const metadata: Metadata = {
  title: 'Log',
  description: 'Notes on systems, tools, and the philosophy of building things that last.',
}

export default async function LogPage() {
  const posts = await getPosts()

  return (
    <PageTransition>
      <PostList posts={posts} />
    </PageTransition>
  )
}

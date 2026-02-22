import type { Metadata } from 'next'
import PostList from '@/components/log/post-list'
import PageTransition from '@/components/shared/page-transition'

export const metadata: Metadata = {
  title: 'Log',
  description: 'Notes on systems, tools, and the philosophy of building things that last.',
}

export default function LogPage() {
  return (
    <PageTransition>
      <PostList />
    </PageTransition>
  )
}

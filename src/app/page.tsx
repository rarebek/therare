import { getPosts } from '@/lib/posts'
import Hero from '@/components/home/hero'
import WorkspaceCard from '@/components/home/workspace-card'
import RecentLogs from '@/components/home/recent-logs'
import PageTransition from '@/components/shared/page-transition'

export default async function IndexPage() {
  const posts = await getPosts()
  const recentPosts = posts.slice(0, 3)

  return (
    <PageTransition>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-12 flex-1">
        <div className="md:col-span-7">
          <Hero />
        </div>
        <div className="md:col-span-5 space-y-12">
          <WorkspaceCard />
          <RecentLogs posts={recentPosts} />
        </div>
      </div>
    </PageTransition>
  )
}

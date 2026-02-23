import { notFound } from 'next/navigation'
import { getPost, getPosts } from '@/lib/posts'
import PostDetail from '@/components/log/post-detail'
import PageTransition from '@/components/shared/page-transition'

interface PostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) notFound()

  return (
    <PageTransition>
      <PostDetail post={post} />
    </PageTransition>
  )
}

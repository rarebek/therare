import matter from 'gray-matter'

export interface Post {
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  content: string
}

const REPO = process.env.GITHUB_REPO || 'rarebek/therare'
const BRANCH = process.env.GITHUB_BRANCH || 'main'
const POSTS_DIR = 'content/posts'

const headers: HeadersInit = process.env.GITHUB_TOKEN
  ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
  : {}

export async function getPosts(): Promise<Post[]> {
  const res = await fetch(
    `https://api.github.com/repos/${REPO}/contents/${POSTS_DIR}?ref=${BRANCH}`,
    { headers, next: { revalidate: 60 } },
  )

  if (!res.ok) return []

  const files: { name: string, download_url: string }[] = await res.json()
  const mdFiles = files.filter(f => f.name.endsWith('.md'))

  const posts = await Promise.all(
    mdFiles.map(async (file) => {
      const raw = await fetch(file.download_url, { next: { revalidate: 60 } })
      const text = await raw.text()
      const { data, content } = matter(text)

      return {
        slug: file.name.replace('.md', ''),
        title: data.title || file.name.replace('.md', ''),
        date: data.date || '',
        category: data.category || '',
        excerpt: data.excerpt || '',
        content,
      } as Post
    }),
  )

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getPost(slug: string): Promise<Post | null> {
  const posts = await getPosts()
  return posts.find(p => p.slug === slug) || null
}

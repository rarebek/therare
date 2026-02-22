import type { Metadata } from 'next'
import UnderConstruction from '@/components/shared/under-construction'
import PageTransition from '@/components/shared/page-transition'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A collection of projects and experiments.',
}

export default function ProjectsPage() {
  return (
    <PageTransition>
      <UnderConstruction title="Projects" />
    </PageTransition>
  )
}

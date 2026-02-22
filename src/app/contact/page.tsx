import type { Metadata } from 'next'
import UnderConstruction from '@/components/shared/under-construction'
import PageTransition from '@/components/shared/page-transition'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch.',
}

export default function ContactPage() {
  return (
    <PageTransition>
      <UnderConstruction title="Contact" />
    </PageTransition>
  )
}

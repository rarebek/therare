import type { Metadata } from 'next'
import KeyboardTimeline from '@/components/keyboards/keyboard-timeline'
import PageTransition from '@/components/shared/page-transition'

export const metadata: Metadata = {
  title: 'Keyboards',
  description: 'A timeline of keyboards — from first click to current clack.',
}

export default function KeyboardsPage() {
  return (
    <PageTransition>
      <KeyboardTimeline />
    </PageTransition>
  )
}

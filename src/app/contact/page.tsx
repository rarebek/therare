import type { Metadata } from 'next'
import ContactInfo from '@/components/contact/contact-info'
import PageTransition from '@/components/shared/page-transition'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch.',
}

export default function ContactPage() {
  return (
    <PageTransition>
      <ContactInfo />
    </PageTransition>
  )
}

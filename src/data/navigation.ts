export interface NavItem {
  label: string
  href: string
}

export const navItems: NavItem[] = [
  { label: 'Index', href: '/' },
  { label: 'Log', href: '/log' },
  { label: 'Projects', href: '/projects' },
  { label: 'Keyboards', href: '/keyboards' },
  { label: 'Contact', href: '/contact' },
]

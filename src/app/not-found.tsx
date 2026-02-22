import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-64 space-y-6 text-center">
      <span className="text-7xl text-white tracking-tight">404</span>
      <p className="text-sm text-zinc-500 font-light">this page doesn&apos;t exist.</p>
      <Link
        href="/"
        className="text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
      >
        back to index
      </Link>
    </div>
  )
}

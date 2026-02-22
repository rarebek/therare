import type { ReactNode } from 'react'

interface GlassPanelProps {
  children: ReactNode
}

export default function GlassPanel({ children }: GlassPanelProps) {
  return (
    <div className="glass-panel w-full max-w-6xl rounded-[2rem] p-8 md:p-16 relative z-10 overflow-hidden min-h-[600px] flex flex-col">
      {children}
    </div>
  )
}

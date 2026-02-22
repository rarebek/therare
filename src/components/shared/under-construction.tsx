import { Terminal } from 'lucide-react'

interface UnderConstructionProps {
  title: string
}

export default function UnderConstruction({ title }: UnderConstructionProps) {
  return (
    <div className="flex flex-col items-center justify-center h-64 space-y-4 text-center">
      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-zinc-600">
        <Terminal size={20} />
      </div>
      <h2 className="text-2xl text-white italic">{title}</h2>
      <p className="text-zinc-500 font-light text-sm">This section is currently under construction.</p>
    </div>
  )
}

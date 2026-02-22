import { Terminal } from 'lucide-react'

export default function WorkspaceCard() {
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2 text-xs text-zinc-500 uppercase tracking-widest">
        <Terminal size={12} />
        <span>Workspace</span>
      </div>
      <div className="group bg-white/[0.03] border border-white/[0.05] hover:border-white/[0.12] hover:bg-white/[0.06] transition-all duration-500 rounded-2xl p-6 relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="flex justify-between items-center text-sm">
            <span className="text-zinc-400">Environment</span>
            <span className="text-zinc-300 group-hover:text-white transition-colors">Windows 11</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-zinc-400">Editor</span>
            <span className="text-zinc-300 group-hover:text-white transition-colors">Zed</span>
          </div>
          <div className="h-px w-full bg-white/5 my-4 group-hover:bg-white/10 transition-colors" />
          <div className="flex justify-between items-center text-sm pt-1">
            <span className="text-zinc-400">Currently</span>
            <span className="text-zinc-300 group-hover:text-white transition-colors">learning Rust</span>
          </div>
        </div>
      </div>
    </div>
  )
}

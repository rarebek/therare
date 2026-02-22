import { Keyboard } from 'lucide-react'
import { keyboards } from '@/data/keyboards'

export default function KeyboardTimeline() {
  return (
    <div className="max-w-3xl mx-auto space-y-12">
      <div className="space-y-4 text-center">
        <h2 className="text-4xl md:text-5xl text-white tracking-tight">Hardware <span className="italic text-zinc-500">Log</span></h2>
        <p className="text-zinc-400 font-light max-w-lg mx-auto">A chronological record of my mechanical keyboards and switches, from first to latest.</p>
      </div>

      <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-white/10">
        {keyboards.map((keeb, i) => (
          <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#030303] text-zinc-500 group-hover:text-white group-hover:border-white/30 transition-colors shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_8px_#030303]">
              <Keyboard size={16} />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-300 p-6 rounded-2xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] uppercase tracking-widest text-zinc-500">{keeb.status}</span>
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 text-zinc-400 border border-white/5">{keeb.switch}</span>
              </div>
              <h3 className="text-lg font-medium text-white mb-2">{keeb.name}</h3>
              <p className="text-sm text-zinc-400 font-light leading-relaxed">{keeb.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

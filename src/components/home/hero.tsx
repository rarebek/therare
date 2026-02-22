import Link from 'next/link'
import { Mail, Github, Send } from 'lucide-react'

export default function Hero() {
  return (
    <div className="space-y-10">
      <h1 className="text-5xl md:text-7xl text-white leading-[1.05] tracking-tight">
        Building <span className="italic text-zinc-400">backend</span> <br /> systems.
      </h1>
      <div className="space-y-6 text-sm md:text-base text-zinc-400 leading-relaxed max-w-md font-light">
        <p>
          Backend engineer. I design services, optimize data layers, and keep distributed systems running under pressure.
        </p>
        <p>
          Currently working on large-scale streaming infrastructure at <a href="https://uzdplus.uz" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white underline underline-offset-4 decoration-zinc-600 hover:decoration-zinc-400 transition-colors">Uzdigital</a>, keeping things stable under heavy traffic.
        </p>
      </div>

      <div className="flex items-center gap-6 pt-4">
        <Link href="/contact" className="bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-300 flex items-center gap-2 px-6 py-3 rounded-full text-sm text-white hover:scale-105">
          <Mail size={14} />
          <span>Get in touch</span>
        </Link>
        <div className="flex items-center gap-4 px-2">
          <a href="https://github.com/rarebek" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors"><Github size={20} /></a>
          <a href="https://t.me/alwaysgolang" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors"><Send size={20} /></a>
        </div>
      </div>
    </div>
  )
}

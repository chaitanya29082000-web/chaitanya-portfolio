export default function CodeVisual() {
  return (
    <div className="relative" aria-hidden="true">
      {/* Multi-layer glow behind */}
      <div className="absolute -inset-12 bg-gradient-to-br from-accent/10 via-violet/8 to-cyan/5 rounded-3xl blur-3xl" />
      <div className="absolute -inset-6 bg-gradient-to-tr from-violet/5 via-transparent to-accent/5 rounded-3xl blur-2xl" />

      {/* Code editor window */}
      <div className="relative bg-[#0F172A] border border-slate-700/50 rounded-2xl shadow-2xl shadow-accent/10 overflow-hidden w-full max-w-lg">
        {/* Window header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/80 border-b border-slate-700/50">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
          </div>
          <span className="ml-3 text-xs text-slate-400 font-mono">developer.js</span>
        </div>

        {/* Code content */}
        <div className="p-6 font-mono text-[13px] leading-[1.8]">
          <div>
            <span className="text-[#C084FC]">const</span>
            <span className="text-slate-200"> developer </span>
            <span className="text-slate-500">= </span>
            <span className="text-slate-500">{'{'}</span>
          </div>
          <div className="pl-6">
            <span className="text-[#67E8F9]">name</span>
            <span className="text-slate-500">: </span>
            <span className="text-[#86EFAC]">"Chaitanya"</span>
            <span className="text-slate-500">,</span>
          </div>
          <div className="pl-6">
            <span className="text-[#67E8F9]">role</span>
            <span className="text-slate-500">: </span>
            <span className="text-[#86EFAC]">"CS Student"</span>
            <span className="text-slate-500">,</span>
          </div>
          <div className="pl-6">
            <span className="text-[#67E8F9]">skills</span>
            <span className="text-slate-500">: </span>
            <span className="text-slate-500">[</span>
          </div>
          <div className="pl-10">
            <span className="text-[#86EFAC]">"C++"</span>
            <span className="text-slate-500">, </span>
            <span className="text-[#86EFAC]">"Python"</span>
            <span className="text-slate-500">, </span>
            <span className="text-[#86EFAC]">"React"</span>
          </div>
          <div className="pl-6">
            <span className="text-slate-500">]</span>
            <span className="text-slate-500">,</span>
          </div>
          <div className="pl-6">
            <span className="text-[#67E8F9]">goal</span>
            <span className="text-slate-500">: </span>
            <span className="text-[#86EFAC]">"Internship Ready"</span>
          </div>
          <div>
            <span className="text-slate-500">{'}'}</span>
          </div>
        </div>
      </div>

      {/* Floating </> icon */}
      <div className="absolute -top-4 -right-4 w-12 h-12 bg-white border border-accent/20 rounded-xl shadow-lg shadow-accent/15 flex items-center justify-center animate-[float_4s_ease-in-out_infinite]">
        <span className="text-gradient-blue font-mono text-sm font-bold">&lt;/&gt;</span>
      </div>

      {/* Decorative floating shapes */}
      <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-accent/10 to-violet/10 rounded-2xl blur-sm" />
      <div className="absolute top-1/2 -right-8 w-3 h-3 bg-cyan/30 rounded-full" />
      <div className="absolute -bottom-2 right-1/4 w-2 h-2 bg-violet/25 rounded-full" />
    </div>
  )
}

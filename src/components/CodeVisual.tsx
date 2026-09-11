export default function CodeVisual() {
  return (
    <div className="relative" aria-hidden="true">
      {/* Glow behind */}
      <div className="absolute -inset-8 bg-gradient-to-br from-accent/15 via-lavender/10 to-transparent rounded-3xl blur-2xl" />

      {/* Code editor window */}
      <div className="relative bg-white border border-border rounded-2xl shadow-2xl shadow-accent/5 overflow-hidden w-full max-w-md">
        {/* Window header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-bg-secondary/50 border-b border-border">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-400/80" />
            <span className="w-3 h-3 rounded-full bg-amber-400/80" />
            <span className="w-3 h-3 rounded-full bg-green-400/80" />
          </div>
          <span className="ml-3 text-xs text-text-muted font-mono">developer.js</span>
        </div>

        {/* Code content */}
        <div className="p-5 font-mono text-sm leading-relaxed">
          <div>
            <span className="text-accent">const</span>
            <span className="text-text-primary"> developer </span>
            <span className="text-text-muted">= </span>
            <span className="text-text-muted">{'{'}</span>
          </div>
          <div className="pl-6">
            <span className="text-lavender">name</span>
            <span className="text-text-muted">: </span>
            <span className="text-green-600">"Chaitanya"</span>
            <span className="text-text-muted">,</span>
          </div>
          <div className="pl-6">
            <span className="text-lavender">skills</span>
            <span className="text-text-muted">: </span>
            <span className="text-text-muted">[</span>
          </div>
          <div className="pl-10">
            <span className="text-green-600">"Web"</span>
            <span className="text-text-muted">, </span>
            <span className="text-green-600">"AI"</span>
            <span className="text-text-muted">, </span>
            <span className="text-green-600">"Problem Solving"</span>
          </div>
          <div className="pl-6">
            <span className="text-text-muted">]</span>
            <span className="text-text-muted">,</span>
          </div>
          <div className="pl-6">
            <span className="text-lavender">goal</span>
            <span className="text-text-muted">: </span>
            <span className="text-green-600">"Create a positive impact"</span>
          </div>
          <div>
            <span className="text-text-muted">{'}'}</span>
          </div>
        </div>
      </div>

      {/* Floating </> icon */}
      <div className="absolute -top-3 -right-3 w-10 h-10 bg-white border border-border rounded-xl shadow-lg flex items-center justify-center animate-[float_4s_ease-in-out_infinite]">
        <span className="text-accent font-mono text-sm font-bold">&lt;/&gt;</span>
      </div>
    </div>
  )
}

import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { X, ExternalLink, Github, ChevronRight } from 'lucide-react'
import type { Project } from '../data/projects'

export default function ProjectModal({ project: p, onClose }: { project: Project; onClose: () => void }) {
  const box = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const [shown, setShown] = useState(reduce ? p.workflow.length : 0)
  const [run, setRun] = useState(0)

  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    box.current?.focus()
    const key = (e: KeyboardEvent) => {
      if (e.key === 'Escape') return onClose()
      if (e.key !== 'Tab' || !box.current) return
      const f = box.current.querySelectorAll<HTMLElement>('a[href],button:not([disabled])')
      if (!f.length) return
      const first = f[0], last = f[f.length - 1]
      if (e.shiftKey && (document.activeElement === first || document.activeElement === box.current)) { e.preventDefault(); last.focus() }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
    }
    document.addEventListener('keydown', key)
    return () => { document.removeEventListener('keydown', key); document.body.style.overflow = overflow; prev?.focus() }
  }, [onClose])

  useEffect(() => {
    if (reduce) { setShown(p.workflow.length); return }
    setShown(0)
    const id = setInterval(() => setShown((s) => (s >= p.workflow.length ? (clearInterval(id), s) : s + 1)), 400)
    return () => clearInterval(id)
  }, [run, p, reduce])

  const H = ({ children }: { children: string }) => <h3 className="label mb-2 mt-6">{children}</h3>
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-6" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <motion.div ref={box} role="dialog" aria-modal="true" aria-labelledby="pm-title" tabIndex={-1}
        initial={{ opacity: 0, y: reduce ? 0 : 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduce ? 0.01 : 0.3 }}
        className="glass max-h-[92vh] w-full max-w-3xl overflow-y-auto !bg-[#0b0f19] p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div><h2 id="pm-title" className="h2 !text-2xl sm:!text-3xl">{p.title}</h2><p className="text-cyan">{p.subtitle}</p></div>
          <button onClick={onClose} aria-label="Close dialog" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg hover:bg-white/10"><X /></button>
        </div>
        <H>Overview</H><p className="text-muted">{p.description}</p>
        <H>Problem</H><p className="text-muted">{p.problem}</p>
        <H>Tech</H><ul className="flex flex-wrap gap-2">{p.tech.map((t) => <li key={t} className="chip">{t}</li>)}</ul>
        <div className="flex items-center justify-between"><H>Workflow</H>{!reduce && <button className="text-xs text-muted underline" onClick={() => setRun((n) => n + 1)}>Replay</button>}</div>
        <ol className="flex flex-wrap items-center gap-2">
          {p.workflow.map((s, i) => (
            <li key={s} className={`flex items-center gap-2 transition duration-300 ${i < shown ? 'opacity-100' : 'opacity-15'}`}>
              <span className="rounded-lg border border-cyan/40 bg-cyan/10 px-3 py-1.5 text-sm">{s}</span>
              {i < p.workflow.length - 1 && <ChevronRight size={16} className="text-violet" aria-hidden />}
            </li>
          ))}
        </ol>
        <H>Features</H>
        <ul className="grid gap-1 text-sm text-muted sm:grid-cols-2">{p.features.map((f) => <li key={f}>• {f}</li>)}</ul>
        {p.results.length > 0 && (<>
          <H>Results</H>
          <dl className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {p.results.map((r) => <div key={r.label} className="rounded-xl border border-white/10 p-3"><dt className="text-xs text-muted">{r.label}</dt><dd className={r.value === 'see notebook' ? 'text-sm text-muted' : 'font-head text-xl text-cyan'}>{r.value}</dd></div>)}
          </dl>
          <p className="mt-2 text-xs text-muted">Accuracy alone is not a full picture; review precision, recall, F1 and the confusion matrix in the notebook.</p>
        </>)}
        <div className="mt-8 flex flex-wrap gap-3">
          {p.liveUrl && <a className="btn-primary" href={p.liveUrl} target="_blank" rel="noreferrer">Live Demo <ExternalLink size={14} aria-hidden /></a>}
          {p.githubUrl && <a className="btn-ghost" href={p.githubUrl} target="_blank" rel="noreferrer"><Github size={16} aria-hidden /> GitHub</a>}
        </div>
      </motion.div>
    </div>
  )
}

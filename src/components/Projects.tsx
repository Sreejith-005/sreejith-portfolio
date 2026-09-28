import { lazy, Suspense, useState } from 'react'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import { projects, type Project } from '../data/projects'
import Reveal, { Heading } from './Reveal'
import Visual from './Visuals'
const ProjectModal = lazy(() => import('./ProjectModal'))

export default function Projects() {
  const [sel, setSel] = useState<Project | null>(null)
  return (
    <div className="wrap">
      <Heading id="projects" label="Projects" title="Things I've built" />
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.08} className="h-full">
            <article className="glass group flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-cyan/60 hover:shadow-[0_0_30px_-8px_rgba(34,211,238,.45)]">
              <div className="h-48 overflow-hidden border-b border-white/[0.08]"><div className="h-full transition duration-500 group-hover:scale-[1.03]">{p.title === 'SreeAI PDF Chatbot' ? (
  <img
    src="/projects/pdf-chatbot.png"
    alt="SreeAI PDF Chatbot"
    className="h-full w-full object-cover"
  />
) : p.title === 'SreeAI Chatbot' ? (
  <img
    src="/projects/chatbot.png"
    alt="SreeAI Chatbot"
    className="h-full w-full object-cover"
  />
) : p.title === 'Customer Churn Prediction' ? (
  <img
    src="/projects/customer churn.png"
    alt="Customer Churn Prediction"
    className="h-full w-full object-cover"
  />
) : (
  <Visual category={p.category} />
)}</div></div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-head text-xl font-semibold">{p.title}</h3>
                <p className="mb-3 text-sm text-cyan">{p.subtitle}</p>
                <p className="mb-4 text-sm text-muted">{p.description}</p>
                <ul className="mb-5 flex flex-wrap gap-2">{p.tech.map((t) => <li key={t} className="chip transition group-hover:border-cyan/40 group-hover:text-cyan">{t}</li>)}</ul>
                <div className="mt-auto flex flex-wrap gap-2">
                  {p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noreferrer" className="btn-primary">Live Demo <ExternalLink size={14} aria-hidden /></a>}
                  <button type="button" onClick={() => setSel(p)} className="btn-ghost" aria-haspopup="dialog">Details <ArrowRight size={14} aria-hidden /></button>
                  {p.githubUrl && <a href={p.githubUrl} target="_blank" rel="noreferrer" className="btn-ghost" aria-label={`${p.title} on GitHub`}><Github size={16} aria-hidden /></a>}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      {sel && <Suspense fallback={null}><ProjectModal project={sel} onClose={() => setSel(null)} /></Suspense>}
    </div>
  )
}

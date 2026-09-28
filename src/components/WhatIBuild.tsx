import { Brain, Sparkles, FileText, BarChart3 } from 'lucide-react'
import { profile } from '../data/profile'
import Reveal, { Heading } from './Reveal'
const icons = { brain: Brain, sparkles: Sparkles, file: FileText, chart: BarChart3 }
export default function WhatIBuild() {
  return (
    <div className="wrap">
      <Heading id="what" label="What I Build" title="Focus areas" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {profile.whatIBuild.map((w, i) => {
          const I = icons[w.icon as keyof typeof icons]
          return (
            <Reveal key={w.title} delay={i * 0.07}>
              <div className="glass h-full p-5"><I className="mb-3 text-cyan" aria-hidden /><h3 className="font-head text-lg font-semibold">{w.title}</h3><p className="mt-1 text-sm text-muted">{w.text}</p></div>
            </Reveal>
          )
        })}
      </div>
    </div>
  )
}
